/**
 * filter-pages.js — Pre-build Script für Schumm & Rösch Landingpages
 * 
 * Filtert Entwürfe vor dem Build auf main-Branch aus.
 * Ersetzt auf main-Branch die Startseite mit einem Redirect.
 * Auf dev-Branch werden alle Seiten gebaut.
 * 
 * Usage: node scripts/filter-pages.js
 * Wird automatisch vor 'astro build' ausgeführt (siehe package.json)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src', 'content', 'pages');
const DRAFTS_DIR = path.join(PAGES_DIR, '.drafts');
const PUBLIC_DIR = path.join(ROOT, 'public');

// Branch ermitteln
const BRANCH = process.env.COOLIFY_BRANCH || 
               process.env.GITHUB_REF_NAME || 
               process.env.BRANCH || 
               'main';

console.log(`[filter-pages] Branch: ${BRANCH}`);

// ── MAIN: Entwürfe entfernen + Startseite als Redirect markieren ──
if (BRANCH === 'main') {
  console.log('[filter-pages] Main-Branch — bereite Live-Build vor...');
  
  // Prüfe ob Pages-Verzeichnis existiert
  if (!fs.existsSync(PAGES_DIR)) {
    console.error('[filter-pages] FEHLER: Pages-Verzeichnis nicht gefunden');
    process.exit(1);
  }
  
  // Drafts-Ordner erstellen
  if (!fs.existsSync(DRAFTS_DIR)) {
    fs.mkdirSync(DRAFTS_DIR, { recursive: true });
  }
  
  // Alle Markdown-Dateien finden (außer Templates mit _ Prefix)
  const files = fs.readdirSync(PAGES_DIR)
    .filter(f => f.endsWith('.md') && !f.startsWith('_'));
  
  let removed = 0;
  let kept = 0;
  
  for (const file of files) {
    const filePath = path.join(PAGES_DIR, file);
    
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Prüfe published: false im Frontmatter
      const match = content.match(/^---\n([\s\S]*?)\n---/);
      if (!match) {
        console.warn(`[filter-pages] WARNUNG: Kein Frontmatter in ${file}`);
        kept++;
        continue;
      }
      
      const frontmatter = match[1];
      const isDraft = frontmatter.includes('published: false') || 
                      frontmatter.includes('published:\n  false');
      
      if (isDraft) {
        fs.renameSync(filePath, path.join(DRAFTS_DIR, file));
        console.log(`  → Entwurf entfernt: ${file}`);
        removed++;
      } else {
        kept++;
      }
    } catch (err) {
      console.error(`[filter-pages] FEHLER bei ${file}: ${err.message}`);
      process.exit(1);
    }
  }
  
  console.log(`[filter-pages] ${removed} Entwürfe entfernt, ${kept} Pages behalten`);
  
  // Redirect-Datei erstellen (wird nach dem Build nach dist/index.html kopiert)
  const redirectHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=https://schumms.com">
  <title>Schumm &amp; Rösch</title>
  <link rel="canonical" href="https://schumms.com/">
  <meta name="robots" content="noindex">
</head>
<body>
  <p>Weiterleitung zu <a href="https://schumms.com">schumms.com</a>...</p>
</body>
</html>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, '_redirect.html'), redirectHtml);
  console.log('[filter-pages] Redirect-Seite erstellt');
}

// ── DEV: Nichts tun ──
else {
  console.log('[filter-pages] Dev-Branch — alle Seiten werden gebaut');
}

console.log('[filter-pages] Astro Build startet...');