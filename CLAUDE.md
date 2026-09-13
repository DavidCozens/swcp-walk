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

## Accommodation

`src/_data/accommodation.js` holds places to stay as points on the map, not as
entries against a section. Each section works out what's near it at build time
(`lib/nearby.js`, wired in via `eleventyComputed` in
`src/sections/sections.11tydata.js`), so one entry covers every section it
suits — the Porlock sites serve the end of section 1 and the start of section 2
without being listed twice, and a base on a peninsula will cover several days.

Thresholds live in `site.js` under `stays`: `endpointKm` (from where the day
starts or finishes — drivable) and `routeKm` (from the route itself — reachable
mid-walk). A place qualifies on either, and the page shows both distances.

The split between field and free text: anything we'd want to check, filter or
sort on later is a field; colour and caveats are text. Each fact lives in one
place only — don't restate a field inside `notes`.

    dogs             true | false | null      null = not confirmed, never guessed
    season           "all-year" | { from: "MM-DD", to: "MM-DD" } | null
    price_per_night  number (GBP) | null
    hookup           true | false | null
    maps_url         optional override for the generated directions link

Dogs, season and price always render, including their unknown state — an
unconfirmed field is a to-do, so hiding it would hide the work.

A Google Maps directions link is generated from lat/lon (`directions` filter),
so there's no address to type when driving. Google routes to the coordinate
correctly but labels the destination with whatever named business is nearest,
which at somewhere like Porlock Weir — six within 60 m — looks alarming even
though the navigation is right. Set `maps_url` to override; a Plus Code
resolves to the point itself and is what the car park uses.

Each nearby place collapses to one line — coloured dot matching its map pin,
name, type, distance, dog status — and opens for the detail. "Expand all" is in
`assets/js/stays.js`. The "Show on map" button sits inside the `<summary>`, so
`map-section.js` stops its click toggling the disclosure.

Two fields carry their weight:

- `verified` — the date the details were last checked against the business's
  own site. `null` means they came from a directory and are shown as
  unconfirmed. These go stale quietly: porlockcaravanpark.co.uk now resolves to
  a differently-named park at a different address while directories still list
  the old one.
- `dogs` — `true`, `false`, or `null` for unknown. Never guess it.

Each section map shows the nearby places as pins, coloured by type from
`style.css` (`.stay-pin-<type>`). They're `divIcon`s rather than Leaflet's
default marker, so nothing is fetched from a CDN and the colours stay with the
stylesheet. A layers control toggles them, and "Show on map" beside a list
entry pans to its pin. The data reaches the script trimmed, as JSON in
`data-stays` — the `staysForMap` filter resolves the type label server-side so
the browser doesn't need a second copy of the mapping.

Coordinates come from postcodes via `api.postcodes.io` (free, no key). A wrong
one doesn't error, it just silently stops the place appearing anywhere, so
`npm run validate` range-checks them.

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
