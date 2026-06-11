/**
 * restore-pages.js — Post-build Script für Schumm & Rösch Landingpages
 * 
 * Stellt Entwürfe aus .drafts/ zurück nach src/content/pages/.
 * Wird nach dem Astro Build ausgeführt.
 * 
 * Usage: node scripts/restore-pages.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT, 'src', 'content', 'pages');
const DRAFTS_DIR = path.join(PAGES_DIR, '.drafts');

// Prüfe ob Drafts-Verzeichnis existiert
if (!fs.existsSync(DRAFTS_DIR)) {
  console.log('[restore-pages] Keine Entwürfe zum Wiederherstellen');
  process.exit(0);
}

const drafts = fs.readdirSync(DRAFTS_DIR).filter(f => f.endsWith('.md'));

if (drafts.length === 0) {
  fs.rmdirSync(DRAFTS_DIR);
  console.log('[restore-pages] Keine Entwürfe zum Wiederherstellen');
  process.exit(0);
}

let restored = 0;

for (const file of drafts) {
  const draftPath = path.join(DRAFTS_DIR, file);
  const targetPath = path.join(PAGES_DIR, file);
  
  try {
    fs.renameSync(draftPath, targetPath);
    restored++;
  } catch (err) {
    console.error(`[restore-pages] FEHLER bei ${file}: ${err.message}`);
    process.exit(1);
  }
}

// Leeren Drafts-Ordner entfernen
try {
  fs.rmdirSync(DRAFTS_DIR);
} catch (err) {
  // Ignorieren, falls noch Dateien drin sind
}

console.log(`[restore-pages] ${restored} Entwürfe wiederhergestellt`);