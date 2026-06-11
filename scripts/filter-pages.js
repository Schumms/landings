/**
 * filter-pages.js — Pre-build Script für Schumm & Rösch Landingpages
 * 
 * Entfernt Entwürfe (published: false) vor dem Build auf main-Branch.
 * Auf dev-Branch werden alle Seiten gebaut.
 * 
 * Usage: node scripts/filter-pages.js
 */

import fs from 'fs';
import path from 'path';

const PAGES_DIR = 'src/content/pages';
const DRAFTS_DIR = 'src/content/pages/.drafts';
const BRANCH = process.env.COOLIFY_BRANCH || 'main';

console.log(`[filter-pages] Branch: ${BRANCH}`);

// Bei dev: nichts tun
if (BRANCH !== 'main') {
  console.log('[filter-pages] Dev-Branch — alle Seiten werden gebaut');
  process.exit(0);
}

// Bei main: Entwürfe entfernen
console.log('[filter-pages] Main-Branch — entferne Entwürfe...');

// Drafts-Ordner erstellen
if (!fs.existsSync(DRAFTS_DIR)) {
  fs.mkdirSync(DRAFTS_DIR, { recursive: true });
}

const files = fs.readdirSync(PAGES_DIR)
  .filter(f => f.endsWith('.md') && !f.startsWith('_'));

let removed = 0;

for (const file of files) {
  const filePath = path.join(PAGES_DIR, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Prüfe published: false im Frontmatter
  const frontmatter = content.split('---')[1];
  if (frontmatter && frontmatter.includes('published: false')) {
    fs.renameSync(filePath, path.join(DRAFTS_DIR, file));
    console.log(`  → Entwurf entfernt: ${file}`);
    removed++;
  }
}

console.log(`[filter-pages] ${removed} Entwürfe entfernt`);
console.log('[filter-pages] Astro Build startet...');