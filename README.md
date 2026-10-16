# harsha-portfolio

The source of [Harsha Arrimalla's](https://github.com/harsha-arrimalla) portfolio — a
Next.js site built around seven end-to-end product design case studies in AI,
enterprise, fintech and healthcare.

It is published openly because the most reusable part isn't the visual design:
it's the **case study data model**. Each project is one typed object covering context,
discovery, system architecture, a screen-by-screen walkthrough, the decisions
that were argued over (with evidence, trade-off and impact), explorations that
were killed, validation, outcomes and a reflection. One renderer draws all of
them. Fork it if you want to write case studies that way.

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Plain CSS with custom properties — no CSS framework |
| Motion | GSAP + ScrollTrigger, Lenis for inertial scrolling |
| Fonts | Archivo (variable width), Instrument Sans, IBM Plex Mono |
| Runtime deps | `next`, `react`, `react-dom`, `gsap`, `lenis`. That's the whole list. |

No Tailwind, no component library. Dark is the default theme, light is a
toggle, and both come from the same token block. Every animation is skipped
under `prefers-reduced-motion`, and the pinned horizontal work reel falls back
to a native snapping scroller on touch and narrow screens.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve the build
npm run typecheck
```

Node 18 or newer.

## Layout

```
app/
  layout.tsx            Root layout, fonts, theme bootstrap
  page.tsx              Home (server component; fetches GitHub stats)
  globals.css           Design tokens + site styles
  case-study.css        Case study plate styles
  projects/<slug>/      One route per case study
components/
  Header.tsx            Scroll-aware nav + theme toggle
  Preloader.tsx         Intro counter, once per session
  Smooth.tsx            Lenis + ScrollTrigger wiring
  Cursor.tsx            Blend-mode cursor with [data-cursor] labels
  HomePage.tsx          Hero, about, capabilities, work reel, open source
  CaseStudy.tsx         Renders any CaseStudyData object
  Footer.tsx            Contact + directory
lib/
  site.ts               Name, contact details, links — edit this first
  caseStudiesData.ts    All seven case studies, typed
  openSource.ts         Curated repo list + live GitHub merge
public/
  images/projects/...   Case study screenshots
```

## Making it yours

1. **`lib/site.ts`** — name, role, location, email, résumé path, social links.
   Nothing else hardcodes these.
2. **`lib/caseStudiesData.ts`** — replace the `CASE_STUDIES` array. The
   `CaseStudyData` interface at the top of the file documents every field;
   `explorations` is the only optional section.
3. **`app/projects/<slug>/`** — one folder per case study: a `page.tsx` that
   calls `getCaseStudyBySlug('<slug>')` and a `layout.tsx` holding the page
   metadata.
4. **`lib/openSource.ts`** — the `FEATURED` array names which GitHub repos
   appear and what each blurb says. Stars, language and the live-site flag are
   fetched from the GitHub API at build time and revalidated hourly; if the API
   is unreachable the curated entries still render.
5. **Design tokens** — the `:root` block at the top of `app/globals.css` holds
   the dark palette, type and spacing; the two blocks below it mirror the light
   palette. Nothing in the site uses a literal colour.
   Add `data-cursor="Label"` to any element to give the custom cursor a label.
6. **Images** — drop them in `public/images/projects/<slug>/` and reference them
   by path from the case study data.

## Deploying

Deploys as a standard Next.js app. On Vercel, import the repo and accept the
defaults; the home page is statically generated and revalidated hourly so the
GitHub stats stay current. No environment variables are required.

The GitHub API is called unauthenticated (60 requests/hour per IP). That is
plenty for hourly revalidation, and a failed call degrades gracefully.

## License

[MIT](LICENSE) for the code.

The case study content, written copy, screenshots and résumé in `public/` are
**not** covered by the MIT license — they are Harsha's work and remain
© Harsha Arrimalla, all rights reserved. Fork the structure, bring your own
projects.
