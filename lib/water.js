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
//             A `crossing` section — a ferry — may, and so may a section
//             that names the water in `crosses` (a ferry or tidal bridge
//             partway).
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
  {
    slug: "gannel",
    name: "Gannel estuary",
    // River centreline from OSM waterway way 550645331, simplified to 20 m,
    // from 65 m below the Crantock BR 13 bridleway bridge (way 106537674), the
    // lowest not tagged tidal, and the main line of OSM's stage relation. Below
    // it the Penpol footbridge (way 106536340) is tidal, passable about 3–4
    // hours either side of low water, and the Fern Pit ferry runs late May to
    // September, so neither makes the far bank near. Section 17 crosses by the
    // Penpol footbridge and names the Gannel in `crosses`. The last three
    // points are drawn by hand between the coastline of Pentire Point East (way
    // 188488190) and Crantock Beach (way 3374303), out past the headland,
    // where the river way stops.
    source: "OpenStreetMap, 14 Sep 2026",
    lines: [
      [
      [50.40591, -5.07942], [50.40551, -5.08031], [50.40460, -5.08066],
      [50.40418, -5.08179], [50.40402, -5.08273], [50.40432, -5.08517],
      [50.40400, -5.08791], [50.40484, -5.09015], [50.40657, -5.09214],
      [50.40624, -5.09435], [50.40765, -5.09404], [50.40798, -5.09686],
      [50.40755, -5.09814], [50.40851, -5.10271], [50.40822, -5.10587],
      [50.40967, -5.10999], [50.40899, -5.11202], [50.40820, -5.12000],
      [50.40780, -5.12450], [50.40800, -5.13000],
      ],
    ],
  },
  {
    slug: "hayle-estuary",
    name: "Hayle estuary",
    // River Hayle centreline from OSM waterway way 548551852, simplified to
    // 20 m, from 55 m below the Griggs Hill bridge at Griggs Quay (way
    // 110010771, which has a footway), the lowest you can walk over, past
    // Lelant Saltings to the harbour. The last five points are drawn by hand
    // down the channel between the Lelant bank (coastline way 148035628) and
    // Harvey's Towans (way 3374651) and out over the bar to open water.
    // Copperhouse and Carnsew Pools need no line: they're inside Hayle.
    source: "OpenStreetMap, 15 Sep 2026",
    lines: [
      [
      [50.17651, -5.43740], [50.18028, -5.43472], [50.18117, -5.43282],
      [50.18185, -5.43343], [50.18178, -5.43425], [50.18257, -5.43499],
      [50.18258, -5.43564], [50.18370, -5.43545], [50.18800, -5.43450],
      [50.19150, -5.43500], [50.19450, -5.43600], [50.19850, -5.43750],
      [50.20300, -5.43900],
      ],
    ],
  },
  {
    slug: "helford-river",
    name: "Helford river",
    // OSM tidal_channel way 865801873, "Helford River", simplified to 20 m,
    // from Gweek, below the bridges there (ways 25364438, 137363112), the lowest
    // crossing, down to Helford. From there the line is drawn by hand midway
    // between the two banks of OSM's coastline, past the ferry and Durgan and
    // out past Dennis Head to open water. Section 28.5 is the
    // Helford ferry across it.
    source: "OpenStreetMap, 16 Sep 2026",
    lines: [
      [
      [50.09429, -5.20655], [50.09240, -5.20463], [50.09120, -5.20400],
      [50.09093, -5.20333], [50.09113, -5.20147], [50.09092, -5.20061],
      [50.09035, -5.19970], [50.08918, -5.19915], [50.08924, -5.19627],
      [50.09015, -5.19386], [50.09032, -5.19244], [50.08895, -5.18936],
      [50.08761, -5.18840], [50.08735, -5.18779], [50.08798, -5.18617],
      [50.08903, -5.18473], [50.08988, -5.18016], [50.09005, -5.17821],
      [50.08947, -5.17509], [50.08983, -5.17291], [50.09110, -5.17095],
      [50.09263, -5.16617], [50.09281, -5.15936], [50.09533, -5.15376],
      [50.09623, -5.15068], [50.09655, -5.14838], [50.09840, -5.14000],
      [50.09780, -5.13500], [50.09720, -5.13000], [50.09770, -5.12500],
      [50.09830, -5.12000], [50.09920, -5.11500], [50.09880, -5.11000],
      [50.09790, -5.10500], [50.09620, -5.09500], [50.09450, -5.09000],
      [50.09600, -5.08000], [50.09800, -5.07000],
      ],
    ],
  },
  {
    slug: "fal",
    name: "Fal estuary and Carrick Roads",
    // River Fal centreline from OSM waterway ways 164904646 and 894664758,
    // simplified to 40 m, from the tidal Fal below Ruan Lanihorne down Carrick
    // Roads to the harbour mouth between Pendennis Point and St Anthony Head,
    // with one point added out to sea. It stops short of Tregony, the lowest
    // bridge, because no section passes near the river above there. The
    // Percuil river, between St Mawes and Place, is drawn by hand from the
    // mouth, between St Mawes and the shore the path follows from Place, up to
    // the boatyard at Percuil (OSM way 222800749), midway between the banks as
    // well as the map allows. Section 29.5, the St Mawes and Place ferries,
    // crosses both.
    source: "OpenStreetMap, 16 Sep 2026",
    lines: [
      [
      [50.24686, -4.95829], [50.24616, -4.95863], [50.24502, -4.96205],
      [50.24348, -4.96426], [50.24203, -4.96380], [50.24054, -4.96563],
      [50.23810, -4.96443], [50.23527, -4.96669], [50.23471, -4.96797],
      [50.23358, -4.96776], [50.23231, -4.97212], [50.23369, -4.97962],
      [50.23247, -4.98433], [50.23108, -4.98509], [50.22770, -4.98337],
      [50.22667, -4.98465], [50.22602, -4.99193], [50.22424, -4.99869],
      [50.22413, -5.00186], [50.22493, -5.00457], [50.22768, -5.00731],
      [50.22803, -5.01080], [50.22478, -5.01731], [50.22338, -5.02475],
      [50.22165, -5.02566], [50.20990, -5.02659], [50.20754, -5.03019],
      [50.20705, -5.03605], [50.20643, -5.03696], [50.19443, -5.04640],
      [50.19224, -5.04641], [50.19021, -5.04520], [50.18743, -5.03779],
      [50.18333, -5.03166], [50.17801, -5.02721], [50.17510, -5.02704],
      [50.16533, -5.03427], [50.15887, -5.03443], [50.14945, -5.02806],
      [50.14177, -5.02530], [50.13400, -5.03000],
      ],
      [
      [50.16740, -5.00100], [50.16200, -5.00400], [50.15800, -5.00800],
      [50.15550, -5.01150], [50.15450, -5.01600], [50.15400, -5.02100],
      [50.15100, -5.02650], [50.14800, -5.03000],
      ],
    ],
  },
  {
    slug: "fowey",
    name: "Fowey estuary",
    // River centreline from OSM waterway ways 165844646, 548719534–548719553,
    // simplified to 40 m, from 70 m below Lostwithiel Bridge (way 78066076),
    // the lowest you can walk over; the railway bridges below it carry no
    // path. The river way stops at Bodinnick, so the last six points are drawn
    // by hand down the harbour between Fowey and Polruan, through the middle
    // of the Bodinnick ferry (way 353767294) and the Polruan ferry (way
    // 30620876), and out between St Catherine's Castle and Punches Cross.
    // Section 33 crosses it by the Polruan ferry.
    source: "OpenStreetMap, 15 Sep 2026",
    lines: [
      [
      [50.40692, -4.66711], [50.40527, -4.66908], [50.40417, -4.66811],
      [50.40191, -4.66800], [50.40102, -4.66874], [50.39961, -4.66697],
      [50.39916, -4.66488], [50.39836, -4.66533], [50.39803, -4.66341],
      [50.39723, -4.66430], [50.39606, -4.66225], [50.38905, -4.66178],
      [50.38583, -4.65938], [50.38301, -4.65410], [50.37954, -4.65477],
      [50.37619, -4.64332], [50.36899, -4.63522], [50.36564, -4.63440],
      [50.36474, -4.63579], [50.36478, -4.63757], [50.36278, -4.63832],
      [50.35914, -4.63669], [50.35483, -4.63749], [50.35083, -4.63594],
      [50.34746, -4.63705], [50.34648, -4.63598], [50.34570, -4.63169],
      [50.34407, -4.63024], [50.34010, -4.63190], [50.33600, -4.63400],
      [50.33130, -4.63620], [50.32850, -4.63900], [50.32620, -4.64150],
      [50.32000, -4.64250],
      ],
    ],
  },
  {
    slug: "tamar",
    name: "Tamar and Plymouth Sound",
    // River centreline from OSM waterway way 267626600, from 80 m below the
    // south cantilever footway of the Tamar Bridge (way 187533272), the lowest
    // you can walk over; the Royal Albert Bridge beside it carries only the
    // railway. The river way stops below Saltash, so the rest is drawn by hand
    // down the Hamoaze past the Torpoint ferry, through the narrows between
    // Cremyll and Devil's Point, and out through Plymouth Sound west of Drake's
    // Island to open water, checked against OSM's coastline so that it crosses
    // no land. The Torpoint and Cremyll ferries cross it; section 35.5 is the
    // Cremyll ferry. St John's Lake and the Lynher are on the Cornish side and
    // need no line of their own.
    source: "OpenStreetMap, 16 Sep 2026",
    lines: [
      [
      [50.40735, -4.20355], [50.40510, -4.20450], [50.40222, -4.20656],
      [50.40003, -4.20802], [50.39812, -4.20848], [50.39682, -4.20817],
      [50.39420, -4.20652], [50.39000, -4.20000], [50.38500, -4.19700],
      [50.38100, -4.19200], [50.37700, -4.18900], [50.37300, -4.18800],
      [50.36900, -4.18750], [50.36600, -4.18650], [50.36350, -4.18000],
      [50.36050, -4.17100], [50.35700, -4.16650], [50.35300, -4.16200],
      [50.34500, -4.16000], [50.33500, -4.16400], [50.32500, -4.17000],
      [50.31500, -4.17200],
      ],
    ],
  },
  {
    slug: "plym",
    name: "Plym and the Cattewater",
    // River centreline from OSM waterway way 334041064, simplified to 40 m,
    // from 60 m below Laira Bridge, where the Old Laira Bridge (way 32434358)
    // carries a foot and cycle path — the lowest crossing, and the path's. The
    // river way stops in the Cattewater, so the last five points are drawn by
    // hand down the middle of the harbour, past the Mount Batten ferry (way
    // 126500824), out between Mount Batten breakwater and Fisher's Nose and
    // into Plymouth Sound, checked against OSM's coastline. Section 36 walks
    // round by Laira Bridge; the Barbican is 1 km from Mount Batten across the
    // water and 13 km round it.
    source: "OpenStreetMap, 17 Sep 2026",
    lines: [
      [
      [50.36713, -4.10907], [50.36280, -4.11139], [50.36071, -4.11791],
      [50.36110, -4.12417], [50.36234, -4.12960], [50.36050, -4.13600],
      [50.35800, -4.13650], [50.35000, -4.13700], [50.34000, -4.13800],
      [50.33200, -4.13900],
      ],
    ],
  },
  {
    slug: "erme",
    name: "River Erme",
    // River centreline from OSM waterway ways 264752207, 264752206, 96945199,
    // 264752205 and 1072362334, simplified to 40 m, from 40 m below Sequer's
    // Bridge on the A379, the lowest crossing; the last point is drawn by hand
    // out past the mouth. Below the bridge there is no crossing at all: section
    // 37 wades the mouth at low water and names the Erme in `crosses`, and the
    // way round by road is about 13 km. The line clips a 20 m stub of quay
    // mapped as coastline at Bowcombe.
    source: "OpenStreetMap, 17 Sep 2026",
    lines: [
      [
      [50.35044, -3.92438], [50.34875, -3.92462], [50.34845, -3.92594],
      [50.34708, -3.92492], [50.34600, -3.92613], [50.34454, -3.92619],
      [50.34437, -3.92708], [50.34348, -3.92640], [50.34220, -3.92755],
      [50.34006, -3.92621], [50.33680, -3.92698], [50.33446, -3.92890],
      [50.33229, -3.93220], [50.32551, -3.93815], [50.32148, -3.93616],
      [50.31973, -3.93678], [50.31835, -3.93930], [50.31716, -3.93998],
      [50.31504, -3.93957], [50.31161, -3.94213], [50.31107, -3.94616],
      [50.30876, -3.94702], [50.30717, -3.94948], [50.30400, -3.95300],
      ],
    ],
  },
  {
    slug: "yealm",
    name: "River Yealm",
    // River centreline from OSM waterway ways 264897580, 97011319, 264799840,
    // 264885470, 264799839 and 264815291, simplified to 40 m, from 40 m below
    // Puslinch Bridge near Yealmpton, the lowest crossing. It ends at the
    // river way's last node, on the shoreline at the mouth between Warren
    // Point and the Noss Mayo bank: the banks close in there, and every line
    // drawn on past them clipped the coastline or a route. Crossing 36.5 is
    // the Yealm ferry across it; out of season it is a long way round by road.
    source: "OpenStreetMap, 17 Sep 2026",
    lines: [
      [
      [50.34144, -4.01034], [50.34244, -4.01307], [50.34148, -4.01515],
      [50.34147, -4.02158], [50.33874, -4.02955], [50.33659, -4.03084],
      [50.33613, -4.03283], [50.33440, -4.03437], [50.33456, -4.03936],
      [50.33298, -4.04266], [50.32667, -4.04683], [50.32224, -4.04859],
      [50.31792, -4.05429], [50.31404, -4.05383], [50.31261, -4.05219],
      [50.31066, -4.05347],
      ],
    ],
  },
  {
    slug: "avon",
    name: "River Avon (Devon)",
    // River centreline from OSM waterway ways 263816471, 264452972 and
    // 263779116, simplified to 40 m, from 40 m below Aveton Gifford Bridge on
    // the A379, the lowest crossing; the tidal road below it floods. The way
    // ends at the mouth by Bantham, and every line drawn on past it clipped the
    // coastline, so it stops there. Section 38 crosses by the Bantham ferry and
    // names the Avon in `crosses`; out of season it is a long way round by
    // Aveton Gifford.
    source: "OpenStreetMap, 17 Sep 2026",
    lines: [
      [
      [50.30863, -3.83534], [50.30827, -3.83881], [50.30908, -3.84084],
      [50.30886, -3.84302], [50.30460, -3.85063], [50.30035, -3.85379],
      [50.29831, -3.86168], [50.29315, -3.86103], [50.29073, -3.85910],
      [50.28948, -3.85980], [50.28664, -3.86677], [50.28265, -3.86820],
      [50.27909, -3.87087], [50.28000, -3.87569], [50.28141, -3.87682],
      ],
    ],
  },
  {
    slug: "salcombe-estuary",
    name: "Salcombe (Kingsbridge) estuary",
    // A ria with no river: OSM maps the upper estuary as a water polygon (way
    // 423587523) and the mouth as coastline, so the line is the midpoint
    // between the two banks at each latitude, from the head of the water at
    // Kingsbridge — where the road round it is the only way over — down through
    // the ferry narrows and out past Splat Point and Limebury Point. Crossing
    // 38.5 is the Salcombe ferry across it; without the line the 164's
    // Salcombe stops counted as 220 m from East Portlemouth, across 400 m of
    // water. It clips one stub of quay mapped as coastline by the ferry steps.
    source: "OpenStreetMap, 17 Sep 2026",
    lines: [
      [
      [50.28100, -3.77530], [50.27900, -3.77576], [50.27500, -3.77251],
      [50.27100, -3.76732], [50.26700, -3.76538], [50.26300, -3.77335],
      [50.25900, -3.76519], [50.25300, -3.77265], [50.24500, -3.77000],
      [50.24000, -3.76800], [50.23562, -3.76502], [50.23400, -3.76600],
      [50.23300, -3.76860], [50.23100, -3.77120], [50.22900, -3.77380],
      [50.22700, -3.77570], [50.22500, -3.77720], [50.22000, -3.78000],
      ],
    ],
  },
  {
    slug: "dart",
    name: "River Dart",
    // River centreline from OSM waterway ways 171567435, 97144121, 262860154,
    // 263020931, 263048044, 262862694, 262862693 and 1055807324, simplified to
    // 40 m, from 40 m below Brutus Bridge at Totnes — the lowest crossing, and
    // the only one: below it there is nothing but the ferries. The way runs to
    // the mouth between Kingswear and Dartmouth Castle; two points carry it on
    // past the castles into open water, so the Dartmouth bank doesn't count as
    // near the Kingswear shore. Crossing 40.5 is the Lower Ferry; the Higher Ferry and the
    // passenger ferry cross the same water a little upstream.
    source: "OpenStreetMap, 17 Sep 2026",
    lines: [
      [
      [50.43263, -3.68092], [50.42778, -3.68207], [50.42590, -3.68022],
      [50.42346, -3.67695], [50.41995, -3.67023], [50.41667, -3.66607],
      [50.41445, -3.66019], [50.41343, -3.65929], [50.41136, -3.65939],
      [50.41080, -3.65610], [50.41211, -3.65018], [50.41179, -3.64412],
      [50.41035, -3.64252], [50.40906, -3.64283], [50.40632, -3.64880],
      [50.40461, -3.64644], [50.40446, -3.64091], [50.40651, -3.63616],
      [50.40565, -3.63282], [50.40352, -3.63198], [50.40094, -3.63540],
      [50.39963, -3.63563], [50.39862, -3.63433], [50.39592, -3.62170],
      [50.39476, -3.61819], [50.39151, -3.61311], [50.39054, -3.60950],
      [50.39059, -3.60509], [50.39246, -3.60164], [50.39318, -3.59835],
      [50.39323, -3.59412], [50.39245, -3.59033], [50.39057, -3.58886],
      [50.38711, -3.58861], [50.38360, -3.59247], [50.38089, -3.59292],
      [50.37953, -3.58745], [50.37467, -3.58042], [50.37228, -3.57886],
      [50.36419, -3.57981], [50.36141, -3.57818], [50.35776, -3.57451],
      [50.34711, -3.57507], [50.34569, -3.57301], [50.34422, -3.56609],
      [50.34217, -3.56362], [50.34000, -3.55900], [50.33600, -3.55300],
      ],
    ],
  },
  {
    slug: "exe",
    name: "River Exe",
    // River centreline from OSM waterway ways 161285569, 161285568, 391453623,
    // 161156499, 258753492 and 185886637, simplified to 50 m, from below the
    // Countess Wear bridges at the bottom of Exeter — the lowest crossing, and
    // a long way up: there is nothing below it but the Starcross ferry. The
    // river way stops at the mouth, so three points carry it out between
    // Exmouth and the Warren spit. Crossing 43.5 is the ferry across it;
    // Exmouth is 2 km from Starcross over the water and about 25 km round.
    source: "OpenStreetMap, 17 Sep 2026",
    lines: [
      [
      [50.69193, -3.48815], [50.69007, -3.48586], [50.69042, -3.48105],
      [50.68989, -3.47887], [50.68684, -3.47306], [50.68422, -3.47285],
      [50.68281, -3.46834], [50.68107, -3.46599], [50.67679, -3.46476],
      [50.67267, -3.46016], [50.66971, -3.45938], [50.66778, -3.46015],
      [50.66352, -3.46504], [50.66081, -3.46440], [50.65913, -3.46063],
      [50.65730, -3.44953], [50.65418, -3.44326], [50.64999, -3.44258],
      [50.64801, -3.44692], [50.64317, -3.44875], [50.63620, -3.44501],
      [50.62840, -3.43738], [50.62546, -3.43582], [50.62374, -3.43562],
      [50.62027, -3.43959], [50.61829, -3.44049], [50.61445, -3.43908],
      [50.61282, -3.43717], [50.61180, -3.43307], [50.61512, -3.42635],
      [50.61504, -3.42247], [50.61000, -3.42400], [50.60600, -3.42700],
      [50.60000, -3.42600],
      ],
    ],
  },
];
