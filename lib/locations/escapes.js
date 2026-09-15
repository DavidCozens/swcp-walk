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
  {
    // "Gunwalloe Cove" free car park, centre of OSM way 113317897.
    slug: "gunwalloe-fishing-cove",
    name: "Gunwalloe Fishing Cove",
    kind: "escape",
    lat: 50.05532, lon: -5.27722,
    address: "Gunwalloe, Helston",
    escape: {
      detail: "Above the cove: a small free car park, a seasonal café, and the lane up past the Halzephron Inn to the Helston road",
    },
    verified: null,
  },
  {
    // "Gunwalloe Car Park", National Trust, pay: centre of OSM way 31666150.
    slug: "gunwalloe-church-cove",
    name: "Gunwalloe (Church Cove)",
    kind: "escape",
    lat: 50.04167, lon: -5.26999,
    address: "Church Cove, Gunwalloe",
    escape: {
      detail: "Behind Church Cove: a National Trust pay car park and the lane inland to Cury and the A3083",
    },
    verified: null,
  },
  {
    // Car park above Poldhu Cove, centre of OSM way 738520953.
    slug: "poldhu",
    name: "Poldhu Cove",
    kind: "escape",
    lat: 50.03061, lon: -5.26460,
    address: "Poldhu, Mullion",
    escape: {
      detail: "At Poldhu Cove: parking, the beach café, and the road up to Mullion village",
    },
    verified: null,
  },
  {
    // Free car park above Mullion Cove, centre of OSM way 145203865.
    slug: "mullion-cove",
    name: "Mullion Cove",
    kind: "escape",
    lat: 50.01680, lon: -5.25827,
    address: "Mullion Cove, Mullion",
    escape: {
      detail: "Above the harbour at Mullion Cove: car parks, cafés, and the road inland to Mullion village",
    },
    verified: null,
  },
  {
    // "Kynance Cove", National Trust pay car park: centre of OSM way 68344105.
    slug: "kynance-cove",
    name: "Kynance Cove",
    kind: "escape",
    lat: 49.97425, lon: -5.22517,
    address: "Kynance Cove, The Lizard",
    escape: {
      detail: "Above Kynance Cove: a National Trust pay car park and the drive inland to the A3083 by Lizard village",
    },
    verified: null,
  },
  {
    // Parking at the top of Church Cove, centre of OSM way 679068758.
    slug: "church-cove-lizard",
    name: "Church Cove (Landewednack)",
    kind: "escape",
    lat: 49.96913, lon: -5.18803,
    address: "Church Cove, The Lizard",
    escape: {
      detail: "Up the lane from Church Cove past Landewednack church to Lizard village",
    },
    verified: null,
  },
  {
    // Pay car park above the village, centre of OSM way 139627755.
    slug: "cadgwith",
    name: "Cadgwith",
    kind: "escape",
    lat: 49.98954, lon: -5.18307,
    address: "Cadgwith, Ruan Minor",
    escape: {
      detail: "Through the fishing village: the Cadgwith Cove Inn, and the steep lane up to a pay car park and Ruan Minor",
    },
    verified: null,
  },
  {
    // Pay car park above the beach, centre of OSM way 139627745.
    slug: "kennack-sands",
    name: "Kennack Sands",
    kind: "escape",
    lat: 50.00541, lon: -5.16462,
    address: "Kennack Sands, Ruan Minor",
    escape: {
      detail: "Behind the beach: pay car parks, the Beach Hut café, and the lane inland",
    },
    verified: null,
  },
  {
    // OSM node 11249938655, NaPTAN 0800COC30383 "Village Hall" (towards Mullion
    // School and the Lizard); 0800COC30382, towards Poldhu and Helston, is 13 m
    // away with no OSM node. Beside the Co-op (OSM way 609891712) and the post
    // office (node 1123026094). 1.4 km on foot from the mullion-cove car park,
    // measured on OSM's ways; 650 m from the route, above Polurrian. Clifden Parc
    // (0800COC30377, OSM node 8919126355), 290 m from the route, is nearer the path
    // but further from the shops.
    slug: "mullion",
    name: "Mullion",
    kind: "escape",
    lat: 50.02454, lon: -5.24577,
    address: "Nansmellyon Road, Mullion",
    escape: {
      detail: "Inland from Mullion Cove or Polurrian to the village, about 1.4 km from the cove car park: a Co-op and the post office by the stop, the Spar and the Old Inn at Churchtown, and buses from the Village Hall stop. The 34 to Poldhu Cove and Helston, about 40 minutes, and the other way to the Lizard, about 30; hourly Mon–Sat and every two hours on Sundays. For Porthleven change at Helston to the 2; for Coverack, Helston Sainsbury's to the 36, Mon–Sat only",
    },
    verified: "2026-09-16",
  },
  {
    // OSM node 682268728, NaPTAN 0800COC30396 "The Green" (N-bound), on the A3083
    // by the green: the only stop in the village every 34 starts and finishes at.
    // Croft Parc, Top Church Cove and Landewednack CP School (0800COC30393, 30394,
    // 30395), on the loop into the village, are called at only towards the Green.
    // Pubs, cafés, shops and free toilets (OSM way 240870575) within 100 m.
    slug: "lizard-village",
    name: "Lizard village",
    kind: "escape",
    lat: 49.96880, lon: -5.20381,
    address: "The Green, Lizard",
    escape: {
      detail: "Inland by the lane to the village green: pubs, cafés, shops and toilets, and the only bus, from The Green. The 34 to Mullion, about 30 minutes, and Helston, about an hour; hourly Mon–Sat and every two hours on Sundays. For Porthleven change at Helston to the 2; for Coverack, Helston Sainsbury's to the 36, Mon–Sat only",
    },
    verified: "2026-09-16",
  },
  {
    // NaPTAN 0800COA16072 "Glebe Place" (S-bound); position from NaPTAN via
    // bustimes.org, as OSM has no node for it. By Ruan Minor Surgery (OSM way
    // 139627692), a branch of the Mullion group practice, and the post office
    // (OSM node 1123025938). The 34 loops one way from Treleague Cross Roads by
    // Glebe Place and Kuggar, so journeys both ways call here. Ruan Minor Bus
    // Shelter on Poltesco Lane (0800COC30402, OSM node 682268730), 150 m east,
    // has no services. 1.06 km on OSM's ways from the cadgwith car park; 730 m
    // from the route.
    slug: "ruan-minor",
    name: "Ruan Minor",
    kind: "escape",
    lat: 49.99450, lon: -5.18355,
    address: "Glebe Place, Ruan Minor",
    escape: {
      detail: "Up the lane from Cadgwith, about 1 km, to the village and the Glebe Place stop. The 34 back to Lizard village, about 15 minutes, or to Helston, about an hour; hourly Mon–Sat and every two hours on Sundays, the last towards Helston at 18:54 Mon–Sat. For Coverack change at Helston Sainsbury's to the 36, Mon–Sat only",
    },
    verified: "2026-09-16",
  },
  {
    // OSM node 682268731, NaPTAN 0800COC30403 "Phone Box" (SW-bound), on the
    // 34's one-way loop from Ruan Minor, so journeys both ways call here. The
    // stop opposite (0800COC30404, OSM node 11282334210) has no services. Among
    // holiday parks: Chy Carne (OSM way 140066582) and Kennack Sands Park (way
    // 964220188). 950 m on OSM's ways from the kennack-sands car park; 570 m
    // from the route.
    slug: "kuggar",
    name: "Kuggar",
    kind: "escape",
    lat: 50.00357, lon: -5.17679,
    address: "Kuggar, Ruan Minor",
    escape: {
      detail: "Up the lane from Kennack Sands, about 1 km, to the hamlet among the holiday parks and the Phone Box stop. The 34 back to Lizard village, about 12 minutes, or to Helston, about 55; hourly Mon–Sat and every two hours on Sundays, the last towards Helston at 18:57 Mon–Sat. For Coverack change at Helston Sainsbury's to the 36, Mon–Sat only",
    },
    verified: "2026-09-16",
  },
  {
    // Donation car park by the beach, centre of OSM way 1197960445.
    slug: "porthoustock",
    name: "Porthoustock",
    kind: "escape",
    lat: 50.05584, lon: -5.06486,
    address: "Porthoustock, St Keverne",
    escape: {
      detail: "Down in the cove by the quarry: parking by donation, and the lane inland to St Keverne, about 1.9 km, for the 36 and 36B from The Square. No bus in the cove",
    },
    verified: null,
  },
  {
    // Pay car park behind the beach, centre of OSM way 964033464.
    slug: "porthallow",
    name: "Porthallow",
    kind: "escape",
    lat: 50.06795, lon: -5.07944,
    address: "Porthallow, St Keverne",
    escape: {
      detail: "On the path at Porthallow beach: a pay car park, the Five Pilchards inn, and the lane inland to St Keverne. The 36B stops at The Beach by the car park, once each way Mon–Fri only: 09:38 by Gillan, Manaccan and Helford Car Park, 22 minutes, to Helston, about an hour; 14:20 to St Keverne The Square, 8 minutes, where the 36 goes on to Coverack only in school holidays, at 14:50. No weekend buses",
    },
    verified: null,
  },
  {
    // Parking by the church, centre of OSM way 971654276.
    slug: "st-anthony-in-meneage",
    name: "St Anthony-in-Meneage",
    kind: "escape",
    lat: 50.08975, lon: -5.10151,
    address: "St Anthony-in-Meneage, Manaccan",
    escape: {
      detail: "On the north side of Gillan Creek by the church: limited parking and the lane inland to Manaccan. Sailaway's Gillan Creek ferry lands at its boathouse pontoon below, on demand April – October. No bus here: the 36B calls at Gillan Creek, about 1.6 km up the creek lane, once each way Mon–Fri, 09:49 by Manaccan to Helford Car Park and Helston, and 14:09 by Gillan and Porthallow to St Keverne",
    },
    verified: null,
  },
  {
    // OSM node 682268733, NaPTAN 0800COC30418 "The Square" (N-bound), used both ways
    // by the 36 and the 36B. Beside the Spar (OSM way 799156905), the post office
    // (node 9849612033), the Three Tuns (way 799156912), the White Hart (way
    // 799156925) and toilets (way 798863202). 1.17 km from the section 28 route;
    // 1.9 km on OSM's ways from the porthoustock car park, 2.5 km from porthallow.
    // The Health Centre stop (0800COA15748, OSM node 11110712899), by the
    // st-keverne-health-centre record, is 270 m south-west.
    slug: "st-keverne",
    name: "St Keverne",
    kind: "escape",
    lat: 50.05016, lon: -5.08786,
    address: "The Square, St Keverne",
    escape: {
      detail: "Inland from Porthoustock by the lane, about 1.9 km, to the village square: the Spar and post office, two pubs, toilets, and buses from The Square. The 36 back to Coverack Car Park only at 10:50, and at 14:15 on schooldays or 14:50 on Saturdays and in school holidays, 10 minutes; otherwise the 36 to Helston Sainsbury's, about 30–40 minutes, Mon–Sat. The 36B once a day Mon–Fri, 09:30 by Porthallow and Manaccan to Helford Car Park, 30 minutes, and on to Helston. No Sunday buses",
    },
    verified: "2026-09-16",
  },
  // Section 29.
  {
    // OSM node 497984991, place=hamlet.
    slug: "durgan",
    name: "Durgan",
    kind: "escape",
    lat: 50.10410, lon: -5.11591,
    address: "Durgan, Mawnan Smith",
    escape: {
      detail: "Hamlet on the Helford shore below Glendurgan Garden; the lane climbs past Glendurgan to the road between Helford Passage and Mawnan Smith. National Trust parking is at Glendurgan, not in Durgan. The 35 and 63 stop at Trebah Gardens, about 700 m up the lane and bridleway: to Mawnan Smith and Falmouth The Moor, about 20 minutes, roughly hourly Mon–Sat, 08:06 – 18:34; no Sunday buses",
    },
    verified: null,
  },
  {
    // Car park by St Maunanus church, centre of OSM way 419730606.
    slug: "mawnan-church",
    name: "Mawnan church",
    kind: "escape",
    lat: 50.10425, lon: -5.09520,
    address: "Mawnan, Mawnan Smith",
    escape: {
      detail: "Car park by St Maunanus church above the mouth of the Helford, and the lane inland to Mawnan Smith, about 1.9 km by Old Church Road to the Red Lion. The 35 and 63 from opposite the Red Lion to Falmouth The Moor, 15–20 minutes, roughly hourly Mon–Sat, 08:09 – 18:37; no Sunday buses",
    },
    verified: null,
  },
  {
    // OSM node 682269734, NaPTAN 0800COC56534 "Maenporth Beach".
    slug: "maenporth",
    name: "Maenporth",
    kind: "escape",
    lat: 50.12522, lon: -5.09427,
    address: "Maenporth, Falmouth",
    escape: {
      detail: "Beach with a pay car park, a café and the Cove restaurant. No buses use the Maenporth Beach stop by the car park: the nearest is the 35 and 63 at Little Bareppa on Carlidnack Road, about 1.1 km inland by footpath, to Falmouth The Moor in 13–18 minutes, roughly hourly Mon–Sat, 08:11 – 18:39; no Sunday buses. Swanpool, with the Falmouth town buses, is about 3 km on along the path",
    },
    verified: null,
  },
  {
    // OSM node 682268858, NaPTAN 0800COC30783 "Swanpool Beach".
    slug: "swanpool",
    name: "Swanpool",
    kind: "escape",
    lat: 50.14094, lon: -5.07707,
    address: "Swanpool Road, Falmouth",
    escape: {
      detail: "Beach on the edge of Falmouth with a pay car park and bus stops on Swanpool Road; the town is a short walk on. From the stop opposite the beach, the 67 to The Moor in 6 minutes, hourly Mon–Sat 09:26 – 17:26, and 18:26 until 31 October; the 64A at 09:48, 11:48, 13:48, 15:48 and 17:48, 5 minutes. No Sunday buses",
    },
    verified: null,
  },
  {
    // Free car park at the point, centre of OSM way 316418215. The 67's
    // Pendennis Point stop (0800COC04191, OSM node 682268617) is 50 m away.
    slug: "pendennis-point",
    name: "Pendennis Point",
    kind: "escape",
    lat: 50.14433, lon: -5.04356,
    address: "Castle Drive, Falmouth",
    escape: {
      detail: "Free car park at the point below Pendennis Castle. The 67 from Pendennis Point stop the long way round by Gyllyngvase and Swanpool to The Moor, 18 minutes, hourly Mon–Sat 09:14 – 17:14, and 18:14 until 31 October; no Sunday buses",
    },
    verified: null,
  },
  // Section 30.
  {
    // National Trust car park, centre of OSM way 146452080.
    slug: "st-anthony-head",
    name: "St Anthony Head",
    kind: "escape",
    lat: 50.14285, lon: -5.01319,
    address: "St Anthony Head, Portscatho",
    escape: {
      detail: "National Trust pay car park at the end of the road down the Roseland, above the lighthouse. No bus: the nearest is the 50 at Portscatho, further along the path, or the Place ferry to St Mawes, April to October, for the 50 from there. Otherwise a taxi",
    },
    verified: null,
  },
  {
    // National Trust pay car park, centre of OSM way 317983218.
    slug: "porth-farm",
    name: "Porth Farm",
    kind: "escape",
    lat: 50.15855, lon: -4.98674,
    address: "Porth, Portscatho",
    escape: {
      detail: "National Trust car park behind Towan Beach, on the lane from Gerrans down to St Anthony Head. No bus: the 50 stops at Gerrans Church, about 2.5 km up the road, and at Portscatho, further along the path",
    },
    verified: null,
  },
  {
    // OSM node 11610830409, NaPTAN 0800COC30859 "Portscatho Springfield".
    slug: "portscatho",
    name: "Portscatho",
    kind: "escape",
    lat: 50.18091, lon: -4.97621,
    address: "Portscatho, Truro",
    escape: {
      detail: "Village with a pub, a shop and bus stops up from the harbour: Highertown, Springfield and Tregassa, on the 50 every day, all year. To St Mawes Car Park, by the quay, in about 20 minutes, for the Place ferry April to October: Mon–Sat from Highertown 07:24, 09:03 (08:57 Saturdays and school holidays), 10:57, 12:27, 13:57, 16:16 on schooldays or 15:27 otherwise, 17:08 and 18:37; Sundays 22 past odd hours, 09:22 – 17:22. The other way by Pendower Turn and Ruan High Lanes to Truro, about 50 minutes. For Portloe change at Ruan High Lanes to the 51, Mon–Sat only: from Highertown 11:48, 14:45 (14:48), 16:28 and 17:49, Portloe 12:27, 15:35 (15:27), 17:07 and 18:32. On Wednesdays the Roseland community bus also goes to Veryan, 09:58 and 11:26 from Highertown",
    },
    verified: null,
  },
  {
    // Carne Beach stop, OSM node 682268462, NaPTAN 0800COA15231, which is
    // inactive: no bus calls.
    slug: "carne-beach",
    name: "Carne Beach",
    kind: "escape",
    lat: 50.20736, lon: -4.93775,
    address: "Carne, Veryan",
    escape: {
      detail: "Road down to Carne Beach, with National Trust parking; the free car park at Pendower is at the other end of the same beach. No bus here. The 50 stops at Pendower Turn, about 500 m up the lane from the Pendower car park, every day: to Portscatho and St Mawes, 25–30 minutes, for the Place ferry April to October, and the other way to Ruan High Lanes and Truro. Veryan is about 1.8 km up the lane from Carne, for the 51 to Portloe, Mon–Sat",
    },
    verified: null,
  },
  {
    // National Trust pay car park, centre of OSM way 157828447.
    slug: "nare-head",
    name: "Nare Head car park",
    kind: "escape",
    lat: 50.20538, lon: -4.91483,
    address: "Nare Head, Veryan",
    escape: {
      detail: "National Trust car park inland of Nare Head, on the lane to Veryan. No bus. Camels Farm, on the Veryan–Portloe road, is about 1.7 km on foot, where the 51 stops Mon–Sat: to Portloe in 4 minutes at 07:09, 09:39, 13:09 and 16:14, going on to Ruan High Lanes and Tregony; to Veryan at 07:58, 12:30, 15:38 (15:30 Saturdays and school holidays), 17:10 and 18:35. Veryan village is about 2 km. No Sunday buses",
    },
    verified: null,
  },
  {
    // OSM node 11035974900, NaPTAN 0800COC30844 "Pendower Road" (N-bound, towards
    // Veryan Green and Portloe), where every 51 leaving Veryan calls. The
    // terminus stop, 0800FWV38522 (OSM node 682277323), 200 m south-west, has the
    // same journeys; New Inn (0800COC30845 / 30846, OSM nodes 11657380197 /
    // 11657380198), 140 m north-east by the pub, shop and post office, has every
    // 51 coming in and the Wednesday community bus. 1.8 km on OSM's ways from the
    // carne-beach record; 1.3 km from the route.
    slug: "veryan",
    name: "Veryan",
    kind: "escape",
    lat: 50.21782, lon: -4.92400,
    address: "Pendower Road, Veryan",
    escape: {
      detail: "Up the lane from Carne Beach to the village, about 1.8 km: the New Inn, a shop and post office, and the 51, Mon–Sat, no Sundays. To Portloe Church in 13 minutes from Pendower Road at 07:00, 09:30, 13:00 and 16:05, going on to Ruan High Lanes and Tregony; the 08:10, 17:20 and 18:45 go straight to Ruan High Lanes. For St Mawes and the Place ferry change there to the 50: 08:10, 09:30 or 13:00, St Mawes Car Park 09:23 (09:17 Saturdays and school holidays), 11:17 or 14:17. On Wednesdays the Roseland community bus leaves New Inn at 14:27 and 15:57 for Pendower Turn, Portscatho and St Mawes Car Park, 29 minutes",
    },
    verified: "2026-09-16",
  },
  // Section 31.
  {
    // Car park above East Portholland, centre of OSM way 202703205.
    slug: "portholland",
    name: "Portholland",
    kind: "escape",
    lat: 50.23612, lon: -4.86279,
    address: "East Portholland, St Austell",
    escape: {
      detail: "Parking by the shore at East Portholland, on the lane inland to Tregony. No bus: nothing stops between Portloe and Gorran, so a taxi",
    },
    verified: null,
  },
  {
    // Caerhays Estate pay car park, centre of OSM way 143848530.
    slug: "porthluney",
    name: "Porthluney Cove",
    kind: "escape",
    lat: 50.23754, lon: -4.84284,
    address: "Porthluney Cove, Caerhays",
    escape: {
      detail: "Caerhays Estate pay car park and beach café below Caerhays Castle, where the coast road crosses the valley. No bus: nothing stops between Portloe and Gorran, so a taxi",
    },
    verified: null,
  },
  {
    // Free parking, OSM node 14018513279.
    slug: "hemmick",
    name: "Hemmick Beach",
    kind: "escape",
    lat: 50.23058, lon: -4.81335,
    address: "Hemmick, St Austell",
    escape: {
      detail: "A few spaces by Hemmick Beach at the foot of a steep, narrow lane up to Boswinger. No bus: GorranBus calls at Boswinger Seaview, about 800 m up the lane, only if booked and only at 09:00, Tuesday to Friday and the third Monday, for Gorran Haven, Mevagissey and St Austell. Booking 01726 844933, Mon–Fri 7.30 – 8.20am",
    },
    verified: null,
  },
  {
    // OSM node 682268930, NaPTAN 0800COC31056 "Car Park".
    slug: "gorran-haven",
    name: "Gorran Haven",
    kind: "escape",
    lat: 50.24036, lon: -4.79095,
    address: "Gorran Haven, St Austell",
    escape: {
      detail: "Village with cafés, a pay car park and bus stops by the car park above the beach. The 23, Mon–Sat, from the Car Park at 09:45, 13:45 and 16:50: Mevagissey River Street Car Park 25 minutes later, St Austell bus station 48, where the 51 leaves for Portloe at 11:45, 14:45 and 17:52, Portloe Church 12:27, 15:35 (15:27 Saturdays and school holidays) and 18:32. Towards Gorran Haven from Mevagissey River Street Car Park 09:14, 13:14 and 16:22. No Sunday buses. GorranBus, Tuesday to Friday, from Triangle at 09:30 to Mevagissey and St Austell; book on 01726 844933",
    },
    verified: null,
  },
  {
    // OSM node 682275768, NaPTAN 0800COY38619 "Rising Sun Car Park".
    slug: "portmellon",
    name: "Portmellon",
    kind: "escape",
    lat: 50.26232, lon: -4.78611,
    address: "Portmellon, Mevagissey",
    escape: {
      detail: "Cove on the road into Mevagissey, with the Rising Sun Inn and a bus stop by its car park. Only GorranBus calls, and only if booked: 09:10 Tuesday to Friday and the third Monday, going round by Gorran Haven to reach Mevagissey at 09:50; nothing calls on the way back. Mevagissey, a short walk on, has the 23 and 29",
    },
    verified: null,
  },
  // Section 32.
  {
    // OSM node 682268923, NaPTAN 0800COC31029 "Pentewan Turn".
    slug: "pentewan",
    name: "Pentewan",
    kind: "escape",
    lat: 50.29136, lon: -4.78607,
    address: "Pentewan, St Austell",
    escape: {
      detail: "Village behind the beach, with a pub, cafés and a shop; the bus stops at Pentewan Turn on the main road. The 29 every day: to St Austell bus station in 11 minutes, Mon–Sat 06:59, 08:07, then 8 past 09:08 – 18:08, then 19:07, 21:05 and 23:05; Sundays 09:19, then 19 past even hours 10:19 – 18:19. To Mevagissey Trevarth in 5–14 minutes, Mon–Sat 07:52, then about 46 past 08:46 – 18:46, then 20:50 and 22:50; Sundays 09:08, 09:46, 11:46, 13:46, 15:46 and 17:46. The 23 adds 09:07, 11:07, 13:07 and 16:15 to Mevagissey, Mon–Sat. For Par change at St Austell to the 24 at 35 past, Mon–Sat, or the 24A every two hours on Sundays",
    },
    verified: null,
  },
  {
    // Pay car park, centre of OSM way 164414044.
    slug: "porthpean",
    name: "Porthpean",
    kind: "escape",
    lat: 50.32309, lon: -4.76810,
    address: "Porthpean, St Austell",
    escape: {
      detail: "Pay car park above Porthpean beach, and the lane up to Higher Porthpean and St Austell. No bus here. The St Austell Hospital stop, at the minor injury unit, is about 1.1 km up Porthpean Road: the 24 and 25 Mon–Sat to St Austell bus station in 10–11 minutes, at about 6 and 21 past, 06:36 – 20:02; Sundays the 24A at 20 past even hours, 10:20 – 20:20. From the same stop the 25 goes by Duporth and Charlestown to Carlyon Bay at about 35 past, 06:25 – 18:35, and the 24 to Par at 46 past, 06:16 – 18:51, Par Railway Station 18 minutes later",
    },
    verified: null,
  },
  {
    // OSM node 11435830523, NaPTAN 0800COC31471 "Charlestown Old Chapel".
    slug: "charlestown",
    name: "Charlestown",
    kind: "escape",
    lat: 50.33351, lon: -4.75909,
    address: "Charlestown, St Austell",
    escape: {
      detail: "Harbour village with pubs, cafés, pay parking and bus stops up the road from the harbour. At Old Chapel the 25, Mon–Sat: to St Austell bus station in 20 minutes at 07:13, 08:13, 09:11, then 11 past to 19:11 (15:08 on schooldays); to Carlyon Bay and St Blazey at 06:29, 07:29, 08:42, then 39 past to 18:39, only the 06:29 and 07:29 going on to Par Railway Station, 19 minutes. Sundays the 24A every two hours: to Carlyon Bay and Par at 50 past even hours, 08:50 – 18:50, Par opp Costcutter 23 minutes later; to St Austell at 14 past, 10:14 – 20:14. On Mon–Sat evenings the 24 calls at Charlestown Church, 300 m up: to Par 19:26, 21:26 and 23:26. For Mevagissey change at St Austell to the 29",
    },
    verified: null,
  },
  {
    // OSM node 1154351399, NaPTAN 0800COC31460 "Carlyon Bay Hotel".
    slug: "carlyon-bay",
    name: "Carlyon Bay",
    kind: "escape",
    lat: 50.33754, lon: -4.73879,
    address: "Sea Road, Carlyon Bay",
    escape: {
      detail: "Bus stops by the Carlyon Bay Hotel, up from the clifftop path over the golf course. The 25, Mon–Sat: towards Charlestown and St Austell bus station, 25 minutes, 07:08, 08:08, 09:06, then 6 past to 19:06 (15:03 on schooldays); towards St Blazey 06:34, 07:34, 08:47, then 44 past to 18:44, only the 06:34 and 07:34 going on to Par Railway Station, 14 minutes. Sundays the 24A every two hours: to Par at 55 past even hours, 08:55 – 18:55, Par opp Costcutter 18 minutes later; to Charlestown and St Austell at 7 past, 10:07 – 20:07",
    },
    verified: null,
  },
  // Section 33.
  {
    // Pay car park above the beach, centre of OSM way 58947464.
    slug: "polkerris",
    name: "Polkerris",
    kind: "escape",
    lat: 50.34004, lon: -4.67960,
    address: "Polkerris, Par",
    escape: {
      detail: "Pay car park above the beach and the Rashleigh Inn, and the lane up to the road at Polkerris Turn",
    },
    verified: null,
  },
  {
    // OSM node 682276652, NaPTAN 0800COZ06425 "Readymoney Car Park".
    slug: "readymoney",
    name: "Readymoney, Fowey",
    kind: "escape",
    lat: 50.33215, lon: -4.64657,
    address: "Readymoney Road, Fowey",
    escape: {
      detail: "Up from Readymoney Cove to the car park and bus stops at the top of Fowey",
    },
    verified: null,
  },
  {
    // OSM node 682271748, NaPTAN 0800COD40757 "The Quay".
    slug: "polruan",
    name: "Polruan",
    kind: "escape",
    lat: 50.32884, lon: -4.63413,
    address: "The Quay, Polruan",
    escape: {
      detail: "Where the ferry from Fowey lands: pubs, a café, a shop and a bus stop on the quay",
    },
    verified: null,
  },
  {
    // National Trust pay car park, centre of OSM way 110370619.
    slug: "lantic-bay",
    name: "Lantic Bay car park",
    kind: "escape",
    lat: 50.33319, lon: -4.60141,
    address: "Lantic Bay, Lanteglos",
    escape: {
      detail: "National Trust car park on the lane above Lantic Bay, up a steep path from the coast",
    },
    verified: null,
  },
  {
    // OSM node 682271725, NaPTAN 0800COD40751 "Lansallos Church".
    slug: "lansallos",
    name: "Lansallos",
    kind: "escape",
    lat: 50.33629, lon: -4.56917,
    address: "Lansallos, Looe",
    escape: {
      detail: "Up the valley path from the coast to the church and the bus stop in the hamlet",
    },
    verified: null,
  },
  // Section 34.
  {
    // Pay car park, centre of OSM way 570731959.
    slug: "talland-bay",
    name: "Talland Bay",
    kind: "escape",
    lat: 50.33787, lon: -4.49769,
    address: "Talland Bay, Looe",
    escape: {
      detail: "Pay car park behind the beach, with the beach café, and the lane inland",
    },
    verified: null,
  },
  {
    // OSM node 12593582967, NaPTAN 0800COA15908 "The Crescent".
    slug: "hannafore",
    name: "Hannafore",
    kind: "escape",
    lat: 50.34487, lon: -4.45372,
    address: "Marine Drive, Hannafore, Looe",
    escape: {
      detail: "The seafront road into West Looe, with a café and a bus stop at The Crescent",
    },
    verified: null,
  },
  {
    // OSM node 682271646, NaPTAN 0800COA10165 "Looe Railway Station"; the station is OSM node 32039894.
    slug: "looe",
    name: "Looe",
    kind: "escape",
    lat: 50.35971, lon: -4.45592,
    address: "Station Road, Looe",
    escape: {
      detail: "Looe's railway station and bus stops, up the river from the bridge on the East Looe side",
    },
    verified: null,
  },
  {
    // Car park, centre of OSM way 447018126.
    slug: "millendreath",
    name: "Millendreath",
    kind: "escape",
    lat: 50.36230, lon: -4.43574,
    address: "Millendreath, Looe",
    escape: {
      detail: "Car parks behind the beach and bars, and the narrow lane up to the main road",
    },
    verified: null,
  },
  {
    // OSM node 682268151, NaPTAN 0800COA10293 "Opp Car Park".
    slug: "seaton-cornwall",
    name: "Seaton",
    kind: "escape",
    lat: 50.36577, lon: -4.38761,
    address: "Bridge Road, Seaton, Torpoint",
    escape: {
      detail: "Car parks behind the beach by the river bridge, with a café, a pub, a shop and bus stops",
    },
    verified: null,
  },
  {
    // OSM node 682268158, NaPTAN 0800COA10296 "The Nook".
    slug: "downderry",
    name: "Downderry",
    kind: "escape",
    lat: 50.36207, lon: -4.37106,
    address: "Main Road, Downderry, Torpoint",
    escape: {
      detail: "Village on the coast road, with the Inn on the Shore, a shop and bus stops",
    },
    verified: null,
  },
];
