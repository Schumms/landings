# Schumm & Rösch — Agentic Landingpage System

> Landingpages erstellen, previewen und veröffentlichen — per Chat. Kein Code, kein Terminal.

## Wie es funktioniert

- **Zwei Branches**: `main` (Live) und `dev` (Preview)
- **dev**: Alle Pages sichtbar — auch Entwürfe
- **main**: Nur veröffentlichte Pages (`published: true`)
- **Deployment**: Automatisch über Coolify

## Für Mitarbeitende

1. Sag mir im Chat, welche Landingpage du brauchst
2. Ich erstelle einen Entwurf auf der Preview
3. Du prüfst und sagst mir, was angepasst werden soll
4. Wenn alles passt: "veröffentlichen" — ich schalte sie live

Siehe [AGENTS.md](AGENTS.md) für die vollständige Dokumentation.

## Technisches

- **Framework**: Astro (Static Site Generator)
- **Styling**: CSS Custom Properties
- **Fonts**: Inter (self-hosted)
- **Build**: `pnpm run build`
- **Output**: Statische Dateien in `dist/`

## Branches

| Branch | Zweck | URL |
|--------|-------|-----|
| `dev` | Preview, alle Pages | `preview-landing.ki.schumms.com` |
| `main` | Live, nur veröffentlicht | `landing.schumms.com` |

## Scripts

- `pnpm dev` — Lokale Entwicklung
- `pnpm build` — Produktions-Build (filtert Entwürfe auf main)
- `pnpm preview` — Lokale Preview des Builds

## Filter-Logic

Das Script `scripts/filter-pages.js` läuft vor dem Build:
- **main**: Entwürfe (`published: false`) werden temporär entfernt
- **dev**: Alle Pages werden gebaut

## Kontakt

Schumm & Rösch Planen + Einrichten GmbH  
Borsigstraße 20, 65205 Wiesbaden  
info@schumms.com
