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

let errors = 0;
const seenOrders = new Map();

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
