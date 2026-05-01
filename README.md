# AI Overflow

> An AI product studio. We design, build, and operate AI-native products under our own brands — from clinical scribe tools to retail intelligence platforms.

This repository contains the public marketing site for **AI Overflow** and its product portfolio (**ScribeDesk**, **RetailOS**, and more to come). It is a fully static, edge-served Next.js application designed to stay fast under load, look striking on first impression, and tell every visitor exactly who we are and what we ship.

```
   Next.js 16  ·  TypeScript  ·  Tailwind v4  ·  Framer Motion  ·  Resend  ·  Vercel
```

---

## Quick start

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env
# then open .env and paste your RESEND_API_KEY

# 3. Run
npm run dev          # http://localhost:3000
```

That's it. Hot-reload is on; edits to anything in `app/`, `components/`, or `content/` refresh instantly.

---

## What's in the box

| Route | What it is |
|---|---|
| **`/`** | Landing page — animated hero, partner marquee, product portfolio, process, testimonial, CTA |
| **`/products`** | Portfolio overview |
| **`/products/scribedesk`** | Live interactive demo of ScribeDesk's clinical scribe flow |
| **`/products/retailos`** | Live interactive demo of RetailOS's order desk + AI copilot |
| **`/founders`** | Co-founder profiles (LinkedIn-sourced) |
| **`/about`** | Company story, working principles |
| **`/contact`** | Contact form, backed by Resend, enriched with rich session context |

---

## Stack & rationale

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Static generation by default. Pages pre-render at build time, served as HTML from Vercel's edge CDN. |
| Language | **TypeScript** (strict) | Type safety on content schemas catches typos at build time. |
| Styling | **Tailwind CSS v4** | Faster, smaller, theme tokens via `@theme`. |
| UI primitives | **shadcn-style** (copy-paste, no runtime lib) | Zero overhead, fully themeable. |
| Animation | **Framer Motion** + custom `<canvas>` | Layered hero animation, scroll reveals, smooth state transitions. |
| Email | **Resend** | Modern transactional email API, generous free tier. |
| Hosting | **Vercel** | Global edge, image optimization, preview deploys per PR. |
| Telemetry | **Vercel Analytics + Speed Insights** | Privacy-friendly, real-user Core Web Vitals. |
| Geo enrichment | **Vercel edge headers + ipapi.co** | Rich location context on every contact submission. |

---

## Project structure

```
app/                       Next.js App Router routes
  layout.tsx               Root shell (fonts, navbar, footer, analytics)
  page.tsx                 Landing
  about/                   About page
  founders/                Founder profiles
  products/
    page.tsx               Portfolio overview
    [slug]/page.tsx        Individual product page (SSG per product)
  contact/
    page.tsx               Contact page
    actions.ts             Server action — receives, enriches, sends

components/
  landing/                 Hero, ParticleField, CyclingWord, Marquee,
                           ProductGrid, Process, PullQuote, CTA
  product/                 DemoEmbed (discriminated union),
                           ScribedeskMock, RetailosMock
  shared/                  Navbar, Footer, EngagementProvider, Reveal,
                           SectionLabel
  ui/                      Button + primitives
  contact/                 ContactForm

content/                   Typed content registry — single source of truth
  company.ts               Tagline, metrics, partners, principles
  founders.ts              Co-founder profiles
  products.ts              Product registry with demo configs

lib/
  client-context.ts        Browser context collector (screen, language,
                           dark-mode, DNT, connection, UTMs, …)
  engagement.ts            Session-tracked time/scroll/sections/visit#
  server-context.ts        Server-side IP + Vercel geo + ipapi.co + UA
  format-submission.ts     Email body renderer (text + HTML)
  utils.ts                 cn() helper

public/                    Static assets, favicon
```

---

## Architecture highlights

### Performance is structural, not tuned

Every page in this app is **statically pre-rendered at build time**. There's no per-request server compute, no database lookup, no cold start. When a visitor hits the site, Vercel's edge CDN serves a cached HTML file in milliseconds — so a sudden traffic spike (LinkedIn post, Hacker News, product launch) lands on cached files, not on origin.

```
Route (app)
┌ ○ /                        prerendered as static content
├ ○ /about                   prerendered as static content
├ ○ /contact                 prerendered as static content
├ ○ /founders                prerendered as static content
├ ○ /products                prerendered as static content
└ ● /products/[slug]         prerendered as static HTML (SSG)
   ├ /products/scribedesk
   └ /products/retailos
```

**Targets** (verified in CI):
- LCP < 1.5s · CLS < 0.1 · INP < 200ms
- Lighthouse Performance ≥ 95 on landing and product pages
- First-load JS for `/` under 150 KB gzipped (verified via `npm run analyze`)

### The hero animation

The first impression is doing real work. The hero combines three layered effects:

1. **Cursor-reactive particle field** — a canvas-rendered grid of dots with an idle sine-wave breathing animation; dots within ~220px of the cursor brighten and grow with a smoothed (lerped) follow. Pauses off-screen via IntersectionObserver. Respects `prefers-reduced-motion`.
2. **Headline reveal on load** — each line slides up from below behind a clip mask, with stagger.
3. **Cycling word** — the second line cycles between *AI products → ML systems → AI agents → AI tooling*, sized to the longest word so nothing reflows.

All three run as a single `requestAnimationFrame` loop or via Framer Motion's GPU-accelerated transforms. No external animation libraries beyond Framer Motion.

### The contact form is more than a form

The form fields are intentionally minimal (Name, Email, Company, Message). Everything else useful for triaging a lead is captured **automatically**, both in the browser and on the server, and rendered into a structured email:

| Section | Sourced from |
|---|---|
| **Lead** | Form fields |
| **Location & Network** | Vercel edge geo headers (city, region, country, timezone, lat/lng) + ipapi.co (ISP, ASN, proxy detection) + request IP |
| **Device & Browser** | Server-side User-Agent parsing + `navigator` (screen, viewport, language, dark mode, Do Not Track, connection) |
| **Engagement** | Session-tracked time on page, scroll depth %, sections viewed, visit number (across sessions, via `localStorage`) |
| **Attribution** | Page URL, HTTP referrer, full UTM set |
| **Meta** | Submission UUID, ISO timestamp |

The session tracking starts the moment a visitor lands (mounted in `layout.tsx`), so by the time someone submits the contact form, we already know they spent 4 minutes reading, scrolled to 90%, viewed *hero, products, process, quote*, and arrived from a LinkedIn post. The email subject reads `New demo request from {name} · {city}, {region}, {country}`.

Submissions are sent via Resend, with both plain-text and HTML bodies. The action is server-side, runs at the edge, and gracefully degrades — if ipapi.co times out (2.5s budget), the email still goes through with whatever we have.

### Content as code

There is no CMS. All visible copy lives in three TypeScript files under `content/`:

- `company.ts` — tagline, description, metrics, partner list, process, principles
- `founders.ts` — co-founder profiles
- `products.ts` — product registry, including demo configuration (interactive mock, video, iframe, or screenshots)

Edit a value, save, the page hot-reloads. Everything is type-checked at build time, so a typo in a product slug fails the build instead of breaking production.

---

## Environment variables

Only one is required. The rest have safe defaults.

| Variable | Required? | Purpose |
|---|---|---|
| `RESEND_API_KEY` | **Yes** | Resend secret key (`re_...`). Get one at [resend.com](https://resend.com). |
| `CONTACT_TO_EMAIL` | No | Where contact submissions are forwarded. Defaults to `company.email`. |
| `CONTACT_FROM_EMAIL` | No | Verified Resend sender. Defaults to Resend's sandbox `onboarding@resend.dev`. |

For production, set these in **Vercel → Project Settings → Environment Variables**, scoped to Production + Preview + Development.

> **Sandbox sender note:** until you verify a custom domain in Resend, the sandbox sender (`onboarding@resend.dev`) can only deliver to the email address that owns your Resend account. Verify a domain to remove that limit.

---

## Scripts

```bash
npm run dev          # Start the dev server (Turbopack)
npm run build        # Production build
npm start            # Run the production build locally
npm run lint         # next lint
npm run typecheck    # tsc --noEmit
npm run analyze      # Build with @next/bundle-analyzer
```

CI runs `lint`, `typecheck`, and `build` on every push and PR via [GitHub Actions](.github/workflows/ci.yml).

---

## Deployment

Push to `master` and Vercel deploys automatically. Pull requests get preview deploys with their own URL.

**One-time setup:**
1. Create the project in Vercel and link it to this GitHub repo
2. Add the env vars in Project Settings → Environment Variables
3. Confirm the build command is `npm run build` (Vercel auto-detects Next.js)

**Custom domain:**
Add `aioverflow.com` (or whatever) in Vercel → Domains. Vercel handles HTTPS automatically.

---

## Editing content cheat-sheet

| Change | File |
|---|---|
| Tagline / company description | [`content/company.ts`](content/company.ts) |
| Founder bio / LinkedIn | [`content/founders.ts`](content/founders.ts) |
| Product copy, features, demo config | [`content/products.ts`](content/products.ts) |
| Add a new product | Add an entry in `products.ts` and create the demo component if needed |
| Hero cycling words | `components/landing/hero.tsx` → `cycle` array |
| Partner marquee list | `content/company.ts` → `partners` |

---

## Legacy

The previous Create React App version is preserved on the **`legacy/cra-original`** branch. It is no longer maintained but kept for reference.

```bash
git checkout legacy/cra-original   # to inspect the old site
git checkout master                # back to the current site
```

---

Built and operated by **AI Overflow**. Direct: [aioverflow.ml@gmail.com](mailto:aioverflow.ml@gmail.com).
