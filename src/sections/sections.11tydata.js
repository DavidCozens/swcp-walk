// Everything in this folder is a "section": it gets the section layout,
// joins the `sections` collection, and lives under /sections/<slug>/.
import { nearbyByKind, lookup } from "../../lib/nearby.js";

export default {
  layout: "layouts/section.njk",
  tags: ["section"],
  permalink: "/sections/{{ page.fileSlug }}/",
  eleventyComputed: {
    // Nothing near a section is listed by hand — every location carries
    // coordinates, so the section works out what it passes.
    nearby: (data) => nearbyByKind(data, data.locations, data.site.nearby),
    // Everything that gets a pin. Built here rather than in the template:
    // Nunjucks `+` on two arrays concatenates them as strings.
    mapPins: (data) => {
      const near = nearbyByKind(data, data.locations, data.site.nearby);
      return [...near.stay, ...near.escape];
    },
    // start/end name a location by slug; resolve them for the page.
    startPlace: (data) => lookup(data.locations, data.start),
    endPlace: (data) => lookup(data.locations, data.end),
  },
};
