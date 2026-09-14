// Places you can leave the path mid-section. Positions are real coordinates,
// so how far along a route each one falls is computed rather than typed —
// County Gate was recorded by hand as 11.4 km along section 2 and is actually
// 8.8 km, which is the kind of error a number nobody can check tends to keep.
export default [
  {
    slug: "county-gate",
    name: "County Gate",
    kind: "escape",
    lat: 51.22410, lon: -3.72954,
    address: "A39, Devon/Somerset border",
    escape: {
      detail: "Climb inland to the A39. Car park, visitor centre and a bus stop — not a village, and nothing here out of season",
    },
    verified: null,
  },
  {
    slug: "countisbury",
    name: "Countisbury",
    kind: "escape",
    lat: 51.23198, lon: -3.79578,
    address: "A39, Countisbury, EX35 6NE",
    escape: {
      detail: "The path passes the hamlet. Pub just off-route and the A39",
    },
    verified: null,
  },
  {
    slug: "lee-bay",
    name: "Lee Bay",
    kind: "escape",
    lat: 51.22657, lon: -3.87041,
    address: "Lee Abbey, Lynton, EX35 6JJ",
    escape: {
      detail: "The path meets the lane back to Lynton through the Valley of Rocks. Lee Abbey's car park (a charge) and toilets",
    },
    verified: null,
  },
  {
    slug: "woody-bay",
    name: "Woody Bay",
    kind: "escape",
    lat: 51.22145, lon: -3.89809,
    escape: {
      detail: "National Trust car park, free, on the lane inland to Martinhoe. Nothing else here",
    },
    verified: null,
  },
  {
    slug: "heddon-valley",
    name: "Heddon Valley",
    kind: "escape",
    lat: 51.21558, lon: -3.92700,
    address: "Heddon Valley, Parracombe, EX31 4PY",
    escape: {
      detail: "Down the valley inland to the Hunter's Inn, a small National Trust shop and pay car parks",
    },
    verified: null,
  },
  {
    slug: "trentishoe-lane",
    name: "Trentishoe Lane car park",
    kind: "escape",
    lat: 51.21492, lon: -3.95585,
    escape: {
      detail: "A small free roadside car park where the path meets the lane over the down. No services — a place to be picked up, not a way out on foot",
    },
    verified: null,
  },
  {
    // OSM node 4365510799, NaPTAN 1100DEA10810 "Garage (Stop C)"
    slug: "ilfracombe",
    name: "Ilfracombe",
    kind: "escape",
    lat: 51.20714, lon: -4.12494,
    address: "High Street, Ilfracombe, EX34 9FB",
    escape: {
      detail: "The town's bus stop is the High Street garage, 300 m inland of the path: the 301 to Combe Martin and Barnstaple, the 31 to Woolacombe, and the 300 coast bus in summer. Buses back from Woolacombe set down at Wilder Road car park, 200 m away",
    },
    verified: "2026-09-13",
  },
  {
    // OSM node 10221446652, NaPTAN 1100DEA10997 "Lee Sea Wall"
    slug: "lee-ilfracombe",
    name: "Lee",
    kind: "escape",
    lat: 51.19724, lon: -4.17755,
    address: "Lee, Ilfracombe, EX34 8LR",
    escape: {
      detail: "The path drops to the sea wall at Lee Bay. The only bus is a Tuesday and Friday service to Ilfracombe; otherwise it's a pick-up point",
    },
    verified: null,
  },
  {
    // OSM node 6769712454, NaPTAN 1100DEA11010 "Mortehoe Post Office"
    slug: "mortehoe",
    name: "Mortehoe",
    kind: "escape",
    lat: 51.18553, lon: -4.20776,
    address: "Station Road, Mortehoe, EX34 7DR",
    escape: {
      detail: "The village is just inland after Morte Point. Buses from the post office: the 31 to Ilfracombe on some journeys, and the 303 to Braunton and Barnstaple",
    },
    verified: "2026-09-13",
  },
  {
    // Centre of OSM way 55983271, the beach car park.
    slug: "putsborough",
    name: "Putsborough",
    kind: "escape",
    lat: 51.14484, lon: -4.22086,
    address: "Putsborough, Georgeham, EX33 1LB",
    escape: {
      detail: "Beach car park and café at the south end of Woolacombe Sands. No bus here; some 21C journeys reach Georgeham, 2 km inland",
    },
    verified: null,
  },
  {
    // OSM node 542275276, NaPTAN 1100DEA11032 "Ruda Holiday Park"
    slug: "croyde-bay",
    name: "Croyde Bay",
    kind: "escape",
    lat: 51.13421, lon: -4.23633,
    address: "Moor Lane, Croyde Bay",
    escape: {
      detail: "The path passes Ruda Holiday Park at the back of the beach. The 21C to Braunton from the stop at its entrance, about hourly Mon–Sat and on summer Sundays. The village is 800 m inland",
    },
    verified: "2026-09-13",
  },
  {
    // NaPTAN 1100DEA11045 "Saunton Sands"; no OSM node
    slug: "saunton-sands",
    name: "Saunton Sands",
    kind: "escape",
    lat: 51.11782, lon: -4.21628,
    address: "Saunton Road (B3231), Saunton",
    escape: {
      detail: "The beach car park, with a café and shop, below the coast road. The 21C to Braunton from the beach turning",
    },
    verified: "2026-09-13",
  },
  {
    // Centre of OSM way 165500149.
    slug: "sandy-lane-car-park",
    name: "Sandy Lane car park",
    kind: "escape",
    lat: 51.09349, lon: -4.19591,
    address: "Sandy Lane, Braunton Burrows, EX33 2NX",
    escape: {
      detail: "Braunton Burrows' pay car park, with a kiosk. No bus; a place to be picked up. Braunton is 2.5 km away in a straight line",
    },
    verified: null,
  },
  {
    // Centre of OSM way 187046292.
    slug: "crow-point-car-park",
    name: "Crow Point car park",
    kind: "escape",
    lat: 51.07507, lon: -4.18721,
    escape: {
      detail: "At the end of the private toll road, where the path reaches the estuary. No services and no bus; a place to be picked up",
    },
    verified: null,
  },
  {
    // OSM node 891576167, NaPTAN 1100DEA10936 "Camp Gates".
    slug: "chivenor",
    name: "Chivenor (Camp Gates)",
    kind: "escape",
    lat: 51.09354, lon: -4.13683,
    address: "Chivenor",
    escape: {
      detail: "Bus stop beside the Tarka Trail at the camp gates. The 21B every 30 minutes Mon–Sat and hourly on Sundays to Braunton and Barnstaple; the 21C about hourly. Spar by the roundabout",
    },
    verified: "2026-09-13",
  },
  {
    // OSM node 6900362324 (railway=station, NaPTAN 9100BRNSTPL).
    slug: "barnstaple-station",
    name: "Barnstaple station",
    kind: "escape",
    lat: 51.07361, lon: -4.06302,
    address: "Station Road, Barnstaple, EX31 2AU",
    escape: {
      detail: "Just south of the Long Bridge, 400 m off the path. Trains on the Tarka Line to Exeter; taxi rank. Buses outside: the 21 and 21A to Fremington and Instow, the 21B to Braunton. Barnstaple bus station is across the bridge",
    },
    verified: "2026-09-13",
  },
  {
    // Centre of OSM way 78675081, tagged fee=no.
    slug: "fremington-quay-car-park",
    name: "Fremington Quay car park",
    kind: "escape",
    lat: 51.08123, lon: -4.11837,
    address: "Fremington Quay, EX31 3AR",
    escape: {
      detail: "Car park by the café, beside the Tarka Trail. Buses from the New Inn stop in Fremington village, 900 m up the lane",
    },
    verified: null,
  },
  {
    // Bideford Quay Stop B, OSM node 12492120059.
    slug: "bideford-quay-escape",
    name: "Bideford Quay",
    kind: "escape",
    lat: 51.01912, lon: -4.20414,
    address: "The Quay, Bideford",
    escape: {
      detail: "On the path, just north of the Long Bridge. The 21 and 21A back to Instow every 15–20 minutes Mon–Sat, half-hourly on Sundays; the 21 on to Westward Ho!. Taxi firms in the town",
    },
    verified: "2026-09-13",
  },
  {
    // Appledore end of OSM ferry way 165326919, as the appledore stop.
    slug: "appledore-quay",
    name: "Appledore Quay",
    kind: "escape",
    lat: 51.05251, lon: -4.19058,
    address: "The Quay, Appledore",
    escape: {
      detail: "On the path. The ferry straight back across to Instow, April to October, around high tide only. Otherwise the 21A from the Seagate Hotel stop to Bideford and Instow",
    },
    verified: "2026-09-13",
  },
  {
    // Horns Cross, OSM place node 1149862971.
    slug: "horns-cross-escape",
    name: "Peppercombe to Horns Cross",
    kind: "escape",
    lat: 50.98488, lon: -4.30196,
    address: "A39, Horns Cross, EX39 5DH",
    escape: {
      detail: "Up the Peppercombe valley path to the A39 at Horns Cross: the Coach and Horses, the Hoops Inn along the road, and the 319 to Bideford or Clovelly, Mon–Sat",
    },
    verified: null,
  },
  {
    // Bucks Mills Car Park, centre of OSM way 81175824.
    slug: "bucks-mills-escape",
    name: "Bucks Mills",
    kind: "escape",
    lat: 50.98510, lon: -4.34086,
    address: "Bucks Mills, EX39 5DY",
    escape: {
      detail: "The lane up through the hamlet to the A39 at Bucks Cross, for the 319 and the post office shop. A small free car park at the top of the hamlet takes cars only; bollards keep vans out",
    },
    verified: null,
  },
  {
    // National Trust car park, centre of OSM way 100712075.
    slug: "brownsham",
    name: "Brownsham",
    kind: "escape",
    lat: 51.00772, lon: -4.44470,
    address: "Lower Brownsham, Hartland, EX39 6AN",
    escape: {
      detail: "Woodland paths inland from Mouth Mill or Windbury Head to the National Trust's free car park, beside Lower Brownsham Farm tea room. Somewhere to be collected; no bus nearer than the Hartland road",
    },
    verified: null,
  },
  {
    // Centre of OSM way 56132433.
    slug: "hartland-point-car-park",
    name: "Hartland Point car park",
    kind: "escape",
    lat: 51.01948, lon: -4.51830,
    address: "Hartland Point, EX39 6AU",
    escape: {
      detail: "On the path, by the kiosk: a pay car park at the end of the lane from Hartland, and somewhere to be collected. Hartland, for the 319 and 219, is nearly 4 km inland",
    },
    verified: null,
  },
  {
    // Car park, centre of OSM way 75897184.
    slug: "welcombe-mouth",
    name: "Welcombe Mouth",
    kind: "escape",
    lat: 50.93358, lon: -4.54460,
    address: "Welcombe Mouth",
    escape: {
      detail: "On the path. A small free car park at the end of a rough track from Welcombe, somewhere to be collected. No bus",
    },
    verified: null,
  },
  {
    // The Rectory Tearooms, centre of OSM way 114712255.
    slug: "morwenstow-escape",
    name: "Morwenstow",
    kind: "escape",
    lat: 50.90849, lon: -4.55379,
    address: "Crosstown, Morwenstow, EX23 9SR",
    escape: {
      detail: "Up the combe past the church to Crosstown: the Rectory Tearooms, the Bush Inn and a lane out to the A39. The 217 to Bude from Crosstown, 280 m past the tearooms, three a day on weekdays",
    },
    verified: null,
  },
  {
    // National Trust car park, centre of OSM way 79137088.
    slug: "duckpool",
    name: "Duckpool",
    kind: "escape",
    lat: 50.87654, lon: -4.55745,
    address: "Duckpool, Coombe",
    escape: {
      detail: "On the path. National Trust car park at the end of a single-track lane through Coombe, £2 by honesty box. The 217 to Bude from Coombe, 700 m up the lane, three a day on weekdays",
    },
    verified: null,
  },
  {
    // National Trust car park, centre of OSM way 146004774.
    slug: "sandymouth",
    name: "Sandymouth",
    kind: "escape",
    lat: 50.86179, lon: -4.55284,
    address: "Sandymouth, near Bude",
    escape: {
      detail: "On the path, by the café. National Trust pay car park, coins or phone, though mobile signal is poor",
    },
    verified: null,
  },
  {
    // National Trust car park, centre of OSM way 146844868.
    slug: "northcott-mouth",
    name: "Northcott Mouth",
    kind: "escape",
    lat: 50.84735, lon: -4.55261,
    address: "Northcott Mouth, near Bude",
    escape: {
      detail: "On the path. Free National Trust car park up the lane from the beach, on a road into Bude",
    },
    verified: null,
  },
  {
    // Cornwall Council pay car park, centre of OSM way 174306137.
    slug: "widemouth-bay",
    name: "Widemouth Bay",
    kind: "escape",
    lat: 50.79324, lon: -4.55620,
    address: "Marine Drive, Widemouth Bay, Bude",
    escape: {
      detail: "On the path. Council pay car park behind the beach, cafés and pubs, and Marine Drive back along the coast to Bude",
    },
    verified: null,
  },
  {
    // OSM node 33795977, the hamlet.
    slug: "millook",
    name: "Millook",
    kind: "escape",
    lat: 50.77104, lon: -4.57561,
    address: "Millook, near Poundstock",
    escape: {
      detail: "On the path, which follows the lane down through the hamlet. Single-track, 30% in places, little room to park and no bus. The free car park on the cliff road, 700 m back towards Widemouth, is easier for a pick-up",
    },
    verified: null,
  },
  {
    // Nearest point of OSM way 159535384, the lane to Dizzard, to the route.
    slug: "dizzard",
    name: "Dizzard",
    kind: "escape",
    lat: 50.75978, lon: -4.60195,
    address: "Dizzard, St Gennys",
    escape: {
      detail: "50 m inland of the path past Dizzard Point: a lane through the hamlet towards the A39. No parking and no bus",
    },
    verified: null,
  },
  {
    // Free car park, centre of OSM way 236009812.
    slug: "the-strangles",
    name: "The Strangles",
    kind: "escape",
    lat: 50.72527, lon: -4.64417,
    address: "Trevigue, near Crackington Haven",
    escape: {
      detail: "200 m inland of the path above The Strangles: a free car park on the lane from Crackington Haven. No bus",
    },
    verified: null,
  },
  {
    // Nearest point of OSM way 127039870, the lane to Beeny, to the route.
    slug: "beeny",
    name: "Beeny",
    kind: "escape",
    lat: 50.70315, lon: -4.66717,
    address: "Beeny, near Boscastle",
    escape: {
      detail: "230 m inland of the path: lanes through the hamlet to Boscastle and the B3263. No parking and no bus",
    },
    verified: null,
  },
  {
    // The National Trust visitor centre, OSM node 975402858.
    slug: "boscastle",
    name: "Boscastle",
    kind: "escape",
    lat: 50.69049, lon: -4.69445,
    address: "The Harbour, Boscastle",
    escape: {
      detail: "On the path at the head of the harbour: cafés, pubs, a shop, a pay car park, and the 95: Boscastle Bridge, 130 m up the road, towards Crackington; Car Park, a little further up Penally Hill, towards Tintagel",
    },
    verified: null,
  },
  {
    // OSM node 682267945, the Trethevy bus shelter (NaPTAN 0800COA10022).
    slug: "rocky-valley",
    name: "Rocky Valley",
    kind: "escape",
    lat: 50.67110, lon: -4.72376,
    address: "Trethevy, near Tintagel",
    escape: {
      detail: "Up Rocky Valley past the ruined mill to the B3263 at Trethevy, 400 m from the path. Bus shelter on the main road; the St Nectan's Glen car park is for its customers",
    },
    verified: null,
  },
  {
    // Bossiney Cove Parking, OSM node 4935264256.
    slug: "bossiney",
    name: "Bossiney",
    kind: "escape",
    lat: 50.66828, lon: -4.73640,
    address: "Bossiney, near Tintagel",
    escape: {
      detail: "Up the lane from Bossiney Haven to the B3263, where every 95 stops by the car park. A field car park near the top, April–October: £3 for the day, out by 7pm, or campervans overnight",
    },
    verified: null,
  },
  {
    // Cornwall Council car park, centre of OSM way 142438917.
    slug: "trebarwith-strand",
    name: "Trebarwith Strand",
    kind: "escape",
    lat: 50.64485, lon: -4.75513,
    address: "Trebarwith Strand, Tintagel",
    escape: {
      detail: "On the path at the foot of the valley: café, pub, toilets, and a council pay car park up the lane. The road climbs out of the valley towards Tintagel",
    },
    verified: null,
  },
  {
    // The lane end at Tregardock, OSM way 1047516331.
    slug: "tregardock",
    name: "Tregardock",
    kind: "escape",
    lat: 50.62194, lon: -4.76310,
    address: "Tregardock, near Treligga",
    escape: {
      detail: "A public footpath from the path above Tregardock beach climbs 400 m to the lane end at Tregardock, then lanes to Treligga and Delabole. No parking; the nearest bus is at Delabole Westdowns Road, about 2 km by the lanes. The only way off between Trebarwith Strand and Port Gaverne",
    },
    verified: null,
  },
  {
    // OSM node 9676602084, the hamlet.
    slug: "port-gaverne",
    name: "Port Gaverne",
    kind: "escape",
    lat: 50.59266, lon: -4.82269,
    address: "Port Gaverne, Port Isaac",
    escape: {
      detail: "On the path at the head of the cove, with The Port Gaverne pub and the road up to Port Isaac's New Road car park",
    },
    verified: null,
  },
  {
    // National Trust car park, centre of OSM way 217682492.
    slug: "port-quin",
    name: "Port Quin",
    kind: "escape",
    lat: 50.58889, lon: -4.86684,
    address: "Port Quin, near Port Isaac",
    escape: {
      detail: "On the path at the head of the inlet: a National Trust pay car park and a lane inland. No bus",
    },
    verified: null,
  },
  {
    // National Trust Lead Mines car park, OSM node 763624601.
    slug: "pentire-lead-mines",
    name: "Pentire (Lead Mines car park)",
    kind: "escape",
    lat: 50.58323, lon: -4.91005,
    address: "Pentireglaze, near Polzeath",
    escape: {
      detail: "150 m inland of the path above Pentireglaze Haven: a small National Trust car park, and the main one with the Pentyr café 250 m on.",
    },
    verified: null,
  },
  {
    // OSM node 1595260024, the village.
    slug: "polzeath",
    name: "Polzeath",
    kind: "escape",
    lat: 50.57284, lon: -4.91490,
    address: "Polzeath",
    escape: {
      detail: "On the path behind the beach: cafés, a pub, a shop, pay car parks and bus stops by the beach",
    },
    verified: null,
  },
  {
    // Daymer Bay Car Park, centre of OSM way 420403187.
    slug: "daymer-bay",
    name: "Daymer Bay",
    kind: "escape",
    lat: 50.56219, lon: -4.92578,
    address: "Daymer Bay, Trebetherick",
    escape: {
      detail: "On the path: a private pay car park open 6am–10pm, with a beach shop and toilets. A lane inland to Trebetherick",
    },
    verified: null,
  },
  {
    // Rock end of OSM ferry way 146618220 ("Padstow Rock Ferry (half tide)").
    slug: "rock",
    name: "Rock",
    kind: "escape",
    lat: 50.54464, lon: -4.92560,
    address: "Rock, Wadebridge",
    escape: {
      detail: "The ferry landing on Rock beach: cafés, the Rock Inn, a car park, and the road to Wadebridge",
    },
    verified: null,
  },
  {
    // Nearest point of OSM way 221567017, the lane to Hawker's Cove, to the route.
    slug: "hawkers-cove",
    name: "Hawker's Cove",
    kind: "escape",
    lat: 50.56012, lon: -4.94929,
    address: "Hawker's Cove, near Padstow",
    escape: {
      detail: "On the path by the old lifeboat station and coastguard cottages: a lane inland. No bus",
    },
    verified: null,
  },
  {
    // Trevone Beach Car Park, centre of OSM way 1356492351.
    slug: "trevone",
    name: "Trevone",
    kind: "escape",
    lat: 50.54497, lon: -4.97737,
    address: "Trevone, Padstow",
    escape: {
      detail: "On the path behind the beach: pay car park, beach café and shop, and the village up the road",
    },
    verified: null,
  },
  {
    // Harlyn Bay Car Park, centre of OSM way 643539857.
    slug: "harlyn-bay",
    name: "Harlyn Bay",
    kind: "escape",
    lat: 50.53999, lon: -4.99368,
    address: "Harlyn Bay, Padstow",
    escape: {
      detail: "On the path at Harlyn Bridge: a private pay car park open 6am–10pm, the Beach Box café, and the road to St Merryn and Padstow",
    },
    verified: null,
  },
  {
    // National Trust car park, centre of OSM way 220526859.
    slug: "trevose-head",
    name: "Trevose Head",
    kind: "escape",
    lat: 50.54685, lon: -5.03412,
    address: "Trevose Head, Padstow",
    escape: {
      detail: "On the path below the lighthouse: a National Trust pay car park at the end of the headland road. No bus",
    },
    verified: null,
  },
  {
    // Pay car park, centre of OSM way 630319624.
    slug: "constantine-bay",
    name: "Constantine Bay",
    kind: "escape",
    lat: 50.53121, lon: -5.02194,
    address: "Constantine Bay, Padstow",
    escape: {
      detail: "Behind the dunes at the south end of the beach: a pay car park and the road inland to the village, 800 m",
    },
    verified: null,
  },
  {
    // Car park, centre of OSM way 220525085.
    slug: "treyarnon",
    name: "Treyarnon",
    kind: "escape",
    lat: 50.52706, lon: -5.02178,
    address: "Treyarnon Bay, Padstow",
    escape: {
      detail: "On the path by the youth hostel: a car park, the hostel's café and a beach shop, and a lane inland",
    },
    verified: null,
  },
  {
    // National Trust car park by the shop and tea room, centre of OSM way
    // 197584916.
    slug: "carnewas",
    name: "Carnewas (Bedruthan Steps)",
    kind: "escape",
    lat: 50.48128, lon: -5.03202,
    address: "Carnewas, Bedruthan, near St Eval",
    escape: {
      detail: "On the path above Bedruthan Steps: a National Trust pay car park with the tea room and shop, on the coast road between Porthcothan and Mawgan Porth",
    },
    verified: null,
  },
  {
    // Beach car park, centre of OSM way 1327411183.
    slug: "mawgan-porth",
    name: "Mawgan Porth",
    kind: "escape",
    lat: 50.46478, lon: -5.03203,
    address: "Mawgan Porth, Newquay",
    escape: {
      detail: "The path comes down to the village behind the beach: car parks either side of the road, cafés, a shop, and the road inland to St Mawgan",
    },
    verified: null,
  },
  {
    // "Watergate Bay, Public Car Park", centre of OSM way 308478412.
    slug: "watergate-bay",
    name: "Watergate Bay",
    kind: "escape",
    lat: 50.44338, lon: -5.03776,
    address: "Watergate Bay, Newquay",
    escape: {
      detail: "Down the sea lane at the south end of the beach, by the hotel: a pay car park and the coast road to Newquay",
    },
    verified: null,
  },
  {
    // Car park behind the beach, centre of OSM way 788239125.
    slug: "porth",
    name: "Porth",
    kind: "escape",
    lat: 50.42621, lon: -5.05325,
    address: "Porth, Newquay",
    escape: {
      detail: "On the path behind Porth beach: a car park on the main road into Newquay",
    },
    verified: null,
  },
];
