/**
 * Landing page section registry — content sections with frontmatter visibility flags.
 *
 * Agents control sections via `sections:` object in frontmatter.
 * Optional `section_order:` overrides render order (e.g. partners at bottom for events).
 */

export const CONTENT_SECTION_IDS = [
  "hero",
  "social_proof_bar",
  "problem",
  "pricing",
  "program",
  "transformation",
  "benefits",
  "process",
  "speakers",
  "testimonial",
  "references",
  "service_overview",
  "about",
  "content_preview",
  "location",
  "faq",
  "form",
  "contact_form",
  "secondary_cta",
  "stats",
  "comparison",
  "cta_banner",
  "newsletter_signup",
  "text_image",
] as const;

export const LAYOUT_SECTION_IDS = ["nav", "footer"] as const;

export const ALL_SECTION_IDS = [
  ...LAYOUT_SECTION_IDS,
  ...CONTENT_SECTION_IDS,
] as const;

export type ContentSectionId = (typeof CONTENT_SECTION_IDS)[number];
export type LayoutSectionId = (typeof LAYOUT_SECTION_IDS)[number];
export type SectionId = (typeof ALL_SECTION_IDS)[number];

export type SectionVisibility = Partial<Record<SectionId, boolean>>;

/** Default visibility — lead-magnet baseline; event sections off by default */
export const DEFAULT_SECTION_VISIBILITY: Record<SectionId, boolean> = {
  nav: true,
  hero: true,
  social_proof_bar: true,
  problem: false,
  pricing: false,
  program: false,
  transformation: true,
  benefits: true,
  process: true,
  speakers: false,
  testimonial: true,
  references: false,
  service_overview: false,
  about: false,
  content_preview: true,
  location: false,
  faq: true,
  form: true,
  contact_form: false,
  secondary_cta: true,
  stats: false,
  comparison: false,
  cta_banner: false,
  newsletter_signup: false,
  text_image: false,
  footer: true,
};

export function resolveSectionVisibility(
  sections?: SectionVisibility,
): Record<SectionId, boolean> {
  return { ...DEFAULT_SECTION_VISIBILITY, ...sections };
}

export function resolveContentSections(
  sections?: SectionVisibility,
  order?: ContentSectionId[],
): ContentSectionId[] {
  const visibility = resolveSectionVisibility(sections);
  const ids = order?.length ? order : [...CONTENT_SECTION_IDS];
  return ids.filter((id) => visibility[id]);
}

export const SECTION_LABELS: Record<SectionId, string> = {
  nav: "Navigation",
  hero: "Hero",
  social_proof_bar: "Social Proof Bar",
  problem: "Problem / Schmerz",
  pricing: "Preis / Ticket",
  program: "Programm / Agenda",
  transformation: "Lösung / Transformation",
  benefits: "Nutzen / Benefits",
  process: "Prozess",
  speakers: "Speaker",
  testimonial: "Testimonial",
  references: "Referenzen",
  service_overview: "Service-Übersicht",
  about: "Über uns / Trust",
  content_preview: "Inhalt / Was du bekommst",
  location: "Location / Anfahrt",
  faq: "FAQ",
  form: "Formular / CTA",
  contact_form: "Kontaktformular",
  secondary_cta: "Sekundärer CTA",
  stats: "Stats / Key-Figures",
  comparison: "Vergleichstabelle",
  cta_banner: "CTA-Banner (Mid-Page)",
  newsletter_signup: "Newsletter-Signup",
  text_image: "Text + Bild",
  footer: "Footer",
};
