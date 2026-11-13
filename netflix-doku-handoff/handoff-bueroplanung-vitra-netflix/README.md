# Handoff — Büroplanung Landing Page („Mach dein Büro bereit für die Zukunft“)

Source: `Bueroplanung_Vitra_Netflix.dc.html` (Claude Design, Schumm und Rösch
design system). For a third-party team rebuilding the page in **Astro**
(Hermes / Astra). `page-reference.html` is the visual + behavioural truth —
open it in any browser, no build step.

## Package contents

```
handoff-bueroplanung-vitra-netflix/
├── page-reference.html   ← self-contained; one inline vanilla-JS block (form submit)
├── fonts/                ← Buenos Aires woff2: Light 300, Book 350, Regular 400, SemiBold 600, Bold 700, Black 900
├── images/               ← all 5 images the page uses, WebP, plain relative paths
└── README.md
```

### Images — complete list (all used, none missing)

| File | Used in | Source → note | Size |
|---|---|---|---|
| `images/hero-workshop-situation.webp` | Hero photo | `sur_workshop-11-mub6rl72-frbp.jpg` (6000×4000 JPG) → resized to 2400×1600 WebP | 2400×1600 |
| `images/sur-logo-white.webp` | Logo (hero + footer) | `assets/logos/SuR_Logo_white.png` → WebP, transparency kept | 1000×84 |
| `images/referenz-reuter-gala-bau.webp` | Kunden card 1 | image-slot `case-tech` | 497×746 (portrait) |
| `images/referenz-circadia-europe.webp` | Kunden card 2 | image-slot `case-beratung` | 746×497 |
| `images/referenz-hasbro-deutschland.webp` | Kunden card 3 | image-slot `case-industrie` | 498×746 (portrait) |

- All are real `<img>` tags with explicit `width`/`height` (intrinsic pixel size)
  — no CSS backgrounds, no data-URIs, no JS-injected sources.
- **Case-photo framing:** the design shows the three case photos in a 4:3 frame
  with a manually set crop. That crop is reproduced with `object-fit:cover` +
  an inline `object-position` on each `<img>` (`50% 49%`, `34% 50%`, `50% 63%`).
  Keep those values; the files themselves are the uncropped originals.
- **Hero:** if the original 6000×4000 file is needed, it's
  `sur_workshop-11-mub6rl72-frbp.jpg` in the design project; 2400 px is ample
  for the ~600 px slot at 2× density.
- Case photos are only ~500–750 px on the long edge — fine at the ~370 px card
  width, soft on 3× screens. Request higher-res originals if available.
- Not on the page and therefore not included: `sur_workshop-11-mrnknt9n-4mzq.jpg`,
  `sur_workshop-11b-mub6sjmv-y4o3.jpg`, `neuro_fidgit-mrnkof89-fhre.jpg`.

## Components used (data-component checklist)

| data-component | Astro source | Notes |
|---|---|---|
| `Logo` (white) | `astro/src/components/ui/Logo.astro` | hero + footer, 26 px high |
| `Eyebrow` | `astro/src/components/ui/Eyebrow.astro` | `color` per section: **green** → Hero, Planungsfragen, Kontakt; **purple** → Unser Vorgehen, Unsere Kunden, FAQ. Kontakt uses `--sur-green` (#01DBA2, same as the button). |
| `Button` | `astro/src/components/ui/Button.astro` | `primary/lg` (hero CTA), `primary/full` (form submit), `outline` (“Neue Anfrage”) |
| `Card` | `astro/src/components/ui/Card.astro` | `default` ×4 (Planungsfragen), `elevated` ×1 (Kontakt form) |
| `Input` | `astro/src/components/ui/Field.astro` | 8 fields; Anrede is a native `<select>` (`data-component-variant="select"`), Wunschdatum/Uhrzeit native date/time |
| `Checkbox` | — none exists in `astro/src/components/ui/` | DSGVO consent; built inline (20 px square, ink accent). Create a `Checkbox.astro` or fold into `Field.astro`. |
| `Figure` | `astro/src/components/ui/Figure.astro` | Hero photo + 3 case photos. **Gap:** `Figure` only takes `height`/`width`, not `aspect-ratio` or `object-position` — add both props (cases need `aspect-ratio:4/3` + per-image `object-position`). |

Not design-system components (build as page/section markup): process stage
rows (ink-circle number + title + text), FAQ accordion (native `<details>`),
statement, case cards (plain bordered `<article>`, **square — no radius**).
Note `astro/src/components/sections/bueroplanung/` is empty — this page has
no Astro build yet; build fresh from `page-reference.html`.

## Section order

Hero (dark `#133F42`) → Planungsfragen (mist `#ECF7F2`) → Prozess (white) →
Unsere Kunden (white) → Statement (grey `#F1F1F1`) → FAQ (grey `#F1F1F1`) →
Kontakt (dark `#133F42`) → Footer (ink `#14201C`).
No nav menu (per brief). The only anchor is `#kontakt` (hero CTA).

## Bugs found & fixed in this package

Working-file leftovers cleaned from the design source while building
`page-reference.html`:

1. **Hero photo had no real alt text** — source was a CSS-background `<div>`
   with `aria-label="Reales Projektfoto folgt"` (placeholder text). Now a
   real `<img>` with a descriptive `alt`.
2. **Case photos were `<image-slot>` editor elements** (design-tool only,
   state stored in a sidecar JSON). Replaced by plain `<img>` + `alt`.
3. **Statement paragraph had canvas drag-resize leftovers**: fixed
   `width:1096px;height:142px` on the `<p>` inside an 820 px container
   (pushed the text off-centre). Replaced by a 1100 px max-width container,
   `text-wrap:balance`, centred; font-size is `clamp(1.6rem,3.2vw,2.1875rem)`
   (= the original 35 px at desktop, scales down on mobile).
4. **Hero lead had a leading `&nbsp;`** from a direct edit — removed.
5. **Stray/unlabelled markup in the source**: empty comment-only blocks
   (“Block 1 — Hero”, “Referenzen”), mislabeled comments (“Block 2 — Die fünf
   Planungsfragen” on the hero, “Block 7 — Kontakt” on the FAQ), and an unused
   `STATS` array. None are in the package.
6. **Hero H1 had two nested colour spans** with a hard `<br>` — rewritten as
   `Mach dein Büro <br>bereit <em>für die Zukunft.</em>` (white + green,
   `em` reset to non-italic).
7. **Eyebrow text “Unsere KUNDEN”** was hand-typed in capitals; the Eyebrow
   already uppercases → written as “Unsere Kunden”.
8. **Heading hierarchy**: one `<h1>` (hero), one `<h2>` per section, `<h3>`
   only inside a section’s `<h2>`. No skipped levels.
9. No leftover `position:absolute`, no fixed px widths/heights on layout
   containers remain, no duplicate IDs.

**Meta**: title, description, `og:title/description/type/image` added (the
working preview had none). Replace `og:image` with an absolute URL at deploy.

### Content notes for the client (not changed)

- All three case cards use the label **“Kundenstimme”**, but **Hasbro** has no
  quote — it shows a project description under a bold line that reads as a
  headline (“Desksharing mit Fokus- und Kreativzonen”). Reuter/Circadia bold
  lines are the person’s name/title. Consider a different label or a real quote.
- Circadia quote uses straight `"` quotes and “Solution- ein”; Reuter uses
  German „…“. Typography is inconsistent — copied verbatim.
- Hero lead (“…begleitet *diesen Prozess*…”) no longer has a preceding
  sentence that defines “diesen Prozess”. Copy kept as in the design.
- Statement and FAQ share the same `#F1F1F1` background and read as one
  band; Prozess and Kunden are both white. Intentional in the design as-is.

## Functional logic — read before building

### Contact form → HubSpot Forms API (real)

`#kontakt` posts in the background (no HubSpot embed/iframe/script):

```
POST https://api.hsforms.com/submissions/v3/integration/submit/146949753/f9b6015b-7d6c-4e0e-a53e-d466e601bffc
Content-Type: application/json

{ "fields": [{ "name": "...", "value": "..." }, ...],
  "context": { "pageUri": "...", "pageName": "..." } }
```

- Portal `146949753`, Form `f9b6015b-7d6c-4e0e-a53e-d466e601bffc`.
- Eight fields → internal names **(inferred, unverified)**: `salutation`,
  `firstname`, `lastname`, `company`, `email`, `phone`, `preferred_date`,
  `preferred_time`. **Confirm in HubSpot** (Marketing → Forms → this form →
  field settings) before go-live; `preferred_date`/`preferred_time` are the most
  likely to differ (custom properties). A wrong name can silently drop data —
  do a real test submission.
- `dsgvo` checkbox is required client-side but **not sent** (not part of the
  payload). If the HubSpot form has a consent/legal field, add it.
- Validation: all 8 fields + checkbox required; email against `/.+@.+\..+/`.
  Failure → inline `role="alert"` message. Success → form hidden, “Danke!”
  panel; “Neue Anfrage” resets the form.
- Submit button disables and reads “Wird gesendet …” while the request runs.
- Reference implementation: inline `<script>` at the end of
  `page-reference.html` (`FUNCTIONAL:`). Port as an Astro client-side
  `<script>` in the Contact section component.

### Animations / scroll behaviour

None. FAQ accordion is native `<details>/<summary>` (zero JS). The hero CTA
is a plain `href="#kontakt"` anchor (the design used JS smooth-scroll; add
`html{scroll-behavior:smooth}` if wanted).

### Other side effects

None — no tracking pixels, no external scripts or fonts, only the fetch above.

## Tokens

`page-reference.html` inlines the full token set as CSS custom properties
(colours, type, radius, shadow, easing, container). **Shared with the design
system** (as loaded by the live design): `--sur-green/-orange/-purple`,
`--sur-ink`, `--sur-mist` (= `--surface-mint`), grey ramp, `--green-*`,
`--orange-*`, `--border-*`, `--text-*`, `--radius-card: 6px`, `--shadow-md`,
`--shadow-focus`, `--container-max: 1200px`.

**Page-level, do NOT merge into global tokens**
- `--page-band-dark: #133F42` — hero + Kontakt background (hard-coded in the design).
- `--page-band-grey: #F1F1F1` — statement + FAQ background (hard-coded).

**⚠ Ink inconsistency to resolve with design:** the design-system tokens file
defines `--sur-ink` as **#14201C**, while the brand guide and this page’s
dark bands use **#133F42**. On this page text, stage circles and the *footer*
use `#14201C`, while hero/Kontakt bands use `#133F42` — so the footer is a
slightly different dark than the hero. Reproduced as designed; decide whether
`--sur-ink` should be `#133F42` globally.

**Radii:** square (0) on buttons, inputs, checkbox, images and case cards;
`--radius-card` (6 px) on the `Card` component (question cards, form card).
Unlike the earlier Büroplanung package there is **no** radius-zero override.

Typography: Buenos Aires only. H1/H2 Black 900, tracking −0.02em; body
Regular 400, 1.55 line-height; eyebrows Bold 700, 0.16em, uppercase.
