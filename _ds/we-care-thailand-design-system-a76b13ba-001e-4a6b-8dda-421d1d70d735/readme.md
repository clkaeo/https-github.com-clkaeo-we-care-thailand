# We Care Thailand — Design System

The brand system for **We Care** (วีแคร์), a Koh Samui–based cleaning, laundry and property-management group operating across Thailand. This repository holds the colour system, typography, spacing, real brand assets, reusable React primitives and a recreation of the public website, so that any new page, deck, flier or prototype can be built on-brand without guesswork.

---

## 1. Company & product context

**We Care** was established in **2019** in Koh Samui. Its own words: *"We Care is a cleaning company committed to providing a full range of high-quality cleaning services; with long experiences in the industry including a team of experts."* The group tagline, set in wide-tracked caps on every cover: **"NOT ONLY CLEANING BUT ALSO CARING — care that comes to your residents."**

### The group companies

| Company | What it does | Accent colour |
| --- | --- | --- |
| **We Care Service and Management Co., Ltd.** — the parent | Ultimate cleaning services, Kärcher authorised dealership & retail shop, villa/property management. 12/29 Moo 1, Maenam, Koh Samui, Surat Thani 84330 | Sage + gold |
| **We Care Laundry Factory Co., Ltd.** | Industrial laundry for hotels, villas, restaurants, spas and serviced apartments. 11/39 Moo 4, Lipa Noi, Koh Samui. 10+ tons of linen/day, 140 KVA backup generator | Azure blue |
| **We Care Vacation** | Holiday-rental / villa arm (lockup present in the 2026 laundry profile) | Sage + gold |
| **We Care Bangkok** | Regional expansion | Sage + gold (brass) |
| **We Care Phuket** | Regional expansion | Azure blue |
| **We Care Hua Hin** | Regional expansion | Sun yellow |

The three regional palettes come verbatim from the 2026 corporate colour sheet (`assets/brand/color-palettes-2026.jpg`). All of them share the same sage green at 60% and the same near-black at 10% — only the 30% accent changes. That is the single most important structural fact about this brand: **one green, many accents.**

### Surfaces this system covers

1. **Marketing website** — `wecareservice-management.com`, bilingual TH/EN, WordPress + Elementor. IA: Cleaning Services (Cleaning Supplies, Carpet, Upholstery, Mattress, Window, Floor & Surface Workshop) · Laundry Factory · Karcher Authorized Dealer · Property Management (Our Villas) · About Us · Contact. Recreated in `ui_kits/website/`.
2. **Company profile decks** — the 2026 "@WeCare Thailand" (21 pp) and "We Care Laundry Factory" (16 pp) PDFs. Their layout language (wide-tracked caps section titles, BEFORE/AFTER proof grids, timeline story, partner and customer walls) informed the marketing components.

### Values (used verbatim in About copy)

Wholeheartedness · Excellence · Caring · Agility · Responsibility and Respect · Evolution.

### Timeline story (2019 → 2027)

2019 A Humble Beginning · 2020 Growing Through Change · 2021 Making Ourselves Known · 2022 New Steps Forward · 2023 Expanding Our Reach · 2024 New Milestones, Growing Family (website launch + brand refresh) · 2025 Raising the Standard (authorised dealer of surface coating products) · 2026 Regional Expansion · 2027 Looking Ahead.

### Sources given to me

- `uploads/@WeCare Thailand-Profile-2026.pdf` — 21-page group profile (text + imagery extracted).
- `uploads/2026-We Care Laundry Factory-Profile.pdf` — 16-page laundry profile.
- `uploads/1788056092907.jpg` — the 2026 corporate colour sheet for Bangkok / Phuket / Hua Hin (exact HEX/RGB/CMYK). Copied to `assets/brand/color-palettes-2026.jpg`.
- `https://www.wecareservice-management.com/th/` and `/` — live site, read for IA, section order and English/Thai copy.
- **Not received:** `20251001-WeCare-since2019-CorporateIdentity.pdf` was listed in the brief but did not arrive in `uploads/`. It almost certainly contains the official typeface names, logo clear-space rules and the parent-brand palette. Please attach it — see *Open questions* at the end.

---

## 2. Content fundamentals

**Voice: warm, deferential, service-industry formal.** The brand writes as **"we"** and addresses the reader as **"you" / "your"**. Never "I". Never the customer's name.

**Casing.** Headings are **Title Case or sentence case, never all-caps** in web UI — *"Your premier partner for Cleaning Solutions and Property Management"*, *"Live in a Clean & Fresh Atmosphere"*, *"Let's Make Your Premises a Better Place"*. All-caps is reserved for two things: the small tracked eyebrow above a heading (`ABOUT US`, `WHY CHOOSE US`, `GET STARTED`) and the print-deck section titles (`OUR SERVICES`, `OUR MAINTENANCE PROCESS`).

**Sentence shape.** One promise, then the proof. Openers lean on a small set of stock phrases and you should keep using them — they *are* the brand voice:

- "Welcome to We Care, your premier choice for any cleaning services and property management in Thailand"
- "At We Care Ultimate Services, we pride ourselves on being your premier destination for…"
- "Restore the beauty and freshness of your carpets with our professional carpet cleaning service."
- "Give your furniture a new lease on life with our upholstery cleaning service."
- "Because a cleaner carpet means a healthier, cozier space."

**Superlatives are allowed and expected** — *premier, ultimate, exceptional, top-tier, high-standard, utmost, unwavering*. This is not a restrained modernist brand; it is a proud service brand. But superlatives always attach to a concrete service, never float alone.

**Nouns over verbs in navigation.** "Cleaning Services", "Laundry Factory", "Property Management", "Our Villas". CTAs are short verb phrases: "Our Services", "Contact Us", "Learn More", "Read More".

**Proof is quantitative when it can be.** "over 10 tons of linen per day", "140 KVA generator (Ricardo R4105ZD)", "since 2019", "room safe for use after 30–60 minutes", "cleaning every 4-day stay, bedsheets every 7-day stay". Never invent a figure — every number in this system is traceable to the profile decks.

**Em-dash asides and short standalone lines** carry emotional beats: *"Let your curtains breathe again."* · *"Safe air. Sanitized space."* · *"Because your furniture deserves to feel as good as it looks."* Use at most one per section.

**Bilingual.** Thai and English are peers, not translations-of-record. Thai copy is written natively (the Thai site is not a machine translation) and Thai headings run longer — allow ~15% extra width and never letterspace Thai. Both faces in this system carry Thai glyphs.

**Emoji: never.** Not on the site, not in the decks, not in this system. Bullets are Font Awesome glyphs, `▪` in print lists, or plain `•` in deck headers.

**Third-party marks.** Kärcher, Ecolab and the hotel client logos (Four Seasons, Banyan Tree, Anantara, Melia…) appear in company materials as partner/customer proof. Only `karcher-authorized-dealer-badge.png` is included here, because We Care is the authorised dealer and the badge is theirs to use. **Do not reproduce client hotel logos** in new work without written permission.

---

## 3. Visual foundations

### Colour

The palette is agricultural and unfashionable in the best way: a muted **sage green** (`#8BA485`), a **brass gold** (`#C6A959`), **near-black ink** (`#1E1E1C`) and warm off-whites. The corporate sheet prescribes proportions and you should honour them: **60% sage · 30% accent · 10% ink · 5% + 5% neutrals.** That means large sage or off-white fields, gold used only for rings, underlines, eyebrows, ticks and one button per screen, and text in ink rather than pure black.

The website's page canvas is a warm off-white — `#FBF8F5`, shipped as its `theme-color` and as `--surface-page`. Pure white is a *card* colour, not a page colour.

Division retinting is done with a scope class, not new tokens: wrap Laundry Factory content in `.wc-division-laundry` (accent → azure `#5A9EC2`) or Hua Hin content in `.wc-division-huahin` (accent → sun `#F0D54E`). Sage never changes.

Gradients: the corporate sheet shows metallic gold and blue *gradient bars* as a print device (foil-like, left-to-right, light→saturated→light). Screen work is otherwise **flat** — the only gradient in the CSS is `--scrim-bottom`, the protection gradient under hero text. No purple, no blue-violet, no "AI gradient".

### Typography

Two Google faces, both with full Thai and Latin coverage:

- **Prompt** — geometric sans, headings, eyebrows, buttons, nav, numbers. Weights 500/600/700.
- **Sarabun** — humanist sans, body copy at 400, 1.68 line-height.

Display sizes are fluid (`--fs-display-1` 44→64px hero, `--fs-display-2` 36→48px section). Headings carry a slight negative tracking (`-0.02em`); eyebrows carry a large positive one (`+0.18em`); the print-deck "N O T  O N L Y  C L E A N I N G" treatment is `--ls-caps-wide` (`+0.34em`) and should be used at most once per artefact. Body measure caps at 68 characters.

> **Font substitution — please confirm.** No font binaries came with the materials and the live site loads its faces through Elementor's Google Fonts integration without exposing the family names in the HTML I could read. Prompt and Sarabun are my best-match stand-ins (geometric + humanist, Thai-first, matching the profile decks' proportions). If the missing corporate-identity PDF names the real faces, say so and I will swap them in one file (`tokens/fonts.css`).

**The wordmark is not a font.** "We Care" is a custom brush script with a swash W inside a two-tone circle. Never re-typeset it, never approximate it with a script webfont — always place `assets/logos/*.png` via the `Logo` component.

### Layout & spacing

4px base scale (`--space-1` … `--space-32`). Content container 1200px, narrow prose 820px, nav height 88px. Vertical section rhythm is generous: `--section-y` = 96px desktop, `--section-y-tight` = 64px for bands. Grid gap 24px. Sections alternate between `--surface-page` (warm off-white) and `--surface-tint` (`#F1F4F0`, palest sage) — never more than two background colours in one page, plus one ink or sage full-width band.

Fixed elements: the header is the only sticky element (`sticky` prop on `NavBar`); there are no floating action buttons, no sticky sidebars, no cookie-bar patterns in this system.

### Photography

The brand's imagery is **real, unretouched job photography**: staff in bright green polo shirts and black aprons, Kärcher machines in situ, half-cleaned marble stairs, sofas mid-extraction, stacks of white hotel linen, the Lipa Noi laundry hall in industrial teal. It is warm, daylight, slightly over-exposed, occasionally grainy — and that honesty is the point. Do not substitute glossy stock interiors. Do not apply duotone, heavy grading or grain filters. Crop tight on hands, machines and surfaces.

The signature editorial device is **BEFORE / AFTER**: two portrait frames side by side, 4px apart, ink pill labelled `BEFORE` bottom-left, sage pill labelled `AFTER` bottom-right. Every service page in the profile decks uses it under the heading "SEE THE DIFFERENCE".

Full-bleed photography appears in exactly one place: the hero. Everywhere else images are contained, `--radius-lg` (20px) rounded, inside a card or a strip.

### Cards, borders, radii

Cards are **white on warm off-white, 1px `--border-hairline` (#E3E3DE), 20px radius, and a soft warm shadow** (`--shadow-sm`: `0 2px 8px rgba(30,30,28,.06)`). Nothing in this brand casts a hard or coloured shadow, and there is **no coloured-left-border card** anywhere — if you find yourself drawing one, use `tone="tint"` instead. Inputs and small cards use 12px radius; media blocks 32px; buttons and chips are always full pills (`--radius-pill`); the W mark is always a perfect circle.

### Elevation, transparency, blur

Four shadow steps only (`xs`/`sm`/`md`/`lg`), all warm-ink at 6–10% alpha. Transparency is used in three situations and no others: the hero scrim (`rgba(30,30,28,.55)` flat + a bottom protection gradient), footer text at 74% white, and social/icon chips at 10–16% white on ink. Blur (`--blur-glass`, 10px) exists for a translucent header over a hero photo — use it sparingly; the default header is solid white.

### Motion

Restrained and functional. `--dur-fast` 120ms for presses, `--dur-base` 220ms for colour and shadow, `--dur-slow` 420ms for image zoom, `--dur-reveal` 640ms for on-scroll fade-ups. Easing is `cubic-bezier(.22,.61,.36,1)` — a gentle ease-out. **Fades and short upward translations only.** No bounces, no springs, no parallax, no counters spinning up, no auto-playing carousels faster than 6 seconds. `prefers-reduced-motion` is honoured globally in `tokens/base.css`.

### States

- **Hover** — solid fills darken exactly one step on the ramp (sage 400 → 500). Outline and ghost buttons fill with `--sage-50`. Cards lift `translateY(-3px)` and go from `--shadow-sm` to `--shadow-md`. Photos inside interactive cards zoom `scale(1.04)`. Links go sage → gold. Never use opacity for hover.
- **Press** — `scale(.98)` plus one further step down the ramp (sage 500 → 600). No colour inversion.
- **Focus** — 2px `--focus-ring` (gold `#B0934A`) outline at 2px offset, plus `--ring-focus` glow on form fields. Focus is always visible; never `outline: none`.
- **Disabled** — 45% opacity, `cursor: not-allowed`, no colour change.
- **Active nav** — sage text plus a 2px gold underline.

---

## 4. Iconography

**The source's icon system is Font Awesome 6 Free**, delivered by Elementor (`e_font_icon_svg`); the live footer exposes glyph names like `Facebook-f`, `Icon-instagram-1`, `Icon-map-marker1`. This system therefore links Font Awesome 6.5.2 from CDN and every component takes an `icon` prop as a Font Awesome class string:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" crossorigin="anonymous">
```

```jsx
<IconTile icon="fa-solid fa-broom" tone="sage" />
<Button icon="fa-solid fa-phone">Call us</Button>
```

Rules:

- **`fa-solid` only** for UI glyphs; `fa-brands` only for social channels (Facebook, Instagram, YouTube). Never mix in `fa-regular` or another icon library.
- Glyphs are almost always inside a tinted circle (`IconTile`) at 44–56px, glyph ~42% of the tile. Bare glyphs appear only inline in buttons, links, contact lines and list ticks.
- Tick glyph for feature lists is `fa-solid fa-check` in `--brand-accent`. Accordion toggles use `fa-plus` / `fa-minus`, never chevrons. Nav dropdowns use `fa-chevron-down` at 9px.
- Service vocabulary in use: `fa-broom` (deep cleaning), `fa-rug` (carpet), `fa-couch` (upholstery), `fa-bed` (mattress), `fa-window-maximize` (glass), `fa-shirt` (laundry/linen), `fa-truck` (pick-up & delivery), `fa-wind` (ozone), `fa-layer-group` (sorting), `fa-screwdriver-wrench` (equipment), `fa-house` (property), `fa-users` (team), `fa-clock` (24/7), `fa-star` (reviews), `fa-location-dot` / `fa-phone` / `fa-envelope` (contact).
- **No emoji. No hand-drawn SVG. No unicode dingbats** except `▪` in print-style lists and `•` in deck headers.
- **No custom illustration set exists.** The company materials contain no illustrations at all — only photography, logos and a water-management engineering diagram. If a page needs a graphic, use a photograph.

Logo assets are PNG, extracted from the 2026 profile PDFs (the site's SVG versions were not fetchable). If you have the vector originals, drop them into `assets/logos/` as `.svg` and the `Logo` component will pick them up after you update `SRC`.

---

## 5. Index

### Root
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `thumbnail.html` — homepage tile.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skills front matter so this folder works as a Claude Code skill.

### `tokens/`
`fonts.css` (Google Fonts + substitution notice) · `colors.css` (base ramps, brand anchors, semantic aliases, division scopes, scrims) · `typography.css` · `spacing.css` · `radius.css` · `elevation.css` · `motion.css` · `base.css` (element resets, link colours, reduced-motion).

### `components/`

**brand/** — `Logo`
**core/** — `Badge` · `Button` · `Card` · `Eyebrow` · `IconTile` · `SectionHeading`
**forms/** — `Checkbox` · `Input` · `Select` · `Textarea`
**marketing/** — `Accordion` · `BeforeAfter` · `CompanyCard` · `CTABand` · `FeatureItem` · `HeroSlide` · `PhotoStrip` · `ProcessStep` · `ServiceCard` · `StatBlock` · `Testimonial` · `TimelineItem`
**navigation/** — `ContactRow` · `Footer` · `NavBar`

Each directory has a `*.card.html` preview and each component a `.d.ts` contract plus a `.prompt.md` usage note.

**Intentional additions** (not literal components in the source, added because the source repeats the pattern by hand): `IconTile` — the site draws bare Font Awesome glyphs inline; wrapping them keeps circle size, tint and glyph scale consistent. `Eyebrow` — the tracked kicker is an Elementor text widget on the live site; promoting it to a component keeps the tracking honest. `StatBlock` and `ProcessStep` — print-deck devices from the laundry profile, brought to screen so the same proof can be reused.

### `guidelines/`
Foundation specimen cards rendered in the Design System tab: colour ramps, brand proportions, division accents, type ladder, tracking, spacing, radii, shadows, states, motion, photography and the before/after device.

### `ui_kits/website/`
Click-through recreation of the public site — `index.html` plus `Home.jsx`, `LaundryFactory.jsx`, `ServiceDetail.jsx`, `GroupCompanies.jsx`, `Contact.jsx` and `data.js`. See its `README.md`.

### `templates/`
`company-profile/CompanyProfile.dc.html` — four print-ready A4-landscape profile pages (cover, all-about-us + values, services grid, closing sage page) in the language of the 2026 PDFs.
`service-landing/ServiceLanding.dc.html` — a one-page service landing built from the components: header, photo hero, proof stats, service grid, before/after, why-us, closing CTA, footer. Tweakable hero headline and CTA tone.
Both load the system through their sibling `ds-base.js`; point its `base` line at your bound `_ds/<folder>` tree when you copy a template into a consuming project.

### `assets/`
`logos/` — 9 lockups and marks (group horizontal & stacked, Laundry Factory, Vacation, circle W in sage and gold, Kärcher authorised-dealer badge). `photography/` — 24 real job, team, equipment and laundry photographs. `brand/color-palettes-2026.jpg` — the corporate colour sheet.

---

## 6. Open questions for the brand owner

1. **`20251001-WeCare-since2019-CorporateIdentity.pdf` never arrived.** It is the one document that would settle typefaces, logo clear space and the parent-brand palette. Please re-attach.
2. **Typeface confirmation** — are Prompt/Sarabun acceptable stand-ins, or do you have the real families and licences?
3. **Vector logos** — the SVGs on the website could not be fetched. Sending them would let every asset here scale cleanly.
4. **We Care Vacation, Bangkok, Phuket and Hua Hin** have lockups and palettes but no copy or site sections yet. Should they get their own pages in the website kit?
