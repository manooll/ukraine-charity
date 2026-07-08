# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the marketing site for Global Aid Foundation, a nonprofit advancing health equity
through nutrition education, food-insecurity programs, and pathways to preventive care. It's a
single-page site built with Vite + React 19, deployed on Vercel.

The repository is still named `ukraine-charity` from an earlier iteration of the project (it
originally supported a Ukraine-focused charity); the Ukrainian flag colors (`#015BBB` /
`#FED500`) survive in `src/assets/styles/colors.js` but the rest of that branding has been
replaced by Global Aid Foundation content.

## Development Commands

### Start Development Server
```bash
npm run dev
```
Runs the app in development mode at http://localhost:5173 with hot reload (Vite default port).

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` directory (output dir is customized in
`vite.config.js` — Vite's default is `dist`).

### Preview Production Build
```bash
npm run preview
```
Serves the built `build/` directory locally to sanity-check a production build.

There is no test runner configured in this project.

## Architecture

This is a much simpler codebase than a typical multi-block site — there is currently one real
page.

- **`src/main.jsx`** — React entry point, mounts `<App />` into `#root`, wrapped in
  `<StrictMode>`.
- **`src/App.jsx`** — trivial wrapper that renders `Home2`. No routing is mounted.
- **`src/Home2.jsx`** — the entire live site: sticky header/mobile nav, hero, mission,
  objectives, approach, and CTA sections, plus footer, all as one component with inline JSX
  (no sub-components per section). Also imperatively updates `<meta>`/OG/Twitter tags via
  `useEffect` on mount — the canonical values already live in `index.html`, so this is
  duplicated/defensive, not the source of truth.
- **`src/UnderConstruction.jsx`** — a standalone "coming soon" page from an earlier iteration.
  It is **not currently rendered anywhere** (`App.jsx` renders `Home2` directly); git history
  shows the project has toggled between these two as the "live" page before.

### Styling

Plain CSS, not styled-components:
- `src/index.css` — resets, CSS custom properties (`--color-primary`, `--max-width`, etc.),
  base element styles.
- `src/App.css` — all of `Home2`'s section/component styles (~750 lines).
- `src/UnderConstruction.css` — styles for the unused coming-soon page.

`src/assets/styles/colors.js` and `media-query.js` are leftover exports from a prior
styled-components-based architecture and are **not imported anywhere** in current code — treat
them as dead unless you're reviving that pattern.

### Dependencies not currently in use

- **`react-router-dom`** is installed but no `<BrowserRouter>`/routes are mounted.
- No PayPal, EmailJS, styled-components, or react-scroll — these existed in an earlier version
  of this project (see git history) but have been removed from the current codebase.

### Assets
- `src/assets/img/` — logos (blue + white variants) and section imagery, PNG + WebP pairs.
- `public/` — favicons, `site.webmanifest`, `robots.txt`.

## Deployment

Deployed on **Vercel** (previously Netlify — `netlify.toml` has been removed). `vercel.json`
pins the Vite framework preset, sets `outputDirectory` to `build` to match `vite.config.js`,
and adds a catch-all rewrite to `/index.html` for SPA deep-linking (relevant if/when
`react-router-dom` is actually wired up).

## Development Notes

- React 19 + Vite 7 (migrated from Create React App — do not assume CRA conventions like
  `npm start`, `public/index.html` templating tags, or `react-app` ESLint config).
- No global state management — local `useState` only (e.g. mobile menu open/close in
  `Home2.jsx`).
- Extensive SEO/structured-data investment lives in `index.html` (Open Graph, Twitter cards,
  JSON-LD `NGO` + `WebSite` schema) — keep that in sync with any copy changes in `Home2.jsx`.
