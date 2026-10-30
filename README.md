# Faaiz Ali’s Notebook

Faaiz Ali Tariq’s React + Vite portfolio with a warm off-white maths-notebook grid, handwritten headings, subtle ink-red annotations, project case studies, an AI/automation lab section, and mobile layouts.

## Requirements

- Node.js 24 (matches GitHub Actions)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Content

Professional work and public projects are defined in `src/App.jsx`. Professional examples describe Faaiz’s contributions; personal projects link directly to their GitHub repositories. Native expandable notes give extra engineering context.

The career dates are November 2023 (internship) and 9 March 2024 (joined as a backend developer). Individual project dates and performance metrics are intentionally omitted because they have not been supplied.

Public product context was checked against [Aviso](https://www.aviso.com/platform) and [Dragonfly](https://dragonflyintelligence.com/). Contribution details come from Faaiz’s own account. Personal-project descriptions were checked against repository documentation and, for StreamForge, the agent, tools, retrieval, and chat implementation.

## Build and test production output

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy

### GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys on pushes to `main`, or manually via **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Vite uses relative asset paths, so the app works under `/notebook/` as well as at a domain root.

Enable **Settings → Pages → Source → GitHub Actions** once. GitHub Pages requires a public repository on GitHub Free, or a qualifying paid plan for a private repository.

Expected URL after successful deployment: `https://faaizalii.github.io/notebook/`.

## CV download

Place the approved PDF at `src/assets/Faaiz_Main_Resume.pdf`, then build or push to `main`. A **Download CV** button automatically appears in the introduction and contact sections. Downloads use the filename `Faaiz-Ali-Tariq-CV.pdf`. Replace the PDF at the same path to update it.

Until the PDF exists, the buttons stay hidden. No placeholder CV or broken download is published. The PDF becomes publicly accessible when the site is deployed.

### Cloudflare Pages

1. Import the GitHub repository into Cloudflare Pages.
2. Framework preset: **Vite**.
3. Build command: `npm run build`.
4. Build output directory: `dist`.

## Design notes

- The content width grows with the viewport up to 1440px; paragraphs retain a readable measure.
- Main text uses DM Sans for readability.
- Handwritten accents use Caveat from Google Fonts.
- If the web fonts cannot load, sensible local fallbacks remain.
- The site is frontend-only; it does not need a backend for the current scope.
- Keep professional case studies distinct from personal projects and experiments.

## Suggested next portfolio work

1. **Make StreamForge reproducible and measurable.** Replace the absolute ChromaDB path with configuration, document a clean setup, add a document-ingestion command, and create an evaluation set covering policy answers, unsupported questions, and cross-user access attempts. Publish the observed results and a short demo. This builds on the strongest existing personal project.
2. **Build an event-driven job runner.** A small Python API submits jobs to Redis; workers track state in PostgreSQL. Demonstrate retries, duplicate-event handling, failure recovery, and a dead-letter queue. Include an architecture diagram and a reproducible failure demo. This makes the background-processing experience visible in public code without reusing employer code.
3. **Build an n8n support-triage workflow.** Accept a synthetic support ticket via webhook, retrieve relevant policy, draft a reply, and wait for approval before sending to a test inbox. Include webhook validation, retry handling, a sanitized workflow export, sample tickets, and setup instructions. Build on synthetic data and keep secrets out of the export.

These are proposals, not completed projects; they are not advertised on the website.
