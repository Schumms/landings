import type { CollectionEntry } from "astro:content";

export type LandingPage = CollectionEntry<"pages">;
export type LandingPageData = LandingPage["data"];

/**
 * Per-Section Layout Override — lets non-technical users iterate on layout
 * (alignment, width, background) without editing templates.
 *
 * All values reference theme tokens via utility classes (see global.css).
 * Safe defaults: existing pages render identically.
 */
export type SectionLayoutAlign = "left" | "center";
export type SectionLayoutWidth = "narrow" | "normal" | "wide" | "full";
export type SectionLayoutBackground =
  | "default"
  | "muted"
  | "dark"
  | "accent";

export type SectionLayout = {
  /** Text alignment within the section. */
  align?: SectionLayoutAlign;
  /** Container width override. `narrow` ≈ 48rem, `wide` ≈ 90rem, `full` = 100%. */
  width?: SectionLayoutWidth;
  /** Background variant. `default` = white, `muted` = light grey, `dark` = black, `accent` = coral. */
  background?: SectionLayoutBackground;
  /** Explicit text-align for prose (independent of section-level align). */
  text_align?: "left" | "center";
};

/** Map of section id → layout override. */
export type SectionsLayout = Record<string, SectionLayout>;
