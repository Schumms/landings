# Agentic Landingpage System — Schumm & Rösch

> Für alle Agenten und Mitarbeitende: Dieses System ermöglicht es, Landingpages per Chat zu erstellen, zu bearbeiten, zu previewen und zu veröffentlichen — ohne technisches Wissen.

## Wie das System funktioniert

- **Zwei Branches**: `main` (Live) und `dev` (Preview)
- **Auf dev**: Alle Seiten sichtbar — auch Entwürfe. Die Startseite zeigt eine Liste aller Pages.
- **Auf main**: Nur veröffentlichte Seiten (`published: true`) sind erreichbar. Die Startseite leitet auf `schumms.com` weiter.
- **Deployment**: Automatisch über Coolify. Push auf `dev` → preview-landing.ki.schumms.com. Push auf `main` → landing.ki.schumms.com.

## URLs

| Umgebung | URL | Zweck |
|----------|-----|-------|
| **Preview** | `https://landing-preview.ki.schumms.com` | Alle Pages inkl. Entwürfe |
| **Live** | `https://landing.ki.schumms.com` | Nur veröffentlichte Pages |

**Preview-Zugang**: Basic Auth mit User `schumms` / Password `schumms`

## Workflow für Landingpages

```
Mitarbeiter: "Erstelle eine Landingpage für den Workshop XY"
    ↓
Agent: Fragt Details ab → Erstellt Markdown in src/content/pages/
       → Committet auf dev → "Deine Preview ist fertig: [URL]"
    ↓
Mitarbeiter: "Mach den Titel größer" / "Tausch das Bild"
    ↓
Agent: Patcht das Markdown → Committet auf dev → "Änderung live auf Preview"
    ↓
Mitarbeiter: "Sieht gut aus, veröffentlichen"
    ↓
Agent: "Soll [Titel] jetzt live gehen? Bitte mit 'ja' bestätigen."
    ↓
Mitarbeiter: "ja"
    ↓
Agent: Setzt published: true → Merged nach main → "🚀 Live: [URL]"
```

## Branch-Schutz

- **main**: Nur der Account `Schumms` darf direkt pushen. Alle anderen bekommen Fehlermeldung.
- **dev**: Kein Schutz — hier wird gearbeitet und getestet.
- **Agenten dürfen**: Auf `dev` committen und pushen. Auf `main` nur via Merge nach expliziter Bestätigung.

## Build Pipeline

```
1. filter-pages.js  → Entwürfe entfernen (nur auf main)
2. astro build      → Statische Dateien generieren
3. post-build.js    → index.html mit Redirect ersetzen (nur auf main)
4. restore-pages.js → Entwürfe wiederherstellen
```

## Dateistruktur (wichtig für Agenten)

```
src/content/pages/          ← Hier landet der Inhalt (Markdown)
public/pages/[slug]/        ← Hier landen Bilder zu einer Page
src/content.config.ts       ← Schema — niemals editieren
src/components/sections/    ← Sections — niemals editieren
src/data/brand.ts           ← Markendaten — niemals editieren
scripts/filter-pages.js     ← Build-Script — niemals editieren
scripts/post-build.js       ← Build-Script — niemals editieren
scripts/restore-pages.js    ← Build-Script — niemals editieren
```

## Regeln für Agenten

1. **Nur Markdown in `src/content/pages/` editieren** — niemals Code, niemals CSS, niemals Layouts.
2. **Bilder** in `public/pages/[slug]/` speichern und im Frontmatter referenzieren.
3. **dev-Branch** ist für alle Arbeiten. **main** nur für veröffentlichte, fertige Pages.
4. **Niemals** ohne explizites "ja" des Mitarbeiters auf `main` pushen.
5. **Fehler** menschlich erklären, niemals Stack-Traces zeigen.
6. **Kommunikation** in natürlicher Sprache — nicht über "Repository", "Commit", "Branch" sprechen, sondern über "Preview", "Live-Seite", "Entwurf".

## Befehle / Triggers

- `/landing-create` oder "neue Landingpage erstellen" → Neuer Entwurf auf dev
- `/landing-edit` oder "ändere [Feld]" → Änderung auf dev
- `/landing-publish` oder "veröffentlichen" → Merge auf main (nur mit "ja")
- `/landing-list` oder "welche Pages gibt es" → Liste aller Pages mit Status
- `/landing-deactivate` oder "Seite runternehmen" → published: false oder Seite entfernen

## Kontakt

Bei Unklarheiten: Schumm & Rösch, info@schumms.com