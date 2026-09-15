# Project notes for Claude Code

A static site for planning (and later journalling) a walk of the South West
Coast Path. Built with **Eleventy**. Sections in, map pages out.

## How it's structured

Three levels: **overview → region → section**.

- A **section** is one file in `src/sections/*.md`, plus a matching GPX in
  `src/gpx/` once its route is plotted. Front matter drives everything; the
  GPX draws the route.
- **Regions** are defined once in `src/_data/regions.js`. A section joins one
  via its `region:` slug.
- The overview map is fed by `/api/sections.json`, generated from all sections.
  Region pages use the same feed and script, narrowed by `data-region`: routes
  where plotted, and each unplotted section's two ends as dots, so a region has
  a shape before anything is drawn. Their distance and ascent add up plotted
  sections only, and say how many that covers.
- Region→section grouping is done in `.eleventy.js` (a JS collection), not in
  templates — Nunjucks `selectattr` was unreliable for this, so keep grouping
  logic in the config.

Required section front matter: `title`, `order`, `region`, `start`, `end`.
Everything else (`gpx`, `distance_km`, `ascent_m`, `os_url`, `crosses`, `mode`,
`transport`, `escape_points`, `shops`, `eat`, body text) is optional and only
renders when present.

All 52 SWCPA stages exist as pages, most without a route. `order` is the SWCPA
stage number; OSM's stage relations (super-relation 2376086) match that list.
A page without a GPX says "Route not plotted yet", still maps its two ends, and
lists only what's found by radius from them — places to stay and stops. What's
found *along* a route waits for one, and so do hospitals and vets: "the nearest
few" is only true once that stretch has been researched, which happens with its
route. Before that, the nearest A&E on record for Exmouth is in Taunton. Each
unplotted section is listed on `/todo/`.

**The path is one unbroken chain.** `npm run validate` checks that every
section starts at the very endpoint the previous one finished at, and that
stages run 1–52 with none missing. Where water separates two sections — only
the Yealm, between 36 and 37 — the ferry is a **crossing**: a section file with
`crossing: true` and a fractional `order` (36.5), its own GPX taken from the
OSM ferry way, and a page for the ferry's details. It sits in prev/next and on
the overview, drawn dashed, but not in the count: the path is still 52
sections. Two endpoints on either bank, rather than one at the ferry, because
the banks are 180 m apart on foot and a long way round by road. Section 49
(Portland) is a circuit: `start` and `end` are the same, and it gets no transit
link, since there's no journey to plan.

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

Hospitals and vets (`lib/locations/medical.js`) are matched differently: not by
radius but by *nearest few, however far* (`site.js` → `nearby.hospital.nearest`).
A radius is the wrong rule when the nearest A&E is 42 km away and you still need
to know which it is. For the same reason the nearest `ae` is always listed, after
the nearest few, when they don't already include one: three GP minor-injury
services fill Hartland Quay's top three and would otherwise push Barnstaple off. `maxKm` in `site.js` is a ceiling on "however far", for a
route plotted before its stretch is researched. They get pins in the same "Show pins" layer as everything else, but never widen
the map: the
starting view comes from the route's bounds alone, so a hospital 42 km away
simply waits off-screen until you zoom out or press "Show on map". Each also
carries a Google Maps link, which routes from wherever you actually are. `hospital.type`
separates a full 24/7 `ae` from a `utc` urgent treatment centre, because that
decides whether you drive ten minutes or an hour. A third, `minor`, is a GP
practice's minor injuries service: weekdays, ring first, no walk-ins. Lynton's
is on the doorstep of section 3 and still no use on a Saturday, so it must never
read as "Urgent care". Drive times are estimated
from straight-line distance and the page says they're rough.

**Nothing near a section is listed by hand.** Because every location has
coordinates, a section discovers what it passes (`lib/nearby.js`), and how far
along the route each one falls is computed. County Gate was recorded by hand as
11.4 km along section 2; it is actually 8.8 km, and nobody would ever have
caught that.

**Nothing across water counts as near.** Straight-line distance is fine on a
coast until the line crosses an estuary: Crow Point car park is 1 km from
Instow Sands and a day's walk round by Barnstaple. `lib/water.js` draws each
estuary once, as its channel from the sea up to the lowest bridge you can walk
over, and `crossesWater()` in `lib/nearby.js` refuses any proximity whose
straight line crosses one — escape points, sights, food, stays (by either end
or the route) and the walk to a bus stop. Food isolation ignores a café across
the water. Hospitals and vets are exempt: you'd drive, and the nearest vet is
still the nearest, though its rough drive time understates. Add a river's line
when the path first reaches it, from OSM's `waterway=river` ways, and stop it
short of the lowest bridge with a footway; `npm run validate` fails if a
plotted route crosses a line, which is how a line running past a bridge shows
up. Only a crossing you can't always make may: a `crossing` section, or a
section whose route takes a ferry or a tidal bridge partway and names that
water in `crosses` — section 14 takes the Rock ferry over the Camel and section
17 the Penpol tidal footbridge over the Gannel, so they have `crosses: [camel]`
and `crosses: [gannel]`. Such water stays a line, because the far bank isn't
near at high tide or out of season. Validate also fails on named water the
route never crosses. Where the banks are mapped as coastline
rather than a river way, as the Camel and Boscastle harbour are, draw the line
between the two banks. A straight line can also clip a bend where
both ends are on the same bank; that's rare and errs towards leaving something
out.

Endpoint coordinates beyond Lynmouth are the node where OSM's relations for
the two stages meet, not a town centre — the boundary as the path itself draws
it. The Yealm is the exception: the ends of the ferry way. Endpoints aren't on
`/todo/` for want of a `verified` date; there's no owner to confirm a harbour
with.

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
with a dog. A `hotel` is only recorded if it takes dogs, which
`npm run validate` enforces. Details go stale quietly: porlockcaravanpark.co.uk now resolves to
a differently-named park at a different address while directories still list
the old one.

Services get a badge too, though they never become pins — a bus route isn't a
place. `locBadge` falls back to a route's `type` when it has no `kind`. The
output check fails on any badge type with no colour rule, because an unstyled
one renders as a white ring around an invisible glyph: a blank disc, with
nothing in the build to say so. That's exactly how the bus and taxi badges
first shipped.

`badgeParts()` in `.eleventy.js` decides which glyph and which colour a
location gets, and both the page and the map data go through it. Keep it that
way: two copies of that decision is exactly how the list came to show category
glyphs for points of interest while the map still showed stars.

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

## Transport

`src/_data/transport.js` merges `lib/transport/{providers,routes}.js`.

- **providers** — an operator's contact details, entered once.
- **routes** — a service and the *set* of location slugs it calls at. A set, not
  an ordered list: it answers "can I get from here to there on one service",
  which is the question a section asks. Ordering would add direction and
  journey time at a lot more maintenance.

`season` sits on the **route**, not the provider — an operator can run all year
while one service is summer-only, which is exactly the case on Exmoor. Note a
bus season is set afresh each year, unlike a campsite's, so it needs rechecking
annually rather than assumed to recur.

Sections don't list their transport. `lib/transport.js` intersects where a
route calls with the locations a section touches — endpoints, escape points,
nearby stops — and offers what matches, flagging whether a service reaches both
ends of the day. Enter the coast bus once and it appears wherever it's relevant.

Providers come in two kinds. `operator` runs the scheduled routes in
`routes.js` and is named by them. `transfer` will drive you or your bags on
request — no timetable, so these are offered by coverage instead: either
`{ everywhere: true }` for a firm working the whole path, or
`{ lat, lon, radiusKm }` for a local one, matched against a section's endpoints.
`services` is `["passenger", "baggage"]` — worth keeping the baggage firms,
because several of them will carry people too. A transfer with broken coverage
would silently never appear anywhere, so `npm run validate` checks the shape,
and `/todo/` flags a taxi with no phone number, since that's how you book one.

A service doesn't have to stop at the exact spot to be useful — it has to be
within a walk of it. Each route reports how far you'd walk from each end of the
section to its nearest calling point, so the coast bus is usable for the price
of 2.8 km rather than simply unusable. `site.js` sets `walk.reachKm` (2.5,
normal reach) and `walk.maxReachKm` (5, beyond which a route is only kept if it
serves an escape point). A longer walk reads as "further out" when something
better exists, and as "a walk at one end" when it's the only option — a sole
option shouldn't be presented apologetically. A stop within `walk.onRouteKm`
(1.5) of the route, and the section's own far end, are measured along the path;
anything further off is straight-line, and the page says so. Straight-line
alone called the Instow bus "a walk at one end" of section 6, because Fremington
is 4.3 km from Braunton — across the Taw. Along the path it's 13.9 km. Measuring
by the path overstates where a road cuts a headland, which is the safer error.

`transitLink` is a generated Google Maps transit link between a section's two
endpoints: every bus, train and ferry option, nothing typed, opens the app on a
phone. It is the primary answer to "how do I get back", because it's built from
coordinates we already hold and so can't go stale — which a stored timetable
link demonstrably can. The bustimes.org URL for the Exmoor Coaster, captured
from a search result, already redirects to an operator page because the service
slug changed. Treat a route's `url` as a dated fact, like anything else with
`verified`.

## Food, drink and supplies

There are over a hundred cafés, pubs and shops within reach of the first two
sections alone, and almost all of them are in Minehead or Lynmouth where you
don't need telling. So these are ranked by **isolation** — how far to the next
one of the same sort — rather than by distance from the route. A lone tea room
on a headland rises to the top; the fortieth café in a town sorts itself out of
the way, and `site.js` caps how many are shown. Record generously on remote
stretches and sparingly in towns; the ranking does the rest.

They're matched by carrying a `food` or `shop` block, not by `kind`, so a pub
with rooms is a place to stay *and* somewhere to eat and appears in both lists.
The free-text `shops` and `eat` fields survive as a closing line per section,
which is where to say what the list can't — that there's nothing at all between
Porlock Weir and Lynmouth.

## Every list looks the same

`src/_includes/macros/entry.njk` holds one shape for every list on a section
page: badge, name, role, one key fact, a jump to its pin, detail behind a
disclosure. Sections differ in what they put inside; they shouldn't differ in
how they look. Every list starts collapsed and every section has its own
"Expand all", however short. Which sections matter depends entirely on why the
page was opened — a hurt dog, a hungry afternoon, two days of transport to plan
— and in each of those most of the page is noise. That only works because a
summary line carries the fact you'd open the entry for: a vet's summary already
says "24 hr · 11.54 km · roughly 20 min by road". Each expand-all is scoped to its own section.

## Two utility pages

**"Nearest to me"** in the header asks the browser for a position and opens
whichever section is closest. Each section ships twelve evenly spaced points
from its route in `/api/sections.json` (`samplePoints` in `lib/nearby.js`), so
nearest means nearest to the *route*, not to a midpoint — the whole feed is
under a kilobyte. Geolocation needs a secure context: fine on the deployed
site, and localhost counts as secure. `assets/js/nearest.js` handles refusal,
failure and a browser without geolocation, and reports the distance so a result
44 km away is obviously not where you're standing.

**`/todo/`** lists everything recorded as unconfirmed — places with no
`verified` date, stays missing a dog policy, season or price, services with no
timetable link or season. It's the payoff for recording "not confirmed" instead
of guessing: the blanks are only useful if they're easy to find. Phone numbers
are shown inline so the page is workable as a call list. It's a public page like
any other; it contains no personal data, only gaps in the research.

## Asset caching

GitHub Pages serves assets with a ten-minute cache, so a phone can keep running
the previous CSS or JS well after a deploy — which looks exactly like a fix that
didn't work. The `asset` filter stamps each stylesheet and script with a short
hash of its contents (`/assets/js/map-section.js?v=ba76e52f`), so a changed file
gets a new URL and an unchanged one stays cached. Use it for every asset the
site serves itself; don't combine it with `url`, since `HtmlBasePlugin` still
adds the prefix.

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
invalid. It also fails on a gap in the chain (a section not starting where the
last one ended), a gap in the stage numbers, a crossing with a whole-number
order, or a walked route crossing a line in `lib/water.js`.

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
