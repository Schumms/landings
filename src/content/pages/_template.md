---
# DEPRECATED — Nutze die spezialisierten Templates
#
# Dieses Template ist veraltet und dient nur noch als Referenz.
# Für neue Pages bitte die spezialisierten Templates verwenden:
#
#   • Sales / Leadmagnet / Download  →  _template.leadmagnet.md
#   • Event / Workshop / Webinar     →  _template.event.md
#   • Vollständige Feld-Referenz     →  _template.master.md
#
# Alle neuen Features (accent_color, hero_variant, hero_size, sections_layout,
# hubspot_embed, contact_form, stats, service_overview, etc.) sind nur in den
# spezialisierten Templates und im Master-Template dokumentiert.
#
# Wenn du diese Datei kopierst, fehlen dir die meisten der 25 Sections und
# alle Layout-Override-Optionen.
# ═══════════════════════════════════════════════════════════════════════════════

slug: mein-slug
published: false

title: "SEO-Titel (max. 60 Zeichen)"
description: "Meta-Beschreibung für Google & Social (max. 160 Zeichen)"

# ── Section-Sichtbarkeit ─────────────────────────────────────────────
# Nicht benötigte Sections auf false setzen — Inhalte NICHT löschen.
sections:
  nav: true
  hero: true
  social_proof_bar: true
  problem: false
  transformation: true
  benefits: true
  process: true
  testimonial: true
  about: false
  content_preview: true
  faq: true
  form: true
  secondary_cta: true
  footer: true

# ── 1. Navigation ───────────────────────────────────────────────────
nav_cta_text: "Jetzt starten"

# ── 2. Hero ─────────────────────────────────────────────────────────
hero_eyebrow: "Kostenloses E-Book"
hero_title: "Kurze kraftvolle Headline"
hero_subtitle: "1–2 Sätze: Konkrete Transformation beschreiben — für wen, welcher Nutzen, warum jetzt."
hero_image: "/pages/mein-slug/hero.jpg"
hero_image_alt: "Beschreibung des Hero-Bildes"
cta_text: "E-Book herunterladen"
hero_trust_metrics:
  - value: "500+"
    label: "Entscheiderinnen"

# ── 3. Social Proof Bar ─────────────────────────────────────────────
social_proof_text: "Bereits von über 500 Entscheiderinnen gelesen"
social_proof_logos:
  - name: "Vitra"
    image: "/images/logos/schumms-partners/vitra.svg"
  - name: "Wilkhahn"
    image: "/images/logos/schumms-partners/wilkhahn.svg"
  - name: "sedus"
    image: "/images/logos/schumms-partners/sedus.svg"
  - name: "König + Neurath"
    image: "/images/logos/schumms-partners/koenig-neurath.svg"
  - name: "VARIO"
    image: "/images/logos/schumms-partners/vario.svg"

# ── 4. Problem / Schmerz ────────────────────────────────────────────
problem_heading: "Warum scheitern New-Work-Konzepte so oft?"
problem_intro: "Optionaler Einleitungssatz — Status quo benennen."
problem_points:
  - "Erster konkreter Pain-Point den die Zielgruppe kennt"
  - "Zweiter Pain-Point — nicht abstrakt"
  - "Dritter Pain-Point — Entscheider denken: die verstehen mich"

# ── 5. Lösung / Transformation ──────────────────────────────────────
transformation_heading: "Raum als strategischer Hebel"
transformation_before: "Beschreibt den Ist-Zustand — was heute nicht funktioniert."
transformation_after: "Beschreibt das Ergebnis danach — Outcome, kein Feature-Katalog."

# ── 6. Nutzen / Benefits ────────────────────────────────────────────
benefits_heading: "Deine Vorteile"
benefits_intro: "Kurzer Intro-Text links neben der nummerierten Liste."
benefits:
  - headline: "Erster Nutzen in einer Zeile"
    description: "Zwei Sätze Erklärung — konkret, kein Feature."
  - headline: "Zweiter Nutzen"
    description: "Warum das für Entscheiderinnen relevant ist."
  - headline: "Dritter Nutzen"
    description: "Messbarer oder emotionaler Mehrwert."

# ── 7. Prozess (immer 3 Schritte) ───────────────────────────────────
process_heading: "So funktioniert's"
process_steps:
  - title: "Schritt 1 — Kurz benennen"
    description: "Was passiert — einfach und klar."
  - title: "Schritt 2 — Nächster Schritt"
    description: "Komplexität reduzieren: Das ist einfacher als gedacht."
  - title: "Schritt 3 — Ergebnis"
    description: "Was die Zielgruppe am Ende hat."

# ── 8. Testimonial ──────────────────────────────────────────────────
testimonial_heading: "Das sagen unsere Kundinnen"
testimonial_quote: "Starkes Zitat mit konkretem Ergebnis — kein generisches Lob."
testimonial_author: "Vorname Nachname"
testimonial_role: "Position"
testimonial_company: "Unternehmen"
testimonial_image: "/pages/mein-slug/testimonial.jpg"
# testimonial_video_url: "https://..."

# ── 9. Über uns / Trust ───────────────────────────────────────────────
about_heading: "Wer steckt dahinter?"
about_name: "Susanne Busshart"
about_title: "Geschäftsführerin · Schumm & Rösch"
about_image: "/pages/mein-slug/about.jpg"
about_bio: "Kurze Credibility-Aussage — Expertise, Erfahrung, warum man dir vertrauen kann."

# ── 10. Inhalt / Was du bekommst ────────────────────────────────────
content_preview_heading: "Das steckt drin"
content_preview_intro: "Konkrete Auflistung was die Zielgruppe erhält."
content_preview_image: "/pages/mein-slug/preview.jpg"
content_preview_image_alt: "Mockup oder Vorschau"
content_preview_items:
  - title: "Kapitel oder Modul 1"
    description: "Kurze Beschreibung des Inhalts."
  - title: "Kapitel oder Modul 2"
    description: "Key-Learning oder Agenda-Punkt."
  - title: "Kapitel oder Modul 3"
    description: "Weiterer konkreter Inhalt."

# ── 11. FAQ ─────────────────────────────────────────────────────────
faq_heading: "Häufige Fragen"
faq_intro: "Optional — kurzer Einleitungssatz."
faq:
  - question: "Ist das auch für mich geeignet?"
    answer: "Antwort in Ich-Form — Zielgruppe ansprechen."
  - question: "Was passiert mit meinen Daten?"
    answer: "Datenschutz-Antwort — DSGVO-konform, kein Spam, Abmeldung möglich."
  - question: "Meine Frage steht nicht dabei?"
    answer: "Kontakt-Option — info@schumms.com oder Link zum Erstgespräch."

# ── 12. Formular ────────────────────────────────────────────────────
form_title: "Jetzt kostenlos herunterladen"
form_intro: "Nutzen noch einmal wiederholen — direkt über dem Formular."
form_cta: "E-Book herunterladen"
form_webhook: "https://n8n.schumms.com/webhook/DEIN-WEBHOOK"
form_download_url: "https://assets.schumms.com/optional-download.pdf"
form_success_message: "Danke! Dein Download ist unterwegs."

# ── 13. Sekundärer CTA ──────────────────────────────────────────────
secondary_cta_heading: "Noch unsicher?"
secondary_cta_text: "Wir beraten dich kostenfrei — unverbindlich und ohne Verkaufsdruck."
secondary_cta_button: "Kostenfrei beraten lassen"
secondary_cta_href: "https://www.schumms.com/kontakt"
---
