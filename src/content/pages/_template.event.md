---
# ═══════════════════════════════════════════════════════════════════════════════
# Agent-Vorlage: Event-Landingpage (Workshop, Konferenz, Webinar)
# ═══════════════════════════════════════════════════════════════════════════════
# Kopieren → umbenennen → Inhalte anpassen → published: true
# Master-Referenz: _template.master.md (alle verfügbaren Felder)
#
# WICHTIGE FRAGEN VOR DEM BAU:
#   1. Bezahlter Präsenz-Workshop oder kostenfreies Online-Webinar?
#   2. Welche Akzentfarbe? coral (default) | turquoise | violet
# ═══════════════════════════════════════════════════════════════════════════════

slug: mein-event
published: false

title: "Event-Titel — Kurzbeschreibung (max 60 Zeichen)"
description: "Meta-Beschreibung max. 160 Zeichen."

# ── Akzentfarbe (optional, default = coral) ────────────────────────────────────
#accent_color: "coral"       # coral (default, warm) | turquoise (frisch) | violet (tech/kreativ)

# ── Section-Reihenfolge (optional) ─────────────────────────────────────────────
# Default-Reihenfolge aus sections.ts; section_order überschreibt sie.
section_order:
  - hero
  - problem
  - program
  - speakers
  - location
  - form
  - social_proof_bar

# ── Section-Aktivierung ────────────────────────────────────────────────────────
sections:
  nav: true
  hero: true
  social_proof_bar: true
  problem: true
  pricing: false
  program: true
  transformation: false
  benefits: false
  process: false
  speakers: true
  testimonial: false
  references: false
  service_overview: false
  about: false
  content_preview: false
  location: true
  faq: false
  form: true
  contact_form: false
  secondary_cta: false
  stats: false
  comparison: false
  cta_banner: false
  newsletter_signup: false
  text_image: false
  feature_image: false
  footer: true

# ── Per-Page Layout-Overrides (optional) ───────────────────────────────────────
#sections_layout:
#  hero:
#    metrics_layout: "inline"      # "stacked" | "inline" — für Datum/Uhrzeit/Ort als kompakte Pills
#  program:
#    compact: true                  # Kleinere Schrift, weniger Padding
#    hide_meta: true                # Zeit-Badges ausblenden
#    two_column: true               # Titel links, Beschreibung rechts
#    split_image: true              # Text links (40%), großes Bild rechts (60%)
#  form:
#    background: "#522633"          # Custom Hex für Dark-Form (siehe references/dark-form-section.md)
#    title_color: "accent"
#    body_color: "white"

# ── Navigation ─────────────────────────────────────────────────────────────────
nav_cta_text: "Ticket sichern"
#nav_cta_href: "https://..."   # optional — default scrollt zu Formular

# ── Hero ───────────────────────────────────────────────────────────────────────
hero_eyebrow: "Event · Datum · Ort"
hero_title: "Event-Headline"
hero_subtitle: "Subline — Nutzenversprechen in einem Satz."
hero_image: "/pages/mein-event/hero.jpg"
hero_image_alt: "Beschreibung Hero-Bild"

# Hero-Varianten:
#   hero_variant: "default"    → Bild neben Text (Split-Layout) — Standard für Events
#   hero_variant: "fullbleed"  → Bild als Hintergrund, Text zentriert + Termin-Bullets
#hero_variant: "default"

# Hero-Größe:
#   hero_size: "default"  → Standard-Höhe
#   hero_size: "compact"  → Kompaktere Hero (reduzierte min-height, kleinere Headline)
#                         → Bei fullbleed: flacheres Bild; bei default: leisere Headline
#hero_size: "default"

cta_text: "Ticket sichern"
#cta_href: "https://..."       # optional — wenn externer Link statt Formular-Scroll

hero_trust_metrics:
  - value: "TT.MM."
    label: "2026"
  - value: "9–17"
    label: "Uhr"
  - value: "Ort"
    label: "Region"

# ── Social Proof Bar ───────────────────────────────────────────────────────────
social_proof_text: "Unsere Partner"
social_proof_logos_monochrome: false
social_proof_logos:
  - name: "Partner 1"
    image: "/pages/mein-event/partners/partner-1.png"
  - name: "Partner 2"
    image: "/pages/mein-event/partners/partner-2.svg"

# ── Problem / Schmerz ──────────────────────────────────────────────────────────
problem_heading: "Warum dieses Event?"
problem_intro: "Einleitungstext — Kontext und Zielgruppe. Keine Bullet-Points nötig."
#problem_image: "/pages/mein-event/problem.jpg"
#problem_image_alt: "..."
#problem_points:
#  - "Erster Pain-Point"
#  - "Zweiter Pain-Point"
#  - "Dritter Pain-Point"

# ── Pricing ────────────────────────────────────────────────────────────────────
# Wenn pricing_amount gesetzt UND sections.pricing: false:
#   PricingCard rendert automatisch in der Problem-Section (rechtsbündig).
# Wenn sections.pricing: true:
#   Pricing rendert als eigene Section weiter unten.
#pricing_eyebrow: "Sonderpreis"
#pricing_label: "Jetzt für"
#pricing_amount: "49"
#pricing_currency: "€"
#pricing_text: "Kurzer Nutzen-Satz zum Preis."
#pricing_cta: "Ticket sichern"

# ── Program / Agenda ───────────────────────────────────────────────────────────
program_heading: "Programm 9:00 – 17:00 Uhr"
#program_intro: "Was dich erwartet"
program_items:
  - type: "Keynote"
    title: "Session-Titel"
    speaker: "Name"
    role: "Rolle · Unternehmen"
    organization: "Unternehmen"
    organization_logo: "/pages/mein-event/partners/logo.png"
    description: "Beschreibung der Session."
  - type: "Breakout"
    title: "Workshop-Titel"
    description: "Beschreibung ohne Speaker-Felder."
  - type: "Panel"
    title: "Panel-Titel"
    speaker: "Speaker 1, Speaker 2, Speaker 3"
    description: "Panel-Beschreibung."

# ── Speakers ───────────────────────────────────────────────────────────────────
speakers_heading: "Die Speaker"
speakers_tagline: "Optionaler Tagline-Satz"
speakers:
  - name: "Vorname Nachname"
    title: "Rolle · Unternehmen"
    bio: "Kurzbiografie."
    image: "/pages/mein-event/speakers/name.jpg"
    image_alt: "Portrait Name"

# ── Location ───────────────────────────────────────────────────────────────────
location_heading: "Location"
location_intro: "Wir freuen uns auf dich in unserer Eventfläche."
location_venue: "Venue-Name"
location_address: "Straße · PLZ Ort"
location_phone: "+49 ..."
location_email: "info@schumms.com"
location_image: "/pages/mein-event/location.jpg"
location_image_alt: "Beschreibung Location-Bild"

# ── Form / Lead Form ───────────────────────────────────────────────────────────
form_title: "Sichere dir dein Ticket!"
form_intro: "Preis und Nutzen noch einmal kurz wiederholen."
form_cta: "Ticket sichern"

# Formular-Quelle (eine der Varianten):
#   A) HubSpot Forms API (Standard):
#      hubspot_portal_id: "146949753"
#      hubspot_form_id: "..."
#
#   B) HubSpot Embed (für komplexe Formulare mit Anrede, Session-Auswahl etc.):
#      hubspot_portal_id: "146949753"
#      hubspot_form_id: "..."
#      hubspot_embed: true
#
#   C) Webhook (z.B. n8n):
#      form_webhook: "https://n8n.schumms.com/webhook/..."

#hubspot_portal_id: "146949753"
#hubspot_form_id: "..."
#hubspot_embed: false
#form_webhook: "https://n8n.schumms.com/webhook/DEIN-WEBHOOK"
form_success_message: "Danke! Bestätigung folgt per E-Mail."
#form_privacy_note: "DSGVO-Einwilligungstext"

# Zusätzliche Form-Felder (optional):
#form_show_salutation: true
#form_show_phone: true
#form_show_employee_count: true
#form_split_name: true
#form_salutation_options: ["Herr", "Frau", "Divers"]

# ── Stats (optional, für Autoritätsaufbau) ─────────────────────────────────────
#stats_heading: "Zahlen, die überzeugen"
#stats:
#  - value: "15+"
#    label: "Jahre Erfahrung"
#  - value: "500+"
#    label: "Projekte"

# ── Comparison (optional — meist ggü. Wettbewerb) ──────────────────────────────
# Bei Events: Alternativ „Das nimmst du mit" als Benefits-Section nutzen.
#comparison_heading: "Das nimmst du mit"
#comparison:
#  - feature: "Kriterium"
#    value_a: "✓"
#    value_b: "✗"

# ── CTA Banner (optional) ──────────────────────────────────────────────────────
#cta_banner_heading: "Bereit durchzustarten?"
#cta_banner_button: "Jetzt anmelden"
#cta_banner_href: "#lead-form"

# ── Footer ─────────────────────────────────────────────────────────────────────
#footer_claim: "Mutig. Prägend. Zukunftsgerichtet."

---
