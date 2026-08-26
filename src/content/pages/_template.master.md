---
# ═══════════════════════════════════════════════════════════════════════════════
# MASTER-TEMPLATE — Alle Felder, alle Sections, alle Layout-Optionen
# ═══════════════════════════════════════════════════════════════════════════════
#
# Dies ist die vollständige Referenz für alle verfügbaren Frontmatter-Felder.
# Für neue Pages NICHT diese Datei kopieren — stattdessen:
#   • Sales / Leadmagnet  → _template.leadmagnet.md
#   • Event / Webinar     → _template.event.md
#
# Alle Felder hier sind optional (außer den 8 Pflichtfeldern), aber wenn eine
# Section aktiviert ist (sections.X: true), sollten ihre Datenfelder befüllt
# werden — sonst rendert sie leer.
#
# Reihenfolge der Sections: section_order überschreibt die Default-Reihenfolge.
# Wenn section_order weggelassen wird, gilt die Reihenfolge aus sections.ts.
#
# ═══════════════════════════════════════════════════════════════════════════════

slug: master-template-reference
published: false

# ── SEO / Meta ─────────────────────────────────────────────────────────────────
title: "Seitentitel (max 60 Zeichen)"
description: "Meta-Beschreibung (max 160 Zeichen). Wird für SEO und Social-Previews genutzt."

# ── Section-Aktivierung (true = sichtbar, false = ausgeblendet) ────────────────
# Layout-Sections (immer true):
#   nav: true, footer: true
#
# Content-Sections (Default = false, außer hero/form/faq/benefits/process/etc.):
#   Siehe DEFAULT_SECTION_VISIBILITY in src/lib/sections.ts
#   Kurzform: Alle 25 Sections können hier ein-/ausgeschaltet werden.
sections:
  hero: true
  social_proof_bar: false
  problem: false
  pricing: false
  program: false
  transformation: false
  benefits: false
  process: false
  speakers: false
  testimonial: false
  references: false
  service_overview: false
  about: false
  content_preview: false
  location: false
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

# ── Section-Reihenfolge (optional) ─────────────────────────────────────────────
# Überschreibt die Default-Reihenfolge aus sections.ts.
# Nur aktive Sections (true) müssen hier nicht stehen — sie werden trotzdem
# gerendert, aber in Default-Reihenfolge.
#section_order:
#  - hero
#  - problem
#  - benefits
#  - form
#  - secondary_cta

# ── Per-Page Layout-Overrides (optional) ───────────────────────────────────────
# Jedes Feld ist pro Section optional. Nicht alle Sections interpretieren alle
# Felder — siehe references/section-layout-extensions.md für Details.
#sections_layout:
#  hero:
#    metrics_layout: "inline"      # "stacked" | "inline"
#  program:
#    compact: true
#    hide_meta: true
#    two_column: true
#    split_image: true
#  service_overview:
#    card_background: "#E3F1FE"
#  stats:
#    value_color: "accent"          # "accent" | "black"
#  form:
#    background: "#522633"
#    title_color: "accent"
#    body_color: "white"
#  cta_banner:
#    background: "dark"
#  benefits:
#    align: "center"                # "left" | "center"
#    width: "wide"                  # "narrow" | "normal" | "wide" | "full"

# ── Brand / Design ─────────────────────────────────────────────────────────────
# Akzentfarbe der Page. Default = coral (kein Eintrag nötig).
# Optionen: "coral" | "turquoise" | "violet"
#accent_color: "coral"

# ── Navigation ─────────────────────────────────────────────────────────────────
#nav_cta_text: "Jetzt anmelden"
#nav_cta_href: "https://..."

# ── Hero ───────────────────────────────────────────────────────────────────────
hero_eyebrow: "Eyebrow-Text (optional, klein über der Headline)"
hero_title: "Hauptüberschrift der Page (max 80 Zeichen)"
hero_subtitle: "Untertitel / Value Proposition (max 300 Zeichen)"
#hero_image: "/pages/[slug]/hero.jpg"
#hero_image_alt: "Beschreibung des Hero-Bildes"

# Hero-Varianten:
#   hero_variant: "default"    → Bild neben Text (Split-Layout)
#   hero_variant: "fullbleed"  → Bild als Hintergrund, Text zentriert
#hero_variant: "default"

# Hero-Größe:
#   hero_size: "default"  → Standard-Höhe
#   hero_size: "compact"  → Kompaktere Hero (reduziertes Padding, kleinere Headline)
#hero_size: "default"

# CTA im Hero:
cta_text: "Haupt-Call-to-Action"
#cta_href: "https://externe-url.de"   # optional — default scrollt zu #lead-form

# Trust-Metrics (optional, max 3):
#hero_trust_metrics:
#  - value: "15+"
#    label: "Jahre Erfahrung"
#  - value: "500+"
#    label: "Projekte"

# ── Social Proof Bar ───────────────────────────────────────────────────────────
#social_proof_text: "Vertraut von führenden Unternehmen"
#social_proof_metrics:
#  - value: "98%"
#    label: "Zufriedenheit"
#social_proof_logos:
#  - name: "Firma A"
#    image: "/images/logos/firma-a.svg"
#social_proof_logos_monochrome: true

# ── Problem / Pain ─────────────────────────────────────────────────────────────
#problem_heading: "Das Problem, das wir lösen"
#problem_intro: "Kurze Einleitung zum Problem"
#problem_image: "/pages/[slug]/problem.jpg"
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
#pricing_eyebrow: "Frühbucher"
#pricing_label: "pro Person"
#pricing_amount: "490"
#pricing_currency: "€"
#pricing_text: "zzgl. MwSt."
#pricing_cta: "Jetzt Ticket sichern"

# ── Program / Agenda ───────────────────────────────────────────────────────────
#program_heading: "Agenda"
#program_intro: "Was dich erwartet"
#program_items:
#  - type: "09:00"
#    title: "Begrüßung"
#    speaker: "Max Mustermann"
#    role: "Geschäftsführer"
#    organization: "Musterfirma"
#    description: "Beschreibung der Session"

# ── Transformation ─────────────────────────────────────────────────────────────
#transformation_heading: "Die Transformation"
#transformation_before: "Vorher..."
#transformation_after: "Nachher..."

# ── Benefits ───────────────────────────────────────────────────────────────────
#benefits_heading: "Deine Vorteile"
#benefits_intro: "Warum das für dich relevant ist"
#benefits:
#  - headline: "Vorteil 1"
#    description: "Beschreibung"
#  - headline: "Vorteil 2"
#    description: "Beschreibung"
#  - headline: "Vorteil 3"
#    description: "Beschreibung"

# ── Process ────────────────────────────────────────────────────────────────────
#process_heading: "Unser Prozess"
#process_heading_accent: "in 4 Schritten"
#process_steps:
#  - title: "Schritt 1"
#    description: "Beschreibung"
#  - title: "Schritt 2"
#    description: "Beschreibung"
#  - title: "Schritt 3"
#    description: "Beschreibung"

# ── Speakers ───────────────────────────────────────────────────────────────────
#speakers_heading: "Die Speaker"
#speakers_tagline: "Erfahrene Expert:innen"
#speakers:
#  - name: "Max Mustermann"
#    title: "Geschäftsführer"
#    bio: "Kurze Bio"
#    image: "/pages/[slug]/speakers/max.jpg"
#    image_alt: "Portrait von Max Mustermann"

# ── Testimonial ────────────────────────────────────────────────────────────────
#testimonial_heading: "Das sagen unsere Kunden"
#testimonial_quote: "Ein überzeugendes Zitat..."
#testimonial_author: "Anna Müller"
#testimonial_role: "HR-Leiterin"
#testimonial_company: "Musterfirma GmbH"
#testimonial_image: "/pages/[slug]/testimonial.jpg"
#testimonial_video_url: "https://..."

# ── References ─────────────────────────────────────────────────────────────────
#references_heading: "Referenzen"
#references_intro: "Erfolgsgeschichten"
#references:
#  - industry: "Tech"
#    size: "250 Mitarbeiter"
#    challenge: "Herausforderung"
#    result: "Ergebnis"
#    image: "/pages/[slug]/references/case1.jpg"
#references_cta_text: "Mehr erfahren"
#references_cta_href: "https://..."
#references_closing_quote: "Abschlusszitat"

# ── Service Overview ───────────────────────────────────────────────────────────
#service_overview_heading: "Unsere Leistungen"
#service_overview_intro: "Wie wir helfen"
#service_overview_layout: "grid"    # "grid" | "rows"
#service_overview:
#  - eyebrow: "01"
#    title: "Beratung"
#    description: "Beschreibung"
#    bullets:
#      - "Bullet 1"
#      - "Bullet 2"
#    image: "/pages/[slug]/service1.jpg"
#    icon: "/pages/[slug]/icons/icon1.svg"
#    cta_text: "Mehr erfahren"
#    cta_href: "https://..."
#    card_background: "#E3F1FE"     # optional, überschreibt Akzent-Mapping

# ── About ──────────────────────────────────────────────────────────────────────
#about_heading: "Über uns"
#about_name: "Susanne Busshart"
#about_title: "Gründerin & Geschäftsführerin"
#about_image: "/pages/[slug]/about.jpg"
#about_bio: "Kurze Bio"
#about_quotes:
#  - "Wir sind professionell, ohne distanziert zu sein."
#about_team:
#  - name: "Teammitglied"
#    title: "Rolle"
#    image: "/pages/[slug]/team/member.jpg"

# ── Content Preview ────────────────────────────────────────────────────────────
#content_preview_heading: "Was du bekommst"
#content_preview_intro: "Inhalt im Überblick"
#content_preview_image: "/pages/[slug]/preview.jpg"
#content_preview_items:
#  - title: "Kapitel 1"
#    description: "Inhalt"

# ── Location ───────────────────────────────────────────────────────────────────
#location_heading: "Veranstaltungsort"
#location_intro: "Wir freuen uns auf dich"
#location_venue: "Musterlocation"
#location_address: "Musterstraße 1, 65189 Wiesbaden"
#location_phone: "+49 611 123456"
#location_email: "info@schumms.com"
#location_image: "/pages/[slug]/location.jpg"

# ── FAQ ────────────────────────────────────────────────────────────────────────
#faq_heading: "Häufige Fragen"
#faq_intro: "Alles, was du wissen musst"
#faq:
#  - question: "Frage 1?"
#    answer: "Antwort 1"

# ── Form / Lead Form ───────────────────────────────────────────────────────────
form_title: "Formular-Titel (Pflichtfeld)"
form_intro: "Optionaler Einleitungstext über dem Formular"
form_cta: "Absenden"

# Formular-Quelle (eine der drei Varianten):
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
#form_webhook: "..."
#form_download_url: "..."
form_success_message: "Vielen Dank für deine Anmeldung!"
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
#form_split_name: true          # Vorname und Nachname als separate Felder
#form_salutation_options: ["Herr", "Frau", "Divers"]
#form_employee_count_options: ["1-10", "11-50", "51-200", "201-500", "500+"]
#form_message_label: "Deine Nachricht"
#form_message_max_length: 500

# ── Contact Form (zweite Form-Section) ─────────────────────────────────────────
#contact_form_title: "Kontakt"
#contact_form_intro: "Schreib uns"
#contact_form_cta: "Absenden"
#contact_form_privacy_note: "..."
#contact_form_success_message: "..."
#contact_form_hubspot_form_id: "..."
#contact_form_show_message: true
#contact_form_show_phone: true
#contact_form_phone_required: true
#contact_form_message_label: "Nachricht"
#contact_form_message_max_length: 500
#contact_form_secondary_cta_label: "Oder ruf uns an"
#contact_form_secondary_cta_href: "tel:+49611123456"
#contact_form_reassurance: "Wir melden uns innerhalb von 24h"
#contact_form_address: "Schumm & Rösch GmbH, Musterstraße 1, 65189 Wiesbaden"

# ── Secondary CTA ──────────────────────────────────────────────────────────────
#secondary_cta_heading: "Noch Fragen?"
#secondary_cta_text: "Wir beraten dich gerne persönlich."
#secondary_cta_button: "Termin vereinbaren"
#secondary_cta_href: "https://calendly.com/..."

# ── Stats ──────────────────────────────────────────────────────────────────────
#stats_heading: "Zahlen, die überzeugen"
#stats_intro: "..."
#stats:
#  - value: "15+"
#    label: "Jahre"
#    subtext: "Erfahrung"
#  - value: "500+"
#    label: "Projekte"
#  - value: "98%"
#    label: "Zufriedenheit"

# ── Comparison ─────────────────────────────────────────────────────────────────
#comparison_heading: "Vergleich"
#comparison_intro: "..."
#comparison_label_a: "Schumm & Rösch"
#comparison_label_b: "Andere"
#comparison_highlight: "a"
#comparison:
#  - feature: "Kriterium"
#    value_a: "✓"
#    value_b: "✗"

# ── CTA Banner ─────────────────────────────────────────────────────────────────
#cta_banner_heading: "Bereit durchzustarten?"
#cta_banner_text: "..."
#cta_banner_button: "Jetzt starten"
#cta_banner_href: "https://..."

# ── Newsletter Signup ──────────────────────────────────────────────────────────
#newsletter_heading: "Immer up to date"
#newsletter_intro: "..."
#newsletter_bullets:
#  - "Exklusive Insights"
#newsletter_placeholder: "Deine E-Mail-Adresse"
#newsletter_cta: "Anmelden"
#newsletter_privacy_note: "..."
#newsletter_success_message: "..."
#newsletter_hubspot_portal_id: "146949753"
#newsletter_hubspot_form_id: "..."
#newsletter_webhook: "..."

# ── Text + Image ───────────────────────────────────────────────────────────────
#text_image_heading: "..."
#text_image_intro: "..."
#text_image_text: "..."
#text_image_image: "/pages/[slug]/text-image.jpg"
#text_image_layout: "text-left-image-right"    # "text-left-image-right" | "image-left-text-right"

# ── Feature + Image ────────────────────────────────────────────────────────────
#feature_image_eyebrow: "..."
#feature_image_heading: "..."
#feature_image_intro: "..."
#feature_image_text: "..."
#feature_image_image: "/pages/[slug]/feature.jpg"
#feature_image_layout: "text-left-image-right"

# ── Footer ─────────────────────────────────────────────────────────────────────
#footer_claim: "Mutig. Prägend. Zukunftsgerichtet."

# ── Section Modifiers (Experimentell) ──────────────────────────────────────────
#section_modifiers:
#  problem: ["centered"]

---
