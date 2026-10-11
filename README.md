# Claidsphere Solutions — website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind 4 (tokens only; components use CSS in `src/app/*.css`).
No animation library: motion is CSS + `IntersectionObserver` + a few small `requestAnimationFrame` handlers.

## Run locally

```bash
cd ~/claidsphere
npm install
npm run dev          # http://localhost:3000
```

Production check:

```bash
npm run qa           # typecheck + lint + production build
npm start            # serve the production build
```

## Environment

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap, OG and JSON-LD |
| `CONTACT_WEBHOOK_URL` | Where contact submissions are POSTed (JSON). **Required for the form to send.** |

## Structure

```
src/data/          typed content (company, services, work, team, testimonials, careers, faq, methodology)
src/components/    layout · navigation · sections · typography · motion · buttons · forms · services
src/lib/           animations (scroll-spy) · seo (metadata, JSON-LD) · utils (validation)
src/app/           routes, globals.css (design tokens), components.css (component styles)
docs/              content-audit.md (source contradictions) · launch-notes.md (client-dependent items)
```

Content lives in `src/data` and is the only place business copy should change. Everything there comes from
https://claids.com/; see `docs/content-audit.md` for what was deliberately *not* carried over or invented.

## Design system

Tokens are CSS variables in `src/app/globals.css`: surfaces (`--ink-*`, `--paper-*`), one accent, fluid type scale,
12-column grid, section rhythm, motion timings. Sections switch theme with `data-theme="dark|light|graphite"`;
adjacent sections of differing theme get a tonal bleed automatically.

Type: Fraunces (display, fixed optical size), Geist (UI/body), Geist Mono (labels).

## Motion rules

Above-the-fold entrances are CSS-only (no hydration dependency, no LCP cost). Below the fold, `[data-reveal]`
elements are revealed by `RevealRoot`. `prefers-reduced-motion` disables transforms, the pointer light, magnetic
button and scroll-linked progress; content is always visible without JS.
