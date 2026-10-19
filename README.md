# Developer's Notebook Portfolio

A responsive React + Vite portfolio starter with a warm off-white maths-notebook grid, handwritten headings, subtle ink-red annotations, project case studies, an AI/automation lab section, and mobile layouts.

## Requirements

- Node.js 20+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Before publishing

Search the project for these placeholders and replace them:

- `M.` — initials / brand mark
- `href="#contact"` on project cards — replace with case-study pages or real links
- Any project descriptions or technology labels that need adjusting

## Build and test production output

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy

### GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages** and choose GitHub Actions, or use a Vite GitHub Pages workflow.
3. If deploying under `https://<username>.github.io/<repository>/`, configure Vite's `base` to `/<repository>/` in `vite.config.js` (add that file first).
4. Run `npm run build` and publish the `dist/` directory through the workflow.

### Cloudflare Pages

1. Import the GitHub repository into Cloudflare Pages.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Build output directory: `dist`.

## Design notes

- Main text uses DM Sans for readability.
- Handwritten accents use Caveat and Patrick Hand from Google Fonts.
- If the web fonts cannot load, sensible local fallbacks remain.
- The site is frontend-only; it does not need a backend for the current scope.
- Keep professional case studies distinct from personal projects and experiments.
