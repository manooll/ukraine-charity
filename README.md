# Global Aid Foundation

Marketing site for Global Aid Foundation, a nonprofit advancing health equity through nutrition
education, food-insecurity programs, and pathways to preventive care.

> Note: this repository is still named `ukraine-charity` for historical reasons — the project's
> content and branding have since moved to Global Aid Foundation. The Ukrainian flag colors
> (`#015BBB` / `#FED500`) remain in `src/assets/styles/colors.js` as a legacy of that origin.

## Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/)
- Plain CSS (no CSS-in-JS)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build -> build/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  main.jsx               # React entry point, mounts <App />
  App.jsx                 # renders Home2 (the live landing page)
  Home2.jsx                # the full single-page site: header, hero, mission,
                            # objectives, approach, CTA, and footer sections
  UnderConstruction.jsx    # standalone "coming soon" page (not currently routed)
  App.css / index.css      # global + page styles
  assets/
    img/                    # logos and section imagery
    styles/                 # colors.js, media-query.js constants
```

`react-router-dom` is installed but not currently wired up — `App.jsx` renders `Home2`
directly. `UnderConstruction.jsx` exists as an alternate "coming soon" page from an earlier
iteration of the site and isn't mounted anywhere right now.

## Deployment

The site deploys to [Vercel](https://vercel.com/) via `vercel.json`, which pins the Vite
framework preset, points the output directory at `build/` (see `vite.config.js`), and adds a
catch-all rewrite to `index.html` for SPA deep-linking.

Pushing to `master` (or opening a PR) triggers a Vercel deployment automatically once the
GitHub repository is connected to the Vercel project.
