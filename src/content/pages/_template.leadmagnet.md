---
# ═══════════════════════════════════════════════════════════════════════════════
# Agent-Vorlage: Lead-Magnet-Landingpage (Download, Check, E-Book)
# ═══════════════════════════════════════════════════════════════════════════════
# Struktur: Hero → Problem → Lösung → Proof → Lead Magnet → About → Form → FAQ → Exit
# Kopieren → umbenennen → Inhalte anpassen → published: true
# Master-Referenz: _template.master.md (alle verfügbaren Felder)
#
# WICHTIGE FRAGEN VOR DEM BAU:
#   1. Was wird heruntergeladen? (Check, E-Book, Guide, Template...)
#   2. Welche Akzentfarbe? coral (default) | turquoise | violet
#   3. Soll die Anmeldung in HubSpot landen?
# ═══════════════════════════════════════════════════════════════════════════════

slug: mein-lead-magnet
published: false

title: "SEO-Titel — Nutzen in max. 60 Zeichen"
description: "Meta-Description: Konkretes Ergebnis + Zielgruppe + ohne Risiko (max. 160 Zeichen)."

# ── Akzentfarbe (optional, default = coral) ────────────────────────────────────
#accent_color: "coral"       # coral (default, warm) | turquoise (frisch) | violet (tech/kreativ)

# ── Section-Reihenfolge (Conversion-optimiert) ──────────────────────────────────
section_order:
  - hero
  - social_proof_bar
  - problem
  - transformation
  - benefits
  - content_preview
  - testimonial
  - about
  - faq
  - form
  - secondary_cta

# ── Section-Aktivierung ────────────────────────────────────────────────────────
sections:
  nav: true
  hero: true
  social_proof_bar: true
  problem: true
  pricing: false
  program: false
  transformation: true
  benefits: true
  process: false
  speakers: false
  testimonial: true
  references: false
  service_overview: false
  about: true
  content_preview: true
  location: false
  faq: true
  form: true
  contact_form: false
  secondary_cta: true
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
#    metrics_layout: "inline"      # "stacked" | "inline"
#  service_overview:
#    card_background: "#E3F1FE"
#  stats:
#    value_color: "accent"
#  form:
#    background: "#522633"
#    title_color: "accent"
#    body_color: "white"

# ── Navigation ─────────────────────────────────────────────────────────────────
nav_cta_text: "Check starten"
#nav_cta_href: "https://..."

# ── Hero ───────────────────────────────────────────────────────────────────────
hero_eyebrow: "Kostenloser Download"
hero_title: "Outcome-Headline — was die Zielgruppe danach kann"
hero_subtitle: "Für wen + welches konkrete Ergebnis + warum jetzt. Kein Feature-Katalog, sondern Transformation in 1–2 Sätzen."
hero_image: "/pages/mein-lead-magnet/hero.jpg"
hero_image_alt: "Beschreibung Hero-Bild"

# Hero-Varianten:
#   hero_variant: "default"    → Bild neben Text (Split-Layout) — Standard für Leadmagnets
#   hero_variant: "fullbleed"  → Bild als Hintergrund, Text zentriert
#hero_variant: "default"

# Hero-Größe:
#   hero_size: "default"  → Standard-Höhe
#   hero_size: "compact"  → Kompaktere Hero (reduzierte min-height, kleinere Headline)
#hero_size: "default"

cta_text: "Check kostenlos starten"
#cta_href: "https://..."       # optional — wenn externer Link statt Formular-Scroll

hero_trust_metrics:
  - value: "3 Min"
    label: "Ausfüllzeit"
  - value: "PDF"
    label: "Sofort-Download"

# ── Social Proof Bar ───────────────────────────────────────────────────────────
social_proof_text: "Vertraut von Unternehmen im DACH-Raum"
social_proof_logos:
  - name: "Vitra"
    image: "/images/logos/schumms-partners/vitra.svg"
  - name: "Wilkhahn"
    image: "/images/logos/schumms-partners/wilkhahn.svg"
  - name: "sedus"
    image: "/images/logos/schumms-partners/sedus.svg"
  - name: "König + Neurath"
    image: "/images/logos/schumms-partners/koenig-neurath.svg"

# ── Problem / Pain ─────────────────────────────────────────────────────────────
problem_heading: "Status quo benennen — Zielgruppe nickt mit"
problem_intro: "Kurzer Kontextsatz: Warum das Thema jetzt brennt."
problem_points:
  - "Erster Pain — spezifisch, nicht abstrakt"
  - "Zweiter Pain — Entscheider denken: genau mein Problem"
  - "Dritter Pain — Kosten des Nicht-Handelns"

# ── Transformation / Lösung ────────────────────────────────────────────────────
transformation_heading: "Vom Reagieren zum Gestalten"
transformation_before: "Ist-Zustand — was heute nicht funktioniert und warum."
transformation_after: "Zielbild — messbares Ergebnis nach dem Download, kein Buzzword."

# ── Benefits ───────────────────────────────────────────────────────────────────
benefits_heading: "Was du konkret gewinnst"
benefits_intro: "Nutzen in Ich-/Du-Form — jeder Punkt beantwortet „Was hab ich davon?""
benefits:
  - headline: "Erster messbarer Nutzen"
    description: "Zwei Sätze — konkret, ohne Marketing-Sprech."
  - headline: "Zweiter Nutzen"
    description: "Warum das für deine Rolle relevant ist."
  - headline: "Dritter Nutzen"
    description: "Emotionaler oder finanzieller Mehrwert."

# ── Content Preview (Lead Magnet Inhalt) ───────────────────────────────────────
content_preview_heading: "Das bekommst du im Download"
content_preview_intro: "Konkrete Module/Kapitel — keine vagen Versprechen."
content_preview_image: "/pages/mein-lead-magnet/preview.jpg"
content_preview_image_alt: "Vorschau des Downloads"
content_preview_items:
  - title: "Modul 1 — Kurz & prägnant"
    description: "Was die Zielgruppe darin findet."
  - title: "Modul 2"
    description: "Key-Learning oder Checklisten-Punkt."
  - title: "Modul 3"
    description: "Handlungsempfehlung oder Score-Erklärung."

# ── Testimonial ────────────────────────────────────────────────────────────────
testimonial_heading: "Das sagen Entscheiderinnen"
testimonial_quote: "Zitat mit konkretem Ergebnis — keine generischen Lobeshymnen."
testimonial_author: "Vorname Nachname"
testimonial_role: "Position"
testimonial_company: "Unternehmen"
testimonial_image: "/pages/mein-lead-magnet/testimonial.jpg"
#testimonial_video_url: "https://..."

# ── About / Trust ──────────────────────────────────────────────────────────────
about_heading: "Wer steckt dahinter?"
about_name: "Susanne Busshart"
about_title: "Geschäftsführerin · Schumm & Rösch"
about_image: "/pages/mein-lead-magnet/about.jpg"
about_bio: "Kurze Credibility — Expertise, Erfahrung, warum man euch vertrauen kann."
#about_quotes:
#  - "Wir sind professionell, ohne distanziert zu sein."
#about_team:
#  - name: "Teammitglied"
#    title: "Rolle"
#    image: "/pages/mein-lead-magnet/team/member.jpg"

# ── FAQ ────────────────────────────────────────────────────────────────────────
faq_heading: "Häufige Fragen"
faq:
  - question: "Ist das wirklich kostenlos?"
    answer: "Ja — Download ohne versteckte Kosten. Optionaler Beratungskontakt nur auf Wunsch."
  - question: "Für wen ist das gedacht?"
    answer: "Zielgruppe konkret benennen — HR, Facility, GF, Teamgröße."
  - question: "Was passiert mit meinen Daten?"
    answer: "DSGVO-konform, kein Spam, Abmeldung jederzeit. Link zur Datenschutzerklärung."
  - question: "Meine Frage steht nicht dabei?"
    answer: "info@schumms.com oder kostenfreies Erstgespräch über den Button unten."

# ── Form / Lead Form ───────────────────────────────────────────────────────────
form_title: "Jetzt kostenlos herunterladen"
form_intro: "Nutzen noch einmal — direkt über dem Formular. Gleicher CTA wie Hero."
form_cta: "Check kostenlos starten"

# Formular-Quelle (eine der Varianten):
#   A) HubSpot Forms API (Standard):
#      hubspot_portal_id: "146949753"
#      hubspot_form_id: "..."
#
#   B) HubSpot Embed (für komplexe Formulare):
#      hubspot_portal_id: "146949753"
#      hubspot_form_id: "..."
#      hubspot_embed: true
#
#   C) Webhook (z.B. n8n):
#      form_webhook: "https://n8n.schumms.com/webhook/..."
#
#   D) Download (Leadmagnet):
#      form_download_url: "https://..."
#      form_success_message: "Vielen Dank! Der Download ist auf dem Weg."

#hubspot_portal_id: "146949753"
#hubspot_form_id: "..."
#hubspot_embed: false
#form_webhook: "https://n8n.schumms.com/webhook/DEIN-WEBHOOK"
form_download_url: "https://assets.schumms.com/optional-download.pdf"
form_success_message: "Danke! Dein Download ist unterwegs — schau auch in den Spam-Ordner."
#form_privacy_note: "DSGVO-Einwilligungstext"

# "Was du bekommst" über dem Formular (Leadmagnet):
#form_what_you_get_heading: "Das bekommst du:"
#form_what_you_get:
#  - "Checkliste XYZ"
#  - "Expertentipps"

# Zusätzliche Form-Felder (optional):
#form_show_salutation: true
#form_show_phone: true
#form_show_employee_count: true
#form_show_message: true
#form_split_name: true
#form_salutation_options: ["Herr", "Frau", "Divers"]
#form_employee_count_options: ["1-10", "11-50", "51-200", "201-500", "500+"]
#form_message_label: "Deine Nachricht"
#form_message_max_length: 500

# ── Secondary CTA ──────────────────────────────────────────────────────────────
secondary_cta_heading: "Lieber persönlich sprechen?"
secondary_cta_text: "Kostenfreie Erstberatung — unverbindlich, ohne Verkaufsdruck."
secondary_cta_button: "Termin vereinbaren"
secondary_cta_href: "https://www.schumms.com/kontakt"

# ── Stats (optional, für Autoritätsaufbau) ─────────────────────────────────────
#stats_heading: "Zahlen, die überzeugen"
#stats:
#  - value: "15+"
#    label: "Jahre Erfahrung"
#  - value: "500+"
#    label: "Projekte"

# ── Footer ─────────────────────────────────────────────────────────────────────
#footer_claim: "Mutig. Prägend. Zukunftsgerichtet."

---
