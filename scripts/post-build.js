/**
 * post-build.js — Post-build Script für Schumm & Rösch Landingpages
 * 
 * Ersetzt auf main-Branch die index.html mit einer Redirect-Seite.
 * 
 * Usage: node scripts/post-build.js
 * Wird automatisch nach 'astro build' ausgeführt (siehe package.json)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT, 'dist');

// Branch ermitteln
const BRANCH = process.env.COOLIFY_BRANCH || 
               process.env.GITHUB_REF_NAME || 
               process.env.BRANCH || 
               'main';

console.log(`[post-build] Branch: ${BRANCH}`);

// Nur auf main: index.html ersetzen
if (BRANCH === 'main') {
  const indexPath = path.join(DIST_DIR, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.warn('[post-build] WARNUNG: dist/index.html nicht gefunden');
    process.exit(0);
  }
  
  const redirectHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=https://schumms.com">
  <title>Schumm &amp; Rösch</title>
  <link rel="canonical" href="https://schumms.com/">
  <meta name="robots" content="noindex">
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #f5f5f5;
      color: #333;
    }
    a {
      color: #827AFE;
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <p>Weiterleitung zu <a href="https://schumms.com">schumms.com</a>...</p>
</body>
</html>`;

  fs.writeFileSync(indexPath, redirectHtml);
  console.log('[post-build] dist/index.html mit Redirect ersetzt');
} else {
  console.log('[post-build] Dev-Branch — keine Änderungen');
}

console.log('[post-build] Fertig');