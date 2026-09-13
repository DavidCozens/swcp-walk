import { HtmlBasePlugin } from "@11ty/eleventy";
import regions from "./src/_data/regions.js";
import { badge as stayBadge } from "./lib/stay-icons.js";

// The site is published to a GitHub Pages *project* page, so it lives under
// /swcp-walk/ rather than at the domain root. Everything internal must carry
// that prefix or it 404s once deployed.
const PATH_PREFIX = "/swcp-walk/";

export default function (eleventyConfig) {
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
    campsite: "Campsite",
    britstop: "Brit Stops",
    park4night: "park4night",
    cl: "CL / CS",
    bnb: "B&B",
    inn: "Inn",
    hostel: "Hostel",
  };
  eleventyConfig.addFilter("stayType", (t) => STAY_TYPES[t] || t || "");
  eleventyConfig.addFilter("stayBadge", (t) => stayBadge(t));

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
  eleventyConfig.addFilter("directions", (stay) => {
    if (!stay) return "";
    if (stay.maps_url) return stay.maps_url;
    if (typeof stay.lat !== "number" || typeof stay.lon !== "number") return "";
    return `https://www.google.com/maps/dir/?api=1&destination=${stay.lat},${stay.lon}`;
  });

  eleventyConfig.addFilter("staysForMap", (stays) =>
    (stays || []).map((s) => ({
      slug: s.slug,
      name: s.name,
      type: s.type,
      label: STAY_TYPES[s.type] || s.type,
      badge: stayBadge(s.type),
      lat: s.lat,
      lon: s.lon,
      url: s.url || "",
      directions: s.maps_url ||
        (typeof s.lat === "number" && typeof s.lon === "number"
          ? `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}`
          : ""),
      where: `${s.nearest} km from the ${s.atEnd ? "finish" : "start"}`,
    }))
  );

  // Previous/next section in walking order, for the stepper on a section page.
  eleventyConfig.addFilter("sectionNav", (sections, url) => {
    const list = [...(sections || [])].sort(
      (a, b) => (a.data.order || 0) - (b.data.order || 0)
    );
    const i = list.findIndex((s) => s.url === url);
    if (i === -1) return { prev: null, next: null, position: 0, total: list.length };
    const brief = (s) =>
      s ? { url: s.url, title: s.data.title, order: s.data.order } : null;
    return {
      prev: brief(list[i - 1]),
      next: brief(list[i + 1]),
      position: i + 1,
      total: list.length,
    };
  });

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
