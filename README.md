# CivicActions Launchpad

Build a marketing website for **CivicActions**, a fully remote professional services firm that helps U.S. government agencies deliver trusted public services through open technology and human-centered design.

Attach `reference/desktop/home-hero.png`, `reference/desktop/header-nav-open.png`, and `reference/desktop/footer.png` with this prompt.

## Stack and conventions
- React + TypeScript + Vite, React Router, Tailwind CSS, shadcn/ui.
- Every page is a route. Shared `

`, `

`, ``, `` in a root layout.
- Reusable components: `Hero`, `AngledBand`, `SectionHeading`, `CaseStudyTile`, `ServiceCard`, `PersonCard`, `PostCard`, `Quote`, `CtaBanner`, `EyebrowLabel`, `Button`.
- `CtaBanner` takes a `color` prop — the band is **red** on the homepage and **navy** on interior pages. Same layout either way: headline plus sub-line on the left, a solid white button and a white outline button on the right.
- Content lives in typed data files under `src/data/` — never hardcode lists inside JSX.
- Mobile-first responsive. Max content width 1200px.

## Accessibility is a hard requirement (this is the client's whole business)
- Target WCAG 2.1 AA / Section 508.
- "Skip to content" and "Skip to footer" links as the first two focusable elements, visually hidden until focused.
- Semantic landmarks: `header`, `nav`, `main`, `footer`. One `h1` per page, no skipped heading levels.
- Visible 2px focus outlines on every interactive element. Never suppress focus.
- Meaningful `alt` on all images; `alt=""` on decorative ones.
- Mobile drawer is a real disclosure with `aria-expanded`, `aria-controls`, Escape-to-close, focus trapping, and focus restore.
- All body text ≥ 4.5:1 contrast.

## Design system

Put these in `tailwind.config.ts` as named tokens:

| Token | Hex | Use |
|---|---|---|
| `navy` | `#162e51` | Dark section bands, headings, body text on white |
| `red` | `#d83933` | **Logo**, primary buttons, links, accent bands |
| `red-dark` | `#a23737` | Button hover |
| `ink` | `#1b1b1b` | Body text |
| `gray-100` | `#f3f3f3` | Capability list wells |
| `gray-200` | `#f0f0f0` | Card fills |
| `gray-400` | `#c4c4c4` | Borders, hairline dividers |
| `teal` | `#00a398` | Minor accent |

Typography — load from Google Fonts:
- **Merriweather** (serif) for all headings, the logo wordmark, pull quotes, and mobile nav items. h1 clamp 2.5rem→3.75rem, tight leading.
- **Nunito** (sans) for body, buttons, desktop nav, and eyebrow labels. Body 18px/1.6.
- Eyebrow labels: Nunito, uppercase, letter-spacing 0.08em, bold, small.
- Desktop nav links and button labels are UPPERCASE Nunito bold.

Visual style: flat color blocks, no gradients-as-decoration, no glassmorphism, no drop shadows on text. Buttons are **square-cornered rectangles with zero border radius**. Two button styles: solid fill, and outline (1px border, transparent fill).

**Brand motif — build this as a component.** The hero image is a photo masked into a **circle** with a flat blue fill behind it, crossed by two thin white arcs, with a cluster of small red squares arranged in a plus/diagonal pattern floating to the upper right. Call it `` and reuse it on interior hero sections.

**Angled bands.** Several page heroes are full-bleed red bands whose bottom edge is cut on a shallow diagonal (about 2–3°). Build `` with a `color` prop and a CSS `clip-path` for that edge.

## Global chrome

**Announcement bar** — full-bleed navy, small text, left-aligned within the container: `LOOKING FOR DITAP TRAINING?` then a `Start here.` link to `/services/ditap`. A dismiss "×" button sits at the far right. Dismissal persists in `localStorage`.

**Header** — white, sticky, no bottom border.
- Left: the wordmark **CivicActions** in red Merriweather, tight letter-spacing, roughly 2rem. Wrapped in a link labeled "CivicActions home page".
- Right: uppercase Nunito nav — COMPANY ⌃ · SERVICES ⌃ · OUR WORK ⌃ · INSIGHTS · CAREERS, then a solid red **CONTACT US** button.
- The three grouped items open a **single-column white dropdown panel** with a soft shadow, left-aligned uppercase navy links, comfortable 14px vertical spacing, and a hairline divider above the last item where the group has an outlier (Services puts DITAP below the divider).
- Groups: Company → Team, Press, Impact · Services → Web & CMS, IT Modernization, Product & Design, Security & Compliance, Data Services, Workforce Development, ⎯, DITAP · Our Work → Case Studies, Contracting, SEWP VI.

**Mobile navigation** (under 1024px) — an "Open Menu" button. It opens a **right-side drawer covering about 80% of the viewport width**, with a dark scrim over the page behind it. A "×" close button sits top-right. Menu items are **Merriweather serif, sentence case, ~28px**, stacked with hairline `gray-400` dividers between them: Company › · Services › · Our Work › · Insights · Careers · Contact. The first three have a right-pointing chevron and expand to a sub-panel.

**Footer** — **white background**, not dark. Four regions:
1. The red **CivicActions** wordmark, large, top-left.
2. Three columns below it:
   - Left: "We're a professional services firm providing design, technology, consulting, and training services to government." then "Want to help us make an impact?" with an underlined red link "Check out our open positions."
   - Middle: "Our mailing address is: 3527 Mt. Diablo Blvd., Unit 269, Lafayette, CA 94549" then red underlined `510-408-7510` and `contact@civicactions.com`.
   - Right: a three-column link grid (`aria-label="CivicActions footer menu"`) — Team, Services, Contact / Press, Case Studies, Insights / Impact, Contracting, Careers. **All links are red and underlined.** Impact and Insights carry a small external-link icon.
3. Social icons under the link grid, right-aligned: black filled circles for Vimeo, Bluesky, X, and LinkedIn. Each needs an accessible name.
4. Centered bottom row: `© 2026` then red underlined Accessibility · Licensing · Privacy · Sustainability · Feedback.

## Routes to scaffold now (stubs are fine)
`/` · `/services` · `/services/ditap` · `/case-studies` · `/case-studies/:slug` · `/team` · `/press` · `/impact` · `/contracting` · `/contracting/sewp-vi` · `/insights` · `/careers` · `/contact` · `/accessibility-statement` · `/licensing` · `/privacy` · `/sustainability` · `/feedback` · 404

For this first pass build only the design system, layout, announcement bar, header, dropdowns, mobile drawer, footer, skip links, and route stubs. No page content yet.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5b7affb6-a33c-4693-8104-e8440bd04096).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
