// Where sections begin and end. A section references these by slug, so the end
// of one section and the start of the next are the same record rather than the
// same words typed twice — and `npm run validate` can check the GPX really
// does start where the section claims.
//
// Coordinates beyond Lynmouth are the node where OpenStreetMap's stage
// relations for the two sections meet (super-relation 2376086), not a town
// centre — the boundary as the path itself draws it. The one exception is the
// Yealm, where no node is shared: the two sides are the ends of the ferry way.
// The Helford is the same: the stages meet at Helford Passage, and the village
// side is the south end of the ferry way. So is Falmouth, where stage 30 starts
// with two ferries: Place is the far end of the second. And Plymouth: stage 35
// reaches it on the Cremyll ferry, so Cremyll is the Cornish end of that way.
// Salcombe is the same: stage 39 starts across the water at East Portlemouth,
// so both landings are the ends of the ferry way.
// Instow is the other: the stages meet by the cricket ground at the north end
// of the village, but the day ends 1.3 km on at the quay, where the bus, the
// car park and the Appledore ferry are.
export default [
  {
    slug: "minehead",
    name: "Minehead",
    kind: "endpoint",
    lat: 51.21104, lon: -3.47360,
    notes: "The official start of the path, on the seafront",
  },
  {
    slug: "porlock-weir",
    name: "Porlock Weir",
    kind: "endpoint",
    lat: 51.21911, lon: -3.62809,
    notes: "Small harbour; pebble beach, pub and a public car park",
  },
  {
    slug: "lynmouth",
    name: "Lynmouth",
    kind: "endpoint",
    lat: 51.23080, lon: -3.83058,
    notes: "Harbour village at the foot of the cliff railway up to Lynton",
  },
  {
    slug: "combe-martin",
    name: "Combe Martin",
    kind: "endpoint",
    lat: 51.20658, lon: -4.03783,
  },
  {
    slug: "woolacombe",
    name: "Woolacombe",
    kind: "endpoint",
    lat: 51.17244, lon: -4.20768,
  },
  {
    slug: "braunton",
    name: "Braunton",
    kind: "endpoint",
    lat: 51.10135, lon: -4.16258,
  },
  {
    slug: "instow",
    name: "Instow",
    kind: "endpoint",
    // The end of the section 6 route, by The Quay bus stop, which has no services.
    lat: 51.05138, lon: -4.18137,
    notes: "The quay: toilets, car park and the seasonal ferry to Appledore. Buses stop 300 m south, at Marine Parade towards Barnstaple and Down Road towards Bideford",
  },
  {
    slug: "westward-ho",
    name: "Westward Ho!",
    kind: "endpoint",
    lat: 51.04004, lon: -4.24724,
  },
  {
    slug: "clovelly",
    name: "Clovelly",
    kind: "endpoint",
    lat: 50.99879, lon: -4.40093,
  },
  {
    slug: "hartland-quay",
    name: "Hartland Quay",
    kind: "endpoint",
    lat: 50.99429, lon: -4.53386,
  },
  {
    slug: "bude",
    name: "Bude",
    kind: "endpoint",
    lat: 50.82873, lon: -4.54684,
  },
  {
    slug: "crackington-haven",
    name: "Crackington Haven",
    kind: "endpoint",
    lat: 50.74114, lon: -4.63196,
  },
  {
    slug: "tintagel",
    name: "Tintagel",
    kind: "endpoint",
    lat: 50.66783, lon: -4.75770,
  },
  {
    slug: "port-isaac",
    name: "Port Isaac",
    kind: "endpoint",
    lat: 50.59193, lon: -4.83220,
  },
  {
    slug: "padstow",
    name: "Padstow",
    kind: "endpoint",
    lat: 50.54257, lon: -4.93619,
  },
  {
    slug: "porthcothan",
    name: "Porthcothan",
    kind: "endpoint",
    lat: 50.50823, lon: -5.02219,
  },
  {
    slug: "newquay",
    name: "Newquay",
    kind: "endpoint",
    lat: 50.41338, lon: -5.08655,
  },
  {
    slug: "perranporth",
    name: "Perranporth",
    kind: "endpoint",
    lat: 50.34593, lon: -5.15491,
  },
  {
    slug: "portreath",
    name: "Portreath",
    kind: "endpoint",
    lat: 50.26120, lon: -5.28850,
  },
  {
    slug: "hayle",
    name: "Hayle",
    kind: "endpoint",
    lat: 50.18482, lon: -5.42111,
  },
  {
    slug: "st-ives",
    name: "St Ives",
    kind: "endpoint",
    lat: 50.21453, lon: -5.48716,
  },
  {
    slug: "pendeen",
    name: "Pendeen",
    kind: "endpoint",
    lat: 50.16467, lon: -5.67033,
  },
  {
    slug: "sennen-cove",
    name: "Sennen Cove",
    kind: "endpoint",
    lat: 50.07802, lon: -5.69947,
  },
  {
    slug: "lamorna",
    name: "Lamorna",
    kind: "endpoint",
    lat: 50.06270, lon: -5.56431,
  },
  {
    slug: "marazion",
    name: "Marazion",
    kind: "endpoint",
    lat: 50.12391, lon: -5.45916,
  },
  {
    slug: "porthleven",
    name: "Porthleven",
    kind: "endpoint",
    lat: 50.08534, lon: -5.31777,
  },
  {
    slug: "the-lizard",
    name: "The Lizard",
    kind: "endpoint",
    lat: 49.95958, lon: -5.20667,
  },
  {
    slug: "coverack",
    name: "Coverack",
    kind: "endpoint",
    lat: 50.02277, lon: -5.09550,
  },
  {
    // The south end of OSM ferry way 148393378, the jetty at Helford Point.
    slug: "helford-village",
    name: "Helford, village side",
    kind: "endpoint",
    lat: 50.09556, lon: -5.13405,
    notes: "The ferry jetty at Helford Point, below the village. Helford Passage is 600 m across the river and about 21 km round by Gweek",
  },
  {
    // Where OSM's stage relations for sections 28 and 29 meet, by the Helford
    // Passage ferry landing (the north end of way 148393378 is 50 m south).
    slug: "helford-passage",
    name: "Helford, Passage side",
    kind: "endpoint",
    lat: 50.10034, lon: -5.12835,
    notes: "Helford Passage, by the Ferry Boat Inn, where the Helford ferry lands from Helford village",
  },
  {
    slug: "falmouth",
    name: "Falmouth",
    kind: "endpoint",
    lat: 50.15672, lon: -5.06976,
  },
  {
    // The Place end of OSM ferry way 352272841, the Place ferry.
    slug: "place",
    name: "Place",
    kind: "endpoint",
    lat: 50.15233, lon: -5.00467,
    notes: "The Place ferry landing on Place Creek, across the Percuil river from St Mawes, where the path resumes on the Roseland after the ferries from Falmouth",
  },
  {
    slug: "portloe",
    name: "Portloe",
    kind: "endpoint",
    lat: 50.21834, lon: -4.89175,
  },
  {
    slug: "mevagissey",
    name: "Mevagissey",
    kind: "endpoint",
    lat: 50.26946, lon: -4.78705,
  },
  {
    slug: "par",
    name: "Par",
    kind: "endpoint",
    lat: 50.35119, lon: -4.70229,
  },
  {
    slug: "polperro",
    name: "Polperro",
    kind: "endpoint",
    lat: 50.33147, lon: -4.51840,
  },
  {
    slug: "portwrinkle",
    name: "Portwrinkle",
    kind: "endpoint",
    lat: 50.36235, lon: -4.30689,
  },
  {
    // The Cremyll end of OSM ferry way 9644007, the Cremyll ferry.
    slug: "cremyll",
    name: "Cremyll",
    kind: "endpoint",
    lat: 50.36083, lon: -4.17389,
    notes: "The Cremyll ferry landing below Mount Edgcumbe, where the ferry crosses the mouth of the Tamar to Plymouth",
  },
  {
    slug: "plymouth",
    name: "Plymouth",
    kind: "endpoint",
    lat: 50.36562, lon: -4.16352,
  },
  {
    slug: "yealm-wembury",
    name: "River Yealm, Wembury side",
    kind: "endpoint",
    lat: 50.31249, lon: -4.05343,
    notes: "Warren Point, where the path meets the Yealm ferry. The Noss Mayo landing is 180 m across the water and a long way round by road",
  },
  {
    slug: "yealm-noss-mayo",
    name: "River Yealm, Noss Mayo side",
    kind: "endpoint",
    lat: 50.31219, lon: -4.05096,
    notes: "Wide Slip on Passage Road, where the Yealm ferry lands from Warren Point",
  },
  {
    slug: "bigbury-on-sea",
    name: "Bigbury-on-Sea",
    kind: "endpoint",
    lat: 50.28264, lon: -3.89248,
  },
  {
    // The Salcombe end of OSM ferry way 14020574, the East Portlemouth ferry,
    // at the ferry steps by Whitestrand.
    slug: "salcombe",
    name: "Salcombe",
    kind: "endpoint",
    lat: 50.23635, lon: -3.76610,
    notes: "The ferry steps in Salcombe, where the East Portlemouth ferry leaves: the far bank is 400 m across the water and about 20 km round by Kingsbridge",
  },
  {
    // The east end of the same ferry way, where section 39 starts.
    slug: "east-portlemouth",
    name: "East Portlemouth",
    kind: "endpoint",
    lat: 50.23489, lon: -3.76393,
    notes: "The ferry landing below East Portlemouth, across the estuary from Salcombe",
  },
  {
    slug: "torcross",
    name: "Torcross",
    kind: "endpoint",
    lat: 50.26628, lon: -3.65238,
  },
  {
    // The Dartmouth end of OSM Lower Ferry way 151746723 (node 11654530); the
    // stage junction sat on the Kingswear side, which put every Dartmouth bus
    // stop across the river.
    slug: "dartmouth",
    name: "Dartmouth",
    kind: "endpoint",
    lat: 50.34894, lon: -3.57753,
  },
  {
    slug: "brixham",
    name: "Brixham",
    kind: "endpoint",
    lat: 50.39616, lon: -3.51291,
  },
  {
    slug: "babbacombe",
    name: "Babbacombe",
    kind: "endpoint",
    lat: 50.48405, lon: -3.52161,
  },
  {
    slug: "exmouth",
    name: "Exmouth",
    kind: "endpoint",
    lat: 50.61684, lon: -3.42290,
  },
  {
    slug: "sidmouth",
    name: "Sidmouth",
    kind: "endpoint",
    lat: 50.68047, lon: -3.23130,
  },
  {
    slug: "seaton",
    name: "Seaton",
    kind: "endpoint",
    lat: 50.70352, lon: -3.06160,
  },
  {
    slug: "seatown",
    name: "Seatown",
    kind: "endpoint",
    lat: 50.72208, lon: -2.82238,
  },
  {
    slug: "abbotsbury",
    name: "Abbotsbury",
    kind: "endpoint",
    lat: 50.65987, lon: -2.59883,
  },
  {
    slug: "ferrybridge",
    name: "Ferrybridge",
    kind: "endpoint",
    lat: 50.58546, lon: -2.47222,
  },
  {
    slug: "lulworth-cove",
    name: "Lulworth Cove",
    kind: "endpoint",
    lat: 50.61868, lon: -2.24980,
  },
  {
    slug: "worth-matravers",
    name: "Worth Matravers",
    kind: "endpoint",
    lat: 50.59975, lon: -2.05565,
  },
  {
    slug: "south-haven-point",
    name: "South Haven Point",
    kind: "endpoint",
    lat: 50.68304, lon: -1.94876,
    notes: "The end of the path, at the Sandbanks chain ferry",
  },
];
