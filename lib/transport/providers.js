// Operators and firms, entered once and referenced wherever they're relevant.
//
//   kind      "operator" runs the scheduled routes in routes.js and is named
//             by them. "transfer" will drive you or your bags on request, has
//             no timetable, and is offered by coverage instead.
//   services  ["passenger", "baggage"] — a firm may do either or both. Baggage
//             firms earn their place when they also carry people, as Lyn
//             Valley Taxi does; a bags-only courier is no use on a van-based
//             walk, which is why Luggage Transfers Ltd isn't here.
//   covers    { lat, lon, radiusKm } for a local firm, or { everywhere: true }
//             for one working the whole path. Only meaningful for "transfer".
//   dogs      true | false | null. Same rule as anywhere else: never guessed.
export default [
  {
    slug: "stagecoach-south-west",
    name: "Stagecoach South West",
    kind: "operator",
    url: "https://www.stagecoachbus.com/",
    phone: null,
    // Attribution for the Exmoor coast service had moved around — Exmoor
    // National Park's 2025 timetable still called it "EX1 Exmoor Explorer,
    // First Bus". Stagecoach's own 2026 timetables settle it.
    notes: "Dogs usually carried, at the driver's discretion",
    verified: "2026-09-13",
  },
  {
    slug: "atwest",
    name: "Atwest",
    kind: "operator",
    url: null,
    phone: null,
    notes: "Community transport operator around Minehead and Porlock",
    verified: null,
  },
  {
    slug: "lyn-valley-taxi",
    name: "Lyn Valley Taxi",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // Based in Lynton. 20 km reaches Lynmouth, County Gate and Porlock Weir
    // but stops short of Minehead, which matches the areas they list.
    covers: { lat: 51.22942, lon: -3.83651, radiusKm: 20 },
    dogs: true,
    hours: "7am – 11pm, other times by arrangement",
    url: "https://www.lynvalleytaxi.co.uk/",
    phone: null,
    dogs_note: "Well behaved dogs",
    notes: "Drop-offs and pick-ups for walkers as well as luggage transfers, around Lynton, Lynmouth, Porlock, Brendon, County Gate, Simonsbath and Combe Martin. Five and seven seaters",
    verified: "2026-09-13",
  },
  {
    slug: "riverside-taxis-lynton",
    name: "Riverside Taxis",
    kind: "transfer",
    services: ["passenger"],
    // 4 Park Street, Lynton. 20 km reaches Combe Martin, which they list.
    covers: { lat: 51.22890, lon: -3.83798, radiusKm: 20 },
    dogs: null,
    url: "https://riversidetaxis-lynton.co.uk/",
    phone: "01598 753442",
    email: "riverside-taxis1@btconnect.com",
    notes: "Family firm, 4, 6 and 8 seaters, covering Lynton, Brendon, Porlock, Minehead and Combe Martin. The site also shows Brighton numbers left over from a template — use the 01598 one. Walker drop-offs not mentioned on their own pages",
    verified: "2026-09-13",
  },
  {
    slug: "go2-taxi-ilfracombe",
    name: "GO2 Taxi",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // Ilfracombe. 25 km reaches Lynmouth; they claim Minehead to Westward Ho!
    // but say peak times may be local only.
    covers: { lat: 51.20767, lon: -4.12547, radiusKm: 25 },
    dogs: true,
    url: "http://www.go2taxi.co.uk/SWCPwalking.html",
    phone: "01271 545007",
    email: "go2taxi@mail.com",
    notes: "Six-seater. Coast path walker and luggage transfers, dog friendly, possibly local only at peak times. Mobile 07393 876629. The site hasn't changed since 2019, so whether it's still trading needs a call",
    verified: null,
  },
  {
    slug: "beach-runner-taxi",
    name: "Beach Runner Taxi",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // Woolacombe. They cover Minehead to Bideford; 30 km from Woolacombe
    // reaches Lynmouth but not Porlock or Minehead.
    covers: { lat: 51.17282, lon: -4.20515, radiusKm: 30 },
    dogs: true,
    dogs_note: "Welcome with owners, no extra charge",
    hours: "Any reasonable time",
    url: "https://www.woolacombetaxi.co.uk/south-west-coastal-path",
    phone: "07825 163284",
    notes: "Coast path transfers all year, Minehead to Bideford, groups up to 14 with luggage",
    verified: "2026-09-13",
  },
  {
    slug: "ycet",
    name: "Yealm Community Electric Transport",
    kind: "operator",
    url: "https://www.ycet.co.uk/",
    phone: "07399 067942",
    email: "etaxi@ycet.co.uk",
    notes: "Electric foot ferry and water taxi between Wembury, Noss Mayo and Newton Ferrers. Also on VHF channel 69",
    verified: null,
  },
  {
    slug: "taw-and-torridge",
    name: "Taw & Torridge Coaches",
    kind: "operator",
    url: "https://www.tawandtorridge.co.uk/Service-Routes",
    phone: "01271 859533",
    notes: "Runs the Monday–Saturday 31, Ilfracombe to Woolacombe. Also on 01805 603400",
    verified: "2026-09-13",
  },
  {
    slug: "independent-coach-company",
    name: "Independent Coach Company",
    kind: "operator",
    url: null,
    phone: null,
    notes: "Runs Ilfracombe's town and village services 33–36, some only twice a week",
    verified: null,
  },
  {
    slug: "woolacombe-taxis",
    name: "Woolacombe Taxis",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // EX34 7AN via postcodes.io. 20 km reaches Combe Martin; they don't list Lynton.
    covers: { lat: 51.17153, lon: -4.18317, radiusKm: 20 },
    dogs: true,
    dogs_note: "Pooch friendly",
    hours: "Day or night; book late journeys ahead",
    url: "https://www.woolacombetaxis.co.uk/",
    phone: "01271 871444",
    email: "hello@woolacombetaxis.co.uk",
    notes: "Family firm. Covers Woolacombe, Mortehoe, Ilfracombe, Combe Martin, Braunton, Croyde and Barnstaple. Coast path luggage transfers; walker drop-offs not mentioned as such",
    verified: "2026-09-13",
  },
  {
    slug: "ezee-cabs",
    name: "Ezee Cabs",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // No address on the site; the OSM place node for Woolacombe. They list
    // Ilfracombe, Lynton, Lynmouth, Braunton, Instow and Westward Ho!.
    covers: { lat: 51.17282, lon: -4.20515, radiusKm: 30 },
    dogs: true,
    url: "https://ezeecabs.co.uk/",
    phone: "01271 871000",
    email: "hello@ezeecabs.co.uk",
    notes: "Taxis and minibuses from Woolacombe. Walker drop-offs along the North Devon coast and luggage transfers. Mobile 07966 548303",
    verified: "2026-09-13",
  },
  {
    slug: "a-taxi-ilfracombe",
    name: "A Taxi Ilfracombe",
    kind: "transfer",
    services: ["passenger"],
    // EX34 8LU via postcodes.io.
    covers: { lat: 51.20075, lon: -4.13007, radiusKm: 20 },
    dogs: null,
    hours: "Mon–Fri 8am – 5pm, Sun 9am – 5pm. Closed Saturdays",
    url: "https://www.ataxiilfracombe.co.uk/",
    phone: "01271 865321",
    notes: "Covers anywhere in North Devon. Nothing on walkers, luggage or dogs. Site last updated 2022",
    verified: "2026-09-13",
  },
  {
    slug: "saunton-taxis",
    name: "Saunton Taxis",
    kind: "transfer",
    services: ["passenger"],
    // 23 Saunton Road, EX33 1HD via postcodes.io. They claim all of North
    // Devon; 25 km reaches Ilfracombe and Westward Ho!.
    covers: { lat: 51.10906, lon: -4.17048, radiusKm: 25 },
    dogs: null,
    hours: "24 hours when pre-booked",
    url: "http://sauntontaxis.co.uk/",
    phone: "07890 543136",
    notes: "Drop-offs and pick-ups at coast path start and finish points. Up to six passengers. Braunton Taxis (07840 648766) shares the address and website, so appears to be the same firm",
    verified: "2026-09-13",
  },
  {
    slug: "braunton-croyde-taxis",
    name: "Braunton & Croyde Taxis",
    kind: "transfer",
    services: ["passenger"],
    // No street address on the site; OSM place node 206388734 for Braunton.
    covers: { lat: 51.10833, lon: -4.16114, radiusKm: 20 },
    dogs: null,
    url: "http://www.brauntonandcroydetaxis.co.uk/",
    phone: "01271 440450",
    notes: "Local taxis around Braunton and Croyde, plus station and airport runs. Mobile and WhatsApp 07788 726660. Nothing on walkers or luggage",
    verified: "2026-09-13",
  },
  {
    slug: "knowle-taxi-service",
    name: "Knowle Taxi Service",
    kind: "transfer",
    services: ["passenger"],
    // Greencote, Knowle, EX33 2LY from directories; position via postcodes.io.
    covers: { lat: 51.12518, lon: -4.15493, radiusKm: 20 },
    dogs: null,
    url: "https://www.facebook.com/KTSKnowle/",
    phone: "01271 815666",
    notes: "Private hire from Knowle, just north of Braunton. No website of its own; details from directories, so ring to check it's still trading",
    verified: null,
  },
  {
    slug: "appledore-instow-ferry",
    name: "Appledore & Instow Ferry",
    kind: "operator",
    url: "https://www.appledoreinstowferry.com/",
    // The site's contact page returns a server error; no phone or email found.
    phone: null,
    notes: "Not-for-profit, run by volunteers. Doesn't run in bad weather or during amber heat warnings. Status on the site, Facebook and Instagram",
    verified: "2026-09-13",
  },
  {
    slug: "all-area-taxis-bideford",
    name: "All Area Taxis",
    kind: "transfer",
    services: ["passenger"],
    // 4a Bridgeland Street, EX39 2PS via postcodes.io. 20 km reaches Braunton
    // and Barnstaple.
    covers: { lat: 51.01975, lon: -4.20486, radiusKm: 20 },
    dogs: null,
    hours: "Mon–Thu 7am – midnight, Fri–Sat 24 hours, Sun 7am – midnight",
    url: "https://www.allareataxis.co.uk/taxis-for-walkers",
    phone: "01237 470211",
    email: "allareataxis@live.co.uk",
    notes: "Bideford. Coast path drop-offs and pick-ups, with room for rucksacks. Nothing on luggage-only transfers or dogs. Not to be confused with Number 6 Taxis (01237 666666), also in Bideford",
    verified: "2026-09-13",
  },
  {
    slug: "a1-taxi-barnstaple",
    name: "A1 Taxi Service",
    kind: "transfer",
    services: ["passenger"],
    // 96 Boutport Street, EX31 1SX via postcodes.io. 20 km reaches Instow,
    // Braunton and Westward Ho!.
    covers: { lat: 51.08028, lon: -4.05837, radiusKm: 20 },
    dogs: null,
    url: "https://www.a1taxibarnstaple.com/",
    phone: "01271 322922",
    email: "info@a1taxibarnstaple.com",
    notes: "Barnstaple, over 30 years. Hybrids including six-seaters; office on Boutport Street. Also books by app. Nothing on walkers, luggage or dogs",
    verified: "2026-09-13",
  },
  {
    slug: "number-4-taxi",
    name: "Number 4 Taxi",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site; OSM place node 18578704 for Barnstaple.
    covers: { lat: 51.08041, lon: -4.06005, radiusKm: 25 },
    dogs: null,
    hours: "24 hours",
    url: "https://number4taxi.co.uk/",
    phone: "01271 444444",
    email: "info@number4taxi.co.uk",
    notes: "Barnstaple private hire, formed May 2025. Names Instow, Fremington, Braunton, Appledore and Westward Ho! among the places it covers. Nothing on walkers, luggage or dogs",
    verified: "2026-09-13",
  },
  {
    slug: "number-6-taxis",
    name: "Number 6 Taxis",
    kind: "transfer",
    services: ["passenger"],
    // 2 Queen Street, EX39 2JG via postcodes.io. 20 km reaches Instow,
    // Westward Ho! and Barnstaple.
    covers: { lat: 51.01900, lon: -4.20486, radiusKm: 20 },
    dogs: null,
    url: "https://www.number6taxi.co.uk/",
    phone: "01237 666666",
    notes: "Bideford. Claims the town's largest fleet; fixed prices on pre-booked longer journeys. Nothing on walkers, luggage or dogs",
    verified: "2026-09-13",
  },
  {
    slug: "cj-taxis-northam",
    name: "CJ Taxis",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // "Northam, Bideford"; OSM place node 33795483 for Northam.
    covers: { lat: 51.04011, lon: -4.21360, radiusKm: 20 },
    dogs: null,
    hours: "Until the early hours most days",
    url: "http://www.cjtaxi.co.uk/",
    phone: "07971 111843",
    email: "info@cjtaxi.co.uk",
    notes: "Caroline & Jim's Taxi, Northam. Bideford, Westward Ho!, Northam and Barnstaple; baggage transfers for walkers. The site is dated 2020, so ring to check it's still trading",
    verified: null,
  },
  {
    slug: "silverline-cabs",
    name: "Silverline Cabs",
    kind: "transfer",
    services: ["passenger"],
    // Westward Ho!; OSM place node 531657045. They claim Minehead to Newquay;
    // 30 km reaches Instow, Braunton and Hartland Quay.
    covers: { lat: 51.04117, lon: -4.23151, radiusKm: 30 },
    dogs: null,
    hours: "24 hours",
    url: "https://silverlinecabs.taxi/south-west-coast-path/",
    phone: "01237 722044",
    notes: "Westward Ho!. Coast path drop-offs and pick-ups between Minehead and Newquay; 8-seater with luggage space. Nothing on luggage-only transfers or dogs",
    verified: "2026-09-13",
  },
  {
    slug: "go-cornwall-bus",
    name: "Go Cornwall Bus",
    kind: "operator",
    url: "https://www.transportforcornwall.co.uk/",
    phone: null,
    notes: "Runs Transport for Cornwall buses, including the 1, 1A, 4, 4A, 4B, 6, 7, 7A, 8, 14, 16, 16A, 17, 48, 49, 56, 57, 58, 85, 87, 95, 96, 217, 218 and 219",
    verified: "2026-09-14",
  },
  {
    slug: "trevs-taxi-bude",
    name: "Trev's Taxi",
    kind: "transfer",
    services: ["passenger"],
    // Usually at the rank by The Triangle, Bude; centre of OSM way 960723554.
    // 25 km reaches Clovelly and Hartland Quay, not Westward Ho!.
    covers: { lat: 50.82944, lon: -4.54462, radiusKm: 25 },
    dogs: true,
    dogs_note: "Well-behaved dogs welcome; say when booking",
    url: "https://trevstaxi.co.uk/",
    phone: "07799 663217",
    email: "hello@trevstaxi.co.uk",
    notes: "One-man firm in Bude since 2011; Coast Path passport stamper. Walker drop-offs at the start (preferred) or pick-ups at the end, including Clovelly and Hartland Quay. One hybrid car. Cash preferred, most cards taken. Nothing on luggage-only transfers",
    verified: "2026-09-13",
  },
  {
    slug: "barbary-cars",
    name: "Barbary Cars",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // "Based at Morwenstow"; OSM place node 1758201377. 30 km reaches
    // Westward Ho! and Bude, the ends of the runs listed.
    covers: { lat: 50.90900, lon: -4.55225, radiusKm: 30 },
    dogs: true,
    dogs_note: "Well-behaved dogs welcome; mention when booking",
    hours: "Daytime; evenings and early starts by prior arrangement",
    url: "https://barbarycoast.uk/private-hire-taxi-morwenstow-welcombe/",
    phone: "07968 728354",
    email: "lee@barbarycoast.uk",
    notes: "One car, up to four passengers, pre-booked only. Mostly coast path walkers: Appledore to Clovelly from £50, Clovelly to Hartland Quay from £30, Hartland Quay to Morwenstow and Morwenstow to Bude from £40. Luggage moved between B&Bs on request. WhatsApp on the same number is quickest. Summer weekends and school holidays fill up",
    verified: "2026-09-13",
  },
  {
    slug: "cabaroo-bude",
    name: "Cabaroo",
    kind: "transfer",
    services: ["passenger"],
    // Taxi Line, Lansdown Road, EX23 8BH from a directory; position via
    // postcodes.io. 20 km reaches Hartland Quay and Crackington Haven.
    covers: { lat: 50.82983, lon: -4.54374, radiusKm: 20 },
    dogs: null,
    url: null,
    phone: "01288 683088",
    notes: "Bude. 4, 6 and 8 seaters, any distance, stations and airports. Visit Bude's listing says dogs welcome; the firm has no site of its own to confirm it. Older directories list the same number as Bayside Taxis. Nothing on walkers or luggage",
    verified: null,
  },
  {
    slug: "indigo-taxis-bude",
    name: "Indigo Taxis",
    kind: "transfer",
    services: ["passenger"],
    // 2 Surf Rise, Maer Down, EX23 8NG from a directory; position via
    // postcodes.io. 20 km reaches Hartland Quay.
    covers: { lat: 50.83668, lon: -4.55080, radiusKm: 20 },
    dogs: null,
    url: "https://www.facebook.com/p/Indigo-Taxis-100068861974432/",
    phone: "07811 969844",
    notes: "Bude. An 8-seater with plenty of luggage space, dog friendly, on Visit Bude's listing. Facebook only, so nothing confirmed by the firm; a directory says it's now part of the Cabaroo group. Worth asking about coast path drop-offs and bags",
    verified: null,
  },
  {
    slug: "edds-taxi-bude",
    name: "Edd's Taxi",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site; OSM place node 33795930 for Bude.
    covers: { lat: 50.82853, lon: -4.54694, radiusKm: 20 },
    dogs: null,
    url: "http://www.edds.taxi/",
    phone: "07486 868636",
    notes: "Bude and surrounding areas. 4 and 6 seaters, airport transfers. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "d-and-d-taxis-bude",
    name: "D&D Taxis",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site; OSM place node 33795930 for Bude.
    covers: { lat: 50.82853, lon: -4.54694, radiusKm: 20 },
    dogs: null,
    url: "https://www.danddtaxisbude.co.uk/",
    phone: "07895 527605",
    notes: "Bude, three taxis. Airport and station runs, nights out, school runs; prebook, weekends fill fast. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "echo-north-cornwall-taxi",
    name: "Echo North Cornwall Taxi",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site; OSM place node 33795930 for Bude.
    covers: { lat: 50.82853, lon: -4.54694, radiusKm: 20 },
    dogs: null,
    url: "https://echonorthcornwalltaxicom.wordpress.com/",
    phone: "07432 074306",
    notes: "Bude. Local taxi; mentions trips out along the North Cornwall coast. Also on WhatsApp. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "avida-taxis",
    name: "Avida Taxis",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site; OSM place node 287252752 for Camelford. 30 km
    // reaches Crackington Haven and Bude, both named, and Tintagel.
    covers: { lat: 50.62098, lon: -4.68033, radiusKm: 30 },
    dogs: null,
    url: "https://www.avidataxis.com/",
    phone: "07802 194153",
    email: "avida.taxis@btinternet.com",
    notes: "Camelford. Names Tintagel, Camelford, Port Isaac, Bude and Padstow among the places it covers; a review on the site mentions a run from Otterham to Crackington Haven and back. Six-seaters, station and airport runs. WhatsApp on the same number. £5 for cancelling with less than 24 hours' notice. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "boscars",
    name: "BosCars",
    kind: "transfer",
    services: ["passenger"],
    // Penally Hill, Boscastle, on Visit Boscastle's listing; OSM place node
    // 401881392 for Boscastle. 20 km reaches Crackington Haven, Tintagel and Bude.
    covers: { lat: 50.68954, lon: -4.69237, radiusKm: 20 },
    dogs: null,
    url: null,
    phone: "07790 983911",
    notes: "Boscastle. One car, a saloon with a good boot, on Visit Boscastle's 2021 listing. Its site, boscars.uk, no longer resolves; directories and a Facebook page still list it, so ring to check it's still trading. Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "dela-cabs",
    name: "Dela Cabs",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // No address on the site; OSM node 6138275491 for Delabole. 30 km reaches
    // Crackington Haven, Tintagel and Bude, all named on the site.
    covers: { lat: 50.62336, lon: -4.73234, radiusKm: 30 },
    dogs: true,
    dogs_note: "Dogs welcome, £2 extra",
    hours: "Mon–Thu 7am – 11pm, Fri–Sat 7am – late, Sun 9am – 11pm; outside those by booking",
    url: "http://www.delacabs.co.uk/",
    phone: "07929 220567",
    email: "johnslobb@hotmail.com",
    notes: "Delabole, formerly Slate Cabs. An 8-seat minibus: private hire, station and airport runs, courier work, baggage transfers and tours. Says it's in easy reach of the coast path for walks. Second number 07739 950092 on the contact page. The site looks unchanged for years, so ring to check it's still running",
    verified: "2026-09-14",
  },
  {
    slug: "camelot-taxis-tintagel",
    name: "Camelot Taxis",
    kind: "transfer",
    services: ["passenger"],
    // 31 Westground Way, PL34 0BH from a directory; position via postcodes.io.
    // 20 km reaches Crackington Haven.
    covers: { lat: 50.66656, lon: -4.74180, radiusKm: 20 },
    dogs: null,
    url: null,
    phone: "01840 770172",
    notes: "Tintagel. Directory listings only, with no site of its own and nothing recent to show it's still trading, so ring first. Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "jais-private-hire",
    name: "Jais Private Hire",
    kind: "transfer",
    services: ["passenger"],
    // PL34 0AQ from a directory, which calls it Bossiney; postcodes.io puts the
    // postcode in Tintagel village. 20 km reaches Crackington Haven.
    covers: { lat: 50.66278, lon: -4.74428, radiusKm: 20 },
    dogs: null,
    url: null,
    phone: "07446 206280",
    notes: "Tintagel. Yell's listing says dog friendly, luggage transfers and train and coach pickups; no site of its own to confirm any of it. Worth asking about walkers and bags",
    verified: null,
  },
  {
    slug: "star-taxis-port-isaac",
    name: "Star Taxis",
    kind: "transfer",
    services: ["passenger"],
    // No address; OSM place node 280487798 for Port Isaac. 20 km reaches Tintagel.
    covers: { lat: 50.59388, lon: -4.82999, radiusKm: 20 },
    dogs: null,
    url: "https://www.facebook.com/p/STAR-TAXIS-61570456231053/",
    phone: "07376 987073",
    notes: "Port Isaac. Independent owner-driver, up to four passengers, short and long journeys, stations and airports. Facebook only; the number is from the Old School Hotel's list of local taxis. Search results quoting the page say well-behaved dogs ride in the boot, not confirmed by the firm. Nothing on walkers or luggage",
    verified: null,
  },
  {
    slug: "abby-taxis-wadebridge",
    name: "Abby Taxis",
    kind: "transfer",
    services: ["passenger"],
    // PL27 7EX on the contact page; position via postcodes.io. 25 km reaches
    // Port Isaac, Tintagel and Boscastle, all named on the site.
    covers: { lat: 50.51901, lon: -4.85000, radiusKm: 25 },
    dogs: null,
    url: "https://www.abbytaxiswadebridge.co.uk/wadebridge-taxis/",
    phone: "01208 815399",
    email: "info@parnellstaxis.co.uk",
    notes: "Wadebridge, run by Parnells Taxis, which also has a Bodmin base. Says it returns coast path walkers to their car or accommodation after the day's walk, and takes those on 4 or 5 day walks as far as Minehead. 4 to 8 seaters, pre-book; WhatsApp too. The site also gives 01726 212120. Nothing on luggage-only transfers or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "midas-taxis-wadebridge",
    name: "Midas Taxis",
    kind: "transfer",
    services: ["passenger"],
    // "The Taxi Rank, Wadebridge"; OSM place node 287252204 for Wadebridge.
    // 25 km reaches Port Isaac, Tintagel and Boscastle, all named on the site.
    covers: { lat: 50.51714, lon: -4.83402, radiusKm: 25 },
    dogs: null,
    url: "https://www.wadebridgetaxis.co.uk/",
    phone: "01208 812345",
    notes: "Wadebridge. Names Port Isaac, Camelford, Tintagel and Boscastle among the places it covers, and mentions hikers on the coast. Electric cars; stations and airports. Second number 07425 629830. Nothing on luggage or dogs. Not Wadebridge Taxis, whose site is wadebridgetaxis.com",
    verified: "2026-09-14",
  },
  {
    slug: "wadebridge-taxis",
    name: "Wadebridge Taxis",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site; OSM place node 287252204 for Wadebridge. 20 km
    // reaches Port Isaac, named on the site, and Tintagel.
    covers: { lat: 50.51714, lon: -4.83402, radiusKm: 20 },
    dogs: null,
    url: "https://www.wadebridgetaxis.com/",
    phone: "01208 812725",
    email: "wadebridgetaxis@talktalk.net",
    notes: "Wadebridge, family run. 4, 6 and 8 seaters; Port Isaac among its most popular runs. Stations, airports, restaurants. Cash or bank transfer. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "marks-taxis-wadebridge",
    name: "Mark's Taxis",
    kind: "transfer",
    services: ["passenger"],
    // 19 Trevanion Close, PL27 7PU on the contact page; position via
    // postcodes.io. 25 km reaches Port Isaac and Boscastle, both named.
    covers: { lat: 50.51152, lon: -4.83697, radiusKm: 25 },
    dogs: null,
    url: "https://www.markstaxis.co.uk/",
    phone: "07976 968011",
    email: "markhebburn011@btinternet.com",
    notes: "Wadebridge. 4 and 8 seaters; day trips, stations and airports. Names Port Isaac and Boscastle among the places it covers. Landline 01208 815264. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "mid-cornwall-taxis",
    name: "Mid Cornwall Taxis",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // No address on the site; OSM place node 29289583 for Padstow. 15 km
    // reaches Port Isaac, the furthest place it names, not Tintagel.
    covers: { lat: 50.54038, lon: -4.93699, radiusKm: 15 },
    dogs: true,
    dogs_note: "Dog friendly: blankets and treats in every car, a loading ramp, and a bed in the Berlingo",
    url: "https://www.midcornwalltaxis.co.uk/",
    phone: "07785 233777",
    email: "info@midcornwalltaxis.co.uk",
    notes: "Padstow. Lists Port Isaac, Polzeath, Rock and Wadebridge among its regular runs. 4, 7 and 8 seaters, cash and card. Offers luggage transfers; Padstow's tourist information site says they're aimed at coast path walkers. Call or WhatsApp",
    verified: "2026-09-14",
  },
  {
    slug: "padstow-harbour-commissioners",
    name: "Padstow Harbour Commissioners",
    kind: "operator",
    url: "https://padstow-harbour.co.uk/ferry/",
    phone: "07773 081574",
    email: "padstowharbour@padstow-harbour.co.uk",
    notes: "Runs the Padstow – Rock ferry, the Black Tor Ferry. The number is the ferry's own; the Harbour Office is 01841 532239",
    verified: "2026-09-14",
  },
  {
    slug: "wavehunters",
    name: "Wavehunters",
    kind: "operator",
    url: "https://www.wavehunters.co.uk/water-taxi-service-in-rock-padstow/",
    phone: "07778 105297",
    email: "info@wavehunters.co.uk",
    notes: "Surf school and boat trip firm that runs the Rock Water Taxi, the evening crossing between Rock and Padstow. The number is the evening skipper's; daytime 07507 948025",
    verified: "2026-09-14",
  },
  {
    slug: "ocean-taxis-cornwall",
    name: "Ocean Taxis Cornwall",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site beyond Padstow; OSM place node 29289583 for
    // Padstow, as for Mid Cornwall Taxis. 15 km reaches Port Isaac, Polzeath
    // and Rock, all named on the site.
    covers: { lat: 50.54038, lon: -4.93699, radiusKm: 15 },
    dogs: null,
    url: "https://oceantaxiscornwall.com/",
    phone: "07980 001323",
    notes: "Padstow. Family run, owner-driver. Station and airport runs: from Bodmin Parkway £60 to Padstow or Port Isaac, £55 to Rock or Polzeath, up to four passengers, 8am – 11pm, booked ahead. Cash or mobile payment; WhatsApp on the same number. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "sw-taxis-rock",
    name: "SW Taxis",
    kind: "transfer",
    services: ["passenger"],
    // "Rock, Wadebridge" on the site, no street; OSM place node 1595259983 for
    // Rock. 20 km reaches Port Isaac, Padstow and Tintagel, all named.
    covers: { lat: 50.54468, lon: -4.91181, radiusKm: 20 },
    dogs: null,
    url: "https://www.swtaxis.co.uk/",
    phone: "07849 976903",
    email: "steve-swtaxis@outlook.com",
    notes: "Rock. Small local firm: long-distance, airport and local trips. Names Rock Ferry, Daymer Bay, Polzeath, Port Quin, Port Isaac, Padstow and Tintagel among the places it covers. Advance booking highly recommended. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "padstow-taxi",
    name: "Padstow Taxi",
    kind: "transfer",
    services: ["passenger"],
    // 64 Church Street, Padstow on the site, no postcode; OSM place node
    // 29289583 for Padstow. 15 km reaches Port Isaac.
    covers: { lat: 50.54038, lon: -4.93699, radiusKm: 15 },
    dogs: null,
    hours: "6am – 11pm on the site",
    url: "https://padstow-taxi.co.uk/",
    phone: "07485 217760",
    email: "padstowtaxi@gmail.com",
    notes: "Padstow. Local driver, a Ford Galaxy for up to six. Any length of trip, Bodmin Parkway and Newquay Airport, private tours. Message on the same number. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "padstow-cabs",
    name: "Padstow Cabs",
    kind: "transfer",
    services: ["passenger"],
    // 10 Holbeton Gardens, Dennis Lane, PL28 8GG from a directory; position via
    // postcodes.io. 15 km reaches Port Isaac.
    covers: { lat: 50.53640, lon: -4.94848, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "07732 372780",
    notes: "Padstow. Directory listings and Rick Stein's list of Padstow taxis only, with no site of its own, so ring to check it's still trading. Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "newquay-cab",
    name: "Newquay Cab",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // 28 Clifden Close, TR7 2EZ on the site; position via postcodes.io. 20 km
    // reaches Padstow, the furthest place on this coast it names.
    covers: { lat: 50.40964, lon: -5.07864, radiusKm: 20 },
    dogs: null,
    hours: "24 hours on the site",
    url: "https://newquaycab.com/how-to-organise-luggage-transfer-on-the-south-west-coast-path/",
    phone: "01637 226224",
    email: "info@newquaycab.com",
    notes: "Newquay, family run. Coast path pick-ups and drop-offs, and private luggage transfers straight from door to door rather than on a courier's round; names Padstow to Constantine Bay and Constantine to Newquay among its usual legs. Estate cars and minibuses up to 10 seats. Nothing from the firm on dogs",
    verified: "2026-09-14",
  },
  {
    slug: "atlantic-cabs-st-merryn",
    name: "Atlantic Cabs",
    kind: "transfer",
    services: ["passenger"],
    // 26 Primrose Drive, St Merryn, PL28 8TE from directories; position via
    // postcodes.io. 15 km reaches Padstow, Porthcothan, Newquay and Wadebridge.
    covers: { lat: 50.51193, lon: -4.98237, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "07544 544450",
    notes: "St Merryn. Only on directory listings and local lists (Rick Stein's, Trotters at Trevose, Trevibban Mill). Its site, atlanticcabs.co.uk, no longer resolves, so ring to check it's still trading. Directories describe local runs around Harlyn, Treyarnon, Constantine Bay, Porthcothan and Trevone, plus Newquay, Wadebridge and airports; one gives 01841 521508. Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "kjs-taxis-st-merryn",
    name: "KJ's Taxis",
    kind: "transfer",
    services: ["passenger"],
    // Roskean Farm, St Merryn, PL28 8JY from directories; position via
    // postcodes.io. 15 km, as for Atlantic Cabs.
    covers: { lat: 50.51538, lon: -4.97667, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "07875 637734",
    notes: "St Merryn. Only on directory listings and local lists, with no site of its own, so ring to check it's still trading. Local, long-distance and airport runs. Directories give a landline of 01841 551452; Trotters at Trevose gives 01841 521982, and lists the same number for \"St Merryn Taxis\" (07817 240481). Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "coastline-travel",
    name: "Coastline Travel",
    kind: "transfer",
    services: ["passenger"],
    // "Cornwall Airport Newquay, Carloggas, Newquay, TR8 4RQ" on the site;
    // position via postcodes.io. 20 km reaches Porthcothan, Newquay, Padstow
    // and Perranporth.
    covers: { lat: 50.44585, lon: -5.00047, radiusKm: 20 },
    dogs: null,
    hours: "24 hours, every day, on the site",
    url: "https://coastlinetravel.co.uk/",
    phone: "01637 860006",
    notes: "Newquay Airport's official taxi firm, based at the airport, 7 km from Porthcothan. 18 vehicles: cars, estates, people carriers, 8 and 16-seat minibuses, wheelchair-accessible vehicles. Local Newquay taxis and tours as well as airport runs; pre-booking recommended. Partner firm of A2B Cornwall. Booking app. Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "a2b-newquay",
    name: "A2B Newquay",
    kind: "transfer",
    services: ["passenger"],
    // OSM node 1920345256, "A2B taxi office", by Newquay station. The site gives
    // Bejowan Farm, Quintrell Downs, TR8 4PA; directories give 8/9 Station
    // Parade, TR7 2NF. 15 km reaches Porthcothan.
    covers: { lat: 50.41503, lon: -5.07620, radiusKm: 15 },
    dogs: null,
    hours: "24 hours, every day, on the site",
    url: "https://www.a2bnewquay.com/taxis/",
    phone: "01637 877777",
    notes: "Newquay. A2B Newquay Travel Ltd: taxis, minibuses and coaches, airport runs and tours. Names Newquay Airport, Crantock, St Newlyn East, Porth and St Columb Major among the places it serves. Part of the A2B group with Coastline Travel, which also books through Newquay Taxis on 01637 222222 (nqytaxis.co.uk). Nothing on walkers, luggage or dogs",
    verified: "2026-09-14",
  },
  {
    slug: "chough-taxis-newquay",
    name: "Chough Taxis",
    kind: "transfer",
    services: ["passenger"],
    // "Central Taxi Rank, Fore Street, Newquay" on the site: OSM node
    // 11739942902, the taxi rank by Fore Street and Beach Road. 20 km reaches
    // Porthcothan, Padstow and Rock; Wadebridge, which it names, is 21 km.
    covers: { lat: 50.41408, lon: -5.08668, radiusKm: 20 },
    dogs: true,
    dogs_note: "Pet friendly, small or large dogs, at no extra cost",
    hours: "10am – 5am, every day, on the site. Nothing before 10am",
    url: "https://www.call-a-cab-today.co.uk/",
    phone: "07866 410102",
    email: "info@call-a-cab-today.co.uk",
    notes: "Newquay, at the Fore Street rank, 120 m from the bus station. Small family firm, 25 years. Names Wadebridge, Bodmin, Perranporth and Rock among the places it covers; airports and fare estimates. Nothing on walkers or luggage",
    verified: "2026-09-14",
  },
  {
    slug: "go2cabs-newquay",
    name: "Go2Cabs",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site beyond Newquay and Truro; OSM place node 18485879
    // for Newquay. 20 km reaches Porthcothan and Padstow.
    covers: { lat: 50.41344, lon: -5.08488, radiusKm: 20 },
    dogs: null,
    url: "https://go2cabs.co.uk/",
    phone: "01637 222888",
    email: "office@go2cabs.co.uk",
    notes: "Newquay, with a Truro office (01872 222888). Since 2019. Saloons to 6 and 8-seat minivans; taxis, airport transfers, online booking and an app. Nothing from the firm on walkers, luggage or dogs; a review site says most drivers take a clean, well-behaved dog",
    verified: "2026-09-14",
  },
  {
    slug: "fern-pit-beach-kitchen",
    name: "Fern Pit Beach Kitchen",
    kind: "operator",
    url: "https://fernpit.co.uk/",
    phone: "01637 873181",
    email: "hello@fernpit.co.uk",
    notes: "Café on Pentire headland, Newquay, that runs the summer ferry across the Gannel to Crantock beach and the private footpath down to it",
    verified: "2026-09-15",
  },
  {
    slug: "st-agnes-taxis",
    name: "St Agnes Taxis",
    kind: "transfer",
    services: ["passenger"],
    // "Peterville, St Agnes" on the site; its map link gives TR5 0QU, position
    // via postcodes.io. 15 km reaches Perranporth (4.9 km) and Newquay
    // (13.8 km), both named on the site.
    covers: { lat: 50.31198, lon: -5.19888, radiusKm: 15 },
    dogs: true,
    dogs_note: "\"Dog friendly\" on the site",
    hours: "24/7 on the site",
    url: "https://www.stagnestaxis.co.uk/",
    phone: "07778 436753",
    notes: "St Agnes, over 25 years. 4 and 6 seaters, across St Agnes, Perranporth, Newquay and surrounding areas; long distance and airports. Office 01872 553795; booking and payment forms online. The firm's site says nothing on walkers or luggage; a South West Coast Path Association listing is reported to mention luggage transfers for walkers, so ask",
    verified: "2026-09-15",
  },
  {
    slug: "mainline-taxis-perranporth",
    name: "Mainline Taxis",
    kind: "transfer",
    services: ["passenger"],
    // No address beyond the Perranporth taxi rank; OSM place node 1600818794
    // for Perranporth. 15 km reaches Newquay and St Agnes.
    covers: { lat: 50.34442, lon: -5.15384, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "07756 943341",
    notes: "Perranporth. A Yell listing and its own posts in local Facebook groups only, with no site, so ring to check it's still trading. Describes itself as based on the Perranporth taxi rank and taking phone bookings: airports and stations, five seats. The posts are reported to say dog friendly; not confirmed",
    verified: null,
  },
  {
    slug: "hopleys-coaches",
    name: "Hopley's Coaches",
    kind: "operator",
    url: "https://www.hopleyscoaches.com/",
    phone: "01872 553786",
    email: "info@hopleyscoaches.com",
    notes: "Coach firm at Gover Farm, Mount Hawke, that runs the 304 and 315 under Transport for Cornwall. Its site links to Transport for Cornwall's pages for the timetables",
    verified: "2026-09-15",
  },
  {
    slug: "portreath-cabs",
    name: "Portreath Cabs",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site beyond Portreath and Redruth; OSM place node
    // 29227528 for Portreath. 15 km reaches Perranporth (13.5 km) and Hayle.
    covers: { lat: 50.26087, lon: -5.28968, radiusKm: 15 },
    dogs: null,
    hours: "24 hours, 7 days, on most pages; the contact page also gives Mon–Sat 8am – midnight, Sun 10am – midnight",
    url: "https://www.portreathcabs.co.uk/portreath",
    phone: "01209 843297",
    email: "info@portreathcabs.co.uk",
    notes: "Portreath and Redruth, since 2009. Vehicles up to 8 seats with luggage room, male and female drivers, local and long-distance runs. Taxi mobile 07891 586668; airport transfers on a separate line, 01209 211111 (The Airport Guys). Nothing on walkers or dogs",
    verified: "2026-09-15",
  },
  {
    slug: "gb-cabs-camborne",
    name: "GB Cabs",
    kind: "transfer",
    services: ["passenger"],
    // 12a Cross Street, Camborne, TR14 8EX on the site; position via
    // postcodes.io. 15 km reaches Portreath and Porthtowan, the furthest places
    // on this coast it names; Perranporth is 18 km.
    covers: { lat: 50.21218, lon: -5.29910, radiusKm: 15 },
    dogs: null,
    hours: "24 hours on the site",
    url: "https://www.1-2-1cabs.co.uk/",
    phone: "01209 714714",
    notes: "Camborne. Private hire across Camborne, Redruth and around, naming Illogan, Portreath and Porthtowan; an 8-seat minibus. Second line 01209 714040. The site dates from 2017, so ring to check. Nothing on walkers, luggage or dogs",
    verified: "2026-09-15",
  },
  {
    slug: "redruth-taxis",
    name: "Redruth Taxis",
    kind: "transfer",
    services: ["passenger"],
    // "Based at Redruth Taxi Rank and Redruth Train Station" on the site; OSM has
    // no taxi rank node, so OSM place node 443527322 for Redruth. 15 km reaches
    // Portreath (5.3 km) and Perranporth (13.5 km).
    covers: { lat: 50.23399, lon: -5.22765, radiusKm: 15 },
    dogs: null,
    url: "https://redruthtaxis.com/",
    phone: "01209 219988",
    notes: "Redruth, at the station rank; licensed, same ownership since 1995. Onward journeys from Redruth station, around Camborne, Hayle, Helston, Truro, Bodmin and Newquay, and airport runs. Nothing on walkers, luggage or dogs",
    verified: "2026-09-15",
  },
  {
    slug: "redruthcabs-vip-taxi",
    name: "Redruthcabs (VIP Taxi)",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // No address beyond Redruth; OSM place node 443527322 for Redruth. 15 km
    // reaches Portreath, Porthtowan and St Agnes, all named, and Perranporth.
    covers: { lat: 50.23399, lon: -5.22765, radiusKm: 15 },
    dogs: null,
    url: "https://www.redruthcabs.co.uk/taxi",
    phone: "01209 311330",
    email: "viptaxi222@gmail.com",
    notes: "Redruth. Runs from Redruth station to Illogan, Camborne, Portreath, St Agnes, Porthtowan, Helston and the Lizard; lists luggage transfers along with stations, airports and late-night drop-offs. Mobile 07474 445676. Not the same firm as Redruth Cabs, 01209 212000. Nothing on walkers or dogs",
    verified: "2026-09-15",
  },
  {
    slug: "great-western-railway",
    name: "Great Western Railway",
    kind: "operator",
    url: "https://www.gwr.com/",
    phone: "03457 000 125",
    notes: "Runs the St Ives Bay Line and the main line through Hayle, St Erth, Camborne and Redruth. Passenger Assist 0800 197 1329. National Rail Enquiries 03457 48 49 50",
    verified: "2026-09-15",
  },
  {
    slug: "a1-cars-st-ives",
    name: "A1 Cars St Ives & Hayle",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // No address on the site beyond St Ives and Hayle; OSM place node 18336960
    // for St Ives. 20 km reaches Portreath, Hayle, Pendeen and Penzance; the
    // site also names Helston, Falmouth, Padstow and Port Isaac.
    covers: { lat: 50.21491, lon: -5.47951, radiusKm: 20 },
    dogs: true,
    dogs_note: "Dog-friendly taxis at your request, on the site",
    hours: "Seven days a week on the site",
    url: "https://www.a1carsstives.co.uk/",
    phone: "01736 797700",
    email: "info@a1carsstives.co.uk",
    notes: "St Ives and Hayle. Lists luggage and walking route transfers for coast path walkers among its services. 4-seaters to minibuses, wheelchair-accessible vehicles; local runs, long distance, airports and tours. Booking app",
    verified: "2026-09-15",
  },
  {
    slug: "harbour-cars-st-ives",
    name: "Harbour Cars",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site beyond St Ives; OSM place node 18336960. 15 km
    // reaches Hayle, St Erth and Penzance, which it names.
    covers: { lat: 50.21491, lon: -5.47951, radiusKm: 15 },
    dogs: null,
    hours: "Office 8am – midnight on the site",
    url: "https://www.harbourcars-stives.co.uk/",
    phone: "01736 797688",
    email: "harbourcarsstives@gmail.com",
    notes: "St Ives and Carbis Bay. 4-seat MPV and a 6-seater with extra luggage room. Local runs, including Hayle and Penzance; St Erth, Hayle, Penzance and Truro stations; airports (book before 6pm the day before) and tours. Also books by WhatsApp. Nothing on walkers, luggage transfers or dogs",
    verified: "2026-09-15",
  },
  {
    slug: "jm-cars-st-ives",
    name: "JM Cars St Ives",
    kind: "transfer",
    services: ["passenger"],
    // No address on the site beyond St Ives; OSM place node 18336960. 20 km
    // reaches Portreath, Hayle, Pendeen and Sennen; it also names Camborne,
    // Redruth, Truro and Newquay.
    covers: { lat: 50.21491, lon: -5.47951, radiusKm: 20 },
    dogs: null,
    url: "https://www.jmcarsstives.co.uk/",
    phone: "01736 800999",
    email: "info@jmcarsstives.co.uk",
    notes: "St Ives. Local taxis around St Ives, Carbis Bay and Hayle, private hire, airports and tours, vehicles for up to 8. On National Rail's taxi list for St Erth station. Nothing on walkers, luggage or dogs",
    verified: "2026-09-15",
  },
  {
    slug: "chard-cars-st-ives",
    name: "Chard Cars",
    kind: "transfer",
    services: ["passenger"],
    // "Office: St. Ives" on the site; OSM place node 18336960. 15 km reaches
    // Hayle, St Erth and Penzance.
    covers: { lat: 50.21491, lon: -5.47951, radiusKm: 15 },
    dogs: null,
    hours: "\"Open all hours\" on the site",
    url: "https://chardcars.co.uk/",
    phone: "07777 100864",
    email: "chardcarsstives@gmail.com",
    notes: "St Ives, run by John and Mel; John has driven taxis here for over 20 years. St Ives and Penwith, St Erth and Carbis Bay stations, airports. Second mobile 07777 100865. The site dates from 2024, so ring to check. Nothing on walkers, luggage or dogs",
    verified: "2026-09-15",
  },
  {
    slug: "st-erth-hayle-cars",
    name: "St Erth & Hayle Cars",
    kind: "transfer",
    services: ["passenger"],
    // Unit 10C Central Garage, Hayle Terrace, TR27 4BS from directories;
    // position via postcodes.io. 15 km reaches Portreath and St Ives.
    covers: { lat: 50.18778, lon: -5.42157, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "01736 754000",
    notes: "Hayle. Only on directory listings and local lists, including National Rail's taxi list for St Erth station and a Hayle holiday-letting guide, with no site of its own, so ring to check. Directories describe 4 to 16 seats, wheelchair-accessible vehicles, since 1990, and give 01736 754040 as well. Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "hayle-taxis",
    name: "Hayle Taxis",
    kind: "transfer",
    services: ["passenger"],
    // "Unit 4, Hayle" on Yelp, no postcode; OSM place node 29172762 for Hayle.
    // 15 km reaches Portreath and St Ives.
    covers: { lat: 50.18714, lon: -5.41782, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "01736 756565",
    notes: "Hayle. Only on directory listings and local lists, including National Rail's taxi list for St Erth station, with no site of its own, so ring to check it's still trading. One directory gives the same number for Grahams Taxis, Hayle; another gives 01736 753000. Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "st-just-cars",
    name: "St Just Cars",
    kind: "transfer",
    services: ["passenger"],
    // "St Just, Penzance, Cornwall" on the site, no street; OSM place node
    // 29170381 for St Just. 20 km reaches Pendeen (4.5 km), Sennen Cove and St
    // Ives (17 km), all named.
    covers: { lat: 50.12438, lon: -5.67974, radiusKm: 20 },
    dogs: true,
    dogs_note: "Dog friendly, four legs welcome, on the site; say when booking so there's room",
    hours: "Phone answered Mon–Thu 7am – 9pm, Fri–Sat 7am – 10pm, Sun 7am – 7pm, on the site",
    url: "https://www.stjustcars.co.uk/",
    phone: "01736 786586",
    email: "kelvin@stjustcars.co.uk",
    notes: "St Just, since 2010, recently under new management. An 8-seat minibus for walking groups. Names Pendeen, Zennor, the Gurnard's Head, St Ives, Sennen, Porthcurno, Lamorna, Penzance and airports. Book ahead: the site warns there are few taxis west of Penzance and it's often booked well in advance. Nothing on luggage-only transfers",
    verified: "2026-09-15",
  },
  {
    slug: "logan-rock-cars",
    name: "Logan Rock Cars",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // "Based in St Buryan" on the site; OSM place node 29170278 for St Buryan.
    // 25 km reaches Pendeen (10.6 km), Sennen Cove, St Ives (18.2 km) and
    // Hayle, all within the "whole of West Cornwall" it names.
    covers: { lat: 50.07505, lon: -5.62039, radiusKm: 25 },
    dogs: true,
    dogs_note: "Dog friendly taxis, on the site",
    url: "https://www.loganrockcars.com/",
    phone: "01736 871786",
    email: "info@loganrockcars.com",
    notes: "St Buryan, family run; Lucy and Jeremy took over in December 2024 from the owners of eight years. Lists luggage transfers and coastal walk transfers; 8-seat minibuses, female drivers available. Covers Penzance, St Ives, Land's End, Sennen, Porthcurno and on to Truro and Newquay. Also books by WhatsApp. Took over from Prowse Cars, on porthcurno.info",
    verified: "2026-09-15",
  },
  {
    slug: "penzance-taxis",
    name: "Penzance Taxis (A Cars, Nippy Taxis)",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // No address on the site; old directories put it at the station rank. OSM
    // place node 685852848 for Penzance. 15 km reaches Pendeen (11 km), St Ives
    // (10.9 km), Hayle and Sennen Cove.
    covers: { lat: 50.11948, lon: -5.53525, radiusKm: 15 },
    dogs: null,
    hours: "24 hours, 365 days a year, on the site",
    url: "http://www.penzance-taxis.co.uk/",
    phone: "01736 888888",
    email: "info@penzance-taxis.co.uk",
    notes: "Penzance. 4- to 8-seaters, airports and long distance. Three sites give this number: Penzance Taxis, A Cars Penzance (acarspenzance.co.uk, \"cover the whole of west Cornwall\") and Nippy Taxis Penzance (nippytaxispenzance.com), which lists luggage transfers and bicycle transport. Nothing on walkers or dogs. Not the Penzance Taxi Company, 01736 366366, whose domain now shows spam",
    verified: "2026-09-15",
  },
  {
    slug: "west-cornwall-cars-st-just",
    name: "West Cornwall Cars",
    kind: "transfer",
    services: ["passenger"],
    // Old Seabird House, St Just, TR19 7JB on Yelp; position via postcodes.io.
    // 15 km reaches Pendeen (4.6 km) and Sennen Cove, the far end of what it
    // names; not St Ives, 17 km.
    covers: { lat: 50.12391, lon: -5.68245, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "01736 787473",
    notes: "St Just. Only on directories: Yelp says it serves this side of Penzance, St Just, Land's End, St Levan, St Buryan, Morvah and Pendeen. Its site, westcornwallcars.com, doesn't load, so ring to check it's still trading. Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "st-buryan-cars",
    name: "St Buryan Cars",
    kind: "transfer",
    services: ["passenger"],
    // No address; OSM place node 29170278 for St Buryan. 15 km reaches Sennen Cove,
    // Porthcurno, Lamorna and Penzance.
    covers: { lat: 50.07505, lon: -5.62039, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "07467 637871",
    notes: "St Buryan. Only on porthcurno.info's local taxi list, with no site of its own, so ring to check it's still trading. Nothing on walkers, luggage or dogs",
    verified: null,
  },
  {
    slug: "pl-cars-penzance",
    name: "PL Cars (Priory Lane Cars)",
    kind: "transfer",
    services: ["passenger", "baggage"],
    // No address on the site; OSM node 685852848, admin centre of Penzance. 20 km
    // reaches Sennen Cove (12.6 km), Porthcurno, Lamorna and St Ives, all priced or
    // named.
    covers: { lat: 50.11948, lon: -5.53525, radiusKm: 20 },
    dogs: null,
    url: "https://www.plcars.co.uk/taxis/",
    phone: "01736 202020",
    email: "hello@plcars.co.uk",
    notes: "Penzance and the Penwith zone, run by Andy and Jenny. Up to 7 passengers. Luggage transfers for South West Coast Path walkers, collected and taken on to the next accommodation. Headline fares from Penzance or St Ives on the site: Sennen Cove £29 single, Porthcurno £32, the Minack £34, Land's End £35; otherwise the council tariff. Mobile 07572 510736. Nothing on dogs",
    verified: "2026-09-15",
  },
  {
    slug: "steves-taxi-cabs-penzance",
    name: "Steve's Taxi Cabs Penzance",
    kind: "transfer",
    services: ["passenger"],
    // No address beyond Penzance; OSM node 685852848. 15 km reaches Lamorna and
    // Sennen Cove (12.6 km).
    covers: { lat: 50.11948, lon: -5.53525, radiusKm: 15 },
    dogs: null,
    url: "https://www.stevestaxicabspenzance.co.uk/",
    phone: "07932 045933",
    notes: "Penzance. Local journeys, long distance, airport and station transfers; room for a wheelchair. Cash, card or contactless. The site dates from 2024, so ring to check. Nothing on walkers, luggage or dogs",
    verified: "2026-09-15",
  },
  {
    slug: "daves-cars-mousehole",
    name: "Dave's Cars",
    kind: "transfer",
    services: ["passenger"],
    // 3 Wellington Place, Mousehole, TR19 6TJ from directories; position via
    // postcodes.io. 15 km reaches Lamorna (3 km), Penzance and Sennen Cove (11.4 km).
    covers: { lat: 50.08423, lon: -5.53995, radiusKm: 15 },
    dogs: null,
    url: null,
    phone: "01736 732027",
    notes: "Mousehole. Only on directory listings, with no site of its own, so ring to check it's still trading. One directory mentions luggage transfers and people carriers; not confirmed. Nothing on dogs",
    verified: null,
  },
];
