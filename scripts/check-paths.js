// Fails if the built site contains an internal path that doesn't carry the
// configured pathPrefix. Those paths work fine on the local dev server but
// 404 once deployed to a GitHub Pages project page, so this is only ever
// caught after publishing unless something checks for it. Runs after the
// build, via `npm run check`.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SITE = path.join(ROOT, "_site");

// Ask the Eleventy config for the prefix rather than repeating it here.
const { default: configure } = await import(new URL("../.eleventy.js", import.meta.url));
const stub = new Proxy({}, { get: () => () => {} });
const PREFIX = configure(stub)?.pathPrefix;

if (!PREFIX) {
  console.error("No pathPrefix found in .eleventy.js — nothing to check against.");
  process.exit(1);
}

if (!fs.existsSync(SITE)) {
  console.error("No _site/ directory. Run the build first.");
  process.exit(1);
}

let errors = 0;
const ATTR = /(href|src|data-src|data-gpx)="(\/[^"]*)"/g;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(html|json)$/.test(entry.name)) check(full);
  }
}

function report(file, value) {
  console.error(`  ✗ ${path.relative(ROOT, file)}: "${value}" is missing the ${PREFIX} prefix`);
  errors += 1;
}

function check(file) {
  const raw = fs.readFileSync(file, "utf8");

  if (file.endsWith(".html")) {
    for (const [, , value] of raw.matchAll(ATTR)) {
      if (!value.startsWith(PREFIX)) report(file, value);
    }
    return;
  }

  // JSON feeds are read by the map scripts, so their paths need the prefix too.
  const seen = [];
  JSON.parse(raw, (_k, v) => {
    if (typeof v === "string" && v.startsWith("/") && !v.startsWith(PREFIX)) seen.push(v);
    return v;
  });
  for (const value of seen) report(file, value);
}

walk(SITE);

if (errors) {
  console.error(`\n${errors} unprefixed path(s) found. They would 404 on the deployed site.`);
  process.exit(1);
}
console.log(`✓ all internal paths carry the ${PREFIX} prefix.`);
