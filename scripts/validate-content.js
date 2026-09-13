// Fails the build if a section is missing required front matter, or its GPX
// file is missing or unparseable. Run with `npm run validate`.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { XMLValidator } from "fast-xml-parser";

const ROOT = process.cwd();
const SECTIONS_DIR = path.join(ROOT, "src", "sections");
const PUBLIC_ROOT = path.join(ROOT, "src");

const REQUIRED = ["title", "order", "region", "start", "end", "gpx"];

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
const { distanceKm, trackPoints } = await import(new URL("../lib/nearby.js", import.meta.url));
const STAY_TYPES = ["campsite", "britstop", "park4night", "cl", "bnb", "inn", "hostel"];
const KINDS = ["endpoint", "escape", "stay", "poi", "stop"];
const bySlug = new Map(locations.map((l) => [l.slug, l]));

// How far a section's GPX may begin or end from the location it names.
const ENDPOINT_TOLERANCE_KM = 1;

let errors = 0;
const seenOrders = new Map();

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

if (errors) {
  console.error(`\n${errors} problem(s) found.`);
  process.exit(1);
}
console.log(`✓ ${files.length} section(s) valid.`);
