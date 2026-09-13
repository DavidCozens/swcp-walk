# Walking the South West Coast Path

A static planning-and-journal site for the SWCP, built with
[Eleventy](https://www.11ty.dev/). Sections in, map pages out.

## The idea in one line

Each **section** of the walk is a markdown file plus a GPX track. Drop the two
in, and the build wires up the section page, adds it to the region navigation,
and draws it on the overview map. No hand-editing of navigation or maps.

## Structure

```
src/
  index.njk                 Overview page: whole-route map + regions
  regions.njk               One page per region (auto-generated)
  api-sections.njk          /api/sections.json — feeds the overview map
  _data/
    site.js                 Title, tagline, map tile source
    regions.js              The region list (the middle level)
  _includes/layouts/        base.njk (shell) + section.njk (a section page)
  sections/                 One markdown file per section  <-- you edit these
  gpx/                      One GPX file per section        <-- and drop these
  assets/                   CSS + the two small map scripts
scripts/validate-content.js Content checks (run in CI and locally)
scripts/check-output.js     Guards the built site (paths, double-escaping)
templates/section-template.md  Copy this to start a new section
```

There are three levels: **overview → region → section**. A section belongs to a
region via its `region:` field; regions are defined once in
`src/_data/regions.js`.

## Add a section

Plan the route in OS Maps, then hand the link to the importer:

```
npm run import:route -- https://explore.osmaps.com/route/12345678/my-route 02-porlock-lynmouth
```

It writes `src/gpx/02-porlock-lynmouth.gpx` and prints a front matter block
with the distance and ascent taken from OS's own figures.

1. Copy `templates/section-template.md` into `src/sections/`, e.g.
   `02-porlock-lynmouth.md`.
2. Paste in the imported front matter and fill in `title`, `start`, `end`,
   `region` and `order`. `region` must match a slug in `src/_data/regions.js`.
3. `npm run check` (validates, then builds). Push.

Set `os_url` to the OS Maps link and the section page shows an "Open in OS
Maps" link under the map. The importer fills this in for you.

`escape_points` records where you can leave the path mid-section — `name`, an
optional `km` along the route, and a `detail`. A `transport` option can carry a
`season` when the link is summer-only.

The importer warns if a route doubles back on itself: that looks normal on a
map but inflates the distance and ascent.

The generated GPX holds the track only — OS waypoints are the shaping points
you drop while planning, not places worth pinning on a map.

Required fields: `title`, `order`, `region`, `start`, `end`, `gpx`.
Everything else is optional and only shows when present.

## Run it (Docker)

The dev server runs in a container, so you don't install Node on your machine.

```
docker compose up          # then open http://localhost:8080
```

That redirects to http://localhost:8080/swcp-walk/. The site is published to a
GitHub Pages project page under `/swcp-walk/`, and the dev server mirrors that
so local preview matches the deployed site.

It live-reloads as you edit. Stop with Ctrl-C.

### Or in VS Code

Open the folder and choose **Reopen in Container** (needs the Dev Containers
extension). You get a shell with everything installed; run `npm run serve` and
the preview auto-forwards to your browser. Claude Code works in that same
terminal. You can add the Claude Code extension from the marketplace if you
want it in the sidebar.

### Commands (inside the container)

```
npm run serve     # dev server with live reload
npm run validate  # content checks
npm run build     # build to _site/
npm run check     # validate, build, check output — run before pushing
```

## Testing

`npm run validate` fails if a section is missing a required field, uses an
unknown region, reuses an `order`, or points at a GPX file that's missing or
isn't valid XML.

`npm run check:output` runs after the build and fails if the built site
contains an internal path without the `/swcp-walk/` prefix, or anything escaped
twice (`&amp;amp;`, which renders as the literal text `&amp;`). Both work fine
on the dev server and only show up once deployed, so they need a machine to
catch them.

Both run on every push and pull request via `.github/workflows/deploy.yml`, so a
broken section can't reach the live site.
Add more checks here as the site grows.

## Deploy (GitHub Pages)

1. Push to a repo on your **personal** GitHub account.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow validates, builds, and deploys.
4. Set `url` in `src/_data/site.js` to your Pages URL.

## Places to stay

`src/_data/accommodation.js` lists campsites, Brit Stops, park4night spots,
B&Bs and inns as points on the map. Sections don't reference them — each
section works out what's within reach and lists it, so adding a site once
covers every section near it.

Set `lat`/`lon` (postcode → coordinates via api.postcodes.io), `dogs` as
`true`/`false`/`null`, and `verified` to the date you last checked the details
against the owner's own website. Anything unverified is labelled as such on the
page rather than presented as fact.

How near counts is set in `src/_data/site.js` under `stays`.

## Maps

The overview and section maps use Leaflet with OpenStreetMap tiles (free, no
key). When you want the OS Maps look, change `tiles` in `src/_data/site.js` to
an Ordnance Survey tile URL and API key.

## Keeping private things private

While the repo is public, **no dates and no van overnight locations go in it.**
The plan is to decide later — take the repo private, or split the sensitive data
out — when that data actually needs to exist.

Until then: the `_private/` folder is git-ignored (see `.gitignore`). Anything
you put there stays on your machine and is never committed or published. Don't
remove that ignore line without deciding the privacy question first.
