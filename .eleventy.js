import regions from "./src/_data/regions.js";

export default function (eleventyConfig) {
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
