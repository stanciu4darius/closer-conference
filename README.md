# CLOSER Conference 2026

Official website for **CLOSER Conference 2026** — a Christian youth conference in Romania.
Saturday, **21 November 2026**. Theme: *Psalmii 27:8* — „Caută fața Mea!".

A single, cinematic scrolling landing page built with a premium, editorial, Apple-inspired
aesthetic derived from the original CLOSER brand (warm paper, peach + golden glow, black
display typography, orbit & sparkle motif).

## Tech stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first design tokens)
- **Motion** (`motion/react`) for scroll & micro-interactions
- **Static export** (`output: "export"`) — no backend, no database
- Deployed to **GitHub Pages** via GitHub Actions
- Mobile-first, accessible, `prefers-reduced-motion` aware, Romanian SEO metadata

---

## Run it locally (Windows CMD)

Open **Command Prompt**, then:

```cmd
cd C:\Users\stanc\OneDrive\Documente\closer-conference

:: 1. Install dependencies (only needed the first time)
npm install

:: 2. Start the development server
npm run dev
```

Then open this URL in your browser:

```
http://localhost:3000
```

> ℹ️ The site is configured for the custom domain root, so the homepage is at `/`
> (no `/closer-conference` suffix). If the port is busy, Next picks the next free
> port (e.g. 3001) — check the terminal output.

Press **Ctrl + C** in the terminal to stop the server.

---

## Other commands

```cmd
:: Lint the code
npm run lint

:: Create the production static export (outputs to the "out" folder)
npm run build
```

### Preview the exported static site locally

The export is built for the root path, so you can serve the `out` folder directly:

```cmd
npm run build
npx serve out
```

Then open the URL that `serve` prints (usually `http://localhost:3000`).
(For everyday development just use `npm run dev` — it's simpler.)

---

## Deployment (GitHub Pages)

Deployment is automated with **GitHub Actions** (`.github/workflows/deploy.yml`):

1. Push this project to the repository `stanciu4darius/closer-conference` on the `main` branch.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` builds the static export and publishes it.

The site is configured for the **custom domain** `https://conferintacloser.ro`:
`public/CNAME` ships with the export, so once DNS points at GitHub Pages the site is
served from the domain **root** (`/`) — no `/closer-conference` prefix.

You can also trigger a deploy manually from the **Actions** tab (workflow: *Deploy to GitHub Pages*).

> The workflow is already wired up, but **nothing is deployed until you push and enable
> GitHub Pages** as above.

### Custom domain `conferintacloser.ro` (already configured)

The project is prepared for the custom domain, serving from the **root**:

- `public/CNAME` → `conferintacloser.ro` (included automatically in the export).
- `next.config.mjs` base path defaults to `""` (root), so all assets resolve at `/…`.

**What you still need to do (not done here, per instructions):**

1. In your DNS provider, point the domain at GitHub Pages
   (apex `A`/`ALIAS` records to GitHub's IPs, or a `CNAME` for `www`).
2. In the repo: **Settings → Pages → Custom domain** → enter `conferintacloser.ro`,
   then enable **Enforce HTTPS** once the certificate is issued.

**Testing on the raw GitHub Pages URL before DNS is live** (optional):
build with the project prefix so `…github.io/closer-conference` works —

```cmd
set NEXT_PUBLIC_BASE_PATH=/closer-conference
npm run build
```

Everything (images, fonts, links, metadata) follows the base-path value automatically.

---

## Project structure

```
public/
  images/
    closer-logo.jpg          # original brand logo (preserved; favicon)
    closer-banner.PNG        # original brand banner (used for social/OG preview)
    closer-banner-web.webp   # optimized banner (167 KB) shown in the hero
  CNAME                  # custom domain for GitHub Pages (conferintacloser.ro)
  .nojekyll              # lets GitHub Pages serve the Next.js _next folder
src/
  app/
    layout.tsx           # fonts (Fraunces + Inter) + Romanian SEO metadata
    page.tsx             # assembles all sections + Event JSON-LD
    globals.css          # design tokens, paper/grain, glow, animations
  components/
    Nav.tsx  Hero.tsx  Vision.tsx  Lineup.tsx  Schedule.tsx
    WorshipRoom.tsx  Location.tsx  FinalCta.tsx  Footer.tsx
    Reveal.tsx  RegisterButton.tsx  Star.tsx
  lib/
    site.ts              # all event content, copy, links, base-path helper
next.config.mjs          # static export + base-path config (see comments inside)
.github/workflows/deploy.yml
```

## Editing content

All event text lives in **`src/lib/site.ts`** (date, schedule, verse, registration link,
nav labels). Update it there — the components read from a single source of truth.

The registration button everywhere points to:
`https://forms.gle/o3bdvoAnjM8wZqbM9`
