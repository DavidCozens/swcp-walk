// Water you can't walk across. Everything else on the site is found by
// straight-line distance, which is fine on a coast until the line crosses an
// estuary: Crow Point car park is 1 km from Instow Sands and a day's walk
// round by Barnstaple, and a campsite at Appledore is 900 m from Instow and a
// swim.
//
// Each estuary is drawn once, as its channel from the open sea up to the
// lowest bridge you can walk over, and no location counts as near a point
// whose straight line to it crosses one. Enter a river here and every section
// on either bank is corrected, the way a bus route is entered once.
//
//   slug, name
//   lines     one or more polylines of [lat, lon], downstream of the bridge.
//             A line must stop short of the bridge: `npm run validate` fails
//             if any plotted route crosses one, which is exactly what walking
//             over the bridge would look like if the line ran on past it.
//             A `crossing` section — a ferry — is the one route allowed to.
//   source    where the geometry came from
//
// Hospitals and vets aren't affected. They're chosen by "nearest few, however
// far", you'd drive to them, and a vet across the Torridge is still the
// nearest vet; only the drive time printed beside it understates.
export default [
  {
    slug: "taw-torridge",
    name: "Taw and Torridge estuary",
    // River centrelines from OSM waterway ways (Taw: 548992388, 1551009619,
    // 1551009621, 330343587, 330343586, 327779811; Torridge: 315576363),
    // simplified to 20 m. The Taw starts 40 m below Barnstaple's Taw Bridge
    // (A361, which has a footway), the Torridge 40 m below Bideford Long
    // Bridge: the A39 Torridge Bridge downstream has no footway. The last five
    // Taw points are drawn by hand from OSM's coastline, out between Crow Point
    // and Appledore and past Northam Burrows to the sea, where OSM's river
    // lines stop.
    source: "OpenStreetMap, 13 Sep 2026",
    lines: [
      // Taw, from Barnstaple to the sea
      [
      [51.08009, -4.07177], [51.07882, -4.08009], [51.07879, -4.08414],
      [51.08000, -4.08637], [51.08194, -4.08846], [51.08296, -4.08866],
      [51.08447, -4.08816], [51.08652, -4.09579], [51.08643, -4.09931],
      [51.08695, -4.10054], [51.08972, -4.10323], [51.09182, -4.10634],
      [51.09303, -4.11011], [51.09323, -4.11515], [51.09245, -4.11746],
      [51.09009, -4.11953], [51.08722, -4.11986], [51.08183, -4.11937],
      [51.08109, -4.11987], [51.08036, -4.12110], [51.08021, -4.12184],
      [51.08056, -4.12340], [51.07887, -4.12606], [51.07902, -4.13370],
      [51.07963, -4.13724], [51.08050, -4.13850], [51.08045, -4.14382],
      [51.08166, -4.14681], [51.08302, -4.15277], [51.08279, -4.15578],
      [51.08294, -4.15903], [51.08262, -4.16078], [51.08124, -4.16384],
      [51.07900, -4.16501], [51.07367, -4.17210], [51.07014, -4.17885],
      [51.06882, -4.18299], [51.06554, -4.18665], [51.06096, -4.18981],
      [51.06230, -4.19620], [51.06420, -4.20730], [51.06810, -4.21540],
      [51.07060, -4.22450], [51.07400, -4.24500],
      ],
      // Torridge, from Bideford to where it meets the Taw off Instow
      [
      [51.01690, -4.20352], [51.02030, -4.20246], [51.02364, -4.20061],
      [51.02555, -4.20038], [51.03176, -4.20119], [51.03446, -4.19991],
      [51.03758, -4.19559], [51.04102, -4.18980], [51.04553, -4.18507],
      [51.04871, -4.18377], [51.05146, -4.18450], [51.05355, -4.18653],
      [51.05682, -4.18715], [51.05966, -4.19032], [51.06096, -4.18981],
      ],
    ],
  },
  {
    slug: "neet",
    name: "River Neet, Bude",
    // OSM waterway way 4877226, simplified to 20 m, from 40 m below the path
    // bridge beside the canal's sea lock (way 5366275), the lowest crossing,
    // out across Summerleaze beach. Nanny Moore's Bridge, where the path
    // crosses, is 500 m upstream. The Bude Canal needs no line: its sea lock
    // gates are walkable at the mouth.
    source: "OpenStreetMap, 14 Sep 2026",
    lines: [
      [
      [50.82977, -4.55289], [50.83001, -4.55343], [50.83023, -4.55386],
      [50.83055, -4.55420], [50.83075, -4.55449], [50.83089, -4.55491],
      [50.83110, -4.55523], [50.83119, -4.55556], [50.83142, -4.55588],
      [50.83178, -4.55634], [50.83197, -4.55675], [50.83206, -4.55724],
      [50.83212, -4.55840],
      ],
    ],
  },
  {
    slug: "valency",
    name: "River Valency, Boscastle",
    // Centreline of Boscastle harbour between the two banks of OSM coastline
    // way 318356993, from 40 m below the footbridge at the head of the harbour
    // (way 83746412), the lowest crossing and the path's, out between the
    // breakwaters to open water. The road bridge is 250 m upstream.
    source: "OpenStreetMap, 14 Sep 2026",
    lines: [
      [
      [50.69062, -4.69575], [50.69075, -4.69615], [50.69113, -4.69708],
      [50.69157, -4.69778], [50.69196, -4.69843], [50.69209, -4.69906],
      [50.69188, -4.69987], [50.69160, -4.70156], [50.69200, -4.70300],
      ],
    ],
  },
  {
    slug: "camel",
    name: "Camel estuary",
    // Centreline between the two banks of the OSM coastline, which runs up
    // both sides of the estuary to Wadebridge (ways 188470087, 4835247,
    // 4835249, 4835251, 4835252, 278889816 on the Rock bank; 278889816,
    // 4835254, 907391060, 4835250, 146618238, 3327163, 262186882 on the
    // Padstow bank), simplified to 30 m. From 40 m below the Molesworth Street
    // bridge in Wadebridge, the lowest with a footway (the A39 viaduct below it
    // is foot=no), out past the Doom Bar between Stepper Point and Trebetherick
    // Point. Little Petherick Creek needs no line: the Camel Trail bridge
    // crosses its mouth. Section 14 crosses it by the Rock ferry.
    source: "OpenStreetMap, 14 Sep 2026",
    lines: [
      [
      [50.51748, -4.83571], [50.51855, -4.83658], [50.52186, -4.84100],
      [50.52567, -4.84780], [50.52991, -4.85284], [50.53200, -4.85919],
      [50.53160, -4.86551], [50.53240, -4.87667], [50.53233, -4.88546],
      [50.52882, -4.89616], [50.52844, -4.89892], [50.53001, -4.90503],
      [50.53227, -4.90789], [50.53325, -4.91021], [50.53414, -4.91655],
      [50.54105, -4.92972], [50.54632, -4.93058], [50.55068, -4.93215],
      [50.55491, -4.93375], [50.56239, -4.93929], [50.56603, -4.93815],
      [50.57000, -4.93900], [50.57800, -4.94500],
      ],
    ],
  },
];
