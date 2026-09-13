// Everything in this folder is a "section": it gets the section layout,
// joins the `sections` collection, and lives under /sections/<slug>/.
import { nearbyStays } from "../../lib/nearby.js";

export default {
  layout: "layouts/section.njk",
  tags: ["section"],
  permalink: "/sections/{{ page.fileSlug }}/",
  eleventyComputed: {
    // Places to stay aren't listed per section — they're points on the map,
    // and each section picks up whatever falls within the site's limits.
    stays: (data) => nearbyStays(data, data.accommodation, data.site.stays),
  },
};
