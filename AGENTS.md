# Agentic Landingpage System — Schumm & Rösch

> Für alle Agenten und Mitarbeitende: Dieses System ermöglicht es, Landingpages per Chat zu erstellen, zu bearbeiten, zu previewen und zu veröffentlichen — ohne technisches Wissen.

## Wie das System funktioniert

- **Zwei Branches**: `main` (Live) und `dev` (Preview)
- **Auf dev**: Alle Seiten sichtbar — auch Entwürfe. Die Startseite zeigt eine Liste aller Pages.
- **Auf main**: Nur veröffentlichte Seiten (`published: true`) sind erreichbar. Die Startseite leitet auf `schumms.com` weiter.
- **Deployment**: Automatisch über Coolify. Push auf `dev` → preview-landing.ki.schumms.com. Push auf `main` → landing.schumms.com.

## URLs

| Umgebung | URL | Zweck |
|----------|-----|-------|
| **Preview** | `https://landing-preview.ki.schumms.com` | Alle Pages inkl. Entwürfe |
| **Live** | `https://landing.schumms.com` | Nur veröffentlichte Pages |

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

**Lokaler Build nur bei nicht-trivialen Änderungen:** `cd /opt/data/landings && BRANCH=dev pnpm run build`
→ Fängt Schema-Fehler ab (z.B. `description` > 160 Zeichen, fehlende Pflichtfelder), **bevor** sie auf der öffentlichen Preview sichtbar werden.

**Fast-Path bei trivialen Änderungen** (Text, Farbe, Button, Section ein/aus): Direkt patchen + pushen, kein Build, kein git sync. Ziel: < 2 Minuten von Anfrage bis Preview-Update. Siehe SKILL.md → "Performance-Prinzipien" für Details.

## Dateistruktur

```
src/content/pages/              ← Hier landet der Inhalt (Markdown)
public/pages/[slug]/            ← Hier landen Bilder zu einer Page
public/images/shared/           ← Wiederverwendbare Assets (Speaker, Icons, generische Hero-Bilder)
src/content.config.ts           ← Schema — niemals editieren
src/components/sections/        ← 25 Section-Komponenten — niemals editieren
src/lib/sections.ts             ← Section-Registry — niemals editieren
src/data/brand.ts               ← Markendaten — niemals editieren
scripts/filter-pages.js         ← Build-Script — niemals editieren
scripts/post-build.js           ← Build-Script — niemals editieren
scripts/restore-pages.js        ← Build-Script — niemals editieren
```

## Templates (für neue Pages)

| Template | Verwendung | Pfad |
|----------|-----------|------|
| `_template.master.md` | Vollständige Feld-Referenz (alle 25 Sections, alle Optionen) | `src/content/pages/_template.master.md` |
| `_template.leadmagnet.md` | Sales / Download / Check / E-Book | `src/content/pages/_template.leadmagnet.md` |
| `_template.event.md` | Workshop / Konferenz / Webinar | `src/content/pages/_template.event.md` |
| `_template.md` | ⚠️ Legacy — nicht mehr für neue Pages verwenden | `src/content/pages/_template.md` |

**Wichtig:** Vor dem Bau einer neuen Page immer die Vorabfragen stellen:
1. Welcher Seitentyp? (Event / Webinar / Leadmagnet)
2. Bezahlter Präsenz-Workshop oder kostenfreies Online-Webinar?
3. Welche Akzentfarbe? (coral / turquoise / violet)
4. Soll die Anmeldung in HubSpot landen?

## Sections-Übersicht (25 Content-Sections)

| Section | Zweck | Typische Nutzung |
|---------|-------|-----------------|
| `hero` | Hauptüberschrift + Bild + CTA | Jede Page |
| `social_proof_bar` | Kennzahlen + Kundenlogos | Leadmagnets, Sales |
| `problem` | 3 Pain-Points | Leadmagnets |
| `pricing` | Preis / Ticket | Events (kostenpflichtig) |
| `program` | Agenda / Zeitplan | Events |
| `transformation` | Vorher/Nachher | Leadmagnets |
| `benefits` | 3–5 Vorteile | Leadmagnets, Sales |
| `process` | 3–8 Schritte | Leadmagnets |
| `speakers` | Speaker-Portraits | Events |
| `testimonial` | Kundenzitat | Leadmagnets, Sales |
| `references` | Case-Study-Karten | Sales |
| `service_overview` | 3–6 Service-Cards | Sales, Beratung |
| `about` | Über uns / Trust | Leadmagnets |
| `content_preview` | Download-Inhalt | Leadmagnets |
| `location` | Adresse + Anfahrt | Events (Präsenz) |
| `faq` | Akkordeon | Alle |
| `form` | Lead-Formular | Alle |
| `contact_form` | Kontaktformular (zweite Form) | Sales |
| `secondary_cta` | Weicher Ausstieg | Alle |
| `stats` | 3–6 Key-Figures | Sales, Beratung |
| `comparison` | Vergleichstabelle | Sales |
| `cta_banner` | Mid-Page Conversion-Bar | Alle |
| `newsletter_signup` | E-Mail + DSGVO Mini-Form | Experimentell |
| `text_image` | Text + Bild (Split) | Experimentell |
| `feature_image` | Feature + Bild (prominent) | Experimentell |

Sections werden im Frontmatter aktiviert: `sections: { hero: true, pricing: false, ... }`
Die Reihenfolge wird über `section_order` gesteuert (optional).

## Layout-Overrides pro Section (optional)

Jede Section kann über `sections_layout` im Frontmatter angepasst werden:

```yaml
sections_layout:
  program:
    compact: true           # Kleinere Schrift
    hide_meta: true         # Zeit-Badges ausblenden
    two_column: true        # Titel links, Beschreibung rechts
  service_overview:
    card_background: "#E3F1FE"   # Card-Hintergrund
  hero:
    metrics_layout: "inline"     # Trust-Metrics als kompakte Pills
  form:
    background: "#522633"        # Custom Hex-Hintergrund
    title_color: "accent"
    body_color: "white"
```

Vollständige Dokumentation: `references/section-layout-extensions.md` im Skill-Verzeichnis.

## Hero-Varianten

```yaml
hero_variant: "default"      # Bild neben Text (Split-Layout) — Standard
hero_variant: "fullbleed"    # Bild als Hintergrund, Text zentriert + Termin-Bullets

hero_size: "default"         # Standard-Höhe
hero_size: "compact"         # Kompaktere Hero (reduziertes Padding, kleinere Headline)
```

## Formular-Varianten

| Variante | Konfiguration | Wann nutzen |
|----------|--------------|-------------|
| **HubSpot Forms API** (Default) | `hubspot_portal_id` + `hubspot_form_id` | Standard: Name, E-Mail, Firma |
| **HubSpot Embed** | `hubspot_portal_id` + `hubspot_form_id` + `hubspot_embed: true` | Komplexe Formulare (Anrede, Session-Auswahl, Conditional Logic) |
| **Webhook (n8n)** | `form_webhook` | Custom-Integration |
| **Download** | `form_download_url` | Leadmagnet mit direktem Download |

## Akzentfarbe pro Page

```yaml
accent_color: "coral"       # Default — warm, klassisch
accent_color: "turquoise"   # Frisch, modern — oft für Workshops
accent_color: "violet"      # Tech-affin, kreativ — oft für Innovation
```

Wenn nicht gesetzt: Default ist coral. Betrifft Buttons, Icons, Borders, Hover-States.

## Assets / Bilder

- **Page-spezifisch:** `public/pages/[slug]/` — Hero, Speaker, Location, etc.
- **Wiederverwendbar:** `public/images/shared/` — Speaker-Portraits, Icons, generische Hero-Bilder
- **Brand-Logos:** `public/images/logos/schumms-partners/` — Vitra, Wilkhahn, sedus, etc.

**Wichtig:** Wenn User keine eigenen Bilder hat, zuerst in `public/images/shared/` und anderen Pages nach passenden Assets suchen — nicht erfinden.

## Regeln für Agenten

1. **Nur Markdown in `src/content/pages/` editieren** — niemals Code, niemals CSS, niemals Layouts.
2. **Bilder** in `public/pages/[slug]/` speichern und im Frontmatter referenzieren.
3. **dev-Branch** ist für alle Arbeiten. **main** nur für veröffentlichte, fertige Pages.
4. **Niemals** ohne explizites "ja" des Mitarbeiters auf `main` pushen.
5. **Fehler** menschlich erklären, niemals Stack-Traces zeigen.
6. **Kommunikation** in natürlicher Sprache — nicht über "Repository", "Commit", "Branch" sprechen, sondern über "Preview", "Live-Seite", "Entwurf".
7. **Lokaler Build nur bei nicht-trivialen Änderungen** — `BRANCH=dev pnpm run build` um Schema-Fehler früh zu fangen. Triviale Änderungen (Text, Farbe, Button): Fast-Path ohne Build.
8. **NIE Inhalte erfinden** — alle Texte, Claims, Preise, Programmpunkte, Speaker etc. MÜSSEN vom User kommen oder bestätigt werden.
9. **Template-first** — neue Pages starten immer aus `_template.leadmagnet.md` oder `_template.event.md`. Custom nur bei ausdrücklicher Anweisung.
10. **dev↔main Sync PFLICHT** — nach jedem publish und deactivate muss `dev` mit `main` synchronisiert werden, sonst ist die Preview-Übersicht falsch.

## Befehle / Triggers

- `/landing-create` oder "neue Landingpage erstellen" → Neuer Entwurf auf dev
- `/landing-edit` oder "ändere [Feld]" → Änderung auf dev
- `/landing-publish` oder "veröffentlichen" → Merge auf main (nur mit "ja")
- `/landing-list` oder "welche Pages gibt es" → Liste aller Pages mit Status
- `/landing-deactivate` oder "Seite runternehmen" → published: false oder Seite entfernen

## Kontakt

Bei Unklarheiten: Schumm & Rösch, info@schumms.com
