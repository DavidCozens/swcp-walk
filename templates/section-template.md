---
title: Start Place to End Place
order: 2
region: somerset-north-devon        # must match a slug in src/_data/regions.js
start: start-place                 # endpoint slug, lib/locations/endpoints.js
end: end-place
distance_km:                        # optional
ascent_m:                           # optional
mode:                              # optional: "van base", "backpack", "undecided"
gpx: /gpx/02-start-end.gpx          # optional until plotted; drop the file in src/gpx/
os_url:                             # optional; the OS Maps route link
transport:                        # optional; repeat the block per option
  - type: bus
    detail: "Operator / route — describe the link"
    season: ""                    # optional, e.g. "roughly May–October only"
    url: "https://www.travelinesw.com/"
escape_points:                    # optional; where you can bail out mid-section
  - name: Place or landmark
    km:                           # optional: how far along the route it sits
    detail: "How you get off the path here, and what's there"
shops:                            # optional
eat:                              # optional
---

Free-text notes go here. Terrain, the dog situation, where to camp or park,
anything worth remembering. This whole section is optional.
