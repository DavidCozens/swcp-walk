// Fails the build if a section is missing required front matter, or its GPX
// file is missing or unparseable. Run with `npm run validate`.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { XMLValidator } from "fast-xml-parser";

const ROOT = process.cwd();
const SECTIONS_DIR = path.join(ROOT, "src", "sections");
const PUBLIC_ROOT = path.join(ROOT, "src");

// `gpx` isn't required: every stage exists as a page before its route is
// plotted, and a page without one says so.
const REQUIRED = ["title", "order", "region", "start", "end"];

// Optional, but if present they must be positive numbers.
const NUMERIC = ["distance_km", "ascent_m"];

// Renamed when the site went metric. These render as nothing if left behind,
// so catch them rather than quietly dropping a section's facts.
const RETIRED = {
  distance_mi: "distance_km (miles x 1.609)",
  ascent_ft: "ascent_m (feet x 0.3048)",
};

const regionsUrl = new URL("../src/_data/regions.js", import.meta.url);
const { default: regions } = await import(regionsUrl);
const regionSlugs = new Set(regions.map((r) => r.slug));

const locUrl = new URL("../src/_data/locations.js", import.meta.url);
const { default: locations } = await import(locUrl);
const { distanceKm, trackPoints, waterCrossed } = await import(new URL("../lib/nearby.js", import.meta.url));
const { default: water } = await import(new URL("../lib/water.js", import.meta.url));
const STAY_TYPES = ["campsite", "britstop", "park4night", "aire", "cl", "bnb", "inn", "hotel", "hostel"];
const KINDS = ["endpoint", "escape", "stay", "poi", "stop", "hospital", "vet", "food", "shop"];
const HOSPITAL_TYPES = ["ae", "utc", "minor"];
const bySlug = new Map(locations.map((l) => [l.slug, l]));

// How far a section's GPX may begin or end from the location it names.
const ENDPOINT_TOLERANCE_KM = 1;

const transportUrl = new URL("../src/_data/transport.js", import.meta.url);
const { default: transport } = await import(transportUrl);
const ROUTE_TYPES = ["bus", "train", "ferry", "taxi", "baggage", "walk"];
const PROVIDER_KINDS = ["operator", "transfer"];
const SERVICES = ["passenger", "baggage"];

let errors = 0;
const seenOrders = new Map();
// Every section, for the checks that look across them: numbering and whether
// each one starts where the last one finished.
const chain = [];

// Accommodation is matched to sections by position, so a missing or wrong
// coordinate doesn't error — it just silently fails to appear anywhere.
const seenSlugs = new Set();
for (const a of locations) {
  const where = `location "${a.slug || a.name || "?"}"`;
  if (!a.slug) fail("locations", `${where} has no slug`);
  else if (seenSlugs.has(a.slug)) fail("locations", `duplicate slug "${a.slug}"`);
  else seenSlugs.add(a.slug);

  if (!a.name) fail("locations", `${where} has no name`);
  if (!KINDS.includes(a.kind)) {
    fail("locations", `${where} has unknown kind "${a.kind}" (expected one of ${KINDS.join(", ")})`);
  }
  if (a.kind === "stay") {
    if (!a.stay) fail("locations", `${where} is a stay but has no stay block`);
    else if (!STAY_TYPES.includes(a.stay.type)) {
      fail("locations", `${where} has unknown stay.type "${a.stay.type}" (expected one of ${STAY_TYPES.join(", ")})`);
    }
  }
  if (a.kind === "hospital") {
    // Which sort it is decides whether you drive an hour or ten minutes.
    if (!a.hospital || !HOSPITAL_TYPES.includes(a.hospital.type)) {
      fail("locations", `${where} needs hospital.type of ${HOSPITAL_TYPES.join(", ")}`);
    }
  }
  if (a.kind === "vet") {
    const e = (a.vet || {}).emergency;
    if (e !== true && e !== false && e !== null && e !== undefined) {
      fail("locations", `${where} vet.emergency must be true, false or null`);
    }
  }
  if (a.kind === "escape" && !(a.escape && a.escape.detail)) {
    fail("locations", `${where} is an escape point but has no escape.detail saying how you get off the path`);
  }
  for (const [key, lo, hi] of [["lat", 49.8, 56], ["lon", -6.5, 2]]) {
    const v = a[key];
    if (typeof v !== "number" || Number.isNaN(v)) {
      fail("locations", `${where} needs a numeric ${key}`);
    } else if (v < lo || v > hi) {
      fail("locations", `${where} ${key} ${v} is outside Great Britain`);
    }
  }
  // true / false / null only — "probably" helps nobody standing in the rain.
  const stay = a.stay || {};
  if (stay.dogs !== true && stay.dogs !== false && stay.dogs !== null && stay.dogs !== undefined) {
    fail("locations", `${where} stay.dogs must be true, false or null, got ${JSON.stringify(stay.dogs)}`);
  }
  // Hotels are only worth recording for this walk if they take dogs; a hotel
  // that doesn't, or might not, is left out rather than listed.
  if (stay.type === "hotel" && stay.dogs !== true) {
    fail("locations", `${where} is a hotel but stay.dogs isn't true: hotels are only recorded if they take dogs`);
  }
  // season: "all-year" | { from: "MM-DD", to: "MM-DD" } | null
  if (stay.season !== null && stay.season !== undefined && stay.season !== "all-year") {
    const ok =
      stay.season && typeof stay.season === "object" &&
      /^\d{2}-\d{2}$/.test(stay.season.from || "") &&
      /^\d{2}-\d{2}$/.test(stay.season.to || "");
    if (!ok) {
      fail("locations", `${where} stay.season must be "all-year", null, or { from: "MM-DD", to: "MM-DD" }`);
    }
  }

  if (stay.price_per_night !== null && stay.price_per_night !== undefined) {
    if (typeof stay.price_per_night !== "number" || Number.isNaN(stay.price_per_night) || stay.price_per_night < 0) {
      fail("locations", `${where} stay.price_per_night must be a positive number or null, got ${JSON.stringify(stay.price_per_night)}`);
    }
  }

  if (a.maps_url && !/^https:\/\//.test(a.maps_url)) {
    fail("locations", `${where} maps_url must be an https link`);
  }

  if (a.verified && !/^\d{4}-\d{2}-\d{2}$/.test(a.verified)) {
    fail("locations", `${where} verified should be YYYY-MM-DD, got ${JSON.stringify(a.verified)}`);
  }
}

function fail(file, msg) {
  console.error(`  ✗ ${file}: ${msg}`);
  errors += 1;
}

// Water: a malformed line wouldn't error, it would just silently stop
// excluding anything across its estuary.
const seenWater = new Set();
for (const w of water) {
  const where = `water "${w.slug || w.name || "?"}"`;
  if (!w.slug) fail("water", `${where} has no slug`);
  else if (seenWater.has(w.slug)) fail("water", `duplicate slug "${w.slug}"`);
  else seenWater.add(w.slug);
  if (!w.source) fail("water", `${where} has no source`);
  if (!Array.isArray(w.lines) || !w.lines.length) {
    fail("water", `${where} has no lines`);
    continue;
  }
  for (const line of w.lines) {
    const ok =
      Array.isArray(line) &&
      line.length >= 2 &&
      line.every(
        (p) => Array.isArray(p) && p.length === 2 && Math.abs(p[0]) <= 90 && Math.abs(p[1]) <= 180
      );
    if (!ok) fail("water", `${where} has a line that isn't a list of at least two [lat, lon] points`);
  }
}

// Transport: a route reaching a place that doesn't exist would simply never be
// offered, so check the references rather than let them fail silently.
const providerSlugs = new Set(transport.providers.map((p) => p.slug));
for (const p of transport.providers) {
  const where = `provider "${p.slug || p.name || "?"}"`;
  if (!PROVIDER_KINDS.includes(p.kind)) {
    fail("transport", `${where} has unknown kind "${p.kind}" (expected ${PROVIDER_KINDS.join(" or ")})`);
  }
  if (p.kind === "transfer") {
    // Offered by coverage rather than timetable, so bad coverage means it
    // silently never appears anywhere.
    const c = p.covers || {};
    const ok = c.everywhere === true ||
      (typeof c.lat === "number" && typeof c.lon === "number" && typeof c.radiusKm === "number" && c.radiusKm > 0);
    if (!ok) {
      fail("transport", `${where} needs covers: { everywhere: true } or { lat, lon, radiusKm }`);
    }
    if (!Array.isArray(p.services) || !p.services.length) {
      fail("transport", `${where} must list services (${SERVICES.join(", ")})`);
    } else {
      for (const svc of p.services) {
        if (!SERVICES.includes(svc)) fail("transport", `${where} has unknown service "${svc}"`);
      }
    }
    if (p.dogs !== true && p.dogs !== false && p.dogs !== null && p.dogs !== undefined) {
      fail("transport", `${where} dogs must be true, false or null`);
    }
  }
}
const seenRoutes = new Set();
for (const r of transport.routes) {
  const where = `route "${r.slug || r.name || "?"}"`;
  if (!r.slug) fail("transport", `${where} has no slug`);
  else if (seenRoutes.has(r.slug)) fail("transport", `duplicate route slug "${r.slug}"`);
  else seenRoutes.add(r.slug);

  if (!ROUTE_TYPES.includes(r.type)) {
    fail("transport", `${where} has unknown type "${r.type}" (expected one of ${ROUTE_TYPES.join(", ")})`);
  }
  if (!providerSlugs.has(r.provider)) {
    fail("transport", `${where} names provider "${r.provider}", which isn't in providers.js`);
  }
  if (!Array.isArray(r.serves) || r.serves.length < 2) {
    fail("transport", `${where} must serve at least two locations`);
  } else {
    for (const slug of r.serves) {
      if (!bySlug.has(slug)) fail("transport", `${where} serves "${slug}", which isn't a known location`);
    }
  }
  if (r.season !== null && r.season !== undefined) {
    const ok =
      r.season && typeof r.season === "object" &&
      /^\d{2}-\d{2}$/.test(r.season.from || "") &&
      /^\d{2}-\d{2}$/.test(r.season.to || "");
    if (!ok) fail("transport", `${where} season must be null or { from: "MM-DD", to: "MM-DD" }`);
  }
}

const files = fs
  .readdirSync(SECTIONS_DIR)
  .filter((f) => f.endsWith(".md"));

if (!files.length) {
  console.error("No section files found in src/sections/.");
  process.exit(1);
}

for (const file of files) {
  const raw = fs.readFileSync(path.join(SECTIONS_DIR, file), "utf8");
  const { data } = matter(raw);

  for (const key of REQUIRED) {
    if (data[key] === undefined || data[key] === "") {
      fail(file, `missing required field "${key}"`);
    }
  }

  if (data.region && !regionSlugs.has(data.region)) {
    fail(file, `unknown region "${data.region}" (see src/_data/regions.js)`);
  }

  for (const [old, replacement] of Object.entries(RETIRED)) {
    if (data[old] !== undefined) {
      fail(file, `"${old}" is no longer used — convert it to ${replacement}`);
    }
  }

  if (data.os_url !== undefined && data.os_url !== "" && data.os_url !== null) {
    if (!/^https:\/\/explore\.osmaps\.com\/route\/\d+/.test(data.os_url)) {
      fail(file, `"os_url" should look like https://explore.osmaps.com/route/<id>, got ${JSON.stringify(data.os_url)}`);
    }
  }

  if (data.escape_points !== undefined) {
    if (!Array.isArray(data.escape_points)) {
      fail(file, `"escape_points" must be a list`);
    } else {
      data.escape_points.forEach((e, i) => {
        const where = `escape_points[${i}]`;
        if (!e || typeof e !== "object") {
          fail(file, `${where} must be a block with at least a name`);
          return;
        }
        if (!e.name) fail(file, `${where} is missing "name"`);
        // km is how far along the route the escape point sits — optional, but
        // if given it has to be a number inside the section's length.
        if (e.km !== undefined && e.km !== null && e.km !== "") {
          if (typeof e.km !== "number" || Number.isNaN(e.km)) {
            fail(file, `${where}.km must be a number, got ${JSON.stringify(e.km)}`);
          } else if (e.km < 0) {
            fail(file, `${where}.km must not be negative, got ${e.km}`);
          } else if (typeof data.distance_km === "number" && e.km > data.distance_km) {
            fail(file, `${where}.km is ${e.km}, beyond the section's ${data.distance_km} km`);
          }
        }
      });
    }
  }

  if (Array.isArray(data.transport)) {
    data.transport.forEach((t, i) => {
      if (t && typeof t === "object" && !t.detail) {
        fail(file, `transport[${i}] is missing "detail"`);
      }
    });
  }

  for (const key of NUMERIC) {
    const value = data[key];
    if (value === undefined || value === "" || value === null) continue;
    if (typeof value !== "number" || Number.isNaN(value)) {
      fail(file, `"${key}" must be a number, got ${JSON.stringify(value)}`);
    } else if (value <= 0) {
      fail(file, `"${key}" must be greater than 0, got ${value}`);
    }
  }

  // A crossing (a ferry between two sections) sits between two numbered stages
  // rather than being one, so it takes a fractional order and a numbered
  // stage takes a whole one. Mixing the two would miscount "36 of 52".
  if (data.crosses !== undefined) {
    const waterSlugs = new Set(water.map((w) => w.slug));
    if (!Array.isArray(data.crosses) || !data.crosses.length) {
      fail(file, `"crosses" should be a list of water slugs from lib/water.js, got ${JSON.stringify(data.crosses)}`);
    } else {
      for (const slug of data.crosses) {
        if (!waterSlugs.has(slug)) fail(file, `"crosses" names unknown water "${slug}"`);
      }
    }
    if (data.crossing) fail(file, `a crossing is a ferry already; "crosses" is for a section that crosses water partway`);
  }
  if (data.crossing !== undefined && data.crossing !== true) {
    fail(file, `"crossing" should be true or left out, got ${JSON.stringify(data.crossing)}`);
  }
  if (typeof data.order !== "number" && data.order !== undefined && data.order !== "") {
    fail(file, `"order" must be a number, got ${JSON.stringify(data.order)}`);
  } else if (typeof data.order === "number") {
    if (data.crossing && Number.isInteger(data.order)) {
      fail(file, `a crossing sits between two sections, so its order can't be a whole number (try ${data.order + 0.5})`);
    } else if (!data.crossing && !(Number.isInteger(data.order) && data.order > 0)) {
      fail(file, `"order" must be a whole number from 1 — only a crossing takes a fraction, got ${data.order}`);
    }
    chain.push({ file, order: data.order, crossing: data.crossing === true, start: data.start, end: data.end });
  }

  if (typeof data.order === "number") {
    if (seenOrders.has(data.order)) {
      fail(file, `duplicate order ${data.order} (also in ${seenOrders.get(data.order)})`);
    } else {
      seenOrders.set(data.order, file);
    }
  }

  for (const end of ["start", "end"]) {
    const slug = data[end];
    if (!slug) continue;
    const place = bySlug.get(slug);
    if (!place) {
      fail(file, `${end} "${slug}" is not a known location (see src/_data/locations.js)`);
    } else if (place.kind !== "endpoint") {
      fail(file, `${end} "${slug}" is a ${place.kind}, not an endpoint`);
    }
  }

  // The GPX should actually begin and finish where the section says it does.
  if (data.gpx && (data.start || data.end)) {
    const points = trackPoints(data.gpx);
    if (points.length) {
      const ends = [
        ["start", bySlug.get(data.start), points[0]],
        ["end", bySlug.get(data.end), points[points.length - 1]],
      ];
      for (const [label, place, point] of ends) {
        if (!place || !point) continue;
        const d = distanceKm(place.lat, place.lon, point[0], point[1]);
        if (d > ENDPOINT_TOLERANCE_KM) {
          fail(file, `route ${label}s ${d.toFixed(2)} km from ${place.name} — further than the ${ENDPOINT_TOLERANCE_KM} km tolerance`);
        }
      }
    }

    // A walked route never crosses an estuary line, because the line stops
    // short of the lowest bridge. If one does, the line runs on past a bridge
    // the path uses, and everything across that bridge is wrongly cut off.
    // Only a crossing you can't always make is meant to: a crossing section,
    // or a section whose route takes a ferry or a tidal bridge partway and
    // names that water in `crosses`.
    if (!data.crossing) {
      const crosses = new Set(Array.isArray(data.crosses) ? data.crosses : []);
      const used = new Set();
      for (let i = 1; i < points.length; i += 1) {
        const [a, b] = [points[i - 1], points[i]];
        const wrong = waterCrossed(a[0], a[1], b[0], b[1]).filter((slug) => {
          if (!crosses.has(slug)) return true;
          used.add(slug);
          return false;
        });
        if (wrong.length) {
          fail(file, `route crosses water "${wrong[0]}" near ${a[0].toFixed(5)}, ${a[1].toFixed(5)} — does a line in lib/water.js run past a bridge? A ferry or tidal bridge on the route belongs in "crosses"`);
          break;
        }
      }
      // A crossing the route never makes is a stale claim, or a line drawn in
      // the wrong place.
      for (const slug of crosses) {
        if (!used.has(slug)) fail(file, `"crosses" names "${slug}", but the route never crosses that water`);
      }
    }
  }

  if (data.gpx) {
    // gpx path is a site-absolute URL like /gpx/foo.gpx -> src/gpx/foo.gpx
    const gpxPath = path.join(PUBLIC_ROOT, data.gpx.replace(/^\//, ""));
    if (!fs.existsSync(gpxPath)) {
      fail(file, `GPX not found at ${data.gpx}`);
    } else {
      const gpxRaw = fs.readFileSync(gpxPath, "utf8");
      const result = XMLValidator.validate(gpxRaw);
      if (result !== true) {
        fail(file, `GPX is not valid XML (${result.err.msg})`);
      } else if (!/<(trkpt|rtept)\b/.test(gpxRaw)) {
        fail(file, "GPX has no track or route points");
      }
    }
  }
}

// The path is one continuous line, so each section has to start at the very
// place the previous one ended — the same endpoint record, not merely the same
// town. Where the path crosses water between two sections, the ferry is a
// crossing with its own entry, and that is what keeps the chain unbroken.
chain.sort((a, b) => a.order - b.order);
for (let i = 1; i < chain.length; i += 1) {
  const prev = chain[i - 1];
  const next = chain[i];
  if (prev.end && next.start && prev.end !== next.start) {
    fail(next.file, `starts at "${next.start}", but ${prev.file} ends at "${prev.end}" — the path would have a gap. If there's water between them, add a crossing`);
  }
}
// Numbered stages run 1, 2, 3… with none missing; a gap is a lost file.
const numbered = chain.filter((c) => !c.crossing);
// Reported once, at the first gap, rather than once per section after it.
const gap = numbered.findIndex((c, i) => c.order !== i + 1);
if (gap !== -1) {
  fail(numbered[gap].file, `is numbered ${numbered[gap].order} where section ${gap + 1} was expected — one is missing or duplicated`);
}
// A crossing only makes sense between two sections.
for (const c of chain.filter((x) => x.crossing)) {
  if (c === chain[0] || c === chain[chain.length - 1]) {
    fail(c.file, "is a crossing, but has no section on one side of it");
  }
}

if (errors) {
  console.error(`\n${errors} problem(s) found.`);
  process.exit(1);
}
console.log(`✓ ${files.length} section(s) valid.`);
