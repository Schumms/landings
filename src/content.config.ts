import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { ALL_SECTION_IDS, CONTENT_SECTION_IDS } from "./src/lib/sections";

const sectionFlags = Object.fromEntries(
  ALL_SECTION_IDS.map((id) => [id, z.boolean().optional()]),
) as Record<(typeof ALL_SECTION_IDS)[number], z.ZodOptional<z.ZodBoolean>>;

const sectionsSchema = z.object(sectionFlags).optional();

const benefitItem = z.object({
  headline: z.string(),
  description: z.string(),
});

const processStep = z.object({
  title: z.string(),
  description: z.string(),
});

const metricItem = z.object({
  value: z.string(),
  label: z.string(),
});

const logoItem = z.object({
  name: z.string(),
  image: z.string().optional(),
});

const speakerItem = z.object({
  name: z.string(),
  title: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().optional(),
  image_alt: z.string().optional(),
});

const programItem = z.object({
  type: z.string().optional(),
  title: z.string(),
  speaker: z.string().optional(),
  role: z.string().optional(),
  organization: z.string().optional(),
  organization_logo: z.string().optional(),
  description: z.string().optional(),
});

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const contentPreviewItem = z.object({
  title: z.string(),
  description: z.string().optional(),
});

const sectionLayoutSchema = z
  .object({
    align: z.enum(["left", "center"]).optional(),
    width: z.enum(["narrow", "normal", "wide", "full"]).optional(),
    background: z
      .enum(["default", "muted", "dark", "accent"])
      .optional(),
    text_align: z.enum(["left", "center"]).optional(),
  })
  .optional();

const sectionsLayoutSchema = z.record(z.string(), sectionLayoutSchema).optional();

const landingSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  published: z.boolean().default(false),
  title: z.string().max(60),
  description: z.string().max(160),
  sections: sectionsSchema,
  section_order: z.array(z.enum(CONTENT_SECTION_IDS)).optional(),
  sections_layout: sectionsLayoutSchema,

  nav_cta_text: z.string().optional(),

  hero_eyebrow: z.string().optional(),
  hero_title: z.string().max(80),
  hero_subtitle: z.string().max(300),
  hero_image: z.string().optional(),
  hero_image_alt: z.string().optional(),
  hero_variant: z.enum(["default", "fullbleed"]).optional(),
  // Per-Page Hero-Größe (nur in Verbindung mit hero_variant: "fullbleed" wirksam).
  // "compact" reduziert min-height und Padding für kompaktere Hero-Bereiche.
  hero_size: z.enum(["default", "compact"]).optional(),
  cta_text: z.string(),
  cta_href: z.string().url().optional(),
  // Per-Page-Akzentfarbe. Default "coral" wenn nicht gesetzt.
  accent_color: z.enum(["coral", "turquoise", "violet"]).optional(),
  hero_trust_metrics: z.array(metricItem).max(3).optional(),

  social_proof_text: z.string().optional(),
  social_proof_metrics: z.array(metricItem).max(3).optional(),
  social_proof_logos: z.array(logoItem).max(8).optional(),
  social_proof_logos_monochrome: z.boolean().optional(),

  problem_heading: z.string().optional(),
  problem_intro: z.string().optional(),
  problem_points: z.array(z.string()).min(1).max(3).optional(),

  pricing_eyebrow: z.string().optional(),
  pricing_label: z.string().optional(),
  pricing_amount: z.string().optional(),
  pricing_currency: z.string().optional(),
  pricing_text: z.string().optional(),
  pricing_cta: z.string().optional(),

  program_heading: z.string().optional(),
  program_intro: z.string().optional(),
  program_items: z.array(programItem).optional(),

  speakers_heading: z.string().optional(),
  speakers_tagline: z.string().optional(),
  speakers: z.array(speakerItem).optional(),

  location_heading: z.string().optional(),
  location_intro: z.string().optional(),
  location_venue: z.string().optional(),
  location_address: z.string().optional(),
  location_phone: z.string().optional(),
  location_email: z.string().optional(),
  location_image: z.string().optional(),
  location_image_alt: z.string().optional(),

  transformation_heading: z.string().optional(),
  transformation_before: z.string().optional(),
  transformation_after: z.string().optional(),

  benefits_heading: z.string().optional(),
  benefits_intro: z.string().optional(),
  benefits: z.array(benefitItem).min(3).max(5).optional(),

  process_heading: z.string().optional(),
  process_steps: z.array(processStep).min(3).max(8).optional(),

  testimonial_heading: z.string().optional(),
  testimonial_quote: z.string().optional(),
  testimonial_author: z.string().optional(),
  testimonial_role: z.string().optional(),
  testimonial_company: z.string().optional(),
  testimonial_image: z.string().optional(),
  testimonial_video_url: z.string().url().optional(),

  about_heading: z.string().optional(),
  about_name: z.string().optional(),
  about_title: z.string().optional(),
  about_image: z.string().optional(),
  about_bio: z.string().optional(),
  // 3 kurze Haltungs-Zitate als Boxen unter dem Bio-Block (z.B. "Wir sind professionell, ohne distanziert zu sein.").
  about_quotes: z.array(z.string()).max(4).optional(),
  // Team-Grid: bis zu 4 Personen mit Name, Rolle, optionalem Bild.
  about_team: z.array(speakerItem).max(4).optional(),

  // Neue Section: Referenz-Karten (3-Spalten-Grid mit Bild, Branche, Challenge, Ergebnis).
  references_heading: z.string().optional(),
  references_intro: z.string().optional(),
  references: z
    .array(
      z.object({
        industry: z.string(),
        size: z.string().optional(),
        challenge: z.string(),
        result: z.string(),
        image: z.string().optional(),
        image_alt: z.string().optional(),
      }),
    )
    .min(1)
    .max(6)
    .optional(),
  references_cta_text: z.string().optional(),
  references_cta_href: z.string().url().optional(),
  // Optionales Abschluss-Zitat der Sektion (auf einer eigenen Karte).
  references_closing_quote: z.string().optional(),

  // Service-Übersicht: 3–6 Cards mit Kernleistungen (z.B. Beratung / Planung / Einrichtung).
  // Jede Card hat optionale Eyebrow-Nummer, Title, Description, Bullets, Bild und CTA.
  // Layout: "grid" (Default, 3 Spalten) oder "rows" (1 Spalte mit Icon links + Trennlinien).
  service_overview_heading: z.string().optional(),
  service_overview_intro: z.string().optional(),
  service_overview_layout: z.enum(["grid", "rows"]).optional(),
  service_overview: z
    .array(
      z.object({
        eyebrow: z.string().optional(),
        title: z.string(),
        description: z.string(),
        bullets: z.array(z.string()).max(5).optional(),
        image: z.string().optional(),
        image_alt: z.string().optional(),
        icon: z.string().optional(),
        cta_text: z.string().optional(),
        cta_href: z.string().optional(),
      }),
    )
    .min(3)
    .max(6)
    .optional(),

  content_preview_heading: z.string().optional(),
  content_preview_intro: z.string().optional(),
  content_preview_image: z.string().optional(),
  content_preview_image_alt: z.string().optional(),
  content_preview_items: z.array(contentPreviewItem).optional(),

  faq_heading: z.string().optional(),
  faq_intro: z.string().optional(),
  faq: z.array(faqItem).optional(),

  form_title: z.string(),
  form_intro: z.string().optional(),
  form_cta: z.string(),
  form_webhook: z.string().url().optional(),
  form_download_url: z.string().url().optional(),
  form_success_message: z.string().optional(),
  form_privacy_note: z.string().optional(),
  // "Was du bekommst"-Bullet-Liste über dem Formular (z.B. für Leadmagneten).
  form_what_you_get: z.array(z.string()).max(6).optional(),
  form_what_you_get_heading: z.string().optional(),

  // Optionale Felder für LeadForm (jede Page schaltet sie via Frontmatter ein).
  form_show_salutation: z.boolean().optional(),
  form_show_phone: z.boolean().optional(),
  form_show_employee_count: z.boolean().optional(),
  form_show_message: z.boolean().optional(),
  form_split_name: z.boolean().optional(),
  form_salutation_options: z.array(z.string()).optional(),
  form_employee_count_options: z.array(z.string()).optional(),
  form_message_label: z.string().optional(),
  form_message_max_length: z.number().int().positive().optional(),

  hubspot_portal_id: z.string().optional(),
  hubspot_form_id: z.string().optional(),
  // Wenn true, wird statt der Forms-API-Implementierung der HubSpot-Embed
  // (hbspt.forms.create) geladen. Nützlich für Felder, die das Template nicht
  // nativ kennt (z.B. Anrede + Session-Auswahl in einem Schritt). Voraussetzung:
  // hubspot_portal_id + hubspot_form_id sind gesetzt. Default false = Forms API.
  hubspot_embed: z.boolean().optional(),

  // Zweite Form-Section (z.B. Kontaktformular am Seitenende).
  // Wenn vorhanden, wird sie als eigenständige Section gerendert.
  contact_form_title: z.string().optional(),
  contact_form_intro: z.string().optional(),
  contact_form_cta: z.string().optional(),
  contact_form_privacy_note: z.string().optional(),
  contact_form_success_message: z.string().optional(),
  contact_form_hubspot_form_id: z.string().optional(),
  contact_form_show_message: z.boolean().optional(),
  contact_form_show_phone: z.boolean().optional(),
  contact_form_phone_required: z.boolean().optional(),
  contact_form_message_label: z.string().optional(),
  contact_form_message_max_length: z.number().int().positive().optional(),
  contact_form_secondary_cta_label: z.string().optional(),
  contact_form_secondary_cta_href: z.string().optional(),
  contact_form_reassurance: z.string().optional(),
  contact_form_address: z.string().optional(),

  secondary_cta_heading: z.string().optional(),
  secondary_cta_text: z.string().optional(),
  secondary_cta_button: z.string().optional(),
  secondary_cta_href: z.string().optional(),

  // Stats / Key-Figures: 3–6 große Zahlen für Autoritätsaufbau (z.B. 15+ Jahre · 500+ Projekte).
  stats_heading: z.string().optional(),
  stats_intro: z.string().optional(),
  stats: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
        subtext: z.string().optional(),
      }),
    )
    .min(3)
    .max(6)
    .optional(),

  // Vergleichstabelle: 3–8 Rows, zwei Spalten (label_a vs. label_b).
  // Optional eine Spalte via highlight ("a" oder "b") visuell hervorheben.
  comparison_heading: z.string().optional(),
  comparison_intro: z.string().optional(),
  comparison_label_a: z.string().optional(),
  comparison_label_b: z.string().optional(),
  comparison_highlight: z.enum(["a", "b"]).optional(),
  comparison: z
    .array(
      z.object({
        feature: z.string(),
        value_a: z.string(),
        value_b: z.string(),
      }),
    )
    .min(3)
    .max(8)
    .optional(),

  // CTA-Banner (Mid-Page): schmale Conversion-Bar ohne Formular.
  cta_banner_heading: z.string().optional(),
  cta_banner_text: z.string().optional(),
  cta_banner_button: z.string().optional(),
  cta_banner_href: z.string().optional(),

  // Newsletter-Signup: Mini-Formular (nur E-Mail + DSGVO) als dritter Conversion-Pfad.
  newsletter_heading: z.string().optional(),
  newsletter_intro: z.string().optional(),
  newsletter_bullets: z.array(z.string()).max(5).optional(),
  newsletter_placeholder: z.string().optional(),
  newsletter_cta: z.string().optional(),
  newsletter_privacy_note: z.string().optional(),
  newsletter_success_message: z.string().optional(),
  newsletter_hubspot_portal_id: z.string().optional(),
  newsletter_hubspot_form_id: z.string().optional(),
  newsletter_webhook: z.string().url().optional(),

  // Text + Bild: minimalistische Split-Section — Headline, Intro und Text links, Bild rechts.
  // Optional Variante "image-left-text-right" für gespiegeltes Layout.
  text_image_heading: z.string().optional(),
  text_image_intro: z.string().optional(),
  text_image_text: z.string().optional(),
  text_image_image: z.string().optional(),
  text_image_image_alt: z.string().optional(),
  text_image_layout: z.enum(["text-left-image-right", "image-left-text-right"]).optional(),

  // Feature + Bild: Eyebrow + Headline + Text links, Bild rechts. Prominenter als text_image.
  // Ideal für Phase-Beschreibungen, Vorher/Nachher mit visuellem Anker, Feature-Highlights.
  feature_image_eyebrow: z.string().optional(),
  feature_image_heading: z.string().optional(),
  feature_image_intro: z.string().optional(),
  feature_image_text: z.string().optional(),
  feature_image_image: z.string().optional(),
  feature_image_image_alt: z.string().optional(),
  feature_image_layout: z.enum(["text-left-image-right", "image-left-text-right"]).optional(),

  /** Footer-Claim für die Landingpage (z.B. "Mutig. Prägend. Zukunftsgerichtet."). */
  footer_claim: z.string().optional(),

  /** Per-Section layout modifier (für non-tech iteration). Beispiel: section_modifiers: { problem: ["centered"] } */
  section_modifiers: z.record(z.string(), z.array(z.string())).optional(),
});

const pages = defineCollection({
  loader: glob({ base: "./src/content/pages", pattern: "**/[^_]*.{md,mdx}" }),
  schema: landingSchema,
});

export const collections = { pages };
