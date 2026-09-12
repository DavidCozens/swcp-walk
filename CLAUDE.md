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
`gpx`. Everything else (`distance_km`, `ascent_m`, `os_url`, `mode`, `transport`,
`shops`, `eat`, body text) is optional and only renders when present.
`templates/section-template.md` is the starting point for a new section.

## Adding a section from OS Maps

Routes are planned in OS Maps. The route page server-renders the whole route as
GeoJSON, so the share link is all that's needed — no manual GPX export:

    npm run import:route -- <os-maps-url> <slug>

That writes `src/gpx/<slug>.gpx` and prints the front matter (distance and
ascent come from OS's own figures). The generated GPX contains the track only:
OS waypoints are shaping points dropped while planning, not places of interest,
so they're left out rather than drawn as pins. The map scripts also pass
`parseElements: ["track", "route"]`, so a hand-exported GPX with waypoints in it
won't sprout pins either.

The importer never copies the route's `createdBy` (an OS account id) or its
`createdAt`/`modifiedAt` timestamps — see the privacy note below.

`os_url` is optional front matter holding the OS Maps link; when set, the
section page shows an "Open in OS Maps" link under the map.

## Paths — IMPORTANT

The site is published to a GitHub Pages **project** page, so it lives under
`/swcp-walk/`, not at the domain root. `pathPrefix` in `.eleventy.js` handles
this, and `HtmlBasePlugin` rewrites `href`/`src` in built HTML automatically.

The plugin does **not** rewrite custom attributes or JSON, so anything else
pointing at an internal path must go through the `url` filter — that means
`data-gpx`, `data-src`, and the paths inside `api-sections.njk`. A missed one
works perfectly on the local dev server and 404s only once deployed;
`npm run check:paths` (part of `npm run check`, and run in CI) catches it.

## Local development (Docker)

The dev server runs in a container — don't install Node dependencies on the
host.

- Quick preview: `docker compose up`, then http://localhost:8080 — this
  redirects to http://localhost:8080/swcp-walk/, matching the deployed layout
- VS Code: "Reopen in Container", then `npm run serve` in the terminal
- Live-reloads on edit.

## Commands

- `npm run serve` — dev server (used inside the container)
- `npm run validate` — content checks
- `npm run build` — build to `_site/`
- `npm run check` — validate, build, then check paths (run before pushing)
- `npm run check:paths` — verify built paths carry the pathPrefix

## Testing

`scripts/validate-content.js` fails if a section is missing a required field,
uses an unknown region, reuses an `order`, or points at a GPX that's missing or
invalid.

`scripts/check-paths.js` runs after the build and fails if any internal path in
the built site is missing the `pathPrefix` — the one class of bug the local dev
server cannot show you.

Both run in CI (`.github/workflows/deploy.yml`) on every push and PR. When you
add features, add checks here too.

## IMPORTANT — privacy

While the repo is public, **no travel dates and no van overnight locations go
anywhere in it.** An OS Maps route page also exposes the route owner's account
id and the date it was planned, so the importer copies neither — only geometry
and the distance/ascent figures. That decision is deliberately deferred until such data
actually needs to exist. The `_private/` folder is git-ignored for that data;
do not remove that ignore line, and do not commit dates/locations, without the
owner deciding the privacy question first.

## Deploy

GitHub Pages via GitHub Actions. Push to `main` → validate → build → deploy.
After the first deploy, set `url` in `src/_data/site.js` to the Pages URL.
