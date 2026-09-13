import { HtmlBasePlugin } from "@11ty/eleventy";
import regions from "./src/_data/regions.js";

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
