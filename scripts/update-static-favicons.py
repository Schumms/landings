#!/usr/bin/env python3
"""Update favicon links in all static HTML pages."""
import os, re

OLD = '<link rel="icon" type="image/png" href="/favicon.png">\n<link rel="apple-touch-icon" href="/favicon.png">'
NEW = '<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">\n<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96.png">\n<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png">\n<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n<link rel="icon" type="image/png" href="/favicon.png">'

# Also handle single-quote variants
OLD_SQ = "<link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\">\n<link rel=\"apple-touch-icon\" href=\"/favicon.png\">"

public_dir = 'public'
updated = []
skipped = []

for slug in os.listdir(public_dir):
    index_path = os.path.join(public_dir, slug, 'index.html')
    if not os.path.isfile(index_path):
        continue
    
    with open(index_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if OLD in content:
        content = content.replace(OLD, NEW)
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        updated.append(slug)
    elif NEW in content:
        skipped.append(f'{slug} (already updated)')
    else:
        # Check if favicon links exist in different format
        favicon_lines = [l for l in content.split('\n') if 'favicon' in l.lower() or 'rel="icon"' in l or 'rel="apple-touch' in l]
        if favicon_lines:
            skipped.append(f'{slug} (different format: {favicon_lines})')
        else:
            skipped.append(f'{slug} (no favicon found)')

print(f"Updated ({len(updated)}):")
for s in updated:
    print(f"  ✓ {s}")
print(f"\nSkipped ({len(skipped)}):")
for s in skipped:
    print(f"  - {s}")
