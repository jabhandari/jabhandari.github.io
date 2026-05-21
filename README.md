# Juhi Bhandari Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-black?logo=github)](https://pages.github.com/)

A statically exported developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS. It showcases professional experience, featured work, selected projects, and contact links in a responsive single-page layout.

Live site: https://jabhandari.github.io/PersonalWebsite/

## Preview

![Portfolio homepage preview](./public/webi2.png)

![Portfolio projects preview](./public/webi1.png)

## Features

- Responsive portfolio layout with hero, experience, featured work, and projects sections
- JSON-driven content for easier updates
- Reusable card components for experience, featured items, and projects
- Static export configuration for GitHub Pages
- Resume, GitHub, LinkedIn, and email links
- Tailwind CSS theme tokens for light and dark color schemes

## Tech Stack

| Technology | Purpose |
| --- | --- |
| Next.js | App Router framework and static export |
| React | Component-based UI |
| TypeScript | Type safety for components and config |
| Tailwind CSS | Utility-first styling |
| pnpm | Package management |
| GitHub Pages | Static hosting |

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx

components/
  Experience.tsx
  ExperienceCards.tsx
  Hero.tsx
  Projects.tsx
  ProjectsCards.tsx
  featured.tsx
  featuredCards.tsx
  navbar.tsx

data/
  experience.json
  featured.json
  projects.json

public/
  Juhi Bhandari.pdf
  images.jpg
  webi1.png
  webi2.png

next.config.ts
package.json
tsconfig.json
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/jabhandari/PersonalWebsite.git
cd PersonalWebsite/my-app
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the app at:

```text
http://localhost:3000
```

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local Next.js development server |
| `pnpm build` | Create the production static export |
| `pnpm start` | Start the Next.js production server |
| `pnpm lint` | Run ESLint |
| `pnpm run deploy` | Build and publish the `out` directory to GitHub Pages |

## Updating Content

Most portfolio content lives in JSON files:

- Update work experience in `data/experience.json`
- Update featured work in `data/featured.json`
- Update project cards in `data/projects.json`
- Replace screenshots or hero assets in `public/`
- Replace the resume PDF at `public/Juhi Bhandari.pdf`

After content changes, run:

```bash
pnpm lint
pnpm build
```

## Deployment

The site is configured for static export in `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

Deploy to GitHub Pages with:

```bash
pnpm run deploy
```

The deploy script builds the site, adds `out/.nojekyll`, and publishes the exported files to the `gh-pages` branch.

## Author

Juhi Bhandari

- GitHub: https://github.com/jabhandari
- LinkedIn: https://www.linkedin.com/in/juhi-bhandari-4baa61261/


