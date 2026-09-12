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
templates/section-template.md  Copy this to start a new section
```

There are three levels: **overview → region → section**. A section belongs to a
region via its `region:` field; regions are defined once in
`src/_data/regions.js`.

## Add a section

1. Copy `templates/section-template.md` into `src/sections/`, e.g.
   `02-porlock-weir-lynmouth.md`.
2. Fill in the front matter. `region` must match a slug in
   `src/_data/regions.js`. `order` sets its place in the whole-route sequence.
3. Export the route from OS Maps as GPX and save it in `src/gpx/` at the path
   you put in the `gpx:` field.
4. `npm run check` (validates, then builds). Push.

Required fields: `title`, `order`, `region`, `start`, `end`, `gpx`.
Everything else is optional and only shows when present.

## Run it (Docker)

The dev server runs in a container, so you don't install Node on your machine.

```
docker compose up          # then open http://localhost:8080
```

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
npm run check     # validate then build — run before pushing
```

## Testing

`npm run validate` fails if a section is missing a required field, uses an
unknown region, reuses an `order`, or points at a GPX file that's missing or
isn't valid XML. It runs on every push and pull request via
`.github/workflows/deploy.yml`, so a broken section can't reach the live site.
Add more checks here as the site grows.

## Deploy (GitHub Pages)

1. Push to a repo on your **personal** GitHub account.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow validates, builds, and deploys.
4. Set `url` in `src/_data/site.js` to your Pages URL.

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
