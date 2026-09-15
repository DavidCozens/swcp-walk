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
  {
    // Pay car park behind the beach, centre of OSM way 102620757.
    slug: "fistral",
    name: "Fistral",
    kind: "escape",
    lat: 50.41821, lon: -5.09741,
    address: "Headland Road, Newquay",
    escape: {
      detail: "On the path behind Fistral beach: a pay car park, cafés, and the road back into Newquay town",
    },
    verified: null,
  },
  {
    // "Crantock Beach Car Park", National Trust, centre of OSM way 104118664.
    slug: "crantock",
    name: "Crantock",
    kind: "escape",
    lat: 50.40672, lon: -5.11334,
    address: "Beach Road, Crantock",
    escape: {
      detail: "Behind the dunes at Crantock beach: a National Trust pay car park, a café, and the lane up to Crantock village with its two pubs and shop",
    },
    verified: null,
  },
  {
    // Pay car park by the Bowgie Inn, centre of OSM way 164568396.
    slug: "west-pentire",
    name: "West Pentire",
    kind: "escape",
    lat: 50.40432, lon: -5.13052,
    address: "West Pentire, Crantock",
    escape: {
      detail: "Where the path crosses the headland between Crantock beach and Porth Joke: pay car parks, the Bowgie Inn, and the road to Crantock",
    },
    verified: null,
  },
  {
    // Pay car park behind the beach, centre of OSM way 163835712.
    slug: "holywell-bay",
    name: "Holywell Bay",
    kind: "escape",
    lat: 50.38730, lon: -5.14268,
    address: "Holywell Bay, Newquay",
    escape: {
      detail: "Behind the dunes at Holywell: a pay car park, the beach bar and the Treguth Inn, and the road inland to Cubert",
    },
    verified: null,
  },
  {
    // Pay car park at the end of Pentire, centre of OSM way 102327002.
    slug: "pentire",
    name: "Pentire",
    kind: "escape",
    lat: 50.41071, lon: -5.11498,
    address: "Pentire Headland, Newquay",
    escape: {
      detail: "At the end of the Pentire road, before the headland: a pay car park, and the 58 town bus into Newquay from the stop beside it, every two hours Mon–Sat",
    },
    verified: null,
  },
  {
    // "Trevillas Coombe", National Trust, fee=no: centre of OSM way 239996516.
    slug: "trevellas-porth",
    name: "Trevellas Porth",
    kind: "escape",
    lat: 50.32327, lon: -5.19542,
    address: "Trevellas Coombe, St Agnes",
    escape: {
      detail: "Where the path drops into the valley at Trevellas Porth: a small National Trust car park at the end of a steep, narrow lane up to the B3285 at Trevellas",
    },
    verified: null,
  },
  {
    // Pay car park at the cove, centre of OSM way 649537419.
    slug: "trevaunance-cove",
    name: "Trevaunance Cove",
    kind: "escape",
    lat: 50.31920, lon: -5.20236,
    address: "Quay Road, St Agnes",
    escape: {
      detail: "On the path at the cove below St Agnes: pay car parks, the Driftwood Spars, and Quay Road up into the village, about 700 m",
    },
    verified: null,
  },
  {
    // Car park on the headland road, centre of OSM way 231513265, fee=no.
    slug: "st-agnes-head",
    name: "St Agnes Head",
    kind: "escape",
    lat: 50.31738, lon: -5.23226,
    address: "Beacon Drive, St Agnes",
    escape: {
      detail: "Free roadside car parks along the lane behind St Agnes Head. No services; a place to be picked up",
    },
    verified: null,
  },
  {
    // "Chapel Porth National Trust", centre of OSM way 78473535.
    slug: "chapel-porth",
    name: "Chapel Porth",
    kind: "escape",
    lat: 50.30006, lon: -5.23407,
    address: "Chapel Porth, St Agnes",
    escape: {
      detail: "Down in the cove: a National Trust pay car park and café at the end of a narrow valley lane to St Agnes",
    },
    verified: null,
  },
  {
    // "Porthtowan Beach Long Stay Car Park", Cornwall Council: centre of OSM
    // way 96906943.
    slug: "porthtowan",
    name: "Porthtowan",
    kind: "escape",
    lat: 50.28696, lon: -5.24013,
    address: "Beach Road, Porthtowan",
    escape: {
      detail: "On the path behind the beach: pay car parks, cafés, the Blue Bar and the village store, and the road inland",
    },
    verified: null,
  },
  {
    // Free clifftop car park, centre of OSM way 885819359.
    slug: "bassets-cove",
    name: "Basset's Cove",
    kind: "escape",
    lat: 50.24925, lon: -5.31356,
    address: "B3301, North Cliffs",
    escape: {
      detail: "A free car park beside the path, off the B3301 coast road. No services; a place to be picked up",
    },
    verified: null,
  },
  {
    // Free car park by the café, centre of OSM way 232062701.
    slug: "hells-mouth",
    name: "Hell's Mouth",
    kind: "escape",
    lat: 50.23668, lon: -5.36082,
    address: "B3301, North Cliffs, Gwithian",
    escape: {
      detail: "Where the path meets the B3301: a free car park and the Hell's Mouth Café",
    },
    verified: null,
  },
  {
    // National Trust pay car park by the café, centre of OSM way 886941095.
    slug: "godrevy",
    name: "Godrevy",
    kind: "escape",
    lat: 50.23052, lon: -5.38857,
    address: "Godrevy Towans, Gwithian",
    escape: {
      detail: "Behind the beach below Godrevy Point: National Trust pay car parks, the Godrevy Café, and the lane to Gwithian village",
    },
    verified: null,
  },
  {
    // "Gwithian Towans Long Stay Car Park", Cornwall Council: centre of OSM way
    // 112472762.
    slug: "gwithian-towans",
    name: "Gwithian Towans",
    kind: "escape",
    lat: 50.22221, lon: -5.39563,
    address: "Gwithian Towans, Hayle",
    escape: {
      detail: "In the dunes behind the beach: a council pay car park, cafés, and the road inland to Gwithian and the B3301",
    },
    verified: null,
  },
  {
    // Pay car park behind Hayle Towans, centre of OSM way 133392399.
    slug: "hayle-towans",
    name: "Hayle Towans",
    kind: "escape",
    lat: 50.20488, lon: -5.41240,
    address: "Hayle Towans, Hayle",
    escape: {
      detail: "Behind the dunes at Hayle Towans: a pay car park, a beach bar and bistro, and the road into Hayle",
    },
    verified: null,
  },
  {
    // "Lelant Saltings Car Park", centre of OSM way 111396936.
    slug: "lelant-saltings",
    name: "Lelant Saltings",
    kind: "escape",
    lat: 50.17844, lon: -5.44197,
    address: "Lelant Saltings, Lelant",
    escape: {
      detail: "Beside the path at Lelant Saltings station: a pay car park. Only one or two trains a day stop here; Lelant station, 700 m on, has about one every two hours, on request. The 14 and 17 buses to St Ives and Hayle or St Erth stop at Lelant Woodlands, 150 m up Abbey Hill",
    },
    verified: null,
  },
  {
    // "Carbis Bay beach" pay car park, centre of OSM way 111506191.
    slug: "carbis-bay",
    name: "Carbis Bay",
    kind: "escape",
    lat: 50.19816, lon: -5.46539,
    address: "Carbis Bay, St Ives",
    escape: {
      detail: "Down at Carbis Bay beach: a pay car park, the station up the hill, and the road to the A3074",
    },
    verified: null,
  },
  {
    // OSM node 682274594, NaPTAN 0800COC30163 "Institute" (N-bound); 0800COC30162,
    // opposite, is OSM node 682268702. The one St Agnes stop every 87 and every
    // 315 through the village calls at. Peterville (0800COD41237, OSM node
    // 682274604), 350 m east, has every 87 but only some 315s.
    slug: "st-agnes",
    name: "St Agnes",
    kind: "escape",
    lat: 50.31013, lon: -5.20316,
    address: "Vicarage Road (B3277), St Agnes",
    escape: {
      detail: "Up Quay Road from Trevaunance Cove to the village centre, about 1 km: shops, pubs, and buses from the Institute stop. The 87 to Perranporth and Truro, hourly Mon–Sat and every two hours on Sundays; the 315 to Mount Hawke, Porthtowan and Redruth, 4–5 a day Mon–Sat",
    },
    verified: "2026-09-15",
  },
  {
    // OSM node 682272444, NaPTAN 0800COD40918 "Pendarves Arms" (towards
    // Camborne); 0800COD40919 on St Ives Lane, towards Hayle, is OSM node
    // 682272451, 45 m away. Transport for Cornwall calls both "Gwithian, Red
    // River Inn". The Godrevy stop on Churchtown Road (0800FWV38564) has no
    // services on bustimes.org.
    slug: "gwithian",
    name: "Gwithian",
    kind: "escape",
    lat: 50.22099, lon: -5.38599,
    address: "Churchtown Road, Gwithian",
    escape: {
      detail: "Inland from Godrevy or Gwithian Towans to the village, about 700 m: the Red River Inn and the only bus on this stretch. The 14, hourly every day, to Hayle, Lelant and St Ives one way, Camborne, Pool and Redruth the other; for Portreath change to the 49 at Pool. Nothing runs along the B3301 past Godrevy and Hell's Mouth",
    },
    verified: "2026-09-15",
  },
  {
    // OSM node 682270546, NaPTAN 0800COD40286 "Zennor Turn" (E-bound, towards
    // St Ives); opposite 0800COD40287 (NaPTAN 50.19027, -5.56587), towards
    // Penzance. On the B3306 at the top of the village lane, 205 m from the
    // Tinners Arms (centre of OSM way 233500072, 50.19166, -5.56788) and St
    // Senara's church (way 233500074). About 1 km from the path on foot.
    slug: "zennor",
    name: "Zennor",
    kind: "escape",
    lat: 50.19032, lon: -5.56595,
    address: "B3306, Zennor",
    escape: {
      detail: "Up the valley to the village: the Tinners Arms, the church, and the 16A from Zennor Turn on the B3306 just above, Mon–Sat only: to St Ives 3–4 a day, 21 minutes, and to Penzance by Newmill. In the summer holidays also the 7 along the coast road to Gurnard's Head and Pendeen. No Sunday bus out of season",
    },
    verified: "2026-09-15",
  },
  {
    // OSM node 1348364579, NaPTAN 0800COD40282 "Gurnards Head Hotel" (opp),
    // used by the 16A both ways; the E-bound stop 0800COD40281 (NaPTAN
    // 50.18263, -5.59307) has no services. 30 m from the Gurnard's Head inn
    // (centre of OSM way 112506048, 50.18264, -5.59326). About 1 km from the
    // path on foot.
    slug: "treen-gurnards-head",
    name: "Gurnard's Head (Treen)",
    kind: "escape",
    lat: 50.18235, lon: -5.59332,
    address: "B3306, Treen, Zennor",
    escape: {
      detail: "Inland across the neck of the headland to the Gurnard's Head inn on the B3306, and the 16A outside it, Mon–Sat only: to Zennor and St Ives 3–4 a day, 26 minutes to St Ives, or to Penzance by Newmill, 24 minutes. In the summer holidays also the 7 to Pendeen. No Sunday bus out of season",
    },
    verified: "2026-09-15",
  },
  {
    // Free car park on the B3306, centre of OSM way 836007381. The National
    // Trust's Carn Galver car park, by the engine houses (way 241104599), is
    // 900 m east along the road.
    slug: "bosigran",
    name: "Bosigran",
    kind: "escape",
    lat: 50.16725, lon: -5.62473,
    address: "B3306, Bosigran, Morvah",
    escape: {
      detail: "A free roadside car park on the B3306 just above the path west of Bosigran. No services; a place to be picked up. No bus out of the summer: the 4 stops at Morvah, 1.5 km west along the road. Rosemergy's tea room is a kilometre east",
    },
    verified: null,
  },
  {
    // OSM node 682270443, NaPTAN 0800COD40188 "Telephone Box" (opp, towards St
    // Just); 0800COD40187 (E-bound, towards Penzance) is NaPTAN 50.16144,
    // -5.63940, no OSM node. 55 m from OSM place node 29170982 (Morvah) and
    // 65 m from St Bridget's church (way 664124942). About 800 m from the path
    // on foot.
    slug: "morvah",
    name: "Morvah",
    kind: "escape",
    lat: 50.16141, lon: -5.63964,
    address: "B3306, Morvah",
    escape: {
      detail: "Up to the hamlet on the B3306 by the church: the 4 from the Telephone Box, hourly Mon–Sat, to Pendeen and St Just in 5–22 minutes, or inland to Penzance in 28. For St Ives, change at Penzance. No bus here on Sundays",
    },
    verified: "2026-09-15",
  },
  {
    // Pay car park at Levant Mine, centre of OSM way 240295187.
    slug: "levant",
    name: "Levant",
    kind: "escape",
    lat: 50.15120, lon: -5.68552,
    address: "Trewellard, Pendeen",
    escape: {
      detail: "Beside the path at Levant Mine: a pay car park and the lane up to Trewellard on the B3306, about 1.4 km, where the 4 stops at the Trewellard Arms: hourly Mon–Sat to Pendeen, 3 minutes, or St Just, 10, and every two hours on Sundays",
    },
    verified: null,
  },
  {
    // National Trust pay car park by the Count House, centre of OSM way 240293075.
    slug: "botallack",
    name: "Botallack",
    kind: "escape",
    lat: 50.14064, lon: -5.68923,
    address: "Botallack, St Just",
    escape: {
      detail: "Just inland of the path at the Botallack Count House: a National Trust pay car park, the café, and the lane to Botallack village and the B3306, about 650 m, where the 4 stops at the Queen's Arms: hourly Mon–Sat to St Just, 5 minutes, or Pendeen, 8, and every two hours on Sundays",
    },
    verified: null,
  },
  {
    // "Cape Cornwall", National Trust pay car park: centre of OSM way 50589919.
    slug: "cape-cornwall",
    name: "Cape Cornwall",
    kind: "escape",
    lat: 50.12704, lon: -5.70443,
    address: "Cape Cornwall Road, St Just",
    escape: {
      detail: "At the foot of the cape: a National Trust pay car park, the Little Wonder Café, and Cape Cornwall Road into St Just, about 2 km",
    },
    verified: null,
  },
  {
    // Free car park at the foot of the Cot Valley, centre of OSM way 116823147.
    slug: "porth-nanven",
    name: "Porth Nanven (Cot Valley)",
    kind: "escape",
    lat: 50.11886, lon: -5.69942,
    address: "Cot Valley, St Just",
    escape: {
      detail: "At the bottom of the Cot Valley: a small free car park at the end of a narrow lane up to St Just, about 2 km. No services",
    },
    verified: null,
  },
  {
    // Pay car park above Gwynver beach, centre of OSM way 1014068312.
    slug: "gwynver",
    name: "Gwynver",
    kind: "escape",
    lat: 50.08871, lon: -5.68538,
    address: "Escalls, Sennen",
    escape: {
      detail: "On the cliff above Gwynver beach: a pay car park and the lane inland to the A30 at Escalls",
    },
    verified: null,
  },
  {
    // Pay car park at the Land's End site, centre of OSM way 79612692.
    slug: "lands-end",
    name: "Land's End",
    kind: "escape",
    lat: 50.06546, lon: -5.71162,
    address: "Land's End, Sennen",
    escape: {
      detail: "The Land's End visitor site on the path: pay car parks, cafés, the hotel, and the A30 inland",
    },
    verified: null,
  },
  {
    // Pay car park, centre of OSM way 210093061.
    slug: "porthgwarra",
    name: "Porthgwarra",
    kind: "escape",
    lat: 50.03804, lon: -5.67334,
    address: "Porthgwarra, St Levan",
    escape: {
      detail: "Down in the cove below Gwennap Head: a small pay car park, the café, and a narrow lane inland to the B3283",
    },
    verified: null,
  },
  {
    // Pay car park behind the beach, centre of OSM way 130153410.
    slug: "porthcurno",
    name: "Porthcurno",
    kind: "escape",
    lat: 50.04554, lon: -5.65453,
    address: "Porthcurno, St Levan",
    escape: {
      detail: "Behind Porthcurno beach: a pay car park, the beach café, the Telegraph Museum, and the road up to the B3315",
    },
    verified: null,
  },
  {
    // Free car park at the top of the valley, centre of OSM way 292435078.
    slug: "penberth",
    name: "Penberth",
    kind: "escape",
    lat: 50.04957, lon: -5.63190,
    address: "Penberth, St Buryan",
    escape: {
      detail: "Up the valley from Penberth Cove: a small car park and a steep lane to the B3315. No services",
    },
    verified: null,
  },
  {
    // OSM node 682270209, NaPTAN 0800COD40062 "Treen Bus Shelter" (SW-bound,
    // towards Porthcurno and Land's End); 0800COD40063, opposite, towards Lamorna
    // Turn and Penzance, has no OSM node. Every 1A calls both ways. 760 m from the
    // route; 730 m from the penberth escape record, too far to serve through it.
    // Not the treen-gurnards-head record, the other Treen, in Zennor.
    slug: "treen-st-levan",
    name: "Treen (St Levan)",
    kind: "escape",
    lat: 50.05199, lon: -5.64145,
    address: "Treen Hill (B3315), Treen, St Levan",
    escape: {
      detail: "Inland from Treryn Dinas by the field path to Treen, about 700 m: the Logan Rock Inn, and the 1A from the bus shelter on the B3315. Every two hours: to Porthcurno and Land's End, where the 1 goes on to Sennen Cove; the other way to Lamorna Turn, 1.6 km above Lamorna Cove, and Penzance",
    },
    verified: "2026-09-15",
  },
  {
    // OSM node 682275118, NaPTAN 0800COD40230 "St Just Terminus" (N-bound), at
    // the bus station (OSM way 39294365) off Market Street; Transport for
    // Cornwall and bustimes.org call it Bus Station. Every 4, 4A, 4B and 8 calls,
    // and the 7 and 7A in the summer holidays. The 4A and 4B also call at Fore
    // Street (0800COD40231 / 40232), 200 m east. 1.9 km by road from the
    // cape-cornwall car park and from porth-nanven. The 8 (Long Rock – Penzance
    // – Sancreed – St Just) isn't entered: it reaches nothing else on the path
    // except on schooldays, when the 07:15 from Penzance goes by Lamorna Turn,
    // St Buryan and Sennen's Sunny Corner Lane (0800COD40090, OSM node
    // 682270234; 0800COD40091, node 682270238), reaching St Just at 08:14, and
    // the 15:00 from St Just returns that way, Sunny Corner Lane 15:21.
    slug: "st-just",
    name: "St Just",
    kind: "escape",
    lat: 50.12375, lon: -5.68147,
    address: "Market Street, St Just",
    escape: {
      detail: "Inland to the town by Cape Cornwall Road from Cape Cornwall, or by the Cot Valley lane, about 2 km: shops, pubs, and buses from the terminus off Market Street. The 4 hourly Mon–Sat along the B3306 to Botallack, Trewellard and Pendeen, 12 minutes, and on by Morvah to Penzance; the 4A direct to Penzance at 50 past, 30 minutes; the 4B evenings and Sundays, every two hours, to Pendeen or Penzance. In the summer holidays also the 7 to Sennen Cove, 22 minutes, and Land's End. Otherwise no bus to Sennen Cove, apart from one on schooldays",
    },
    verified: "2026-09-15",
  },
  {
    // Pay car park by the harbour, centre of OSM way 112525071.
    slug: "mousehole",
    name: "Mousehole",
    kind: "escape",
    lat: 50.08390, lon: -5.53732,
    address: "Mousehole, Penzance",
    escape: {
      detail: "On the path through the village: harbour car parks, pubs and cafés, and the coast road to Newlyn and Penzance",
    },
    verified: null,
  },
  {
    // "Harbour Pay and Display", centre of OSM way 184064652.
    slug: "newlyn",
    name: "Newlyn",
    kind: "escape",
    lat: 50.10398, lon: -5.54910,
    address: "The Strand, Newlyn",
    escape: {
      detail: "On the path round the fishing harbour: pay car parks, pubs, a Co-op, and the road into Penzance",
    },
    verified: null,
  },
  {
    // "Harbour Long Stay Car Park", Cornwall Council: centre of OSM way 73168621,
    // by the bus and railway stations.
    slug: "penzance",
    name: "Penzance",
    kind: "escape",
    lat: 50.12020, lon: -5.53203,
    address: "Wharf Road, Penzance",
    escape: {
      detail: "On the path by the harbour: the bus and railway stations, car parks, and everything in the town",
    },
    verified: null,
  },
  {
    // "Long Rock" pay car park, centre of OSM way 43577051.
    slug: "long-rock",
    name: "Long Rock",
    kind: "escape",
    lat: 50.12806, lon: -5.50389,
    address: "Long Rock, Penzance",
    escape: {
      detail: "Behind the beach at Long Rock: a pay car park, the Mexico Inn and a shop, and the A30 just inland",
    },
    verified: null,
  },
  {
    // Pay car park above the beach, centre of OSM way 401291894.
    slug: "perranuthnoe",
    name: "Perranuthnoe",
    kind: "escape",
    lat: 50.11331, lon: -5.44261,
    address: "Perranuthnoe, Penzance",
    escape: {
      detail: "On the path above the beach: a pay car park, a café, and the village and its inn up the lane",
    },
    verified: null,
  },
  {
    // Car park at the top of the lane above the coves, centre of OSM way
    // 239997857; the car parks down by the cottages (ways 1182175684,
    // 974388229) are private.
    slug: "prussia-cove",
    name: "Prussia Cove",
    kind: "escape",
    lat: 50.10334, lon: -5.42011,
    address: "Prussia Cove, Rosudgeon",
    escape: {
      detail: "Up the lane from the coves to a car park and on to Rosudgeon on the A394. The cottages and the car parks down by them are private. No services",
    },
    verified: null,
  },
  {
    // Pay car park behind the beach, centre of OSM way 60904324.
    slug: "praa-sands",
    name: "Praa Sands",
    kind: "escape",
    lat: 50.10409, lon: -5.39220,
    address: "Praa Sands, Penzance",
    escape: {
      detail: "Behind the west end of the beach: pay car parks, Stones Reef and the Welloe, a shop, and the road up to the A394",
    },
    verified: null,
  },
  {
    // National Trust car park, free with a donation box: centre of OSM way
    // 390101847.
    slug: "rinsey",
    name: "Rinsey",
    kind: "escape",
    lat: 50.09542, lon: -5.36835,
    address: "Rinsey, Ashton",
    escape: {
      detail: "Above Wheal Prosper: a free National Trust car park at the end of the lane inland to Ashton on the A394. No services",
    },
    verified: null,
  },
  {
    // OSM node 682271239, NaPTAN 0800COD40581 "Falmouth Packet Inn" (SE-bound,
    // towards Praa Sands, Porthleven and Helston), with a shelter; opposite
    // 0800COD40582, OSM node 682271248, towards Marazion and Penzance. Every
    // Porthleven journey of the 2 calls both ways; the hourly Perranuthnoe
    // journeys don't come this way. From the prussia-cove car park about 1.7 km
    // by the lane north to the A394 (OSM way 8009074), measured on OSM's ways.
    // The Falmouth Packet (OSM node 59926873, amenity=pub) is beside the stop;
    // not checked as trading.
    slug: "rosudgeon",
    name: "Rosudgeon",
    kind: "escape",
    lat: 50.11585, lon: -5.41792,
    address: "A394, Rosudgeon",
    escape: {
      detail: "From the car park above Prussia Cove, up the lane to the A394 at Rosudgeon, about 1.7 km: buses from the Falmouth Packet Inn stop. The 2 to Praa Sands and Porthleven, about 25 minutes, and on to Helston one way; to Marazion, about 11 minutes, and Penzance the other. Hourly Mon–Sat and every two hours on Sundays",
    },
    verified: "2026-09-16",
  },
];
