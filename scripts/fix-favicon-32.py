#!/usr/bin/env python3
"""Fix 32x32 favicon using original source with solid black background."""
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
    bpp = 4
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

def count_colors(path):
    w, h, px = read_png(path)
    white = black = other = 0
    for row in px:
        for r,g,b,a in row:
            if r > 200 and g > 200 and b > 200:
                white += 1
            elif r < 50 and g < 50 and b < 50:
                black += 1
            else:
                other += 1
    print(f'{path} ({w}x{h}): white={white}, black={black}, other={other}')

# Fix: Use original 32x32 favicon for browser tab
w32, h32, p32 = read_png('public/images/pool/brand/favicon-schumm-roesch.png')
write_png('public/favicon-32.png', 32, 32, p32)
write_png('public/favicon.png', 32, 32, p32)
print("Fixed 32x32: using original favicon with solid black bg")

count_colors('public/favicon.png')
count_colors('public/favicon-32.png')
count_colors('public/favicon-192.png')
count_colors('public/apple-touch-icon.png')
