# IDEV INC — Site

The official marketing site for IDEV INC, rebuilt as a TypeScript + React + Vite single-page app.

**Live site:** https://idevincoperated.github.io/idev.inc/

## Stack

- **React 19 + TypeScript** — component architecture
- **Vite** — build tooling
- **React Router** — client-side routing (`/` and `/projects`)
- **Framer Motion** — scroll-triggered and page-load animations
- **React Three Fiber / Three.js** — 3D animated "core" in the hero section
- **Plain CSS with design tokens** — no UI framework, custom dark theme

## Pages

- **Home (`/`)** — hero with 3D animated core, "Our Work" project showcase (3D slide-wheel carousel), and Leadership team grid.
- **Projects (`/projects`)** — the iDev Suite app marketplace: 9 product cards with status filters (planned / in development / pending review).

## Local development

\`\`\`bash
npm install
npm run dev
\`\`\`

## Build

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Deployment

This repo deploys automatically to GitHub Pages via \`.github/workflows/deploy.yml\` on every push to \`main\`. The Pages source should be set to **GitHub Actions** in the repo settings (Settings -> Pages -> Build and deployment -> Source).

The Vite \`base\` path is set to \`/idev.inc/\` to match this repo's GitHub Pages URL. If the repo is ever renamed, update \`base\` in \`vite.config.ts\` to match.

## Project structure

\`\`\`
src/
  components/   # Navbar, Footer, HeroCore (3D), SlideWheel (carousel)
  pages/        # Home, Projects
  data/         # content.ts (team, portfolio, suite apps), types.ts
  assets/       # portfolio screenshots, team placeholder
\`\`\`
