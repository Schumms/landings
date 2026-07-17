# Wartungsplan — Landingpage-System

> Stand: 16. Juli 2026 · Letzte Aufräum-Aktion durchgeführt

## Was wurde heute erledigt (v1.7.0)

### Skill-Referenzen konsolidiert
- 5 redundante/veraltete Referenzen als `DEPRECATED` markiert (Inhalt in aktuellere Dateien übernommen):
  - `sections-layout-extension-pattern.md` → `section-layout-extensions.md`
  - `sections-layout-options.md` → `section-layout-extensions.md`
  - `section-component-extension.md` → `section-layout-extensions.md`
  - `accent-color-card-mapping.md` → `per-page-accent-color.md`
  - `hubspot-form-integration.md` → `leadform-field-limits.md`
- Veraltete Bug-Beschreibungen in `architecture-pitfalls.md` auf "GEFIXT" aktualisiert
- `hubspot-sales-send.py`-Pfad in `schumms-email-html-styling.md` korrigiert

### Templates aktualisiert
- Neues `_template.master.md` erstellt — vollständige Feld-Referenz mit allen 25 Sections
- `_template.event.md` aktualisiert — Akzentfarbe, Hero-Varianten, sections_layout, HubSpot-Embed
- `_template.leadmagnet.md` aktualisiert — Akzentfarbe, Hero-Varianten, sections_layout, HubSpot-Embed
- `_template.md` als `DEPRECATED` markiert — verweist auf spezialisierte Templates

### AGENTS.md aktualisiert
- 14 → 25 Sections dokumentiert
- `section_order`, `sections_layout`, `accent_color`, `hero_variant`, `hero_size` erklärt
- Formular-Varianten (HubSpot API, HubSpot Embed, Webhook, Download) dokumentiert
- Shared-Asset-Ordner dokumentiert
- Lokaler Build als Pflicht vor jedem Push dokumentiert

### Shared-Asset-Ordner eingerichtet
- `public/images/shared/` mit wiederverwendbaren Assets:
  - Speaker-Portraits (Susanne, Simon, Kiki, Jessica)
  - Generische Hero-Bilder (Event, Leadmagnet, Default)
  - Location-Bilder

### Schema-Korrektur
- `hero_size`-Kommentar in `content.config.ts` korrigiert ("nur fullbleed" → "wirkt in BEIDEN Varianten")

### Build-Verifikation
- Lokaler Build erfolgreich: 18 Pages in 2.9s, keine Schema-Fehler

---

## Offene Punkte (nicht-kritisch)

### Content-Qualität
- [ ] `hr-summit-alt-oktober-2026.md` — Duplikat von `hr-summit-wiesbaden-oktober-2026.md` (nur Slug unterscheidet sich). Empfehlung: Entwurf belassen oder `published: false` bestätigen.
- [ ] `stuhlkreis.md` — Scherz/Platzhalter-Page. Entwurf-Status prüfen.
- [ ] `anders-denken-staerker-fuehren.md` — Offene `[TODO]`-Marker und `DEINE-FORM-ID-HIER` Platzhalter.
- [ ] `less-is-more.md` — `[Datum]` Platzhalter.
- [ ] `default-landing.md` — `example.com`-Download und `DEIN-WEBHOOK` Platzhalter.

### Performance
- [ ] Bildoptimierung: `@astrojs/image` oder Sharp-Script für automatische Kompression
- [ ] `dist/`-Ordner leeren (Stale Artifakte)
- [ ] CSS-Minify-Warning beheben (falls noch vorhanden)

### Komponenten-Refactor (optional)
- [ ] Gemeinsamen Form-Code zwischen `LeadForm.astro` und `ContactForm.astro` extrahieren
- [ ] Ungenutzte Sections evaluieren: `newsletter_signup`, `text_image`, `feature_image`

### Dokumentation
- [ ] `showcase-image-catalog.md` auf Shared-Asset-Ordner aktualisieren
- [ ] `README.md` im Repo aktualisieren ("14 Sections" → "25 Sections")

---

## Wartungs-Rhythmus

| Häufigkeit | Aufgabe |
|-----------|---------|
| Bei jeder neuen Page | Template auf aktuellen Stand prüfen, Shared-Assets nutzen |
| Monatlich | Deprecated-Referenzen auf Konsistenz prüfen, Skill-Version bump bei Änderungen |
| Quartalsweise | Templates auf Schema-Stand prüfen, neue Sections dokumentieren |
<!-- Touched at 2026-07-16T17:09:05Z to trigger rebuild after deploy issue -->
