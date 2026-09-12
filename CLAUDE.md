# Project notes for Claude Code

A static site for planning (and later journalling) a walk of the South West
Coast Path. Built with **Eleventy**. Sections in, map pages out.

## How it's structured

Three levels: **overview → region → section**.

- A **section** is one file in `src/sections/*.md` plus a matching GPX in
  `src/gpx/`. Front matter drives everything; the GPX draws the route.
- **Regions** are defined once in `src/_data/regions.js`. A section joins one
  via its `region:` slug.
- The overview map is fed by `/api/sections.json`, generated from all sections.
- Region→section grouping is done in `.eleventy.js` (a JS collection), not in
  templates — Nunjucks `selectattr` was unreliable for this, so keep grouping
  logic in the config.

Required section front matter: `title`, `order`, `region`, `start`, `end`,
`gpx`. Everything else (`distance_mi`, `ascent_ft`, `mode`, `transport`,
`shops`, `eat`, body text) is optional and only renders when present.
`templates/section-template.md` is the starting point for a new section.

## Local development (Docker)

The dev server runs in a container — don't install Node dependencies on the
host.

- Quick preview: `docker compose up`, then http://localhost:8080
- VS Code: "Reopen in Container", then `npm run serve` in the terminal
- Live-reloads on edit.

## Commands

- `npm run serve` — dev server (used inside the container)
- `npm run validate` — content checks
- `npm run build` — build to `_site/`
- `npm run check` — validate then build (run before pushing)

## Testing

`scripts/validate-content.js` fails if a section is missing a required field,
uses an unknown region, reuses an `order`, or points at a GPX that's missing or
invalid. It runs in CI (`.github/workflows/deploy.yml`) on every push and PR.
When you add features, add checks here too.

## IMPORTANT — privacy

While the repo is public, **no travel dates and no van overnight locations go
anywhere in it.** That decision is deliberately deferred until such data
actually needs to exist. The `_private/` folder is git-ignored for that data;
do not remove that ignore line, and do not commit dates/locations, without the
owner deciding the privacy question first.

## Deploy

GitHub Pages via GitHub Actions. Push to `main` → validate → build → deploy.
After the first deploy, set `url` in `src/_data/site.js` to the Pages URL.
