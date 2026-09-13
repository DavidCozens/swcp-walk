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

const stayUrl = new URL("../src/_data/accommodation.js", import.meta.url);
const { default: accommodation } = await import(stayUrl);
const STAY_TYPES = ["campsite", "britstop", "park4night", "cl", "bnb", "inn", "hostel"];

let errors = 0;
const seenOrders = new Map();

// Accommodation is matched to sections by position, so a missing or wrong
// coordinate doesn't error — it just silently fails to appear anywhere.
const seenSlugs = new Set();
for (const a of accommodation) {
  const where = `accommodation "${a.slug || a.name || "?"}"`;
  if (!a.slug) fail("accommodation.js", `${where} has no slug`);
  else if (seenSlugs.has(a.slug)) fail("accommodation.js", `duplicate slug "${a.slug}"`);
  else seenSlugs.add(a.slug);

  if (!a.name) fail("accommodation.js", `${where} has no name`);
  if (!STAY_TYPES.includes(a.type)) {
    fail("accommodation.js", `${where} has unknown type "${a.type}" (expected one of ${STAY_TYPES.join(", ")})`);
  }
  for (const [key, lo, hi] of [["lat", 49.8, 56], ["lon", -6.5, 2]]) {
    const v = a[key];
    if (typeof v !== "number" || Number.isNaN(v)) {
      fail("accommodation.js", `${where} needs a numeric ${key}`);
    } else if (v < lo || v > hi) {
      fail("accommodation.js", `${where} ${key} ${v} is outside Great Britain`);
    }
  }
  // true / false / null only — "probably" helps nobody standing in the rain.
  if (a.dogs !== true && a.dogs !== false && a.dogs !== null && a.dogs !== undefined) {
    fail("accommodation.js", `${where} dogs must be true, false or null, got ${JSON.stringify(a.dogs)}`);
  }
  // season: "all-year" | { from: "MM-DD", to: "MM-DD" } | null
  if (a.season !== null && a.season !== undefined && a.season !== "all-year") {
    const ok =
      a.season && typeof a.season === "object" &&
      /^\d{2}-\d{2}$/.test(a.season.from || "") &&
      /^\d{2}-\d{2}$/.test(a.season.to || "");
    if (!ok) {
      fail("accommodation.js", `${where} season must be "all-year", null, or { from: "MM-DD", to: "MM-DD" }`);
    }
  }

  if (a.price_per_night !== null && a.price_per_night !== undefined) {
    if (typeof a.price_per_night !== "number" || Number.isNaN(a.price_per_night) || a.price_per_night < 0) {
      fail("accommodation.js", `${where} price_per_night must be a positive number or null, got ${JSON.stringify(a.price_per_night)}`);
    }
  }

  if (a.maps_url && !/^https:\/\//.test(a.maps_url)) {
    fail("accommodation.js", `${where} maps_url must be an https link`);
  }

  if (a.verified && !/^\d{4}-\d{2}-\d{2}$/.test(a.verified)) {
    fail("accommodation.js", `${where} verified should be YYYY-MM-DD, got ${JSON.stringify(a.verified)}`);
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
