#!/usr/bin/env python3
"""Generate favicons with solid black background from transparent webclip source."""
import struct, zlib

def read_png(path):
    with open(path, 'rb') as f:
        data = f.read()
    pos = 8
    width = height = 0
    idat = b''
    while pos < len(data):
        length = struct.unpack('>I', data[pos:pos+4])[0]
        chunk_type = data[pos+4:pos+8]
        if chunk_type == b'IHDR':
            width = struct.unpack('>I', data[pos+8:pos+12])[0]
            height = struct.unpack('>I', data[pos+12:pos+16])[0]
        elif chunk_type == b'IDAT':
            idat += data[pos+8:pos+8+length]
        pos += 12 + length
    
    raw = zlib.decompress(idat)
    bpp = 4  # RGBA
    stride = width * bpp + 1
    
    pixels = []
    for y in range(height):
        row_start = y * stride + 1
        row = []
        for x in range(width):
            offset = row_start + x * bpp
            r, g, b, a = raw[offset], raw[offset+1], raw[offset+2], raw[offset+3]
            row.append((r, g, b, a))
        pixels.append(row)
    
    return width, height, pixels

def write_png(path, width, height, pixels):
    def make_chunk(chunk_type, data):
        chunk = chunk_type + data
        crc = struct.pack('>I', zlib.crc32(chunk) & 0xFFFFFFFF)
        return struct.pack('>I', len(data)) + chunk + crc
    
    raw = b''
    for y in range(height):
        raw += b'\x00'
        for x in range(width):
            r, g, b, a = pixels[y][x]
            if a < 255:
                alpha = a / 255.0
                r = int(r * alpha)
                g = int(g * alpha)
                b = int(b * alpha)
                a = 255
            raw += struct.pack('BBBB', r, g, b, a)
    
    compressed = zlib.compress(raw)
    
    with open(path, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n')
        ihdr_data = struct.pack('>IIBB', width, height, 8, 6)
        f.write(make_chunk(b'IHDR', ihdr_data))
        f.write(make_chunk(b'IDAT', compressed))
        f.write(make_chunk(b'IEND', b''))

def downsample(pixels, src_w, src_h, dst_w, dst_h):
    result = []
    for y in range(dst_h):
        row = []
        for x in range(dst_w):
            sx = int(x * src_w / dst_w)
            sy = int(y * src_h / dst_h)
            row.append(pixels[sy][sx])
        result.append(row)
    return result

# Read source
w, h, pixels = read_png('public/images/pool/brand/webclip-schumm-roesch.png')
print(f"Source: {w}x{h}")

# Generate sizes
for size, name in [(192, 'favicon-192.png'), (32, 'favicon-32.png'), (96, 'favicon-96.png'), (180, 'apple-touch-icon.png')]:
    p = downsample(pixels, w, h, size, size)
    write_png(f'public/{name}', size, size, p)
    print(f"Written: public/{name} ({size}x{size})")

# Overwrite main favicon
p32 = downsample(pixels, w, h, 32, 32)
write_png('public/favicon.png', 32, 32, p32)
print("Updated: public/favicon.png (32x32, solid black bg)")

print("\nDone - all favicons have solid black background + white S&R")
