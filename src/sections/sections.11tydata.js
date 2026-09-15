// Everything in this folder is a "section": it gets the section layout,
// joins the `sections` collection, and lives under /sections/<slug>/.
import { nearbyByKind, lookup, samplePoints } from "../../lib/nearby.js";
import { routesForSection, transitUrl, transfersForSection } from "../../lib/transport.js";

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
      // Everything gets a pin. Hospitals far off don't widen the view: the
      // map fits the route's bounds, never the markers.
      return [...near.stay, ...near.escape, ...near.poi, ...near.food,
              ...near.shop, ...near.hospital, ...near.vet];
    },
    // Shipped in the sections feed so a browser can work out which section
    // it's nearest to.
    samplePoints: (data) => samplePoints(data.gpx),
    // start/end name a location by slug; resolve them for the page.
    startPlace: (data) => lookup(data.locations, data.start),
    endPlace: (data) => lookup(data.locations, data.end),
    // Services useful on this section, derived from where they call.
    services: (data) =>
      routesForSection({
        start: lookup(data.locations, data.start),
        end: lookup(data.locations, data.end),
        nearby: nearbyByKind(data, data.locations, data.site.nearby),
        transport: data.transport,
        locations: data.locations,
        walk: data.site.walk,
        crossing: data.crossing,
      }),
    // Whether anything reaches both ends within the usual walking reach. If
    // nothing does, a longer walk isn't a compromise — it's the only way, and
    // shouldn't be presented apologetically. (Computed here: Nunjucks `set`
    // inside a for-loop doesn't escape the loop.)
    anyServiceLinksEnds: (data) =>
      routesForSection({
        start: lookup(data.locations, data.start),
        end: lookup(data.locations, data.end),
        nearby: nearbyByKind(data, data.locations, data.site.nearby),
        transport: data.transport,
        locations: data.locations,
        walk: data.site.walk,
        crossing: data.crossing,
      }).some((r) => r.linksEnds),
    // Taxis and luggage firms that reach this section.
    transfers: (data) =>
      transfersForSection({
        start: lookup(data.locations, data.start),
        end: lookup(data.locations, data.end),
        transport: data.transport,
      }),
    // One link covering every public transport option between the two ends.
    transitLink: (data) =>
      transitUrl(lookup(data.locations, data.start), lookup(data.locations, data.end)),
  },
};
