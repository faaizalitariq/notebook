# Faaiz Ali’s Notebook

A personal portfolio for my backend engineering work and AI projects, designed as a notebook with grid paper, handwritten accents, and engineering notes.

**[View the website](https://faaizalitariq.github.io/notebook/)**

## Features

- Professional project write-ups and links to public projects
- Randomized hero headlines with no consecutive repeats within a tab
- Expandable engineering notes
- Downloadable CV
- Responsive layouts and keyboard navigation
- Reduced-motion support
- Automatic deployment to GitHub Pages

## Stack

React, Vite, and Lucide icons with plain CSS. Typography uses DM Sans and Caveat from Google Fonts. The site is static and requires no backend.

## Local development

Requires Node.js 24 and npm.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production files to `dist/`. The preview command serves that build locally.

## Project structure

```text
src/
  App.jsx                     Page content and components
  App.css                     Layout and component styles
  index.css                   Global styles and theme variables
  data/headlines.js           Hero headline variants and selection
  assets/Faaiz_Main_Resume.pdf Downloadable CV
  images/                     Portrait assets
  main.jsx                    React entry point
.github/workflows/
  deploy-pages.yml            GitHub Pages build and deployment
vite.config.js                Vite configuration
```

## Updating content

Edit project descriptions, skills, and contact links in `src/App.jsx`. Hero headlines are defined in `src/data/headlines.js` and selected once per page load.

To update the CV, replace `src/assets/Faaiz_Main_Resume.pdf`. The download buttons appear when that file is present and save it as `Faaiz-Ali-Tariq-CV.pdf`.

## Deployment

GitHub Actions builds and deploys pushes to `main`. The workflow can also be started manually from **Actions → Deploy portfolio to GitHub Pages → Run workflow**.

The repository’s Pages source is **GitHub Actions**. Vite uses relative asset paths to support the `/notebook/` project URL.
