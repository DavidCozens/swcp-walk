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
`escape_points`, `shops`, `eat`, body text) is optional and only renders when
present.

`escape_points` is a list of places you can leave the path mid-section: `name`
required, optional `km` (how far along the route it sits, validated against
`distance_km`) and `detail`. A `transport` entry takes an optional `season` for
links that don't run year-round — several coast buses are summer-only, which
decides whether a one-way day is possible at all.
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

The importer warns if a route retraces itself. A doubled-back route looks normal
drawn on a map but reports inflated distance and ascent, so the warning is the
only sign. It writes the file anyway — a deliberate out-and-back spur is valid.

The importer never copies the route's `createdBy` (an OS account id) or its
`createdAt`/`modifiedAt` timestamps — see the privacy note below.

`os_url` is optional front matter holding the OS Maps link; when set, the
section page shows an "Open in OS Maps" link under the map.

## Locations

Everything the site knows about a place lives in `src/_data/locations.js`,
merged from `lib/locations/{endpoints,escapes,stays}.js`. Endpoints, escape
points and places to stay used to be three different shapes answering the same
questions — where is it, what's it called, how far along the route, how do I
drive there — so they're now one record with a `kind`, and only what differs
sits in a nested block.

    slug, name, kind        endpoint | escape | stay | poi | stop
    lat, lon                every location has a position
    address, url, phone, email, notes, maps_url, verified
    stay: { ... }           kind "stay" only   — see lib/locations/stays.js
    escape: { detail }      kind "escape" only — how you get off the path

**Nothing near a section is listed by hand.** Because every location has
coordinates, a section discovers what it passes (`lib/nearby.js`), and how far
along the route each one falls is computed. County Gate was recorded by hand as
11.4 km along section 2; it is actually 8.8 km, and nobody would ever have
caught that.

Sections name their endpoints by slug (`start: porlock-weir`), so the finish of
one section and the start of the next are the same record. `npm run validate`
checks the slug exists, that it's an endpoint rather than some other kind, and
that the GPX really does begin and end within 1 km of the places named.

How near counts is in `site.js` under `nearby`, per kind: a stay qualifies near
either end of the day (drivable) or near the route; an escape point only near
the route, since leaving the path partway is the whole point of it.

`verified` is the date details were last checked against the owner's own site;
null shows on the page as unconfirmed. `stay.dogs` is true/false/null and never
guessed — an unconfirmed yes is worse than an honest unknown when you arrive
with a dog. Details go stale quietly: porlockcaravanpark.co.uk now resolves to
a differently-named park at a different address while directories still list
the old one.

Each kind has a glyph in `lib/stay-icons.js`, rendered into a coloured badge
used in the list row, the map pin and the map popup. It's generated once and
handed to the map as markup inside `data-stays`, so they can't drift apart.
Coordinates come from postcodes via `api.postcodes.io` (free, no key), or from
OpenStreetMap for things like car parks. A Google Maps directions link is
generated from lat/lon; Google routes correctly but labels the destination with
whatever business is nearest, so set `maps_url` to override — a Plus Code
resolves to the point itself, as the Porlock Weir car park does.

Each nearby place collapses to one line and opens for the detail; "Expand all"
is in `assets/js/stays.js`. The "Show on map" button sits inside the
`<summary>`, so `map-section.js` stops its click toggling the disclosure.

## Paths — IMPORTANT

The site is published to a GitHub Pages **project** page, so it lives under
`/swcp-walk/`, not at the domain root. `pathPrefix` in `.eleventy.js` handles
this, and `HtmlBasePlugin` rewrites `href`/`src` in built HTML automatically.

The plugin does **not** rewrite custom attributes or JSON, so anything else
pointing at an internal path must go through the `url` filter — that means
`data-gpx`, `data-src`, and the paths inside `api-sections.njk`. A missed one
works perfectly on the local dev server and 404s only once deployed;
`npm run check:output` (part of `npm run check`, and run in CI) catches it.

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
- `npm run check:output` — checks on the built site (paths, escaping)

## Testing

`scripts/validate-content.js` fails if a section is missing a required field,
uses an unknown region, reuses an `order`, or points at a GPX that's missing or
invalid.

`scripts/check-output.js` runs after the build and checks two things the local
dev server cannot show you: that every internal path carries the `pathPrefix`
(without it, a path works locally and 404s once deployed), and that nothing is
escaped twice (`&amp;amp;` renders as the literal text `&amp;`).

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
