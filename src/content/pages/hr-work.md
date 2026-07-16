---
slug: hr-work
published: false

# SEO — gleicher Umfang wie die Webinar-Astro-Seite (BaseLayout liefert
# title/description/canonical/robots/og:type/og:url/og:title/og:description/
# og:image/og:locale/twitter:card/twitter:title/twitter:description/twitter:image
# + Sitemap-Eintrag). Bundle hatte zusätzlich og:site_name, og:image:alt und
# JSON-LD — diese werden hier bewusst weggelassen, weil sie Layout-Edits
# bräuchten (Skill-Regel: keine Layouts editieren). Ergebnis: SEO gleich
# zur Webinar-Seite, klar besser als Bundle (defektes Title-Escape, PNG
# statt JPG, kein Sitemap-Eintrag).
title: "HR-Workshop für moderne Arbeitswelten"
description: "Kostenloser HR-Workshop für moderne Arbeitswelten. Lernt, wie ihr Büros gestaltet, die Talente anziehen und langfristig halten."

# Brand-Akzent: Türkis/Mint (#01DBA2) — wie im Bundle (--sur-green / Mint).
accent_color: "turquoise"

section_order:
  - hero
  - stats
  - problem
  - benefits
  - program
  - process
  - testimonial
  - faq
  - form
  - secondary_cta

sections:
  nav: true
  hero: true
  social_proof_bar: false
  problem: true
  pricing: false
  program: true
  speakers: false
  benefits: true
  process: true
  testimonial: true
  about: false
  content_preview: false
  location: false
  faq: true
  form: true
  secondary_cta: true
  stats: true
  comparison: false
  cta_banner: false
  newsletter_signup: false
  contact_form: false
  transformation: false
  service_overview: false
  references: false
  footer: true

# Layout-Overrides — immitiert die Bundle-Optik: dunkle Sektionen wechseln
# sich mit hellen ab, Form & FAQ hell, Sekundär-CTA und "Warum kostenlos?"
# im Brand-Teal #133F42.
sections_layout:
  problem:
    background: "dark"
    title_color: "white"
    body_color: "white"
  benefits:
    background: "default"
  program:
    background: "dark"
    title_color: "white"
    body_color: "white"
  process:
    background: "default"
  testimonial:
    background: "#133F42"
    title_color: "white"
    body_color: "white"
  stats:
    background: "default"
  secondary_cta:
    background: "#133F42"
    title_color: "white"
    body_color: "white"

nav_cta_text: "Termin anfragen"

# Hero — Bundle-Look: dunkler Hintergrund mit Hero-Bild, weißer Text,
# kompakte Höhe (passt zum Bundle-Empfinden).
hero_variant: "fullbleed"
hero_size: "compact"
hero_eyebrow: "Kostenloser Workshop"
hero_title: "HR@WORK"
hero_subtitle: "Der kostenlose HR-Workshop für euer Büro — für Arbeitswelten, die Menschen anziehen, halten und zu Orten machen, an die man gerne zurückkehrt."
hero_image: "/pages/hr-work/hero.webp"
hero_image_alt: "Workshop-Szene mit Personen im Gespräch am Tisch — modernes Büro-Setting"
cta_text: "Termin sichern"
hero_trust_metrics:
  - value: "Kostenlos"
    label: "100 % unverbindlich"
  - value: "Präsenz & Online"
    label: "So wie es zu euch passt"
  - value: "2–3 Std."
    label: "Kompakt & wirksam"

# Stats — Bundle hatte keine separate Stats-Section; die 3 Kennzahlen
# sind als Hero-Trust-Metrics eingebunden. Hier als zusätzliche Light-Section
# für mehr Autorität.
stats_heading: "HR@WORK auf einen Blick"
stats:
  - value: "Kostenlos"
    label: "Wir schenken euch den Impuls"
  - value: "Präsenz & Online"
    label: "Bei euch, bei uns oder remote"
  - value: "HR + Räume"
    label: "Im Zusammenspiel gedacht"

# Problem — entspricht der Bundle-Sektion „HR gestaltet moderne Arbeitswelten".
problem_heading: "HR trägt heute mehr Verantwortung – auch für die Räume"
problem_intro: "Die Realität in vielen Unternehmen: HR soll Talente gewinnen und halten, Employer Branding stärken und „Back to Office“ sinnvoll gestalten — doch die Räume spielen dabei oft nicht mit. Genau hier setzt HR@WORK an."
problem_points:
  - "Mitarbeitende kommen ungern ins Büro, weil die Räume nicht zu ihrer Arbeit passen. HR spürt das — hat aber selten Hebel, etwas zu ändern."
  - "Auf der Karriere-Seite klingt alles modern. Wer dann ins Büro kommt, erlebt eine andere Realität. Die Lücke zwischen Claim und Erfahrung kostet euch Talente."
  - "Wenn die Räume nicht überzeugen, wird jede Präsenzdiskussion zur Belastung. HR@WORK hilft, das Thema konstruktiv und datenbasiert anzugehen."

# Benefits — entspricht Bundle-Sektion „Konkrete Ideen für die nächsten Schritte".
benefits_heading: "Dein Mehrwert"
benefits_intro: "Was der Workshop dir und deinem Team konkret bringt."
benefits:
  - headline: "Objektiver Expertenblick"
    description: "Aktuelles Trendwissen und ein ehrlicher Blick von außen — auf eure Räume, eure Kultur und das Zusammenspiel."
  - headline: "Klarheit über Stärken & Potenziale"
    description: "Wo steht ihr heute? Wo liegen eure Hebel? Ihr verlasst den Workshop mit einem klaren Bild statt vager Vermutungen."
  - headline: "Konkrete Umsetzungsideen"
    description: "Erste Schritte, die ihr direkt mitnehmen könnt — plus Motivation und Inspiration für alles, was danach kommt."

# Program — entspricht Bundle-Sektion „Drei Schritte. Ein klares Bild."
program_heading: "Drei Schritte. Ein klares Bild."
program_intro: "Von der Bestandsaufnahme bis zu ersten Ideen — strukturiert und auf euer Büro zugeschnitten."
program_items:
  - type: "Themenblock 1"
    title: "Bestandsaufnahme"
    description: "Wir schauen gemeinsam auf eure bestehende Arbeitsumgebung: Wie sind eure Räume geschnitten? Welche Zonen gibt es? Was funktioniert, was nicht? Wir bringen einen klaren, strukturierten Blick mit — und stellen die richtigen Fragen."
  - type: "Themenblock 2"
    title: "Bewertung"
    description: "Kommunikation, Employer Experience und Employer Branding im Blick. Wie erleben Mitarbeitende euer Büro? Wie passt das zu eurem Employer Branding? Wir prüfen, wo eure Räume eure HR-Strategie stärken — und wo sie ihr im Weg stehen."
  - type: "Themenblock 3"
    title: "Handlungsfelder"
    description: "Identifikation zentraler Handlungsfelder und Entwicklung erster Ideen. Am Ende steht ein klares Bild: Was sind eure drei wichtigsten Handlungsfelder? Welche ersten Maßnahmen haben den größten Hebel? Ihr nehmt konkrete Ideen mit, die direkt umsetzbar sind."

# Process — die 4 Schritte des Workshops (aus dem bestehenden Entwurf übernommen).
process_heading: "So läuft der Workshop"
process_intro: "Kompakt, strukturiert und mit klarem Ergebnis — in vier Schritten."
process_steps:
  - step_number: 1
    title: "Wunschdatum wählen"
    description: "Im Formular gebt ihr euer Wunschdatum an. Wir melden uns innerhalb von 2 Werktagen mit konkreten Terminvorschlägen."
  - step_number: 2
    title: "Vorbereitungs-Call"
    description: "Kurzer Call (10 Min.), um eure Erwartungen, Rahmenbedingungen und Schwerpunkte abzustimmen."
  - step_number: 3
    title: "Workshop"
    description: "2–3 Stunden, präsenz bei euch, in Wiesbaden oder online. Strukturiert, dialogorientiert, mit konkreten Ergebnissen."
  - step_number: 4
    title: "Ergebnis & nächste Schritte"
    description: "Ihr verlasst den Workshop mit klaren Handlungsfeldern, priorisierten Ideen und einer ehrlichen Einschätzung."

# Testimonial — entspricht Bundle-Sektion „Warum ist der Workshop kostenlos?"
# Bewusst als self-quote von Schumm & Rösch, weil der Bundle diese Sektion
# als Statement/Purpose positioniert hat (keine externe Testimonial-Person).
testimonial_heading: "Warum ist der Workshop kostenlos?"
testimonial_quote: "Wir möchten die Arbeitswelten der Zukunft positiv verändern. Mit HR@WORK schenken wir dir einen Impuls, um eure Räume und Kultur noch besser auf die Menschen auszurichten — und so gemeinsam die Arbeitswelt Stück für Stück besser zu machen."
testimonial_author: "Schumm & Rösch"
testimonial_role: "Unser Manifest"

# FAQ — bewährte Antworten aus dem bestehenden Entwurf übernommen.
faq_heading: "Häufige Fragen"
faq_intro: "Die wichtigsten Antworten rund um Ablauf, Format und Zielgruppe."
faq:
  - question: "Was kostet der Workshop?"
    answer: "Nichts. HR@WORK ist kostenlos. Wir möchten die Arbeitswelten der Zukunft positiv verändern und schenken euch den Impuls — ohne Verpflichtung."
  - question: "Wie lange dauert der Workshop?"
    answer: "In der Regel 2–3 Stunden — kompakt, strukturiert und mit klarem Ergebnis."
  - question: "Online oder vor Ort?"
    answer: "Beides möglich. Wir kommen zu euch, ihr kommt zu uns nach Wiesbaden — oder wir machen den Workshop online. Ihr entscheidet im Formular, was am besten passt."
  - question: "Wer sollte aus unserem Team dabei sein?"
    answer: "HR-Verantwortliche, People & Culture, Geschäftsführung, Workplace-Manager:innen — und alle, die Arbeitswelten aktiv gestalten."
  - question: "Was nehmen wir konkret mit?"
    answer: "Klarheit über Stärken und Potenziale eurer Arbeitsumgebung, einen objektiven Expertenblick, konkrete erste Ideen und priorisierte Handlungsfelder."
  - question: "Müssen wir uns auf den Workshop vorbereiten?"
    answer: "Nein. Wir bringen die Struktur mit. Hilfreich ist, wenn ihr vorab eure aktuellen Themen und offenen Fragen notiert — damit wir die Zeit im Workshop optimal nutzen können."
  - question: "Wie geht es nach dem Workshop weiter?"
    answer: "Ihr entscheidet selbst, ob und wie ihr die Ergebnisse umsetzt. Auf Wunsch begleiten wir euch weiter — aber es gibt keinerlei Verpflichtung."
  - question: "Was unterscheidet HR@WORK von anderen HR-Workshops?"
    answer: "Wir glauben: HR trägt heute mehr denn je Verantwortung für die Gestaltung moderner Arbeitswelten – und dazu gehören auch Räume. Unser Workshop ist deshalb kein klassisches HR-Training, sondern ein kompakter, strukturierter Review eurer HR-Strategie im Hinblick auf eure Arbeitsumgebung. Wir prüfen, wie Räume dazu beitragen können, Talente zu gewinnen und langfristig zu binden, wie eure Offices eure Unternehmenskultur widerspiegeln — und wie Themen wie „Back to Office“ sinnvoll integriert werden können. Dabei steht der Mensch immer im Mittelpunkt – wir beginnen mit dem Warum."

# Form — gleiche HubSpot-Konfiguration wie im Bundle.
form_title: "Kostenlosen Workshop-Termin anfragen"
form_intro: |
  Wählt euer Wunschdatum und entscheidet, ob der Workshop bei euch vor Ort, in Wiesbaden oder online stattfinden soll. Wir melden uns innerhalb von 2 Werktagen mit konkreten Terminvorschlägen.
form_cta: "Kostenlosen Termin anfragen"
form_success_message: "Danke! Eure Anfrage ist eingegangen — wir melden uns innerhalb von 2 Werktagen mit Terminvorschlägen."
form_privacy_note: "Ich willige ein, dass meine Angaben zur Workshop-Anfrage bei Schumm & Rösch gespeichert und über HubSpot verarbeitet werden."
hubspot_portal_id: "146949753"
hubspot_form_id: "e2d42711-8e84-4de4-a172-9a12d1ff1ccd"
hubspot_embed: true

secondary_cta_heading: "Ihr wollt mehr als einen Impuls?"
secondary_cta_text: "Aus dem Workshop kann ein konkretes Projekt werden — von der Potenzialanalyse bis zur Umsetzung. Sprecht uns an, wenn ihr über den Workshop hinaus Unterstützung wollt."
secondary_cta_button: "Sprecht uns an"
secondary_cta_href: "mailto:info@schumms.com"
---
