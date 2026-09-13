import { HtmlBasePlugin } from "@11ty/eleventy";
import regions from "./src/_data/regions.js";
import { badge as stayBadge } from "./lib/stay-icons.js";
import { todoList } from "./lib/todo.js";
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";

// The site is published to a GitHub Pages *project* page, so it lives under
// /swcp-walk/ rather than at the domain root. Everything internal must carry
// that prefix or it 404s once deployed.
const PATH_PREFIX = "/swcp-walk/";

// Assets are served with a ten-minute cache, so a phone can keep running the
// previous CSS or JS well after a deploy — which looks exactly like a change
// not working. Stamping each asset with a hash of its contents means a changed
// file gets a new URL and an unchanged one stays cached.
const assetHashes = new Map();
function assetVersion(urlPath) {
  if (assetHashes.has(urlPath)) return assetHashes.get(urlPath);
  const file = path.join(process.cwd(), "src", urlPath.replace(/^\//, ""));
  let stamped = urlPath;
  if (fs.existsSync(file)) {
    const hash = crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
    stamped = `${urlPath}?v=${hash}`;
  }
  assetHashes.set(urlPath, stamped);
  return stamped;
}

export default function (eleventyConfig) {
  eleventyConfig.addFilter("asset", assetVersion);

  // Rewrites href/src in built HTML to include pathPrefix. Custom attributes
  // (data-gpx, data-src) aren't touched by this — those use the `url` filter
  // in the templates.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Copy static things straight through to the built site.
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/gpx": "gpx" });

  // Watch GPX and CSS/JS so `npm run serve` reloads when they change.
  eleventyConfig.addWatchTarget("src/gpx/");
  eleventyConfig.addWatchTarget("src/assets/");

  // Look up a region's display name from its slug.
  eleventyConfig.addFilter("regionName", (slug) => {
    const r = regions.find((x) => x.slug === slug);
    return r ? r.name : "";
  });

  // Human labels for accommodation types.
  const STAY_TYPES = {
    poi: "Worth a look",
    ancient: "Ancient site",
    viewpoint: "Viewpoint",
    monument: "Monument",
    church: "Church",
    lighthouse: "Lighthouse",
    nature: "Landscape",
    machine: "Feat of engineering",
    bus: "Bus",
    train: "Train",
    ferry: "Ferry",
    taxi: "Taxi",
    transfer: "Taxi & luggage",
    food: "Food",
    cafe: "Café",
    pub: "Pub",
    restaurant: "Restaurant",
    shop: "Shop",
    convenience: "Convenience store",
    supermarket: "Supermarket",
    butcher: "Butcher",
    bakery: "Bakery",
    hospital: "Hospital",
    vet: "Vet",
    escape: "Escape point",
    endpoint: "Start / finish",
    campsite: "Campsite",
    britstop: "Brit Stops",
    park4night: "park4night",
    aire: "Motorhome parking",
    cl: "CL / CS",
    bnb: "B&B",
    inn: "Inn",
    hotel: "Hotel",
    hostel: "Hostel",
  };
  eleventyConfig.addFilter("stayType", (t) => STAY_TYPES[t] || t || "");
  eleventyConfig.addFilter("stayBadge", (t) => stayBadge(t));
  // A location's badge: a stay is badged by its stay.type, everything else by
  // its kind, so an escape point gets its own glyph.
  // A badge for anything a list holds. Routes have no `kind` — they're not
  // places — so fall back to their type: a bus gets a bus.
  // Which glyph and which colour a location gets. Used by the page *and* by
  // the map data, because having two copies of this is exactly how the list
  // ended up showing category glyphs while the map showed stars.
  function badgeParts(loc) {
    if (!loc) return { glyph: "", colour: "" };
    if (loc.kind === "stay") {
      const t = (loc.stay || {}).type;
      return { glyph: t, colour: t };
    }
    // Points of interest vary the glyph but keep the one colour.
    if (loc.kind === "poi") {
      return { glyph: (loc.poi || {}).type || "poi", colour: "poi" };
    }
    const k = loc.kind || loc.type || "";
    return { glyph: k, colour: k };
  }

  function labelFor(loc) {
    const parts = badgeParts(loc);
    return STAY_TYPES[parts.glyph] || parts.glyph || "";
  }

  eleventyConfig.addFilter("locBadge", (loc) => {
    const { glyph, colour } = badgeParts(loc);
    return stayBadge(glyph, colour);
  });
  // What to call this location in a given list: a pub with rooms is an "Inn"
  // under Staying nearby and a "Pub" under Food.
  eleventyConfig.addFilter("roleLabel", (loc, role) => {
    const block = (loc || {})[role] || {};
    if (block.type) return STAY_TYPES[block.type] || block.type;
    const k = loc && loc.kind === "stay" ? (loc.stay || {}).type : (loc || {}).kind;
    return STAY_TYPES[k] || k || "";
  });

  const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  // season: "all-year" | { from: "MM-DD", to: "MM-DD" } | null
  eleventyConfig.addFilter("seasonText", (season) => {
    if (season === "all-year") return "Open all year";
    if (season && season.from && season.to) {
      const show = (md) => {
        const [m, d] = String(md).split("-").map(Number);
        return `${d} ${MONTHS[m - 1] || "?"}`;
      };
      return `${show(season.from)} to ${show(season.to)}`;
    }
    return "Season not confirmed";
  });

  eleventyConfig.addFilter("priceText", (amount, note) => {
    if (typeof amount !== "number") return "Price not known";
    const money = `£${Number.isInteger(amount) ? amount : amount.toFixed(2)} per night`;
    return note ? `${money} (${note})` : money;
  });

  // Tap-to-navigate: opens the Google Maps app on a phone and routes from
  // wherever the van currently is, so there's no address to type.
  eleventyConfig.addFilter("driveTime", (km) => {
    if (typeof km !== "number" || !(km > 0)) return "";
    const minutes = Math.round(((km * 1.3) / 45) * 60 / 5) * 5;
    // Rounding to five minutes takes anything under 1.5 km to zero, which
    // reads as a mistake. Lynton's minor injuries service is 0.6 km away.
    if (minutes < 5) return "a few minutes by road";
    if (minutes < 60) return `roughly ${minutes} min by road`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `roughly ${h} hr${m ? " " + m + " min" : ""} by road`;
  });

  // Directions to a location from wherever you are — a Maps URL with no
  // origin routes from your current position, which is the "I'm here, get me
  // to X" case. `mode` is driving, transit or walking; omitted, Maps decides.
  eleventyConfig.addFilter("directions", (stay, mode) => {
    if (!stay) return "";
    let url = stay.maps_url;
    if (!url) {
      if (typeof stay.lat !== "number" || typeof stay.lon !== "number") return "";
      url = `https://www.google.com/maps/dir/?api=1&destination=${stay.lat},${stay.lon}`;
    }
    // An override like the car park's Plus Code may already carry a mode.
    if (mode && !/[?&]travelmode=/.test(url)) url += `&travelmode=${mode}`;
    return url;
  });

  // The two ends of a section, for framing a map that has no route to fit.
  eleventyConfig.addFilter("endsForMap", (places) =>
    (places || [])
      .filter((p) => p && typeof p.lat === "number" && typeof p.lon === "number")
      .map((p) => ({ name: p.name, lat: p.lat, lon: p.lon }))
  );

  eleventyConfig.addFilter("staysForMap", (stays) =>
    (stays || []).map((s) => ({
      slug: s.slug,
      name: s.name,
      type: badgeParts(s).colour,
      label: labelFor(s),
      badge: eleventyConfig.getFilter("locBadge")(s),
      lat: s.lat,
      lon: s.lon,
      url: s.url || "",
      directions: s.maps_url ||
        (typeof s.lat === "number" && typeof s.lon === "number"
          ? `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}`
          : ""),
      // An escape point is measured by how far into the day it is; somewhere
      // to sleep by how far it is from either end of it.
      where:
        s.kind === "escape"
          ? `${s.kmAlong} km along the route`
          : s.kind === "hospital" || s.kind === "vet"
            ? `${s.nearest} km from this section`
            : s.nearest != null
              ? `${s.nearest} km from the ${s.atEnd ? "finish" : "start"}`
              : `${s.toRoute} km off the path`,
      phone: s.phone || "",
    }))
  );

  // Previous/next section in walking order, for the stepper on a section page.
  eleventyConfig.addFilter("sectionNav", (sections, url) => {
    const list = [...(sections || [])].sort(
      (a, b) => (a.data.order || 0) - (b.data.order || 0)
    );
    // A crossing sits between two stages without being one, so it takes a
    // place in prev/next but not in the count: the path is still 52 sections.
    const stages = list.filter((s) => !s.data.crossing);
    const i = list.findIndex((s) => s.url === url);
    if (i === -1) return { prev: null, next: null, position: 0, total: stages.length };
    const brief = (s) =>
      s ? { url: s.url, title: s.data.title, number: s.data.crossing ? null : s.data.order } : null;
    return {
      prev: brief(list[i - 1]),
      next: brief(list[i + 1]),
      position: list[i].data.crossing ? null : stages.indexOf(list[i]) + 1,
      total: stages.length,
    };
  });

  eleventyConfig.addFilter("todo", (locations, transport, sections) =>
    todoList(locations, (transport || {}).routes, (transport || {}).providers, sections)
  );

  const byOrder = (a, b) => (a.data.order || 0) - (b.data.order || 0);

  // All sections, in walking order.
  eleventyConfig.addCollection("sections", (api) =>
    api.getFilteredByTag("section").sort(byOrder)
  );

  // Regions with their sections attached — the structure the pages iterate.
  eleventyConfig.addCollection("regionsWithSections", (api) => {
    const sections = api.getFilteredByTag("section").sort(byOrder);
    return [...regions]
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map((r) => ({
        ...r,
        sections: sections.filter((s) => s.data.region === r.slug),
      }));
  });

  return {
    pathPrefix: PATH_PREFIX,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
