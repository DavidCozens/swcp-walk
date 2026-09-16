// Places to stay. Part of the shared location model (see src/_data/locations.js):
// the common fields — slug, name, kind, lat/lon, address, contact, notes,
// verified — are the same for every kind of location, and everything specific
// to somewhere you sleep sits in `stay`.
//
//   stay.dogs             true | false | null   null = not confirmed. Never guess.
//                         A hotel is only recorded if it's true.
//   stay.season           "all-year" | { from: "MM-DD", to: "MM-DD" } | null
//   stay.price_per_night  number (GBP) | null
//   stay.hookup           true | false | null
//   verified              "YYYY-MM-DD" | null   when checked against the owner's
//                                               own website
//   maps_url              optional override for the generated directions link
//
// Free text for colour and caveats only: stay.dogs_note, stay.price_note, notes.
// Each fact lives in one place — don't restate a field inside `notes`.
export default [
  {
    slug: "burrowhayes-farm",
    name: "Burrowhayes Farm",
    kind: "stay",
    lat: 51.20424, lon: -3.57803,
    address: "West Luccombe, Porlock, TA24 8HT",
    phone: "01643 862463",
    url: "https://burrowhayes.co.uk/",
    notes: "National Trust land, a mile east of Porlock",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Strict control; exercised off site",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "porlock-holiday-park",
    name: "Porlock Holiday Park",
    kind: "stay",
    lat: 51.21043, lon: -3.59742,
    address: "High Bank, Porlock, TA24 8ND",
    phone: "07348 751554",
    email: "info@porlockholidaypark.co.uk",
    url: "https://www.porlockcaravanpark.co.uk/",
    notes: "Formerly Porlock Caravan Park. Directories still list the old name and a 15 Mar–31 Oct season",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "lynmouth-holiday-retreat",
    name: "Lynmouth Holiday Retreat",
    kind: "stay",
    lat: 51.21877, lon: -3.82778,
    address: "Manor Farm, Barbrook, Lynton, EX35 6LD",
    phone: "01598 753349",
    url: "https://coastandcountryparks.co.uk/our-parks/lynmouth-holiday-retreat-north-devon/",
    notes: "Maximum unit length 9 m. The coast path runs past it",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two; short lead, not left unattended. Dog-walking meadow on site",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "sunny-lyn",
    name: "Sunny Lyn Holiday Park",
    kind: "stay",
    lat: 51.22075, lon: -3.83650,
    address: "Lynbridge Road, Lynton, EX35 6NS",
    phone: "01598 753384",
    email: "info@sunnylyn.co.uk",
    url: "https://www.sunnylyn.co.uk/",
    notes: "Nine electric touring pitches, by the West Lyn river. Lodges run year-round; the touring season isn't stated",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "blue-ball-inn",
    name: "Blue Ball Inn",
    kind: "stay",
    food: { type: "pub" },
    lat: 51.23307, lon: -3.79547,
    address: "Countisbury, Lynmouth, EX35 6NE",
    phone: "01598 741263",
    email: "info@blueballinn.com",
    url: "https://www.blueballinn.com/",
    notes: "Brit Stops member — overnight motorhome parking. Also fourteen en-suite rooms. Stands on the section 2 route at Countisbury",
    verified: "2026-09-13",
    stay: {
      type: "britstop",
      dogs: true,
      dogs_note: "£15 per dog per night; welcome throughout except the main restaurant",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "porlock-weir-car-park",
    name: "Porlock Weir car park",
    kind: "stay",
    lat: 51.21878, lon: -3.62691,
    address: "B3225, Porlock Weir, TA24",
    url: "https://park4night.com/en/place/87299",
    // The generated lat/lon link labelled itself "Locanda on the Weir" — the
    // coordinate is right (2 m from the car park in OSM) but Google snaps the
    // label to the nearest named business, and there are six within 60 m. A
    // Plus Code resolves to the point itself.
    maps_url: "https://www.google.com/maps/dir/?api=1&destination=9C3R699F%2BG6",
    notes: "Public car park with public toilets; bars and restaurants alongside. Reported quiet overnight",
    // A park4night listing is user-reported, not the operator.
    verified: null,
    stay: {
      type: "park4night",
      dogs: true,
      season: null,
      price_per_night: 15,
      price_note: "per 24 hours, ticket machine or QR code",
    },
  },
  {
    slug: "hoburne-blue-anchor",
    name: "Hoburne Blue Anchor",
    kind: "stay",
    lat: 51.18204, lon: -3.39684,
    address: "Blue Anchor, Minehead, TA24 6JT",
    phone: "01643 821360",
    notes: "Around 100 touring pitches, but four miles east of Minehead — a drive, not a walk",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "bottom-ship",
    name: "The Bottom Ship",
    kind: "stay",
    food: { type: "pub" },
    lat: 51.21829, lon: -3.62726,
    address: "5 Anchor Road, Porlock Weir, TA24 8PB",
    phone: "01643 863288",
    notes: "Rooms above the pub, on the path at Porlock Weir",
    verified: null,
    stay: {
      type: "inn",
      dogs: true,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "myrtle-cottage",
    name: "Myrtle Cottage",
    kind: "stay",
    lat: 51.20939, lon: -3.59702,
    address: "High Street, Porlock, TA24 8PU",
    url: "https://myrtleporlock.co.uk/",
    notes: "Walkers welcome, drying facilities. Reported open all year",
    verified: null,
    stay: {
      type: "bnb",
      dogs: true,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "kenella-house",
    name: "Kenella House",
    kind: "stay",
    lat: 51.20557, lon: -3.47142,
    address: "7 Tregonwell Road, Minehead, TA24 5DT",
    url: "https://kenellahouse.co.uk/",
    notes: "About 500 m from the path",
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "caffyns-farm",
    name: "Caffyns Farm",
    kind: "stay",
    lat: 51.21769, lon: -3.87474,
    address: "Croscombe Lane, Lynton, EX35 6JW",
    phone: "01598 753967",
    email: "stay@exmoorcoastholidays.co.uk",
    url: "https://www.exmoorcoastholidays.co.uk/camping",
    notes: "Planning limits campervans to 5.5 m long and 2.2 m high, which rules out most high-tops. No bookings taken. Water and chemical disposal in each field; barn café and farm shop. Trades as Exmoor Coast Holidays",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free",
      season: "all-year",
      price_per_night: 15,
      price_note: "per adult; children 5–15 £12",
      hookup: null,
    },
  },
  {
    slug: "lynton-club-site",
    name: "Lynton Camping and Caravanning Club Site",
    kind: "stay",
    lat: 51.21759, lon: -3.85794,
    address: "Caffyn's Cross, Lydiate Lane, Lynton, EX35 6JS",
    phone: "01598 752379",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/devon/lynton/lynton-camping-and-caravanning-club-site/",
    notes: "The Club says not to follow satnav; it publishes approach directions. Arrivals after 1pm. Jumbo pitches for larger units. Whether non-members can book isn't stated. 2027 opens 22 March",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      season: { from: "03-27", to: "09-27" },
      price_per_night: null,
      price_note: "members from £9.30 per adult",
      hookup: true,
    },
  },
  {
    slug: "bottom-meadow-car-park",
    name: "Bottom Meadow car park",
    kind: "stay",
    // OSM way 160968516, centre: the pay car park on Castle Hill beside the
    // toilets and play area. The EX35 6AR postcode centroid is 130 m off.
    lat: 51.22846, lon: -3.83339,
    address: "Castle Hill, Lynton, EX35 6AR",
    url: "https://lyntonandlynmouthtowncouncil.gov.uk/parking/",
    // Overnight rules from North Devon Council's motorhomes guidance; the car
    // park itself is run by the town council, whose page doesn't repeat them.
    notes: "Town council car park where motorhomes may stay overnight. Up to two nights, no return within 48 hours; 8 m maximum; self-contained with a built-in toilet; 6 m from other motorhomes. Public toilets (RADAR key for the accessible one) and a play area",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 16,
      price_note: "cash, card or RingGo (location 23606)",
    },
  },
  {
    slug: "woody-bay-honesty-parking",
    name: "Woody Bay honesty-box parking",
    kind: "stay",
    lat: 51.22010, lon: -3.89996,
    address: "Near Woody Bay, Martinhoe, EX31 4QU",
    url: "https://park4night.com/en/place/118480",
    notes: "Six spaces with sea views. Reviewers warn it's very exposed in wind and muddy; levelling blocks needed",
    // A park4night listing is user-reported, not the operator.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 3,
      price_note: "honesty box or QR code",
    },
  },
  {
    slug: "hunters-inn",
    name: "The Hunters Inn",
    kind: "stay",
    food: { type: "pub" },
    lat: 51.21676, lon: -3.92722,
    address: "Heddon Valley, Parracombe, Barnstaple, EX31 4PY",
    phone: "01598 763230",
    email: "enquiries@thehuntersinnheddonvalley.co.uk",
    url: "https://thehuntersinnheddonvalley.co.uk/",
    notes: "National Trust inn. Ten rooms plus Heddon Lodge; free parking for guests. Not the Hunters Inn at Newton Tracey, which search results mix up with it",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "£15 per dog per stay, up to two; rooms 1–5 and 10 only; not left unattended",
      season: null,
      price_per_night: 100,
      price_note: "room only, £100–£200",
    },
  },
  {
    slug: "south-dean-camping",
    name: "South Dean Camping",
    kind: "stay",
    lat: 51.21866, lon: -3.94778,
    address: "Trentishoe, Parracombe, Barnstaple, EX31 4QD",
    phone: "07397 854413",
    email: "camp@southdeancamping.co.uk",
    url: "https://southdeancamping.co.uk/",
    notes: "The path runs just below the site. Eighteen acres of unmarked, unlit pitches. Closed for 2026; reopens 27 May 2027. Cash or bank transfer; arrivals 9am–9pm; no sign-written vehicles",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On leads. XL Bully, Pit Bull Terrier, Japanese Tosa, Dogo Argentino and Fila Brasileiro not accepted",
      season: null,
      price_per_night: 35,
      price_note: "from; non-electric campervan pitch, two adults",
      hookup: false,
    },
  },
  {
    slug: "silver-view-campsite",
    name: "Silver View Campsite",
    kind: "stay",
    // Postcode centroid: the farm isn't in OpenStreetMap.
    lat: 51.20668, lon: -4.00610,
    address: "Knapp Down Farm, Shute Lane, Combe Martin, EX34 0PG",
    phone: "07415 122557",
    url: "https://www.silverviewcampsite.co.uk/",
    notes: "Pop-up summer site, booked through campsites.co.uk. 2026 ran 22–31 May, June–July weekends and 24 Jul–30 Aug. Ten touring pitches, units up to 8 m",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch",
      season: null,
      price_per_night: 25,
      price_note: "touring pitch, up to six people",
      hookup: false,
    },
  },
  {
    slug: "pack-o-cards",
    name: "Pack o' Cards",
    kind: "stay",
    food: { type: "pub" },
    lat: 51.20206, lon: -4.02914,
    address: "High Street, Combe Martin, EX34 0ET",
    phone: "01271 882300",
    email: "thepackocards@aol.com",
    url: "https://www.packocards.co.uk/",
    notes: "Six en-suite rooms. Free car park with an EV charger; motorhome parking not mentioned",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Welcome in the bar; nothing said about rooms",
      season: null,
      price_per_night: 95,
      price_note: "from, with breakfast; £95–£115",
    },
  },
  {
    slug: "newberry-valley-park",
    name: "Newberry Valley Park",
    kind: "stay",
    lat: 51.20137, lon: -4.04195,
    address: "Woodlands, Combe Martin, EX34 0AT",
    phone: "01271 882334",
    email: "relax@newberryvalleypark.co.uk",
    url: "https://www.newberryvalleypark.co.uk/",
    notes: "Premier and Large pitches up to 8 m, Classic up to 5 m. Reception closes 10 Oct – 1 Nov, so book late-season stays by 9 Oct",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £3 each per night. On lead except in the fenced dog field; dog wash on site",
      season: { from: "03-20", to: "11-01" },
      price_per_night: 27,
      price_note: "Classic pitch, low season, two people; £30–£51 for larger pitches and peak dates",
      hookup: true,
    },
  },
  {
    slug: "mill-park",
    name: "Mill Park Campsite",
    kind: "stay",
    lat: 51.20572, lon: -4.06362,
    address: "Mill Lane, Berrynarbor, EX34 9SH",
    phone: "01271 882647",
    email: "enquiries@millpark.com",
    url: "https://www.millpark.com/",
    notes: "Minimum two nights; no Sunday arrivals. Motorhome service point",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £2 each per night",
      // The 2026 tariff runs 1 Mar – 31 Oct; no separate opening dates given.
      season: { from: "03-01", to: "10-31" },
      price_per_night: 30,
      price_note: "grass electric pitch, off-peak; £37–£45 fully serviced hardstanding",
      hookup: true,
    },
  },
  {
    slug: "watermouth-valley",
    name: "Watermouth Valley Camping Park",
    kind: "stay",
    lat: 51.21144, lon: -4.06373,
    address: "Watermouth, Ilfracombe, EX34 9SJ",
    email: "watermouthpark@gmail.com",
    url: "https://www.watermouthpark.co.uk/",
    notes: "Formerly Big Meadow. The postcode takes satnav to Watermouth Castle; the entrance is 300 yards past it. Contact form only, no phone. 2026 bookings closed; 2027 opens for booking 1 Oct. The 301 stops outside",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Off lead only in the exercise area above the Ocean View field",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "hele-valley",
    name: "Hele Valley Holiday Park",
    kind: "stay",
    lat: 51.20194, lon: -4.10070,
    address: "Hele Bay, Ilfracombe, EX34 9RD",
    phone: "01271 862460",
    email: "holidays@helevalley.co.uk",
    url: "https://www.helevalley.co.uk/",
    notes: "Small campervan pitches up to 6 m; large touring and motorhome pitches up to 9 m, with grey-water drainage. Choice of pitch only when booking direct",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On lead on the park; not left alone in your unit",
      season: { from: "04-01", to: "10-31" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "hillsborough-car-park",
    name: "Hillsborough car park",
    kind: "stay",
    lat: 51.20687, lon: -4.10695,
    address: "Hillsborough Road, Ilfracombe, EX34 9QJ",
    url: "https://www.northdevon.gov.uk/parking/car-parks/ilfracombe/hillsborough-car-park",
    // North Devon Council's own pages. OSM tags it camping=no, sleeping=no,
    // which the council contradicts.
    notes: "Council car park where motorhomes may stay overnight, subject to space. Up to two nights, no return within 48 hours; 8 m maximum; self-contained with a built-in toilet; 6 m from other motorhomes. No facilities",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 16,
      price_note: "cash, card or RingGo",
    },
  },
  {
    slug: "sandpiper-inn",
    name: "Sandpiper Inn",
    kind: "stay",
    food: { type: "pub" },
    lat: 51.21074, lon: -4.11586,
    address: "Broad Street, Ilfracombe, EX34 9EQ",
    phone: "01271 865260",
    // No owner website; rooms from booking directories.
    notes: "B&B rooms above a harbourside pub, per booking directories",
    verified: null,
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Reviews call the pub dog-friendly; nothing on rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "warcombe-farm",
    name: "Warcombe Farm Campsite",
    kind: "stay",
    lat: 51.18085, lon: -4.17966,
    address: "Station Road, Mortehoe, EX34 7EJ",
    phone: "01271 870690",
    url: "https://warcombefarm.co.uk/",
    notes: "Serviced, Pitch Plus, Premier, sea-view and fully gated pitches; grass or hardstanding. Fishing lake. Directories give a 15 Mar–31 Oct season, which differs from the owner's tariff dates",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 per night. On lead or tethered, never left unattended. 14-acre off-lead woodland walk; dog wash",
      // The 2026 tariff runs 13 Mar – 30 Oct; no separate opening dates given.
      season: { from: "03-13", to: "10-30" },
      price_per_night: 25.5,
      price_note: "serviced (electric) pitch, low season, two people; £29.50 mid, £44 peak",
      hookup: true,
    },
  },
  {
    slug: "damage-barton",
    name: "Damage Barton",
    kind: "stay",
    lat: 51.18520, lon: -4.18768,
    address: "Mortehoe, Woolacombe, EX34 7EJ",
    phone: "01271 870502",
    email: "enquiries@damagebarton.co.uk",
    url: "https://www.damagebarton.co.uk/",
    // OSM calls it a "Camping Club Site", which is wrong.
    notes: "Family-run on a working farm; affiliated to the Caravan and Motorhome Club but open to all. Direct access to the coast path. Grass or hardstanding, 10 A hookup. Deposit £50",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per unit, £2 each per night. Three exercise areas next to the site",
      season: { from: "03-20", to: "11-01" },
      price_per_night: 30,
      price_note: "low season: pitch £10 plus £10 per adult; £3 less without electric. Peak £37 for two",
      hookup: true,
    },
  },
  {
    slug: "north-morte-farm",
    name: "North Morte Farm",
    kind: "stay",
    lat: 51.19046, lon: -4.20086,
    address: "North Morte Farm, Mortehoe, Woolacombe, EX34 7EG",
    phone: "01271 870381",
    email: "info@northmortefarm.co.uk",
    url: "https://www.northmortefarm.co.uk/",
    notes: "Twenty gravel touring pitches, all with hookup. Narrow access. Direct access to the coast path. Walk-ins outside school holidays, 9am–7pm. Open for 2026 but no dates given",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Not allowed in the holiday homes; nothing said about pitches",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "easewell-farm",
    name: "Easewell Farm Holiday Park",
    kind: "stay",
    lat: 51.18867, lon: -4.19957,
    address: "Mortehoe Station Road, Woolacombe, EX34 7EH",
    phone: "01271 871400",
    url: "https://www.woolacombe.co.uk/devon-holiday-parks/easewell-farm",
    notes: "Woolacombe Bay Holiday Parks. 309 pitches: grass, hardstanding and gravel Super pitches. Minimum two nights, sometimes longer",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, £1.50 each per night. On lead. Some breeds refused, including XL Bully and Pit Bull types",
      season: { from: "03-20", to: "11-02" },
      price_per_night: null,
      price_note: "touring pitch from £28 for two nights, two people",
      hookup: true,
    },
  },
  {
    slug: "twitchen-house",
    name: "Twitchen House Holiday Park",
    kind: "stay",
    lat: 51.18246, lon: -4.19701,
    address: "Mortehoe Station Road, Woolacombe, EX34 7ES",
    phone: "01271 870848",
    url: "https://www.woolacombe.co.uk/devon-holiday-parks/twitchen-house",
    notes: "Woolacombe Bay Holiday Parks. 252 pitches, hardstanding, some with sea views. Minimum two nights, sometimes longer. OSM names it Twitchen Caravan Park",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, £1.50 each per night. On lead. Some breeds refused, including XL Bully and Pit Bull types",
      season: { from: "03-20", to: "11-02" },
      price_per_night: null,
      price_note: "touring pitch from £32 for two nights, two people",
      hookup: true,
    },
  },
  {
    slug: "lundy-house-hotel",
    name: "Lundy House Hotel",
    kind: "stay",
    lat: 51.18092, lon: -4.21241,
    address: "Chapel Hill, Mortehoe, Woolacombe, EX34 7DZ",
    phone: "07969 723811",
    email: "info@lundyhousehotel.co.uk",
    url: "https://www.lundyhousehotel.co.uk/",
    notes: "Small hotel, eight en-suite rooms, on the path between Mortehoe and Woolacombe. Parking for ten cars",
    verified: "2026-09-13",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "£10 per dog per night. On lead; not on beds; not left in rooms except at breakfast",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "woolacombe-sands",
    name: "Woolacombe Sands Holiday Park",
    kind: "stay",
    lat: 51.17020, lon: -4.18571,
    address: "Beach Road, Woolacombe, EX34 7AF",
    phone: "01271 870569",
    url: "https://www.woolacombe-sands.co.uk/",
    notes: "Basic, Standard and Super pitches. High-sided vehicles need prior consent; grass standard pitches take tents and small campervans only. Deposit £30",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2.75 per night",
      season: null,
      price_per_night: null,
      price_note: "from £20 a pitch with electric, basic £15, super £25 — the page doesn't say per night",
      hookup: true,
    },
  },
  {
    slug: "willingcott-club-site",
    name: "Willingcott Woolacombe Club Campsite",
    kind: "stay",
    lat: 51.16947, lon: -4.16909,
    address: "Woolacombe, EX34 7HN",
    phone: "01271 870554",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/devon/willingcott-woolacombe-club-campsite/",
    notes: "Caravan and Motorhome Club, open to non-members. 151 pitches, 80 hardstanding, 10 m maximum. The Club says not to follow satnav, and not to approach from the south on the B3231",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dog walk from the site",
      season: { from: "04-02", to: "10-05" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "putsborough-sands-campervans",
    name: "Putsborough Sands campervan parking",
    kind: "stay",
    // Centre of OSM way 55983271, "Puttsborough Car Park".
    lat: 51.14484, lon: -4.22086,
    address: "Putsborough, Georgeham, Braunton, EX33 1LB",
    phone: "01271 890231",
    url: "https://www.putsborough.com/camping-camper-vans/",
    notes: "Run by the landowner, not the council. Overnight on the hardstanding at the top of the beach car park, never at the front. First come, first served; on very busy weekends whole-weekend stays only. Toilets, drinking water, Elsan point and cold beach showers. The caravan parks alongside take touring caravans only",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      dogs_note: "The caravan-park terms allow two per pitch; the campervan page doesn't say",
      season: null,
      price_per_night: null,
      price_note: "per van, two adults; varies by season, ring for the tariff. Extra adults £7 each",
      hookup: false,
    },
  },
  {
    slug: "ruda-holiday-park",
    name: "Ruda Holiday Park",
    kind: "stay",
    // Centre of OSM way 830268115. OSM's operator tag (Parkdean) is out of date.
    lat: 51.13487, lon: -4.23512,
    address: "Croyde Bay, EX33 1NP",
    phone: "01271 890671",
    url: "https://www.johnfowlerholidays.com/devon-holiday-park/ruda-holiday-park/accommodation/camping-and-touring-holidays",
    notes: "John Fowler Holidays. Tourer and motorhome pitches are 11 × 7 m grass with 16 A hookup, in the Croyde Burrows field across the road from the main park. Bookings 01271 866766. Directories give a 6 Mar–31 Oct season; the owner's site gives no dates",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two; a charge, amount not stated",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "bay-view-farm",
    name: "Bay View Farm Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 1154505806.
    lat: 51.12803, lon: -4.22670,
    address: "Croyde, Braunton, EX33 1PN",
    phone: "01271 890501",
    email: "info@bayviewfarm.co.uk",
    url: "https://www.bayviewfarmcampingcroyde.co.uk/",
    notes: "Premier pitches: hardstanding or grass, own tap, grey waste, 16 A. The owner says ignore satnav and turn left at Braunton's main lights. Motorhome arrivals 1–9pm, 11am–5pm in low season. Families and couples only",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      // Recorded as no: one dog is taken in low season only, by prior
      // arrangement, which a summer arrival can't rely on.
      dogs: false,
      dogs_note: "Low season only: one per pitch, by prior arrangement, £5 a night. Not in mid or high season",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "the-whiteleaf",
    name: "The Whiteleaf",
    kind: "stay",
    // Centre of OSM way 1162801956.
    lat: 51.12868, lon: -4.22803,
    address: "Croyde, Braunton, EX33 1PN",
    phone: "01271 890266",
    email: "bookings@thewhiteleaf.co.uk",
    url: "https://www.thewhiteleaf.co.uk/",
    notes: "Five en-suite rooms",
    verified: "2026-09-13",
    stay: {
      type: "bnb",
      dogs: null,
      season: null,
      price_per_night: 90,
      price_note: "from, double room with breakfast; varies by season",
    },
  },
  {
    slug: "incledon-farm",
    name: "Incledon Farm",
    kind: "stay",
    // OSM node 4366876689. The EX33 1JN postcode centroid is 330 m off.
    lat: 51.14205, lon: -4.19661,
    address: "Incledon Farm, Georgeham, Braunton, EX33 1JN",
    phone: "01271 890200",
    url: "https://incledonfarm.co.uk/camping/",
    notes: "Working farm. Premium pitches have hookup and most are levelled, pre-booking essential; standard pitches are chosen on arrival and gently sloping, ramps lent. The owner calls the Buckland Cross route from Braunton unsuitable for caravans and sends you through Croyde instead. Arrivals midday–6pm. Georgeham village and its bus stop are five minutes' walk",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night. On a lead at all times; livestock on the farm",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 28,
      price_note: "standard pitch, two people; premium with hookup £34",
      hookup: true,
    },
  },
  {
    slug: "lobb-fields",
    name: "Lobb Fields Caravan and Camping Park",
    kind: "stay",
    // OSM way 236976548, an unnamed caravan site. The EX33 1HG postcode
    // centroid is 400 m south, on Saunton Road.
    lat: 51.11365, lon: -4.18130,
    address: "Saunton Road, Braunton, EX33 1HG",
    phone: "01271 812090",
    url: "https://lobbfields.com/",
    notes: "180 pitches over three fields: grass, semi-hardstanding and fully serviced hardstanding; suits large motorhomes. Arrivals from midday, no waiting space. Bus stop at the entrance. The pitches page calls the Bottom Field open all year, which the tariff's dates contradict",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night. On-site dog walk",
      season: { from: "03-20", to: "11-01" },
      price_per_night: 22,
      price_note: "electric grass pitch, low season, two people; basic grass £16, fully serviced £29; peak £32.50–£47.50",
      hookup: true,
    },
  },
  {
    slug: "george-inn-braunton",
    name: "The George Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1562108889, where it's named "The George Hotel".
    lat: 51.10791, lon: -4.16116,
    address: "Exeter Road, Braunton, EX33 2JJ",
    phone: "01271 814903",
    email: "info@thegeorgeinnbraunton.com",
    url: "https://thegeorgeinnbraunton.com/",
    notes: "Six en-suite rooms. Check-in 3–10pm. Parking not mentioned. The 303 and 21B stop outside",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "£10 a night, dog-friendly rooms only, so say when booking. Welcome throughout the pub",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "thistledene",
    name: "Thistledene",
    kind: "stay",
    // Postcode centroid: not in OpenStreetMap, and the owner gives no street.
    lat: 51.10421, lon: -4.15828,
    address: "Braunton, EX33 2BN",
    phone: "07432 014114",
    url: "https://thistledene.com/",
    notes: "Two en-suite rooms with their own entrance, on the A361 into Braunton. Position is the postcode's, not the building's",
    verified: "2026-09-13",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Up to two per room",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "tarka-trail-camping",
    name: "Tarka Trail Camping",
    kind: "stay",
    // Centre of OSM way 1202350551.
    lat: 51.07039, lon: -4.15422,
    address: "Lower Yelland Farm, Yelland, Barnstaple, EX31 3EN",
    phone: "07944 247417",
    url: "https://tarkatrailcamping.co.uk/",
    notes: "Across the Taw: 3.5 km from Braunton as the crow flies, but the road goes round through Barnstaple. One large level field; takes campervans, motorhomes and caravans",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On a lead at all times",
      season: { from: "03-28", to: "09-30" },
      price_per_night: 18,
      price_note: "per adult with car; walkers £14; hookup £7",
      hookup: true,
    },
  },
  {
    slug: "north-walk-car-park",
    name: "North Walk car park",
    kind: "stay",
    // Centre of OSM way 29099644. The council's EX31 1DU postcode doesn't
    // resolve on postcodes.io.
    lat: 51.08179, lon: -4.06414,
    address: "North Walk, Barnstaple, EX31 1DU",
    url: "https://www.northdevon.gov.uk/parking/car-parks/barnstaple/north-walk-car-park",
    notes: "Council car park where motorhomes may stay overnight, subject to space. Up to two nights, no return within 48 hours; 8 m maximum; under 3,500 kg; self-contained with a built-in toilet; 6 m from other motorhomes. Beside the route by the Long Bridge",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 16,
      price_note: "cash, card or RingGo (zone 3613)",
    },
  },
  {
    slug: "riverbank-car-park-bideford",
    name: "Riverbank long stay car park",
    kind: "stay",
    // Centre of OSM way 7806591, an unnamed pay car park; the point on
    // Torridge District Council's car park map falls inside it. The EX39 2QS
    // postcode centroid is 490 m north.
    lat: 51.02266, lon: -4.20309,
    address: "Kingsley Road, Bideford, EX39 2QS",
    url: "https://www.torridge.gov.uk/parking/bideford/riverbank-long-stay",
    notes: "Torridge District Council car park between Victoria Park and the river, north of Bideford town centre. Motorhomes overnight 6pm–8am, up to two consecutive nights. No barbecues or fires, awnings, or tables and chairs outside. Some directories still give £11",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 12,
      price_note: "per bay; card, cash or RingGo (location 54524)",
    },
  },
  {
    slug: "churchfields-car-park-appledore",
    name: "Churchfields car park",
    kind: "stay",
    // Centre of OSM way 165326920, matching the point on Torridge District
    // Council's car park map.
    lat: 51.05510, lon: -4.19206,
    address: "The Quay, Appledore, EX39 1RL",
    url: "https://www.torridge.gov.uk/parking/appledore/churchfields",
    notes: "Torridge District Council car park on the estuary. Motorhomes overnight 6pm–8am, up to two consecutive nights. No barbecues or fires, awnings, or tables and chairs outside. EV charging. Across the Torridge from Instow: under a kilometre as the crow flies, round through Bideford by road",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 15,
      price_note: "per bay; card, cash or RingGo (location 54521)",
    },
  },
  {
    slug: "marshford-camping",
    name: "Marshford Camping",
    kind: "stay",
    // OSM node 4326673479. The EX39 1NS postcode centroid is 70 m west.
    lat: 51.04409, lon: -4.20486,
    address: "Marshford Organic Foods, Churchill Way, Northam, EX39 1NS",
    phone: "01237 477160",
    email: "info@marshfordcamping.co.uk",
    url: "https://www.marshfordcamping.co.uk/",
    notes: "Camping and Caravanning Club members only; membership number needed to book. Five grass van pitches and one hardstanding. Organic food shop on site. Booked ahead, minimum 2 nights in medium season and 3 in high; on-the-day pitches may be offered. Check-in from 2pm. Across the Torridge from Instow, round through Bideford by road",
    verified: "2026-09-13",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Two free per pitch, extra £2.50 a night. Lead of 3 m or less; never left unattended",
      // Inferred: the 2026 tariff gives rates only from 16 Apr to 30 Sep.
      season: { from: "04-16", to: "09-30" },
      price_per_night: 22,
      price_note: "per pitch, medium season, two adults; high season £25; hookup £5; solo walker or cyclist tent £11",
      hookup: true,
    },
  },
  {
    slug: "collacott-farm",
    name: "Collacott Farm",
    kind: "stay",
    // Postcode centroid (EX31 3QF). OSM's "Collacott Farm" is the solar farm;
    // the Club gives 51.0524, -4.1234, 170 m away.
    lat: 51.05342, lon: -4.12530,
    address: "Fremington, Barnstaple, EX31 3QF",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/barnstaple/collacott-farm/",
    notes: "Caravan and Motorhome Club CL, members only; directions only shown to members. Five pitches, hardstanding and grass, 16 A. Estuary views; working farm. About 1.5 miles from Fremington's shops and pubs",
    // The Club's listing; the owner has no site of their own.
    verified: null,
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Listed as ideal for dogs, with a dog walk from the site",
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "pyewell-farm",
    name: "Pyewell Farm",
    kind: "stay",
    // Postcode centroid (EX39 4LR); the Club gives 51.0383, -4.1389, 380 m
    // south-west.
    lat: 51.04142, lon: -4.13685,
    address: "Holmacott, Instow, Bideford, EX39 4LR",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/bideford/pyewell-farm/",
    notes: "Caravan and Motorhome Club CL, members only. Minimum stay 3 nights, always. Five pitches on a nearly level one-acre field; levelling blocks recommended. 16 A. Working sheep farm. Satnav not recommended; directions sent on booking (what3words multiple.craft.choppers). Arrivals midday–10pm",
    // The Club's listing; the owner has no site of their own.
    verified: null,
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Up to two, on a lead on the farm. Dog walking area",
      season: { from: "05-01", to: "10-01" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "west-ashford-barton",
    name: "West Ashford Barton",
    kind: "stay",
    // OSM node 1562491077, the hamlet; the Club's GPS is 80 m east. The
    // EX31 4DB postcode centroid is 600 m east.
    lat: 51.09843, lon: -4.11082,
    address: "Ashford, Barnstaple, EX31 4DB",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/barnstaple/west-ashford-barton/",
    notes: "Caravan and Motorhome Club CL, members only. Five pitches, hardstanding and grass, over three fields on 7 acres; some sloping. Estuary views; working farm. Pub within half a mile",
    // The Club's listing; the owner has no site of their own.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "A dog walk is listed; no policy stated",
      season: { from: "04-01", to: "10-01" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "wayfarer-inn-instow",
    name: "The Wayfarer Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 3811363174.
    lat: 51.05561, lon: -4.18044,
    address: "Lane End Road, Instow, EX39 4LB",
    phone: "01271 860342",
    email: "info@thewayfarerinstow.co.uk",
    url: "https://www.thewayfarerinstow.co.uk/",
    notes: "Six en-suite rooms, on the Tarka Trail. No parking of its own: public car park by Instow Cricket Club, or limited roadside on Marine Parade. The Boathouse and the Instow Arms are next door",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      // BringFido says £10 per pet per stay; unconfirmed.
      dogs: null,
      dogs_note: "Dogs welcome in the pub; rooms not stated",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "instow-barton",
    name: "Instow Barton",
    kind: "stay",
    // Postcode centroid: not in OpenStreetMap.
    lat: 51.05863, lon: -4.16844,
    address: "Rectory Lane, Instow, EX39 4LU",
    phone: "01271 860845",
    email: "contact@instowbarton.co.uk",
    url: "https://www.instowbarton.co.uk/",
    notes: "Farmhouse B&B with a restaurant; five en-suite rooms. Free parking; bike lock-up. Check-in 2–6pm. Position is the postcode's, not the building's",
    verified: "2026-09-13",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Both room types listed as pets allowed; no conditions given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "westward-ho-main-car-park",
    name: "Westward Ho! Main car park",
    kind: "stay",
    // Centre of OSM way 222045352, an unnamed pay car park; the point on
    // Torridge District Council's car park map falls inside it.
    lat: 51.04088, lon: -4.23667,
    address: "Golf Links Road, Westward Ho!, EX39 1LG",
    url: "https://www.torridge.gov.uk/parking/westward-ho/main",
    notes: "Torridge District Council car park in the centre of the village. Motorhomes overnight 6pm–8am, up to two consecutive nights; a van across two bays pays for both. No barbecues or fires, awnings, or tables and chairs outside. EV charging",
    verified: "2026-09-13",
    stay: {
      type: "aire",
      dogs: null,
      season: null,
      price_per_night: 12,
      price_note: "per bay; card, cash or RingGo (location 54524)",
    },
  },
  {
    slug: "seabreeze-appledore",
    name: "Seabreeze",
    kind: "stay",
    // The Club's GPS. The EX39 1NF postcode centroid is 50 m north; an unnamed
    // OSM caravan_site (way 1203517573) is 60 m north-west.
    lat: 51.04950, lon: -4.20770,
    address: "Long Lane, Appledore, EX39 1NF",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/bideford/seabreeze/",
    notes: "Caravan and Motorhome Club CL, members only. Adults only. Five pitches, hardstanding and grass, on 1.5 acres at the edge of Northam Burrows. Arrivals 1–8pm, leave by 11am",
    // The Club's listing. seabreezecampsite.co.uk no longer resolves.
    verified: null,
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Listed as ideal for dogs; no conditions given",
      season: { from: "03-01", to: "01-03" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "knotty-corner",
    name: "Knotty Corner Camp Site",
    kind: "stay",
    // The Club's GPS; not in OpenStreetMap, and the Club shows no postcode.
    lat: 51.00417, lon: -4.26244,
    address: "Knotty Corner, Bideford",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/devon/bideford/knottycornercampsite/",
    notes: "Camping and Caravanning Club CS, members only; advance booking essential. Motorhomes up to 7.5 m. Grass and hardstanding pitches on a gently sloping 1.5 acres. Toilets, showers, washing-up",
    // The Club's listing; the owner has no site of their own.
    verified: null,
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Listed as pets welcome; no conditions given",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 20,
      price_note: "members, per unit including two adults and two children; up to £25",
      hookup: true,
    },
  },
  {
    slug: "skern-abbotsham",
    name: "Skern Adventure Abbotsham",
    kind: "stay",
    // Centre of OSM way 222161725, "The Ultimate High", tagged Abbotsham Road,
    // EX39 5AP — the activity centre's own address. The postcode centroid is
    // 800 m south-west, in Abbotsham village.
    lat: 51.02047, lon: -4.23897,
    address: "Abbotsham Road, Bideford, EX39 5AP",
    phone: "01237 475992",
    url: "https://www.skernadventure.co.uk/glamping-and-camping",
    notes: "Campsite at an outdoor activity centre: campervan touring pitches and tent pitches. Toilet and shower block, washing-up, waste disposal point, camp shop and café. Book online",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say dogs allowed; Skern's own pages don't say",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "seagate-appledore",
    name: "The Seagate",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1176460206.
    lat: 51.05432, lon: -4.19132,
    address: "The Quay, Appledore, EX39 1QS",
    phone: "01237 472589",
    email: "seagate@youngs.co.uk",
    url: "https://www.theseagate.co.uk/",
    notes: "Young's pub on the quay; breakfast daily, walk-ins welcome. Dogs welcome in the pub. Seventeen rooms, above the pub and in a converted sail loft. Customer car park, first come first served. Johns deli and café is 180 m along the quay",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms take up to two; £25 a night for one or two. On a lead in shared areas, never left unsupervised, not on beds or soft furnishings",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "waterfront-inn-westward-ho",
    name: "The Waterfront Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 979335543. OSM gives EX39 1LH; the inn's own site 1LG.
    lat: 51.04139, lon: -4.23687,
    address: "Golf Links Road, Westward Ho!, EX39 1LG",
    phone: "01237 474737",
    url: "https://www.waterfrontinn.co.uk/",
    notes: "Pub with eleven en-suite B&B rooms; rooms are booked through Braddicks Holidays. Dogs welcome in the bar. Free parking. Live music some Friday and Saturday nights carries to the rooms",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      // A 2016 TripAdvisor review describes a dog room (Petrel); the owner's
      // room page now says "No Pets".
      dogs: false,
      dogs_note: "No pets in the rooms",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "corner-house-bideford",
    name: "Corner House Guest House",
    kind: "stay",
    // OSM node 48931638.
    lat: 51.02043, lon: -4.20802,
    address: "The Strand, Bideford, EX39 2ND",
    phone: "01237 473722",
    url: "http://cornerhouseguesthouse.co.uk/",
    notes: "Guest house by Victoria Park, north of the Quay; five rooms. Street pay and display, free outside charging hours. Check-in after 4pm; key box for late arrivals",
    verified: "2026-09-13",
    stay: {
      type: "bnb",
      // BringFido lists dogs allowed; unconfirmed.
      dogs: null,
      dogs_note: "Not stated on the owner's site",
      season: "all-year",
      price_per_night: 88,
      price_note: "twin en-suite; king double from £105",
    },
  },
  {
    slug: "royal-hotel-bideford",
    name: "The Royal Hotel",
    kind: "stay",
    // Centre of OSM way 539889358.
    lat: 51.01621, lon: -4.20099,
    address: "Barnstaple Street, Bideford, EX39 4AE",
    phone: "01237 472005",
    url: "https://royalbideford.co.uk/",
    notes: "Hotel at the East-the-Water end of the Long Bridge, on the Tarka Trail. 32 rooms",
    verified: "2026-09-13",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "£20 per dog per night, in a handful of dog-friendly rooms. Dogs allowed in the bar and Merchants Bistro",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "durrant-house-hotel",
    name: "Durrant House Hotel",
    kind: "stay",
    // Centre of OSM way 226884254.
    lat: 51.03379, lon: -4.21197,
    address: "Heywood Road, Northam, EX39 3QB",
    phone: "01237 472361",
    url: "https://durranthousehotel.com/",
    notes: "Hotel between Bideford and Northam, with the Olive Tree restaurant and the Appledore bar",
    verified: "2026-09-13",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "£20 per dog per night; ring before booking so a dog room can be chosen. Dogs in the Appledore bar, not the Olive Tree restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hoops-inn",
    name: "The Hoops Inn & Country Hotel",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 343083672. The EX39 5DL postcode centroid is 10 m away.
    lat: 50.98464, lon: -4.31682,
    address: "Horns Cross, Bideford, EX39 5DL",
    phone: "01237 451222",
    email: "sales@hoopsinn.co.uk",
    // hoopsinn.co.uk redirects here.
    url: "https://www.hotelsnorthdevon.co.uk/",
    notes: "Part-thatched inn with thirteen en-suite rooms and a restaurant; breakfast included. 2.5 acres of gardens",
    verified: "2026-09-13",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In the family room and all standard doubles and twins. On the floor in bedding you bring; not on beds or furniture",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "roeys-retreat",
    name: "Roey's Retreat Campsite",
    kind: "stay",
    // EX39 5RU via postcodes.io. OSM has no campsite here; its "Dyke Green
    // Farm" (node 5792174162), which shares the postcode, is 25 m away.
    lat: 50.98567, lon: -4.40563,
    address: "Clovelly Cross, Higher Clovelly, EX39 5RU",
    phone: "07551 007049",
    url: "https://www.roeysretreatcampsite.co.uk/",
    notes: "At the Clovelly Cross roundabout. 25 grass pitches, 6 × 6 m, all with water; toilets, showers, small shop. Booked through campsites.co.uk; 15% deposit non-refundable",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, on a lead",
      // The site says "April to October"; exact dates not given.
      season: { from: "04-01", to: "10-31" },
      price_per_night: 30,
      price_note: "from, electric pitch (10 A); non-electric from £25",
      hookup: true,
    },
  },
  {
    slug: "red-lion-clovelly",
    name: "The Red Lion Hotel",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 120698635.
    lat: 50.99892, lon: -4.39805,
    address: "48 The Quay, Clovelly, EX39 5TF",
    phone: "01237 431237",
    url: "https://www.redlion-clovelly.co.uk/rooms/",
    notes: "On the harbour at the foot of the car-free cobbled street; seventeen rooms, all with a sea view. A stay includes entry to the village and Clovelly Court Gardens, and parking. Harbour Restaurant, and the Snug and Harbour bars",
    verified: "2026-09-13",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Three dog-friendly rooms, £20 or £25 supplement; ring to book one",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "stoke-barton-farm",
    name: "Stoke Barton Farm Campsite",
    kind: "stay",
    // OSM node 4326028589, in the camping fields (tagged "Stroke Barton").
    // The farmyard and entrance, opposite Stoke church, are 210 m north-east.
    // EX39 6DU is shared with Hartland Quay, so its centroid is no help.
    lat: 50.99186, lon: -4.51800,
    address: "Stoke, Hartland, Bideford, EX39 6DU",
    phone: "01237 441238",
    url: "https://www.westcountry-camping.co.uk/",
    notes: "Working farm opposite Stoke church. Over 12 acres of camping fields, 30 hookups; laundry, chemical disposal. Larger vans: ignore satnav through Hartland village and follow the site's route via Pengilly Way. No supermarket deliveries; no driving on site after dark. The Hartland Quay car parks send vans here",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £2.50 each a night. On a lead at all times, never left unattended, not in the facilities",
      // 2026 dates: Friday 3 April to Sunday 4 October.
      season: { from: "04-03", to: "10-04" },
      price_per_night: 26,
      price_note: "two adults at £13 each; single occupancy £15; hookup £5.50",
      hookup: true,
    },
  },
  {
    slug: "pitt-farm",
    name: "Pitt Farm Campsite",
    kind: "stay",
    // OSM node 11939912973, an unnamed campsite carrying Pitt Farm's phone
    // number. The EX39 6BZ postcode centroid is 35 m away.
    lat: 51.00607, lon: -4.49302,
    address: "Pitt Farm, Hartland, Bideford, EX39 6BZ",
    phone: "07795 411474",
    url: "https://pittfarmcamping.co.uk/",
    notes: "Working dairy farm near Hartland Point; one flat 5-acre field with sea views. Toilet and shower block, chemical disposal. No wifi. Coming from Bude, don't follow satnav — use the site's directions. Arrive 11am–9pm; later arrivals park in the farmyard until morning. No supermarket deliveries. 01237 441919 also listed",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1 a night. Tethered on your own pitch; not left to wander, not in the toilets",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 22,
      price_note: "two adults at £11 each; 50% deposit, or full payment for stays of two nights or less",
      hookup: false,
    },
  },
  {
    slug: "west-titchberry-farm",
    name: "West Titchberry Farm",
    kind: "stay",
    // OSM node 4868049766.
    lat: 51.01627, lon: -4.50825,
    address: "Hartland Point, Hartland, Bideford, EX39 6AU",
    phone: "01237 441287",
    url: "https://www.hartlandpeninsula.co.uk/hotels-inns-bed-breakfast/west-titchberry-farm/",
    notes: "B&B in an 18th-century farmhouse on a working farm by Hartland Point. Evening meals and packed lunches on request",
    // The Hartland Peninsula Association listing. westtitchberryfarm.co.uk
    // no longer resolves.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Not stated",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hartland-caravan-camping-park",
    name: "Hartland Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 77497859, named "South Lane Caravan Park". The
    // EX39 6DG postcode centroid is 100 m west.
    lat: 50.99135, lon: -4.47467,
    // The owner's site gives Fore Street; the Hartland Peninsula Association
    // listing gives South Lane.
    address: "Hartland, Bideford, EX39 6DG",
    phone: "01237 441876",
    email: "info@hartlandcaravanandcampingpark.co.uk",
    url: "https://www.hartlandcaravanandcampingpark.co.uk/",
    notes: "Four-acre park a few minutes' walk from Hartland village. Grass and hardstanding pitches; shower block, laundry, fishing pond. Holiday caravans on the same site. Buses from the entrance",
    verified: "2026-09-13",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free",
      season: null,
      price_per_night: 29.5,
      price_note: "electric pitch for two £27 plus £2.50 for a motorhome; non-electric £23; solo £7.50 less; rates vary by season",
      hookup: true,
    },
  },
  {
    slug: "fosfelle",
    name: "Fosfelle Country House",
    kind: "stay",
    // Centre of OSM way 77497866. The Club's GPS is 130 m south; the EX39 6EF
    // postcode centroid 60 m west.
    lat: 50.98667, lon: -4.47490,
    address: "Hartland, Bideford, EX39 6EF",
    phone: "01237 441273",
    url: "https://fosfelle.co.uk/caravan-camping/",
    notes: "Caravan and Motorhome Club CL, members only. Five hardstanding pitches with water, 12 A and picnic tables; some sloping; 9 m maximum. Token showers and WCs in private pods, grey and green waste disposal, laundry. Alpacas and miniature donkeys roam the paddock. Arrivals midday–10pm. Ten minutes' walk to Hartland",
    verified: "2026-09-13",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "The Club listing gives a dog wash and dog runs; on a lead on site because of the animals",
      season: "all-year",
      price_per_night: 24,
      price_note: "per pitch including hookup and water, from the Hartland Peninsula Association listing",
      hookup: true,
    },
  },
  {
    slug: "old-smithy-inn",
    name: "The Old Smithy Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 5124645927, the pub. The rooms building (way 1286111649) is
    // 40 m south; the EX39 6HG postcode centroid 30 m.
    lat: 50.93338, lon: -4.51861,
    address: "Welcombe, Bideford, EX39 6HG",
    phone: "01288 331305",
    email: "theoldsmithyinnltd@gmail.com",
    url: "https://www.theoldsmithyinn.co.uk/",
    notes: "Village pub in Welcombe. Three en-suite double rooms across the beer garden, each with its own entrance; breakfast included, parking on site, check-in from 3pm. Bar 12–11pm daily; food Mon–Sat 12–3pm and 5–8pm, Sun 12–6pm. The Motorhome Stopover Club lists free overnight van parking for diners; the pub's own site doesn't mention it",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "The rooms page says pets welcome; no charge or limit given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "bush-inn-morwenstow",
    name: "The Bush Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1076489846. OSM also has a bar node (11066959352)
    // 10 m away.
    lat: 50.90690, lon: -4.54957,
    address: "Crosstown, Morwenstow, Bude, EX23 9SR",
    phone: "01288 331242",
    email: "bushinn.crosstown@gmail.com",
    url: "https://www.thebushinnmorwenstow.com/",
    notes: "13th-century free house at Crosstown, up the combe from Morwenstow church. Camper vans may stay overnight in the car park, and tents in the garden, if you eat or drink at the pub. Food 12–9pm daily; breakfast Sat–Sun 8–11.30am. Four B&B rooms; only Room 4, across the courtyard, is dog-friendly. Live music and quiz nights. The Rectory Tearooms is 350 m away",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome, on leads at all times",
      season: null,
      price_per_night: null,
      price_note: "free if you eat or drink at the pub",
    },
  },
  {
    slug: "rectory-farm-wild-camping",
    name: "Rectory Farm Wild Camping",
    kind: "stay",
    // OSM node 1298693615, "Rectory Farm". OSM has no campsite; park4night's
    // pin for the field is 125 m east.
    lat: 50.90794, lon: -4.55367,
    address: "Rectory Farm, Crosstown, Morwenstow, EX23 9SR",
    url: "https://www.pitchup.com/campsites/England/South_West/Cornwall/Bude/rectory-farm-wild-camping/",
    notes: "Pop-up meadow site on the organic farm by the Rectory Tearooms, a few minutes from the coast path and the Bush Inn. Tents and small campervans. Water, portaloos and a hot shower",
    // Pitchup and park4night listings only; no owner website found.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Pitchup and park4night listings say dogs are allowed",
      // park4night gives 4 Jul–31 Aug; Pitchup opens it on 4 July. A pop-up
      // site's dates are set afresh each year.
      season: { from: "07-04", to: "08-31" },
      price_per_night: 15,
      price_note: "per tent or van, from park4night; an older ukcampsite listing gives £10",
      // ukcampsite.co.uk: no electric hookups.
      hookup: false,
    },
  },
  {
    slug: "dunsmouth-farm",
    name: "Dunsmouth Farm cliff field",
    kind: "stay",
    // Centre of OSM way 1472738998, the farmyard; the EX23 9EG postcode
    // centroid is 50 m away. The fields themselves are on the cliff to the
    // south-west: park4night's pin is 430 m from the farmyard, beside the
    // coast path.
    lat: 50.85471, lon: -4.54950,
    address: "Dunsmouth Farm, Bude, EX23 9EG",
    url: "https://park4night.com/en/place/188825",
    notes: "Two large clifftop fields with the coast path alongside. One toilet and a tap by the entrance. The lane is narrow, steep and rocky: manageable in a small van. Just park; the farmer collects in the evening. Reviewers find the one toilet stretched at weekends",
    // A park4night listing is user-reported, not the operator. searchforsites
    // marks it temporarily closed, but park4night reviews run to 29 Aug 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed",
      season: null,
      price_per_night: 10,
      price_note: "per van, from 2026 park4night reviews",
    },
  },
  {
    slug: "bryder-farm-camping",
    name: "Bryder Farm Camping",
    kind: "stay",
    // Centre of OSM way 1303981194. The EX23 9HP postcode centroid is 120 m
    // west.
    lat: 50.86901, lon: -4.51966,
    address: "Stibb, Bude, EX23 9HP",
    // From OSM.
    phone: "07765 028322",
    url: "https://www.facebook.com/stibb1972/",
    notes: "Small family site at Stibb, inland from Sandymouth. Eight touring pitches with hookup and water, a tent field, static caravans round the edge. Toilets, showers, laundry, waste disposal",
    // Directories (ukcampsite, park4night, Pitchup) and OSM tags only; the
    // owner has a Facebook page and no website.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say dogs are welcome",
      season: null,
      price_per_night: null,
      // OSM power_supply=yes; park4night and ukcampsite agree.
      hookup: true,
    },
  },
  {
    slug: "wildly-camping",
    name: "Wildly Camping",
    kind: "stay",
    // The Google Maps pin linked from the owner's site. OSM has no campsite
    // here, and the EX23 9EE centroid, shared with Bude Holiday Park, is 170 m
    // west.
    lat: 50.84378, lon: -4.54512,
    // The owner's site gives "Maer, Bude"; directories give Maer Lane.
    address: "Maer Lane, Bude, EX23 9EE",
    phone: "07751 164745",
    url: "https://www.wildlycamping.co.uk/",
    notes: "Small field site at Maer, a short walk from Northcott Mouth and Crooklets. Tents and campervans. Two hot showers, two toilets, washing-up sinks, drinking water. No vehicle movement 10pm–7am; reception unmanned after 6pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On leads and supervised at all times",
      season: null,
      price_per_night: 24,
      price_note: "two people; extra adult £12, under-18 £7",
      // Not stated by the owner. Directories say no electric hookups.
      hookup: null,
    },
  },
  {
    slug: "wooda-farm",
    name: "Wooda Farm Holiday Park",
    kind: "stay",
    // Centre of OSM way 126117203.
    lat: 50.84433, lon: -4.51509,
    address: "Poughill, Bude, EX23 9HJ",
    phone: "01288 352069",
    url: "https://wooda.co.uk/camping/",
    notes: "Large park at Poughill with sea views; 220 touring and camping pitches, grass or hardstanding, some fully serviced. Secure dog exercise field, dog showers and a woodland walk. Farm shop; bar and takeaway March–October. Holiday homes and lodges on the same park",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per touring pitch, for a small nightly charge. On a lead, never left unattended, exercised in the designated areas",
      season: null,
      price_per_night: 35,
      price_note: "from, grass pitch with 16 A hookup; non-electric from £23, hardstanding electric from £41",
      hookup: true,
    },
  },
  {
    slug: "broadclose-park-camping",
    name: "Broadclose Park Camping (Bude Town FC)",
    kind: "stay",
    // Centre of OSM way 1098981036, the football pitch. The EX23 8DR postcode
    // centroid is 100 m away; park4night's pin 50 m.
    lat: 50.83009, lon: -4.53468,
    address: "Broadclose Park, Bude, EX23 8DR",
    // Bude Tourist Information Centre, which takes the bookings.
    phone: "01288 354240",
    url: "https://www.visitbude.info/accommodation/broadclose-park/",
    notes: "Camping field at the football club, a walk from the town centre and Summerleaze; Co-op five minutes, Morrisons ten. Meant for self-contained motorhomes: basic showers, no chemical disposal. Six hookup pitches and 25 unmarked. Training or a match may be on. Book through Visit Bude, or turn up and pay when someone calls round",
    // Visit Bude (the Bude Area Tourist Board) listing. The club's own
    // budetownfc.com now shows a Wix domain error.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "The Visit Bude listing says on a lead on site, with a public footpath alongside for walks",
      season: null,
      price_per_night: 15,
      price_note: "motorhome and up to three people; hookup pitch £20; extra adult £4",
      hookup: true,
    },
  },
  {
    slug: "crescent-car-park-bude",
    name: "Crescent car park",
    kind: "stay",
    // Centre of OSM way 4877218, unnamed, beside the Tourist Information
    // office (way 176871525). The EX23 8LE postcode centroid is 50 m north-east;
    // park4night's two Crescent entries are within 65 m.
    lat: 50.82709, lon: -4.54597,
    address: "The Crescent, Bude, EX23 8LE",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/crescent-bude-ex23-8le/",
    // Rules from Cornwall Council's page and its motorhome parking page. "No
    // return within 48 hours" and "6 m apart, no awnings" are from Visit
    // Bude's page, which reproduces the council's sign. Toilets from OSM.
    notes: "Cornwall Council car park by the Tourist Information Centre and the canal. Self-contained motorhomes with their own toilet may stay overnight in the designated overflow area only: two consecutive nights at most, no return within 48 hours, 6 m apart, no awnings, chairs, BBQs or generators. Overnight tickets from the pay & display machine by the overflow area. Every other council car park in Bude, including Summerleaze, Crooklets and the Wharf, bans motorhomes 11pm–8am. Public toilets by the Tourist Information Centre",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 20,
      price_note: "6pm–9am, April–October; £17.40 November–March",
    },
  },
  {
    slug: "efford-downs-campsite",
    name: "Efford Downs Campsite",
    kind: "stay",
    // Centre of OSM way 1194308228. The EX23 8LJ postcode centroid is 220 m
    // north-east, towards the lane end on Vicarage Road.
    lat: 50.82507, lon: -4.55042,
    address: "Vicarage Road, Bude, EX23 8LJ",
    email: "geddon@effordcamping.co.uk",
    url: "https://effordcamping.co.uk/",
    notes: "No-frills hillside field on Efford Down, the nearest campsite to the town centre, with direct access to the coast path. Sloping, with some flat spots. Water, flushing toilets, hot showers; bring toilet roll. Entrance lane just past the Brendon Arms towards Widemouth. Arrivals 2–9pm; no check-in, display your booking confirmation. Campervans and van conversions welcome; no A-class, twin-axle or over 8 m, and the lane suits nothing over 7 m. Quiet from 9pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£5 a night, paid on arrival; on a lead on site",
      season: null,
      price_per_night: 27,
      price_note: "two people sharing a pitch; extra adult £12; single walker with a tent £15",
      hookup: null,
    },
  },
  {
    slug: "upper-lynstone",
    name: "Upper Lynstone Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 471567786. The EX23 0LP postcode centroid is 230 m
    // south.
    lat: 50.82066, lon: -4.54939,
    address: "Bude, EX23 0LP",
    phone: "01288 352017",
    url: "https://upperlynstone.co.uk/touring-camping/",
    notes: "Family-run park three-quarters of a mile from Bude on the Widemouth road; the coast path adjoins it and the canal towpath leads into town. Touring field of 36 levelled, fenced 10 A pitches, fifteen with hardstandings; more in two camping fields. Heated shower block, chemical disposal, laundry, shop with Calor and Camping Gas. Arrivals noon–9pm. Families and couples only, no groups; single hikers welcome. Holiday caravans for hire",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved pets; on a lead on site and exercised off the park",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "beach-house-widemouth",
    name: "Beach House",
    kind: "stay",
    // OSM node 434057138, tagged "Beach House Hotel". The EX23 0AW postcode
    // centroid is 250 m north.
    lat: 50.79500, lon: -4.55544,
    address: "Marine Drive, Widemouth Bay, Bude, EX23 0AW",
    phone: "01288 361256",
    email: "widemouthbeachhouse@gmail.com",
    url: "https://www.beachhousewidemouth.co.uk/room-booking-in-cornwall/",
    notes: "Laid-back B&B on the foreshore at Widemouth Bay, home of The Break beach bar; the coast path runs through the garden. Some rooms basic; breakfast included. 10% off seven nights or more booked direct",
    verified: "2026-09-14",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "BringFido lists dogs allowed at £15 each per stay; the owner's site doesn't say",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "bay-view-inn-widemouth",
    name: "The Bay View Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 434057136. The EX23 0AW postcode centroid is 140 m north-west.
    lat: 50.79659, lon: -4.55461,
    address: "Marine Drive, Widemouth Bay, Bude, EX23 0AW",
    phone: "01288 361273",
    email: "reservations@bayviewinn.co.uk",
    url: "https://bayviewinn.co.uk/stay/",
    // Room count (six, en-suite) is from directories; the owner's stay page
    // gives none.
    notes: "Family-run pub and restaurant at the top of Widemouth beach, beside Sandparks Campsite, with rooms. Open 11am till late; food 12–2.30pm and 5–8.30pm. Dogs welcome in the surf bar, on the decking and in a dog-friendly area of the restaurant",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site covers dogs in the bar and restaurant, not the rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "sandparks-campsite",
    name: "Sandparks Campsite",
    kind: "stay",
    // Centre of OSM way 1486515788. The EX23 0AW postcode centroid is 280 m
    // north-west.
    lat: 50.79572, lon: -4.55311,
    address: "Marine Drive, Widemouth Bay, EX23 0AW",
    phone: "07551 600748",
    email: "reservations@sandparks.co.uk",
    url: "https://www.sandparkscampsitebude.co.uk/about",
    notes: "Beachside field overlooking Widemouth Bay, with the Bay View Inn at the entrance. Parking by the pitch. New toilet block, heated indoor and outdoor showers, washing-up area, wifi, charging, communal freezer. Campfires and BBQs allowed. Arrivals 10am–9pm, departure by noon",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The owner's FAQ says dog friendly; no limit or charge given",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 30,
      price_note: "from, two adults on a non-electric pitch; electric from £38",
      hookup: true,
    },
  },
  {
    slug: "widemouth-bay-caravan-park",
    name: "Widemouth Bay Caravan Park",
    kind: "stay",
    // Centre of OSM way 159535386. The EX23 0DF postcode centroid is 700 m
    // north-west.
    lat: 50.77678, lon: -4.55236,
    address: "Poundstock, Bude, EX23 0DF",
    phone: "01288 361208",
    url: "https://www.johnfowlerholidays.com/cornwall-holiday-park/widemouth-bay-caravan-park",
    notes: "John Fowler holiday park in 50 acres, five minutes from Widemouth beach. Over 100 touring pitches, grass and hardstanding, with or without hookup, alongside static caravans and safari tents. Indoor pool, bar, restaurant, shop, kids' club and evening entertainment; dog-walking field. Pitches from midday, vacate by 10am; ring ahead if arriving after dusk",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "John Fowler accepts dogs at all its parks, on leads; campsites.co.uk gives up to two per touring pitch",
      // campsites.co.uk listing; the owner's site gives no dates.
      season: { from: "03-06", to: "10-31" },
      price_per_night: null,
      price_note: "John Fowler gives camping pitches from £15 a night across its parks",
      hookup: true,
    },
  },
  {
    slug: "penhalt-farm",
    name: "Penhalt Farm Campsite",
    kind: "stay",
    // OSM node 1708341339. The farmyard (way 1306336516) is 100 m south; the
    // EX23 0DG postcode centroid 200 m south-west.
    lat: 50.77335, lon: -4.56288,
    address: "Penhalt Farm, Widemouth Bay, Bude, EX23 0DG",
    phone: "01288 361210",
    email: "info@penhaltfarm.co.uk",
    url: "https://www.penhaltfarm.co.uk/booking.html",
    notes: "Working farm on the coastal downs a mile south of Widemouth Bay, with sea views. Eight-acre site for tourers and tents, pitched round the edge; general pitches about 11 × 8 m. Shower block, laundry, games room, play area, small shop. Awnings allowed, no gazebos, no fires on the grass. Arrivals from 2.30pm, departure by 11am",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, £3 each a night; under control at all times, with farm animals nearby",
      // 2026's dates, which may not recur.
      season: { from: "04-25", to: "10-31" },
      price_per_night: null,
      price_note: "pitch price only through the booking form; includes two adults and two children; hookup £5 (max 17 A), extra adult £5",
      hookup: true,
    },
  },
  {
    slug: "lower-tresmorn",
    name: "Lower Tresmorn Farm",
    kind: "stay",
    // OSM node 968210174. The EX23 0NU postcode centroid is 520 m east.
    lat: 50.74961, lon: -4.61008,
    address: "Lower Tresmorn Farm, Crackington Haven, Bude, EX23 0NU",
    phone: "01840 230667",
    url: "http://www.lowertresmorn.co.uk/bed-and-breakfast-crackington-haven-bude-cornwall.php",
    notes: "B&B in a medieval National Trust farmhouse above Crackington Haven; the coast path is a few minutes down the lane and across a field. Six rooms across the farmhouse, up a stone spiral stair, and the converted barn. Minimum stay usually two nights, shorter by arrangement. Children over 8. Self-catering cottages and a cabin too",
    verified: "2026-09-14",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "coombe-barton-inn",
    name: "The Coombe Barton Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 33796009. The EX23 0JG postcode centroid is 110 m east.
    lat: 50.74138, lon: -4.63284,
    address: "Crackington Haven, EX23 0JG",
    phone: "01840 230345",
    url: "https://coombebarton.co.uk/rooms/",
    notes: "Pub at the head of the beach. Five rooms, doubles and a triple, most en-suite; book by phone or the website's form. Open daily from 11.30am, noon on Sundays; lunch 12–2pm daily, dinner Mon–Sat 5.30–7.30pm",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "No dogs in bedrooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hallagather-crackington-campsite",
    name: "Crackington Campsite (Hallagather Farm)",
    kind: "stay",
    // Centre of OSM way 499123928, "Hallagather Farm". OSM has no campsite;
    // the EX23 0LA postcode centroid is 30 m east, park4night's pin 90 m east.
    lat: 50.73037, lon: -4.62536,
    address: "Hallagather Farm, Crackington Haven, EX23 0LA",
    phone: "07869 591670",
    email: "hallagather@gmail.com",
    url: "https://www.hallagatherfarmholidays.co.uk/camping",
    notes: "Relaxed farm field site, the nearest campsite to the beach: 30 minutes' walk down to Crackington Haven. Tents, campers and caravans; no set pitches, some sea views. Campfires allowed; fire pits and logs from the farm. Simple facilities with plenty of hot water. Book through the enquiry form or WhatsApp 07446 302306",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs on leads",
      // A June 2026 park4night review gives "April to October ish".
      season: null,
      price_per_night: null,
      price_note: "from £8 a night, basis not stated; directories give £7 an adult, £4 a child, £1 a dog",
      // park4night description: no electric hookup.
      hookup: false,
    },
  },
  {
    slug: "trelay-farm-campsite",
    name: "Trelay Farm Campsite",
    kind: "stay",
    // OSM node 8887496232, Trelay Farm Shop; OSM has no campsite. The EX23 0NJ
    // postcode centroid is 400 m south.
    lat: 50.73846, lon: -4.58550,
    // Directories (ukcampsite, hotels.uk.com); the owner's site gives no address.
    address: "Trelay Farm, St Gennys, Bude, EX23 0NJ",
    phone: "07890 534713",
    email: "camping@trelay.org",
    url: "https://www.trelaycampsite.com/",
    notes: "Small eco site on a 32-acre community smallholding, two miles inland of Crackington Haven. Ten pitches in two areas, only four for campervans; parking limited. Toilets, hot showers, shared indoor space for cooking and drying, fridge-freezer, charging. Fire pits for hire. Greener Camping Club members only; you're enrolled when you book. They can sometimes collect walkers by car",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £2 each; on a lead no longer than 2 m at all times, never left unattended",
      season: null,
      price_per_night: 25,
      price_note: "tent or campervan pitch with two people; solo £16; extra person £2.50; plus £12 a year Club membership",
      hookup: false,
    },
  },
  {
    slug: "old-wainhouse-inn",
    name: "The Old Wainhouse Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1185404186. The EX23 0BA postcode centroid is 3 m away.
    lat: 50.73021, lon: -4.57791,
    // The owner's site gives EX23 0BA and, further down, EX23 0XB, which
    // postcodes.io doesn't recognise.
    address: "Wainhouse Corner, St Gennys, Bude, EX23 0BA",
    phone: "01840 230711",
    email: "oldwainhouseinn@yahoo.com",
    url: "https://www.theoldwainhouseinn.co.uk/services-4",
    notes: "Traditional pub on the A39 at Wainhouse Corner, three miles inland of Crackington Haven. Four en-suite rooms: twin, double and single, room only or with breakfast. Dogs welcome inside and out in the pub. Premier convenience store next door",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site says nothing about dogs in the rooms; dog directories say only some superior rooms take them",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "bude-club-site",
    name: "Bude Camping and Caravanning Club Site",
    kind: "stay",
    // Centre of OSM way 906112853. The Club's own GPS is 920 m south-west; the
    // EX23 0BG postcode centroid 600 m north-east.
    lat: 50.71915, lon: -4.58579,
    address: "Gillards Moor, St Gennys, EX23 0BG",
    phone: "01840 230650",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/cornwall/bude/bude-camping-and-caravanning-club-site/",
    notes: "Club site just off the A39, with countryside views. Grass and hardstanding pitches, some super-service. No motorhome service point, but grey waste and chemical disposal. Shop, wifi, play area, accessible facilities. The lanes round it have no footways, so the coast is a drive. Check-in 1pm, check-out noon",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Pets welcome; no dog walk or off-lead area on site",
      season: { from: "05-01", to: "09-28" },
      price_per_night: null,
      price_note: "Club members from £10.50 an adult; additional charges may apply",
      hookup: true,
    },
  },
  {
    slug: "lower-pennycrocker-farm",
    name: "Lower Pennycrocker Farm",
    kind: "stay",
    // Centre of OSM way 309844854. The PL35 0BY postcode centroid is 110 m
    // south-west.
    lat: 50.70351, lon: -4.65592,
    address: "Lower Pennycrocker Farm, Boscastle, PL35 0BY",
    phone: "07967 605392",
    email: "colin.heard@yahoo.com",
    url: "https://pennycrocker.uk/",
    notes: "Family-owned farm site above Boscastle, two miles from the village along the coast path. Parking beside your pitch. Free showers, toilets, accessible toilet, washing-up room. Groups of up to eight. Office 9am–7pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £2 each a night. Directories add on a lead and exercised off site",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 20,
      price_note: "two adults at £10 each; child 5+ £5; hookup £7",
      hookup: true,
    },
  },
  {
    slug: "wideacres-camping",
    name: "Wideacres Camping",
    kind: "stay",
    // OSM node 14054273166. park4night's pin is 60 m away; the PL35 0BU
    // postcode centroid, which the owner warns leads to Cargurra Farm, 610 m east.
    lat: 50.69646, lon: -4.65660,
    address: "St Juliot, Boscastle, PL35 0BU",
    phone: "07971 896360",
    url: "https://www.wideacrescamping.co.uk/",
    notes: "Family-run field site at St Juliot with sea views, a mile inland of the coast path; Boscastle is a walk down the Valency valley. Park where you pitch. Hot showers, indoor washing-up area, playground, and a small bar with a pool table, serving pizzas in peak season. A request bus stop at the end of the lane. park4night reports a notice on site: two people and two nights minimum",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: false,
      dogs_note: "A dog-free site",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 20,
      price_note: "per pitch, from park4night; electricity £5",
      hookup: true,
    },
  },
  {
    slug: "trebyla-farm",
    name: "Trebyla Farm Camping & Caravan Site",
    kind: "stay",
    // Centre of OSM way 233751142. park4night's pin is 60 m away; the PL35 0HL
    // postcode centroid 520 m north-west.
    lat: 50.69827, lon: -4.66510,
    address: "Trebyla Farm, Boscastle, PL35 0HL",
    phone: "01840 250308",
    email: "brigjl@aol.com",
    url: "https://boscastlecampsite.co.uk/",
    notes: "Two-acre field on a working farm a mile and a half above Boscastle, with sea views; the coast path is within walking distance. 30 pitches for tents, tourers and motorhomes, sheltered by high hedges. Toilets, showers, washing-up room, chemical disposal, drinking water. Fire pits on request. Book by email or phone; the owner says the booking form has been unreliable. Reviewers say bring levelling ramps",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories (ukcampsite, Pitchup) say dogs are welcome; the owner's site doesn't say",
      // park4night says open all year; the owner gives no dates.
      season: null,
      price_per_night: 18,
      price_note: "two adults at £9 each; single adult £13; child 3–17 £4.50; hookup £5",
      hookup: true,
    },
  },
  {
    slug: "yha-boscastle",
    name: "YHA Boscastle",
    kind: "stay",
    // OSM node 3552396438; YHA's own lat/lng is 3 m away. The PL35 0HD
    // postcode centroid is 130 m east.
    lat: 50.69073, lon: -4.69564,
    address: "Palace Stables, Boscastle, PL35 0HD",
    url: "https://www.yha.org.uk/hostel/yha-boscastle",
    notes: "Hostel in the old Palace Stables by the harbour, on the coast path. Self-catering only; drying room, cycle store. Reception 8–10am and 5–8.30pm. No parking: drop bags at the door, then park in the pay and display 300 m away",
    verified: "2026-09-14",
    stay: {
      type: "hostel",
      dogs: false,
      dogs_note: "Assistance dogs only, unless you hire the whole hostel",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "wellington-boscastle",
    name: "The Wellington",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1289419384. The PL35 0AQ postcode centroid is 30 m away.
    lat: 50.68922, lon: -4.69294,
    address: "The Harbour, Boscastle, PL35 0AQ",
    phone: "01840 250202",
    url: "https://www.wellingtonhotelboscastle.com/our-rooms",
    notes: "16th-century coaching inn in the valley at the foot of Boscastle, run by St Austell Brewery. En-suite rooms with breakfast. Open 8am–11pm. Check-in from 3pm, out by 11am; two nights minimum on Friday and Saturday in peak times. A few parking spaces at the pub, first come first served",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a select number of dog-friendly rooms, booked as such; £20 per dog per stay. Not left alone in the room. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trewethett-farm-club-site",
    name: "Trewethett Farm Club Campsite",
    kind: "stay",
    // Centre of OSM relation 2189213, an unnamed caravan site whose outline
    // contains the Club's own GPS point, 190 m south. The PL34 0BQ postcode
    // centroid is 260 m south.
    lat: 50.67570, lon: -4.72684,
    address: "Trethevy, Tintagel, PL34 0BQ",
    phone: "01840 770222",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/cornwall/trewethett-farm-club-campsite/",
    notes: "Caravan and Motorhome Club site on the clifftop above Bossiney Cove; the coast path borders it. Closed from 14 September 2026 for redevelopment, due to reopen 11 June 2027, subject to planning. 146 pitches, 69 hardstanding; maximum outfit 9 m. Non-members welcome. Motorhome service point, laundry, family washroom, wifi, play area, late-arrivals area with hookup. Earliest arrival 1pm. Nearest shops are in Tintagel",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dog walk on and from the site",
      // The Club's open dates for 2027, the first season after redevelopment.
      season: { from: "06-11", to: "11-01" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "little-clifden-campsite",
    name: "Little Clifden Campsite",
    kind: "stay",
    // Centre of OSM way 1551177562. park4night's pin is 80 m away; the PL34 0BD
    // postcode centroid 180 m north.
    lat: 50.66468, lon: -4.72847,
    // Cool Cornwall's listing.
    address: "Little Clifden, Tintagel, PL34 0BD",
    url: "https://park4night.com/en/place/435502",
    notes: "Big field on a dairy farm inland of Bossiney, with sea views; pick your own pitch. Sloping: bring ramps. Toilets, two coin showers (£1 for 4 minutes, 50p coins), washing-up area, water tap, bins. Fire pits for hire; campfires and BBQs allowed. Half a mile from St Nectan's Glen, 30 minutes' walk to Tintagel",
    // Directories and park4night only; no owner website found.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Cool Cornwall and Go Explore say dogs welcome on a lead, with livestock next door; park4night lists pets allowed",
      // park4night: open from 3 Jun 2026, and a May 2026 review found it shut.
      // No closing date found.
      season: null,
      price_per_night: 20,
      price_note: "from park4night and its 2024–25 reviews; one reviewer paid that for one person and a car",
      // OSM power_supply=no.
      hookup: false,
    },
  },
  {
    slug: "bossiney-cove-campsite",
    name: "Bossiney Cove Campsite & Car Park",
    kind: "stay",
    // OSM node 4935264256, "Bossiney Cove Parking". park4night's pin is 20 m
    // away; the PL34 0AY postcode centroid 140 m south-west.
    lat: 50.66828, lon: -4.73640,
    // From the park4night listing.
    address: "Bossiney, Tintagel, PL34 0AY",
    url: "https://park4night.com/en/place/45472",
    notes: "Mown clifftop field on the B3263 between Tintagel and Boscastle, above Bossiney Haven, looking towards Lundy. Room for about 30 vans, no set pitches; sloping, so bring ramps. Overnight for self-contained campervans only. Gate open 9am–7pm, with a code for leaving early; pay the site manager 6–7pm, or book ahead on Pitchup. Drinking water; 2026 reviews report two portaloos added in June and cassette emptying on request. May shut to vehicles after heavy rain. Coffee and ice-cream van in the holidays. 10–15 minutes' walk to Tintagel beside the road. Day parking £3, out by 7pm",
    // The listing was written by the site ("BossineyCove") but isn't the
    // owner's own website; none found.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed; a May 2026 review stayed with a dog",
      // April to October, from the site's listing.
      season: { from: "04-01", to: "10-31" },
      price_per_night: 15,
      price_note: "per van, from the listing and 2026 reviews; £5 until 2025",
    },
  },
  {
    slug: "camelot-castle-hotel",
    name: "Camelot Castle Hotel",
    kind: "stay",
    // Centre of OSM way 108200004. The PL34 0DQ postcode centroid is 80 m south.
    lat: 50.66821, lon: -4.75555,
    address: "Tintagel, PL34 0DQ",
    phone: "01840 770202",
    url: "https://camelotcastle.com/dog-friendly-stays/",
    notes: "Clifftop hotel on the headland above Tintagel, beside the coast path. Sea- and moor-view rooms, self-catering apartments, restaurant and afternoon tea",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Classic rooms only: one dog per room, up to 20 kg and at least 12 months old, £22 a night. Ring reservations before booking. Allowed everywhere but the main restaurant and non-dog rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "king-arthurs-car-park",
    name: "King Arthur's Car Park",
    kind: "stay",
    // Centre of OSM way 107483304. park4night's pin is 80 m away; the PL34 0DA
    // postcode centroid 100 m south.
    lat: 50.66431, lon: -4.75154,
    address: "Brunswick House, Fore Street, Tintagel, PL34 0DA",
    phone: "01840 770870",
    email: "info@tintagelcarpark.co.uk",
    url: "https://www.tintagelcarpark.co.uk/",
    notes: "Private car park in the village beside the King Arthur's Arms, licensed for overnight stays by any vehicle. Level tarmac all year; a grass motorhome area Good Friday–31 October, 15 vans at most, 6 m apart; summer overflow fields from about the third week of July to mid-September, taking vans, tents and a vehicle-free field for walkers. Arriving before 5pm, pay the hourly rate on top. Toilets 50p, 6am–11pm; coin shower £3 for 4 minutes; washing-up £2; drinking water £2–4; cassette emptying £5; grey water and refuse free. Pay by machine or RingGo. The council car parks at Tintagel Visitor Centre, Trebarwith Strand and Boscastle's Cobweb ban motorhomes 11pm–8am",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: true,
      dogs_note: "On leads; clean up after them",
      // Tarmac all year; the grass and overflow areas are seasonal.
      season: "all-year",
      price_per_night: 7,
      price_note: "5pm–10am; 24 hours £14",
    },
  },
  {
    slug: "king-arthurs-arms",
    name: "King Arthur's Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 33809331. The PL34 0DA postcode centroid is 20 m away.
    lat: 50.66352, lon: -4.75150,
    address: "Fore Street, Tintagel, PL34 0DA",
    phone: "01840 770628",
    email: "info@kingarthursarms.co.uk",
    url: "https://kingarthursarms.co.uk/our-rooms/",
    notes: "Family-run free house in the centre of Tintagel with B&B rooms: doubles and family rooms above the pub, six ground-floor annexe rooms, five of them wheelchair-accessible wet rooms, and a three-bedroom flat. Breakfast included. Open from 9am; food 8.30am–9pm in season. Guests park free in King Arthur's Car Park next door, motorhomes included, midday to midday. Reservations office 9.30am–5.30pm",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms with easy outdoor access; no charge or limit given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-tintagel-country-club-car-park",
    name: "Old Tintagel Country Club Car Park",
    kind: "stay",
    // Centre of OSM way 107483307. park4night's pin is 40 m away; the PL34 0DD
    // postcode centroid 50 m.
    lat: 50.66479, lon: -4.75278,
    // From the park4night listing.
    address: "Atlantic Road, Tintagel, PL34 0DD",
    url: "https://park4night.com/en/place/151377",
    notes: "Private pay car park in the village on Atlantic Road, day and night. Vans use the grass at the far end, flat enough. 2025–26 reviews report toilets and a shower, open only to those staying the night",
    // park4night listing and reviews; no operator website found.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed",
      season: "all-year",
      price_per_night: 10,
      price_note: "8pm–9am, from park4night; a June 2025 reviewer was charged £10 against £5 on the sign",
    },
  },
  {
    slug: "olde-malthouse-tintagel",
    name: "Ye Olde Malthouse Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1289436507. The PL34 0DA postcode centroid is 140 m east.
    lat: 50.66407, lon: -4.75283,
    address: "Fore Street, Tintagel, PL34 0DA",
    phone: "01840 770461",
    url: "https://malthousetintagel.com/our-rooms/",
    notes: "14th-century inn at the top of Tintagel's main street. Nine en-suite rooms, from a single popular with coast path walkers to a ground-floor Garden Suite; cooked breakfast and parking at the rear included. Kitchen open seven days",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Seven of the nine rooms; Rooms 1 and 8 are pet-free. No charge given on the owner's site; stayinapub says nominal",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "michael-house-treknow",
    name: "Michael House",
    kind: "stay",
    // OSM node 13408566001. The PL34 0EW postcode centroid is 5 m away.
    lat: 50.64738, lon: -4.74947,
    address: "Trelake Lane, Treknow, Tintagel, PL34 0EW",
    phone: "01840 770592",
    email: "info@michael-house.co.uk",
    url: "https://michael-house.co.uk/",
    notes: "Vegan guest house in Treknow, a mile south of Tintagel, looking down the valley to Trebarwith Strand; the coast path is ten minutes' walk. Two en-suite doubles, one can be a twin. Vegan evening meals by arrangement, £25 three courses; unlicensed, bring your own. Resident cats and dogs. £25 a person deposit; cash or transfer",
    verified: "2026-09-14",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "By arrangement: £20 per dog per stay on the tariff, £15 in the terms",
      // "Usually open nearly all year".
      season: null,
      price_per_night: 110,
      price_note: "two sharing, one night; £47 each a night for 2–4 nights, £42 for five or more; single supplement £20",
    },
  },
  {
    slug: "mill-house-inn-trebarwith",
    name: "The Mill House Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1221432352. The PL34 0HD postcode centroid is 80 m west.
    lat: 50.64521, lon: -4.74769,
    address: "Trebarwith Strand, Tintagel, PL34 0HD",
    phone: "01840 770200",
    email: "management@themillhouseinn.co.uk",
    url: "http://www.themillhouseinn.co.uk/staying-at-the-mill-house/",
    notes: "Former 18th-century corn mill in seven acres of its own wooded valley, ten minutes' walk up from Trebarwith Strand. Eight en-suite rooms, including a family room for five. Bar with a slate floor and log fires, restaurant, residents' lounge, terraces",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Dogs welcome in the bar and outside, not the restaurant since 1 June 2026; the owner's site doesn't say about rooms",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "port-william-trebarwith",
    name: "Port William",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 316315373. The PL34 0HB postcode centroid is 230 m east.
    lat: 50.64421, lon: -4.76113,
    address: "Trebarwith Strand, Tintagel, PL34 0HB",
    phone: "01840 770230",
    url: "https://www.theportwilliam.co.uk/our-rooms/",
    notes: "St Austell Brewery pub on the hillside above Trebarwith Strand, by the coast path. Eight sea-view rooms, all first floor by stairs, no extra beds or cots; breakfast included. Open 8am–11pm. Two nights minimum, with Saturday restrictions. Check-in from 3pm, out by 10.30am. A few parking spaces; the council car park is a minute away",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a select number of dog-friendly rooms, booked as such; £20 per dog per stay. Not left alone in the room. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "the-port-gaverne",
    name: "The Port Gaverne",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 550576670, still "Port Gaverne Hotel". The owner's directions
    // link is 40 m away; the PL29 3SQ postcode centroid 90 m south-east.
    lat: 50.59274, lon: -4.82211,
    address: "Port Gaverne, Port Isaac, PL29 3SQ",
    phone: "01208 822973",
    email: "portgaverne@staustellbrewery.co.uk",
    url: "https://www.portgavernecornwall.co.uk/our-rooms",
    notes: "St Austell Brewery pub with rooms at the head of Port Gaverne cove, on the coast path; formerly the Port Gaverne Hotel. Rooms on the first and second floors up a narrow, steep stair; no extra beds, travel cots by arrangement. Breakfast included, 8–11am. Open 8am–11pm, 10.30pm Sundays; food noon–9pm, 9.30pm Friday and Saturday. Check-in from 3pm, out by 11am. Two nights minimum on Friday and Saturday in peak times. No parking: drop bags at the door, then limited on-street spaces or the New Road long-stay car park at the top of the hill. Reservations also on 0345 241 1133",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a select number of dog-friendly rooms, booked as such; £20 per dog per stay. On leads in public areas, not left alone in the room. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-school-hotel-port-isaac",
    name: "The Old School Hotel",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 484533626. The PL29 3RD postcode centroid is 60 m
    // south-east; OSM's addr:postcode is PL29 3RB.
    lat: 50.59331, lon: -4.83222,
    address: "Fore Street, Port Isaac, PL29 3RD",
    phone: "01208 880721",
    email: "reception@theoldschoolhotel.co.uk",
    url: "https://www.theoldschoolhotel.co.uk/accommodation/",
    notes: "The village's old school, above the harbour, seen in Doc Martin. Twelve en-suite rooms: five kingsize, one of them a family room for four; five small doubles, four on the ground floor; two ground-floor singles with wet rooms. Breakfast included, 8.30–10am. Restaurant and bar open to non-residents: lunch noon–2.30pm, snacks to 5pm, dinner 6–9pm; winter hours may vary. Check-in from 3pm, out by 11am. A small residents' car park, space booked ahead and charged; otherwise the public car parks. Second number 01208 880020",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Only in a limited selection of rooms, arranged at booking and listed on the confirmation; a dog brought without permission means leaving and paying in full",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "slipway-port-isaac",
    name: "The Slipway",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 567523157, "Slipway Hotel". The PL29 3RH postcode
    // centroid is 50 m south-east.
    lat: 50.59192, lon: -4.83211,
    address: "Harbour Front, Port Isaac, PL29 3RH",
    phone: "01208 880264",
    email: "slipway@portisaachotel.com",
    url: "https://portisaachotel.com/stay/",
    notes: "Bar and restaurant on the harbour front with seven en-suite rooms above: four sea-view doubles, two with balconies; a double with lounge and a twin at the back; a loft suite. Breakfast 8.30–10am. Open 9am till late daily; covered terrace over the harbour. No parking: drop luggage only, since cars left outside are fined; the public car parks are 5–10 minutes' walk uphill",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "Pets are not allowed to stay",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trewetha-farm",
    name: "Trewetha Farm",
    kind: "stay",
    // Centre of OSM way 463191666, "Trewtha Farm". The PL29 3RU postcode
    // centroid is 130 m south.
    lat: 50.58709, lon: -4.81930,
    address: "Trewetha Farm, Port Isaac, PL29 3RU",
    phone: "01208 880256",
    email: "trewethafarm@btopenworld.com",
    url: "https://trewethafarm.wordpress.com/en-suite-bed-and-breakfast/",
    notes: "B&B in an 18th-century farmhouse on a four-acre smallholding in the hamlet of Trewetha, above Port Isaac; two footpaths lead from the farm to the coast path. Three en-suite doubles, one a family room for four, and a sea-view twin with a nearby bathroom. Eggs from the farm's own hens and ducks. Ample parking. Self-catering cottages and lodges too. The website's last post is from 2020, so ring to check",
    // Checked against the owner's site, which looks unchanged since 2020.
    verified: "2026-09-14",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      // "Room rates are the same all year round"; no closed season given.
      season: null,
      price_per_night: 85,
      price_note: "per room, the same all year",
    },
  },
  {
    slug: "lower-bodannon",
    name: "Lower Bodannon (Coastal Holidays)",
    kind: "stay",
    // Postcode centroid (PL29 3RU); OSM has nothing here. park4night's pin,
    // placed by the owner, is 210 m east.
    lat: 50.58592, lon: -4.81950,
    // From the park4night listing.
    address: "Lower Bodannon, Trewetha, Port Isaac, PL29 3RU",
    url: "https://park4night.com/en/place/362684",
    notes: "Farmer's meadow above Port Gaverne with sea views, five van places; Port Isaac is walkable. Toilet, shower and a kitchenette with microwave and washing machine; electricity only for charging phones. Up a bumpy track. A July 2026 reviewer says turn up and post £20 in an envelope through the white bungalow's letterbox; a September 2026 review found water only at the outdoor tap and the toilet, none in the kitchenette or shower. One 2025 reviewer's emails went unanswered. Glamping pods and cottages on the same farm",
    // park4night listing (written by the operator) and reviews; no owner website found.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night lists pets allowed; a July 2026 reviewer asks guests to pick up after dogs",
      // The listing says seasonal, but a reviewer stayed on 29 December 2025.
      season: null,
      price_per_night: 20,
      price_note: "per van, from park4night and 2024–26 reviews; a July 2025 reviewer paid £10 for a tent",
      hookup: false,
    },
  },
  {
    slug: "pennant-farm",
    name: "Pennant Farm",
    kind: "stay",
    // OSM node 11295322636. park4night's pin is 20 m away; the PL29 3TP
    // postcode centroid 520 m south-west.
    lat: 50.57703, lon: -4.82707,
    // Directories (Kompass, and listings drawn from its Facebook page).
    address: "Pennant Farm, St Endellion, Port Isaac, PL29 3TP",
    phone: "01208 880574",
    url: "https://park4night.com/en/place/493790",
    notes: "Camping field on a working farm near St Endellion, with country views; tractors pass. Sloping, with some level spots; 15 places on park4night. Two toilets and one shower, rustic but clean, hot and free. A June 2025 reviewer paid cash. Reviewers walk to Port Isaac in about 30 minutes by road or across the fields. Holiday cottages and a shepherd's hut too",
    // park4night and directories; the only owner presence is a Facebook page.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories quoting its Facebook page say dogs welcome; park4night lists pets allowed",
      // park4night lists it as seasonal; no dates found.
      season: null,
      price_per_night: 20,
      price_note: "per pitch, from park4night and 2025–26 reviews; a 2024 reviewer paid £15 for two with electricity",
      // 2024 and 2025 reviews: limited hookup.
      hookup: true,
    },
  },
  {
    slug: "poldark-inn",
    name: "The Poldark Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 4180095701. The PL33 9DQ postcode centroid is 30 m west.
    lat: 50.62297, lon: -4.74290,
    address: "Treligga Downs, Delabole, PL33 9DQ",
    phone: "01840 212565",
    email: "adrian@poldarkinn.com",
    url: "https://www.poldarkinn.com/",
    notes: "Free house high on Treligga Downs, inland of the coast path above Tregardock Beach. B&B rooms, all but one en-suite, and self-catering apartments next door. Home-made pub food, live sport, two pool tables. Bar open from 6pm daily. Check-in 1pm, out 11am. Free parking",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Tripadvisor reviews and booking sites say dogs welcome at no charge; the owner's site doesn't mention dogs",
      season: null,
      price_per_night: 60,
      price_note: "B&B from £60 a room",
    },
  },
  {
    slug: "mill-meadow-st-kew",
    name: "Mill Meadow Campsite",
    kind: "stay",
    // Postcode centroid (PL30 3ES); OSM has no campsite. The owner's map pin is
    // 260 m south, park4night's 220 m south.
    lat: 50.56449, lon: -4.79012,
    // The owner gives the postcode and St Kew parish; "Lanow Mill" from park4night.
    address: "Lanow Mill, St Kew, PL30 3ES",
    phone: "01208 841505",
    email: "lanowmill@gmail.com",
    url: "http://millmeadowcamping.co.uk/",
    notes: "Camping and Caravanning Club Certificated Site, members only: five vans or caravans and ten tents. Four-acre, gently sloping valley meadow in St Kew parish, bordered by Mill Lane and two streams; six west-facing pitches with hookup and water. Toilets, showers, grey and chemical waste disposal, reception room with fridge-freezer, kettle and microwave, levelling blocks to borrow. Communal fire pit by arrangement; raised BBQs only. Coded gate; quiet 10pm–7am. St Kew Inn 15 minutes' walk. Service stop £5 for up to three hours. A 2025 reviewer advises coming from the B3314, as the lanes from the A39 are narrow. Mobile 07769 960959",
    verified: "2026-09-14",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Well-controlled dogs welcome; £1 each a night",
      // The Club lists it open 1 Jan–31 Dec 2026; park4night says all year.
      season: "all-year",
      price_per_night: 20,
      price_note: "Club members, pitch with hookup; without £15, hardstanding £25; extra adult £5, shower £1",
      hookup: true,
    },
  },
  {
    slug: "gunvenna-holiday-park",
    name: "Gunvenna Holiday Park",
    kind: "stay",
    // Centre of OSM way 815082272. The PL27 6QN postcode centroid is 220 m
    // south-west.
    lat: 50.56671, lon: -4.86951,
    address: "St Minver, Wadebridge, PL27 6QN",
    phone: "01208 862405",
    email: "gunvenna.bookings@gmail.com",
    url: "https://www.gunvenna.com/camping_touring.html",
    notes: "Family-run touring and holiday-home park at St Minver, two miles inland of Polzeath. Hardstanding and grass super pitches with water and grey waste, and grass pitches with electricity. Indoor heated pool from late May to mid-September, shop, games room, play area, launderette, dog shower and dog walk. Check-in 2–8pm, nobody pitched after 8.30pm; out by 10.30am. £50 non-refundable deposit",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £5 each a night. Some breeds barred beyond the Dangerous Dogs Act. On a lead no longer than 8 ft, exercised only in the dog walk, never left alone",
      // The owner gives no season dates.
      season: null,
      price_per_night: null,
      price_note: "mid season £26.50 grass or £27.50 hardstanding, high season £39.50, for one car, two adults and two children; extra adult £6; hookup 16 A",
      hookup: true,
    },
  },
  {
    slug: "cornish-tipi-holidays",
    name: "Cornish Tipi Holidays",
    kind: "stay",
    // Centre of OSM way 1102384018. The PL30 3HZ postcode centroid is 380 m
    // south.
    lat: 50.58155, lon: -4.77170,
    address: "Tregildrans Quarry, Trelill, St Kew, PL30 3HZ",
    phone: "01208 880781",
    url: "https://www.cornishtipiholidays.co.uk/wild-camping",
    notes: "Tipis and camping round a spring-fed lake in a 20-acre wooded former quarry near Trelill. Campervans and motorhomes in the communal meadow only: all grass, no hardstanding, waste disposal or tank refills. Hot showers, flushing and composting loos, drinking water from standpipes. Campfires encouraged; swimming, boats and fishing in the lake. Arrive 4–8pm at busy times; late arrivals by arrangement, £20. One vehicle per booking. Summer marquee weddings can have amplified music until midnight",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: false,
      dogs_note: "No dogs or any other pets",
      // "Easter to October"; the only dates on the site are 2024's, 22 Mar–10 Oct.
      season: null,
      price_per_night: null,
      price_note: "meadow £25 an adult a night, child 2–12 £10–12, same for tents or vans; one night minimum",
      hookup: false,
    },
  },
  {
    slug: "treglines-farm-cl",
    name: "Treglines Farm CL",
    kind: "stay",
    // Centre of OSM way 1122758099, an unnamed farmyard; OSM has no campsite.
    // The Club's GPS is 70 m west; the PL27 6QT postcode centroid 370 m
    // south-west.
    lat: 50.56931, lon: -4.89114,
    // The Caravan and Motorhome Club's listing.
    address: "Treglines Farm, St Minver, Wadebridge, PL27 6QT",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/wadebridge/treglines-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: a 0.75-acre lawned site on a working farm with country views, a mile from Polzeath beach by a footpath from the site. Some sloping pitches; levelling blocks needed. 10 A hookup, drive-over motorhome waste disposal, WC for exclusive use, dog walk from the site. Pub and shop within a mile. Directions are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing says dogs accepted, with a dog walk from the site",
      // The Club lists it open 11 Apr–31 Oct 2026.
      season: { from: "04-11", to: "10-31" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "southwinds-polzeath",
    name: "Southwinds Camping Park",
    kind: "stay",
    // OSM node 1685948758. The PL27 6QU postcode centroid is 320 m south-west.
    lat: 50.57498, lon: -4.89950,
    // The owner's sat nav postcode.
    address: "Polzeath, PL27 6QU",
    phone: "01208 863267",
    email: "info@southwindscamping.co.uk",
    url: "https://polzeathcamping.co.uk/index.php/southwinds/",
    notes: "Family site on the hill above Polzeath, with sea and country views; sister site to Tristram. Three fields, one open only in the July–August holidays. A budget area in the middle of Southwinds field takes small tents and campervans up to 5 m, no awning or hookup; the owner calls it popular with coast path walkers. One unit per pitch, no pup tents. Free hot showers, coin laundry, free wifi, freezer. A footpath to the beach and village; ask reception, as they advise against the road. Latest check-in strictly 6pm; not before 1pm in high season. No fires or fire pits. Families and couples only",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£4 a night",
      // "2026 Season Now Open", but the season dates on the page are 2025's,
      // closing 27 September.
      season: null,
      price_per_night: 20,
      price_note: "budget area, two people, low season; £25 high season; one person £12 or £15. Standard pitch £28 low, £38 high, hookup included where available; extra adult £10",
      hookup: true,
    },
  },
  {
    slug: "tristram-caravan-park",
    name: "Tristram Caravan Park",
    kind: "stay",
    // Centre of OSM way 1122484731. The PL27 6TD postcode centroid is 110 m
    // south-east.
    lat: 50.57361, lon: -4.91907,
    // The owner's sat nav postcode.
    address: "Polzeath, PL27 6TD",
    phone: "01208 862215",
    email: "info@tristramcampsite.co.uk",
    url: "https://polzeathcamping.co.uk/index.php/camping/",
    notes: "Family-run touring park on the grassy clifftop above Polzeath beach, fenced off from the coast path, with a footpath down to the beach. Caravans, motorhomes and campervans only: no tents of any kind, roof tents and trailer tents included. All grass, no hardstanding; some pitches slope, and ramps are sold on site. A budget area takes campervans up to 5 m with two people, no hookup or awning. Families and couples over 21; no large groups. Arrive strictly 2–6pm and check in at reception first; no arrivals after it closes. Out by 10.30am. Free showers and wifi. The 2027 diary opens at the end of September",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs on leads, £4 a night; no XL Bullies",
      season: { from: "03-28", to: "11-01" },
      price_per_night: null,
      price_note: "budget area £32.50 mid season, £36 high; standard pitch with hookup £41 mid, £61.50 high. The tariff also lists adults £12 and cars £12 a night as extras, without saying whether a pitch includes anyone",
      hookup: true,
    },
  },
  {
    slug: "st-moritz-hotel",
    name: "St Moritz Hotel",
    kind: "stay",
    food: { type: "restaurant" },
    // OSM node 1290854692. The PL27 6SD postcode centroid is 85 m north.
    lat: 50.56688, lon: -4.92030,
    address: "Trebetherick, PL27 6SD",
    phone: "01208 862242",
    email: "stay@stmoritzhotel.co.uk",
    url: "https://stmoritzhotel.co.uk/dog-friendly-stays-cornwall/",
    notes: "Spa hotel in Trebetherick, between Polzeath and Rock; the coast path is a short walk away. Hotel rooms and suites, self-catering apartments and houses. Cowshed spa, indoor hydro pool, outdoor pool, gym, tennis courts; two restaurants and the Shorecrest Bar and Terrace; e-shuttle to the local area",
    // One directory says it is "ceasing to be a dog friendly hotel"; the
    // owner's page still lists dog-friendly rooms.
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Two ground-floor Garden Suites with enclosed gardens, and first-floor Sea View Pod rooms (a suite with balcony, Cosy and King rooms): up to two dogs, £20 each a night; book by phone. Not in the main restaurant; bar tables with dogs bookable through reception. Dogs allowed in the grounds and the Seaside Pool Club",
      // "Warm hospitality all year round".
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "trewiston-farm",
    name: "Trewiston Farm and Campsite",
    kind: "stay",
    // Centre of OSM way 1050861356, "Trewiston Farm Caravan Park". The PL27 6PX
    // postcode centroid is 170 m west.
    lat: 50.55806, lon: -4.90097,
    address: "St Minver, Wadebridge, PL27 6PX",
    phone: "01208 863205",
    email: "trewistonfarm@trewiston.co.uk",
    url: "https://www.trewiston.co.uk/",
    notes: "Family-run camping and caravan park between Polzeath, Daymer Bay and Rock, next to The Point golf course. A footpath through the farm leads to Polzeath; the coast path is within walking distance. Individual hookups, toilets and showers, shop, EV charging. A family pub a mile away; a regular bus to Wadebridge. Two lodges and static caravans too",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 a night",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 23,
      price_note: "low season, two people included; high season (1 July–3 September) £26; extra person £6; hookup £4",
      hookup: true,
    },
  },
  {
    slug: "st-enodoc-hotel",
    name: "St Enodoc Hotel",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 751308128, an unnamed hotel. The PL27 6LA postcode
    // centroid is 45 m east.
    lat: 50.54576, lon: -4.91612,
    address: "Rock Road, Rock, Wadebridge, PL27 6LA",
    phone: "01208 863394",
    email: "info@paul-ainsworth.co.uk",
    url: "https://enodoc-hotel.co.uk/rooms/",
    notes: "Paul Ainsworth's hotel above the Camel Estuary in Rock. Garden- and estuary-view rooms with super king beds, some twins; apartments with kitchenettes; two-bedroom family suites. Estuary Grill, Flour Garden pizzas in the gardens, bar and terrace; room service",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms in several categories, marked on the rooms page. No charge given by the owner; Canine Cornwall says eight rooms, £15 per dog a night",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-custom-house-padstow",
    name: "Old Custom House",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1190717400. The PL28 8BL postcode centroid is 140 m
    // south-east.
    lat: 50.54099, lon: -4.93743,
    address: "Padstow, PL28 8BL",
    phone: "01841 532359",
    email: "oldcustomhouse@staustellbrewery.co.uk",
    url: "https://www.oldcustomhousepadstow.co.uk/our-rooms",
    notes: "St Austell Brewery pub on Padstow's quay, in a listed building. 23 en-suite rooms, from a cosy double to a suite, many looking over the harbour or estuary; all on the first and second floors up steps. Breakfast included, 8.30–11.30am. Open 8.30am–11pm, 10.30pm one day a week; food noon–9pm. Check-in 4–10pm, out by 11am. Two nights minimum on Friday and Saturday in peak times. Can be noisy in peak season. No parking: the Harbour Commissioners' pay and display opposite is about £8 for 24 hours, and the long-stay at Trevethan Farm by Tesco £3 a day. Reservations also on 0345 241 1133",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a select number of dog-friendly rooms, booked as such; £20 per dog per stay. On leads in public areas, not left alone in the room, not on furniture or beds. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "london-inn-padstow",
    name: "The London Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1191574135. The PL28 8AN postcode centroid is 15 m away.
    lat: 50.54111, lon: -4.93949,
    address: "6–8 Lanadwell Street, Padstow, PL28 8AN",
    phone: "01841 531129",
    email: "contact@londoninnpadstow.co.uk",
    url: "https://www.londoninnpadstow.co.uk/",
    notes: "Family-run independent pub a street back from the harbour, opened in 1803 in three fishermen's cottages; St Austell Brewery ales. Five en-suite rooms above the pub. Small, changing menu; a roof terrace",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs; booking directories say dogs are welcome in the rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "harbour-hotel-padstow",
    name: "Harbour Hotel Padstow",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 174603384, "Padstow Harbour Hotel". The PL28 8DB
    // postcode centroid is 50 m west. Directories give it as the former
    // Metropole.
    lat: 50.53985, lon: -4.93721,
    address: "Station Road, Padstow, PL28 8DB",
    phone: "01841 532486",
    email: "padstow@harbourhotels.co.uk",
    url: "https://www.harbourhotels.co.uk/our-hotels/cornwall/harbour-hotel-padstow/faqs",
    notes: "Revamped Victorian hotel above the harbour, looking over the Camel Estuary; some rooms with balconies. The Jetty restaurant. Check-in from 3pm, ring if arriving after 10pm; out by 11am. Limited on-site parking, first come first served: free when booked direct, £10 a day otherwise",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Specific rooms only; ask the reservations team. £20 per dog a night. On a lead; allowed on the terrace and in the Boat Room (except during private events), not in the main restaurant, bar or lounge",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "link-road-car-park-padstow",
    name: "Link Road car park",
    kind: "stay",
    // Centre of OSM way 152192396, "Link Road Long Stay Car Park". The PL28 8AY
    // postcode centroid is 140 m north.
    lat: 50.53979, lon: -4.94181,
    address: "Link Road, Padstow, PL28 8AY",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/link-road-padstow-pl28-8ay/",
    // Rules from the car park's page and Cornwall Council's motorhome parking
    // page, which gives two consecutive nights as an example of what the signs
    // say. The town council's own page covers the Railway and Lawns car parks.
    notes: "Cornwall Council long-stay car park at the top of the town, tarmac, open 24 hours; the one car park in Padstow where self-contained motorhomes with their own toilet may stay overnight. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. No motorhome bays; pay for every bay you cover. The town council's Railway car park bans motorhomes 10pm–8am, and its Lawns car park is unsuitable for them. Pay and display or JustPark (location 8227)",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "dennis-cove-campsite",
    name: "Dennis Cove Campsite",
    kind: "stay",
    // Centre of OSM way 219704461. The PL28 8DR postcode centroid is 160 m east.
    lat: 50.53173, lon: -4.93782,
    address: "Dennis Lane, Padstow, PL28 8DR",
    phone: "01841 532349",
    url: "https://denniscovecampsite.co.uk/tariffs-booking-terms/",
    notes: "Family campsite on the edge of Padstow, 10 minutes' walk from the harbour by its own access onto the Camel Trail; estuary views from the top field. 100 grass pitches over five fields, including sister site The Foreshore. Tents, campervans, smaller motorhomes and caravans; most van pitches have grass-protection mesh. Toilet block refurbished 2020–21, with drying room and laundry. Single-track lane: arrive 1–9.30pm, no early or late arrivals; out by 11am. Three nights minimum at Whitsun and in August unless hiking or cycling. No shop, guest wifi or campfires; Tesco 10–15 minutes' walk. Non-refundable booking fee of £100 per pitch per week, or the full fee if less",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£4 a night, £5 peak; on leads and never left unattended",
      season: { from: "04-02", to: "09-27" },
      price_per_night: 38,
      price_note: "pitch with two people and a vehicle, off-peak; peak (Whitsun week, July and August) £44; extra adult £11.50–12.50; hookup £6.50 on a third of pitches; hiker rate £15–17 and single occupancy £27–32 by phoning the office",
      hookup: true,
    },
  },
  {
    slug: "padstow-campsite-trevethan",
    name: "Padstow Campsite (Trevethan Farm)",
    kind: "stay",
    // Centre of OSM way 152216967, Tesco; OSM has no campsite, whose entrance is
    // 50 m past Tesco's on Sarah's Lane. park4night's pin is 85 m east; the
    // PL28 8EL postcode centroid 510 m east.
    lat: 50.53493, lon: -4.94580,
    address: "Trevethan Farm, Sarah's Lane, Padstow, PL28 8EL",
    phone: "07766 400212",
    email: "trevethanfarm@gmail.com",
    url: "https://www.padstowcampsite.co.uk/our-story",
    notes: "Family-run seasonal pop-up site in fields at the top of Padstow, with estuary views; 10 minutes' walk to the harbour and the Rock ferry, two minutes to Tesco. Tents, campers and motorhomes of any size; up to five people per pitch. Hot showers, toilets, hot-water washing-up and drinking water. No Elsan disposal, no charging points (staff will charge a device), no wifi or generators. Raised BBQs only, no fire pits. Check-in 1–9pm; ring on arrival. Leave by midday. Reviewers say the field slopes. Trevethan Farm also runs long-stay day parking by the same lane, gates 8am–10pm, for leaving a vehicle while walking",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "No charge; on a lead. No breeds listed under the Dangerous Dogs Act",
      // "Seasonal, pop-up". park4night's listing says open all year, with £12
      // off-season for self-contained vans and facilities from the May bank
      // holiday; an April 2026 reviewer paid £15.
      season: null,
      price_per_night: 28,
      price_note: "per pitch, showers included; 2025 reviewers paid £25",
      hookup: false,
    },
  },
  {
    slug: "well-parc-trevone",
    name: "The Well Parc",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 867805340. The PL28 8QN postcode centroid is 75 m east.
    lat: 50.54169, lon: -4.97594,
    address: "Dobbin Lane, Trevone, PL28 8QN",
    phone: "01841 520318",
    email: "info@wellparc.co.uk",
    url: "http://www.wellparc.co.uk/the-hotel.htm",
    notes: "Family-run hotel and village inn in two acres above Trevone, looking out to Trevose Head; beaches and coast path under five minutes' walk. Seven en-suite rooms, three with sea views: two large family rooms, a triple and four doubles. Public bar open every day with food from sandwiches and pasties to steaks and seafood, and Cornish real ales; sun terrace facing the sea; ample private parking; wifi. Closed the Christmas and New Year weeks. Will carry luggage onwards for coast path walkers, given notice",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs; directories disagree",
      // "Open all year round apart from the Christmas and New Year weeks".
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trewithen-st-merryn",
    name: "Trewithen Caravan and Camping",
    kind: "stay",
    // Centre of OSM way 1341544132, which gives PL28 8LZ; the owner gives
    // PL28 8JZ, whose centroid is 600 m south-east.
    lat: 50.52739, lon: -4.97414,
    address: "Trewithen Farm, St Merryn, Padstow, PL28 8JZ",
    phone: "01841 520420",
    email: "maystrewithen@aol.com",
    url: "https://trewithencaravanandcamping.com/prices/",
    notes: "Quiet family-run site on a farm a mile from St Merryn village, with country views down the valley to Harlyn Bay. Eight acres, 30 pitches, 12 with hookup; book early for those. Toilet and shower block, accessible family wet room, washing-up, laundry, wetsuit rinse area. Two nights minimum; seven nights Saturday to Saturday on hookup pitches in July and August. Non-refundable deposit. Book online or by email",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night",
      // "Open 1st April to 31st October, subject to weather conditions".
      season: { from: "04-01", to: "10-31" },
      price_per_night: 24,
      price_note: "pitch with two adults and a car, April–June and September–October; £28 July–August; hookup pitch £28 or £32; extra adult £6",
      hookup: true,
    },
  },
  {
    slug: "higher-harlyn-park",
    name: "Higher Harlyn Park",
    kind: "stay",
    // Centre of OSM way 220537809, "HIgher Harlyn Touring Park". The owner
    // gives no postcode.
    lat: 50.53145, lon: -4.99718,
    address: "St Merryn, Padstow",
    phone: "01841 520022",
    email: "info@higherharlynpark.co.uk",
    url: "https://www.higherharlynpark.co.uk/tariff",
    notes: "Holiday park 300 m from the St Merryn crossroads on the road to Harlyn Bay, with camping and touring pitches, some with sea views to Trevose Head and Gulland; the Bays camping area opens at May half term. Up to six people per pitch, awning included. Bar Harlyn with live music, and Pedro's Al Fresco takeaway: brunch Tuesday–Sunday 9am–2pm, evenings Tuesday–Saturday 5.30–8pm; a restaurant upstairs due autumn 2026. Outdoor heated pool May half term to early September, shop through the season, laundrette, Elsan disposal, outdoor showers for wetsuits. No electric splitters, supermarket deliveries or open fires; quiet after 11pm. Under-25s only with family",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £5 each a night; on a lead at all times, even in the dog walk field. Not in the pool area, play area, toilets, showers, shop or laundrette; never left unattended",
      season: { from: "03-28", to: "11-01" },
      price_per_night: 25,
      price_note: "non-electric pitch, low season (28 March–21 May, 28 September–31 October); hookup £30, sea-view hookup £34. Mid season (1 June–9 July, 2–27 September) £30, £35, £40; high season (22–31 May, 10 July–1 September) £45, £50, £55. Extra person £5",
      hookup: true,
    },
  },
  {
    slug: "farmers-arms-st-merryn",
    name: "The Farmers Arms",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1221349105, "Farmers Arms Inn".
    lat: 50.52584, lon: -4.99177,
    address: "St Merryn, Padstow",
    phone: "01841 520303",
    url: "https://farmersarmscornwall.co.uk/our-rooms/",
    notes: "St Austell Brewery village inn in St Merryn, 19th-century. Four en-suite rooms including a family suite, booked through Booking.com from the pub's contact page. Pub food with a carvery, real ales, patio, children's play area; live entertainment, and the owner warns noise from the bar can reach the rooms. Customer car park",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Well-behaved pets may be able to stay by prior arrangement, subject to confirmation: ask before booking. Pets are welcome in many areas of the pub",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "pig-at-harlyn-bay",
    name: "THE PIG-at Harlyn Bay",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 867950085. The PL28 8SQ postcode centroid is 185 m
    // north-east.
    lat: 50.53699, lon: -5.00438,
    address: "Harlyn Bay, Padstow",
    phone: "0345 225 9494",
    email: "reservations@thepighotel.com",
    url: "https://www.thepighotel.com/at-harlyn-bay/plan-your-visit/faqs/",
    notes: "Country-house hotel with a kitchen-garden restaurant above Harlyn Bay, a short walk off the path. Check-in from 3pm, out by 11am. Free parking. The phone and email are central reservations for all the PIG hotels",
    // The site blocks direct fetches; its FAQ and 2026 Dog House Rules were read
    // through a reader proxy. One older directory says no dogs at Harlyn Bay;
    // the owner's FAQ excludes only THE PIG-in the wall and THE PIG-on the beach.
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "In a small number of dog-friendly rooms, booked by email or phone. One dog, up to Labrador size (40 kg), over a year old; £40 a night plus a £500 pre-authorisation. Crate, bowls and blanket provided; not left unattended, kept off beds and furniture. Not in the main house, indoor restaurants, bars or lounges; welcome on terraces and in the grounds on a lead",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "harlyn-sands",
    name: "Harlyn Sands Holiday Park",
    kind: "stay",
    // Centre of OSM way 220525876, an unnamed caravan site; Alan Rogers' GPS
    // for Harlyn Sands is 140 m south, inside it. The PL28 8SQ postcode
    // centroid is 580 m south-east.
    lat: 50.54089, lon: -5.01022,
    address: "Lighthouse Road, PL28 8SQ",
    phone: "01841 520720",
    email: "enquiries@harlynsands.co.uk",
    url: "https://harlynsands.co.uk/touring/",
    notes: "Holiday park on Trevose Head above Harlyn Bay, with static caravans and the Super Splash Fun Pool. 80 level grass touring pitches on the main park, plus the sea-view Beachfield, whose facilities are 5 minutes' walk away on the main park. Unisex shower block, 20p for 4 minutes; toilets, laundry, washing-up. Pitches allocated at booking. A third of the cost as deposit",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per unit, charged extra; on a short lead at all times, with a £20 fine for a dog off the lead or fouling. No breeds under the Dangerous Dogs Act",
      // The owner gives no touring season or tariff; seasonal pitches run Easter
      // to the end of October. Alan Rogers lists March to October.
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "mother-iveys-bay",
    name: "Mother Ivey's Bay Holiday Park",
    kind: "stay",
    // Centre of OSM way 220526491. The PL28 8SL postcode centroid is 360 m west.
    lat: 50.54260, lon: -5.01290,
    address: "Trevose Head, Padstow, PL28 8SL",
    phone: "01841 520990",
    email: "info@motheriveysbay.com",
    url: "https://www.motheriveysbay.com/touring/",
    notes: "35-acre family park by Trevose Head above its own sandy beach at Mother Ivey's Bay, beside the path; no bar, club or restaurant, and silence 11pm–7am. Touring fields: Booby's, opening in May, with views over Booby's and Constantine Bays; The Green, central, over Mother Ivey's Bay; stone-walled Deluxe pitches with water, drainage and picnic table; The Square, sheltered. Pitches without hookup bookable by phone. Shop and launderette. Arrive from noon, no pitching after 10pm; out by 11am. Vehicle gates locked midnight–7am. Couples and families only. 50% non-refundable deposit. Bus stop opposite Constantine Bay Stores, a mile away",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £5 a night, £6 in high season. Not in The Square, the shop, launderette or toilet blocks. On a lead of 2 m or less on the park, and on the beach 10am–6pm; exercise off the park and beach; never left unattended",
      season: { from: "03-28", to: "11-01" },
      price_per_night: 33,
      price_note: "landscaped or walled pitch with hookup, up to six people, low season (to 21 May and October); £46 mid, £64 high (10 July–30 August). Deluxe pitch £62 mid, £77 high",
      hookup: true,
    },
  },
  {
    slug: "yha-treyarnon-bay",
    name: "YHA Treyarnon Bay",
    kind: "stay",
    // Centre of OSM way 220525273. The PL28 8JR postcode centroid is 210 m
    // south-east.
    lat: 50.52767, lon: -5.02281,
    address: "Padstow, PL28 8JR",
    email: "treyarnon@yha.org.uk",
    url: "https://www.yha.org.uk/hostel/yha-treyarnon-bay",
    notes: "Hostel 50 m from the sea at Treyarnon Bay, on the path. Shared rooms, private rooms (some en-suite), Landpods, bell tents, and pitch-up camping for your own tent. Trey Bay café and licensed bar with sea views; live music. Check-in 3–10pm, out by 10am; towels to hire. Parking at the hostel: register the vehicle at reception",
    verified: "2026-09-14",
    stay: {
      type: "hostel",
      dogs: false,
      dogs_note: "Not in hostel bedrooms. Allowed in the camping area: Landpods and bell tents at £10 per dog a night, or free in your own tent, and then in the hostel's public areas except kitchens",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "treyarnon-bay-holidays",
    name: "Treyarnon Bay Holidays",
    kind: "stay",
    // Centre of OSM relation 15641325. The PL28 8JP postcode centroid is 260 m
    // west.
    lat: 50.52739, lon: -5.01804,
    address: "Treyarnon Bay, Padstow, PL28 8JP",
    phone: "01841 520681",
    email: "hello@treyarnonbayholidays.co.uk",
    url: "https://treyarnonbayholidays.co.uk/stay-with-us/camping/",
    notes: "Farm-run campsite above Treyarnon Bay, a few minutes' walk from Constantine Bay: 81 pitches, 26 with hookup; reviewers on the owner's page say much of the field slopes and needed chocks. Charged per unit, not per person. No wifi and patchy signal; no clubhouse, EV charging, generators or campfires. Showers £1 for 7 minutes; washing machine and dryer, freezer, phone charging. Treyarnon and Constantine stores a few minutes' walk; food vans in the school holidays. Check-in from 2pm, out by noon. Hookup pitches a week minimum, Saturday to Saturday, in the school holidays; non-electric pitches flexible. Couples and families only; zero tolerance of noise after 10pm. Office 9am–5pm Monday–Saturday",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night, pre-booked; on a lead. Not in the main camping fields in July and August: then only in the Farmers Field at Trevear, 10–15 minutes' walk from the main site, with no hookup, booked by phone",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 25,
      price_note: "campervan or motorhome, up to six people, April–June and September; £30 July–August; hookup £10, awning £5, extra person £5",
      hookup: true,
    },
  },
  {
    slug: "trethias-farm",
    name: "Trethias Farm Camping and Caravan Park",
    kind: "stay",
    // Centre of OSM way 220528639. The PL28 8JS postcode centroid, which the
    // owner gives for the park, is 370 m north.
    lat: 50.52111, lon: -5.02477,
    address: "Treyarnon Bay, St Merryn, Padstow, PL28 8JS",
    phone: "01841 520323",
    email: "trethiasfarm@btconnect.com",
    url: "https://www.trethiasfarm.co.uk/pricelist.php",
    notes: "Family-run since the 1950s, yards from the coast path by a private road; Treyarnon Bay 5 minutes' walk. Touring pitches round the field edges, no entertainment, minimal lighting. Free showers in refurbished blocks, washing machines and dryers, ice-pack freezer, chemical disposal, water points, family and accessible bathrooms. Reception and shop just off site. Up to five per pitch; no single-sex groups. Pitch from noon, out by 11am. Normally Saturday to Saturday in the summer holidays, to the August bank holiday. Book by phone, email or form; £50 deposit per pitch per week; cards at reception only. Quiet after 11pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night, £5 in high season; on a lead except in the sea-view dog walking field",
      // The latest price list is 2025's: low season 28 March–30 June and
      // 6 September–30 October. No 2026 dates published.
      season: null,
      price_per_night: 22,
      price_note: "caravan or motorhome pitch with two people, two vehicles and awning, 2025 low season; £30 high (1 July–5 September); electric £8 or £10 extra; fully serviced pitch £23 or £32; extra adult £8 or £10.50",
      hookup: true,
    },
  },
  {
    slug: "porthcothan-clifftop-camping",
    name: "Porthcothan Clifftop Camping",
    kind: "stay",
    // Centre of OSM way 1052045142, "Porthcothan Cliff Top Camping".
    // park4night's pin, likely at the field track, is 400 m south-east.
    lat: 50.51515, lon: -5.02790,
    // From the park4night listing.
    address: "Carnevas Farm, Porthcothan Bay, Padstow, PL28 8PN",
    url: "https://park4night.com/en/place/286851",
    notes: "Back-to-basics field on a working farm, on the clifftop right by the coast path, with open sea views; Porthcothan beach about 15 minutes' walk. Compost toilets, three hot showers, washing-up, water taps; no electricity, grey or chemical waste disposal. Reached by a field track across about three fields from a small roadside sign. Vans and small campers rather than big motorhomes; pick your own spot on the slope. An August 2026 reviewer advises booking ahead for weekends. The owner's website, porthcothanclifftopcamping.com, shows a Wix domain error",
    // park4night listing and reviews; the owner's site is down.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night's description says well-behaved dogs welcome",
      // park4night: "open throughout the summer". A reviewer was told in
      // December 2022 that it closes from September; one found it deserted on
      // 19 June 2024.
      season: null,
      price_per_night: 30,
      price_note: "two people and a van, from an August 2026 review; £25 on park4night and in 2023–24 reviews",
      hookup: false,
    },
  },
  {
    slug: "carnevas-holiday-park",
    name: "Carnevas Holiday Park",
    kind: "stay",
    // Centre of OSM way 220527970, "Carnevas". The PL28 8PN postcode centroid is
    // 310 m north-west.
    lat: 50.51308, lon: -5.01385,
    address: "St Merryn, Padstow, PL28 8PN",
    phone: "01841 520230",
    email: "info@carnevasholidaypark.co.uk",
    url: "https://carnevasholidaypark.co.uk/camping-and-touring/",
    notes: "Family-run park inland of Porthcothan, with camping and touring pitches, chalets and holiday homes. Free showers, family bathrooms, dishwashing, laundry, games room, play area. Shop end of May to early September; the Jolly Roger bar at Easter and May to mid September, with Joeys caterer outside it. Book with the booking form; a new online system is due. £50 deposit a week, £100 on hookup pitches in peak weeks, non-returnable",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night",
      // The 2026 tariff runs April to October; no exact dates.
      season: null,
      price_per_night: 19,
      price_note: "van, or car and tent, with two people, April, 1–23 May and October; £21–23.50 late May to mid July and September; £27.50 18 July–August; extra adult £4.50; hookup (10 A) £6, Saturday to Saturday preferred from 18 July",
      hookup: true,
    },
  },
  {
    slug: "berryfields-porthcothan",
    name: "Berryfields Tearoom & Holiday Park",
    kind: "stay",
    // Centre of OSM way 823073254, "Berryfields". park4night's pin is 25 m away.
    lat: 50.51071, lon: -5.01617,
    address: "Porthcothan, Padstow",
    // From directories.
    phone: "01841 520178",
    url: "https://park4night.com/en/place/601710",
    notes: "Small holiday park and tearoom above Porthcothan, 5–10 minutes' walk from the beach. A grass field at the back for about 20 vans or tents; hot showers by £1 token, drinking water, grey and chemical waste disposal. Playing areas, football field, pitch and putt and crazy golf. Cream teas and pasties in the tearoom",
    // park4night listing (2026, no reviews yet) and directories; the only owner
    // presence is a Facebook page.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night lists pets allowed; directories say dogs welcome",
      // park4night: open from May 2026.
      season: null,
      price_per_night: 25,
      price_note: "per night, from park4night's 2026 listing",
      // Directories list hookup and hardstanding; park4night doesn't list electricity.
      hookup: null,
    },
  },
  {
    slug: "penlan-porthcothan",
    name: "Penlan B&B",
    kind: "stay",
    // OSM node 4913742846. The PL28 8LP postcode centroid is 45 m west.
    lat: 50.50761, lon: -5.01939,
    // From the National Trails listing.
    address: "Porthcothan Bay, PL28 8LP",
    phone: "01841 520440",
    url: "https://www.nationaltrail.co.uk/en_GB/accommodation/penlan-2/",
    notes: "B&B in Porthcothan, 150 m from the coast path. Part of the house has its own entrance. Organic local produce at breakfast when available. The pub the listing suggests for evening meals, the Tredrea Inn, has been closed since October 2021 (CAMRA). Ring to check it's still taking guests",
    // National Trails listing only; no owner website, and a Facebook page.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The National Trails listing says dogs welcome",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trevean-st-merryn",
    name: "Trevean Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 220536427. The PL28 8PR postcode centroid is 200 m
    // north-west.
    lat: 50.51217, lon: -4.99635,
    address: "St Merryn, Padstow, PL28 8PR",
    phone: "01841 520772",
    email: "trevean.info@gmail.com",
    url: "https://www.treveancaravanandcamping.net/touring-camping/",
    notes: "Small family-run park on a working organic farm a mile from St Merryn, on the lane to Porthcothan; a footpath runs beside it. 31 level grass pitches off hardcore tracks, all within 200 m of the toilet block: 7 basic, 12 standard and 12 deluxe, the last two with 10 A hookup. Free hot showers, family wet room, laundry, dishwashing, wetsuit and dog wash, drive-in waste water point, Elsan disposal, EV charger, free wifi. Shop from Whitsun to September with bread and papers; five-acre field for dog walking and games. Arrivals 2–5pm, otherwise by arrangement; out by 11am. Deposit £10 a night, balance 7 days before arrival",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night",
      season: { from: "04-01", to: "11-01" },
      price_per_night: 20,
      price_note: "basic pitch with one unit, car and two people, off-peak; £25 peak (22–30 May, July–August); standard with hookup £22.50 or £30; deluxe £25 or £35; extra adult £7",
      hookup: true,
    },
  },
  {
    slug: "atlantic-view-porthcothan",
    name: "Atlantic View Camping",
    kind: "stay",
    // Centre of OSM way 859777704, an unnamed camp site; park4night's pin is
    // inside it, 185 m south-east.
    lat: 50.50342, lon: -5.02804,
    // From the park4night listing.
    address: "Off the B3276 between Porthcothan and Mawgan Porth",
    url: "https://park4night.com/en/place/286228",
    notes: "Two farm fields off the B3276 south of Porthcothan, reached past some houses; sea views over Porthcothan from the far field, which has a footpath to the beach and coast path, about 5–10 minutes. No booking or reception: park round the edge of either field, 6 m from neighbours, and the owners come round in the evening for cash or bank transfer; no cards. Showers 20p for hot water, drinking water, grey and chemical waste disposal. Reviewers call the toilets and showers dated but clean enough. Dark skies",
    // park4night listing and reviews; no owner website found.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night lists pets allowed; an August 2025 reviewer paid nothing extra for dogs",
      // park4night gives 1 April–31 October (2023); reviewers stayed in April
      // and October.
      season: null,
      price_per_night: 25,
      price_note: "per van, from a July 2026 review; £20–24 in 2024–25 reviews, £15 for one person in 2025",
      hookup: false,
    },
  },
  {
    slug: "macdonalds-farm",
    name: "Macdonald's Farm",
    kind: "stay",
    // Centre of OSM way 343041548. The PL28 8LT postcode centroid is 200 m north.
    lat: 50.49993, lon: -5.01715,
    address: "Porthcothan Bay, Padstow, PL28 8LT",
    phone: "01841 540829",
    email: "info@macdonaldsfarm.co.uk",
    url: "https://www.macdonaldsfarm.co.uk/stay/touring-motorhomes/",
    notes: "Family-run holiday park and petting farm inland of Porthcothan, with a café, bar and play area open to day visitors; the owner pitches it at coast path walkers. Touring pitches for vans, caravans and tents, and electric hardstanding grass pitches in winter. Renovated free showers, laundrette, dog and surfboard wash, freezer, phone charging, grey and Elsan disposal, shop, dog exercise area; wifi in the farm garden only. Breakfast daily 8–11am; evening food Tuesday–Saturday 4.30–8.30pm, bar until 9.30pm; in winter the café and bar open Friday–Sunday. Pitches from 1pm, out by 10am; quiet 10pm–7am. Bus stop at the entrance. Three sea-view B&B rooms too, from £130 for two with breakfast, but no dogs in them",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £2 a night, £2.50 mid season, £3 high; on a lead in the camping field and farm garden; not left outside overnight. Welcome in the café. Not in the B&B rooms",
      // 2026 runs to 21 December; the 2027 tariff opens on 1 February (the
      // winter page says 2 February) and closes 19 December.
      season: { from: "02-01", to: "12-21" },
      price_per_night: 22,
      price_note: "electric small pitch for a VW-size van or small tent, two people, low season 2026; £30 mid, £34 high (1–5 May, 22 May–1 June, 17 July–31 August). Non-electric large pitch £25, £35, £40; electric large £33 in winter and low season, £44, £51. Extra adult £7–9",
      hookup: true,
    },
  },
  {
    slug: "bedruthan-steps-campsite",
    name: "Bedruthan Steps Campsite",
    kind: "stay",
    // Centre of OSM way 220527972, an unnamed camp site in the field north of
    // the National Trust's Carnewas turning, where the owner puts its entrance.
    // The owner gives no postcode.
    lat: 50.48482, lon: -5.03043,
    address: "B3276 between Mawgan Porth and Porthcothan, north of the Carnewas turning",
    phone: "07877 240015",
    url: "https://www.bedruthansteps.com/camping",
    notes: "Rustic off-grid clifftop field above Bedruthan Steps, the path running just below; Mawgan Porth 20 minutes' walk. 14-acre grass field with sea views; parts slope, so bring chocks; a flat area behind the tipis for large vans and motorhomes, and a flat overflow field across the road at busy times. No pitches allocated, first come first served even when booked. Flushing toilets, free hot showers, washing-up, drinking water, chemical disposal; no electricity or charging, generators not allowed. Shop, clifftop bar Thursday–Sunday, evening food trucks, morning crêpes and coffee, saunas, live music. Check-in 9am–9pm, ring ahead if later; staffed 24 hours from 26 June. Charcoal BBQs and open fires banned in dry weather; fire pits for hire. 25% deposit online, balance on arrival; cards taken. Walkers may leave a car in its car park for the day. The steps down to Bedruthan beach are closed after a rockfall. Second number, Victoria: 07833 475342",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "No charge; on leads unless under 100% control",
      season: { from: "06-26", to: "09-06" },
      price_per_night: 26,
      price_note: "medium van such as a VW Transporter, two adults; large van or motorhome £28 for two; tent or small van £11 per person; children 6–15 £5, under-5s free",
      hookup: false,
    },
  },
  {
    slug: "carnewas-farm",
    name: "Carnewas Farm Holidays",
    kind: "stay",
    // Centre of OSM way 859865498, an unnamed camp site. The PL27 7UW postcode
    // centroid, which the owner gives, is 80 m north.
    lat: 50.48017, lon: -5.02276,
    address: "Carnewas Farm, Mawgan Porth, PL27 7UW",
    phone: "01637 860314",
    url: "http://www.carnewasfarmholidays.co.uk/touring.php",
    notes: "Farm site near Bedruthan Steps with sea and country views and free coarse fishing for residents. Three areas for vans: the camping field, with toilets, showers and hookup; lakeside pitches, adults only; and a Caravan and Motorhome Club Certified Location in a flat, stone-walled 3/4-acre field with hookup on every pitch and an Elsan point. Hardstanding on request. Pitches from 2pm. Arrive after 8pm only by arrangement. Payment by BACS or cheque; stays of seven nights or fewer paid in full at booking, deposits non-returnable",
    // The terms say pitches must be vacated "by 12am on departure", presumably
    // noon.
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £2 each a night; never left unattended or alone on the pitch; under control. On the Certified Location only with the management's permission",
      season: "all-year",
      price_per_night: 25,
      price_note: "touring caravan or motorhome with 10 A hookup and two adults; extra adult £4, children 5–15 £2. Camping field £10 per adult, hookup £10",
      hookup: true,
    },
  },
  {
    slug: "bedruthan-hotel",
    name: "Bedruthan Hotel & Spa",
    kind: "stay",
    // Centre of OSM way 197585738, "Bedruthen Steps Hotel". The TR8 4BU postcode
    // centroid is 10 m south.
    lat: 50.46958, lon: -5.02879,
    address: "Mawgan Porth, TR8 4BU",
    phone: "01637 861200",
    url: "https://www.bedruthan.com/dog-friendly",
    notes: "Family hotel above Mawgan Porth, open since 1959; the beach a short walk. Sea-view doubles, rooms with their own terraces, and family suites with separate children's rooms; no air conditioning. Wild Café, cocktail bar, pools and spa. Sister hotel to Scarlet, just down the hill",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Small to medium dogs, in various dog-friendly rooms but not the Cosy Doubles; limited, so contact reservations before booking. £25 a night. On leads round the hotel; welcome in the cocktail bar, Ballroom and Wild Café, not the pools or play areas",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "scarlet-hotel",
    name: "Scarlet Hotel",
    kind: "stay",
    // OSM node 4023468653. The TR8 4DQ postcode centroid is 110 m west.
    lat: 50.46846, lon: -5.02892,
    address: "Tredragon Road, Mawgan Porth, TR8 4DQ",
    phone: "01637 861800",
    url: "https://www.scarlethotel.co.uk/dog-friendly",
    notes: "Adults-only eco hotel on the cliff at Mawgan Porth, over 18s in every space; the path runs right by. Sea-view restaurant and bar, booking advised; spa. Check-in from 4pm, out by 11am. Free but limited parking, with valet help. Sister hotel to Bedruthan, which takes all ages",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Small to medium dogs, up to two, in a limited number of dog-friendly rooms with enclosed outdoor areas; contact reservations before booking. £25 a night. Kept off beds and furniture; on leads round the hotel. Welcome in the Reception and Retreat lounges, the bar and outdoor terrace; breakfast at a booth in the bar",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "merrymoor-inn",
    name: "The Merrymoor Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 3281895650, "Merrymoor Inn". The TR8 4BA postcode centroid is
    // 40 m north-east.
    lat: 50.46452, lon: -5.03198,
    address: "Mawgan Porth, TR8 4BA",
    phone: "01637 860258",
    url: "https://www.merrymoorinn.com/rooms-tariffs-offers/",
    notes: "Family-run inn beside the beach at Mawgan Porth, over 60 years. Seven en-suite rooms, most with views of the beach and cliffs. Bar and beachside beer garden; book evening tables before arrival. Full breakfast 8.30–9.30am included, early for flights by request; Newquay airport five minutes' drive. Rooms from 3.30pm, out by 10.30am. Two nights minimum in high season, shorter where availability allows. Non-refundable deposit of one night; full payment if cancelled within 21 days. Ample free parking. 20% off two nights or more October–March",
    verified: "2026-09-14",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "One per room, £5 a night; take the dog with you when you go out",
      season: null,
      price_per_night: 125,
      price_note: "non-sea-view double or twin with breakfast, from; sea-view double £130, large sea-view double with bath £150, single £65; £20 off a double for one",
    },
  },
  {
    slug: "trevarrian-holiday-park",
    name: "Trevarrian Holiday Park",
    kind: "stay",
    // Centre of OSM way 308319044. The TR8 4AQ postcode centroid is 230 m
    // north-west.
    lat: 50.45434, lon: -5.02696,
    address: "Mawgan Porth, Newquay, TR8 4AQ",
    phone: "01637 860381",
    email: "holiday@trevarrian.co.uk",
    url: "https://www.trevarrianholidaypark.co.uk/tariff.html",
    notes: "Family-run park at Trevarrian, between Mawgan Porth and Watergate Bay: four fields of 10 × 8 m pitches, electric (16 A, blue plug; bring a 20 m cable) and non-electric, plus pods and a static. Two toilet and shower blocks with free showers, laundry, dishwashing and chemical disposal; shop with gas, bread and pasties; site-wide wifi. Indoor pool, four-lane bowling (charged), soft play, arcade, tennis. Lounge bar with live music and bingo in peak weeks; diner, eat in or takeaway, daily from Whitsun to the second week of September. Families and couples only; no fire pits. Pitches from noon, out by 11am. £40 a week non-refundable deposit plus £2 booking fee; balance on arrival. Bus stop across the road",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night, £3 in peak weeks; on a lead at all times, exercised on the dog walk only. Welcome in the leisure complex except the pool, says the FAQ; the facilities page says except the bar",
      // The 2026 tariff runs 1 March to 2 November; the FAQ says Easter or
      // 1 April, whichever is first, to the end of October.
      season: { from: "03-01", to: "11-02" },
      price_per_night: 28,
      price_note: "pitch with hookup and two people, low season; £34 for the late May bank holiday week, £38 18 July–31 August. Extra adult £9–14. 20% off seven nights 1 March–17 July and 1 September–2 November",
      hookup: true,
    },
  },
  {
    slug: "view-at-watergate-bay",
    name: "The View at Watergate Bay",
    kind: "stay",
    // Centre of OSM way 308125025. The TR8 4AE postcode centroid, which the
    // owner gives, is 500 m south-east.
    lat: 50.44987, lon: -5.03379,
    address: "Bostaran, Tregurrian, Newquay, TR8 4AE",
    phone: "01637 861160",
    url: "https://watergatebaycamping.co.uk/pricing-2026/",
    notes: "Smaller campsite with Atlantic views at Tregurrian, half a mile from Watergate Bay; formerly the outer park of Watergate Bay Touring Park, whose pool, bar, café, play areas and dog exercise field its guests may use, 200–300 yards along the road. Standard, large, hardstanding and fully serviced pitches with 16 A hookup; small non-electric camping pitches. Heated toilet and shower block, laundrette, indoor washing-up, Elsan and waste disposal, wetsuit and dog wash, wifi, phone charging. Shop and off-licence with bake-to-order bread and pasties; Sunshine at The View café and gin bar, dog friendly and open to the public, daily in peak times. One vehicle per pitch, extra £4.50 if space allows; ANPR barrier, so give the registration. Check-in from 1pm, out by 11am. Electric pitches Friday–Sunday arrivals and departures only in the summer holidays; three nights minimum over the spring and August bank holidays. Families and couples; quiet 10pm–7am. Raised BBQs, charcoal only; no fire pits or wood. £50 deposit per pitch per week; no booking fee",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £4.25 each a night; half price for stays of seven nights or more outside the spring bank holiday and summer holidays. On a lead at all times and kept off other pitches. Welcome in the bar, café, reception and shop on both sites",
      season: { from: "03-27", to: "10-01" },
      price_per_night: 30,
      price_note: "standard hookup pitch £10 plus £10 per adult, low season; per adult £11.10–15.45 in mid season, £15.20 in the spring bank holiday week, £17.65 24 July–31 August. Large hookup pitch £13.65, hardstanding or fully serviced £15.20. 15% off seven nights or more outside peaks, 10% for over-65s, asked for when booking",
      hookup: true,
    },
  },
  {
    slug: "watergate-bay-touring-park",
    name: "Watergate Bay Touring Park",
    kind: "stay",
    // Centre of OSM way 307927004. The TR8 4AD postcode centroid, which the
    // owner gives, is 510 m south-west.
    lat: 50.44999, lon: -5.02742,
    address: "Tregurrian, Newquay, TR8 4AD",
    phone: "01637 860387",
    email: "email@watergatebaytouringpark.co.uk",
    url: "https://www.watergatebaytouringpark.co.uk/touring-pitches",
    notes: "Family-run park at Tregurrian since 1975, half a mile from Watergate Bay beach; sister site of The View. Grass and gravel hardstanding pitches, non-electric or with 10 or 16 A hookup, up to premium pitches with water, drainage and a pergola; electricity pay-as-you-go from 2026. Two heated shower blocks, family bathroom, laundrette. Indoor pool, tennis court, skate park, games room, dog exercise area; Market Kitchen shop, café and restaurant; Cribbar bar with entertainment; EV charging; paid wifi. Not every facility is open all season. ANPR barrier. Pitches from noon, out by 11am. Electric pitches arrive and depart Friday, Saturday or Sunday in the main holiday weeks; three nights minimum at bank holidays, seven over Boardmasters. Families and couples only. £50 a week deposit; balance two weeks before arrival; no refunds for leaving early. Quiet after 11pm",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, pre-booked and charged; on a lead at all times, with an exercise area. Never left unattended, in cars or outside units overnight. Some breeds refused",
      // No touring season or tariff on the owner's site. The View's 2026 tariff
      // gives this park's pool as open 2 April–13 September.
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "watergate-bay-car-park",
    name: "Watergate Bay car park",
    kind: "stay",
    // Centre of OSM way 308478412, "Watergate Bay, Public Car Park". The
    // council's location map is centred 90 m north-west of it; the TR8 4AD
    // postcode centroid is 530 m north-east.
    lat: 50.44338, lon: -5.03776,
    address: "Watergate Bay, Newquay, TR8 4AD",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/watergate-bay-newquay-tr8-4ad/",
    // Rules from the car park's page and Cornwall Council's motorhome parking
    // page; each Newquay car park's own page gives its ban. park4night reviewers
    // report no overnight parking at Mawgan Porth's beach car park, which isn't
    // the council's.
    notes: "Cornwall Council long-stay car park behind Watergate Bay beach: about 400 spaces, tarmac, stone and grass, open 24 hours, no height limit. The only council car park in the Newquay area where self-contained motorhomes with their own toilet may stay overnight; no motorhome bays or facilities. Buy a motorhome overnight ticket for each night: ordinary tickets don't count. Two consecutive nights at most. Every council car park in Newquay town (Trenance, Tregunnel, Mount Wise, Harbour, Belmont, Towan Headland) bans motorhomes and campers 11pm–8am, and Porth Beach bans sleeping. Pay and display, JustPark location 8430, or BuzzPay",
    verified: "2026-09-14",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "watergate-bay-hotel",
    name: "Watergate Bay Hotel",
    kind: "stay",
    // Centre of OSM way 308479552. The TR8 4AA postcode centroid is 20 m
    // south-west.
    lat: 50.44495, lon: -5.04105,
    address: "On the Beach, Watergate Bay, TR8 4AA",
    phone: "01637 860543",
    email: "life@watergatebay.co.uk",
    url: "https://watergatebay.co.uk/whos-coming/dogs/",
    notes: "Hotel on the beach at Watergate Bay, the path at the door. Rooms, suites, beach lofts, family suites and Village apartments. Zacry's restaurant, The Beach Hut on the sand, The Living Space; Swim Club with 25 m pool, hot tub and sauna. Rooms from 3pm, out by 11am. Free parking for residents, including the public beach car park; give the registration at the front desk. Ten slow EV chargers for guests",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms throughout the hotel, up to two dogs per room: £15 a night for the first, £5 for a second. Welcome in The Living Space and The Beach Hut, not Zacry's; the hotel suggests a local dog sitter. The beach is dog friendly all year",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "porth-beach-holiday-park",
    name: "Porth Beach Holiday Park",
    kind: "stay",
    // Centre of OSM way 118625819. The TR7 3NH postcode centroid, which the
    // owner gives, is 170 m west.
    lat: 50.42616, lon: -5.05109,
    address: "Newquay, TR7 3NH",
    phone: "01637 876531",
    email: "info@porthbeach.co.uk",
    url: "https://porthbeach.co.uk/touring-camping-newquay/",
    notes: "Level touring park in a sheltered bay across the road from Porth beach, a mile from Newquay. Grass or hardstanding pitches graded by the width they allow, many with 16 A hookup; premium riverbank pitches with water, drainage and TV point. Award-winning blocks with free showers; launderette. Charged per pitch, not per person, up to eight people. Pitches from noon, out by 10am; no pitching after dark: late arrivals wait in the car park until reception opens at 9am. No driving on site midnight–7am. £50 a week deposit, balance 40 days before arrival; booking fee £4 online, £12 by phone; choosing a pitch £12",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Touring side only, £5 per dog a night; breed asked at booking and some refused. On a lead at all times, even on the pitch; not exercised in the park or car parks; not left alone",
      // The tariff is headed 2025 but its first band starts 27 March, a Friday
      // in 2026.
      season: { from: "03-27", to: "10-30" },
      price_per_night: 44,
      price_note: "green electric pitch (4 m wide: small motorhome without awning, or VW camper with one), 27 March–22 May; red (2.5 m, VW camper without awning) £41, blue (6 m) £50, premium £52. Green £59 18 July–4 September. Hardstanding £3, extra car £1",
      hookup: true,
    },
  },
  {
    slug: "hendra-holiday-park",
    name: "Hendra Holiday Park",
    kind: "stay",
    // Centre of OSM way 118626389. The TR8 4NY postcode centroid is 230 m
    // north-east.
    lat: 50.39957, lon: -5.05096,
    address: "Newquay, TR8 4NY",
    phone: "01637 875778",
    email: "bookings@hendra-holidays.com",
    url: "https://www.hendra-holidays.com/camping-in-cornwall-touring/",
    notes: "Large holiday park on the inland edge of Newquay: 80 acres, touring and camping pitches from grass electric to hardstanding and fully serviced, plus holiday caravans. Pitch and Pause, a quieter adults' area with its own facilities block; adult-only pitches off season. Oasis indoor fun pool, outdoor pool end of May–August, Terrace Bar and Restaurant, pizza, fish and chips, nightly entertainment in peak times, shop, launderette. Bus to Newquay town centre from the main entrance. Reception 8am–8pm on Friday, Saturday and Monday check-in days, 8am–6pm otherwise",
    verified: "2026-09-14",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On pitches set aside for dog owners, near a dog walking area, charged by season; say so when booking. Not on Gold or Silver Leaf, Super or Grand pitches. On leads at all times; some breeds refused",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "headland-hotel-newquay",
    name: "The Headland Hotel",
    kind: "stay",
    food: { type: "restaurant" },
    // Centre of OSM way 111683659, "Headland Hotel". The TR7 1EW postcode
    // centroid is 20 m south-west.
    lat: 50.42053, lon: -5.09702,
    address: "Headland Road, Newquay, TR7 1EW",
    phone: "01637 872211",
    email: "reception@headlandhotel.co.uk",
    url: "https://www.headlandhotel.co.uk/about-us/dog-friendly/",
    notes: "Five-star Victorian hotel on Towan Headland above Fistral Beach, open since 1900, with the coast path outside. Rooms and suites, some with balconies, and self-catering Headland Cottages. RenMor restaurant, The Ballroom lounge, Ugly Butterfly by Adam Handling; AquaClub pools and spa. Rooms from 3pm, out by 11am. Free parking for guests",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Up to two per room, £33 each a night; confirm them when booking. The dog page says all hotel rooms, the FAQ a selection, so ask. On a lead inside; welcome in The Ballroom and parts of RenMor, not the AquaClub or spa. May be left in the room unless persistently barking",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "esplanade-hotel-newquay",
    name: "The Esplanade Hotel",
    kind: "stay",
    // Centre of OSM way 118286759. The TR7 1PS postcode centroid is 10 m away.
    lat: 50.41196, lon: -5.10349,
    address: "Esplanade, Newquay, TR7 1PS",
    phone: "01637 873333",
    email: "reservations@esplanadehotelnewquay.co.uk",
    url: "https://esplanadehotelnewquay.co.uk/sleep/dogs-welcome/",
    notes: "Four-star hotel overlooking Fistral Beach: sea-view and balcony rooms, family rooms, restaurant, surf school on site, family entertainment in the school holidays. Self-service dog wash 7am–10pm, £8, contactless only",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "In a selection of dog-friendly rooms, many with outside access; tell the hotel in advance. £15 per dog a night; dog bed and bowl provided. Not in the restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "lewinnick-lodge",
    name: "Lewinnick Lodge",
    kind: "stay",
    food: { type: "restaurant" },
    // OSM node 1931965322. The TR7 1QD postcode centroid, which the owner
    // gives, is 160 m east.
    lat: 50.41190, lon: -5.11909,
    address: "Newquay, TR7 1QD",
    phone: "01637 878117",
    email: "reception@lewinnicklodge.co.uk",
    url: "https://lewinnicklodge.co.uk/stay/dog-friendly-stays/",
    notes: "Restaurant with rooms on Pentire Headland, west of Fistral, with sea-view bedrooms. EV destination charging for guests",
    verified: "2026-09-14",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "In a selection of dog-friendly rooms, up to two dogs, £25 each a night; check one is free before booking. Welcome in the bar and on the terrace, where tables can't be reserved",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "quarryfield-crantock",
    name: "Quarryfield Holiday Park",
    kind: "stay",
    // OSM node 1812853582, "Quarryfield Campsite". The TR8 5RJ postcode centroid,
    // which the owner gives, is 145 m north-east. OSM's way 118616408 around it
    // is tagged "Quarryfields/Crantock Beach" and Parkdean, a different park.
    lat: 50.40383, lon: -5.10686,
    address: "Crantock, TR8 5RJ",
    phone: "01637 830338",
    email: "info@quarryfield.co.uk",
    url: "https://www.quarryfield.co.uk/camping-and-touring/",
    notes: "Family-run park on the Crantock bank of the Gannel, above Crantock beach; Crantock village 10–15 minutes' walk. Camping and touring pitches and static caravans; the site gives 150 pitches with 150 hookups on one page and close to 200 pitches with 50 hookups on another. Outdoor pool, play area, arcade with pool table, an inn on site, new toilet and shower block with laundry. Ring or email to check availability, then post the booking form or bring it on arrival. Pitches from noon, out by 10am; no refunds for leaving early. Quiet after 10.30pm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On pet-friendly pitches, £3 a night; on a lead at all times, under strict control",
      // The camping tariff runs 28 March to 31 October; its dates fall on
      // Saturdays in 2026.
      season: { from: "03-28", to: "10-31" },
      price_per_night: 23,
      price_note: "two adults at £11.50 each, 28 March–23 May, 30 May–18 July and 29 August–31 October; £13 each 23–30 May and 18 July–29 August. Hookup £9; children 3–15 £7–8",
      hookup: true,
    },
  },
  {
    slug: "trevella-park",
    name: "Trevella Holiday Park",
    kind: "stay",
    // Centre of OSM way 118558857, "Trevella Caravan Park". The TR8 5EW postcode
    // centroid, which the owner gives, is 370 m west.
    lat: 50.39766, lon: -5.09166,
    address: "Newquay, TR8 5EW",
    phone: "01637 808465",
    url: "https://www.parkholidays.com/holidays/parks/cornwall/trevella",
    notes: "Park Holidays park near Crantock: caravans, lodges and pods, with touring and camping pitches. Micro pub, shop, food trucks in peak season; outdoor pool 24 April–6 September, booked on arrival; fishing lakes, crazy golf, arcade, play area; dog walking area and dog and wetsuit wash; launderette, EV chargers. Cashless: cards only. The owner's site gives no touring tariff, season or pitch detail",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      // Park Holidays' own camping page, for all its touring parks; nothing
      // Trevella-specific beyond the dog facilities.
      dogs_note: "Park Holidays says pets are welcome on camping pitches for an extra fee and dogs at all its parks; on a lead at all times. Fee not given for touring",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "crantock-plains",
    name: "Crantock Plains Touring Park",
    kind: "stay",
    // Centre of OSM way 118571237. The TR8 5PH postcode centroid, which the
    // owner gives, is 70 m south-west.
    lat: 50.38977, lon: -5.08800,
    address: "Crantock, Newquay, TR8 5PH",
    phone: "01637 830955",
    email: "info@crantock-plains.co.uk",
    url: "https://crantock-plains.co.uk/prices.htm",
    // The owner's site is old: its tariff and booking form are headed 2024.
    notes: "Owner-supervised touring park off the A3075, about 2 km from Crantock village, pitched at campers who want peace and space. Six acres in two sheltered fields, flat pitches marked round the edges; hookups. Tiled toilet block with showers, washing-up sink, small laundry, Elsan point; phone charging, wifi, small play area. Families and couples. Book with the printed form, £50 deposit plus £2 booking fee; noon to noon. Out of season ring 01637 831273",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 a night; on leads, under strict supervision",
      // The 2024 tariff gives April–September.
      season: { from: "04-01", to: "09-30" },
      price_per_night: 20,
      price_note: "two adults at £10 each, 2024 tariff; hookup £7, single occupancy £14, children 2–15 £7; two adults minimum charge in July and August",
      hookup: true,
    },
  },
  {
    slug: "treago-farm",
    name: "Treago Farm",
    kind: "stay",
    // Centre of OSM way 118559478. The TR8 5QS postcode centroid, which the
    // owner gives, is 55 m south.
    lat: 50.39910, lon: -5.12212,
    address: "Crantock, Newquay, TR8 5QS",
    phone: "01637 830277",
    url: "http://www.treagofarm.co.uk/campsitetariff.html",
    notes: "Farm campsite at the West Pentire end of Crantock, surrounded by National Trust land and Cubert Common; footpaths across the common and dunes to Crantock beach and Porth Joke. 81 grass pitches, electric hookups. Free hot showers, launderette, freezer, games room. Shop and Rafters bar, adults only, mid May to early September, the bar 8–11pm. Book with the posted form and a £50 deposit; site fees paid on arrival, no refunds for arriving late or leaving early. Friday or Saturday changeovers in high season. No EV charging from pitches, no open fires, BBQs off the grass; no groups of young men or women unless arranged",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night; on a short lead on site at all times, and exercised off site",
      // Self-catering runs late March to the end of October; no camping season
      // given.
      season: null,
      price_per_night: 24,
      price_note: "two adults at £12 each, before 22 May, 30 May–4 July and from 4 September; £14 each at the late May bank holiday and 3 July–5 September. Electric pitch £12; minimum pitch fee £28, or £40 with electric, 10 July–29 August. No charge for the van",
      hookup: true,
    },
  },
  {
    slug: "porth-joke-campsite",
    name: "Porth Joke Campsite",
    kind: "stay",
    // Centre of OSM way 118628840, "Porth Joke Camping Site". The owner gives no
    // postcode for the campsite.
    lat: 50.39766, lon: -5.12964,
    address: "Treago Mill, Crantock",
    phone: "01637 831207",
    email: "treagomill@gmail.com",
    url: "https://crantockholiday.co.uk/campsite.html",
    notes: "Quiet family field beside Treago Mill, a few minutes along a level sandy path to Porth Joke beach, reached down a sandy track past Treago Farm. Camper vans welcome up to 6.5 m; no caravans or large motorhomes. Pitches about 10 m wide. Stone toilet block, unmetered hot showers, washing-up room with hot water, wifi, device charging; daily ice packs against a £20 returnable deposit. Fires in fire pits off the grass; logs sold at the house, no wood gathering. Take rubbish home, or £10 per 90 l bag. No recorded music aloud, quiet after 11pm. Book online",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: false,
      season: null,
      price_per_night: null,
      // No hookup mentioned by the owner; OSM tags it power_supply=no.
      hookup: null,
    },
  },
  {
    slug: "trevornick",
    name: "Trevornick Holiday Park",
    kind: "stay",
    // Centre of OSM way 593484102. The TR8 5PW postcode centroid, which the
    // owner gives, is 210 m west.
    lat: 50.38560, lon: -5.12683,
    address: "Holywell Bay, TR8 5PW",
    phone: "01637 830531",
    email: "info@trevornick.co.uk",
    url: "https://trevornick.co.uk/campsite-in-cornwall-touring/cornwall-touring-park/",
    notes: "Large family holiday park above Holywell Bay, beside Cubert Common, with Holywell Bay Golf's three courses. Standard electric grass pitches, premium grass with water and TV point, premium plus semi-hardstanding; ready tents, caravans, lodges, cottages. Farm Shop, takeaway, Woodys, Bear Den, arcade, fishing; Farm Club and The Shack in peak weeks, pool from mid May, Lounge Bar in the summer holidays. Pitches from noon, out by 10am; late arrivals use the night holding field. Same-day bookings three nights minimum. 20% non-refundable deposit, balance 12 weeks before. No young adults' groups in peak weeks. Charcoal BBQs raised off the ground, no fire pits or open fires. Office 9am–7pm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Booked and charged per dog, up to three a pitch, in the dog fields: Hay, Red Corn and Sun in peak season, Pond and Yellow as well at Easter, September and October. On a lead; never left alone. Some breeds refused, XL Bully among them. Two dog walking fields, dog shower; welcome in Woodys, the shop, bars, arcade, reception and part of the pool",
      // 2026 facilities run from 2 April, before Easter, to October half term;
      // the park closes on 1 November.
      season: { from: "04-02", to: "10-31" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "perran-sands",
    name: "Haven Perran Sands",
    kind: "stay",
    // Centre of OSM way 120192524, "Perran Sands Holiday Camp". The TR6 0AQ
    // postcode centroid, which the owner gives, is 150 m west.
    lat: 50.35833, lon: -5.14253,
    address: "Perranporth, TR6 0AQ",
    url: "https://www.haven.com/touring-camping/parks/cornwall/perran-sands",
    notes: "Haven holiday park with direct access to Perran Beach. Basic and electric touring pitches among the caravans and glamping. Indoor pool with flumes; outdoor pool and lazy river from May half term, then selected days to the August bank holiday; Slim Chickens restaurant and takeaway, shop, entertainment. No commercial vehicles, no sleeping in awnings, no pup tents or gazebos",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1 per dog a night, up to two per pitch. The beach is dog friendly",
      // Haven's pages carry season dates in their data but not clearly for this
      // park.
      season: null,
      price_per_night: 12,
      price_note: "pitch, from; varies by date and pitch",
      hookup: true,
    },
  },
  {
    slug: "tollgate-farm-perranporth",
    name: "Tollgate Farm Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 481874177. The TR6 0AD postcode centroid, which the
    // owner gives, is 580 m north-west.
    lat: 50.35170, lon: -5.13499,
    address: "Budnick Hill, Perranporth, TR6 0AD",
    phone: "01872 572130",
    email: "tollgatefarm@aol.com",
    url: "https://www.tollgatefarm.co.uk/tariff",
    notes: "Family-run site above Perranporth with views across the dunes to the sea; less than a mile to the town and beach. Generous pitches in enclosed areas, some with coastal views; hard standings, 16 A hookups, fully serviced pitches; five LogPods. Heated showers and family and accessible shower rooms, camper's kitchen, laundry, dishwashing, drive-over waste point, licensed shop, Calor and Camping Gaz, paid wifi. Farm animals, play field. Families and couples only. Three nights or fewer paid in full at booking; 40% deposit for longer. 10% off three nights or more off peak, outside school holidays",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs free",
      season: { from: "03-30", to: "09-30" },
      price_per_night: 28,
      price_note: "campervan or motorhome £10 plus £9 per adult, low season (30 March–22 May, September); £11 plus £11 mid, £14 plus £14 high (5–7 June, 18 July–31 August). Hookup £6, £7.50 high; fully serviced pitch £17.50–21.50 plus adults. Two nights minimum over the Tunes in the Dunes festival",
      hookup: true,
    },
  },
  {
    slug: "perranporth-camping",
    name: "Perranporth Camping & Touring Park",
    kind: "stay",
    // Centre of OSM way 875859185, an unnamed camp site; OSM node 1789141097,
    // "Perranporth Cp & Touring Park", is 50 m south. The TR6 0DB postcode
    // centroid, which the owner gives, is 200 m west.
    lat: 50.34567, lon: -5.14037,
    address: "Budnick, Perranporth, TR6 0DB",
    phone: "01872 572174",
    email: "perranporthcamping@gmail.com",
    url: "https://perranporth-camping.co.uk/prices/",
    notes: "Family-run site in a sheltered, tree-lined valley, the closest to Perranporth: 10 minutes' fairly level walk to the town and beach, with the dunes beside it. Grass pitches about 8 × 5 m, grass electric pitches up to 8 × 8 m, and electric hardstandings with water and drainage; 16 A. Two toilet blocks with coin showers, accessible shower room, laundry, dishwashing, waste disposal point, ice pack freezer, phone charging at the office. Outdoor pool included; The Fern cocktail bar; Sisu breakfast wagon. Arrivals from noon, out by 10.30am; pitches re-let after 6pm unless warned of a late arrival. One to three nights paid in full, non-refundable; £100 deposit a pitch otherwise. Minimum stays on busy weekends. No generators; charcoal and disposable BBQs banned in the dry weather since 17 July 2026",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night; on a lead on site at all times. Dog wash at reception. Welcome in The Fern, not the play area or pool",
      season: { from: "03-28", to: "11-02" },
      price_per_night: 32,
      price_note: "pitch with one vehicle and two people, low season (28 March–30 April, 28 September–2 November); £36 mid, £40 high (22–31 May, 5–7 June, 3 July–31 August). Hookup £8; extra adult £11–15. Autumn deal 21 September–2 November: £28, or £34 with hookup, with the pool closed",
      hookup: true,
    },
  },
  {
    slug: "anchor-barrow",
    name: "Anchor Barrow Campsite",
    kind: "stay",
    // OSM node 8894240417. The TR6 0ED postcode centroid, which the owner gives,
    // is 100 m north-east.
    lat: 50.33590, lon: -5.16883,
    address: "St Georges Hill, Perranporth, TR6 0ED",
    phone: "07949 501235",
    email: "stay@anchorbarrow.com",
    url: "https://www.anchorbarrow.com/touring-camping-perranporth/",
    notes: "Family-run field campsite on a hill south of Perranporth: 16 acres, no sea view, exposed, some pitches less level. 35 electric pitches, 10 × 15 m with 16 A hookup; non-electric pitches anywhere in the two fields. Toilets, showers, launderette, food preparation area with fridges, covered washing-up, charging lockers, paid EV charger (not from the pitch). Shop with meat, milk, bread and eggs; Barrow Bar daily; feast nights with local musicians Tuesday, Thursday, Friday and Saturday. Fire pits and BBQs allowed, raised. Takes groups, by phone. Arrivals noon–8pm, out by 11am; music off by 10pm. Beach 25 minutes by footpath; bus stop at the entrance",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 per dog a night; on leads except in the dog roaming area; not left alone on site",
      season: null,
      price_per_night: 29.5,
      price_note: "non-electric pitch with two people, same all season; electric £39.50. Extra person 13 and over £11.50, 3–12 £6",
      hookup: true,
    },
  },
  {
    slug: "seiners-arms",
    name: "The Seiners Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 5521962388, tagged TR6 0DP. The TR6 0JL postcode centroid, which
    // the owner gives, is 130 m south-east.
    lat: 50.34620, lon: -5.15562,
    address: "Beach Road, Perranporth, TR6 0JL",
    phone: "01872 573118",
    email: "info@seiners.co.uk",
    url: "https://www.seiners.co.uk/dog-friendly/",
    notes: "Pub and B&B on Perranporth beach, the rooms seconds from the sand, most with sea views, all with private bathrooms. Breakfast in The Rocks restaurant. Changes or cancellations two weeks before arrival, or the full stay is charged",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "In a few ground-floor rooms marked Dog Friendly when booking online; a dog added to any other room will be turned away. Must be fine left alone briefly; not nervous or reactive. Welcome in the bar and main restaurant from 11am, not The Rocks: breakfast on the sea-view terrace or in the room, arranged ahead",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "droskyn-lookout",
    name: "Droskyn Lookout",
    kind: "stay",
    // Centre of OSM way 363717212, old_name "YHA Perranporth". The TR6 0GS
    // postcode centroid, which the owner gives, is 115 m east.
    lat: 50.34609, lon: -5.16165,
    address: "Droskyn Point, Perranporth, TR6 0GS",
    email: "hello@droskynlookout.com",
    url: "https://droskynlookout.com/hostel/",
    notes: "Independent hostel, café and wellness centre in the old YHA building on the cliff at Droskyn Point, on the path. Eight-bed mixed dorms, a four-bed en-suite family room and a private room with a double bed and shared bathroom; linen included, towels to hire. Self-catering kitchen, washing machine, lockers, luggage store. Sauna, ice baths and hot tub, booked separately. Nearest parking Droskyn car park, free 1 November–31 March. Hostelworld gives check-in 4–8pm",
    verified: "2026-09-15",
    stay: {
      type: "hostel",
      dogs: null,
      dogs_note: "Hostelworld lists pets allowed; nothing on the owner's site",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "wheal-leisure-car-park",
    name: "Wheal Leisure car park",
    kind: "stay",
    // Centre of OSM way 239997025, "Wheal Leisure Car Park". The TR6 0EY postcode
    // centroid is 60 m south-east.
    lat: 50.34462, lon: -5.15212,
    address: "Perranporth, TR6 0EY",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/wheal-leisure-perranporth-tr6-0ey/",
    // Rules from the car park's page and Cornwall Council's motorhome parking
    // page. Perranporth Beach car park's ban is from park4night reviews
    // (place 293402), 2022–2025.
    notes: "Cornwall Council long-stay car park in the middle of Perranporth: 145 spaces, tarmac, open 24 hours, no height limit but a 3050 kg weight limit. The council's only car park in Perranporth, and one of eleven in Cornwall, where self-contained motorhomes with their own toilet may stay overnight. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. No motorhome bays; pay for every bay you cover. park4night reviewers report signs banning overnight sleeping 8pm–9am, with a £100 fine, and 2.13 m height barriers at Perranporth Beach car park. Pay and display, JustPark location 8340, or BuzzPay",
    verified: "2026-09-15",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "budnick-hill-londis",
    name: "Londis, Budnick Hill",
    kind: "stay",
    // Centre of OSM way 1191771540, a paid car park beside the Londis (node
    // 12536863836) and Texaco filling station on the B3285. park4night's pin is
    // on the shop, 30 m east; the TR6 0BX postcode centroid is 75 m north.
    lat: 50.34628, lon: -5.14882,
    address: "B3285, Perranporth, TR6 0BX",
    url: "https://park4night.com/en/place/102391",
    notes: "Parking behind the filling station and Londis on the road into Perranporth: about 12 van bays split by metal fencing, grass and hardstanding, easy for vans up to about 8 m; overflow in the bays outside or by the jet wash. Pay in the shop. No facilities. Five minutes to the Co-op, about 10 to the beach down a sandy lane; buses to Newquay outside. Reviewers call it quiet at night. Fills at busy times: ring ahead",
    // park4night listing and reviews, rated 4.1 from 72; the most recent in
    // August 2026. Several reviewers found the charges confusing.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 10,
      price_note: "per van overnight, from 7pm until 10.30–11am, from 2026 reviews; a further £10 by day",
    },
  },
  {
    slug: "perranround-farm",
    name: "Perranround Farm",
    kind: "stay",
    // Centre of OSM way 1215187046, an unnamed farmyard at Rosehill; park4night's
    // pin is 30 m west, and the TR4 9JX postcode centroid 95 m south-west.
    // Reviewers say to turn into the farmyard, not the next entrance.
    lat: 50.34606, lon: -5.11838,
    address: "Rosehill, Goonhavern, TR4 9JX",
    url: "https://park4night.com/en/place/584806",
    notes: "Working dairy farm on the B3285 between Perranporth and Goonhavern: a front field open most of the year and a big back field in summer, park where you like. One toilet, drinking water, Elsan and waste water disposal, bin. Ring on arrival and the farmer comes out to take cash. Some road noise in the front field. Bus stop at the gate for Newquay and Truro; pub and shop nearby",
    // park4night listing and reviews, rated 5 from 12; the most recent in
    // August 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed",
      // park4night: open April–October.
      season: null,
      price_per_night: 10,
      price_note: "per van for 24 hours, cash, from 2025 reviews; the listing says £15",
      hookup: false,
    },
  },
  {
    slug: "ocean-meadow-cl",
    name: "Ocean Meadow",
    kind: "stay",
    // Postcode centroid (TR6 0BB), which the owner gives; OSM has no campsite.
    // The Club's GPS is 85 m south.
    lat: 50.33498, lon: -5.15377,
    address: "The Old Stables, Liskey Hill, Perranporth, TR6 0BB",
    phone: "01872 571888",
    email: "yvonne@ocean-meadow.co.uk",
    url: "https://ocean-meadow.co.uk/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: five level hardstanding pitches, each with 16 A hookup, water and its own bin, in a field above Perranporth with country and coastal views over the beach. Chemical disposal point, recycling, rotary clothes line; no toilets or showers listed. Some road noise. Arrivals from noon, by 8pm; out by 11am. Perranporth 15–20 minutes' walk down Liskey Hill, a steep climb back; bus stops nearby for Newquay and Truro. Book with the owner's form. Mobile 07980 241767",
    verified: "2026-09-15",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Well-behaved dogs, under control at all times; included in the pitch fee. Field next to the site for walking dogs off the lead",
      season: { from: "05-16", to: "09-30" },
      price_per_night: 30,
      price_note: "per pitch, from; includes hookup, awning, children, pets and cars",
      hookup: true,
    },
  },
  {
    slug: "polgarth-farm-cl",
    name: "Polgarth Farm",
    kind: "stay",
    // Postcode centroid (TR5 0XX), from the Club's listing; OSM has no campsite.
    // The Club's GPS is 105 m south.
    lat: 50.32515, lon: -5.17522,
    // The Caravan and Motorhome Club's listing.
    address: "Trevellas, St Agnes, TR5 0XX",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/perranporth/polgarth-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: a 0.75-acre grass site on a working farm at Trevellas, some pitches sloping. 16 A hookup, battery charging, information room, recycling, dog walk from the site. Pub within a mile; buses to Perranporth and St Agnes within a mile. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs, with a dog walk from the site",
      // The Club lists it open all year.
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "cross-coombe-farm",
    name: "Cross Coombe Farm",
    kind: "stay",
    // Centre of OSM way 878179683, "Cross Coombe Farm Campsite". The TR5 0XP
    // postcode centroid is 180 m west.
    lat: 50.32314, lon: -5.18721,
    // The Camping and Caravanning Club's listing names Cross Coombe, St Agnes;
    // OSM gives no address.
    address: "Cross Coombe, Trevellas, St Agnes",
    // Phone from OSM's tags; the Club shows contact details to members only.
    phone: "01872 552379",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/cornwall/st-agnes/crosscoombefarm/",
    notes: "Camping and Caravanning Club Certificated Site, members only: five vans or caravans and ten tents. Family-run, on the edge of the Jericho valley, the coast path and Trevellas cove minutes away; St Agnes 25 minutes' walk. Nine terraced, level pitches over 2.5 acres, grass or hardstanding, each with water and hookup; views over the valley to St Agnes. Two shower rooms, toilets, washing-up area, ice pack freezer, chemical waste point. Donkeys, alpacas and Shetland ponies in the paddocks. Booking advised in summer",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing says pets welcome, with a designated dog walk",
      // The Club says the pitches are accessible all year but gives no season.
      season: null,
      price_per_night: 25,
      price_note: "members' price per unit, up to two adults and two children, £25–30",
      hookup: true,
    },
  },
  {
    slug: "blue-hills-touring-park",
    name: "Blue Hills Touring Park",
    kind: "stay",
    // Centre of OSM way 169260163, "Blue Hills Touring Site". The TR5 0XP
    // postcode centroid, which the owner gives, is 130 m south. OSM's way
    // 1409821062, "Spitfire Park", is next to it and probably its Spitfire field.
    lat: 50.32398, lon: -5.18928,
    address: "Crosscoombe, Trevellas, St Agnes, TR5 0XP",
    phone: "01872 552999",
    email: "camping@blue-hills.co.uk",
    url: "https://bluehillscamping.co.uk/trevellas-camping/",
    notes: "Small, quiet touring park at Trevellas, beside the coast path, with a beach dog friendly all year down the lane. Spitfire, the main field, has 20 grass pitches round the edge, most with hookup and a few hardstandings; Harleys, fully serviced grass and hardstanding pitches with water, drainage and hookup, through a gateway 3 m wide at most; Avenger, tents only. Free hot showers, accessible shower room, covered washing-up, laundry. Pitches from 1pm, out by 11am; no arrivals after 7pm or dusk, whichever is first; night gate shut 10.30pm–7am. Pre-booking essential, with minimum stays. No sleeping in cars, or in vans without at least one rear or side opening window. No youth groups, stag or hen parties, or multiple units in July and August. No generators, EV charging, open fires or wood-burning fire pits. 25% deposit; no refunds within 28 days. Bus stop on the B3285 at the snooker hall",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per booking, £2 a night; on short leads and tethered or penned on the pitch; not left alone in units when you leave the park",
      // The home page says Easter to October, the pitches page 1 April to
      // 31 October.
      season: { from: "04-01", to: "10-31" },
      price_per_night: null,
      price_note: "tariff includes two people, one unit, one vehicle and hookup; prices only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "trevellas-manor-farm",
    name: "Trevellas Manor Farm Campsite",
    kind: "stay",
    // Centre of OSM way 878337149. The TR5 0XP postcode centroid, which the owner
    // gives, is 250 m north-west.
    lat: 50.32147, lon: -5.18689,
    address: "Crosscombe, St Agnes, TR5 0XP",
    phone: "01872 552238",
    email: "contact@tmfcampsite.co.uk",
    url: "https://www.trevellasmanorfarmcampsite.co.uk/tariffs",
    notes: "Family-run campsite, in the same field since 1927, its pitches round the edge of a large open field with sea views; Trevellas Porth 10 minutes' walk, St Agnes 30 minutes along the coast path. Grass and hardstanding pitches, over half with 16 A hookup. Modern block with showers, family and accessible rooms, washing-up, wetsuit wash, laundry, chemical and grey waste disposal. Recreation field and fenced off-lead dog area overlooking the sea. Minimum stays: two nights, three on sea-view pitches, in low season; three and four 17 July–31 August. A hiker pitch with no vehicle takes single nights, £10, by email. Arrivals 2–7pm, out by 11am. Three nights or fewer paid in full at booking; non-refundable. No generators. The owner advises ignoring sat nav and coming via Perranporth and the B3285; not via Wheal Kitty or Blue Hills, and not through St Agnes if large or towing",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, more in low season by arrangement; £2 a night. On a lead on site except in the fenced dog exercise area",
      season: { from: "04-03", to: "09-28" },
      price_per_night: 32,
      price_note: "grass or hardstanding pitch with hookup, two people, one car and one van, low season (3 April–16 July, 1–28 September); £40 high. Without hookup £26, £34; sea-view with hookup £42, £50. Extra person 14 and over £8",
      hookup: true,
    },
  },
  {
    slug: "driftwood-spars",
    name: "The Driftwood Spars",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 692778502. The TR5 0RT postcode centroid, which the owner gives,
    // is 40 m south.
    lat: 50.31822, lon: -5.20247,
    address: "Trevaunance Cove, St Agnes, TR5 0RT",
    phone: "01872 552428",
    url: "https://driftwoodspars.co.uk/bed-and-breakfast/",
    notes: "Brewpub and AA four-star B&B at Trevaunance Cove, on the coast path, in a 1650s building framed with spars from wrecks. Fifteen en-suite rooms, some with sea views: nine in the main building, three in an annex behind the brewery, and three across the road with a small shared garden. Breakfast in the sea-view dining room. Two nights minimum at weekends and three in school holidays; ring to ask. Cancel seven days ahead or pay the first night. Its own beers, all gluten free; restaurant. Car park paid, with £5.50 off for customers spending £10. A Brit Stops host in St Agnes whose description matches the Driftwood takes vans under 20 ft, with advance notice",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "£7.50 per dog a night. The owner suggests the rooms across the road, with a shared garden, for dogs",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "st-agnes-hotel",
    name: "St Agnes Hotel",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1240665135, "The St Agnes Hotel". The TR5 0QP postcode centroid,
    // which the owner gives, is 15 m north-east.
    lat: 50.31244, lon: -5.20383,
    address: "11 Churchtown, St Agnes, TR5 0QP",
    phone: "01872 552307",
    url: "https://stagneshotel.co.uk/about-us/",
    notes: "The Aggie: St Austell Brewery pub with rooms in the centre of the village, opposite the church; Trevaunance Cove 10 minutes' walk down Stippy Stappy. En-suite king, twin superking and family rooms, most with views over St Agnes. Breakfast 8–11.30am, included in the rates. Breakfast, lunch and dinner daily; bar menu, terrace with a pizza shack in the warmer months. Free parking. Rooms all year; ring for the best rates",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog friendly, for a small supplement; amount not given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "beacon-country-house",
    name: "Beacon Country House",
    kind: "stay",
    // Postcode centroid (TR5 0NW), which the owner gives; OSM has no feature for
    // it.
    lat: 50.30496, lon: -5.21569,
    address: "Goonvrea Road, St Agnes, TR5 0NW",
    phone: "01872 552318",
    email: "info@beaconhotel.co.uk",
    url: "https://beaconhotel.co.uk/hotel-grounds/accommodation/",
    notes: "Family-run country house B&B in two acres below St Agnes Beacon, with views along the coast to St Ives. Eleven en-suite rooms: premium rooms with sea or country views, standard doubles, two twin or family rooms, one compact budget double; two rooms on the ground floor. Restaurant and bar. Self-catering shepherd huts too. Two 7 kW EV chargers, paid by app",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      // The linked dog policy PDF no longer loads.
      dogs_note: "In a number of the rooms; not in the restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "beacon-drive-lay-by",
    name: "Beacon Drive lay-by",
    kind: "stay",
    // Centre of OSM way 849339438, street-side parking on Beacon Drive;
    // park4night's pin is 10 m north.
    lat: 50.31132, lon: -5.22315,
    address: "Beacon Drive, St Agnes",
    url: "https://park4night.com/en/place/94185",
    // Council rules from the Reppers Coombe car park page. The National Trust
    // car park ban is from park4night reviews of place 87180.
    notes: "Free roadside parking for about eight on the slope of St Agnes Beacon, with sea views and sunsets; minutes across fields to the cliffs, an easy walk down to Chapel Porth. No facilities. Slight slope, so bring levelling blocks; the lane is signed unsuitable for long vehicles, though reviewers fitted 6 m and long-wheelbase vans. Reviewers call the road quiet at night. National Trust rangers check the nearby Trust car parks, which are day only, and one told a 2024 reviewer that overnight stays here aren't meant to happen, though he let them stay. St Agnes's council car park at Reppers Coombe bans motorhomes and campers 11pm–8am",
    // park4night listing and reviews, rated 4.67 from 15; the most recent in
    // April 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "park4night lists pets allowed",
      season: "all-year",
      price_per_night: null,
      price_note: "free",
    },
  },
  {
    slug: "st-agnes-beacon-club-site",
    name: "St Agnes Beacon Club Campsite",
    kind: "stay",
    // Centre of OSM way 1312771082, "St Agnes Beacon". The Club's GPS is 90 m
    // north; the TR5 0NU postcode centroid 210 m north.
    lat: 50.30686, lon: -5.22518,
    address: "Beacon Drive, St Agnes, TR5 0NU",
    phone: "01872 552543",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/cornwall/st-agnes-beacon-club-campsite/",
    notes: "Caravan and Motorhome Club site at the foot of St Agnes Beacon, with panoramic coastal views; non-members welcome. 88 grass pitches with hookup on a gently sloping site on several levels, partly sheltered by gorse banks. No toilet block: bring your own facilities. Motorhome service point and drive-over waste disposal, laundry, gas, wifi. BBQs allowed. No tents. Arrivals from 1pm. Chapel Porth five minutes by car; St Agnes within walking distance. Enter by the second campsite entrance on Beacon Drive; the first is Beacon Cottage Farm. The Club advises not approaching St Agnes from Perranporth on the B3285. £5 deposit, refundable up to 21 days before",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The Club lists it ideal for dogs, with dog walks on and from the site; pets kept close and in sight",
      season: { from: "03-20", to: "10-05" },
      price_per_night: 25,
      price_note: "pitch and two adults under the Club's Tour for Less offer; prices vary by date and are shown when booking",
      hookup: true,
    },
  },
  {
    slug: "beacon-cottage-farm",
    name: "Beacon Cottage Farm",
    kind: "stay",
    // Centre of OSM way 481707732. The TR5 0NU postcode centroid, which the
    // owner gives, is 370 m north.
    lat: 50.30537, lon: -5.22453,
    address: "Beacon Drive, St Agnes, TR5 0NU",
    phone: "01872 552347",
    email: "jane@beaconcottagefarmholidays.co.uk",
    url: "https://www.beaconcottagefarmholidays.co.uk/camping/tariff/",
    notes: "Campsite on a working beef and arable farm by Wheal Coates, the coast path at the door; Chapel Porth beach 10 minutes' walk, St Agnes by a field path below the Beacon. 60 numbered, level grass pitches in six small paddocks, two with sea views, the rest sheltered; six serviced hardstandings. 10 A hookup. Free hot showers, family shower rooms, laundry, dishwashing, chemical disposal, motorhome service area, freezer for ice packs, wifi, play area. Fish and chip van, butcher, coffee van and pizza oven call. Families and couples only. Pitches from about noon, out by 11am; tell them if arriving after 6pm. Seven nights minimum in August. Deposit £100 a pitch a week on the tariff, £75 in the terms; balance paid on arrival. No fires, fire pits or chimineas; BBQs raised. No EV charging from hookups. Quiet 10pm–8am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night; on a short lead on the park except in the 2.5-acre dog exercise field; taken with you whenever you leave the park. Not in the play area or ball games field",
      // Opens 1 April 2026; the tariff runs to 30 September.
      season: { from: "04-01", to: "09-30" },
      price_per_night: 28,
      price_note: "standard pitch with two people, one car and a van, 1 April–22 May; £32 to 3 July and 4–30 September, £34 to 17 July, £42 18 July–3 September. Hookup £7, water and drainage £6, extra adult £8",
      hookup: true,
    },
  },
  {
    slug: "chapel-porth-motorhome-park",
    name: "Chapel Porth Motorhome Park",
    kind: "stay",
    // Postcode centroid (TR5 0NR), the postcode Pitchup gives; the owner gives
    // none and OSM has no feature for it. OSM's "Chapel Porth Youth Camp Site"
    // (way 649211354) is 120 m south-west. Position unconfirmed.
    lat: 50.30134, lon: -5.22238,
    address: "Chapel Porth, St Agnes",
    phone: "01872 248538",
    email: "minnowgreen@yahoo.co.uk",
    url: "https://www.chapel-porth-motorhome-park.co.uk/",
    notes: "Small family-run park for motorhomes only, adults only, beside woodland above the National Trust's Chapel Porth valley; the beach 400 m, about 15 minutes' walk; Wheal Coates and St Agnes Head within walking distance. Hard standings with hookup, waste water disposal; no tents, caravans or trailer tents. 7.5 m maximum. Booked and paid in full in advance; full refund 14 days or more before arrival, none after. Check-in 1–7pm, out by 11am. Quiet 10pm–8am; raised BBQs only, no open fires",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      // Home page and terms disagree.
      dogs: null,
      dogs_note: "The owner's home page says well-behaved dogs welcome on a lead; its terms say strictly no dogs on the premises. Ask before booking",
      season: "all-year",
      price_per_night: 30,
      price_note: "two adults, including £3 of electricity; extra adult £10",
      hookup: true,
    },
  },
  {
    slug: "porthtowan-coast-road-lay-by",
    name: "Coast Road lay-by, Porthtowan",
    kind: "stay",
    // OSM node 1123056993 on Coast Road (way 187992578), beside the lay-by;
    // park4night's pin is 11 m north. OSM doesn't map the lay-by itself.
    lat: 50.28680, lon: -5.23442,
    address: "Coast Road, Porthtowan",
    url: "https://park4night.com/en/place/190912",
    // Council rules from the Beach Road car park's page.
    notes: "Big roadside lay-by on the hill north-east of Porthtowan, overlooking the beach, below a row of houses: room for three to five vans, fairly level, some potholes. No facilities; toilets at the beach. Sunset views. Exposed in wind. Poor or no phone signal on most networks. A steep path goes down to the village and beach, about 10–20 minutes. Reviewers mostly report quiet nights once traffic drops after about 10pm, but some mention horns, boy racers and people stopping for the sunset. No signs against overnight stays, reviewers say. Porthtowan's council car park on Beach Road bans motorhomes and campers 11pm–8am and sleeping",
    // park4night listing and reviews, rated 4.31 from 35; the most recent in
    // November 2025.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free",
    },
  },
  {
    slug: "porthtowan-tourist-park",
    name: "Porthtowan Tourist Park",
    kind: "stay",
    // Centre of OSM way 647742141. The TR4 8TY postcode centroid, which the owner
    // gives, is 210 m south.
    lat: 50.27332, lon: -5.23769,
    address: "Mile Hill, Porthtowan, Truro, TR4 8TY",
    phone: "01209 890256",
    email: "admin@porthtowantouristpark.co.uk",
    url: "https://www.porthtowantouristpark.co.uk/touring-camping-north-cornwall/",
    notes: "Five-acre touring-only site in a rural setting a mile from Porthtowan beach; AA five-star platinum. Electric grass pitches, mostly 10 × 10 m (7 m wide including awning), and premium gravel hardstandings with their own water and grey waste point; 10 A hookup. Toilets and showers, family and accessible rooms, indoor dishwashing, laundry, wetsuit rinse, chemical disposal, free wifi, games room, play area. Shop, 8.30–10am and 4.30–6pm in 2024, with milk, bacon, eggs and bread; Calor and Camping Gaz. Choose a pitch on bookings of seven nights or more. No noise after 11pm; no fire pits or wood burning; no EV charging. Towing route and caravans via the A30 Avers junction and North Country; the owner warns against a narrow lane sat nav suggests",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs on a lead, mess picked up; fenced exercise area on site. Breeds in the Dangerous Dogs Act refused",
      // 25 March–30 September in 2027.
      season: { from: "04-01", to: "09-27" },
      price_per_night: null,
      price_note: "prices only in the online booking; 15% off all pitches in the September 2026 end-of-season sale",
      hookup: true,
    },
  },
  {
    slug: "elm-farm-porthtowan",
    name: "Elm Farm",
    kind: "stay",
    // Centre of OSM way 288569130, "Elm Farm Campsite"; OSM node 5454060738,
    // "Elm Farm campsite", is 70 m north-west. The owner gives no postcode.
    lat: 50.26554, lon: -5.23693,
    address: "Coast road between Porthtowan and Portreath, Nancekuke",
    email: "elmfarmcornwall@gmail.com",
    url: "https://www.elmfarm.biz/camping",
    notes: "Off-grid camping on a smallholding in the Nancekuke valley, with a café and bar and a bike hire and repair shop on the Coast to Coast Trail; campers get cheaper hire. Two sheltered fields, pitches round the edges; tents, caravans and campervans. About 20 minutes by quiet lanes to the cliffs and coast path, then down to Porthtowan beach. Drinking water, composting loos, four family-size washrooms with hot showers, washing-up sinks, a flushing toilet and chemical disposal point (green fluid only) up the hill. No electricity on site; campers' fridge-freezer and charging points in the barn by the café. Brazier with wood and kindling £8 a night. Book online",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free, as long as their human cleans up after them",
      season: { from: "05-01", to: "09-06" },
      price_per_night: 20,
      price_note: "two adults at £10 each, 1 May–18 July; £15 each 19 July–6 September. Children £7.50",
      hookup: false,
    },
  },
  {
    slug: "portreath-arms",
    name: "The Portreath Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 4916200099, "Portreath Arms Hotel"; the pub node 3714007130 is
    // 9 m west. The TR16 4LA postcode centroid is 60 m south. The owner's site
    // gives no address; street and postcode from OSM's tags.
    lat: 50.26162, lon: -5.28821,
    address: "The Square, Portreath, TR16 4LA",
    phone: "01209 842259",
    email: "email@theportreatharms.co.uk",
    url: "https://www.theportreatharms.co.uk/rooms",
    notes: "Family-owned bar, restaurant and seven-bedroom inn in the centre of the village, a short walk from the harbour and beach. En-suite doubles, a king with bath, a twin, and a double with sofa bed sleeping up to four; a top-floor twin shares a shower room with the neighbouring double, and the two can be let as a family room. Breakfast included. Open 11am–11pm, Sunday noon–10pm; food noon–2pm and 6–9pm Monday–Saturday. Portreath Beach bans dogs 10am–6pm, 1 July–31 August",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "£5 a night, with a dog bed, towel, bowl and treats; on a lead. A few rooms kept allergy free. Not in the restaurant; tables in the bar, garden and decking",
      season: null,
      price_per_night: 60,
      price_note: "room, from; up to £130",
    },
  },
  {
    slug: "cliff-house-portreath",
    name: "Cliff House B&B",
    kind: "stay",
    // OSM node 4916200098. The TR16 4LE postcode centroid is 25 m west.
    lat: 50.26165, lon: -5.28859,
    // OSM's tags, which spell it "Cliff Tarrace"; directories give Cliff
    // Terrace, TR16 4LE.
    address: "Cliff Terrace, Portreath, TR16 4LE",
    // Phone from OSM's tags and directory listings.
    phone: "01209 843847",
    notes: "B&B on the coast path by Portreath's harbour, a couple of minutes' level walk from the beach. Directories list en-suite rooms with TV and kettle, one downstairs, free parking, one-night stays accepted and packed lunches on request. Not confirmed as still trading: listings found are directories and an Airbnb page",
    // Directory listings only; no owner website found.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Directories say well-behaved pets by prior arrangement",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hillcrest-views-campsite",
    name: "Hillcrest Views Campsite",
    kind: "stay",
    // OSM node 7867502285. The TR16 4EX postcode centroid, which the owner gives,
    // is 175 m south.
    lat: 50.24695, lon: -5.26003,
    address: "Hillcrest Farm, Voguebeloth, Illogan, Redruth, TR16 4EX",
    // OSM tags a different mobile, 07759 247105.
    phone: "07563 235300",
    email: "hillcrestviewscampsite@hotmail.com",
    url: "https://www.hillcrestviewscampsite.co.uk/",
    notes: "Small family-run 25-pitch site on a smallholding at the edge of Illogan, with valley views to St Agnes Beacon and Carn Brea; unsheltered. Grass, gravel and serviced pitches, 16 A hookup. Toilets and showers, family shower room, chemical disposal, drinking water; fire pit hire and firewood. Bus stops, shop, pharmacy and pubs a few minutes' walk. Portreath under 10 minutes' drive or 40 minutes' walk by the old tramway or the woods. No minimum stay; book online or ring 9am–6pm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dogs and cats free",
      // 2026 season 27 March–1 November; open again 14 December–3 January.
      season: { from: "03-27", to: "11-01" },
      price_per_night: 23,
      price_note: "serviced grass and gravel touring pitch with hookup, two people, low season; £26 mid, £30 high. Grass pitch without hookup £15, £18, £22, hookup £5; backpacker £13–15. Extra adult £4, child 3–17 £3. Winter hookup £2 extra from 3 October",
      hookup: true,
    },
  },
  {
    slug: "tehidy-holiday-park",
    name: "Tehidy Holiday Park",
    kind: "stay",
    // OSM node 1789141347. The TR16 4JQ postcode centroid, which the owner
    // gives, is 50 m south-east.
    lat: 50.24488, lon: -5.25314,
    address: "Bassett Road, Harris Mill, Illogan, Redruth, TR16 4JQ",
    phone: "01209 216489",
    email: "holiday@tehidy.co.uk",
    url: "https://tehidy.co.uk/holiday-prices/",
    notes: "Small independent eco holiday park in a wooded valley, about 2 miles from Porthtowan beach: touring and camping pitches, hardstanding and grass, screened by hedges, alongside caravans, cottages and wigwam cabins; AA and Green Tourism Gold awards. Hookup on every pitch; bring a standard 3-pin lead. Book a motorhome as a caravan online. Free showers within about 100 m of every pitch, family and accessible wet room, indoor dishwashing with freezer, laundry, shop, games room, play area, covered BBQ shelter, rapid EV charger. No clubhouse or loud music. The valley site has inclines. 25% deposit; balance four weeks before arrival on the touring page, eight on the prices page",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: false,
      season: { from: "03-28", to: "10-31" },
      price_per_night: 23,
      price_note: "unit under 6 m with two people, 28 March–23 May and 29 August–31 October; £25 to 18 July, £27 to 29 August. 6–7 m £2 more, over 7 m £4 more. Hookup £4, extra person £4",
      hookup: true,
    },
  },
  {
    slug: "magor-farm",
    name: "Magor Farm Caravan & Campsite",
    kind: "stay",
    // Centre of OSM way 288522818, "Magor Farm Caravan and Campsite". The
    // TR14 0JF postcode centroid, which the owner gives, is 820 m east.
    lat: 50.23585, lon: -5.32204,
    address: "Magor Downs, Tehidy, Camborne, TR14 0JF",
    phone: "01209 713367",
    email: "magorfarm@btinternet.com",
    url: "https://www.magorfarm.co.uk/booking.htm",
    // The owner's site is old and its prices undated.
    notes: "Relaxed farm site at Tehidy with few rules, signposted near Hell's Mouth on Cliff Road. No reception: pitch where there's space and Redvers Williams finds you later. Toilet and shower block, free showers, wash-up area with spin drier, free ice pack freezing, play area. Ring to book, especially for a hookup. Cash or cheque on arrival; no cards. From Portreath, the B3301 west, then the Camborne turning",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1 a night; on a lead at all times and exercised off site",
      // "Easter to the end of October".
      season: null,
      price_per_night: 18,
      price_note: "hookup pitch with two people, Easter–June and September–October; £22 July–August. Standard pitch £15, £17. Extra adult £5, child £2; undated tariff",
      hookup: true,
    },
  },
  {
    slug: "churchtown-farm-gwithian",
    name: "Churchtown Farm Caravan & Camping Site",
    kind: "stay",
    // Centre of OSM way 231419028. The TR27 5BX postcode centroid, which the
    // owner gives, is 205 m east.
    lat: 50.22281, lon: -5.38813,
    address: "Gwithian, Hayle, TR27 5BX",
    phone: "01736 753219",
    email: "admin@churchtownfarm.org.uk",
    url: "https://churchtownfarm.org.uk/",
    notes: "Family-run six-acre site on a farm in Gwithian, beside the dunes and the coast path; Gwithian beach about 300 m. 75 hookup pitches. Toilet and shower block with free showers, family bathrooms and an accessible unit, launderette, dishwashing, ice pack freezer, water points, motorhome waste facilities. Shop daily with local produce, groceries, ice cream and hot drinks. Families and couples only; no groups. Book by phone or email; booking office 9am–2pm Monday–Saturday. Two to four nights paid in full at booking, non-refundable; deposits non-refundable. Debit cards and cash, no credit cards. Arrivals from 11am, tell them if after 5pm; out by 10am. No fires or fire pits; BBQs on blocks. No generators or EV charging. Entrance 100 m past the church tower, through the farmyard. The Caravan and Motorhome Club also lists a members-only Certificated Location here, open 1 May–30 September, without hookup",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £2.50 a night; on a short lead at all times, exercised off site, never left alone in the unit. Dog exercise area at the top of the car park; the dunes and beach adjoin. Banned breeds refused",
      season: { from: "04-01", to: "10-12" },
      price_per_night: 28,
      price_note: "hookup pitch with two adults and two children under 10, low season (1 April–21 May, 18 September–12 October); £34 mid (1 June–15 July, 1–18 September), £46 high (15 July–1 September), £40 over Whitsun (21 May–1 June, six nights minimum). Without hookup £22, £29, £40, £34. Extra adult £5. One small tent and one coast path walker £10",
      hookup: true,
    },
  },
  {
    slug: "prosper-house-camping",
    name: "Prosper House Camping",
    kind: "stay",
    // Centre of OSM way 746986550. The TR27 5BW postcode centroid, which the
    // owner gives, is 230 m south-east.
    lat: 50.22041, lon: -5.38497,
    address: "Prosper House, Prosper Hill, Gwithian, Hayle, TR27 5BW",
    phone: "07968 178856",
    email: "ruth@prosperhousecamping.co.uk",
    url: "https://prosperhousecamping.co.uk/tariff/",
    notes: "Small, no-frills family-run field campsite in Gwithian, next to the Red River Inn; the beach a short walk over the dunes. Tents, campervans and motorhomes; no caravans, hardstandings or hookup. Toilets, hot showers, cold-water washing up, fridge freezer and phone charging, chemical toilet disposal and water top-up. Fire pits to hire; sturdy fire pits of your own allowed, not on the grass. Usually three nights minimum, five in July and August, but they'll fit shorter stays into gaps; turn up unbooked and they'll take you if there's space. Payment by bank transfer; two to four nights paid in full at booking, non-refundable. Arrivals from noon, not after 9pm; out by 11am. Patchy phone signal. Turn in by the Red River Inn, opposite Gwithian Farm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £1 a night; on a lead or in the vehicle at all times on site. The nearest beach bans dogs 10am–6pm in July and August; from Peter's Point, about a mile off, dogs are allowed any time",
      // "15th May to mid September 2026".
      season: null,
      price_per_night: 22,
      price_note: "pitch with two people and one vehicle; £28 22–30 May and 1 July–31 August. Extra adult £4, child 5–16 £3",
      hookup: false,
    },
  },
  {
    slug: "gwithian-farm",
    name: "Gwithian Farm Campsite",
    kind: "stay",
    // Centre of OSM way 231419030, "Gwithian Farm". The TR27 5BX postcode
    // centroid, which the owner gives, is 220 m north-east.
    lat: 50.22092, lon: -5.38789,
    address: "1 Church Town Road, Gwithian, Hayle, TR27 5BX",
    phone: "01736 753127",
    email: "camping@gwithianfarm.co.uk",
    url: "https://www.gwithianfarm.co.uk/rates/",
    notes: "Family-run touring site in landscaped gardens behind a 16th-century thatched farmhouse in the middle of Gwithian, opposite the Red River Inn; the beach 10–12 minutes' walk through the village and dunes. All pitches at least 10 × 10 m: 38–40 gravel hardstandings with hookup for motorhomes and caravans, the rest grass, most with hookup. Free showers, family shower room, children's bathroom, accessible facilities, laundry, free ice pack freezer and phone charging, limited wifi. Shop; fish and chip, pizza and curry vans; coffee from the Goat Shack. £80 non-refundable deposit per pitch per week; balance on arrival. Minimum seven nights 22–30 May and five in July and August. Arrivals noon–8pm, no earlier; out by 10am. One car per pitch. No fires or fire pits; BBQs on bricks. No EV charging. Bus to Hayle and St Ives from the entrance",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £2 a night, by arrangement when booking; on a lead at all times and exercised off site. The middle of Gwithian beach, Mexico Towans, is dog friendly; the beach is zoned 1 July–31 August, with dogs on all of it 6pm–10am",
      // 2027: 22 March–17 October.
      season: { from: "04-01", to: "10-12" },
      price_per_night: 30,
      price_note: "pitch with 16 A hookup, two people, one vehicle and unit, 1 April–21 May and 20 September–12 October; £36 31 May–30 June and 1–19 September, £40 22–30 May, £46 July–August. Without hookup £6 less. Extra adult £5, child £3. Coast path backpackers £10, no need to book",
      hookup: true,
    },
  },
  {
    slug: "old-stables-connor-downs",
    name: "The Old Stables Campsite",
    kind: "stay",
    // Postcode centroid (TR27 5EA), which the owner gives; OSM has no campsite.
    // Position unconfirmed.
    lat: 50.20651, lon: -5.36117,
    address: "Gwithian Road, Connor Downs, Hayle, TR27 5EA",
    phone: "07483 805064",
    url: "https://www.theoldstablescampsite.co.uk/",
    // Season has gaps, so it's given here rather than in stay.season.
    notes: "Campsite on Gwithian Road at Connor Downs, five minutes' drive from the beaches: 20 non-electric and 20 electric grass pitches, 8 × 8 m, for tents, campervans, motorhomes and caravans, and one electric grass pitch for motorhomes only; hookup 10 A. Three camping pods and two shepherd's huts. Toilets, hot showers, drinking water, washing-up area, wetsuit rinse; fire pits to hire. Open 2–20 April, 1–11 May and 22 May–21 September. Booked through Campsites.co.uk: 15% non-refundable deposit; cancel in writing three weeks ahead. The Turnpike Inn is 15 minutes' walk",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On the grass pitches; not in the pods or shepherd's huts",
      season: null,
      price_per_night: 22,
      price_note: "electric grass pitch, from; non-electric from £17. Up to five people",
      hookup: true,
    },
  },
  {
    slug: "godrevy-park-club-site",
    name: "Godrevy Park Club Campsite",
    kind: "stay",
    // Centre of OSM way 231419117, an unnamed camp site beside the B3301 at
    // Upton Towans; the Club's GPS is 55 m south. OSM's node for Gwithian Sands
    // Chalet Park (4081567425) sits at the way's southern edge, so the match is
    // likely but not certain. The TR27 5BL postcode centroid is 540 m south.
    lat: 50.21426, lon: -5.38991,
    address: "Upton Towans, Hayle, TR27 5BL",
    phone: "01736 753100",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/cornwall/godrevy-park-club-campsite/",
    notes: "Caravan and Motorhome Club site at Upton Towans, members only; redeveloped and fully reopened in August 2024. 118 touring pitches, hardstanding and grass, with hookup; no tents or pods; outfits up to 9 m. Toilet block, accessible shower room, laundry, dishwashing, motorhome service point and drive-over waste disposal, wifi, play area. BBQs allowed. A rear gate opens onto the dunes, ten minutes' walk to the cliff path; the beach car park is a mile's drive. A fish and chip van visits. Arrivals from 1pm. The Club says not to use sat nav: from the West Cornwall Retail Park roundabout on the A30, the B3301 into Hayle, right at the double mini roundabout towards Portreath, then 1.5 miles. £5 deposit, cancellations free up to 21 days before",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The Club lists it ideal for dogs, with a dog walk from the site; pets kept close and in sight",
      // 2027: 19 March–1 November.
      season: { from: "03-20", to: "11-02" },
      price_per_night: null,
      price_note: "prices vary by date and are shown when booking; 10% off stays of four nights or more 22 September–1 November 2026",
      hookup: true,
    },
  },
  {
    slug: "atlantic-coast-holiday-park",
    name: "Atlantic Coast Holiday Park",
    kind: "stay",
    // OSM node 2273432774. The TR27 5BL postcode centroid, which the owner
    // gives, is 290 m south-west.
    lat: 50.21187, lon: -5.38970,
    address: "53 Upton Towans, Gwithian, Hayle, TR27 5BL",
    phone: "01736 752071",
    email: "enquiries@atlanticcoastpark.co.uk",
    url: "https://atlanticcoastpark.co.uk/holidays/touring-motorhome-pitches/",
    notes: "Five-star holiday park of statics, lodges and glamping pods at Upton Towans, with a touring and motorhome area at the foot of the dunes, a short walk to the beach. No bars or clubs. Hardstanding and grass pitches, each hedged and fully serviced with 16 A hookup; free wifi. Heated amenity block with family and accessible bathrooms, laundry, indoor dishwashing, freezer, surfers' shower, communal BBQ area, playground. Shop, bakery and coffee shop in reception. No generators or gazebos. Arrivals from noon, out by 11am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two; all motorhome pitches pet friendly. Dog facilities on site",
      season: null,
      price_per_night: null,
      price_note: "prices only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "mollys-meadow-cl",
    name: "Molly's Meadow",
    kind: "stay",
    // Postcode centroid (TR27 5DF), from the Club's listing; OSM has no
    // campsite. Position unconfirmed.
    lat: 50.20777, lon: -5.39046,
    // The Caravan and Motorhome Club's listing.
    address: "The Stables, Bar Lane, Connor Downs, Hayle, TR27 5DF",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/hayle/mollys-meadow/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: a one-acre lawned field off Bar Lane, some pitches sloping, so bring levelling blocks. Grass pitches, no hookup; outfits up to 7.5 m. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs",
      // The Club lists it open 1 March–30 October 2026.
      season: { from: "03-01", to: "10-30" },
      price_per_night: null,
      hookup: false,
    },
  },
  {
    slug: "travelodge-hayle",
    name: "Travelodge Hayle",
    kind: "stay",
    // Centre of OSM way 267035083, "Travelodge". The TR27 5DG postcode
    // centroid, which the owner gives, is 145 m south.
    lat: 50.19912, lon: -5.39621,
    address: "Carwin Rise, Loggans, Hayle, TR27 5DG",
    phone: "08719 846314",
    url: "https://www.travelodge.co.uk/hotels/307/Hayle-hotel",
    notes: "New-design Travelodge at the Loggans Moor roundabout on the A30, about 20 minutes' walk from St Ives Bay by the owner's reckoning. Standard, family and accessible rooms, king-size beds in doubles. Free parking. Staffed 24 hours; snacks and drinks 24 hours; coffee shop in a separate building from 6am. Breakfast to Go £6.95. Check-in from 3pm, out by noon; early check-in £20, late check-out £15",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Up to two, added as an extra when booking: £25 for one, £50 for two, per room. Guide dogs free",
      season: null,
      price_per_night: null,
      price_note: "saver rate £52.99 for a standard room on 20 September 2026, non-refundable; varies by date",
    },
  },
  {
    slug: "st-ives-bay-beach-resort",
    name: "St Ives Bay Beach Resort",
    kind: "stay",
    // Centre of OSM way 267035084, "St Ives Bay Holiday Park". The TR27 5BH
    // postcode centroid, which the owner gives, is 440 m north-west.
    lat: 50.20441, lon: -5.40462,
    address: "73 Loggans Road, Upton Towans, Hayle, TR27 5BH",
    phone: "0330 053 7000",
    url: "https://www.awayresorts.co.uk/parks/cornwall/st-ives-bay/touring-camping/",
    notes: "Away Resorts holiday park on Upton Towans with direct access to the three-mile beach. Grass pitches, standard or electric, all 5 × 8 m, one unit per pitch, up to six people included; guest passes and use of the park's facilities: indoor pool, Sands Bistro and Dynamite Bar, open by season. Showers and wash-up area, laundrette, shop, water and refuse disposal. Arrivals any day; check in from 11am, out by 10am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two; the park calls itself pet friendly, and dogs are welcome in the bar and restaurant",
      // "Pitches available March to November".
      season: null,
      price_per_night: null,
      price_note: "prices only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "sandy-acres",
    name: "Sandy Acres",
    kind: "stay",
    // Postcode centroid (TR27 5BA), which the owner gives, on Sandy Acres road
    // (OSM way 60916471); OSM doesn't map the campsite. park4night's pin (place
    // 339606) is by the Sandy Acres beach car park, 710 m north-west. Position
    // unconfirmed.
    lat: 50.20127, lon: -5.40449,
    address: "22 Sandyacres Road, Hayle, TR27 5BA",
    phone: "07494 436635",
    email: "sandyacrescamping@gmail.com",
    url: "https://www.sandy-acres.co.uk/stay/camping/31-pitches/",
    // Gate code from park4night reviews, rated 4.62 from 16; the most recent in
    // September 2026.
    notes: "Basic campsite in the Towans dunes above Hayle beach, a few minutes across the dunes to the sand, with the Sandy Acres café and surf school at the beach car park. 31 non-electric grass pitches for tents and campervans: standard, beach track (nearest the beach) and larger super pitches; no big motorhomes or 6 m bell tents, ask first. Four hot showers, six toilets, cold-water dishwashing, small shop, ice pack freezer, phone charging in the office. No hookup, wifi, fridge or chemical waste disposal. Gates locked 10pm–7am; park4night reviewers say campers are given a keypad code. Book by email. 50% deposit, balance six weeks before; two to four nights paid in full, non-refundable. Changeover Tuesday and Saturday in the summer holidays, super pitches Saturday to Saturday. No fires, generators or gazebos. The beach car park bans overnight parking",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, £3 a night; on a 2 m lead on site at all times, exercised off site, never left alone. The beach below is dog friendly",
      // "Open from May–October".
      season: null,
      price_per_night: 28,
      price_note: "standard pitch with two people, one tent or van and one car, low season, 2025 tariff; beach track £30, super pitch £38. Half terms and summer holidays £38, £40, £48. Extra adult £7–10, child £4–7, car £5",
      hookup: false,
    },
  },
  {
    slug: "hayle-industrial-park",
    name: "Hayle Industrial Park",
    kind: "stay",
    // OSM node 762560370 on the Hayle Industrial Park road (way 60916535), off
    // Marsh Lane; park4night's pin is 5 m west.
    lat: 50.19311, lon: -5.39556,
    address: "Hayle Industrial Park, Marsh Lane, Hayle",
    url: "https://park4night.com/en/place/400018",
    // Council rules from the Gwithian Towans car park page; the Sandy Acres car
    // park ban from its owner.
    notes: "Free roadside parking on a dead-end road through Hayle Industrial Park, beside units, room for about ten. No facilities. Flat and well lit. Reviewers report quiet, undisturbed nights; workers arrive from about 8am and building work can start early. McDonald's round the corner; reviewers mention Screwfix and a small brewery on the estate. Cornwall Council's Gwithian Towans car park bans motorhomes and campers 11pm–8am, and the Sandy Acres beach car park at Hayle Towans bans overnight parking",
    // park4night listing and reviews, rated 4.22 from 9; the most recent in
    // July 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free",
    },
  },
  {
    slug: "beachside-holiday-park",
    name: "Beachside Holiday Park",
    kind: "stay",
    // Centre of OSM way 125143004. The TR27 5AW postcode centroid, which the
    // owner gives, is 735 m south.
    lat: 50.20193, lon: -5.41403,
    address: "12 Lethlean Lane, Hayle, TR27 5AW",
    phone: "01736 753080",
    email: "reception@beachside.co.uk",
    url: "https://www.beachside.co.uk/touring-and-camping/touring-caravan-and-camping-pitches-in-st-ives-bay-cornwall",
    notes: "Family-run holiday park in the dunes above St Ives Bay, with its own path down to the beach. Grass touring pitches with hookup for units up to 4 × 7 m plus a 3 m awning; serviced pitches add water, grey waste, TV point and wifi; large tent pitches. Pitch fee includes four people and one car; extra adult £16, child £8, car £8. Showers, indoor dishwashing, chemical disposal, motorhome service point. Coast restaurant and bar all season; outdoor heated pool and shop 2 May–25 September 2026; dune bar; surf school; entertainment in peak season. Saturday to Saturday only in school holidays. Pitches from noon until 10pm, 2 May–25 September, or 6pm otherwise; out by 10am. Choosing a pitch £25. 2026 bookings: £50 touring deposit, balance 56 days before arrival, no refund within 56 days",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per booking, £5 a night, on selected touring and large tent pitches only; on a short lead around the park; not left alone on the pitch. Dog exercise area. Welcome in designated areas of Coast",
      season: { from: "03-28", to: "10-31" },
      price_per_night: null,
      price_note: "prices only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "penellen-hayle",
    name: "The Penellen",
    kind: "stay",
    // Centre of OSM way 204419122, "The Penellen Bed and Breakfast". The
    // TR27 5AF postcode centroid, which the owner gives, is 105 m south-west.
    lat: 50.19839, lon: -5.42653,
    address: "64 Riviere Towans, Phillack, Hayle, TR27 5AF",
    phone: "01736 753777",
    email: "penellen@btconnect.com",
    url: "https://www.bedandbreakfasthotelcornwall.co.uk/rooms/",
    notes: "Room-only guest accommodation on Riviere Towans, 50 yards from the beach: two first-floor en-suite rooms with sea-view balconies over St Ives Bay, one double and one sleeping three. Free tea, coffee, juice, cereal, yoghurt and fruit, fridge, wifi. Conservatory for guests. No children under eight. Ample parking; reached by the private road past the Bucket of Blood and the caravan site. A two-bedroom self-catering apartment too",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      // Nothing about dogs on the owner's site.
      dogs: null,
      season: { from: "02-06", to: "11-14" },
      price_per_night: 140,
      price_note: "double room, one night; £270 for two, £390 for three. Room for two in the larger room £160, for three £195",
    },
  },
  {
    slug: "madhatter-hayle",
    name: "Madhatter Bed and Breakfast",
    kind: "stay",
    // Postcode centroid (TR27 4DX), which the owner gives; OSM has no feature
    // for it.
    lat: 50.19073, lon: -5.41059,
    address: "73 Fore Street, Hayle, TR27 4DX",
    phone: "01736 754241",
    email: "paulinemadhatterbandb@outlook.com",
    url: "https://madhatterbandb-hayle.co.uk/",
    notes: "B&B and café on Fore Street in Copperhouse, among the shops and restaurants. A single and a large double or twin sharing a shower room and bathroom, an en-suite double or twin, and a family room with a double, two singles, a sofa bed and a cot. Tea and coffee, TV, wifi; laundry for a small fee. Café 10am–4pm, Easter to the end of October, with homemade food, cream teas and cakes; walled garden. Bus stop outside for Truro, St Ives and Penzance, and the National Express; Hayle station just under a mile",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      dogs: true,
      // cornwall-online.co.uk says "for an additional small charge".
      dogs_note: "Dog friendly; no charge or rules given on the owner's site",
      season: "all-year",
      price_per_night: 50,
      price_note: "single room, from; double or twin £110, en-suite £130. Family room by occupancy",
    },
  },
  {
    slug: "cornubia-inn",
    name: "The Cornubia Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 406033226. The TR27 4DX postcode centroid, which the
    // owner gives, is 30 m north-west.
    lat: 50.19061, lon: -5.41018,
    // House number from OSM's tags; the owner gives Copperhouse, Hayle, TR27 4DX.
    address: "35 Fore Street, Copperhouse, Hayle, TR27 4DX",
    phone: "01736 753351",
    email: "info@thecornubiainn.co.uk",
    url: "https://www.thecornubiainn.co.uk/contact-us",
    notes: "Sports pub with rooms in Copperhouse: Sky Sports and BT Sport on three TVs and a 10 ft screen, live music, poker and quizzes; garden with a non-smoking area. En-suite superior king doubles, classic doubles and twins with showers, Sky TV, wifi, pod coffee machines. Continental breakfast. Free on-site parking. Check in 3–11pm, out by 11am. No parties",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "The booking policies say no pets",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "treglisson",
    name: "Treglisson Touring Park",
    kind: "stay",
    // OSM node 13037824001, "Treglisson campsite". The TR27 5JT postcode
    // centroid, which the owner gives, is 230 m west.
    lat: 50.18207, lon: -5.39151,
    address: "Wheal Alfred Road, Hayle, TR27 5JT",
    phone: "01736 753141",
    email: "treglisson@hotmail.co.uk",
    url: "https://treglisson.co.uk/prices-and-terms/",
    notes: "Small, sheltered, family-run rural site on an old orchard east of Hayle: 26 hookup pitches on the main site, and 9 non-electric pitches in a meadow field only in the May–June half term and summer holidays. Motorhomes must book a hardstanding; campervans needn't. No water or drainage on pitches; water taps and chemical toilet disposal. Tiled shower block, covered dishwashing, launderette with free powder, freezer, indoor and outdoor play areas. The Mine, a small licensed shop with made-to-order croissants, in May half term and summer holidays. Arrivals after 2pm, tell them if after 8pm; out by 11am. 20% non-refundable deposit, balance 28 days before; no refunds within 14 days. No stag or hen parties or large single-sex groups. Quiet 10.30pm–8am. Footpaths from the site; Gwithian beach five minutes' drive",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free, up to two per pitch; well behaved and on a lead on site",
      // The tariff runs 2 April–25 October 2026; the home page says Easter to
      // 31 October.
      season: { from: "04-02", to: "10-25" },
      price_per_night: 30,
      price_note: "hookup pitch with two people and one car, 2 April–21 May and 1–30 June; £34 22–31 May, £38 July–August, £31 September, £28.50 1–25 October. Meadow non-electric £20–29. Extra adult £6, child 5 and over £3, extra car £10",
      hookup: true,
    },
  },
  {
    slug: "white-hart-hayle",
    name: "White Hart Hotel",
    kind: "stay",
    // Centre of OSM way 390101888. The TR27 4HQ postcode centroid, which the
    // owner gives, is 5 m south-west.
    lat: 50.18343, lon: -5.42125,
    address: "Foundry Square, Hayle, TR27 4HQ",
    phone: "01736 752322",
    url: "http://whiteharthotel-hayle.co.uk/tariff",
    notes: "Hotel in Foundry Square in the middle of Hayle, built in 1838 by the foundry owner Henry Harvey. Single, twin, double and family rooms, all en suite, with tea and coffee, mini-fridge and Freeview TV; original art throughout. Full English breakfast included. Two restaurants. Free gated parking; wifi in the main hotel rooms and bar. Weekly rates on request",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Well-behaved dogs in the annexe rooms only; say when booking",
      season: null,
      price_per_night: 70,
      price_note: "room with breakfast, from; indicative one-night rates £100 single, £125 double or twin, £140 premier, £200 family, varying with demand and season",
    },
  },
  {
    slug: "trelissick-farm-cl",
    name: "Trelissick Farm",
    kind: "stay",
    // Postcode centroid (TR27 6HE), from the Club's listing; OSM has no
    // campsite. Position unconfirmed.
    lat: 50.17324, lon: -5.42454,
    // The Caravan and Motorhome Club's listing.
    address: "Water Lane, Hayle, TR27 6HE",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/hayle/trelissick-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: a sheltered half-acre on a working farm off Water Lane, Hayle. Grass pitches, no hookup. Pub and town within a mile. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs",
      // The Club lists it open 13 April–31 October 2026.
      season: { from: "04-13", to: "10-31" },
      price_per_night: null,
      hookup: false,
    },
  },
  {
    slug: "trevessa-farm",
    name: "Trevessa Farm",
    kind: "stay",
    // Centre of OSM way 713457846, "Trevessa Farm Certificated Site";
    // park4night's pin is 65 m south-west, the TR27 6JZ postcode centroid 290 m
    // south-east. The owner gives only Long Lane; number and postcode from OSM's
    // tags.
    lat: 50.15242, lon: -5.43344,
    address: "9 Long Lane, St Erth, Hayle, TR27 6JZ",
    phone: "07971 570871",
    email: "info@trevessafarmcamping.co.uk",
    url: "https://trevessafarmcamping.co.uk/booking-and-tariff/",
    // Certificated Site status from OSM and the Club's listing; Pitchup also
    // takes bookings.
    notes: "Small site on a working farm above the River Hayle near St Erth, three-quarters of an acre with rural views. A Camping and Caravanning Club Certificated Site; the owner's site doesn't mention membership. Five 6 × 6 m hardstandings for motorhomes, campervans and caravans, with 16 A hookup; ten slightly sloping grass pitches for tents only, hookup optional. Separate toilets and showers cleaned twice a day, free hot water, covered dishwashing, drinking water, recycling, waste disposal point. Bell tent and yurt too. Riverside footpath to St Erth village, about 20 minutes, with shop, post office and the Star Inn. Arrivals from 1pm, out by 11am. Non-refundable deposit; balance on arrival, cash or bank transfer",
    verified: "2026-09-15",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "No extra charge; kept under supervision at all times because of the livestock",
      // Hardstanding tariff runs all year; tent pitches 15 March–1 November.
      season: "all-year",
      price_per_night: 24,
      price_note: "hardstanding pitch with hookup, up to five people, 1 February–1 October; £23 1 November–1 February; October not listed. The tariff also says hookup is £3.50 a night, paid on arrival. Grass tent pitch £18–19",
      hookup: true,
    },
  },
  {
    slug: "badger-inn-lelant",
    name: "The Badger Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 687357210; the building, way 1090617562, is centred 2 m south.
    // The TR26 3JT postcode centroid, which the owner gives, is on the node.
    lat: 50.18388, lon: -5.43960,
    address: "Fore Street, Lelant, St Ives, TR26 3JT",
    phone: "01736 752181",
    email: "info@thebadgerinn.co.uk",
    url: "https://www.thebadgerinn.co.uk/visit",
    // The owner's pages give two sets of kitchen hours, so none are given here.
    notes: "Village pub with rooms on Fore Street in Lelant, five minutes' walk from Porthkidney beach and the coast path, two minutes from a bus stop and Lelant station. Breakfast included, 7.30–9.30am in the conservatory; a packed breakfast if leaving earlier, asked for the night before. Car park; guests can leave the car there and take the train or bus to St Ives. Bar 11am–10.30pm daily. Lunch and dinner Monday–Saturday; Sunday carvery, booking required. Book rooms online direct",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "No pets in the rooms, the owner says",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "mount-douglas-campsite",
    name: "Mount Douglas Campsite",
    kind: "stay",
    // Centre of OSM way 297779508. The TR26 3HE postcode centroid, which the
    // owner gives, is 140 m south-west.
    lat: 50.18679, lon: -5.46488,
    address: "Mount Douglas Farm, Trencrom Lane, Carbis Bay, St Ives, TR26 3HE",
    phone: "07816 320849",
    email: "mdcamping@outlook.com",
    url: "https://www.mountdouglascampsite.co.uk/faqs",
    notes: "Family campsite across two fields on a small farm at Carbis Bay, now mostly grazing horses; about 20 minutes' walk to the coast, and a bus to St Ives five minutes' walk. Electric grass pitches, 12 A. Separate men's and women's toilets and showers, washing-up area, washing machine and tumble dryer, fridges and freezers, sockets for charging. Campfires and BBQs allowed; fire pits and wood for hire. No caravans; roof tents welcome. The owner's site doesn't say whether campervans or motorhomes are taken. Book by email or the online form, not by phone. Arrivals from noon, out by 11am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 a night; on a lead at all times and never left alone",
      // Prices are given for July–September 2027; the first bookable night of
      // 2027 is still to be confirmed.
      season: null,
      price_per_night: 25,
      price_note: "two adults at £8 each, hookup £7 and one vehicle £2, 2027 prices; child 4–12 £4. Single people staying more than seven nights pay £2 a night more from the eighth",
      hookup: true,
    },
  },
  {
    slug: "hellesveor-holidays",
    name: "Hellesveor Holidays",
    kind: "stay",
    // Centre of OSM way 832723048. The TR26 3AD postcode centroid, which the
    // owner gives, is 8 m west.
    lat: 50.20789, lon: -5.50101,
    address: "Hellesveor Farm, St Ives, TR26 3AD",
    phone: "01736 795738",
    // The owner's pages also link info@hellesveorholidays.co.uk.
    email: "info@hellesveorholidays.com",
    url: "https://www.hellesveorholidays.com/accommodation/touring-caravan-pitches",
    notes: "Small, quiet family-run campsite on a farm in the Penwith AONB on the western edge of St Ives: 30 pitches, 25 with hookup; grass, fully serviced and hardstanding. No clubhouse or entertainment. Unisex toilets and showers, washing and laundry, waste and water disposal. Coast path 5–10 minutes' walk; St Ives 40 minutes by the coast path, 25 by the main road, or by bus. Awnings on hardstanding pitches only. Weekly bookings only in the school summer holidays, arriving Friday or Saturday. Book online, and ring or email first as a walker or backpacker: limited space. £75 non-refundable deposit, balance six weeks before, or pay in full; debit cards, no credit cards. Arrivals from noon, out by 10am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per booking, £3 each a night; under close control. Say when booking",
      // The 2025 tariff runs from 3 March to early January, grass pitches from
      // 13 April to 19 December; no 2026 tariff is published.
      season: null,
      price_per_night: 33,
      price_note: "grass pitch with hookup, two people and one campervan, 11–23 May and 5 October–19 December, 2025 tariff; £40 13 April–10 May, 24 May–25 July and 7 September–4 October, £45 26 July–6 September. Hardstanding with hookup £40–48, £50 over Christmas. Extra adult £12, child £9",
      hookup: true,
    },
  },
  {
    slug: "ayr-holiday-park",
    name: "Ayr Holiday Park",
    kind: "stay",
    // Centre of OSM way 475584701. The TR26 1EJ postcode centroid, which the
    // owner gives, is 240 m south-east.
    lat: 50.21376, lon: -5.49200,
    address: "Alexandra Road, St Ives, TR26 1EJ",
    phone: "01736 795855",
    email: "recept@ayrholidaypark.co.uk",
    url: "https://www.ayrholidaypark.co.uk/touring-camping/",
    notes: "Holiday park of caravans, apartments and lodges on the hill above Porthmeor, the only campsite in St Ives itself: ten minutes' walk down to the town and beaches, and a bus back up from the entrance. Touring pitches terraced level on a sloping site, most with views over St Ives Bay; hardstanding and grass, almost all with 16 A hookup and water. Underfloor-heated shower block with family and accessible rooms, dishwashing and laundry rooms, waste disposal points, free wifi. Quarterdeck restaurant from 8.30am, last food orders 8pm, with dogs allowed on its terrace; indoor pool £4 a swim. Touring bookable by phone only: £100 deposit, balance on arrival; in quiet periods you may get a pitch on spec. Pitches from 11.30am, no arrivals after 9pm, out by 11am; changeover Friday–Sunday in the busy season. No generators, disposable BBQs or fire pits; no music after 10pm",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Small to medium dogs: all year in the main touring park, September–June in the camping area. Tell the park before arrival. On a short lead or tethered, exercised in the dog field or off site, never left alone",
      season: "all-year",
      price_per_night: 38,
      price_note: "hookup pitch with a van and two adults, January–March and 3 October–15 December 2026: pitch £13.50, adults £7.75 each, serviced supplement £9. £46 28 March–22 May and 19 September–2 October; £55.75 23 May–10 July, 5–18 September and over Christmas; £70 11 July–4 September. Dog £3.50–6.50 a night",
      hookup: true,
    },
  },
  {
    slug: "polmanter",
    name: "Polmanter Touring Park",
    kind: "stay",
    // OSM node 1789141109, "Polmanter Tourist Park"; an unnamed caravan site,
    // way 1033540738, is centred 95 m east. The TR26 3LX postcode centroid,
    // which the owner gives, is 45 m north-east.
    lat: 50.19622, lon: -5.49142,
    address: "Halsetown, St Ives, TR26 3LX",
    phone: "01736 795640",
    email: "reception@polmanter.com",
    url: "https://www.polmanter.com/prices/",
    notes: "Family-run five-star touring park at Halsetown, a mile and a half by road above St Ives, with country footpaths down to the town. Grass and hardstanding pitches, electric or multi-serviced with water, drainage and TV socket; 16 A hookup with a round-pin lead. Most pitches take units up to 8 m; no American RVs, gazebos or day tents. Shop with fresh bread, Stable Bar and restaurant, outdoor heated pool mid-May to mid-September, tennis, pitch and putt, indoor play area. Shuttle bus to St Ives in the main season, very limited in the shoulder months, none November–April. Book online, by phone or in person. Usually three nights minimum, five with Friday–Sunday changeover in the peak of the summer holidays; one- and two-night stays sometimes online, without choice of pitch. Pitches ready by 12.30pm, move on by 10pm; out by 11am. A late-arrivals field by the entrance opens only after 2am. Barriers open 6.30am–midnight. £50 non-refundable deposit a week, balance 42 days before. No fire pits or generators",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch, charged per night; on a 2 m lead on the park, never left alone. Exercise field and dog shower. Dangerous Dogs Act breeds and XL Bullys refused",
      // The 2026 tariff runs to 31 October; 2027 opens 28 March. The FAQs give
      // both "April till the end of October" and "late March to early November".
      season: { from: "03-28", to: "10-31" },
      price_per_night: 31.5,
      price_note: "electric grass pitch with two adults, one unit and one car, 20 September–31 October 2026; £43 7–19 September, £62.50 18 July–30 August. Electric hardstanding £35, multi-serviced hardstanding £38.50 in the autumn weeks. 2027 from £33.50, 28 March–14 May. Extra adult £9.50–17; dog £5.50–6.50 each",
      hookup: true,
    },
  },
  {
    slug: "trevalgan-touring-park",
    name: "Trevalgan Touring Park",
    kind: "stay",
    // OSM node 448306241, "Trevalgan Holiday Farm", tagged as a camp site. The
    // TR26 3BJ postcode centroid, which the owner gives, is 90 m south-west.
    lat: 50.20774, lon: -5.51868,
    address: "Trevalgan, St Ives, TR26 3BJ",
    phone: "01736 791892",
    email: "reception@trevalgantouringpark.co.uk",
    url: "https://www.trevalgantouringpark.co.uk/tariff",
    notes: "Family-run five-star touring park in open farmland in the hamlet of Trevalgan, two miles west of St Ives. From the coast path, footpaths lead up from Hellesveor Cliff or Carn Naun Point; the owner asks walkers to book first. Non-electric, electric (16 A) and multi-serviced grass pitches, and gravel multi-serviced hardstandings hedged on three sides; units up to 8 m; no American motorhomes, lorry conversions or generators. Underfloor-heated toilets and showers, family rooms, laundry, indoor dishwashing, wetsuit wash, motorhome service point with drive-over drain; green chemical toilet fluids only. Shop with bread and pastries baked to order, no alcohol. Bus to St Ives from the entrance. Book online, any number of nights, five minimum at Whitsun; pitch requests only for five nights or more. Arrivals noon–8pm, no late-arrivals area; out by 11am. Barrier locked 11.30pm–7am. Families and couples only. 10% deposit, minimum £75; balance 28 days before. No fires",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, on pitches 1–107 only; 108–135 are dog free. On a short lead, 2 m at most. Enclosed off-lead area and warm dog shower. Dogs ride the bus to St Ives for a fee. Dangerous Dogs Act breeds and American XL Bullys refused",
      season: { from: "05-01", to: "09-21" },
      price_per_night: 32,
      price_note: "grass electric pitch with one unit, one car and two adults, 1–22 May 2026; £46 31 May–17 July and 1–21 September, £51.50 at Whitsun, £56.50 18 July–31 August. Multi-serviced hardstanding £36–62.50. Extra adult £8.50–15.50. Dog £1 a night, £4.50 18 July–31 August. 10% off the pitch for three nights or more booked a week ahead, outside high season",
      hookup: true,
    },
  },
  {
    slug: "higher-penderleath",
    name: "Higher Penderleath Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 1382590967. The TR26 3AF postcode centroid, which the
    // owner gives, is 175 m west.
    lat: 50.18397, lon: -5.50768,
    address: "Higher Penderleath, St Ives, TR26 3AF",
    phone: "01736 798403",
    email: "penderleath@gmail.com",
    url: "https://penderleath.co.uk/prices-and-special-offers/",
    notes: "Ten acres of landscaped parkland in the countryside above St Ives near Towednack, looking over the north coast; level and gently sloping, well-spaced pitches; St Ives five minutes' drive, and a footpath to the coast path. Grass pitches for tents, caravans and motorhomes, 10 A hookup; units up to 8 m, superpitches up to 10 m. Toilets with free hot showers, dishwashing room, launderette, children's play area in converted granite barns; wifi, barrier entry and CCTV new for 2026. Arrivals noon–7pm, out by 10am. £50 non-refundable deposit per pitch per week, balance six weeks before; no refunds within six weeks. Quiet by 11pm. No generators. Out-of-season motorhome enquiries by email or phone. From the A30, the A3074, left at the second mini roundabout on the holiday route, about 3 miles to a T junction, left, first right towards Towednack, then the left fork",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two, £4 a night; well behaved, on a short lead at all times, mess picked up",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 26,
      price_note: "electric grass pitch with two people, a car and a unit up to 8 m, 1 April–13 May 2026; £33 14 May–15 July and 7–30 September, £42 16 July–6 September. Non-electric £18, £25, £34. Superpitch £6 more. Extra adult £8, child 3–15 £2.50",
      hookup: true,
    },
  },
  {
    slug: "penrose-house-cl",
    name: "Penrose House",
    kind: "stay",
    // Postcode centroid (TR26 3JA), from the Club's listing, whose GPS is 5 m
    // from it. OSM has no feature for it; OSM's Balnoon Campsite, way
    // 1413041014, is 70 m south. Position unconfirmed.
    lat: 50.19060, lon: -5.49312,
    // The Caravan and Motorhome Club's listing.
    address: "Balnoon, St Ives, TR26 3JA",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/st-ives/penrose-house/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: a meadow on a smallholding at Balnoon, in the countryside near St Ives. Lawned grass pitches with hookup and room for awnings; up to five units. Dog walk on site; the listing says a pub and restaurant is nearly at the bottom of the garden. On the St Michael's Way footpath network; Carbis Bay beach and supermarket 2 miles. Wifi and battery charging. Arrivals from noon. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs",
      // The Club lists it open all year.
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "amalwhidden-farm-cl",
    name: "Amalwhidden Farm",
    kind: "stay",
    // Postcode centroid (TR26 3AR), from the Club's listing; the Club's GPS is
    // 225 m north-east. OSM has no feature for it. Position unconfirmed.
    lat: 50.18057, lon: -5.51899,
    // The Caravan and Motorhome Club's listing.
    address: "Towednack, St Ives, TR26 3AR",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/st-ives/amalwhidden-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: a one-acre level grass field on a family smallholding at Towednack, on the edge of the Penwith moors, three miles from St Ives. Hookup, water point, grey water and chemical disposal, rubbish and recycling; no toilets. Coarse fishery with two lakes, day tickets on site. Footpaths from the site; the nearest pub about 20 minutes' walk, mostly on footpaths. Bus stop within a mile for St Ives and Penzance. Arrivals from noon. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs",
      // The Club lists it open 1 May–30 September 2026.
      season: { from: "05-01", to: "09-30" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "trenwith-car-park",
    name: "Trenwith car park",
    kind: "stay",
    // Centre of OSM way 67037913, "Trenwith Long Stay Car Park". The TR26 1DD
    // postcode centroid is 400 m south-west.
    lat: 50.20918, lon: -5.48473,
    address: "Trenwith, St Ives, TR26 1DD",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/trenwith-st-ives-tr26-1dd/",
    // Rules from the car park's page, Cornwall Council's motorhome parking page
    // and each St Ives, Carbis Bay and Lelant car park's own page. The Rugby
    // Club from park4night reviews (place 118242), the latest September 2026.
    notes: "Cornwall Council long-stay car park on the hill above St Ives town centre: 311 spaces in winter, 759 in summer with its grass fields; tarmac, open 24 hours, no height or weight limit. The only council car park in St Ives, and one of eleven in Cornwall, where self-contained motorhomes with their own toilet may stay overnight. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. No motorhome bays or facilities; pay for every bay you cover. Touring caravans on the tarmac only. Every other council car park in St Ives and Carbis Bay takes cars only or bans motorhomes and campers 11pm–8am, as does Lelant Saltings. St Ives Rugby Club's park-and-ride field bans overnight sleeping, park4night reviewers say. Pay station, JustPark location 8414",
    verified: "2026-09-15",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "harbour-hotel-st-ives",
    name: "Harbour Hotel St Ives",
    kind: "stay",
    // Centre of OSM way 436526173, "St Ives Harbour Hotel". The TR26 2BN
    // postcode centroid, which the owner gives, is 15 m north.
    lat: 50.20785, lon: -5.47811,
    address: "The Terrace, St Ives, TR26 2BN",
    phone: "01736 795221",
    email: "stives@harbourhotels.co.uk",
    url: "https://www.harbourhotels.co.uk/our-hotels/cornwall/harbour-hotel-st-ives/faqs",
    notes: "Victorian hotel above Porthminster Beach, two minutes' walk from St Ives station. Harbour Kitchen, Bar & Terrace; HarSPA with indoor pool, hydrotherapy pool, steam room, sauna and gym, free to hotel guests. Family rooms with a connected second bedroom. Not accessible, though some rooms with walk-in showers are reached by lift. No air conditioning. Check-in from 3pm, ring if arriving after 10pm; out by 11am. Limited residents' parking, first come first served, £10 a night",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Specific rooms only; ask the reservations team. £20 per dog a night. On a lead on the terrace and in the bar; not in the restaurant or other public areas",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "pedn-olva",
    name: "Pedn Olva",
    kind: "stay",
    // Centre of OSM way 1556764502. The TR26 2EA postcode centroid, which the
    // owner gives, is 75 m north-west.
    lat: 50.21080, lon: -5.47743,
    address: "Porthminster Beach, St Ives, TR26 2EA",
    phone: "01736 796222",
    email: "pednolva@staustellbrewery.co.uk",
    url: "https://www.pednolva.co.uk/our-rooms/",
    // The Station car park's ban from its council page.
    notes: "St Austell Brewery hotel on granite rocks above Porthminster Beach, looking over the harbour and bay; refreshed rooms, bar and restaurant. Cosy cabin, cosy, standard and view doubles, twins, family rooms sleeping three, and a deluxe suite, all en suite; breakfast included. Four floors, hard going with limited mobility. Open 8am–11pm, to midnight Friday and Saturday; food 8–11am and noon–9.30pm. Check-in from 3pm, out by 10am. Parking for 14 rooms, £15 a day, in reserved bays in the Station long-stay car park, which bans motorhomes and campers 11pm–8am. Reservations also on 0345 241 1133",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay, with a welcome pack. On a lead in public areas and never left alone in the room; not in the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "lifeboat-inn-st-ives",
    name: "Lifeboat Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 10800409478. The TR26 1LF postcode centroid, which the owner
    // gives, is 16 m north.
    lat: 50.21328, lon: -5.47990,
    address: "Wharf Road, St Ives, TR26 1LF",
    phone: "01736 794123",
    email: "lifeboat@staustellbrewery.co.uk",
    url: "https://www.lifeboatinnstives.co.uk/our-rooms/",
    notes: "St Austell Brewery pub beside the lifeboat house on St Ives harbour, with a log fire and harbour views. Five rooms, standard and view doubles and twins and a view family room, on the first and second floors up narrow, steep stairs; two self-catering apartments too. Breakfast included, 9–10am. No extra beds or cots. Check-in 3–10pm at the bar, out by 11am. Open 8.30am–11pm, Sunday to 10.30pm. No car park; the owner says nearby car parks charge about £10 for 24 hours. Reservations also on 0345 241 1133",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay. On a lead in public areas and never left alone in the room; everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "sloop-inn",
    name: "The Sloop Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 651240378. The TR26 1LP postcode centroid, which the
    // owner gives, is 16 m south-west.
    lat: 50.21518, lon: -5.47915,
    address: "The Wharf, St Ives, TR26 1LP",
    phone: "01736 796584",
    email: "info@sloop-inn.co.uk",
    url: "https://sloop-inn.co.uk/our-rooms/",
    notes: "One of Cornwall's oldest inns, believed to date from around 1312, on the harbour front at St Ives. Twenty rooms: doubles and twins above the pub, some with sea views, studio rooms along from the pub, rooms in Park House, and fishermen's cottages behind. Pub, the Captain's Table restaurant with 15% off for staying guests, and the Upper Deck terrace; breakfast menu. Open 9am–11pm, to midnight Friday and Saturday. Book direct online",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, among them the Bosun's and Lower Deck studios and the Courtyard king room. £10 per pet a night, not in the online price: contact the inn",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-vicarage-st-ives",
    name: "The Old Vicarage",
    kind: "stay",
    // Centre of OSM way 230746446. The TR26 2ES postcode centroid, which the
    // owner gives, is 185 m east.
    lat: 50.20842, lon: -5.49525,
    address: "Parc-an-Creet, St Ives, TR26 2ES",
    phone: "01736 796124",
    email: "stay@oldvicarage.com",
    url: "https://www.oldvicarage.com/faq.php",
    notes: "Four-star guest house in a Victorian former rectory in wooded grounds, in a quiet residential area on the western edge of St Ives near the Leach Pottery; just over half a mile to the town centre and beaches, uphill on the way back. All rooms en suite, on the upper floor; no lift, no sea views. Licensed bar. Breakfast 8.30–9.30am, ordered the night before, or room only. Free parking in the grounds. Children five and over. Book online; deposit of one night's rate for two, non-refundable. Arrivals from 1pm, out by 10am. A summer shuttle bus runs from the Rugby Club next door to Porthmeor Beach",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      // True October to April only, so neither true nor false all year.
      dogs: null,
      dogs_note: "October to April only, the quieter months; a small charge per dog a night. Owners fully responsible for their dogs",
      season: null,
      price_per_night: null,
      price_note: "prices only in the online booking",
    },
  },
  {
    slug: "white-house-zennor",
    name: "The White House",
    kind: "stay",
    // Postcode centroid (TR26 3BY), which the owner gives; OSM has no feature
    // for it. The Tinners Arms, OSM way 233500072, is 67 m south.
    lat: 50.19225, lon: -5.56804,
    address: "Zennor, St Ives, TR26 3BY",
    phone: "01736 796927",
    email: "enquiries@tinnersarms.co.uk",
    url: "https://whitehousezennor.com/booking/",
    notes: "The Tinners Arms' B&B: a Grade II listed house of 1838 next door to the pub and St Senara's church in Zennor, off the B3306. Two large en-suite doubles, a small en-suite double and two singles sharing a bathroom; doubles take two adults, with no extra beds or children under 16. Cooked breakfast by the Tinners chef. Book online. The pub takes no table bookings",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Neither the B&B's nor the pub's site mentions dogs",
      season: null,
      price_per_night: null,
      price_note: "prices only in the online booking",
    },
  },
  {
    slug: "tregeraint-house",
    name: "Tregeraint House",
    kind: "stay",
    // Centre of OSM way 1160167063, tagged as a guest house. The TR26 3DB
    // postcode centroid is 415 m west.
    lat: 50.18506, lon: -5.57235,
    address: "Zennor, St Ives, TR26 3DB",
    phone: "01736 797061",
    // OSM's website, tregeraint-house-b-b.business.site, returns 404: Google
    // retired those sites. This page is written in the owner's voice.
    url: "http://www.cornwall-online.co.uk/tregeraint-house/",
    notes: "B&B in a traditional cottage on the B3306 a quarter of a mile west of Zennor, run by a potter, on a west-facing slope in an acre of garden looking down to the cliffs. Two doubles and a twin, sharing an adjacent shower room; washstands, tea and coffee. English breakfast; vegetarian and other diets on request. Parking. No smoking. Open all year except briefly at Christmas",
    // Directory page only; no working owner website found.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Its cornwall-online.co.uk page says no dogs or other pets",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "boswednack-manor",
    name: "Boswednack Manor",
    kind: "stay",
    // Centre of OSM way 1221010870, "Boswednack Manor". The TR26 3DD postcode
    // centroid, which the owner gives, is 95 m north-east.
    lat: 50.18436, lon: -5.58448,
    address: "Zennor, St Ives, TR26 3DD",
    phone: "01736 794183",
    email: "enquiries@boswednackmanor.co.uk",
    url: "http://www.boswednackmanor.co.uk/",
    notes: "Vegetarian B&B in an Edwardian farmhouse on the B3306 between Zennor and Treen, in two acres of rewilded organic meadow and garden; field or sea views from every bedroom. Two en-suite rooms with a double and a single bed, and a twin with separate bathroom. Vegan and special diets by arrangement; packed lunches ordered in advance. Room access all day for stays of more than one night. Guided wildlife walks by arrangement. Off-road parking. B&B open Easter to the end of September; Campion Cottage, self-catering, weekly lets",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      dogs: false,
      dogs_note: "No pets, the owner says",
      // Easter to the end of September: the start moves with Easter.
      season: null,
      price_per_night: 90,
      price_note: "en-suite double for two; twin £95 for two, single £60, single occupancy £55–60",
    },
  },
  {
    slug: "gurnards-head-inn",
    name: "The Gurnard's Head",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 112506048. The TR26 3DE postcode centroid, which the
    // owner gives, is 185 m north.
    lat: 50.18264, lon: -5.59326,
    address: "Near Zennor, St Ives, TR26 3DE",
    phone: "01736 796928",
    email: "enquiries@gurnardshead.co.uk",
    url: "https://www.gurnardshead.co.uk/Cots_and_Dogs.aspx",
    notes: "Dining pub with rooms at Treen on the B3306, with log fires and a large enclosed garden; in the Michelin and Good Food guides. Eight doubles, some made up as twins, looking towards the sea or over the moor; Room 8 has a courtyard terrace. Thin walls. Breakfast included. Open every day except 25 and 26 December: lunch noon–2.30pm, Sunday to 3pm; bar menu noon–8pm except Sunday; supper 6–9pm. Book rooms online or by phone. Weekend rooms may need two nights once the Saturday-only rooms are taken. Cancellation within 7 days 30%, within 48 hours 75%. Plenty of parking",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Welcome to sleep in the bedrooms, though not on the beds, and throughout the bar. £15 for one night, £25 for two or more, however many dogs",
      season: null,
      price_per_night: 175,
      price_note: "small double, bed and breakfast, 2026; good double £205, better £255, best £350. Dinner, bed and breakfast £275–450 for two. Single occupancy from £155",
    },
  },
  {
    slug: "carne-camping",
    name: "Carne Camping",
    kind: "stay",
    // OSM node 9137034638, tagged as a camp site; OSM also maps a toilet block
    // (way 1093196366) and a water point (node 9137033063) beside it.
    // Directories give TR20 8YT, whose centroid is 150 m north-west.
    lat: 50.16049, lon: -5.63784,
    address: "Morvah, Penzance",
    // From directory listings built from its old Google business profile.
    phone: "07733 486347",
    notes: "Very basic field campsite at Morvah, a couple of minutes' walk from St Bridget's Church: cold water and flushing toilets, tents and vans. Pitch where you like and pay when the owners come round in the morning, an undated wedding-guest page says. Its website, carne-camping.business.site, no longer exists. The National Trust car parks round here, Carn Galver included, don't allow overnight parking",
    // No owner website; OSM and an undated third-party page only. Confirm it
    // still opens before relying on it.
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      season: null,
      price_per_night: null,
      price_note: "£5 an adult, £3 a child, on the same undated page",
      hookup: null,
    },
  },
  {
    slug: "trevowhan-lodgings",
    name: "Trevowhan Lodgings",
    kind: "stay",
    // OSM node 642992548, the hamlet of Trevowhan. The owner gives
    // "Trevowhan, Church Farm, Pendeen" and no postcode; OSM has no Church
    // Farm. Position unconfirmed.
    lat: 50.16204, lon: -5.62973,
    address: "Church Farm, Trevowhan, Pendeen",
    email: "Paulinep060@gmail.com",
    url: "https://www.trevowhanservices.com/trevowhan-lodgings",
    notes: "Two en-suite rooms about ten minutes from the coast path: a double, and a super king or twin in an annexe. Tea, coffee, milk, kettle, toaster and small fridge; the owner's page doesn't mention breakfast. Wi-Fi, off-road parking, single nights taken. Bus stop across the road. Bookings by email",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Both rooms listed as dog friendly; no terms given",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-coastguards-campsite",
    name: "Old Coastguards Campsite",
    kind: "stay",
    // Centre of OSM way 1077767895. The TR19 7ED postcode centroid, which the
    // owner gives, is 60 m south-west.
    lat: 50.16233, lon: -5.66919,
    address: "5 Enys Cottages, Pendeen, TR19 7ED",
    phone: "07857 433752",
    email: "info@oldcoastguardscampsite.co.uk",
    url: "https://oldcoastguardscampsite.co.uk/booking/",
    notes: "Small clifftop campsite at Pendeen Watch beside the lighthouse, with sea views and Geevor in sight from most pitches; two beaches a short walk. Now a Camping and Caravanning Club Certificated Site, members only: give a membership number when booking and show it on arrival, or join or leave without refund. Tents, motorhomes and small campervans. Three composting toilets, two LPG showers open day and night, cold-water sink, two drinking water points, Elsan point. Small shop 9am–8pm for non-perishables and camping gas; Spar in Pendeen. Campfires and portable BBQs allowed. Five tent and five van pitches 31 October–1 April. Check-in from 2pm, ring if earlier or later; out by noon. No music after 11pm",
    verified: "2026-09-15",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "On a lead, especially round the showers, toilets and picnic field; mess picked up",
      season: "all-year",
      price_per_night: null,
      price_note: "not published; shown when booking. A 2025 reviewer paid £20 for a T5 without a tent",
      // The owner's site doesn't mention hookup; ukcampsite.co.uk says none.
      hookup: false,
    },
  },
  {
    slug: "north-inn-pendeen",
    name: "The North Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 297618424. The TR19 7DN postcode centroid, which the
    // owner gives, is 45 m east.
    lat: 50.15151, lon: -5.66630,
    address: "The Square, Pendeen, Penzance, TR19 7DN",
    phone: "01736 788417",
    url: "https://thenorthinnpendeen.co.uk/bb-accommodation/",
    notes: "Village pub on the B3306 in the middle of Pendeen, opposite the school and near the shop and church, with a large beer garden, pétanque pistes and sea views from the back; CAMRA Cornwall Pub of the Year 2003. Four large rooms built in 2004 with bath and shower, TV, Wi-Fi and seaward balconies: three with a double and a single bed, one double adapted for disabled guests. Full English breakfast included. Deposit of the first night. Home-made pies and curries: lunch noon–2.30pm, evening meal 6.30–8.30pm; booking advised for Sunday roast. Camping field behind the pub",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs; park4night reviewers describe the bar as full of them",
      season: null,
      price_per_night: 120,
      price_note: "double or twin at £60 a person, 2024 rates, the latest the owner publishes; single £65",
    },
  },
  {
    slug: "north-inn-camping",
    name: "North Inn camping field",
    kind: "stay",
    // Centre of OSM way 297617702, "North Inn Camping"; park4night's pin is
    // 90 m south, at the pub.
    lat: 50.15212, lon: -5.66575,
    address: "Boscaswell Road, Pendeen, Penzance, TR19 7DN",
    phone: "01736 788417",
    url: "https://thenorthinnpendeen.co.uk/camping-2/",
    // Access and reviews from park4night (place 219026), rated 4.33 from 21,
    // the latest May 2026.
    notes: "Simple field behind the North Inn for tents and small touring vans, with a sea view. Toilets and showers are in the pub, open through the night, reviewers say; washing-up area. No bookings: turn up. Entrance to the right of the pub, past some parked caravans. Pendeen's public car park doesn't permit overnight camping",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Not mentioned on the owner's site",
      season: null,
      price_per_night: 20,
      price_note: "two people at £10 each, showers included",
      hookup: false,
    },
  },
  {
    slug: "pendeen-lane-park-up",
    name: "Lane-end park-up, Pendeen",
    kind: "stay",
    // OSM node 690269703, where service road way 54842507 meets track way
    // 64317963; park4night's pin is 11 m north. OSM maps no parking here.
    lat: 50.14980, lon: -5.67221,
    address: "Pendeen",
    url: "https://park4night.com/en/place/512740",
    notes: "Informal free spot at the end of a lane on the western edge of Pendeen, a dead end except for Geevor Tin Mine: room for about three vans, flat, no height limit, sea view, no facilities. Quick access to the coast path and Pendeen lighthouse. Dog walkers in the early evening; quiet overnight until the mine opens up at 7–8am. The most recent review, April 2025, reports motorbikes coming down after dark and one skidding gravel over a parked car; the reviewer left. Pendeen's and St Just's public car parks don't permit overnight camping",
    // park4night listing and reviews, rated 4 from 5; it gives TR19 7SN.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free",
    },
  },
  {
    slug: "field-house-trewellard",
    name: "The Field House",
    kind: "stay",
    // Postcode centroid (TR19 7ST), which the owner gives; OSM has no feature
    // for it. Directories give 8 Trewellard Road, opposite the Trewellard Arms.
    lat: 50.14568, lon: -5.67245,
    address: "Trewellard, Pendeen, Penzance, TR19 7ST",
    phone: "07786 733825",
    email: "fieldhousetrewellard@talk21.com",
    // Written in the owner's voice, and the only website it gives.
    url: "http://www.cornwall-online.co.uk/field-house/",
    notes: "B&B in Trewellard, under ten minutes' walk from the coast path, with sea views over fields to the Atlantic. Three en-suite rooms: a sea-view double, a sea-view king with its own roof deck and sitting room, and a super king or twin without a view. Cornish breakfast in a sea-view garden room; guest sitting room with wood burner; garden. The owners have a cat and dogs",
    // Directory page only; no separate owner website found.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Its cornwall-online.co.uk page says dogs welcome, £20 per dog, with bed, bowls and towels; a doggy dinner on request",
      season: null,
      price_per_night: 100,
      price_note: "sea-view double for two, from; king with roof deck £120–130, super king £110–120, twin £120–140; single occupancy £75–95",
    },
  },
  {
    slug: "sunset-campsite",
    name: "Sunset Campsite",
    kind: "stay",
    // Postcode centroid (TR19 7QB), which the owner gives; OSM has no feature
    // for it. park4night's pin is 340 m south. Position unconfirmed.
    lat: 50.13943, lon: -5.67557,
    address: "Sunset Farm, Carnyorth, Penzance, TR19 7QB",
    phone: "07533 944288",
    email: "info@sunsetcampsite.com",
    url: "https://sunsetcampsite.com/campsite",
    notes: "Off-grid summer field on a working farm at Carnyorth, running since 2021, with views to Botallack and the Brisons; minutes from the coast path, Botallack mines ten minutes' walk. Tents and campervans; no hookup, no marked pitches. Two compost toilets, one cold outdoor shower, a washing-up station; the water isn't certified drinking water, so bring your own. No chemical waste disposal. Book by the enquiry form; pay on the owners' morning or evening rounds, by honesty box or online. No set arrival or departure times. Campfires in raised pits, paused in dry spells. Good mobile signal, no Wi-Fi. The field is cow pasture October–June",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free; under close voice control, and on a lead near the livestock",
      // Open in summer; park4night gives the UK school summer holidays. The
      // owner's site only says the cows have the field October to June.
      season: null,
      price_per_night: 13,
      price_note: "two people at £6.50 each, vehicle included",
      hookup: false,
    },
  },
  {
    slug: "parknoweth-farm-camping",
    name: "Parknoweth Farm Camping",
    kind: "stay",
    // Postcode centroid (TR19 7QG), which the owner gives; OSM has no campsite.
    // park4night's pin is 205 m south. Position unconfirmed.
    lat: 50.13751, lon: -5.68441,
    address: "Botallack, St Just, Penzance, TR19 7QG",
    phone: "07742 534844",
    email: "Camp@parknowethfarm.com",
    url: "https://www.parknowethfarm.com/bookyourstay",
    notes: "Pop-up campsite on a small farm in Botallack, about 60 days a year, five minutes by footpath from the coast path and the Tin Coast mines; goats, sheep, chickens and cats about the site. Economy, standard, sea-view and hiker pitches on meadow grass; tents, vans and campervans, over 6 m ring ahead; bell tent too. Basic new toilet block, hot showers, sockets for charging, fridge-freezer. Firewood and eggs for sale; campfires in raised pits. The Queens Arms two minutes' walk; St Just a mile. Book online, or same day until 8pm; no card payments by phone. Non-refundable deposit, balance on arrival. Arrivals from 2.30pm, ring if after 9.30pm; no pitching 10pm–9am. Quiet 10pm–7am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs on a short lead at all times, never left alone; not loose near the animal pens",
      // "We are open July 2nd", booking for July and August; a pop-up site's
      // dates are set afresh each year.
      season: { from: "07-02", to: "08-31" },
      price_per_night: 20,
      price_note: "standard pitch, two adults at £10 each; economy £8 and sea view £12 a person; child £4, under-5 free",
      hookup: false,
    },
  },
  {
    slug: "trevaylor-campsite",
    name: "Trevaylor Campsite",
    kind: "stay",
    // Centre of OSM way 494647878. The TR19 7PU postcode centroid, which the
    // owner gives, is 80 m south.
    lat: 50.13441, lon: -5.68285,
    address: "Botallack, St Just, Penzance, TR19 7PU",
    phone: "01736 787016",
    email: "trevaylor@cornishcamping.co.uk",
    url: "https://www.cornishcamping.co.uk/accommodation/camping-pitches",
    notes: "Family-run campsite on the B3306 a mile north of St Just, camping since the 1960s: five paddocks sheltered by Cornish hedges, 500 m from the coast path. Grass and hardstanding pitches, fully serviced hardstandings, most with metered 16 A hookup and a 25 m lead needed. Toilets and showers, laundry, indoor dishwashing, chemical and grey water disposal, cool-block exchange, Wi-Fi, games room and conservatory April–September. Static caravans, bell tents and a cottage too. Bus stop at the entrance to St Just and Penzance, and the open-top coast bus in season. The Queens Arms five minutes' walk. Two nights minimum, three mid-July to early September and at Christmas; backpackers exempt. 25% non-refundable deposit, balance 28 days before. Arrivals 2–7pm, out by 11am. No open fires. Quiet 10.30pm–7am",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two free on camping and touring pitches; on a lead, never left alone. Dangerous Dogs Act breeds and crosses, XL Bully included, refused. Not in or near the bell tents",
      // "Open from spring through autumn, and over Christmas and New Year";
      // no dates given.
      season: null,
      price_per_night: null,
      price_note: "shown when booking online",
      hookup: true,
    },
  },
  {
    slug: "st-just-rugby-club-camping",
    name: "St Just Rugby Club camping",
    kind: "stay",
    // Centre of OSM way 1092579915, "St Just RFC" pitch; park4night's pin is
    // 75 m north-east. The TR19 7PW postcode centroid, which the club gives,
    // is 225 m north.
    lat: 50.12714, lon: -5.67772,
    address: "Tregeseal, St Just, Penzance, TR19 7PW",
    phone: "07443 369070",
    email: "stjustrugbyclubcamping@gmail.com",
    url: "https://www.stjustrfc.co.uk/camping/",
    // Facilities beyond the club's page from park4night (place 127530), rated
    // 4.8 from 44, the latest August 2026.
    notes: "Camping round St Just's rugby pitch in a quiet, sheltered valley at Tregeseal, a short walk below the town; Cape Cornwall within walking distance. Tents and vans on grass and hard ground, hookup. Club changing rooms for toilets and showers, drinking water, Elsan and waste disposal, free Wi-Fi. Campers use the clubhouse in the evening, with cheap drinks, pool and darts: open 5pm–late weekdays, noon–late at weekends; no food, reviewers say. Book on the camping line, by Facebook or by email; reviewers were squeezed in unannounced. One reviewer found it rowdy after a match. St Just's Lafrowda car park doesn't permit overnight camping",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On a lead",
      // The club gives no season; park4night and campsite directories say open
      // all year.
      season: null,
      price_per_night: 23.5,
      price_note: "two adults at £8 each plus £7.50 hookup; child £2",
      hookup: true,
    },
  },
  {
    slug: "engine-inn-cripplesease",
    name: "The Engine Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 529236951. The TR20 8NF postcode centroid, which the
    // owner gives, is 3 m away; park4night's pin, in the car park, 35 m south.
    lat: 50.17877, lon: -5.50286,
    address: "Cripples Ease, Nancledra, Penzance, TR20 8NF",
    phone: "01736 780793",
    email: "engineinncripplesease1@outlook.com",
    url: "https://www.enginepub.co.uk/about-us/",
    // Overnight parking from park4night (place 167595), rated 4.74 from 53, the
    // latest August 2026.
    notes: "Family-run pub on the B3311 at Cripplesease, between St Ives and Penzance, five minutes' drive from St Ives; beer garden with a play area and views. Vans may stay overnight in the gravel car park across the road if you eat in, reviewers say; room for about six, some pitches need levelling chocks, quiet at night. Pub toilets while open; no other facilities. Two refurbished B&B rooms too. Open noon–10pm daily. Food Mon–Thu 5–8pm, Fri–Sat noon–2pm and 5–8pm, Sun noon–7pm; breakfast from 9.30am, reviewers say. Quiz Tuesdays, curry and fish nights. It closed in September 2024 and had reopened by January 2025, reviewers say",
    verified: "2026-09-15",
    stay: {
      type: "park4night",
      dogs: true,
      dogs_note: "The owner lists the pub as dog friendly; the rooms aren't covered",
      season: "all-year",
      price_per_night: null,
      price_note: "free if you eat at the pub, park4night reviewers say",
    },
  },
  {
    slug: "old-success-inn",
    name: "Old Success Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 529256403. The TR19 7DG postcode centroid, which the
    // owner gives, is 46 m south-east. Street from OSM's tags.
    lat: 50.07789, lon: -5.69974,
    address: "Cove Hill, Sennen Cove, Penzance, TR19 7DG",
    phone: "01736 871232",
    email: "oldsuccess@staustellbrewery.co.uk",
    url: "https://www.oldsuccess.co.uk/our-rooms/",
    notes: "St Austell Brewery inn above Sennen beach, with a log fire, an upstairs terrace and a garden. Twenty-four rooms: cosy, standard, signature view and premium view doubles, signature and premium view twins, a deluxe suite, and an accessible double and twin; four ground-floor rooms in the annexe. No family rooms; extra beds or cots in some rooms, £25 per child aged 3–15 per stay. Breakfast included, 7–10am. Check-in from 3pm, out by 11am; full payment taken from 48 hours before arrival. Open 7am–11pm, Sunday to 10.30pm; food 7–11.30am and noon–9.30pm, Sunday 7–10.30am and noon–9pm. No parking: Sennen Beach car park across the road, £10 for 24 hours. Reservations also on 0345 241 1133",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay. On a lead in public areas and never left alone in the room; everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trevedra-farm",
    name: "Trevedra Farm Caravan and Camping Site",
    kind: "stay",
    // Centre of OSM way 536144470. The TR19 7BE postcode centroid, which the
    // owner gives, is 485 m north, on the lane the owner warns sat navs send
    // you down.
    lat: 50.08867, lon: -5.67937,
    address: "Sennen, Penzance, TR19 7BE",
    phone: "01736 871818",
    email: "campsite@trevedrafarm.com",
    url: "https://trevedrafarm.co.uk/tariff/",
    // Affiliated status from the Caravan and Motorhome Club's page for the site.
    notes: "Family-run site on a working farm on the clifftop above Gwynver beach, a mile from Land's End; a Caravan and Motorhome Club affiliated site, non-members welcome. 86 caravan and motorhome pitches with hookup across three areas, 36 fully serviced, five of those hardstanding; two tent areas with hookups. Heated toilet and shower block, laundry, dishwashing room, outdoor hot wetsuit showers, motorhome service points, wifi. Shop with home-made cakes, bread, milk, pasties, fruit and veg, and gas. Ocean Blue Café serves food at Easter and May–September; the Sunday evening roast is usually booked well ahead. E-bike hire. November to March: five fully serviced hardstandings only, pre-booked and pre-paid, washrooms and laundry open, shop and café shut. Arrivals from 2.30pm, pitch occupied by 7pm, no pitching 10pm–8am; out by 10.30am. Five nights minimum in the summer holidays unless booking within two weeks; the tariff and the site rules give different dates. Fees paid on arrival; deposits non-refundable. No open fires, no EV charging on pitches, no supermarket deliveries. Not sat-nav friendly: from Penzance on the A30, take the first lane right after the B3306 St Just junction, at the Trevedra Farm sign",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Two free, £3 a night each after that. Wormed, on a lead at all times, including on the surrounding fields, and picked up after: dog faeces spread disease to the farm's cattle",
      season: "all-year",
      price_per_night: 33,
      price_note: "grass hookup pitch with two adults, low season 28 September–31 October 2026; £36.50 mid season (1 April–21 May, 31 May–23 July, 1–27 September and Christmas), £40.50 high season (22–30 May, 24 July–31 August), when one adult on a hookup pitch pays £35. Fully serviced hardstanding £40.50–49.50. Winter 2026–27 fees to be confirmed; winter 2025–26 was £35 for two adults on a serviced hardstanding",
      hookup: true,
    },
  },
  {
    slug: "sennen-cove-club-site",
    name: "Sennen Cove Camping and Caravanning Club Site",
    kind: "stay",
    // Centre of OSM way 571458982. The Club's own coordinates are 250 m
    // north-east; the TR19 6JB postcode centroid, which the Club gives, 570 m
    // north-east.
    lat: 50.08952, lon: -5.67034,
    address: "Higher Tregiffian Farm, St Buryan, Penzance, TR19 6JB",
    phone: "01736 871588",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/cornwall/penzance/sennen-cove-camping-and-caravanning-club-site/",
    notes: "Camping and Caravanning Club site on Higher Tregiffian Farm, three miles from Land's End: open and relatively flat, with sea views. Grass pitches with or without hookup, hardstandings with hookup, jumbo grass pitches, and super-service hardstandings with water and waste drainage. Toilets, showers, accessible facilities, parent and baby room, dishwashing, laundry, ice pack freezing, motorhome service point, shop, wifi, play area and playing field. Fish and chip van twice a week in high season. The Club flags a difficult approach and has safe approach instructions to download; towing units should keep out of Sennen Cove. Bus stop 400 m from the entrance. Check-in from 1pm, out by noon. £25 or 25% deposit. Booking line 024 7647 5426",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Pets welcome; designated dog walk",
      // Open 22 March–25 October in 2027.
      season: { from: "03-27", to: "10-26" },
      price_per_night: null,
      price_note: "from £11.30 per member adult a night; pitch and non-member rates only when booking",
      hookup: true,
    },
  },
  {
    slug: "lands-end-camping",
    name: "Lands End Camping and Glamping",
    kind: "stay",
    // Centre of OSM way 1088223481. The TR19 7AQ postcode centroid, which the
    // owner gives, is 114 m south-east.
    lat: 50.06582, lon: -5.69781,
    address: "Trevescan Farm, Trevescan, Sennen, Penzance, TR19 7AQ",
    phone: "07376 535822",
    email: "info@landsendcamp.co.uk",
    url: "https://www.landsendcamp.co.uk/tariffs",
    notes: "Family campsite on Trevescan Farm, ten minutes' walk from Land's End, with Nanjizal in walking distance; one large, well-drained field, level pitches, most with distant sea views, in a dark-sky area. No roads or hardstandings; the owner says motorhomes have pitched all year without trouble. 20 pitches with 16 A hookup, which can be up to 25 m from the pitch. Toilet and shower block with a separate accessible shower; showers by token, one free per person a day. Covered dishwashing with fridge, freezer and microwave, drying room, cassette disposal, drive-over grey water, water fill, free broadband. Communal campfire area and chimineas lent free, with wood bought on site only. Coffee shop in the car park. Free-range chickens and turkeys, eggs for sale, and miniature pigs. Glamping pods and a showman's wagon too. Book online: 40% deposit by bank transfer within 48 hours, balance two weeks before; deposits non-refundable. Three nights minimum on hookup pitches in high season and on all pitches at Easter and bank holidays. Arrivals noon–7pm, out by 11am; no pitching 10pm–8am, and vehicles returning then stay in the car park. No generators or EV charging",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs, on a lead at all times because of the free-range chickens. Two free, £1 a night each after that",
      season: "all-year",
      price_per_night: 29.5,
      price_note: "campervan with two adults and hookup, low season, 2025 tariff, which the owner says is frozen again; £32.50 in high season, 23 May–2 June and 1 July–1 September. Motorhome up to 7 m £1 more a night. Awning £4",
      hookup: true,
    },
  },
  {
    slug: "seaview-holiday-park-sennen",
    name: "Seaview Holiday Park",
    kind: "stay",
    // Centre of OSM way 161692929, "SeaView Holiday Park". The TR19 7AD
    // postcode centroid, which the operator gives, is 390 m north.
    lat: 50.06792, lon: -5.69442,
    address: "Sennen, Penzance, TR19 7AD",
    url: "https://wyldecrestholidayparks.co.uk/property_location/seaview-holiday-park-cornwall/",
    // Pitch sizes, hookup, the 7.5 m limit, bar and check-in times from
    // campsites.co.uk; the operator's page gives no pitch details or prices.
    notes: "Wyldecrest holiday park of static caravans and lodges on 12.5 acres beside the A30 at Sennen, a quarter of a mile past the First & Last Inn towards Land's End. Camping pitches in two areas: the Wylde camping area among flower beds and granite rocks, with sea views, and the bottom terrace nearer the facilities. Basic toilets and showers, indoor soft play 9am–5.20pm, unheated outdoor pool 1 July to mid-September, A-frame camping pods. Open ten months of the year to holidaymakers. Directories list grass pitches with optional hookup for campervans and motorhomes up to 7.5 m, a bar and café, and check-in 3–5pm, out by 11am. Book online",
    verified: null,
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "A dog-friendly park, the operator says; certain breeds refused, dogs kept out of some areas, on a lead and under control at all times",
      season: null,
      price_per_night: null,
      hookup: null,
    },
  },
  {
    slug: "lands-end-hotel",
    name: "The Land's End Hotel",
    kind: "stay",
    // Centre of OSM way 161692949. Street and postcode from OSM's tags; the
    // owner's pages give none. The TR19 7AA postcode centroid is 58 m
    // north-east.
    lat: 50.06572, lon: -5.71437,
    address: "Lands End Road, Sennen, Penzance, TR19 7AA",
    phone: "01736 871844",
    email: "reservations@landsendhotel.co.uk",
    url: "https://www.landsendhotel.co.uk/the-lands-end-hotel/",
    // The car park rule from the owner's terms for the Land's End attraction.
    notes: "Victorian hotel on the 200 ft cliffs at the Land's End visitor site, on the coast path, looking towards the Isles of Scilly; run by Heritage Great Britain with the attraction. Thirty en-suite rooms: superior sea view, deluxe, standard doubles and twins, singles and family rooms. Land's End Restaurant; full English breakfast £17.95 a person, not in the room price unless agreed. Dynamic pricing, per room per night. Check-in from 3pm, out by 11am. Stableroom studios and the Saddle Room apartment by the First & Last Inn, a mile inland, are the same owner's. Motorhomes and campervans may use the Land's End car parks for a day ticket only; no overnight without written permission",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms only: ask in writing before arrival, subject to availability; arriving with an undeclared dog can mean the stay is refused. £20 per dog a night, two per room at most. Never left in a parked vehicle",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "crows-an-wra-layby",
    name: "A30 lay-by, Crows-an-Wra",
    kind: "stay",
    // Centre of OSM way 828466952, the lay-by's service road beside the A30;
    // park4night's pin is 14 m away. park4night gives TR19 6HT.
    lat: 50.08902, lon: -5.64875,
    address: "A30, Crows-an-Wra, Penzance",
    url: "https://park4night.com/en/place/101973",
    notes: "Free lay-by beside the A30 near Crows-an-Wra, on the road between Penzance and Land's End, set back from the carriageway behind a verge and trees: long, mostly level, room for several vans and big motorhomes. No facilities and no bin; reviewers ask for litter to be taken away. Quiet overnight for most reviewers, with some noise from Land's End Airport by day; one in August 2026 was woken by a car sounding its horn after midnight. A reviewer in June 2026 found the footpath overgrown, so only a quick stop for a dog",
    // park4night listing and reviews, rated 4.53 from 43; the most recent
    // August 2026.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free",
      hookup: false,
    },
  },
  {
    slug: "cardinney-caravan-park",
    name: "Cardinney Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 384543968, "Cardinney Car. & Camp Park". The TR19 6HX
    // postcode centroid, which the owner gives, is 208 m west. Directories
    // still list 01736 810880 and cardinney-camping-park.co.uk.
    lat: 50.09379, lon: -5.63567,
    address: "Crows-an-Wra, Penzance, TR19 6HX",
    phone: "01736 223223",
    email: "info@cardinney.co.uk",
    url: "https://cardinney.co.uk/tariff.html",
    notes: "Adults-only park of five landscaped acres in open farmland, set back off the A30 midway between Penzance and Land's End; part of the Tranquil Parks collection. Pitches about 8 × 8 m, each hedged: serviced grass with hookup and water, non-serviced grass, gravel serviced hardstandings, extra-large grass, and premium hardstandings with a grass area. Motorhomes over 6 m need a hardstanding. Electric pitches include £2 of electricity a day; more from reception or the online guest login. Modern shower block, laundry, shop, wifi, glamping bell tent. Quiet after 10pm. Out by 11am. £30 non-refundable deposit per seven nights",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, £1 each a night; on a lead around the park. Enclosed dog exercise area",
      // Off-peak April, May and October, peak June–September; no other months
      // are priced.
      season: { from: "04-01", to: "10-31" },
      price_per_night: 28,
      price_note: "serviced grass pitch with two adults and a car, April, May and October 2026; £35 June–September. Serviced or premium hardstanding £33, £40 in peak. Non-serviced £22–28. Extra adult £10; one adult £5 less",
      hookup: true,
    },
  },
  {
    slug: "sea-view-house-porthcurno",
    name: "Sea View House",
    kind: "stay",
    // Centre of OSM way 445259614. The TR19 6JX postcode centroid, which the
    // owner gives, is 161 m south-east.
    lat: 50.04744, lon: -5.65730,
    address: "The Valley, Porthcurno, Penzance, TR19 6JX",
    phone: "01736 810638",
    email: "stay@seaviewhouseporthcurno.co.uk",
    url: "https://seaviewhouseporthcurno.co.uk/",
    notes: "Guest house built in 1910 in the Porthcurno valley, 400 yards from the beach, the coast path and the Minack Theatre. En-suite doubles; a triple with three single beds and a sea view; twins, most en suite with sea views; a single with a sea view and a private bathroom. Tea and coffee, TV, wifi, sun terrace, luggage storage, free parking. Single occupancy discount when rooms allow. No prices published; book by enquiry form, phone or email",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "One dog-friendly en-suite double with its own entrance; up to two dogs, for a supplement. Not left alone during the stay",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "treen-farm-campsite",
    name: "Treen Farm Campsite",
    kind: "stay",
    // Centre of OSM way 284708625. The TR19 6LF postcode centroid, which the
    // owner gives, is 326 m north-east.
    lat: 50.04796, lon: -5.64458,
    address: "Treen, St Levan, Penzance, TR19 6LF",
    phone: "07598 469322",
    url: "https://treenfarmcampsite.com/faqs/",
    notes: "Traditional family campsite a couple of fields from the coast path at Treen; Pedn Vounder and Porthcurno beaches ten minutes' walk, Penberth 25. Most pitches have sea views and a picnic bench. No bookings of any kind: arrive early in busy months and give your name at reception, and pitches are allocated at 10.30am in order of arrival as others leave; if there's no room, your name carries to the next day. Out by 10am strictly; arrive by 7.30pm. No caravans or groups, and no motorhomes over 6.7 m long or 2.1 m wide: the lane is very narrow. Limited hookups, first come first served. Token showers, toilets, hot-water washing up, washing machine and dryer, campers' kitchen with microwave and toaster, drinking water, chemical disposal, one EV charger. Shop with milk, bread, local meat, beer and wine, gas, morning croissants, pasties and coffee; caterers some evenings in season. No fires on site; a communal fire pit in the field below. Sauna to book. Visitors park in the village car park. Closed 18–20 September 2026 for a private event",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Friendly, well-behaved dogs free; on a lead on site at all times and taken off site to toilet",
      season: { from: "04-01", to: "10-04" },
      price_per_night: 33.5,
      price_note: "standard pitch with a van under 5.3 m, two adults and hookup, off peak (1 April–21 May, 1 June–17 July, 7 September–4 October); £36 peak, 22–31 May and 18 July–6 September. Large pitch for a van over 5.4 m £3 more. Showers 50p a token",
      hookup: true,
    },
  },
  {
    slug: "treen-car-park",
    name: "Treen car park",
    kind: "stay",
    // Centre of OSM way 238876112, "Treen car park"; park4night's pin is 10 m
    // south-east. An unnamed parking area, way 1013511678, adjoins it 55 m
    // east. park4night gives TR19 6LQ.
    lat: 50.04985, lon: -5.64082,
    address: "Treen, St Levan, Penzance",
    url: "https://park4night.com/en/place/71684",
    notes: "Field car park at the top of Treen, looking over the Penberth valley towards the Logan Rock headland, where vans and motorhomes may stay overnight; no tents. About eight gravel pitches and twenty on grass, some sloping, and muddy patches in the wet. Public toilets at the entrance, open all night and now free; rubbish bins; no water or hookup. Three nights at most, a reviewer says. Treen Café beside it and the Logan Rock Inn close by; coast path walks to Porthcurno and the Minack. The lane into the village is narrow and steep. Treen Farm Campsite is in the same village",
    // park4night listing and reviews, rated 4.78 from 162; the most recent
    // September 2026. No owner website found.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 12.5,
      price_note: "24 hours, reviewers say, July 2026; £4 to park for the day",
      hookup: false,
    },
  },
  {
    slug: "treverven-farm-camping",
    name: "Treverven Farm Camping",
    kind: "stay",
    // Centre of OSM way 238876111, "Treverven Touring Park". The TR19 6DL
    // postcode centroid, which the owner gives, is 211 m west. Directories
    // still list 01736 810200 and treverventouringpark.co.uk, a domain now
    // for sale.
    lat: 50.05733, lon: -5.61768,
    address: "Treverven Farm, St Buryan, Penzance, TR19 6DL",
    phone: "01736 691534",
    email: "trevervenfarmcamping@outlook.com",
    url: "https://trevervenfarmcamping.co.uk/booking",
    notes: "Campsite on a working farm some 250 ft above the sea near St Buryan, run by the same family for 50 years; coastal and country walks from the site. Campervans, motorhomes, tents and caravans. Serviced grass pitches with water and hookup, over 30 of them, and non-serviced grass pitches with shared drinking-water taps. Toilets and showers, hair-drying room, family and accessible shower room, laundry with free fridges and freezer, dishwashing, grey water and chemical disposal, motorhome service point, play area, wifi, lockers for charging. Reception and licensed shop with gas, wood and BBQs; cooked breakfasts and evening meals in high season. Two shepherd's huts. Fees non-refundable; balance taken three weeks before. Arrivals 2–6pm, out by 10.30am; no pitching after 10pm, and late arrivals sleep on the gravel outside reception. Quiet 10.30pm–8am. No open fires; fire pits off the grass. No EV charging on pitches or supermarket deliveries",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free, two per pitch at most. On a lead at all times on the campsite and farmland, never left alone at the pitch, not exercised near the play area or taken into the toilets and showers",
      // Directories give 3 April–31 October; the owner gives no dates.
      season: null,
      price_per_night: 32,
      price_note: "serviced grass pitch with two people and a vehicle, from; non-serviced from £27",
      hookup: true,
    },
  },
  {
    slug: "tower-park-st-buryan",
    name: "Tower Park Caravans and Camping",
    kind: "stay",
    // Centre of OSM way 503426539, "Tower Park". The TR19 6BZ postcode
    // centroid, which the owner gives, is 425 m south, in the village.
    lat: 50.07868, lon: -5.62349,
    address: "St Buryan, Penzance, TR19 6BZ",
    phone: "01736 810286",
    email: "enquiries@towerparkcamping.co.uk",
    url: "https://www.towerparkcamping.co.uk/Caravans-Camping-Cornwall.htm",
    notes: "Campsite of seven level grass fields separated by trees and Cornish hedges, a few minutes' level walk from St Buryan's church, post office, general store and the St Buryan Inn. Large pitches, at least 10 m wide, with or without hookup, and five hardstanding super pitches with 16 A hookup, water and grey water disposal, off the tarmac road. Toilets and showers, laundry, wetsuit wash, dishwashing, ice pack freezer, play area, TV and reading room with free wifi, accessible shower room, motorhome emptying and chemical disposal points. Takeaway food vans in high season. Non-refundable deposit, £30 standard or £50 serviced pitch; balance on arrival. Pitches from 1pm, out by noon; no arrivals 10pm–9am, early and late arrival field by the entrance. Barrier locked 11pm–7am. No groups of three or more adults other than families. No EV charging on pitches",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three, pre-booked, £2 each a night; not every pitch is suitable. On a short lead at all times, kept away from the play area, never left alone on site. Dog walking field",
      season: { from: "05-01", to: "10-04" },
      price_per_night: 26,
      price_note: "electric grass pitch with two people and a campervan, May–13 July, September and October 2026; £31 14 July–August. Super pitch £30, £35. Non-electric £21, £25. Extra adult £7.50–9; one person £3.50 less",
      hookup: true,
    },
  },
  {
    slug: "pridden-farm-cl",
    name: "Pridden Farm",
    kind: "stay",
    // Postcode centroid (TR19 6EA), from the Club's listing. The Club's GPS is
    // 440 m west; an unnamed OSM farmyard, way 485883331, is 100 m north of
    // that. Position unconfirmed.
    lat: 50.08220, lon: -5.60796,
    // The Caravan and Motorhome Club's listing.
    address: "St Buryan, Penzance, TR19 6EA",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/penzance/pridden-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: the top of a gently sloping lawned field half a mile from St Buryan, looking over woodland and farmland. Five pitches with 16 A hookup; some slope, levelling blocks needed; units up to 9 m. Toilet with washbasin for the site's use, laundry, outdoor wifi. Footpaths to St Buryan and the Boscawen-Un stone circle. Horses graze the field in winter. The owners also run a taxi firm covering West Penwith, with reduced fares for guests to pubs and restaurants, and have two self-catering units. Arrivals 10am–10pm. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing welcomes dogs on a lead or under control, free; dog walk from the site",
      // The Club lists it open 1 April–30 September 2026.
      season: { from: "04-01", to: "09-30" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "trelew-farm-cl",
    name: "Trelew Farm",
    kind: "stay",
    // Centre of OSM way 178154174, "Trelew Farm", a farm building. The TR19
    // 6ED postcode centroid, from the Club's listing, is 2 m away and the
    // Club's GPS 30 m north-west.
    lat: 50.08769, lon: -5.60809,
    // The Caravan and Motorhome Club's listing.
    address: "St Buryan, Penzance, TR19 6ED",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/penzance/trelew-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: a spacious, level one-acre grass site on a working beef farm near St Buryan, each of five pitches with its own hookup, water and wifi. Recycling; no toilets listed. Horses graze over the fence, and the sea shows past a standing stone. Footpaths to a stone circle on the farm and to St Buryan, with post office and shop, pub and church. Arrivals noon–9pm, out by noon. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing says dogs stay free; dog walk from the site",
      // The Club lists it open all year.
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "boleigh-farm",
    name: "Boleigh Farm",
    kind: "stay",
    // Centre of OSM way 293840613, "Boleigh Farm Campsite". The TR19 6BN
    // postcode centroid, which the owner gives, is 237 m north.
    lat: 50.06881, lon: -5.58487,
    address: "Boleigh Farm, St Buryan, Penzance, TR19 6BN",
    phone: "01736 810305",
    email: "boleigh@live.co.uk",
    url: "https://www.boleighfarmcamping.com/",
    // The owner's page also gives a mobile, printed ambiguously; not copied.
    notes: "Small, basic camping field on a working beef farm on the coast road at the head of the Lamorna valley, run by brothers Deryck and David Eddy: a mown hayfield between Cornish hedges, with the Merry Maidens and the Pipers standing stones in the fields beyond. Tents, campervans and caravans; a few caravan hookups; basic wash block by the farmhouse with free hot showers. The Thai takeaway has closed. Buses 1 and 1A between Penzance and Land's End stop outside; wave one down. Book by phone or email; advisable in high season",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Not mentioned on the farm's site; campsite directories list dogs as welcome",
      season: null,
      price_per_night: 24,
      price_note: "campervan £10, two adults at £5 each and hookup £4. Child under 15 £2",
      hookup: true,
    },
  },
  {
    slug: "lamorna-cove-car-park",
    name: "Lamorna Cove car park",
    kind: "stay",
    // Centre of OSM way 697588339, the parking area at the cove; park4night's
    // pin is 7 m away. A second parking area, way 697588343, is 90 m north.
    // park4night gives TR19 6XJ.
    lat: 50.06141, lon: -5.56419,
    address: "Lamorna Cove, Penzance, TR19 6XJ",
    url: "https://park4night.com/en/place/320431",
    notes: "Private pay car park on the harbour at Lamorna Cove, on the coast path, where vans stay overnight: about ten places, the upper ones fairly flat, emptying by early evening. No facilities for vans and no bins; the café's toilets close with the café. The machine takes £1 coins only, no cards and no change, and ANPR cameras issue tickets, including to a reviewer in 2025 who spent 20 minutes looking for change. Keep off the harbour wall beyond the shop. The lane down is steep, winding and one car wide. No phone signal, a 2023 reviewer says. The Lamorna Wink is about ten minutes uphill",
    // park4night listing and reviews, rated 3.64 from 14; the most recent
    // September 2026. No owner website found.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "24 hours in £1 coins, reviewers say, September 2026; £1.50 up to an hour",
      hookup: false,
    },
  },
  {
    slug: "mousehole-camping",
    name: "Mousehole Camping",
    kind: "stay",
    // Centre of OSM way 376889654, "Mousehole Camping". The TR19 6XB postcode
    // centroid, which the owner gives, is 322 m east.
    lat: 50.08987, lon: -5.55274,
    address: "Trungle Parc, Paul, Penzance, TR19 6XB",
    phone: "07470 920006",
    email: "enquiries@mouseholecamping.co.uk",
    url: "https://www.mouseholecamping.co.uk/",
    // Its FAQ still gives an Easter–mid September 2024 season.
    notes: "Small campsite at Mousehole AFC's ground by the village of Paul, above Mousehole; camping fees go to the club. 35 pitches: 24 large, flat grass pitches and 11 all-weather hardstandings, all with optional hookup. Campervans, tents and motorhomes up to 7.5 m; no caravans. Hot showers and toilets in the football changing rooms, 65 m from the pitches and briefly out of use during home matches; accessible wet room, dishwashing, freezer, charging points, chemical disposal, water, free wifi. Licensed clubhouse on matchdays, with free entry to home games. BBQs and small raised fires allowed. Glamping bell tents. Mid-September to March: the 11 hardstandings only, for self-contained vans, reception and facilities closed, though one toilet and shower is kept open where possible. Arrivals 2–8pm; quiet 11pm–7am. Book online; no refunds within 14 days. Walkers and cyclists should text ahead. Paul, with the King's Arms and buses between Penzance and Land's End, is 500 m; Mousehole harbour 15 minutes' walk down, 20 back. Don't drive through Mousehole: come up the hill from Newlyn to Paul, then about 600 m along the B3315 towards Land's End",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs on a lead at all times; breeds on the site's banned list refused",
      season: "all-year",
      price_per_night: 25,
      price_note: "campervan pitch £20–30 plus hookup £5; motorhome pitches £20–35 including hookup. Walkers and cyclists from £10 a person",
      hookup: true,
    },
  },
  {
    slug: "ship-inn-mousehole",
    name: "The Ship Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 591674336. The TR19 6QX postcode centroid, which the
    // owner gives, is 17 m south. Street from OSM's tags.
    lat: 50.08321, lon: -5.53931,
    address: "South Cliff, Mousehole, Penzance, TR19 6QX",
    phone: "01736 731234",
    email: "shipmousehole@staustellbrewery.co.uk",
    url: "https://shipinnmousehole.co.uk/our-rooms/",
    notes: "St Austell Brewery pub on the harbour front at Mousehole. Rooms above the pub on the first and second floors, stairs only: a signature view single, standard and signature view doubles, and a family room with a double and children's bunks; some take a Z bed or cot for hire. No air conditioning. Breakfast included, 8–9.30am. Check-in from 3pm, out by 11am. Two nights minimum on Friday and Saturday at peak times. Open 8am–11pm, Sunday 11am–10.30pm; food 8–10.30am and noon–9pm, Sunday 11am–9pm. No parking: the Harbour car park is £5 for the day and The Parade car park £11 for 24 hours. Reservations also on 0345 241 1133",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay. On a lead in public areas, never left alone in the room, not on furniture or beds; everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-coastguard-mousehole",
    name: "The Old Coastguard",
    kind: "stay",
    // Centre of OSM way 112518597. The TR19 6PR postcode centroid, which the
    // owner gives, is 25 m west.
    lat: 50.08470, lon: -5.53694,
    address: "Mousehole, Penzance, TR19 6PR",
    phone: "01736 731222",
    url: "https://oldcoastguardhotel.co.uk/sleep/cots-and-dogs",
    notes: "Family-owned hotel and restaurant in Mousehole, run with the Gurnard's Head: bar, dining room, Crab Shack and a terrace above a garden sloping to the rocks. Fourteen en-suite rooms, nearly all with sea views over Mount's Bay, some with balconies; some less quiet than others, so ask when booking. Breakfast included; dinner, B&B rates too. Open every day. A share of rooms are kept for Saturday-only stays; once taken, weekends are two nights. Cancellation within seven days 30%, within 48 hours 75%. Small car park, residents only after 3pm, with four 22 kW chargers; a public car park just before the hotel, about £9 a day. Book online or by phone",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "In the bedrooms, though not on the beds, and in the bar and Sun Lounge. £15 for one night, £25 for two or more, however many dogs",
      season: null,
      price_per_night: 195,
      price_note: "Double, B&B, 2026 year-round rate; Good Double £225, Better Double £260, Best Double £315. Dinner, B&B £100 more",
    },
  },
  {
    slug: "boswedden-house",
    name: "Boswedden House",
    kind: "stay",
    // Centre of OSM way 487140912, "Boswedden House". The TR19 7NJ postcode
    // centroid, which the owner gives, is 70 m north-west.
    lat: 50.12789, lon: -5.69586,
    address: "Cape Cornwall, St Just, Penzance, TR19 7NJ",
    phone: "01736 788733",
    email: "relax@boswedden.org.uk",
    url: "https://boswedden.org.uk/bed-breakfast/prices/",
    notes: "B&B and retreat centre in a Georgian house in an acre and a half of garden, just under a mile west of St Just towards Cape Cornwall; ten minutes' walk to Priest's Cove, the coast path nearer still. Eight en-suite rooms with central heating on the owner's rooms page, most made up as double or twin, and a family room for up to four; some sea views. Indoor heated pool, sauna, yoga and meditation studio, labyrinth garden; workshops, retreats and holistic therapies. Open fire in the lounge. Book by phone with Thelma or Nigel. Level car park at the rear. Cape Cornwall golf course two minutes' walk",
    verified: "2026-09-15",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: null,
      price_per_night: 90,
      // The rate card is undated and the site still carries a COVID-19 notice,
      // so the figures may be old.
      price_note: "large double or twin, April–June and September, on an undated rate card; small double £75, single £45, family £100. October–March £42.50–95, July, August and bank holidays £49.50–120",
    },
  },
  {
    slug: "cape-cornwall-club",
    name: "Cape Cornwall Club",
    kind: "stay",
    // Centre of OSM way 844543663, "Cape Cornwall Clubhouse". The TR19 7NL
    // postcode centroid, which the owner gives, is 35 m west.
    lat: 50.12627, lon: -5.69956,
    address: "Cape Cornwall Road, St Just, Penzance, TR19 7NL",
    phone: "01736 788611",
    email: "info@capecornwallclub.com",
    url: "https://capecornwallclub.com/stay/",
    notes: "Golf club with rooms on the clifftop above Cape Cornwall, open to non-members; a South West Coast Path Way Maker, stamping the Coast Path Passport. 23 rooms in a converted stone farmhouse barn, refurbished within the last three years: superior doubles, courtyard doubles or twins, standard twins, family rooms and cosy doubles, all with showers, some with baths. Breakfast included; free use of the indoor pool, sauna, jacuzzi and gym, and discounted golf. Restaurant and bar with a sea-view terrace: breakfast 8–10am, lunch noon–2pm, dinner 6–8pm; bar from 8am. Check-in from 4pm, with a bag drop before; out by 10am. Free car park. Book online or by phone",
    verified: "2026-09-15",
    stay: {
      type: "hotel",
      // The owner's words cover "all areas of the club"; bedrooms are named
      // only by Canine Cornwall. Confirm the room policy and any charge.
      dogs: true,
      dogs_note: "Allowed in all areas of the club except the gym and pool, the owner says. Canine Cornwall says all bedrooms, with treats, bowls and blankets. No charge published",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "cape-cornwall-wild-camping",
    name: "Cape Cornwall wild camping",
    kind: "stay",
    // Postcode centroid (TR19 7NL), which park4night gives; OSM has no feature
    // for the field. park4night's pin is 210 m east. Position unconfirmed.
    lat: 50.12637, lon: -5.70001,
    address: "Nanpean Barn, St Just, Penzance, TR19 7NL",
    url: "https://park4night.com/en/place/263779",
    // park4night listing and reviews, rated 4.53 from 17, the latest August
    // 2026. The owners' only web presence is a Facebook page.
    notes: "Summer pop-up camping field at Nanpean Barn, between St Just and Cape Cornwall: about 20 pitches on flat mown grass, sea views to Land's End, tents and vans. Two portaloos, a drinking-water tap and a bin; no shower, most reviewers say. Ring the number posted at the gate on arrival and the owner calls round in the evening to collect payment, cash only in 2022. Fire pits allowed, a 2023 reviewer says. The coast path a few minutes' walk, Cape Cornwall about ten; the square in St Just 1.2 km",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Allowed, a 2024 park4night reviewer says",
      // "Only open in July and August", park4night says; a pop-up site's dates
      // are set afresh each year.
      season: { from: "07-01", to: "08-31" },
      price_per_night: 15,
      price_note: "two adults at £7.50 each, child £3, park4night's listing and a 2025 review",
      hookup: false,
    },
  },
  {
    slug: "commercial-st-just",
    name: "The Commercial",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 297464550, "Commercial Hotel". The TR19 7HE postcode
    // centroid, which the owner gives, is 17 m south-east.
    lat: 50.12419, lon: -5.68006,
    address: "13 Market Square, St Just, Penzance, TR19 7HE",
    phone: "01736 788455",
    email: "enquiries@commercial-hotel.co.uk",
    url: "https://www.commercial-hotel.co.uk/rooms.html",
    // Car park rules from the town council's page and its Off Street Parking
    // Places Order (article 16 and Schedule 1).
    notes: "Family-run former coaching inn on the Market Square in St Just, in the same family for over a hundred years. Eleven en-suite B&B rooms with a four-star inn rating: TV, tea and coffee, hairdryer, Wi-Fi; drying and ironing on request. Cornish breakfast. Bar with wood burner and pool table, conservatory restaurant and a garden patio with heaters; breakfast, lunch and evening meals every day, £10 lunch specials noon–2pm Monday–Saturday, quiz Thursdays 8pm. Book online or by phone; the owner says direct is cheapest. Mews Cottage behind the inn, self-catering for three. St Just's Lafrowda car park is free but for cars and motorcycles only, 24 hours at most, and the town council bans sleeping and camping in it; a 2.1 m barrier guards the main area",
    verified: "2026-09-15",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner welcomes well-behaved dogs in the bar, and up to two in the cottage with notice; the B&B rooms aren't covered",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "wellington-st-just",
    name: "The Wellington Hotel",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 297464554, "The Wellington Hotel". The TR19 7HD
    // postcode centroid is 8 m south-west.
    lat: 50.12431, lon: -5.67938,
    address: "8–9 Market Square, St Just, Penzance, TR19 7HD",
    // From CAMRA and directory listings.
    phone: "01736 787319",
    url: "https://camra.org.uk/pubs/wellington-hotel-st-just-139239",
    notes: "Pub with rooms on the Market Square in St Just, opened in 1813: a large carpeted bar, restaurant and beer garden, live music at weekends. Eleven en-suite rooms overlooking the beer garden or the square, with breakfast, directories say. Its website, wellingtonhotelcornwall.co.uk, returns 404; it has a Facebook page",
    // CAMRA and directory listings only; no working owner website.
    verified: null,
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "CAMRA lists the pub as dog friendly; directories disagree on dogs in the rooms, one citing dog-friendly rooms at extra charge, another no pets",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-post-house-st-just",
    name: "The Old Post House",
    kind: "stay",
    // Centre of OSM way 297456681, "The Old Posthouse", tagged as a B&B. The
    // TR19 7LU postcode centroid is 40 m west.
    lat: 50.12302, lon: -5.68349,
    address: "24 Bosorne Street, St Just, Penzance, TR19 7LU",
    notes: "B&B in a period house on Bosorne Street, on the Cape Cornwall side of St Just, with its original staircase. Three rooms: two en-suite doubles, one of them deluxe, and a double with a private bathroom. Breakfast included; garden, Wi-Fi, and a yoga and relaxation room. Check-in 4–7pm, out by 10.30am, booking sites say",
    // Booking-site listings only; no owner website found.
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Its Expedia listing says pets aren't allowed",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "yha-lands-end",
    name: "YHA Land's End",
    kind: "stay",
    // OSM node 491041793, "Land's End Youth Hostel"; YHA's own point is 15 m
    // west, the TR19 7NT postcode centroid 20 m south-west.
    lat: 50.11596, lon: -5.68821,
    address: "Letcha Vean, St Just, Penzance, TR19 7NT",
    phone: "0345 371 9643",
    url: "https://www.yha.org.uk/hostel/yha-lands-end",
    notes: "Temporarily closed for reconfiguration and refurbishment. A hostel since 1939, in an early 20th-century house on the side of the Cot Valley with sea views, five minutes from the coast path and 15 minutes' walk from St Just; independently run as a YHA partner. When open: whole-hostel exclusive hire, with rooms and dorm beds on other dates; two camping pods; limited camping for coast path walkers arriving on foot only. Self-catering kitchen, drying room, licensed bar, on-site car park, no coaches. Neighbouring homes, so no loud parties",
    verified: "2026-09-15",
    stay: {
      type: "hostel",
      dogs: false,
      dogs_note: "Not permitted, except well-behaved dogs with whole-hostel exclusive hire; no dogs that bark excessively. Assistance dogs welcome",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "kelynack-caravan-camping",
    name: "Kelynack Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 296781925; OSM node 13011349566 is 17 m south, the
    // TR19 7RE postcode centroid, which the owner gives, 95 m north-west.
    lat: 50.11273, lon: -5.67540,
    address: "Kelynack, St Just, Penzance, TR19 7RE",
    phone: "01736 787633",
    email: "enquiries@kelynackholidays.co.uk",
    url: "https://kelynackholidays.co.uk/",
    // Arrival, deposit and dog rules from the owner's 2026 touring and camping
    // tariff and conditions, a scanned PDF.
    notes: "Small, secluded family-run park beside a stream in the Cot Valley, a mile from the coast south of St Just. 42 touring pitches for caravans, motorhomes and tents, all with hookup; chemical disposal point. Showers, toilets, separate accessible WC, laundry, covered cooking area, play area, donkeys, small shop with groceries, milk and camping gas, free Wi-Fi, EV fast charger. Static caravans, and three en-suite self-catering rooms in the Old Dairy. Book with the owner's form, paying by card over the phone, cheque or bank transfer: 25% non-refundable deposit, balance eight weeks before, all cancellations paid in full. Arrive noon–7pm, off the pitch by 11am. Quiet after 10.15pm. From the A3071 take the B3306 towards Land's End, then left at the bottom of the hill and left again after about 400 m",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 per dog a night. On a lead at all times, exercised off the park and never left unattended",
      // The owner gives no opening dates.
      season: null,
      price_per_night: 32,
      price_note: "two adults at £11 each plus £10 hookup, 2026; £34 from 8 July to 1 September. Child under 12 £5.50–6, under 3 free",
      hookup: true,
    },
  },
  {
    slug: "gurland-farm-cl",
    name: "Gurland Farm CL",
    kind: "stay",
    // Centre of OSM way 302920536, "Gurland Farm" farmyard; the TR19 7NY
    // postcode centroid is 7 m west, the Club's GPS point 26 m west. Where the
    // pitches sit on the farm is unconfirmed.
    lat: 50.09776, lon: -5.68771,
    address: "St Just, Penzance, TR19 7NY",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/st-just/gurland-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only: five grass pitches on three lawned acres of a family-run working farm above Gwynver beach, a ten-minute walk down, with views from Land's End round to Cape Cornwall. No hookup; battery charging, shower and WC for CL guests only, dog walk from the site. Bus stop within a mile for Penzance, St Ives and St Just. Directions and prices for members only.",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs, with a dog walk from the site",
      // The Club lists it open 1 April–30 September 2026.
      season: { from: "04-01", to: "09-30" },
      price_per_night: null,
      hookup: false,
    },
  },
  {
    slug: "brea-vean-farm",
    name: "Brea Vean Farm",
    kind: "stay",
    // Postcode centroid (TR19 6JF), which the owner gives; OSM's "Brea Vean"
    // farm building, way 296882604, is 40 m north-west. Where the field lies is
    // unconfirmed.
    lat: 50.09661, lon: -5.66908,
    address: "St Buryan, Penzance, TR19 6JF",
    phone: "01736 871818",
    url: "https://breaveanfarm.co.uk/fees/",
    notes: "Trevedra Farm's summer camping field on a working farm off the B3306 just before Land's End Airport, with coastal views; an open field with no marked pitches. Tents and T4/T5-sized vans only: no motorhomes or caravans, under its planning permission. Toilets, showers and dishwashing included. Book through Trevedra; pay by its online honesty box. Free parking at Trevedra with a permit, for Gwynver beach and Trevedra's shop, café and laundry. Bus stop at the end of the farm lane for Sennen, St Just and St Ives. Arrive from noon, by 7pm unless arranged; no pitching 10pm–8am; leave by 5pm. No open fires, kites or Chinese lanterns, for the airfield",
    verified: "2026-09-15",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On a short lead at all times, the dog-walk field included; picked up after. Keep out of the farm areas",
      // "End of May through to September"; Trevedra's tariff page says 23 May to
      // about 1 September.
      season: null,
      price_per_night: 20,
      price_note: "two adults at £10 each, no pitch fee; child 5–15 £5.50, under 5 free. Trevedra's tariff page says £11 an adult",
      hookup: null,
    },
  },
  {
    slug: "yha-penzance",
    name: "YHA Penzance",
    kind: "stay",
    // Centre of OSM way 362567508, "YHA Penzance"; YHA's own point is 14 m
    // north-east, the TR20 8TF postcode centroid 96 m north. The campsite is
    // OSM way 571453516, beside it.
    lat: 50.11786, lon: -5.55810,
    address: "Castle Horneck, Penzance, TR20 8TF",
    phone: "0345 371 9653",
    email: "penzance@yha.org.uk",
    url: "https://www.yha.org.uk/hostel/yha-penzance",
    notes: "Hostel in Castle Horneck, a Grade II listed Georgian manor in its original gardens on the western edge of Penzance, looking over Mount's Bay; a YHA hostel since 1949. Dorm beds and private rooms, some on the ground floor; a campsite for your own tent, with its own toilet and shower block; premium bell tents and Landpods. Breakfast 7.30–10am, meals 5–8.30pm, licensed bar 3–10pm with no alcohol brought in; self-catering kitchen, large gardens, BBQ area, cycle and luggage stores, wifi in shared spaces, free parking. Laundry, drying room and games room currently closed. Reception 7.30–10am and 3–10pm; check-in 3–10pm, out by 10am. Towels for hire. The station, bus station and Scilly ferry are 1.5 miles away, about 30 minutes' walk uphill across the A30; buses stop within 500 m",
    verified: "2026-09-16",
    stay: {
      type: "hostel",
      dogs: false,
      dogs_note: "Not in the hostel accommodation. Free on the campsite with your own tent; £10 per dog a night in bell tents and Landpods, paid on arrival. With a camping booking, allowed in the hostel's public areas except kitchens. Assistance dogs welcome throughout",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "stream-valley-holiday-park",
    name: "Stream Valley Holiday Park",
    kind: "stay",
    // OSM node 4741017825, "Stream Valley Holiday & Caravan Park"; park4night's
    // pin is 17 m south. The TR20 8UJ postcode centroid, which Alan Rogers
    // gives, is 323 m north.
    lat: 50.13125, lon: -5.55310,
    address: "Bone Valley, Heamoor, Penzance, TR20 8UJ",
    // Webb Holiday Parks' office, in Lincolnshire. OSM and Alan Rogers give
    // 07799 691112 for the park.
    phone: "07931 823489",
    email: "office@webbholidayparks.co.uk",
    url: "https://webbholidayparks.co.uk/",
    // Pitch count and lodges from Alan Rogers; the reviews are park4night's,
    // rated 2.6 from 5, the latest June 2025.
    notes: "Small park of holiday lodges and touring pitches at Heamoor, on the north-west edge of Penzance, formerly Bone Valley; run by Webb Holiday Parks. Fully serviced hardstanding and grass pitches with water and drainage hook-ups, 17 in all, directories say; two tent pitches with parking 80 m away. Toilet block with showers, launderette, drying room, dishwashing, chemical disposal, recycling. Self check-in, with a live-in warden in summer. Book online; deposits non-refundable, and entry can be refused after the check-in cut-off. A pub, a pasty and cake shop, a chip shop and a Nisa store within walking distance, the owner says. Reviewers found the block small, showers £1 extra and some pitches hard to level; Penzance is 20–25 minutes' walk",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Allowed, the owner says; no charge or limit published",
      // Alan Rogers lists it open all year; the owner gives no dates.
      season: null,
      price_per_night: null,
      price_note: "reviewers paid £20–35 a night for a motorhome, two adults and hookup, 2023–2025",
      hookup: true,
    },
  },
  {
    slug: "artist-residence-penzance",
    name: "Artist Residence Cornwall",
    kind: "stay",
    // OSM node 4333906912, "Artist Residence". The TR18 4AW postcode centroid,
    // which the owner gives, is 81 m north-west.
    lat: 50.11696, lon: -5.53451,
    address: "20 Chapel Street, Penzance, TR18 4AW",
    phone: "01736 365664",
    email: "penzance@artistresidence.co.uk",
    url: "https://www.artistresidence.co.uk/cornwall-faqs",
    // The Harbour car park's ban from its council page.
    notes: "Boutique hotel in a Georgian townhouse on Chapel Street, moments from the harbour and seafront: the Cornish Barn restaurant and bar, a lounge, garden and terrace, and the Shack bar at weekends from spring to the end of summer. Rooms from the Snug and the Nook to the Lookout and the Chapel Suite, and a cottage behind sleeping six; pod coffee, minibar, wifi, TV and radio, most without air conditioning. Three separate staircases and no lift, three steps at the entrance; some rooms sit above the bar. Breakfast daily, not usually in the rate. Check-in from 3pm, out by 11am; late check-out £20 an hour. Flexible rates free to cancel up to 72 hours before. No parking: the hotel recommends the council's Harbour long-stay car park, five minutes' walk, which bans motorhomes and campers 11pm–8am. The station is 10–15 minutes' walk",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Well-behaved dogs in most room types, £20 per dog a night with a bed, bowls and snacks; not in the Nook, the Mini Lookout or some Comfy Double and Comfy Luxe rooms. The Snug and one Comfy Double are on the ground floor with side access to Vandervour Lane. Up to three in the Cottage, two small dogs in the Lookout or Chapel Suite. On a lead in the bar, lounge and parts of the restaurant; never left alone in the bedroom. Add the dog's name and size to the booking",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "penzance-promenade-parking",
    name: "Penzance Promenade roadside parking",
    kind: "stay",
    // Centre of OSM way 376721051, free street-side parking by the Grand Casino;
    // park4night's pin is 20 m south-west. park4night gives 33 Cornwall
    // Terrace, TR18 4HL, whose postcode centroid is 91 m north-east.
    lat: 50.11335, lon: -5.53944,
    address: "The Promenade, Penzance",
    url: "https://park4night.com/en/place/207771",
    // Council car park rules from each car park's own page.
    notes: "Free on-street bays on Penzance seafront by the Grand Casino amusements, where Cornwall Terrace meets the Promenade, on the coast path: room for about 40 vehicles, fairly level though a few reviewers found it uneven or sloping, with sea views across the bay. No signs against sleeping, reviewers say, and several vans stay at once. A main road: traffic from about 7am to 11pm, quiet in between; a van's wing mirror was clipped in June 2026. Public toilets in the park across the road, closed in the evening; Lidl, 300 m, has toilets while open. Food vans on the promenade in the mornings; pubs, chip shops and town a short walk. None of Penzance's or Newlyn's council car parks allows a night in a van: Harbour, Wherrytown and Long Rock ban motorhomes and campers 11pm–8am, and the other long-stay car parks ban sleeping",
    // park4night listing and reviews, rated 4.17 from 24; the most recent June
    // 2026. No owner.
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free, reviewers say, June 2026",
      hookup: false,
    },
  },
  {
    slug: "ponsandane-camping",
    name: "Ponsandane Campsite",
    kind: "stay",
    // Centre of OSM way 619179573, "Ponsandane Camping"; the owner's Google
    // pin is 89 m south-east. The TR18 3FN postcode, which the owner gives,
    // is for the Tesco roundabout on its directions; its centroid is 982 m
    // east.
    lat: 50.12730, lon: -5.52664,
    address: "Chyandour, Penzance, TR18 3FN",
    phone: "01736 331974",
    email: "info@ponsandane.co.uk",
    url: "https://www.ponsandane.co.uk/tariff/",
    notes: "Summer-only campsite in a level five-acre parkland field on the eastern edge of Penzance, screened from the road by mature trees, with a stream along one side; Mount's Bay beaches a few minutes' walk. Tents, campervans, motorhomes and caravans, with or without hookup. Two toilet and shower blocks, one renovated in 2021 with seven individual wet rooms; dishwashing room with fridge freezers; washing machine and dryer. Takeaway café on site for breakfasts and light lunches. Tesco next door; Gulval's pub and Penzance's railway and bus stations about ten minutes' walk. Arrivals noon–8pm in July and August; after 8pm, park in the waiting area outside the gates until morning. Out by 10.30am. Book online; the system opens 2 January for 2027. Vehicles turn right into the site off the Penzance bypass, 25 yards from the Tesco roundabout, before the flyover rises; the lane access behind is for cars only. On foot, a gate at the roundabout",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 per dog a night, two per pitch at most",
      // Closed until 22 May 2027; the owner gives no closing date and says the
      // dates vary each year.
      season: null,
      price_per_night: 29,
      price_note: "campervan £6, two adults at £8 each and hookup £7, 2026; dog £2, awning £3, car £4. One adult £10; child under 13 £5",
      hookup: true,
    },
  },
  {
    slug: "castle-view-cl",
    name: "Castle View",
    kind: "stay",
    // Postcode centroid (TR20 8HQ), from the Club's listing. The Club's GPS is
    // 77 m north; OSM has no feature for the site. Position unconfirmed.
    lat: 50.14171, lon: -5.49529,
    // The Caravan and Motorhome Club's listing.
    address: "Rose in Vale Farm, Ludgvan, Penzance, TR20 8HQ",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/penzance/castle-view/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: a private family site on a working farm at Ludgvan, within a mile of the A30, looking over Mount's Bay to St Michael's Mount. Five hardstanding pitches with 16 A hookup on a lawned site; no toilets listed. The White Hart Inn five minutes' walk, Tremenheere Sculpture Garden 15; a bus stop five minutes' walk for Penzance and St Ives. Arrivals from 1pm, out by 11am. Directions and prices are for members only",
    // The Club's listing only; the owners have a Facebook page.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs, with a dog walk from the site",
      // The Club lists it open all year.
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "marazion-station-car-park",
    name: "Marazion Station car park",
    kind: "stay",
    // Centre of OSM way 7975255, the car park by the Station House café. The
    // TR17 0AA postcode centroid is 25 m east.
    lat: 50.12872, lon: -5.48976,
    address: "Marazion Station, Long Rock, TR17 0AA",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/marazion-station-tr17-0aa/",
    // Rules from the car park's page, updated 27 May 2026, and Cornwall
    // Council's motorhome parking page, updated 12 May 2026, which gives two
    // consecutive nights as an example of what the signs say. The overflow
    // field's rule is a 2022 park4night listing's.
    notes: "Cornwall Council long-stay car park at the old Marazion station, on the coast path between Long Rock and Marazion, with the beach in front and Marazion Marsh behind: 136 spaces, tarmac, open 24 hours, no height or weight limit. The one council car park in the Penzance area where self-contained motorhomes with their own toilet may stay overnight; no motorhome bays or facilities. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. Pay for every bay you cover. Penzance's Harbour, Wherrytown and Long Rock car parks ban motorhomes and campers 11pm–8am. In Marazion, Folly Field and its overflow field are St Aubyn Estates' ANPR car parks, and a park4night listing says the overflow allows no overnight parking. The Station House café is beside it. Pay and display (coins or card) or JustPark location 8412",
    verified: "2026-09-16",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "dove-meadows",
    name: "Dove Meadows",
    kind: "stay",
    // Centre of OSM way 636574861, "Dove Meadows". The TR17 0HH postcode
    // centroid, which the owner gives, is 209 m north-east.
    lat: 50.13087, lon: -5.48020,
    address: "Green Lane West, Marazion, TR17 0HH",
    phone: "01736 710854",
    email: "welcome@dovemeadows.co.uk",
    url: "https://www.dovemeadows.co.uk/tariff-2026/",
    notes: "Quiet family-run touring site on the western edge of Marazion, beside the marsh: four minutes' walk to the beach, ten to the town, with glimpses of St Michael's Mount from most pitches. Grass pitches only, marked and mostly gently sloping, with or without 10 A hookup; premium pitches 20–26 are level, with grass hardstanding matting and their own tap, and can be requested. Tents, campervans, motorhomes of all sizes and caravans. Toilets, showers at 50p for seven minutes, dishwashing shed, chemical and grey water disposal, recycling, ice packs, phone charging, wifi near the office, tiny shop. Fish and chip van twice a week in high season. No play area, campfires, gas or EV charging; BBQs raised off the ground. Reception 9.30am–7pm, closed 12.30–2pm. Arrivals 2–7pm, by arrangement to 8.30pm; gate closed at sundown; out by noon, no early arrivals. Book by enquiry form or phone: £50 a week non-refundable deposit, balance 14 days before arrival. One-night stays may carry a surcharge. Quiet after 10pm. Bus stop at the bottom of the lane; National Cycle Network route 3 passes the gate. Green Lane is narrow, shared with pedestrians, and doubles back at the turn off the seafront road; ignore sat nav at Crowlas and come in by the Newtown roundabout",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free, three per pitch at most. Tethered at all times, never left unattended, exercised and toileted off site. The main beach has summer restrictions; the dog-friendly section is further along",
      // 11 March–25 October in 2026; 11–13 March and 11–25 October premium
      // pitches only. The owner says normally March to October.
      season: { from: "03-11", to: "10-25" },
      price_per_night: 25,
      price_note: "hookup pitch with a campervan and two people, 7–30 September 2026; £22 14 March–2 April, 22–30 April and 1–10 October, £25 3–20 April and 1–21 May, £30 22 May–1 June, £26 June, £27 1–19 July, £35 20 July–6 September. Premium pitch £27–40, non-hookup £18–31. Extra adult £8, child £6, car £3. Walker's pitch for one person £10–12",
      hookup: true,
    },
  },
  {
    slug: "godolphin-arms-marazion",
    name: "Godolphin Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 59766029, "The Godolphin". The TR17 0EN postcode centroid,
    // which the owner gives, is 46 m west.
    lat: 50.12342, lon: -5.47453,
    address: "West End, Marazion, TR17 0EN",
    phone: "01736 888510",
    email: "godolphin@staustellbrewery.co.uk",
    url: "https://www.thegodolphin.com/our-rooms/",
    notes: "St Austell Brewery pub with rooms in a Georgian building on the seafront at Marazion, looking to St Michael's Mount. En-suite rooms, some with sea views, up stairs only: standard doubles and twins, signature and premium view doubles, twins and family rooms, and a deluxe suite; no air conditioning. Full breakfast included. Z-bed for a child of 3–12 £25 a night; no cots supplied. Check-in 3–10pm, out by 11am. Open 8am–11pm, Sunday to 10.30pm; food 8–11.30am and noon–9pm, to 9.30pm Friday and Saturday, Sunday breakfast to 10.30am. Free parking for residents booking direct in the adjacent Marazion short stay car park, one space per room; give the registration at reception. No EV charging. Reservations also on 0345 241 1133",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay, with a pack of treats, poo bags and beer. On a lead in public areas and never left alone in the room; allowed in most areas",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "wheal-rodney-holiday-park",
    name: "Wheal Rodney Holiday Park",
    kind: "stay",
    // Centre of OSM way 636574855, "Wheal Rodney", tagged as a caravan site; a
    // camp site way, 636574858, adjoins it. The TR17 0HL postcode centroid,
    // which the owner gives, is 38 m west.
    lat: 50.13109, lon: -5.46499,
    address: "Gwallon Lane, Marazion, TR17 0HL",
    phone: "01736 710605",
    url: "https://www.whealrodney.co.uk/camping-and-touring",
    // Arrival and departure times from campsites.co.uk; the owner's pages give
    // none.
    notes: "Family-run holiday park on the northern edge of Marazion, under 20 minutes' walk from the causeway to St Michael's Mount: lodges, glamping and touring pitches. Grass pitches 9 × 8 m for caravans and motorhomes under 7.5 m, two smaller campervan pitches for a T4 or T5, family and small tent pitches; all but the small tent pitch have hookup. Free power showers, washing up, laundry, device charging at reception, and a heated indoor pool at 32°C, free to guests, open from 9am. Licensed shop and reception 9am–7pm Monday–Saturday, 9am–6pm Sunday, half an hour earlier December–March. Winter pitches for vans and caravans all year; tents March to 31 October. Cancelling loses the deposit, and within six weeks the full balance; amendments before then £35. Check-in 1–6pm, out by 11am, directories say. Four minutes' drive to the A30",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Registered when booking; on a lead and under control on site at all times, and picked up after. Numbers on site are limited, so book early. Pitch 1, by the entrance, takes up to four dogs. Directories add a small nightly charge and no Dangerous Dogs Act breeds",
      season: "all-year",
      price_per_night: null,
      price_note: "shown only in the online booking; Pitchup lists hookup grass pitches from £18 for two adults",
      hookup: true,
    },
  },
  {
    slug: "marazion-touring-park",
    name: "Marazion Touring Park",
    kind: "stay",
    // Centre of OSM way 684351021, still named "Marazion Caravan & Motorhome
    // club". The TR20 9DU postcode centroid, which the owner gives, is 263 m
    // south-east.
    lat: 50.13531, lon: -5.43151,
    address: "St Hilary, Goldsithney, Penzance, TR20 9DU",
    phone: "01736 888008",
    email: "stay@maraziontouringpark.co.uk",
    url: "https://maraziontouringpark.co.uk/peaceful-caravan-park-in-marazion/",
    // The former Club site: the same postcode and phone number, and the Club
    // no longer lists it. Pitch sizes, amperage, times and the rules on dogs
    // and BBQs from campsites.co.uk.
    notes: "Quiet touring park in parkland at St Hilary, inland from Marazion; formerly the Caravan and Motorhome Club's Marazion site. 60 grass pitches, about 10 × 9 m, most with 10 A hookup and room for an awning; some need levelling blocks, which the booking says. Toilet and shower block now open, so all units are taken: tents, campervans, motorhomes and caravans. Small reception office; no entertainment. A public footpath runs through the park; visitors report to reception. BBQs raised off the ground; no campfires. Arrivals 1–7pm or dusk if earlier, out by 11am. Book online. From Marazion take the B3280 towards Goldsithney into St Hilary, then left into Chynoweth Lane; the site is on the right after a few hundred yards",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On a lead at all times on site, and waste picked up. Campsites.co.uk says one dog per booking, no Dangerous Dogs Act breeds",
      // Campsites.co.uk says open all year; the owner gives no dates.
      season: null,
      price_per_night: 20,
      price_note: "pitch for two people, from, campsites.co.uk; two nights minimum",
      hookup: true,
    },
  },
  {
    slug: "victoria-inn-perranuthnoe",
    name: "The Victoria Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 59633265, "Victoria Inn". The TR20 9NP postcode centroid, which
    // the owner gives, is 29 m south-west.
    lat: 50.11514, lon: -5.44414,
    address: "Perranuthnoe, Penzance, TR20 9NP",
    phone: "01736 710309",
    email: "reservations@victoriainn-penzance.co.uk",
    url: "https://victoriainn-penzance.co.uk/stay/",
    notes: "Family-run pub, restaurant and rooms in Perranuthnoe, run by Liam, Ruby and Dave. Three en-suite B&B rooms with a four-star AA rating: two cosy doubles, the Snugg rooms, and one large room; full Cornish breakfast. Seasonal menus and Sunday roasts; tapas only on Tuesdays 6–8pm. Private dining room for up to 40. Book rooms online, by email or phone",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "The two Snugg rooms are dog friendly; no charge or rules published",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "ednovean-farm",
    name: "Ednovean Farm",
    kind: "stay",
    // OSM node 1417826246, "Ednovian Farm". The TR20 9LZ postcode centroid,
    // which the owner gives, is 109 m north.
    lat: 50.11748, lon: -5.44038,
    address: "Ednovean Lane, Perranuthnoe, Penzance, TR20 9LZ",
    phone: "01736 711883",
    email: "info@ednoveanfarm.co.uk",
    url: "https://ednoveanfarm.co.uk/reservations/",
    notes: "B&B in a 17th-century granite farmstead at Perranuthnoe, in an acre of sub-tropical gardens looking over Mount's Bay to St Michael's Mount. Two en-suite doubles this year, each with its own entrance, terrace and private breakfast room: the Blue Room with sea views and the Apricot Room; the four-poster Pink Room is closed. Guests 16 and over. Check-in 4–6pm. Gated car park, one car per room. Cancellation within 30 days is charged at 75%. Book online, by phone or email",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: false,
      dogs_note: "No pets, in the house or left in the car",
      season: null,
      price_per_night: 100,
      price_note: "per room for two, B&B, 2026: seasonal rates £100–150. Minimum stays apply",
    },
  },
  {
    slug: "millstones-coastal-camping",
    name: "Millstones Coastal Camping",
    kind: "stay",
    // Postcode centroid (TR20 9NR), which the owner gives; OSM has no feature
    // for the site. Position unconfirmed.
    lat: 50.11558, lon: -5.44570,
    address: "Millstones, Perranuthnoe, Penzance, TR20 9NR",
    phone: "07715 318266",
    email: "millstonescoastalcamping@gmail.com",
    url: "https://www.millstones-coastal-camping.com/camping-caravan-club",
    // The owner also gives 01736 711349. The car park rule is a 2023
    // park4night listing's.
    notes: "Camping and Caravanning Club Certified Site for adult members only, on an 11-acre equestrian smallholding on the edge of Perranuthnoe; the entrance is before the village sign. 500 yards from the beach, the coast path close by, Marazion about 20 minutes' walk. Large pitches for up to four people, with 16 A hookup. No toilet or shower block. Choose any free pitch on arrival, at least 6 m from the next unit. Arrive after 1pm, leave by noon. Club membership can be taken on arrival, from £40 a year. Cancellation more than 21 days ahead refunded less the deposit. The Victoria Inn and two cafés in the village. The honesty-box car park by the shore at Perranuthnoe allows no overnight stays",
    verified: "2026-09-16",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Quiet, well-behaved dogs, on a lead on site; a paddock for off-lead exercise",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "chiverton-farm-cl",
    name: "Chiverton Farm",
    kind: "stay",
    // Postcode centroid (TR20 9PE), from the Club's listing; the Club's GPS is
    // 35 m east. OSM has no feature for the site.
    lat: 50.11373, lon: -5.42933,
    // The Caravan and Motorhome Club's listing.
    address: "Rosudgeon, Penzance, TR20 9PE",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/penzance/chiverton-farm/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: five grass and hardstanding pitches on three-quarters of an acre in the old orchard of a family-run dairy farm between Perranuthnoe and Rosudgeon, partly surrounded by trees. 16 A hookup; some pitches slope, levelling blocks needed. No toilets listed; battery charging, wifi, recycling, information room. No EV charging. Footpaths from the site join the coast path towards Prussia Cove or Perranuthnoe. Rosudgeon has a shop with post office and fuel, the Falmouth Packet Inn and a chip shop. Arrivals 11am–6pm. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs, with a dog walk from the site",
      // The Club lists it open 1 April–30 September 2026.
      season: { from: "04-01", to: "09-30" },
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "fawkes-kernow-cl",
    name: "Fawkes Kernow",
    kind: "stay",
    // Postcode centroid (TR20 9PL), from the Club's listing; the Club's GPS is
    // 128 m north-west. OSM has no feature for the site. Position unconfirmed.
    lat: 50.11862, lon: -5.42573,
    // The Caravan and Motorhome Club's listing.
    address: "Lancamshire Lane, Rosudgeon, Penzance, TR20 9PL",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/penzance/fawkes-kernow/",
    notes: "Caravan and Motorhome Club Certificated Location, members only, owned by a Club member: a one-acre lawned site on a working farm off Lancamshire Lane, for adults. Five hardstanding pitches with 16 A hookup, units up to 15 m. WC, not for the site's sole use. Pub, shop and village within a mile; bus stops a couple of minutes' level walk, searchforsites says. Arrivals from 1pm. Directions and prices are for members only",
    // The Club's listing only; no owner website found.
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing marks it ideal for dogs, with a dog walk from the site",
      // The Club lists it open all year.
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "crown-inn-goldsithney",
    name: "The Crown Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 662379751, "The Crown Inn". The TR20 9LG postcode
    // centroid, which the owner gives, is 29 m west.
    lat: 50.12537, lon: -5.43637,
    address: "Fore Street, Goldsithney, Penzance, TR20 9LG",
    phone: "01736 710494",
    url: "https://crowninngoldsithney.co.uk/stay",
    // The Trevelyan Arms' rooms from directory listings; its own site is an
    // introductory video only.
    notes: "Village pub in Goldsithney run by Connor and Tamsyn: open fires, local ales and gins, a seasonal menu; about a mile from the coast path. Two en-suite rooms, booked separately, each with a king-size bed, fridge, tea and coffee and a walk-in shower. No breakfast; the pub recommends cafés nearby. Kitchen Wednesday–Saturday noon–2pm and 5.30–8pm, Tuesday 5.30–8pm, Sunday and Monday 5.30–8pm with a pizza menu. The Trevelyan Arms, 45 m along Fore Street, also lets rooms, directories say",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner calls the pub dog friendly; the rooms aren't covered",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "kenneggy-cove-holiday-park",
    name: "Kenneggy Cove Holiday Park",
    kind: "stay",
    // Centre of OSM way 180209645, "Keneggy Cove Holiday Park". The TR20 9AU
    // postcode centroid, which the owner gives, is 75 m north-west.
    lat: 50.10830, lon: -5.41204,
    address: "Higher Kenneggy, Rosudgeon, Penzance, TR20 9AU",
    phone: "01736 763453",
    email: "enquiries@kenneggycove.co.uk",
    url: "https://www.kenneggycove.online/touring-pitches",
    notes: "Quiet family park with resident owners at Higher Kenneggy, in four acres of lawned gardens with panoramic sea views; an AA Gold Award. Thirty touring pitches, though licensed for 60, mostly level, among Mediterranean planting, for caravans, campervans and tents, with or without hookup; book early for hookup. Four holiday homes. Toilet and shower block with free hot water, sinks for dishes and clothes, laundry, wetsuit washing area. No bar or clubhouse; an on-site pizzeria, the Fat Gull. No noise after 10pm or before 8am. A ten-minute walk down a footpath to the coast path and Kenneggy Sands. Book by email or phone; booking needed at peak times, non-refundable deposit £15 a night, £45 minimum. The owners speak German, French and Italian",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£5 per dog on the owner's tariff",
      // The owner prices 21 May–27 September 2026 only.
      season: { from: "05-21", to: "09-27" },
      price_per_night: 43,
      price_note: "serviced pitch with electricity, a campervan and two people, 21 May–28 June and 7–27 September 2026; £47 29 June–6 September. Unserviced £36–40. Extra person over 3 £8. Single cyclists and hikers on enquiry",
      hookup: true,
    },
  },
  {
    slug: "coach-and-horses-rosudgeon",
    name: "The Coach and Horses Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 6562736736, "The Coach And Horses Inn". The TR20 9AW postcode
    // centroid, which the owner gives, is 30 m north-east.
    lat: 50.11287, lon: -5.40039,
    address: "Kenneggy Downs, Rosudgeon, Penzance, TR20 9AW",
    phone: "01736 763089",
    email: "info@coachandhorsespenzance.com",
    url: "https://www.coachandhorsespenzance.com/bandb/",
    notes: "Coaching inn of 1752 at Kenneggy Downs, set back from the A394 between Penzance and Helston behind a large car park. Five B&B rooms with wifi, tea and coffee; breakfast included, full English or lighter. Check-in from 5pm, out by 11am. Parking on site. Pub food in the restaurant or bar; function room free to book. Book tables and rooms by email. Buses to Penzance and Helston stop outside. A camping field behind the pub takes vans",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "CAMRA says children and dogs are welcome in the pub; the owner's site doesn't mention dogs",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "coach-and-horses-camping",
    name: "Coach and Horses Inn camping field",
    kind: "stay",
    // OSM node 6562736736, the pub; OSM has no feature for the field.
    // park4night's pin is 21 m north-west. Position unconfirmed.
    lat: 50.11287, lon: -5.40039,
    address: "Kenneggy Downs, Rosudgeon, Penzance, TR20 9AW",
    phone: "01736 763089",
    url: "https://park4night.com/en/place/152342",
    // park4night listing and reviews, rated 4.17 from 6, the latest September
    // 2025; facilities and dogs from Pitchup's listing. The owner's camping
    // page has no details.
    notes: "Camping field behind the Coach and Horses Inn, off the A394 at Kenneggy Downs: vans, caravans and tents, with hookup, six points in park4night's listing. Two showers and two toilets, basic but clean; outside cold tap; nowhere to wash up, a 2020 reviewer says. Pitchup lists chemical disposal and gas. Check in at the pub during opening hours. Some traffic noise from the main road",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Pitchup's listing allows dogs",
      season: null,
      price_per_night: 30,
      price_note: "with hookup, showers and toilets, a 2023 park4night reviewer says",
      hookup: true,
    },
  },
  {
    slug: "higher-pentreath",
    name: "Higher Pentreath Campsite",
    kind: "stay",
    // Centre of OSM way 232434309, "Higher Pentreath". The TR20 9TL postcode
    // centroid, which the owner gives, is 205 m south-east.
    lat: 50.10744, lon: -5.39481,
    address: "Higher Pentreath, Praa Sands, Penzance, TR20 9TL",
    phone: "01736 763240",
    email: "clare@higherpentreathcampsite.co.uk",
    url: "https://www.higherpentreathcampsite.co.uk/",
    notes: "Family-run campsite on the hillside above Praa Sands, open since the 1950s; six minutes' walk down the road to the beach. Sloping fields with flatter pitches here and there; most electric pitches, 6 × 6 m, are level, at the top of the lower field looking to the beach. One unit per pitch, 6 m apart; choose your own spot on non-electric pitches. Hikers' pitches are for coast path walkers only. No car park: vehicles stay on the pitch. Free showers, toilets, outside shower, laundry, hair dryers, ice pack freezer, washing-up sinks, charging lockers, emergency battery charging, free wifi strongest by the shower block field, honesty-box shop, bike rack. BBQs and campfires off the grass, on breeze blocks provided. A towing service when the slopes are wet. Check-in 2–6pm, later by email; out by noon. Book online direct only: 20% non-refundable deposit. 5 mph on site and the lane",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free; on a lead at all times, cleaned up after, not left alone in units. Banned and dangerous breeds refused",
      // Directories give 1 April–31 October; the owner gives no dates.
      season: null,
      price_per_night: 35.99,
      price_note: "electric pitch for up to four people, all seasons; non-electric £25.99, one person £16, hikers' pitch £14. Extra person £6.50, extra car £4, awning £3.50",
      hookup: true,
    },
  },
  {
    slug: "praa-sands-beach-car-park",
    name: "Praa Sands beach car park",
    kind: "stay",
    // Centre of OSM way 975259865, the gravel pay car park above the beach;
    // park4night's pin is 33 m south-west. A sanitary dump station, OSM node
    // 12663173046, is by the toilets 170 m west. park4night gives TR20 9TG.
    lat: 50.10414, lon: -5.39022,
    address: "Castle Drive, Praa Sands, Penzance",
    url: "https://park4night.com/en/place/33291",
    // park4night listings 33291 (4.47 from 86, latest September 2026), 370817
    // (the field car park) and 72520 (Maggie's Patch). No owner website found.
    notes: "Private pay car park above the western end of Praa Sands, on the coast path, where self-contained vans stay overnight: flat gravel, about 60 places, the front row overlooking the beach, steps down to the sand. ANPR cameras. Elsan point by the storage shed, free, with no rinse; fresh water from the attendant, £1 a bottle or £3 a tank; no grey waste. The public toilets by the slipway are often locked: Friends of Praa Sands volunteers opened them 9.30am–5.30pm in 2025, and a March 2026 reviewer found them closed. The Welloe and the Stones Reef beach bar alongside. Little or no phone signal. Reviewers say come in by Pengersick Lane, the bus route, not the lanes a sat nav picks. The sloping field car park by the Welloe has its own JustPark code and tariff, £15 for 24 hours in 2025, so moving between the two means paying again. Maggie's Patch, the small gravel car park opposite, charged £5 overnight 7.30pm–9am and £3 by day, reviewers say, though a 2023 reviewer was told by the owner she doesn't want overnight stays",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 15,
      price_note: "24 hours, reviewers say, July 2026",
      hookup: false,
    },
  },
  {
    slug: "praa-sands-east-parking",
    name: "Parking area above Praa Sands, east end",
    kind: "stay",
    // Centre of OSM way 975259875, an unnamed gravel parking area; park4night's
    // pin is 9 m away. park4night gives TR20 9TX.
    lat: 50.10023, lon: -5.37815,
    address: "Praa Sands, Penzance",
    url: "https://park4night.com/en/place/85161",
    // park4night listing and reviews, rated 4.58 from 66; the most recent
    // September 2026. No owner; OSM notes no sign saying who owns the land.
    notes: "Free gravel parking area for about four vehicles at the end of a lane above the eastern end of Praa Sands, on the coast path, with steps down to the beach and sea views. Popular with surfers and anglers, so full by day when the surf is up; quiet at night. No facilities; a bin close by. The lane is narrow, steep and rough, signed unsuitable for motorhomes: a Transit or LWB Transporter manages, anything over a MWB Sprinter struggles, reviewers say, and the approach from Germoe is easier than from Ashton. Reviewers stay a night at a time to keep on the right side of locals",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free, reviewers say, September 2026",
      hookup: false,
    },
  },
  {
    slug: "dropped-anchor-camping",
    name: "Dropped Anchor Sea View Camping",
    kind: "stay",
    // Centre of OSM way 850580737, "Dropped Anchor Camping Site"; park4night's
    // pin is 46 m north-east. The TR13 9QB postcode centroid, which the owner
    // gives, is 370 m south.
    lat: 50.09835, lon: -5.35582,
    address: "Trewavas Lane, Breage, Helston, TR13 9QB",
    phone: "07706 832152",
    email: "droppedanchor1@gmail.com",
    url: "https://www.droppedanchor.co.uk/tariffs",
    // Vans, water and chemical disposal from park4night, rated 4.97 from 32,
    // the latest August 2026. The Rinsey car park sign is a 2022 park4night
    // reviewer's.
    notes: "Off-grid campsite of an acre and a half down a no-through lane near Rinsey, run by Debbie since 2017; an Accommodation Way Maker on the South West Coast Path. Fifteen large pitches for up to two people and a vehicle, and five smaller ones for walkers and cyclists, each with its own fire pit, picnic bench and a view over Mount's Bay. No electricity: solar lighting, phones charged for 50p. Two shower rooms with free hot showers, flushing toilets, undercover washing-up with hot water, a small gas fridge, recycling, a horse-box honesty shop with logs and kindling. Campervans stay, and water and chemical disposal are available, park4night reviewers say. The coast path is about 20 minutes' walk at Rinsey, by field paths over Cornish walls or along the lane; not through the farm at the lane's end. The Lion and Lamb at Ashton is a flat mile, with buses to Helston and Penzance. Rinsey's National Trust car park is signed no overnight parking, gate closed at 9pm",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free, with a suggested £1–2 a night donation to the Last Chance Hotel animal charity. Under control, kept off other pitches, on a lead in the facilities area if they wander; cleaned up after",
      season: { from: "04-01", to: "09-28" },
      price_per_night: 19,
      price_note: "large pitch for two people and a vehicle, low season 2026; mid £23, high £27 (22–31 May, 18 July–31 August). One person with a vehicle £12–20; walkers and cyclists £9–12 a person. Extra adult £7, child 3–17 £3. One-night stays £2 extra",
      hookup: false,
    },
  },
  {
    slug: "tremorvu-campsite",
    name: "Tremorvu Campsite",
    kind: "stay",
    // OSM node 6643602585, "Trem" (name:en "Tremorvu Campsite"). The TR13 9TA
    // postcode centroid, which the owner gives, is 107 m north-east.
    lat: 50.11405, lon: -5.35992,
    address: "Tresowes Hill, Helston, TR13 9TA",
    phone: "01736 763074",
    email: "tremorvu@hotmail.co.uk",
    url: "https://www.tremorvucampsite.com/pitches/",
    notes: "Family-run campsite in seven acres of countryside at Tresowes Hill, below Tregonning Hill near Ashton, with distant sea views; for families and couples. Thirty grass pitches across four fields, with or without hookup, for tents, campervans, motorhomes and caravans; bell tents, glamping pods and a shepherd's hut. Free hot showers, family wet room, laundry, indoor and outdoor washing-up, ice pack freezers, chemical disposal, drinking water, free wifi; shop mid-July to end of August. BBQs and campfires in braziers. No EV charging or supermarket deliveries. Check-in noon–8pm, no later; out by 11am. Quiet 10.30pm–8am. Fees in full 30 days before arrival; deposits non-refundable. Last-minute stays by phone or just turn up. Praa Sands about 1.5 miles; the Lion and Lamb at Ashton 15 minutes' walk. Ignore sat nav: from the A394 at Ashton take Higher Lane about half a mile, then left at the blue milk churn and bench",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Up to two, free, outside the six-week summer holidays only",
      // Directories say open all year; the owner gives no dates.
      season: null,
      price_per_night: 32.5,
      price_note: "electric pitch for a campervan and two people, low season 2026; £37.50 in the summer holidays. Non-electric £25–30. Extra person £5. One person £16, hookup £5 more; walkers and cyclists £10–12",
      hookup: true,
    },
  },
  {
    slug: "queens-arms-breage",
    name: "The Queens Arms",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 561984885, "Queens Arms". The TR13 9PD postcode
    // centroid is 69 m south-west. Street from OSM's tags.
    lat: 50.10872, lon: -5.33265,
    address: "Pellor Road, Breage, Helston, TR13 9PD",
    // From CAMRA.
    phone: "01326 564229",
    url: "https://camra.org.uk/pubs/queens-arms-breage-138983",
    notes: "Country inn in the centre of Breage, beside the church: a long bar with a stove at each end, up to four changing ales, a dining room with a wood burner, a garden across the lane and a play area; Wednesday quiz. Two en-suite B&B rooms, a double and a king, CAMRA and directories say. Its website, queensarmscornwall.com, has expired and is for sale; it has a Facebook page. Five caravan and motorhome bays in the next field",
    // CAMRA and directory listings only; no working owner website.
    verified: null,
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Directories list the pub as dog friendly, one with dog-friendly accommodation; unconfirmed",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "queens-arms-breage-bays",
    name: "Queens Arms caravan bays",
    kind: "stay",
    // Centre of OSM way 561984885, the pub; OSM has no feature for the field.
    // Position unconfirmed.
    lat: 50.10872, lon: -5.33265,
    address: "Pellor Road, Breage, Helston, TR13 9PD",
    phone: "01326 564229",
    url: "https://camra.org.uk/pubs/queens-arms-breage-138983",
    // CAMRA's listing; the toilets from a Pitchup listing's search summary,
    // since Pitchup refuses automated requests.
    notes: "Five caravan and motorhome bays in the field beside the Queens Arms in Breage, with hookup and water taps, CAMRA says. No toilets or showers in the field; the pub's are open to guests during opening hours, Pitchup's listing says",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "mill-lane-campsite",
    name: "Mill Lane Campsite",
    kind: "stay",
    // OSM node 275664610, "Mill Lane Camp Site"; an unnamed camp site way,
    // 975758061, is 97 m north-west. The owner gives TR13 9LQ.
    lat: 50.08900, lon: -5.31733,
    address: "Mill Lane, Porthleven, TR13 9LQ",
    phone: "01326 573881",
    email: "milllanecampsite@outlook.com",
    url: "https://www.milllanecampsiteporthleven.com/pitches",
    notes: "Family-run caravan and camping site in the grounds of the Out of the Blue free house on Mill Lane, run by Kim and Simon Stone; a short level walk to Porthleven harbour. Large, level grass pitches for motorhomes, tents and small caravans, with or without hookup; fully serviced hardstanding pitches with water, electricity and grey waste; a walker's pitch for a single small tent. Stone-chip road round the top field; a bottom field opens in the warmer months. Ladies' and gents' toilets and showers, free wifi, chemical disposal, washing-up. The pub sells Spingo from the Blue Anchor in Helston and bar snacks only; pool, live sport and music, bingo Fridays 7pm. Book by email with dates and pitch type; not confirmed until they reply; payment on arrival. Bus stop at the site",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dog-friendly; cleaned up after, on leads where needed. Open spaces for walks nearby",
      season: null,
      price_per_night: null,
      price_note: "not published; directories say from £20",
      hookup: true,
    },
  },
  {
    slug: "treza-camp-site",
    name: "Treza Camp Site",
    kind: "stay",
    // Postcode centroid (TR13 9LY), which the owner gives; OSM has no feature
    // for the site. Position unconfirmed.
    lat: 50.09236, lon: -5.31347,
    address: "Treza Farm, Torleven Road, Porthleven, TR13 9LY",
    phone: "07968 067373",
    email: "wendy@porthlevencamping.co.uk",
    url: "https://trezacamping.co.uk/",
    // Vans, caravans, dogs and campfires from Camping Cornwall's page for the
    // family's two sites, campingcornwall.net; directions from its older Treza
    // page.
    notes: "Basic campsite in two fields on Treza Farm, on Porthleven's northern edge, 15 minutes' walk to the harbour; no set pitches, choose your own spot, with the bay on the horizon from the top. Tents and campervans; no caravans. No electricity. Two wooden cabins of individual toilets and hot showers, washing-up, chemical disposal. Campfires allowed; no amplified music. Book with Wendy by email or phone; cards accepted. From the B3304, turn right into Gibson Way at the Porthleven sign, right at the next roundabout past the school, and the site is at the end round the corner on the left. EV chargers at the bottom of Tolponds Road. Penrose Camp Site, across the village, is the same family's",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 20,
      price_note: "two adults at £10 each, facilities included; child under 16 £5",
      hookup: false,
    },
  },
  {
    slug: "penrose-camp-site",
    name: "Penrose Camp Site",
    kind: "stay",
    // Centre of OSM way 233856005, "Penrose Camp Site". The TR13 0RB postcode
    // centroid, which the owner gives, is 418 m north.
    lat: 50.08175, lon: -5.30393,
    address: "Higher Penrose Farm, Penrose, Porthleven, TR13 0RB",
    phone: "07974 186283",
    email: "martin@campingcornwall.net",
    url: "http://campingcornwall.net/PenroseCampsite/",
    notes: "August-only field campsite at Higher Penrose Farm, just off the coast path on the edge of Porthleven towards Loe Bar and the Penrose estate walks; the harbour a short walk. No set pitches: choose your own spot. Tents and campervans; no caravans. Showers, flush toilets, washing-up sinks, chemical disposal; no electricity. Campfires allowed. Book with Martin by phone or email. Treza Camp Site, across the village, is the same family's",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome",
      season: { from: "08-01", to: "08-31" },
      price_per_night: 20,
      price_note: "two adults at £10 each, facilities included; child £5",
      hookup: false,
    },
  },
  {
    slug: "harbour-inn-porthleven",
    name: "Harbour Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 667302063, "Harbour Inn". The TR13 9JB postcode centroid, which
    // the owner gives, is 16 m south-east.
    lat: 50.08464, lon: -5.31600,
    address: "Commercial Road, Porthleven, TR13 9JB",
    phone: "01326 573876",
    email: "harbourinn@staustellbrewery.co.uk",
    url: "https://www.harbourinnporthleven.co.uk/our-rooms/",
    // Kittos Field's rules and tariff from its Cornwall Council page.
    notes: "St Austell Brewery pub with rooms on the harbourside in Porthleven, recently refurbished, with a garden terrace. Fifteen rooms on the ground and first floors, stairs only: standard doubles and twins, one family room with a children's sofa bed, signature view doubles and twins, a premium view double and a deluxe suite; no air conditioning. Full breakfast included, 7.30–10am, weekends from 8am. Check-in from 3pm, out by 11am. Open 7.30am–11pm, weekends from 8am, Sunday to 10.30pm; food to 11am, Sunday 10.30am, and noon–9.30pm. Small free car park beside the pub, first come; no EV charging. Kittos Field, the council car park close by, is for cars, motorcycles and coaches, with no sleeping or overnight camping: free 4pm–9am, £7 for 24 hours April–October. Reservations also on 0345 241 1133",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay, with a ball, treats, poo bags and beer. On a lead in public areas, never left alone in the bedroom, not on furniture or beds; allowed in most areas",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "shrubberies-hill-parking",
    name: "Shrubberies Hill car park",
    kind: "stay",
    // Centre of OSM way 555280108, a free parking area off Shrubberies Hill;
    // park4night's pin is 10 m away. park4night gives TR13 9EA.
    lat: 50.08286, lon: -5.31218,
    address: "Shrubberies Hill, Porthleven",
    url: "https://park4night.com/en/place/278555",
    // park4night listings 278555 (4.68 from 50, the latest September 2026) and
    // 122285 (Cliff Road). Council car park rules from each car park's page;
    // the harbour charges from a news report; Withy Field from Porthleven CIC.
    notes: "Free gravel car park above the east side of Porthleven, beside a playground and playing field, looking over the harbour town to the sea: about 20 places, half of them level, a reviewer says, and no signs about overnight stays. Several vans most summer nights in 2026. No toilets or water; the harbour toilets are 10–15 minutes' walk; take rubbish away. Picnic bench; grass for dogs. In 2024 an aggressive man ordered one van out, saying it isn't a campsite, and another reviewer was woken by people knocking on vans at midnight; reviewers stay a night or two to keep it open. Porthleven's council car parks, Kittos Field and Highburrow, ban sleeping and overnight camping. The Harbour and Dock Company brought pay and display to Commercial Road, up to the Bickford-Smith Institute, from late April 2026, so the free harbourside spot by the Institute's toilets on park4night may no longer be; reviewers disagree. Withy Field on Mill Lane, run by Porthleven CIC, has three spaces for larger vehicles, £3.50 for 2–24 hours, ANPR, and says nothing about overnight stays",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free, reviewers say, September 2026",
      hookup: false,
    },
  },
  {
    slug: "beacon-crag",
    name: "Beacon Crag",
    kind: "stay",
    // Centre of OSM way 67339769, "Beacon Crag". The TR13 9LA postcode
    // centroid, which the owner gives, is 5 m away.
    lat: 50.08585, lon: -5.32570,
    address: "West End, Porthleven, TR13 9LA",
    phone: "07815 311291",
    email: "bookings@beaconcrag.com",
    url: "https://beaconcrag.com/",
    notes: "Victorian house built in 1887 for a local artist, in five acres of private clifftop grounds west of Porthleven harbour, with terraced lawns down to the sea and its own access to the rocky coves. Four en-suite rooms, all with sea views: king-size doubles, a suite with a large bath and double shower, and a room made up as a twin or super king. Continental breakfast in the room; TV, wifi, mini fridge, tea and coffee. Ample parking. Open all year. Two nights minimum; 25% non-refundable deposit, the rest a week before by bank transfer, PayPal or cheque. Rooms from 4pm, out by 10.30am. Weddings held in the grounds",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: "all-year",
      price_per_night: 100,
      price_note: "per room per night, from; Bedroom 1 from £110, the suite from £120",
    },
  },
  {
    slug: "halzephron-inn",
    name: "Halzephron Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 354484678, "Halzephron Inn". The TR12 7QB postcode centroid,
    // which the owner gives, is 80 m south.
    lat: 50.05573, lon: -5.27441,
    address: "Gunwalloe, Helston, TR12 7QB",
    phone: "01326 240406",
    url: "http://halzephron-inn.co.uk/?page_id=17",
    // Dogs from ITV News (14 Nov 2019) and directory listings; the owner's
    // pages don't mention them.
    notes: "Pub near Gunwalloe, run by Dave, Ian and Claire since 2013, with picnic tables looking over Mount's Bay; the owners date it to 1468 and its smuggling history. The coast path is 300 m away down the lane opposite. Two cosy double rooms with en-suite shower and WC and countryside views: TV, tea and coffee, fresh milk daily. Full English breakfast included, 7–10am, or when you ask the night before. Rooms from midday; any day to any day; guaranteed by card, or a cheque for £20 a person. Bar open all day, with afternoon and cream teas; lunch from noon, dinner 6–9pm. Book tables by phone, not the contact form",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. Directories say both rooms take dogs; ITV called it Cornwall's most dog-friendly pub in 2019, after gold at the Cornwall Tourism Awards",
      season: null,
      price_per_night: 125,
      price_note: "double room, B&B; single occupancy from £85",
    },
  },
  {
    slug: "halzephron-inn-parking",
    name: "Halzephron Inn car park",
    kind: "stay",
    // Centre of OSM way 563703461, the pub's customer car park; park4night's
    // pin is 7 m away. park4night gives TR12 7QB.
    lat: 50.05606, lon: -5.27442,
    address: "Gunwalloe, Helston, TR12 7QB",
    phone: "01326 240406",
    url: "https://park4night.com/en/place/168539",
    // park4night listing and reviews, rated 4.58 from 33, the latest September
    // 2026. The owner's site says nothing about vans.
    notes: "Vans stay overnight at the Halzephron Inn if they eat there and ask first, reviewers say; ringing ahead and booking a table is advised, as the pub fills. The pub's own tarmac car park is small and fairly flat, beside a quiet road. Most 2025–2026 reviewers slept in the grass overflow car park beside it with the staff's blessing, but earlier ones were told the overflow is someone else's land and to move to the pub car park at night. The overflow's entrance is narrow: a panel van or 2.5 m-wide truck camper squeezes in, nothing larger. Deliveries start around 7am. Staff filled one van's drinking water. Gunwalloe Fishing Cove down the lane opposite",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free if you eat in the pub, reviewers say, September 2026",
      hookup: false,
    },
  },
  {
    slug: "polurrian-hotel",
    name: "Polurrian on the Lizard",
    kind: "stay",
    // OSM node 498121188, "Polurrian Hotel". The TR12 7EN postcode centroid,
    // which the owner gives, is 118 m east.
    lat: 50.02299, lon: -5.25414,
    address: "Polurrian Road, Mullion, Helston, TR12 7EN",
    phone: "01326 240421",
    email: "info@polurrianhotel.com",
    url: "https://www.polurrianhotel.com/faqs",
    notes: "Clifftop hotel above Polurrian Cove, built in 1890 and rebuilt after a fire in 1909, where Marconi stayed in 1901; part of the Loxley Collection. Inland, sea view, garden deluxe sea view and family rooms and a three-bedroom Island View Suite, with self-catering villas and cottages. Staying open through an £11 million redevelopment: an infinity pool, ten more rooms and new spa and event spaces due in spring 2027. Indoor pool, seasonal outdoor pool, hot tub, small gym, tennis, beachside sauna; pool adults only 7–9.30pm. Polurrian Cove, reached only on foot, is ten minutes along the coast path. Breakfast 8–10am; main menu noon–9pm, to 9.30pm in summer; room service. Check-in from 3pm, out by 11am. Free parking. Cancellation within seven days charged at 70%. Book direct for 10% off with the guest loyalty rate",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Well-behaved dogs £20 a night; check with reservations that the room chosen suits a dog. Bowls, a blanket and treats provided",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "mullion-cove-hotel",
    name: "Mullion Cove Hotel",
    kind: "stay",
    // Centre of OSM way 226932329, "Mullion Cove Hotel". The TR12 7EP postcode
    // centroid, which the owner gives, is 153 m east.
    lat: 50.01690, lon: -5.25769,
    address: "Mullion Cove, Helston, TR12 7EP",
    phone: "01326 240328",
    email: "enquiries@mullion-cove.co.uk",
    url: "https://mullion-cove.co.uk/the-hotel/dog-friendly-hotel",
    notes: "AA four-star hotel and spa on the cliff above Mullion Cove harbour, on the coast path; an AA rosette every year since 2010. Premier sea view, sea view, partial sea view, classic and cosy classic rooms, and suites, all en suite; self-catering harbour apartments. Spa with a clifftop outdoor hot tub, leisure club. Breakfast 8–10am; lunch 12.30–9pm in the Glenbervie bar; dinner in the Atlantic View restaurant 6–8.45pm; non-residents welcome. Reception 8am–9pm. Check-in from 3pm, out by 11am. Free parking for 50 cars. Cancelling within 14 days loses the deposit unless the room is re-let, and up to 66% may be charged. A two-night Walking Break includes B&B, a packed lunch, a walkers' map, a leg and foot treatment and the spa",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms in every room category; £10 a night, with a welcome pack. Bring the dog's own bed, covers and food. On a lead in and around the hotel, towelled off in the porch, not left in the room when you're off site. Allowed in the bistro, the Doggy Lounge and two of the three lounges",
      season: null,
      price_per_night: null,
      price_note: "Walking Break, two nights B&B, from £205 per person 23 September–6 April, £285 16 May–22 September",
    },
  },
  {
    slug: "old-inn-mullion",
    name: "The Old Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 6550785020, "Old Inn". The TR12 7HN postcode centroid, which the
    // owner gives, is 60 m south.
    lat: 50.02794, lon: -5.24283,
    address: "Churchtown, Mullion, Helston, TR12 7HN",
    phone: "01326 240240",
    email: "enquiries@oldinnmullion.co.uk",
    url: "https://oldinnmullion.co.uk/stay/",
    notes: "Thatched, Grade II listed 16th-century inn in the centre of Mullion village, partnered with St Austell Brewery; tenants Tiggy and Ryan since September 2025. Five large en-suite rooms with their own entrance away from the bar: three doubles and two family rooms with a double and a single; shower rooms, one with a bath. Full English breakfast included. Expect noise from the bar and on live music nights. Check-in from 3pm, out by 11am. Book online, through Booking.com or by email; paid at booking, and direct bookings cancelled within 14 days are charged in full. Food daily noon–2.30pm and 5.30–8.30pm; bar to 11pm, midnight Friday and Saturday. Car park opposite",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog friendly throughout, rooms included. Not left alone in the room, kept off beds and furniture; damage or extra cleaning charged",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "mullion-cove-car-park",
    name: "Mullion Cove car park",
    kind: "stay",
    // Centre of OSM way 146292948, "Mullion Cove"; park4night's pin is 25 m
    // north-east. park4night gives TR12 7EU.
    lat: 50.01741, lon: -5.25109,
    address: "Nansmellyon Road, Mullion",
    url: "https://park4night.com/en/place/236328",
    // park4night listings 236328 (4.63 from 49, the latest June 2026) and
    // 137735 (Poldhu). The National Trust rule is from its car parking FAQs,
    // via a search summary, since its site refuses automated requests. No
    // owner found for this car park.
    notes: "Pay and display gravel car park above Mullion Cove on the road down from the village, where vans stay overnight: about 30 places, mostly flat, fields and a stream behind, sheltered. Ticket machine in the outbuilding at the entrance, coins only; it was missing for a while in 2024. A 2024 sign said the car park is patrolled. Bins, often full in summer. No toilets; the public toilets are five minutes' walk down at the cove. Little or no phone signal. Five to ten minutes' walk to the harbour; Mullion village has a Co-op and two pubs. A bus stop opposite Mullion Cricket Club, 500 m up the road. The car park further down towards the cove allows no overnight parking, a 2026 reviewer says. Poldhu Cove's beach car park is signed no motorhomes or campers 11.30pm–8am. The National Trust allows no overnight parking in any of its car parks, Kynance Cove and Lizard Point included",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 5,
      price_note: "24 hours, cash, reviewers say, June 2026",
      hookup: false,
    },
  },
  {
    slug: "teneriffe-farm-campsite",
    name: "Teneriffe Farm Campsite",
    kind: "stay",
    // Centre of OSM way 221377916, "Teneriffe Farm Campsite". The TR12 7EZ
    // postcode centroid, which the owner gives, is 91 m west.
    lat: 50.00474, lon: -5.24876,
    address: "Teneriffe Farm, Predannack, Mullion, Helston, TR12 7EZ",
    url: "https://www.nationaltrust.org.uk/holidays/cornwall/teneriffe-farm-campsite",
    // The National Trust's campsite page. Its guide page, with directions and
    // EV charging, refused automated requests.
    notes: "National Trust campsite at Predannack with far-reaching sea views, ten minutes' walk from the coast path between Mullion Cove and Kynance; Mullion village about 40 minutes' walk. Three grass fields, one open all season and two at busy times: 20 pitches in low season, 60 in high. All pitches grass, with or without hookup, pre-allocated; tents, campervans, motorhomes, trailer tents and caravans. Four basic pods. Toilets, showers, laundry, washing-up, chemical disposal, shop, wifi; accessible toilet, shower and washing-up. Raised BBQs; no campfires. Check-in from 2pm, out by 11am. One night minimum. Four adults at most per booking, together or separately. Book online",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Two per pitch. Two of the four pods take dogs",
      season: { from: "03-27", to: "10-31" },
      price_per_night: null,
      price_note: "shown only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "kynance-camping",
    name: "Kynance Camping",
    kind: "stay",
    // OSM node 11108337461, "Kynance Camping"; park4night's pin is 42 m
    // south-west. The TR12 7FA postcode centroid, which the owner gives, is
    // 244 m south-east.
    lat: 49.97354, lon: -5.20555,
    address: "The Lizard, Helston, TR12 7FA",
    phone: "07534 616006",
    email: "kynancecamping@gmail.com",
    url: "https://www.kynancecamping.co.uk/",
    // Water, chemical disposal and the price from park4night reviews, rated
    // 4.54 from 28, the latest August 2026.
    notes: "Family-run pop-up campsite in a twelve-acre flat field on the edge of the Lizard: seven minutes' walk into the village, 20 minutes off-road to Kynance cliffs. Basic and off-grid: solar lighting, hot water by LPG, which occasionally runs low. Showers, washing-up area, flush and eco toilets, recycling, phone charging. Tents, motorhomes, backpackers; bell tents for hire. BBQs and campfires allowed; fire pits and wood extra. Large pitches, reviewers say. Fresh water and chemical disposal but no grey water disposal, reviewers say. Book online for July–September; the site is signed on the right as you enter the village. The 34 bus stops at the entrance, the owner says",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The owner calls it dog friendly; no rules published",
      season: { from: "07-01", to: "09-30" },
      price_per_night: null,
      price_note: "£12.50 a person, a July 2026 park4night reviewer says",
      hookup: false,
    },
  },
  {
    slug: "lizard-a3083-layby",
    name: "Layby on the A3083, The Lizard",
    kind: "stay",
    // park4night's pin; OSM has no feature for the layby. Position unconfirmed.
    lat: 49.97480, lon: -5.20390,
    address: "A3083, The Lizard, Helston",
    url: "https://park4night.com/en/place/371855",
    // park4night listings 371855 (4.38 from 13, the latest September 2026) and
    // 193102 (Lizard Green).
    notes: "Free, deep layby on the A3083 at the northern edge of Lizard village, where vans stay overnight: flat, room for three or four small or medium vans, no signs restricting parking. No bins or facilities. Good EE and Vodafone signal. The lighthouse fog horn sounds every 30 seconds in fog, and between 2023 and 2024 several reviewers were hooted at by passing cars in the night. Ten minutes' walk to the village pubs. Lizard Green car park in the village is by donation, with public toilets, but signed no overnight stays and no large vehicles; a van parked there at 7.30pm in 2024 found a note on its windscreen an hour later. The National Trust's Kynance Cove and Lizard Point car parks allow no overnight parking",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free, reviewers say, September 2026",
      hookup: false,
    },
  },
  {
    slug: "henrys-campsite",
    name: "Henry's Campsite",
    kind: "stay",
    // Centre of OSM way 221376688, "Henry's Campsite". The TR12 7NX postcode
    // centroid, which the owner gives, is 114 m north-east.
    lat: 49.96870, lon: -5.20702,
    address: "The Lizard, Helston, TR12 7NX",
    phone: "01326 290596",
    email: "henryscampsite@gmail.com",
    url: "https://www.henryscampsite.co.uk/faqs",
    notes: "Small family-run campsite at the top of Caerthillian Valley with sea views and sunsets, two minutes' walk from the Lizard village centre and ten to the coast path; Kynance Cove 25 minutes, Polpeor Cove 20. Mostly level pitches, all with hookup at extra cost, some with sea views, among exotic planting and partial walls; ducks and chickens roam free. Four showers at 40p for three minutes in 20p coins, seven unisex toilets, hot water in the basins, washing-up, washing machine and tumble dryer, hair dryer, recycling, ice packs frozen or lent, charging at reception, 50p for a phone. Shop with groceries, gas, charcoal and Old Rosie cider. Own raised fire pit or a rented brazier. One vehicle per pitch; no e-bikes or scooters on site. Quiet from 10.30pm. Arrive from 12.30pm, leave by noon. Book by email, phone or the website form, with a non-refundable deposit, or turn up and try. In 2026 every weekend was booked until late September",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Not on site during the summer holidays. Otherwise on a lead on site and exercised off site",
      season: "all-year",
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "top-house-inn",
    name: "The Top House Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 345743102, "The Top House Inn". The TR12 7NQ postcode
    // centroid, which the owner gives, is 49 m west.
    lat: 49.96851, lon: -5.20411,
    address: "The Square, Lizard, Helston, TR12 7NQ",
    phone: "01326 450098",
    email: "info@thetophouseinn.co.uk",
    url: "https://thetophouseinn.co.uk/accommodation/",
    // Street from OSM's tags.
    notes: "200-year-old inn on the square in Lizard village, the southernmost pub in the UK; St Austell ales and two guest beers. Eight four-star en-suite rooms named after local coves, in a former hotel block beside the pub, away from bar noise: twins, doubles, a ground-floor room for guests needing help with mobility, a large family room with bunks, and a king-size suite with sea views. Free wifi. Room only, or with breakfast and evening meal packages. Bar noon–11pm Monday–Thursday, to midnight Friday and Saturday, to 10pm Sunday. Food Tuesday–Saturday noon–2.30pm and 5.30–8.30pm, Sunday noon–4pm; none on Monday. Book rooms online",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "Well-behaved dogs in the bar only; no pets in the rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "housel-bay-hotel",
    name: "Housel Bay Hotel",
    kind: "stay",
    // Centre of OSM way 617004194, "Housel Bay Hotel". The TR12 7PG postcode
    // centroid, which the owner gives, is 51 m north-east.
    lat: 49.96480, lon: -5.19685,
    address: "Housel Bay, Lizard, Helston, TR12 7PG",
    phone: "01326 567500",
    email: "stay@houselbay.com",
    url: "https://www.houselbay.com/dog-friendly",
    notes: "The most southerly hotel on the British mainland, on the cliff above Housel Bay, with the coast path from the garden gate and Housel Cove a short walk. 23 rooms: panoramic view, refurbished in January; ocean view, cosy and with 1980s bathrooms; roomy country view and country view with wet rooms; cosy rooms for walkers travelling light; family rooms with bunks. Bay House next door sleeps eight. Fallowfields tasting-menu restaurant, Michelin recommended; the Terrace; Marconi's Bar; a snug and a studio. The Lizard lighthouse is close: its light can't be dimmed and the fog horn sounds in fog; earplugs at reception. Breakfast included when booked direct. Check-in from 3.30pm, out before 11am. Free parking; give your registration at reception. Flexi-rate deposits are non-refundable but transferable within 12 months if you cancel more than five days ahead",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Four dog-friendly rooms: both family rooms, bookable online, and one country view and one ocean view room, by email or phone. £20 per dog per night, two at most; arriving with an unbooked dog may be refused. On a lead in and around the hotel and garden, off furniture and beds, not left in the hotel when you're off site. Allowed in the Terrace, Marconi's Bar and the garden, not Fallowfields or the Snug. Towel and bowl in the room; paw wash by reception",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "haelarcher-farmhouse",
    name: "Haelarcher Farmhouse",
    kind: "stay",
    // Centre of OSM way 345743125, "Haelarcher Farmhouse". The TR12 7NN
    // postcode centroid, which the owner gives, is 78 m south.
    lat: 49.96783, lon: -5.20555,
    address: "Lizard Head Lane, The Lizard, Helston, TR12 7NN",
    phone: "01326 291188",
    email: "info@haelarcher.co.uk",
    url: "https://www.haelarcher.co.uk/rooms",
    notes: "B&B in a farmhouse on Lizard Head Lane, a brief walk from the village and a stroll from the coast path. Two sea-view rooms for two or three with private bathrooms, Kynance and Lighthouse; Polpeor and Bass Point doubles and the Pistil Meadow single share a bathroom. A converted Royal Navy Lynx helicopter in the garden sleeps two, over-18s only, with its own toilet and shower. Breakfast included. Free parking and wifi. Discount for three nights or more. Book online, by phone or email; mobile 07581 228616",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "little-trethvas",
    name: "Little Trethvas Camping & Touring",
    kind: "stay",
    // Centre of OSM way 509691818, "Little Trethvas Holidays". The TR12 7AT
    // postcode centroid, which the owner gives, is 103 m north-west.
    lat: 49.99175, lon: -5.20825,
    address: "The Lizard, Helston, TR12 7AT",
    phone: "01326 290344",
    url: "https://www.campsiteslizard.co.uk/touring-and-camping/",
    notes: "Small, friendly campsite and touring site run by Liz and Mike inland on the Lizard, with walks to Kynance, Mullion, Cadgwith and Lizard village from the site. 29 pitches: seven electric hardstandings, two extra-large and twelve large electric grass pitches, four extra-large and four large non-electric. Free hot showers, six showers and five toilets, dishwashing, fridges and freezer, washing machine, tourist information, free wifi. Also static caravans, cottages and glamping. Out of season the seven hardstandings only, by appointment. Book online or by phone; mobile 07790 236045",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs £1.50 a night, two per pitch at most; on a lead on site and kept off the chickens",
      // Hardstandings out of season by appointment; the owner gives no dates.
      season: null,
      price_per_night: null,
      price_note: "by phone; small pup tent £1 a night extra",
      hookup: true,
    },
  },
  {
    slug: "cadgwith-camping",
    name: "Cadgwith Camping",
    kind: "stay",
    // OSM node 8908073371, "Cadgwith Camping"; park4night's pin is 85 m
    // north-west. The TR12 7LQ postcode centroid, which the owner gives, is
    // 737 m north-west.
    lat: 49.98222, lon: -5.18767,
    address: "Gwavas Jersey Farm, Ruan Minor, Helston, TR12 7LQ",
    phone: "07973 690232",
    email: "contact@gwavasjerseyfarm.co.uk",
    url: "https://www.gwavasjerseyfarm.co.uk/staying-with-us",
    // Vans, levelling, access and chemical waste from park4night reviews, rated
    // 4.71 from 62, the latest September 2026.
    notes: "Low-impact campsite in a large field on a working Jersey farm at Gwavas, half a mile above Cadgwith Cove, with sea views from every pitch; the coast path two minutes' walk below. Hot showers, composting toilets, a seasonal food van for breakfast and evening meals. No hookup. Vans and motorhomes stay; bring levelling chocks. Unstaffed: ring the numbers on the board at the gate. The owner empties chemical toilets, reviewers say. The lanes in are narrow and hedged: a 7.5 m motorhome only just made it. Fire pits and logs from the farm. The farm also does B&B. Second phone 07780 727972",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The owner calls it dog friendly; no rules published",
      // The owner says open all summer; reviewers found it closing in September.
      season: null,
      price_per_night: 25,
      price_note: "van and two people, no hookup, reviewers say, 2025–2026",
      hookup: false,
    },
  },
  {
    slug: "cadgwith-cove-inn",
    name: "The Cadgwith Cove Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 764086596, "The Cadgwith Cove Inn". The TR12 7JX
    // postcode centroid, which the owner gives, is 38 m south-west.
    lat: 49.98775, lon: -5.17960,
    // Street from OSM's tags.
    address: "New Road, Cadgwith, Helston, TR12 7JX",
    phone: "01326 290513",
    email: "hello@cadgwith-coveinn.com",
    url: "https://cadgwithcoveinn.com/rooms/",
    notes: "Inn over 400 years old in the middle of Cadgwith Cove, on the coast path, run by landlord Gary and landlady Victoria, both born and raised in Cadgwith; open all year, 8.30am–11.30pm. Seven rooms for two, three or four: standard double and twin with shared bathroom, double and twin with private bathroom, an economy double, a sea-view double and a sea-view family room. Free Starlink wifi. No disabled access. Check in from 3pm, out by 10–10.30am. Breakfast 8.30–9.30am, continental or cooked. Parking very limited and not reservable: three spaces behind the garage and four in front; otherwise drop luggage at the passing place and park in the village car park. Food daily noon–3pm and 5–8.30pm, with takeaways; lobster in season on 24 hours' notice; Sunday roast October–Easter",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner calls the inn very dog friendly but doesn't say whether rooms take dogs. Directories say one dog per room, £10 a night",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "chyheira",
    name: "Chyheira",
    kind: "stay",
    // Centre of OSM way 688585363, "Chyheira B&B". The TR12 7LQ postcode
    // centroid, which the owner gives, is 53 m north-east.
    lat: 49.98535, lon: -5.19697,
    address: "Grade Ruan, Ruan Minor, Helston, TR12 7LQ",
    phone: "01326 290343",
    email: "info@chyheira.co.uk",
    url: "https://www.chyheira.co.uk/booking-info",
    notes: "B&B in the owners' family home, a 1907 farmhouse at Grade, near St Grada church, inland between Lizard village and Cadgwith; Cadgwith Cove an easy stroll. Three en-suite rooms: a double looking over countryside to the church, a double or super king/twin over the front garden, and a double with a shower over the bath. TV and DVD, free wifi, hair dryer, tea tray. Rooms from 4pm; non-smoking. Some dates have a two-night minimum: ask about single nights. Discounts for longer stays. Booking direct through the site is cheaper",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome. Not on the bed, not in the breakfast room at breakfast unless the other guests are happy, and not off the lead in the garden, which isn't fully fenced",
      season: null,
      price_per_night: 90,
      price_note: "two sharing, B&B, 2026 rates broadly £90–120; single occupancy £20 less",
    },
  },
  {
    slug: "chy-carne",
    name: "Chy Carne Holiday Park",
    kind: "stay",
    // Centre of OSM way 140066582, "Chy Carne Holiday Park". The TR12 7LX
    // postcode centroid, which the owner gives, is 135 m south.
    lat: 50.00541, lon: -5.17439,
    address: "Kuggar, Ruan Minor, Helston, TR12 7LX",
    phone: "01326 290200",
    email: "enquiries@chycarne.co.uk",
    url: "https://chycarne.co.uk/lizard-campsite/",
    notes: "Family-owned AA 4-pennant park at Kuggar, ten minutes' walk from Kennack Sands; holiday caravans too. Over 100 pitches, at least 10 × 8 m, all for tents, caravans, motorhomes and campervans: level grass hookup pitches in the main touring field (1–29) and the Tiers (30–43, partial side sea views); hookup pitches in the camping field (44–89), some slightly sloping, with sea views, blocks and help levelling on hand; non-electric grass pitches in Kennack Field. Choose your pitch when booking direct. Water points, chemical and grey waste disposal. Showers 50p for five minutes; summer shower blocks open at Whitsun and in peak season. Launderette, dishwashing, wifi, play areas. Shop and off-licence 9am–9pm in peak season, limited otherwise. Big Daddy's pizza takeaway 6–9pm at Whitsun and in the summer holidays, open to non-residents. Fire pits for a nightly charge. No EV charging, and none from hookups. Pitches 2–8pm, held until 8pm; out by 11am. Busy in July and August; quiet out of season, when many facilities are closed. Ignore sat nav, which strands vans in Cadgwith: take the B3293 past Goonhilly, turn right 600 m later at the crossroads signed Kennack Sands, go 3 miles to the T-junction in Kuggar and turn left",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Pre-booked; £5 a night, £6 in peak season. On a lead on site, never left unattended in a unit or overnight in a car, not in buildings except the Marquee Arms bar on a lead. Off-lead in the summer camping field outside peak times, otherwise the field next to the park. Some breeds may be refused",
      // The owner's 2026 tariff runs 9 May–30 September.
      season: { from: "05-09", to: "09-30" },
      price_per_night: 28,
      price_note: "hookup pitch and two adults, 2026; £32 25 July–28 August. Non-hookup pitch and two adults £20, £24 in peak. Child £4, extra car £4–6, awning £5",
      hookup: true,
    },
  },
  {
    slug: "silver-sands-kennack",
    name: "Silver Sands Holiday Park",
    kind: "stay",
    // Centre of OSM way 140066589, "Silver Sands Holiday Park". The TR12 7LZ
    // postcode centroid, which the owner gives, is 227 m north-east.
    lat: 50.00873, lon: -5.17131,
    address: "Gwendreath, Ruan Minor, Helston, TR12 7LZ",
    phone: "01326 290631",
    email: "stay@silversandsholidaypark.co.uk",
    url: "https://silversandsholidaypark.co.uk/accommodation/touring/",
    notes: "Five-star family-run park in nine landscaped acres at Gwendreath, ten minutes' walk from Kennack Sands; three fields, pitches often separated by trees and shrubs; caravans, lodges and glamping too. Fully serviced hardstanding pitches with 16 A hookup, water and grey drainage, 10 m wide and 10–13 m long; partly serviced grass pitches with 10 A hookup and water, 8 × 10 m; grass pitches with or without 10 A hookup, 8.5–10 m square; a summer camping field in July and August. One pup tent, awning or gazebo free per booking. Shower and toilet blocks refurbished for 2026, dishwashing, launderette, recycling and waste disposal; no shop. Chemical toilets must use non-biocidal chemicals. 7 kW EV charger by the FUUSE app; no charging from pitches. Fire vessels and firewood to buy; BBQs off the ground. Pitches 2–6.30pm, no arrivals after 9pm, ring if late; out by 11am. Quiet from 9.30pm. The 34 bus stops in Kuggar, ten minutes' walk",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Welcome on all touring and camping pitches; up to two, more by arrangement. On a lead on the park, never left unattended in a tent, vehicle or on a pitch. The owner's FAQ says no extra charge; its touring page says dogs go free on hookup pitches in March, April, September and October",
      // Pitches March to early October; the owner gives no dates.
      season: null,
      price_per_night: 23,
      price_note: "grass hookup pitch with two adults, from; partly serviced from £25, fully serviced from £28, no hookup from £19",
      hookup: true,
    },
  },
  {
    slug: "namparra-campsite",
    name: "Namparra Campsite",
    kind: "stay",
    // Centre of OSM way 222155888, "Namparra Campsite". The TR12 7LY postcode
    // centroid, which the owner gives, is 302 m south-west.
    lat: 50.00671, lon: -5.17406,
    address: "Kuggar, Helston, TR12 7LY",
    phone: "01326 290040",
    email: "bookings@namparracampsite.co.uk",
    url: "https://www.namparracampsite.co.uk/about-us",
    notes: "Back-to-basics campsite in a six-acre field at Kuggar, about 15 minutes' walk from Kennack Sands, with pigs, alpacas, goats, sheep and chickens kept as pets and two in-ground trampolines. A few hookup pitches at the top of the field, some with sea views, booked well ahead, Saturday to Saturday preferred in July and August; otherwise pick your own spot. Basic male and female toilets and small wet rooms, each with toilet, shower and sink. Campfires allowed. The fields are cut for hay, so only the perimeter is campable in low season. Reception is at the Riptide Bar and Grill on the track in, with meals in season; karaoke and disco on Fridays and live bands in the beer garden on Saturdays in the main season. Deposits not refunded",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome, on leads and not allowed to chase the animals; mess picked up",
      // The owner says open from Easter until October; no dates.
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "coverack-camping",
    name: "Coverack Camping at Penmarth Farm",
    kind: "stay",
    // Centre of OSM way 222221839, "Penmarth Farm Campsite"; park4night's pin
    // is 74 m south. The TR12 6SB postcode centroid, which the owner gives, is
    // 624 m south-east.
    lat: 50.02086, lon: -5.10384,
    address: "Penmarth Farm, Coverack, Helston, TR12 6SB",
    phone: "07769 468617",
    email: "info@coverackcamping.co.uk",
    url: "https://www.coverackcamping.co.uk/prices-booking-terms",
    // Walk-ins, payment rounds and the 7 m motorhome from park4night listing
    // 517424, rated 5 from 10, the latest August 2026. The village car park
    // rule from listing 131603.
    notes: "Eco campsite of seven acres above Coverack, open for over 50 years: six fields divided by Cornish hedges, some pitches with sea views over the bay; every pitch at least 10 m wide. Ten gravel-standing hookup pitches, grass pitches for small caravans, small motorhomes, campervans and tents, premium sea-view pitches, walkers' pitches; longhouse and pod tents. Solar thermal showers, compost toilets around the site, washing-up, communal freezer, covered picnic area with USB charging and free internet, chemical toilet and grey water disposal, water points. Raised BBQs and fire pits; no broadcast music. Quiet 10pm–7am. Arrive 2–8.30pm, flexible by phone; out by noon. 30% deposit, the balance 30 days ahead. Vans and caravans should come by the B3293, turning right just before Zoar garage, not through Coverack village, which is narrow and steep. Lovers Walk, a private valley path, reaches Coverack beach and harbour in about five minutes. From Black Head, take the higher coast path signed for the Coverack sculpture park, then left at the road and left again. Reviewers mention walk-ins, payment when the owner comes round morning and evening, and a 7 m motorhome. The car park at the entrance to Coverack is signed no overnight camping. The Old Post Office B&B in Coverack is the same family's. Second phone 07484 502736",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£5 per dog a night. Kept under control or on a lead, not disturbing other guests; cleaned up after",
      // The owner gives both "beginning April" and "end March" to end October.
      season: null,
      price_per_night: 33,
      price_note: "hookup pitch and two adults, 2026; grass pitch £28, sea-view pitch £30, single walker's pitch £12. Extra adult £10, child 3–16 £6. Mid-week and off-season rates in the booking system",
      hookup: true,
    },
  },
  {
    slug: "little-trevothan",
    name: "Little Trevothan Camping & Caravan Park",
    kind: "stay",
    // Centre of OSM way 222222365, "Little Trevothan Caravan and Camping
    // Park". The TR12 6SD postcode centroid, which the owner gives, is 244 m
    // north-east.
    lat: 50.01910, lon: -5.11378,
    address: "Coverack, Helston, TR12 6SD",
    phone: "01326 280260",
    email: "holidays@littletrevothan.co.uk",
    url: "https://www.littletrevothan.co.uk/touring-pitches",
    notes: "Family-run AA 4-pennant gold park of eleven acres in farmland at Trevothen, a mile from Coverack beach, with no main roads nearby; holiday caravans too. Touring meadow of mostly level gravel hardstandings with a grass surround, all with 10 A hookup included; no very large motorhomes or RVs, and no drive-over grey waste point. Small caravans and vans up to 6 m also on the level grass camping field, with or without hookup; bring a 20 m cable. Pitches about 12 × 8 m, up to six people. Hiker and cyclist pitches without a car. Two toilet and shower blocks with free hot water, accessible shower room, launderette, dishwashing, chemical and grey waste point. Games room, adventure playground, small shop in school holidays and May–September, Calor and Camping Gaz, phone charging at reception, ice pack freezer, BBQs and fire bowls to borrow, dog exercise areas and a dog rinsing station, free wifi. No EV charging. Pitches from 12.30pm, out by 10.30am; campers no later than 9pm; ring by 5pm if arriving after 7pm. Quiet 10pm–8am. 30% deposit, the balance six weeks ahead. Out-of-hours mobile 07506 623437",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome on all pitches. On a short lead except in the exercise areas; never unsupervised in a tent, van or anywhere on the park. Not in the playing field, toilet blocks, washing-up area, launderette, games room or shop. Dangerous Dogs Act breeds refused. The terms list dogs among extras that may be charged",
      season: { from: "03-01", to: "10-31" },
      price_per_night: null,
      price_note: "shown only in the online booking; one adult with a small tent and no car £10–12",
      hookup: true,
    },
  },
  {
    slug: "maple-leaf-farm-cs",
    name: "Maple Leaf Farm",
    kind: "stay",
    // Centre of OSM way 812989245, "Maple Leaf Farm Caravan and Camper Van
    // Site". The TR12 6SG postcode centroid, from searchforsites, is 150 m
    // north-west.
    lat: 50.02269, lon: -5.12054,
    address: "Coverack, Helston, TR12 6SG",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/cornwall/helston/mapleleaffarm/",
    // The Club's listing; postcode, season and the review from searchforsites.
    // No owner website found.
    notes: "Camping and Caravanning Club Certificated Site, members only: five vans or caravans and ten tents. Adults only. A well-sheltered, level two-acre hideaway west of Coverack; no units over 6.9 m. Grass pitches with or without hookup. Flushing toilet, showers, washbasins. Pub and restaurant off site. A 2023 reviewer found it quiet, an easy walk down to Coverack and a climb back up. Directions and full details are for members only",
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing says pets welcome",
      // searchforsites says May–September.
      season: null,
      price_per_night: 21,
      price_note: "Club members, per unit with up to two adults and two children, from",
      hookup: true,
    },
  },
  {
    slug: "paris-hotel-coverack",
    name: "The Paris Hotel",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 638787896, "The Paris Hotel". The TR12 6SX postcode
    // centroid, which the owner gives, is 119 m west.
    lat: 50.02236, lon: -5.09360,
    address: "The Cove, Coverack, Helston, TR12 6SX",
    phone: "01326 280258",
    email: "info@pariscoverack.com",
    url: "https://www.pariscoverack.com/rooms",
    notes: "Pub with rooms above Coverack harbour, on the coast path, built by the Redruth Brewery in 1907 and named after the liner SS Paris, which ran aground on the headland in 1899. Six refurbished en-suite rooms, all with sea views: two family, two double, two twin; shower, TV, tea and coffee, blackout curtains; breakfast included. Free parking and wifi. The Oceanview Restaurant has the sea on three sides: lunch noon–2.30pm, dinner 6–8pm daily, Sunday carvery 12.30–2.30pm; book ahead in summer. Cancelling within 24 hours is charged the first night",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "The owner's site lists a pet-friendly room, with no rules or charge. Directories say selected rooms booked direct, two dogs at most, £10 each a night",
      season: null,
      price_per_night: 95,
      price_note: "double or twin, B&B, from; family room from £125",
    },
  },
  {
    slug: "bay-hotel-coverack",
    name: "The Bay Hotel",
    kind: "stay",
    // OSM node 3654747399, "Bay Hotel". The TR12 6TF postcode centroid, which
    // the owner gives, is 120 m north.
    lat: 50.02533, lon: -5.09826,
    // Street from OSM's tags.
    address: "North Corner, Coverack, Helston, TR12 6TF",
    phone: "01326 280464",
    email: "reception@thebayhotel.co.uk",
    url: "https://www.thebayhotel.co.uk/dog-friendly",
    notes: "Hotel above Coverack's beach, on the coast path, celebrating its centenary; every room overlooks Coverack Bay. Beachcomber full and side sea view, Bay View, Superior and Superior Bay View rooms and three suites; the Sea Pod, self-catering, in the grounds. Cornish breakfast included. Hevva Restaurant, all-day bar food, afternoon and cream teas. Spa treatments in the room. Free parking in the grounds. Rooms from 3pm, out by 11am. No night porter: ring if arriving after 10pm. The first night is taken as a non-refundable deposit; cancelling within five weeks can be charged the whole stay unless the room is re-let",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Welcome in all bedrooms and throughout the hotel except the restaurant; dine with them in the lounge bar, terrace or garden. £10 a night valeting charge with a welcome pack; two per room at most. Give the dog's name when booking. Under control, never left in the hotel while you're out",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "old-post-office-coverack",
    name: "The Old Post Office",
    kind: "stay",
    // Centre of OSM way 360908696, "Old Post Office". The TR12 6SX postcode
    // centroid, which the owner gives, is 15 m south-west.
    lat: 50.02269, lon: -5.09503,
    address: "The Cove, Coverack, Helston, TR12 6SX",
    phone: "07769 468617",
    email: "info@coverackbnb.co.uk",
    url: "https://www.coverackbnb.co.uk/",
    notes: "B&B in a listed building of 1660 on the rocks at the shore beside Coverack harbour, once the smugglers' headquarters, a pub and the village's first post office; run by Jake and Annette Roskilly. First-floor doubles with sea views, en-suite or with a shared bathroom. Help-yourself continental breakfast, guest kitchen, lounge with a log burner. A private quay and the water sports centre next door. Limited parking on site. Check in 2–8.30pm, flexible by phone; out by 10.30am. Coverack Camping at Penmarth Farm is the same family's",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: null,
      price_per_night: 130,
      price_note: "en-suite double with sea view, B&B, from",
    },
  },
  {
    slug: "fernleigh-coverack",
    name: "Fernleigh",
    kind: "stay",
    // OSM node 4856396190, "Fernleigh". The TR12 6TB postcode centroid, which
    // the owner gives, is 16 m south-west.
    lat: 50.02352, lon: -5.09882,
    address: "Chymbloth Way, Coverack, Helston, TR12 6TB",
    phone: "01326 280626",
    email: "ann@fernleighcoverack.co.uk",
    url: "https://www.fernleighcoverack.co.uk/rooms",
    notes: "Family-run B&B high above Coverack harbour and bay; tea and homemade cake on arrival, a conservatory with sea views and a wood burner, a guest sitting room. Three rooms: a sea-view en-suite double that takes a sofa bed as a family room, a double with private bathroom and garden views, and a sea-view en-suite twin that zips into a double. TV, hair dryer, tea tray. Breakfast 8–9.15am, earlier by arrangement: full English or lighter. Packed lunches, baggage transfer, a washing service, boot and gear drying, bike storage. Cash, cheque or bank transfer; no cards",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome; no rules published",
      season: null,
      price_per_night: 90,
      price_note: "two sharing at £45 a person, from; the contact page still says £40",
    },
  },
  {
    slug: "three-tuns-st-keverne",
    name: "The Three Tuns",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 799156912, "Three Tuns". The TR12 6NA postcode
    // centroid, which the owner gives, is 12 m south-west.
    lat: 50.05072, lon: -5.08742,
    address: "The Square, St Keverne, Helston, TR12 6NA",
    phone: "01326 336840",
    url: "https://threetuns.pub/stay",
    notes: "Country pub in the corner of St Keverne's square, with a front patio and a sun-trapped lawn behind; the coast just under a mile away. Five newly refurbished en-suite double and family rooms above the bar, looking over the square: TV with streaming, free wifi, tea and coffee, toiletries, iron, hair dryer. Six bell tents in the rear garden in summer. Open daily noon–11pm; food Monday–Thursday noon–2pm and 6–9pm, Friday–Saturday noon–2pm and 5–9pm, Sunday noon–7pm. Rooms direct on 01326 281151",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "All rooms take well-behaved dogs, never left alone; £10 per dog for the whole stay",
      season: null,
      price_per_night: null,
      price_note: "three midweek nights for two, room only, £195, 1 October–31 January, booked direct by phone",
    },
  },
  {
    slug: "white-hart-st-keverne",
    name: "The White Hart",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 799156925, "The White Hart". The TR12 6ND postcode
    // centroid, which the owner gives, is 1 m away.
    lat: 50.05037, lon: -5.08798,
    address: "The Square, St Keverne, Helston, TR12 6ND",
    phone: "01326 280325",
    email: "thewhitehartstkeverne@outlook.com",
    url: "https://www.thewhitehartlizard.co.uk/contact-us",
    // The owner's booking site; its older site, thewhitehartstkeverne.co.uk,
    // didn't respond.
    notes: "Traditional inn on St Keverne's square, facing the 15th-century church. Three en-suite B&B rooms: a double, a twin, and a family room with two singles and a double sofa bed; tea and coffee, TV. Check in 2–9pm, out by 10am. No parties",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "No pets, the owner's booking site says",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "st-keverne-village-campsite",
    name: "St Keverne Village Campsite",
    kind: "stay",
    // Centre of OSM way 798764698, "St Keverne Village Caravan & Campsite";
    // park4night's pin is 72 m away. The TR12 6QS postcode centroid, from
    // directories, is 220 m south-west.
    lat: 50.05224, lon: -5.07944,
    address: "Little Treginges, St Keverne, Helston, TR12 6QS",
    // From directories.
    phone: "01326 280580",
    url: "https://park4night.com/en/place/627983",
    // Directory listings via search summaries (UK Campsite and others), since
    // UK Campsite and Pitchup refuse automated requests; park4night's listing
    // has no reviews. No owner website found.
    notes: "Family-run caravan and camping site on a hilltop a quarter of a mile east of St Keverne, looking over Falmouth Bay, directories say: about 25 grass pitches for tents, caravans and vans, with or without hookup. Toilets and showers, chemical disposal, fresh water; campfires allowed. St Keverne's square, with two pubs, a shop, post office and butcher, is a short walk",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say dogs are welcome",
      // Directories and park4night say open all year.
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "roskillys-camping",
    name: "Roskilly's Camping",
    kind: "stay",
    // Centre of OSM way 204023809, Roskilly's customer car park, which the
    // owner says the campsite and animals are next to; OSM has no feature for
    // the field. Position approximate. The TR12 6NX postcode centroid, which
    // the owner gives, is 86 m east.
    lat: 50.04522, lon: -5.08331,
    address: "Tregellast Barton Farm, St Keverne, Helston, TR12 6NX",
    phone: "07484 502735",
    email: "roskillycamping@gmail.com",
    url: "https://www.roskillycamping.co.uk/book",
    notes: "Small campsite run by Ben Roskilly on Roskilly's, the family's working organic Jersey dairy farm at Tregellast Barton on the edge of St Keverne, half a mile from the coast path. One large open grass field, mown weekly; non-electric grass pitches only, allocated on arrival; units up to 12 m. Six handmade unisex toilet and shower blocks; a communal barn with washing-up, kettle, toaster, freezer, charging ports and recycling. Raised campfires and BBQs; firewood from the café. Farm animals to hand-feed, ponds and a woodland walk. Roskilly's ice cream parlour, café, restaurant and bar across the road, open daily. Check-in details sent two days ahead; no changes within 14 days of arrival. Quiet 11pm–6am",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free; on a lead and supervised at all times",
      // The owner's 2026 dates.
      season: { from: "05-23", to: "09-30" },
      price_per_night: 26,
      price_note: "pitch with two adults: £16 with one adult, £10 per extra adult, £6 per child",
      hookup: false,
    },
  },
  {
    slug: "old-temperance-house",
    name: "Old Temperance House",
    kind: "stay",
    // Centre of OSM way 799156957, "Old Temperance House". The TR12 6NA
    // postcode centroid, which the owner gives, is 30 m north-west.
    lat: 50.05047, lon: -5.08720,
    address: "The Square, St Keverne, Helston, TR12 6NA",
    phone: "01326 280986",
    email: "enquiries@oldtemperancehouse.co.uk",
    url: "https://www.oldtemperancehouse.co.uk/rates-availability/",
    // No pets from directory listings via a search summary.
    notes: "Boutique B&B in a renovated 500-year-old house on St Keverne's square beside the church. Three rooms looking over the square: Baileys, the largest, with a king-size bed and large en-suite; Champagne, an en-suite double; Cointreau, a large twin with a private bathroom. TV, wifi, room safe, boot trays, tea tray. Two nights minimum. Rooms from 4pm, out by 10am. 30% deposit, the balance on departure. Parking in the square is free. Ginentonic, a self-catering cottage for three, in the grounds. Mobile 07770 419880",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. Directories say no pets",
      season: "all-year",
      price_per_night: 135,
      price_note: "Champagne or Cointreau, per room per night; Baileys £140; single occupancy £10 less",
    },
  },
  {
    slug: "porthkerris-camping",
    name: "Porthkerris Divers camping",
    kind: "stay",
    // Centre of OSM way 798764648, "Porthkerris Divers Reception"; the camping
    // is spread across the site around it. park4night's pin is 151 m north.
    // The TR12 6QJ postcode centroid, which the owner gives, is 397 m
    // north-west.
    lat: 50.06445, lon: -5.06745,
    address: "Porthkerris, St Keverne, Helston, TR12 6QJ",
    phone: "01326 280620",
    email: "info@porthkerris.com",
    url: "https://www.porthkerris.com/camping-at-porthkerris/",
    // Prices and dogs from the owner's 2026 camping price list. Showers, the
    // honesty box, access and signal from park4night listing 243023, rated
    // 3.85 from 20, the latest August 2026. The Porthallow rule from the
    // Porthallow Village Association's beach page.
    notes: "Family-run dive centre in Porthkerris Cove, between Porthoustock and Porthallow, with camping across the site: shore dive area, mound, pond, events area, a lookout and camping fields on the higher ground, with views over Falmouth Bay and the Manacles. Hookups in the beach and events areas; book hookups and the shore dive area ahead at busy times. Toilets, showers, washing-up and a kit wash in the amenities block on the beach. Tents, caravans and motorhomes. Beach café; self-catering apartments. Prices include parking, shore diving, kayak launching and fishing. Ask for a site map by email. Reviewers say: showers £1 for 8 minutes; the fields are a steep walk from the facilities; an honesty box when no one is about; weak phone signal near reception; the lanes in are very narrow with passing places, managed by 7–7.5 m motorhomes; follow the signs rather than sat nav, turning at the White Hart in St Keverne. Porthallow's beach, the next cove, belongs to the village, which permits no overnight camping of any sort there: no tents, vans, campers or caravans",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dogs go free on camping pitches",
      // park4night says summer only; reviewers found it open in April and
      // October and closed in February. The owner gives no dates.
      season: null,
      price_per_night: 30,
      price_note: "two adults at £15 each, standard pitch, 2026; hookup pitch £22 a person, £5 extra a night for one person alone. Children 13 and under free",
      hookup: true,
    },
  },
  {
    slug: "fat-apples-wild-camping",
    name: "Fat Apples wild camping",
    kind: "stay",
    // Centre of OSM way 694636130, "Fat Apples Cafe"; the campsite is in the
    // woodland behind it. The TR12 6QH postcode centroid, which the owner
    // gives, is 23 m east.
    lat: 50.06299, lon: -5.07783,
    address: "The Old Vineyard, Porthallow, St Keverne, Helston, TR12 6QH",
    phone: "01326 281559",
    email: "fatapplescafe@gmail.com",
    url: "https://www.fatapplescafe.uk/wildcamping",
    notes: "Small wild campsite of about ten tent pitches in old Cornish woodland behind Fat Apples Café, half a mile up from Porthallow beach; the coast path runs through the café courtyard. No vehicle access: the owners help move gear by quad bike when the café isn't busy, otherwise wheelbarrows. Coin-operated hot shower, WC and cold-water sink a short walk from the pitches. Fire pit; fire baskets with logs £13.50, more logs £10. The café, licensed and dog friendly, serves breakfast, lunch and afternoon tea Thursday–Sunday 9.30am–4pm, March–December; bring supplies for the days it's shut. Parking at the café is limited",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "The café is dog friendly; the campsite page doesn't mention dogs",
      season: { from: "04-01", to: "10-31" },
      price_per_night: 12,
      price_note: "per person, small hiking tent with no car; tent under 4 m £14, 4 m and over or a bell tent £16; child 4–16 £6, under 4 free",
      hookup: false,
    },
  },
  {
    slug: "five-pilchards-porthallow",
    name: "The Five Pilchards",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1389011457, "The Five Pilchards Inn". The TR12 6PP postcode
    // centroid, which the owner gives, is 72 m south-west.
    lat: 50.06758, lon: -5.07951,
    address: "Porthallow, St Keverne, Helston, TR12 6PP",
    phone: "01326 280256",
    // The owner's site is thefivepilchards.com but gives this .co.uk address.
    email: "info@thefivepilchards.co.uk",
    url: "https://thefivepilchards.com/booking/",
    // The reopening from an April 2026 Google review shown on the owner's site;
    // new owners from Gallen-Treath's site.
    notes: "Inn on the slipway at Porthallow since the mid-1800s, looking straight over the beach, beside the coast path's halfway marker; run by Grace and George Ross; back open by April 2026 after a closure, a reviewer says. Five refurbished en-suite rooms under the eaves above the inn, including family rooms that split into three single beds. Breakfast in the bar; free wifi. Open every day all year except Christmas Day: bar Tuesday–Saturday noon–11pm, Sunday–Monday noon–9pm; food Monday–Saturday noon–9pm, Sunday noon–8pm; pub classics, Cornish seafood, pizzas and Greek dishes on Saturdays; booking advised in season. Function room for up to about 50. Book rooms online, with live prices",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "One dedicated dog-friendly room; dogs welcome throughout the bar. No rules or charge published",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "gallen-treath",
    name: "Gallen-Treath Guest House",
    kind: "stay",
    // OSM node 6517565686, "Gallen Treath Guest House". The TR12 6PL postcode
    // centroid, which the owner gives, is 42 m north-west.
    lat: 50.06659, lon: -5.08114,
    // Street from OSM's tags.
    address: "Pengarrock Hill, Porthallow, St Keverne, Helston, TR12 6PL",
    phone: "01326 280400",
    email: "gallentreath@btclick.com",
    url: "https://www.gallen-treath.com/RatesandAvailability",
    notes: "Guest house run by Alicia and Clive above Porthallow, two minutes' walk from the beach and the coast path; AA three stars with a breakfast award. Five en-suite shower rooms: on the second floor a sea-view double and a family room with a double and two singles; on the first floor a sea-view double or twin, a sea-view single, and a double or twin with its own patio. Lounge with a balcony over Falmouth Bay; sea-view dining room. Breakfast included, at flexible times or to go; evening meals ordered a few days ahead, £28 for two courses or £33 for three, light bites £8–15; packed lunches £10 or £14. Licensed. Wifi on copper lines, not always fast. Free parking for five cars; a drying rack for dive gear. Groups up to ten. Rooms from 2pm, out by 10.30am. Cancel with five working days' notice for the deposit back, less £20 a person. Closed 24 December–2 January. Cards, sterling cheques and cash. Online agents charge more than booking by phone. Text 07813 920738",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome, £6 a night, with snacks; on a lead in the dining room by prior arrangement. Dog food and a blanket for coast path walkers if asked before arrival. Guide dogs free",
      season: "all-year",
      price_per_night: 110,
      price_note: "double or twin, B&B, one night, booked by phone, not bank holiday weekends; £108 a night for 2–3 nights, £100 for 4–6, £98 for 7 or more. Single room £55. Child 4–15 sharing £23",
    },
  },
  {
    slug: "shipwrights-arms-helford",
    name: "The Shipwrights Arms",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 419730616, "Shipwrights Arms". The TR12 6JX postcode
    // centroid, which the owner gives, is 99 m south-west.
    lat: 50.09350, lon: -5.13563,
    address: "Helford, Helston, TR12 6JX",
    phone: "01326 231235",
    email: "stay@shipwrights-helford.co.uk",
    url: "https://www.shipwrights-helford.co.uk/accommodation/",
    // The car park rules from Cornwall Council's page for Helford car park.
    notes: "Thatched pub on the shore of the Helford River in Helford village, on the coast path, with a large sun terrace, a waterside beer garden and its own pontoon. Four self-contained en-suite rooms next door at the side of the slipway, with river views and the water under the building at high tide: king-size beds, walk-in showers, underfloor heating, robes, tea and coffee, blackout curtains. Rooms sleep two; room three suits disabled guests; room four sleeps four with a sofa bed. A complimentary breakfast basket; no room service. Booked Monday–Friday, Friday–Monday or by the week. A private car park for the rooms behind automatic bollards, with a key fob. Pub open from noon Monday–Saturday, lunch noon–3pm, dinner 5.30–8.30pm; Sunday noon–6pm, bar to 7pm; booking recommended; Sunday roasts October–March; takeaway. Other drivers must use the council car park at the top of the village, as the lanes are narrow with nowhere to turn. That car park allows no motorhomes or campers 11pm–8am and no sleeping or overnight camping; pay and display 9am–4pm April–October, £4.20 for 24 hours, free otherwise",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Room four only; no rules or charge published",
      season: null,
      price_per_night: null,
      price_note: "from £125, an undated post on the pub's Facebook page says",
    },
  },
  {
    slug: "prince-of-wales-newtown",
    name: "The Prince of Wales",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 233862561, "Prince Of Wales". The TR12 6DP postcode
    // centroid, which the owner gives, is 90 m east.
    lat: 50.06594, lon: -5.15752,
    address: "Newtown, St Martin, Helston, TR12 6DP",
    phone: "01326 231247",
    email: "newtownpow@hotmail.com",
    url: "https://www.princeofwalesnewtown.com/book-a-room",
    // The owners' current site is princeofwalesnewtown.com. The campsite
    // description is from princeofwalesnewtown.co.uk, an older site now
    // carrying unrelated advertising, so not treated as the owner's.
    notes: "16th-century listed country pub in Newtown-in-St-Martin, bought by the community in October 2022 and run by tenants David, Emma and Michelle: a log fire, a sun-trap beer garden away from the road, summer music sessions June–September, and a small shop with milk, bread, eggs and essentials in bar hours. Two king-size en-suite rooms next door to each other, with a kitchenette for a self-service breakfast: tea, coffee, milk, eggs, bread, cereals; towels, robes, slippers. Rooms book only through Booking.com, not by phone or email. Bar from 5pm Monday–Friday, 3pm Saturday, noon Sunday; kitchen Wednesday–Saturday 5–8.30pm, with takeaway. Phone evenings and weekends only. Customer parking behind, by the lane beside the pub. OSM maps a campsite beside the pub, and the pub's older website describes a flat grass field with free hot showers, chemical disposal and hookups, Easter to October; the current owners' site doesn't mention camping",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Dogs welcome in the pub, with treats; the owners don't say whether the rooms take them",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "gear-farm-camping",
    name: "Gear Farm Camping",
    kind: "stay",
    // Centre of OSM way 221351807, "Gear Farm Camping". The TR12 6DE postcode
    // centroid, which the owner gives, is 148 m west-south-west. Helford River
    // Camping shares the postcode and sits just west of the pasty shop.
    lat: 50.08108, lon: -5.18336,
    address: "Gear Farm, St Martin, Helston, TR12 6DE",
    phone: "07968 778631",
    email: "gearfarmcamping@btinternet.com",
    url: "https://gearfarmcamping.co.uk/pricing-booking/",
    notes: "Family-run off-grid campsite of nearly 30 years on a working organic farm between St Martin and Mawgan, near the Helford River, with sea views and dark skies: spacious, unmanicured pitches in farmland. No hookup, no wifi. Three hot showers, three low-impact toilets, communal fridge freezers, mains water, rubbish and recycling, solar lighting, a large grass games area. Tents, caravans, trailer tents, and motorhomes and campervans under 8 m. BBQs off the ground, unless it's very dry. Towing or over 6 ft wide, come by St Martin, not through Mawgan, which has two narrow stone bridges; sat nav may not find the postcode, so look for the signs. Book online or enquire first",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1 a night; on a lead at all times and exercised off site",
      // The owner's 2026 dates.
      season: { from: "07-13", to: "08-31" },
      price_per_night: 26,
      price_note: "two adults at £13 each; age 10–16 £9, under 10 £5",
      hookup: false,
    },
  },
  {
    slug: "helford-river-camping",
    name: "Helford River Camping",
    kind: "stay",
    // The TR12 6DE postcode centroid, which the owner gives; OSM has no
    // feature for the site. The owner's own published position is 46 m west.
    lat: 50.08059, lon: -5.18528,
    address: "Halanoweth, St Martin, Helston, TR12 6DE",
    phone: "07738 090121",
    email: "helfordrivercamping@gmail.com",
    url: "https://www.helfordrivercamping.co.uk/about-us",
    // Prices from the owner's site-facilities page, headed 2026 Prices.
    notes: "Camping and Caravanning Club Certificated Hideaway Site, members only, family run for over 30 years, facing west over the Helford River for the sunsets. 15 pitches on 1.5 acres of level mown grass in a seven-acre field: five for caravans and ten for tents, trailer tents and motorhomes; ten with hookup; one hardstanding on request. Two flush toilets, two basic solar-heated hot showers, outdoor cold-water washing-up, chemical disposal. Hookups can't charge electric cars. No fires, BBQs or naked flames. Gear Farm Pasty Co across the road, Tuesday–Saturday 10am–2pm, with a veg stand; Mawgan Stores, with gas, a post office and cashpoint, a mile. Book by email with unit, people, hookup and dates; 25% non-refundable deposit, the rest by the morning of arrival. Caravans and large motorhomes should ignore sat nav, which sends them over two small bridges: from the B3293 take the St Martin HGV route, left at the Prince of Wales in Newtown, through St Martin, and a mile on the site is on the right just past the pasty shop, its gate set back behind white-topped posts. Cars and small campervans can come through Mawgan. Second mobile 07745 329235",
    verified: "2026-09-16",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "Pets welcome on leads, at most 2 m on pitches; longer leads elsewhere on site",
      // The owner says from the start of the Easter holidays to 30 September,
      // and outside that by arrangement with limited facilities.
      season: null,
      price_per_night: 16,
      price_note: "a night April–May and September, £18 June, £20 July–August; hookup £5 extra. The owner doesn't say whether per pitch or per person",
      hookup: true,
    },
  },
  {
    slug: "trelowarren-bnb",
    name: "Trelowarren",
    kind: "stay",
    // Centre of OSM way 555450913, Trelowarren House. The TR12 6AF postcode
    // centroid, which the owner gives, is 55 m north.
    lat: 50.07109, lon: -5.18647,
    address: "Trelowarren, Mawgan, Helston, TR12 6AF",
    phone: "01326 221224",
    email: "info@trelowarren.com",
    url: "https://trelowarren.com/bed-breakfast/",
    notes: "B&B in the historic house at the heart of the 1,000-acre Trelowarren estate near the Helford River. Four rooms, each with its own bathroom: the King's Room, east-facing with a four-poster, where Charles II is said to have slept; the Bluebird Room and the Queen's Room, redesigned for a visit by Queen Victoria, bookable separately or as a suite; and a twin. Every night except Sunday. Breakfast from 9am in the dining room: cereals, fruit, bread, and sausages, bacon and eggs from a heated tray. Ring or email about availability. The estate also has self-catering cottages, a seasonal heated pool, gym, tennis, woodland walks, and Flora at New Yard, a café, bakery and restaurant",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's dog policy covers its cottages, two dogs at most; it doesn't say whether B&B rooms take them",
      season: null,
      price_per_night: 250,
      price_note: "each of the three doubles, per room per night; the twin isn't priced",
    },
  },
  // Section 29.
  {
    slug: "budock-vean",
    name: "Budock Vean Hotel & Spa",
    kind: "stay",
    // OSM node 497984748, "Budock Vean Hotel". The TR11 5LG postcode centroid,
    // which the owner gives, is 136 m north-east.
    lat: 50.10567, lon: -5.13280,
    // Street from OSM's tags.
    address: "Budock Vean Lane, Mawnan Smith, Falmouth, TR11 5LG",
    phone: "01326 250288",
    email: "info@budockvean.co.uk",
    url: "https://www.budockvean.co.uk/stay/dog-friendly/",
    notes: "Hotel, spa and golf resort on a former manor estate by the Helford river, a short walk from Helford Passage. Hotel rooms: Golf and Club rooms, Signature rooms, a Junior Suite, Signature Suites, and Club and Signature family rooms; self-catering lodges and cottages too. Restaurant, afternoon tea, a 15-metre pool, outdoor hot tub and spa treatments; a nine-hole, 18-tee parkland golf course by James Braid; tennis courts. Hotel facilities from 1pm on arrival until 1pm on departure. Rooms from 3pm, out by 11am. EV chargers, 55p a kWh. Deposit of one average night; cancelling or amending over seven days ahead refunds it less a £25 admin fee, within seven days the deposit is lost, and on the day or a no-show the whole stay is charged",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "In all hotel rooms except the Junior and Signature Suites, by prior arrangement; £20 per dog per night, two per room at most. An undisclosed dog costs an extra £80 cleaning fee and may be refused. On a lead in public areas, off furniture and beds. Welcome in the lounges, conservatory, lobby, terrace and lounge dining area, not the restaurant. Self-service dog wash 7am–10pm, £8",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "hotel-meudon",
    name: "Hotel Meudon",
    kind: "stay",
    // Centre of OSM way 49642009, "Hotel Meudon". The TR11 5HT postcode
    // centroid, which the owner gives, is 99 m north-east. OSM also has an
    // unnamed hotel building, way 49802634, 280 m north-east.
    lat: 50.11632, lon: -5.09860,
    address: "Mawnan Smith, Falmouth, TR11 5HT",
    phone: "01326 250541",
    email: "reservations@meudon.co.uk",
    url: "https://www.meudon.co.uk/faqs",
    notes: "Hotel in nine acres of sub-tropical valley gardens running down to Bream Cove, its own secluded beach, between Maenporth and Rosemullion Head; the coast path runs round the cove. Garden view rooms, sea view rooms looking down the valley with glimpses of the sea, garden view rooms with a balcony or terrace, a Cosy Double with countryside views, a one-bedroom suite and suites. Restaurant Meudon, Freddie's Bar, the Drawing Room; the Bream Box, fifty yards from the cove, serves pizza, wine and coffee from midday. Non-residents welcome. A card guarantees the booking, with 24 hours' cancellation; some Saturdays need two nights. The card used for the deposit must be shown at check-in, and is pre-authorised for the room plus £50 a night",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms; ask before booking to check availability. £25 per dog per night, two per room at most. Directories add beds, bowls and towels, and dogs everywhere but the main restaurant, with meals in Freddie's Bar and the Drawing Room",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "trevarn-mawnan-smith",
    name: "Trevarn",
    kind: "stay",
    // Postcode centroid (TR11 5JD), which the owner gives; OSM has no feature
    // for the house. Position unconfirmed.
    lat: 50.11480, lon: -5.10671,
    address: "Carwinion Road, Mawnan Smith, Falmouth, TR11 5JD",
    phone: "01326 251245",
    email: "melattrevarn@gmail.com",
    url: "https://www.trevarn.co.uk/bed_breakfast_accommodation.html",
    // The Red Lion in Mawnan Smith lets no rooms and lists Trevarn as nearby.
    notes: "Melanie and Geoffrey's B&B on the outskirts of Mawnan Smith, almost opposite Carwinion Gardens, with views down to Maenporth; 400 yards to the village shops, post office, pub and café. The coast path is ten minutes' walk away at Nansidwell. One en-suite double with a king-size bed and shower; full English breakfast. Also the Pump House, a small self-catering annex, £90 a night for three nights or more. Smart TV, tea and coffee; conservatory and garden. Plenty of off-street parking. No credit cards: sterling, euros or cheque. Deposits refunded only on cancellation more than two weeks ahead",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome; no charge or rules published",
      season: "all-year",
      price_per_night: 110,
      price_note: "double room for two, B&B",
    },
  },
  {
    slug: "penwarne-farm",
    name: "Penwarne Campsite",
    kind: "stay",
    // OSM node 2303797866, "Penwarne Farm Campsite". The TR11 5PH postcode
    // centroid, which the owner gives, is 97 m north.
    lat: 50.12882, lon: -5.11624,
    address: "Penwarne Barton Farm, Mawnan Smith, Falmouth, TR11 5PH",
    email: "campsite@penwarnefarm.com",
    url: "https://www.penwarnefarm.com/",
    // Season and price from campsites.co.uk, which takes the bookings.
    notes: "Touring and tent campsite on a working farm north of Mawnan Smith, worked by the Mann family since 1886 and taking campers since the 1920s; views over Falmouth Bay to Pendennis Castle. 16 A hookup available. Warm showers, toilets, accessible washing facilities, a wooden play area, and a new on-site café, Pie in the Sky. Cows, sheep, chickens, pheasants and peafowl on the farm. Book online through campsites.co.uk; enquiries by email. Trewen Farm, nearer Falmouth, is the sister site",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs free; on a lead at all times, as it's a working farm, and cleaned up after",
      // campsites.co.uk says 1 May–31 October; the owner gives no dates.
      season: null,
      price_per_night: 20,
      price_note: "pitch for two people, from, campsites.co.uk",
      hookup: true,
    },
  },
  {
    slug: "tregedna-farm",
    name: "Tregedna Farm Campsite",
    kind: "stay",
    // Centre of OSM way 971128515, "Tregedna Farm"; park4night's pin is 82 m
    // north-west. The TR11 5HL postcode centroid, which the owner gives, is 527 m
    // east.
    lat: 50.13242, lon: -5.09851,
    address: "Maenporth, Falmouth, TR11 5HL",
    phone: "07798 622351",
    email: "tregednafarmcamping@gmail.com",
    url: "https://tregednafarmholidays.co.uk/camping-touring/camping-touring-tariff",
    // The slopes, ramps, grey waste drain and path to the beach from park4night
    // listing 91580, rated 4.79 from 28, the latest September 2026.
    notes: "Touring caravan and camping park in a 12-acre, gently sloping south-facing field in the Maen Valley, half a mile from Maenporth beach. No allocated pitches: choose your own spot. Charged per person, with cars, awnings and tents included. Only 20 hookups: book them ahead, especially in July and August. Toilet block, free showers, dishwashing sinks, coin washing machine and dryer; small shop in the main season. Quiet 11pm–8am; 10 mph on site. Pitches from about noon, vacated by 11am; say if arriving after 7pm. £50 non-refundable deposit per pitch per week, the balance seven days ahead or cash on arrival. Breathable groundsheets preferred. Book online or by phone with Ali Grindrod. Reviewers say ramps are needed and lent, there's a drive-over grey waste drain, and a footpath from behind reception reaches Maenporth and the coast path. Penmere station is 1.5 miles. Tregedna Lodge, the group barn, takes no dogs",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1.50 per dog a night; on a lead at all times except in the dogs' exercise field",
      // The owner gives 1 May–1 October 2026; Easter by arrangement, weather
      // permitting.
      season: { from: "05-01", to: "10-01" },
      price_per_night: 32,
      price_note: "two adults with hookup, 2026: £13.50 an adult, child 3–13 £7, hookup £5",
      hookup: true,
    },
  },
  {
    slug: "pennance-mill-farm",
    name: "Pennance Mill Farm",
    kind: "stay",
    // Centre of OSM way 221349090, "Pennance Mill Farm"; park4night's pin is
    // 23 m west. The TR11 5HJ postcode centroid, which the owner gives,
    // is 279 m west.
    lat: 50.13557, lon: -5.09069,
    address: "Maenporth Road, Falmouth, TR11 5HJ",
    phone: "01326 317431",
    email: "pennancemillfarm@outlook.com",
    url: "https://www.pennancemillfarm.co.uk/camping-and-touring",
    // Fires, dogs and season from campsites.co.uk. Gate, signal, pitches and
    // prices from park4night listing 600987, rated 2.88 from 8, the latest May
    // 2026.
    notes: "Family campsite run by the Jewell family since 1929, under two miles from Falmouth: three south-facing meadows divided by hedges, electric and non-electric grass pitches and fully serviced hardstandings, 16 A hookup. Free showers, toilets, washing-up area, chemical disposal. A private woodland path runs half a mile to Maenporth beach, and another path to Swanpool beach and on to Falmouth; the 64A bus stops opposite Falmouth Pitch and Putt, a short walk through woodland. Chalets and a shepherd's hut too. Fires and BBQs off the ground, campsites.co.uk says. Reviewers found a code-locked gate and the owner not always about, so ring ahead; many grass pitches slope; no phone signal. Charged per person plus the pitch. A May 2026 reviewer found nobody to check them in and dirty facilities",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. Campsites.co.uk says every pitch takes well-behaved dogs kept on leads",
      // campsites.co.uk says 1 March–31 October; park4night's listing says
      // open until 1 October.
      season: null,
      price_per_night: 30,
      price_note: "two people and a campervan, hookup extra, a 2025 park4night reviewer says; the listing gives £11 a person plus £8 a pitch",
      hookup: true,
    },
  },
  {
    slug: "penmorvah-manor",
    name: "Penmorvah Manor Hotel",
    kind: "stay",
    // Centre of OSM way 301149212, "Penmorvah Manor Hotel". The TR11 5ED
    // postcode centroid, which the owner gives, is 123 m north-west.
    lat: 50.13634, lon: -5.10447,
    address: "Budock Water, Falmouth, TR11 5ED",
    phone: "01326 250277",
    email: "reception@penmorvah.co.uk",
    url: "https://www.penmorvah.co.uk/hotel-accommodation-falmouth/dog-friendly-hotel-rooms",
    notes: "Privately owned country house hotel of 1872 at Budock Water, in six acres of woodland gardens with sea views; a mile from Maenporth beach, about 30 minutes' walk to Maenporth or Swanpool. 27 simply appointed en-suite rooms: premium rooms with valley and sea views and rooms with garden views in the original manor house, and rooms in the modern east wing, some on the ground floor. Full Cornish breakfast; restaurant and bar; a Sundeck on the front lawn with sea views for light lunches and cream teas, April–September. Five self-catering cottages. One of the largest free guest car parks in Falmouth; EV charging at a fee. Occasional weekend entertainment and weddings. Rooms from 3pm, vacated by 10.30am. Deposit of the first night, non-refundable, but may be credited to another stay within six months",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Any room grade, £17.50 per dog per night, all year. Use of the lounge at all times; treats and a guide to local walks and dog-friendly beaches. A resident cocker spaniel. Directories say dogs aren't allowed in the restaurant or drawing room",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "menehay-farm",
    name: "Menehay Farm Touring Park",
    kind: "stay",
    // Centre of OSM way 232355939, "Menehay Farm Touring Park". The TR11 5BY
    // postcode centroid, which the owner gives, is 238 m north.
    lat: 50.14544, lon: -5.09775,
    address: "Budock Water, Falmouth, TR11 5BY",
    phone: "01326 372550",
    email: "info@menehayfarm.co.uk",
    url: "https://menehayfarm.co.uk/prices/",
    notes: "Family-run touring park on Menehay Farm, run by Andrew and Janey Dunstan on the western edge of Falmouth: secluded and south-facing, mainly favoured by adults, with an adult-only field on request. 37 grass and hardstanding pitches for caravans, motorhomes and tents, most over 110 m², hookup included. Free hot showers, accessible facilities, laundry, chemical disposal, water taps, free wifi. Bus stop outside. No walk-ins: every pitch booked and paid before arrival, by bank transfer or card by phone. £40 non-refundable deposit, the balance two weeks ahead. Arrive after noon, leave by 11am. No open fires, EV charging, hookup splitters or groups. 5 mph on site",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Free, two per pitch at most. Quiet, on a lead at all times, never left unaccompanied on site",
      // The owner says open Easter to 12 October 2026.
      season: null,
      price_per_night: 30,
      price_note: "pitch with hookup for up to two people, 2026. Extra person 5 and over £5, extra car or trailer £5, awnings free",
      hookup: true,
    },
  },
  {
    slug: "trewen-farm",
    name: "Trewen Farm Campsite",
    kind: "stay",
    // OSM node 550114771, "Trewen Farm Campsite"; park4night's pin is 98 m
    // west. The TR11 5DZ postcode centroid, from park4night, is 296 m east.
    // Position unconfirmed.
    lat: 50.14152, lon: -5.10876,
    // park4night's listing.
    address: "Budock Water, Falmouth, TR11 5DZ",
    url: "https://park4night.com/en/place/289535",
    // The owner's domain, campingfalmouth.co.uk, is now parked. Penwarne
    // Campsite's owner calls Trewen its sister site. Details from park4night
    // listing 289535, rated 3.64 from 14, the latest June 2026.
    notes: "Simple campsite in a large open field near Budock Water, with views over Falmouth Bay; five minutes' walk to the village pub, and buses to Falmouth. Hookup available. Toilets and showers, washing machine and dryer, a June 2026 reviewer says; a 2024 reviewer found the showers cold and a 2022 one hot and free. Reviewers book on arrival through an app, and found several listed phone numbers out of date. Fires off the ground allowed in 2022. A 7 m motorhome has stayed",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories list it as dog friendly, and park4night reviewers have stayed with dogs",
      // park4night's listing says it opens in April.
      season: null,
      price_per_night: 25,
      price_note: "without hookup, a 2025 park4night reviewer says; the listing gives £27.50, with electricity £7.50 extra",
      hookup: true,
    },
  },
  {
    slug: "gyllyngvase-coach-park",
    name: "Gyllyngvase Beach coach park",
    kind: "stay",
    // Centre of OSM way 971356867, an unnamed gravel council car park just
    // south of the main Gyllyngvase car park (way 420623566); taken as the
    // coach park, which the council gives as ten hard-pack spaces, from its
    // surface and size. The council's map is centred between the two. The
    // TR11 4DP postcode centroid is 53 m south. Position unconfirmed.
    lat: 50.14455, lon: -5.07012,
    address: "Queen Mary Road, Falmouth, TR11 4DP",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/gyllyngvase-beach-coach-park-queen-mary-road-falmouth-tr11-4dp/",
    // Rules from the council pages for each Falmouth car park, updated August
    // 2026, and the motorhome parking page, updated 12 May 2026. The seafront
    // roads from park4night listings 38599 (Cliff Road), 125157 (Castle Drive)
    // and 86559 (Boscawen Road), Swanpool from 132987, water from a 2026
    // review of 125157, and Mawnan church from 41303.
    notes: "Cornwall Council long-stay coach park beside Gyllyngvase Beach, on the coast path: ten hard-pack spaces for coaches and motorhomes only, open 24 hours, no height or weight limit. The one council car park in Falmouth where self-contained motorhomes with their own toilet may stay overnight; no motorhome facilities. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. Pay for every bay you cover. The main Gyllyngvase car park beside it is for cars under 3,050 kg, locked 8pm–7am, with no motorhomes or campers 11pm–8am; Town Quarry bans them 11pm–8am too, and every other council car park in Falmouth is for cars only, with no sleeping. The seafront roads at Cliff Road, Castle Drive and Boscawen Road have no waiting midnight–6am, enforced with fines, and Swanpool's beach car park is locked overnight, park4night reviewers say. Mawnan parish church closed its car park to overnight stays in 2022. Public toilets at Gyllyngvase Beach about 110 m east, where a 2026 reviewer filled water containers. Pay and display (card, contactless) or JustPark location 8335",
    verified: "2026-09-16",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "st-michaels-resort",
    name: "St Michaels Resort",
    kind: "stay",
    // Centre of OSM way 132698035, still named "St Michael's Hotel & Spa". The
    // TR11 4NB postcode centroid, which the owner gives, is 9 m south-west.
    lat: 50.14610, lon: -5.06913,
    address: "Gyllyngvase Beach, Falmouth, TR11 4NB",
    phone: "01326 312707",
    email: "info@stmichaelsresort.com",
    url: "https://stmichaelsresort.com/stay/",
    notes: "Resort hotel above Gyllyngvase Beach on Falmouth's seafront, by the coast path; formerly St Michael's Hotel & Spa. Hotel rooms from cabin singles to luxury kings with sundecks and family suites, Spa Garden Lodges in the sub-tropical gardens, and beachfront self-catering apartments. Full Cornish breakfast included. Spa; Health Club with pool, gym, sauna, tennis courts and classes, free to guests. Brasserie on the Bay and Nourish restaurants. Rooms from 3.30pm, apartments 4pm; out by 11am. Enter by Cliff Road; free on-site parking for overnight guests, subject to availability. Flexible rate: 20% deposit, the balance 14 days ahead; cancelling loses the deposit, and within 14 days the whole stay. Advance and non-flexible rates are non-refundable",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms: Classic King, Cosy King with Courtyard, Luxury King and Luxury Large King with or without sundeck, Classic Single, Cabin Single, and the Spa Garden Lodges. £20 per dog per night; flea treatment by a vet two weeks before. Allowed in the gardens, bar, lounge and the Locker, where you can eat with them, and nowhere else. May stay in the room while you use the resort, never while you're off site",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "falmouth-hotel",
    name: "The Falmouth Hotel",
    kind: "stay",
    // Centre of OSM way 654451000, "Falmouth Hotel". The TR11 4NZ postcode
    // centroid, which the owner gives, is 72 m north-east.
    lat: 50.14864, lon: -5.05768,
    address: "Castle Beach, Falmouth, TR11 4NZ",
    phone: "01326 312671",
    url: "https://falmouthhotel.co.uk/faq/",
    notes: "Victorian seafront hotel of 1865 above Castle Beach, on the coast path between Gyllyngvase and Pendennis Point; bought by the Cornwall Hotel Collection in 2024. 71 rooms on the first to fourth floors, with a lift; no air conditioning. Castle View restaurant, bar and lounge; the 1865 Lounge; gardens and terrace. Swim and gym and a spa on the lower ground floor, the leisure facilities free to guests. Check-in from 3pm, out by 11am; to 1pm for £25. Guest parking first come, first served: register the vehicle at reception. 22 kW EV chargers through the Monta app. The card is charged at midday seven days before arrival; free cancellation until then, non-refundable after",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Some rooms only; tell the hotel before booking, on 01326 312671. £20 per dog per night, with bowls and treats. Dogs eat with you in the 1865 Lounge at breakfast, lunch and dinner; not in the Castle View restaurant, bar and lounge",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "chain-locker-falmouth",
    name: "The Chain Locker",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1001073408, "The Chainlocker". The TR11 3HH postcode
    // centroid, which the owner gives, is 21 m west.
    lat: 50.15276, lon: -5.06591,
    address: "Quay Street, Falmouth, TR11 3HH",
    phone: "01326 311085",
    url: "https://www.chainlockerfalmouth.co.uk/our-rooms",
    // Car park rules from the council's pages for Church Street and The Dell.
    notes: "St Austell Brewery pub with rooms on Falmouth's harbourside, a 16th-century building believed to be one of the town's oldest; on the coast path. Six en-suite rooms on the second floor, stairs only from the first: standard doubles with king-size beds, signature view doubles and twins, and a deluxe suite; harbour views from some of the premium rooms. No extra beds; no air conditioning. Full breakfast included, 8–10.30am. Check-in from 3pm, out by 11am. No parking of its own: Custom House Quay, three hours, for unloading; the pub suggests Church Street or The Dell long-stay car parks, but both are council car parks for cars under 3,050 kg with no sleeping, and Church Street has a 2.3 m height limit. No EV charging. Reservations also on 0345 241 1133 or reservations@staustellbrewery.co.uk",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay, with a ball, treats, poo bags and beer. On a lead in public areas, never left alone in the room; allowed everywhere except the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "greenbank-hotel",
    name: "The Greenbank Hotel",
    kind: "stay",
    // Centre of OSM way 159875075, "Greenbank Hotel". The TR11 2SR postcode
    // centroid, which the owner gives, is 26 m south-east.
    lat: 50.16122, lon: -5.07454,
    address: "Harbourside, Falmouth, TR11 2SR",
    phone: "01326 312440",
    email: "reception@greenbank-hotel.co.uk",
    url: "https://greenbank-hotel.co.uk/about/faqs/",
    notes: "Falmouth's oldest hotel, taking guests since 1785, on the harbour at the north end of town with its own quay and beach; Kenneth Grahame wrote part of The Wind in the Willows here. Rooms and suites, some with harbour views; fridges in deluxe and superior rooms and suites; no air conditioning. The Water's Edge restaurant, two AA rosettes; breakfast 7–10am, weekends from 7.30am. The Working Boat pub downstairs, Monday and Tuesday from 3pm, Wednesday–Sunday from 11am; a sauna. Check-in from 3pm, out by 11am; to noon £20, 1pm £30. Free guest parking, first come: the garage, adjacent resident bays or the quay; register at reception. One EV charger, £20 a charge. The card is charged at midday seven days before arrival; free cancellation until then, non-refundable after",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "12 dog-friendly rooms; ring before booking. £20 per dog per night, three per room at most, with bowls and treats. On a lead in public areas, off the furniture; may be left in the room during breakfast. Breakfast with them in the dog-friendly bar corner (book), the terrace or the Captain's Table; not in the bar area after 10.30am. The Working Boat welcomes dogs everywhere",
      season: null,
      price_per_night: null,
    },
  },
  // Section 30.
  {
    slug: "treloan-coastal-holidays",
    name: "Treloan Coastal Holidays",
    kind: "stay",
    // Centre of OSM way 212006140, "Treloan Coastal Holidays"; park4night's pin
    // is 15 m north-west. The TR2 5EF postcode centroid, which the owner gives,
    // is 225 m south.
    lat: 50.17521, lon: -4.97825,
    address: "Treloan Lane, Portscatho, TR2 5EF",
    phone: "01872 580989",
    email: "info@treloancoastalholidays.co.uk",
    url: "https://treloancoastalholidays.co.uk/campsite",
    // Levelling, card payment and the latest prices from park4night reviews,
    // rated 4.87 from 15, the latest September 2026.
    notes: "Family-run campsite on the coast path between Gerrans and Portscatho, with sea views over Gerrans Bay; the owners live on site. Arthur's Field, open all year, is gently sloping, with hardstanding and grass pitches, most with hookup, for tents, caravans and vans; the flat Summer Field takes tents and small campervans, some pitches with hookup, at May half term and in the summer holidays only. Static caravans too. Three toilet and shower blocks, dishwashing, washing machine, tumble dryer, freezers for ice packs. Braziers lent if you buy the site's logs; BBQs on the bricks provided. Chickens and sheep. Arrive from 1pm, leave by 11am; someone always on site. Book by email, phone or the website's enquiry form; 50% deposit. The owner says no cards, only bank transfer, cheque or cash; a 2025 reviewer paid by card. Backpackers walking the coast path are never turned away and needn't book, at a reduced one-night rate. Some pitches need chocks, reviewers say. Portscatho's pubs and shop and Gerrans' Standard Inn are a short walk. park4night gives TR2 5EQ",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On leads, under close control. £2 a night, £3 mid-July to the end of August",
      season: "all-year",
      price_per_night: null,
      price_note: "pitch, two adults and a car, from the owner's undated tariff: £23 October–March, £26 April–mid May and September, £29 June–mid July, £35 late May, £37 19 July–2 September; hookup £8, extra adult £11 (£15 in July and August). A September 2025 reviewer paid £25.50 without hookup",
      hookup: true,
    },
  },
  {
    slug: "trewince-farm-touring",
    name: "Trewince Farm Touring",
    kind: "stay",
    // Centre of OSM way 221659392, "Trewince Farm Campsite", whose phone and
    // website tags belong to Trewince Farm Holiday Park at St Issey, near
    // Wadebridge. searchforsites' pin is 166 m north-east. The TR2 5ET postcode
    // centroid is 791 m north-east.
    lat: 50.16581, lon: -4.98900,
    address: "Trewince Farm, Portscatho, Truro, TR2 5ET",
    phone: "01872 580430",
    email: "info@trewincefarm.co.uk",
    url: "http://www.trewincefarm.co.uk/",
    // The owner's site is unmaintained — a 2005 tariff and injected spam links
    // — so nothing is confirmed. The price from searchforsites.
    notes: "Touring site on the Symons family's working farm at Trewince, south of Gerrans towards St Anthony, run beside Trewince Farm Holiday Lodges; about a mile from Portscatho. 25 pitches beside farmland, most with sea views; car parked beside the pitch. Camping pods. Free showers and hot water, washing-up sinks, 13 A hookup, chemical disposal, laundry. Percuil River Boatyard nearby for launching and moorings. AA three star, the owner's old site says",
    verified: null,
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Pets welcome for a small fee, the owner's old site says",
      season: { from: "04-01", to: "09-30" },
      price_per_night: null,
      price_note: "pitch with two adults £22–28 in 2023, searchforsites says",
      hookup: true,
    },
  },
  {
    slug: "merrose-st-mawes-camc",
    name: "Merrose St Mawes Club Campsite",
    kind: "stay",
    // Centre of OSM way 395957567, an unnamed caravan site. The Club's own GPS
    // point is 147 m north-east; the TR2 5EL postcode centroid, which the Club
    // gives, is 137 m north-east.
    lat: 50.20121, lon: -4.97371,
    address: "Portscatho, Truro, TR2 5EL",
    phone: "01872 580380",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/cornwall/merrose-st-mawes-club-campsite/",
    notes: "Caravan and Motorhome Club campsite, formerly Merrose Farm, off the A3078 at Rosevine; non-members welcome. Landscaped parkland with countryside views: 173 pitches, 76 of them hardstanding, 167 touring and six camping; maximum unit length 9 m. Hookup, motorhome service point and drive-over waste disposal, toilet block with family washroom and accessible shower room, dishwashing, laundry, gas, wifi, playground, dog walk on site. Late arrivals area with hookup. A fish and chip van visits. Arrive from 1pm. The narrow road in from the A3078 is controlled by traffic lights; the Club says not to use the B3287. Buses to St Mawes and Truro within a mile. £5 deposit, free cancellation up to 21 days before arrival",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The Club lists it as ideal for dogs, with a dog walk on site; no rules published for this site",
      // The Club now lists 2027 dates, 29 April–4 October.
      season: { from: "04-29", to: "10-04" },
      price_per_night: null,
      price_note: "shown only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "plume-of-feathers-portscatho",
    name: "The Plume of Feathers",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 549859110, "Plume of Feathers". The TR2 5HW postcode centroid,
    // which the owner gives, is 27 m north-west.
    lat: 50.17926, lon: -4.97538,
    // House number and street from OSM's tags.
    address: "10 The Square, Portscatho, TR2 5HW",
    phone: "01872 580321",
    email: "contact@plumeoffeathers-roseland.com",
    url: "https://plumeoffeathers-roseland.com/stay/",
    notes: "Traditional Cornish pub of over 300 years on the square in Portscatho, moments from the harbour and on the coast path; run by Cathy and Leigh. Five B&B rooms upstairs; those listed are St Anthony, a king-size sleeping three, Percuil and Towan, king or twin, each with its own bathroom with a bath, satellite TV and hairdryer. Breakfast included. Non-smoking. Check-in from 3pm, out by 10am. Free on-street parking outside. Food daily 8.30am–8.30pm: seasonal menus, local ales, Sunday roasts; live music and quiz nights",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Two of the five rooms, St Anthony and Towan",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "nare-hotel",
    name: "The Nare",
    kind: "stay",
    // Centre of OSM way 982889113, "Nare Hotel". The TR2 5PF postcode centroid,
    // which the owner gives, is 5 m south-west.
    lat: 50.20746, lon: -4.93950,
    address: "Carne Beach, Veryan-in-Roseland, Truro, TR2 5PF",
    phone: "01872 501111",
    email: "stay@narehotel.co.uk",
    url: "https://www.narehotel.co.uk/about/families-and-dogs",
    notes: "Country house hotel above Carne Beach, on the coast path, with the beach reached from the garden. 40 individually decorated rooms and suites, some for families. Indoor pool; outdoor pool heated May to mid-September; hot tub, spa, tennis, croquet. Dining room, where young children aren't expected in the evenings, and the Quarterdeck restaurant. Boot room with wellingtons and walking gear, drying room. Reservations 7am–11pm. Room and breakfast rates are for two sharing; dinner-inclusive rates for three nights or more, booked direct. £300 per person non-refundable deposit; up to 75% charged for changes or cancellations within a month of arrival if the room isn't re-let",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Welcome in the bedrooms and grounds. £22 a day for a small dog, £27 medium, £30 large, including the chef's dish of the day for dogs; a dogs' à la carte menu too. Carne and Pendower beaches take dogs all year",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "new-inn-veryan",
    name: "The New Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1102802473, "The New Inn". The TR2 5QA postcode
    // centroid, which the owner gives, is 3 m south.
    lat: 50.21870, lon: -4.92291,
    address: "Century Lane, Veryan, Truro, TR2 5QA",
    phone: "01872 501362",
    email: "thenewinnveryan@gmail.com",
    url: "https://www.thenewinnveryan.co.uk/rooms",
    // The owner's booking site, run through eviivo. OSM gives St Austell
    // Brewery as the operator.
    notes: "Traditional Cornish pub in Veryan with B&B rooms above: a super-king room with an en-suite bath and a double with an en-suite shower, both with satellite TV, tea and coffee, and a safe in the super-king. Cooked breakfast, porridge or cereals included, with vegetarian and vegan options. Free wifi, garden, laundry. Limited parking; a private garage for bikes overnight. Book online",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Both rooms are listed as allowing pets; no rules or charge published",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "elerkey-guest-house",
    name: "Elerkey Guest House",
    kind: "stay",
    // Centre of OSM way 1188491857, "Elerkey Guest House Art Gallery & Gifts".
    // The TR2 5QA postcode centroid, which the owner gives, is 55 m south-west.
    lat: 50.21896, lon: -4.92227,
    address: "Veryan, Truro, TR2 5QA",
    phone: "01872 501261",
    email: "annesquire123@gmail.com",
    url: "https://www.elerkeygalleryandgifts.co.uk/elerkey-guest-house",
    notes: "Family-run AA four-star B&B in a country house in its own grounds in the centre of Veryan, opposite the New Inn, with an art gallery, gift shop and coffee shop on site. Four en-suite rooms: two doubles, a twin and a family room; guest lounge, patio and lawns. Ample off-road parking. About a mile from Carne and Pendower beaches. Book by phone or email with Anne; ask her about special offers",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. Directories say pets aren't allowed",
      season: null,
      price_per_night: 110,
      price_note: "double or twin, two sharing, booked direct, 2026: £110–120 a night with a two-night minimum, £100–110 for three nights or more. Family room £155, three-night minimum",
    },
  },
  {
    slug: "veryan-camping-club-site",
    name: "Veryan Camping and Caravanning Club Site",
    kind: "stay",
    // Centre of OSM way 164081762, "Veryan Camping And Caravanning Club Site";
    // the Club's own point is 138 m north. The TR2 5PP postcode centroid,
    // which the Club gives, is 455 m south.
    lat: 50.23516, lon: -4.89845,
    address: "Tretheake, Veryan, Truro, TR2 5PP",
    phone: "01872 501658",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/cornwall/truro/veryan-camping-and-caravanning-club-site/",
    notes: "Camping and Caravanning Club site among narrow lanes at Tretheake, inland north of Portloe, run by Jennifer and Phillip Anslow. Secluded, many pitches framed by trees; most are sloping, so bring levelling ramps and chocks. Grass pitches with or without hookup, jumbo grass pitches for units over 5 × 9 m, and hardstandings with hookup; tents, caravans, motorhomes and rooftop tents. Toilets, showers, accessible facilities, parent and baby room, dishwashing, washing machines, ice pack freezing, gas, shop, wifi, motorhome service point, play area, a small fishing lake with permits on site. Fish and chip van once or twice a week. Check-in from 1pm, out by noon. Don't follow sat nav: the Club publishes safe approach instructions. A bus stop to Truro a quarter of a mile from the entrance; a pub within a mile",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Pets welcome; designated dog walk. No rules published on the site's page",
      season: { from: "04-30", to: "09-27" },
      price_per_night: null,
      price_note: "from £8.20 per adult for members; the full price is shown only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "lugger-hotel-portloe",
    name: "The Lugger",
    kind: "stay",
    // Centre of OSM way 983220646, "The Lugger". The TR2 5RD postcode centroid,
    // which the owner gives, is 39 m north-east.
    lat: 50.21864, lon: -4.89210,
    address: "Portloe, Truro, TR2 5RD",
    phone: "01872 501322",
    email: "reservations.lugger@bespokehotels.com",
    url: "https://bespokehotels.com/thelugger/",
    notes: "17th-century inn on the water's edge in the centre of Portloe, on the coast path; part of Bespoke Hotels. The owner calls it Cornwall's only AA five-star inn. 22 en-suite bedrooms, each with a walk-in shower or shower over bath; many with sea or harbour views, some with a balcony or terrace. The Lookout, in a converted boathouse 40 yards away, has a shower room and sea views. Three cottages as well, Cobb Cottage self-catering. Two AA rosette restaurant; breakfast in the Slipway Restaurant. Parking on site. Late check-out to 12.30pm £30 a room. Bespoke Hotels reservations 0330 094 5918",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "One dog per room, charged per night; say in advance. Directories say £25 a night and no dogs in the restaurant, only the conservatory",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "ship-inn-portloe",
    name: "The Ship Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1056116642, "The Ship Inn", whose website tag is the
    // St Austell Brewery page from before the community bought it. The TR2 5RA
    // postcode centroid, which the owner gives, is 31 m east.
    lat: 50.21845, lon: -4.89436,
    address: "Portloe, Truro, TR2 5RA",
    phone: "01872 713080",
    url: "https://www.shipinnportloe.com/accommodation",
    notes: "Community-owned free house in Portloe, up from the harbour: the Portloe Community Benefit Society bought it in September 2025 and reopened it that December. Rooms are being renovated and couldn't be booked in September 2026; the owner hopes to open them later in 2026. Skinner's ales and Cornish guests; seasonal small plates and pub classics using fish landed in Portloe. Bar from noon most days, 4pm on Monday; kitchen noon–3pm and 5–9pm, with a BBQ on Sunday evenings",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "carradale-portloe",
    name: "Carradale",
    kind: "stay",
    // OSM node 6517569386, "Carradale Guest House". The TR2 5RB postcode
    // centroid, from the National Trails listing, is 47 m west.
    lat: 50.21867, lon: -4.89683,
    address: "Portloe, Truro, TR2 5RB",
    phone: "01872 501508",
    email: "barbara495@btinternet.com",
    url: "https://www.nationaltrail.co.uk/en_GB/accommodation/carradale-2/",
    // The National Trails listing. The owner's website, carradale-bnb.co.uk, no
    // longer resolves, so none of this is confirmed.
    notes: "B&B in Barbara Leach's modern house on the edge of Portloe, a short walk from the coast path, with views across the valley. Two en-suite double or twin rooms with TV and tea and coffee, one on the ground floor with its own patio; guest lounge. Cooked breakfast. Packed lunches, laundry, luggage transfer and pick-ups, the listing says",
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The National Trails listing says dogs welcome",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "rising-sun-st-mawes",
    name: "The Rising Sun",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 550684473, "The Rising Sun". The TR2 5DJ postcode centroid,
    // which the owner gives, is 47 m east.
    lat: 50.15947, lon: -5.01370,
    // Street from OSM's tags.
    address: "The Square, St Mawes, Truro, TR2 5DJ",
    phone: "01326 270233",
    email: "reservations@staustellbrewery.co.uk",
    url: "https://www.risingsunstmawes.co.uk/our-rooms",
    notes: "St Austell Brewery pub with rooms on the square beside St Mawes harbour, where the ferry from Falmouth lands and the Place ferry leaves. En-suite standard, sea-view and premium sea-view doubles, a deluxe suite, a family apartment with a super-king and two singles, and a ground-floor accessible double with a wet room behind the pub; the rest are up stairs. Full breakfast included, 8–10am. No air conditioning. Check-in from 3pm, out by 11am. No parking: the public pay and display car park next door is about £6 for 24 hours. Lunch and dinner in the bar and restaurant. Central reservations 0345 241 1133",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms at an extra rate, with a welcome pack; ask for one when booking. On a lead in public areas, not left alone in the room. Allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
    },
  },
  // Section 31.
  {
    slug: "treveague-campsite",
    name: "Treveague Campsite",
    kind: "stay",
    // Centre of OSM way 1028521091, "Treveague Farm Campsite". The PL26 6NY
    // postcode centroid, which the owner gives, is 85 m east.
    lat: 50.23498, lon: -4.80375,
    address: "Gorran, St Austell, PL26 6NY",
    phone: "01726 844027",
    email: "info@treveague.co.uk",
    url: "https://www.treveaguecampsite.co.uk/booking-prices",
    // Prices from the owner's 2026 rate sheet; the 7.5 m limit and dog rules
    // from its terms and conditions.
    notes: "Quiet, low-key campsite on the Dodman headland near Gorran, looking down to Hemmick beach, with sea views from most pitches and three beaches within walking distance; the owner calls it the closest campsite to the path at the Dodman. All pitches grass, most with hookup and water, chosen when booking; some suit smaller motorhomes only, and the non-electric pitches can slope, so bring levelling ramps. Motorhomes up to 7.5 m. Shower block with guest kitchen, drying room and accessible facilities (RADAR key); showers take 50p tokens. Coin laundry, motorhome service point, 22 kW EV chargers to prebook, phone charging, play area. The Secret Garden café and bar on site, with takeaway. Fire pits and BBQs only on slabs. No supermarket deliveries. Quiet from 10pm; no vehicle movements after dark. Pitches from noon, out by 10am. ANPR barrier: last check-in 8pm Sunday–Thursday, 8.30pm Friday–Saturday. 25% non-refundable deposit, the balance 28 days ahead. Coast path walkers arriving on foot pay £16 for the first night for a tent for two, with a quieter walkers' area, and needn't book if they arrive before reception closes",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to four per pitch, £4 each a night; free for one adult with one dog. On a lead at all times on site, never left alone, including in vans or cars. Not in the shower block. Dog shower on site. Banned breeds refused",
      season: { from: "04-17", to: "09-25" },
      price_per_night: 26,
      price_note: "standard or sheltered electric pitch, two adults, 17–30 April and 5–21 May 2026; £31 in June to mid July and September, £42.50 at late May half term and 17 July–31 August. Non-electric from £21. Extra adult or child £7.50",
      hookup: true,
    },
  },
  {
    slug: "treveor-farm",
    name: "Treveor Farm Caravan and Camping Site",
    kind: "stay",
    // Centre of OSM way 85397360, "Treveor Farm Campsite". The PL26 6LW
    // postcode centroid, which the owner gives, is 250 m south-west.
    lat: 50.24374, lon: -4.82100,
    address: "Gorran, St Austell, PL26 6LW",
    phone: "01726 842387",
    email: "info@treveorfarm.co.uk",
    url: "https://www.treveorfarm.com/bookings",
    notes: "Family-run site of four acres on a working dairy farm near Gorran, with room for up to 37 caravans and tents; tents, caravans, campervans, motorhomes and walkers. Grass and hardstanding pitches, all with 16 A hookup. Heated toilet and shower block with private cubicles and hot water, hairdryers, laundry, freezer, chemical disposal, wifi, play area, an outdoor shower for wetsuits and dogs. Arrive from 1pm, leave by 11am, any day. One parking space per pitch. 25% non-refundable deposit. Coast path walkers on foot pay a reduced rate: ring reception. Don't follow sat nav, which sends you through Mevagissey's narrow one-way streets: come by the B3273 from St Austell, turn right at the crossroads at the top of the hill past Pentewan Sands, signed Gorran Haven and Heligan, through Gorran Highlanes, then right at the fork after 250 yards and first right; the entrance is 300 m on the right",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome, £1 a night",
      season: { from: "04-20", to: "09-30" },
      price_per_night: 19,
      price_note: "two people, pitch, car and hookup, 20 April–21 May 2026; £22 to 16 July, £30 17 July–31 August, £17 in September. Extra person 5 and over £5",
      hookup: true,
    },
  },
  {
    slug: "seaview-gorran-haven",
    name: "Seaview Gorran Haven",
    kind: "stay",
    // Centre of OSM way 161542628, "Seaview", whose website tag,
    // seaviewinternational.com, now redirects to a parked page. The PL26 6LL
    // postcode centroid, which the owner gives, is 180 m south-east.
    lat: 50.23661, lon: -4.82096,
    address: "Boswinger, Gorran Haven, St Austell, PL26 6LL",
    phone: "01726 843425",
    url: "https://southwestholidayparks.co.uk/locations/seaview/discover-seaview/holidays/",
    // The owner's site, South West Holiday Parks, describes only lodges and
    // holiday caravans. Touring from UK Parks and Pitchup listings via search
    // summaries, since Pitchup refuses automated requests.
    notes: "Five-star holiday park at Boswinger, formerly Seaview International, run by South West Holiday Parks, above Hemmick Beach, 15 minutes' walk down a narrow path. The owner's site describes lodges and holiday caravans, an outdoor heated pool, gym, sun terrace, coffee lounge and a dog exercise field; the Sea Breeze Café and a shop are on site. Directories still list touring: UK Parks gives 48 touring pitches with electricity, water and drainage, for caravans, motorhomes and tents; Pitchup lists touring pitches for 2026. Ring to confirm touring before relying on it",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "The owner welcomes dogs for a small supplement in selected accommodation and has a dog exercise field; it doesn't say whether touring pitches take them. Directories say dogs allowed",
      season: null,
      price_per_night: null,
      hookup: null,
    },
  },
  {
    slug: "yha-boswinger",
    name: "YHA Boswinger",
    kind: "stay",
    // Centre of OSM way 93332191, "YHA Boswinger". The PL26 6LL postcode
    // centroid is 30 m north.
    lat: 50.23539, lon: -4.81906,
    address: "Boswinger, Gorran, St Austell, PL26 6LL",
    phone: "0345 371 9107",
    url: "https://www.yha.org.uk/hostel/yha-boswinger",
    // YHA's page for the hostel and its Independent Hostels UK entry, written
    // by the hostel.
    notes: "YHA partner hostel built round a courtyard in the hamlet of Boswinger, now independently owned; ten minutes' walk to Hemmick Beach and the coast path. Sleeps about 40 in ten rooms of two, four or six beds, booked by the room up to a month or two ahead, or the whole place as sole use. Self-catering kitchen, dining room opening onto the patio, lounge, picnic tables, BBQ and fire pit area; cooked breakfast can be booked on arrival. Towels to hire. Private rooms check in 5–7.30pm. Parking for twelve cars. The Tiny House, a self-contained studio for two with kitchenette and courtyard, is let separately. Very dark skies",
    verified: "2026-09-16",
    stay: {
      type: "hostel",
      dogs: false,
      dogs_note: "Only with sole use of the whole hostel or the Tiny House, added at checkout; not in bedrooms, on furniture or in the kitchen, and on a lead in the grounds. Room bookings can't bring a dog",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "tregarton-park",
    name: "Tregarton Park",
    kind: "stay",
    // Centre of OSM way 844416455, "Tregarton Park". The PL26 6NF postcode
    // centroid, which the owner gives, is 500 m south-east.
    lat: 50.25866, lon: -4.82888,
    address: "Gorran, St Austell, PL26 6NF",
    phone: "01726 843666",
    url: "https://tregarton.co.uk/faqs/",
    notes: "Family touring park of twelve acres in countryside north-west of Gorran, for touring caravans, motorhomes and tents only; no static caravans. Individual pitches divided by hedges or shrubs, every one with 10 A hookup: grass or gravel hardstanding, some with water and grey waste connections, in Large, Premium, XL and Jumbo XL sizes chosen when booking. Heated swimming pool, shop, takeaway and poolside bar, open 1 May–25 September 2026; tennis, wifi across the park, accessible wet room. BBQs allowed; no fire pits or open fires. One pup tent per pitch. Pitches from midday, out by 11am; any arrival day, with minimum stays in the summer holidays; no refunds for leaving early. Reception 9am–5pm. Porthluney Cove is a mile and a half by road. 2027 season 30 April–25 September",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to two per pitch for a small extra charge. On a short lead at all times, never left unattended. Dog exercise field, two dog patios by the pool and the indoor Garden Room to eat with them; not in the pool, shop, café, toilets, showers or launderette",
      season: { from: "05-01", to: "09-26" },
      price_per_night: null,
      price_note: "shown only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "gorran-haven-car-park",
    name: "Gorran Haven car park",
    kind: "stay",
    // Centre of OSM way 26383249, a paying grass car park with no name or
    // operator; park4night's pin is 34 m south-west. park4night gives PL26 6JG.
    lat: 50.24048, lon: -4.79080,
    address: "Gorran Haven, St Austell, PL26 6JG",
    url: "https://park4night.com/en/place/185090",
    // park4night listing and reviews, rated 4.4 from 25, the latest August
    // 2026. No owner found for this car park.
    notes: "Large attended car park above Gorran Haven, mostly sloping grass with some gravel, where vans stay overnight with the attendant's blessing; bring levelling ramps. A 2023 reviewer found a separate motorhome area of about four level spaces through a gate by the boat storage, with sea views. No services. Public toilets, the beach, cafés, a pub and fish and chips are two minutes' walk down the hill; a July 2026 reviewer found no village shop open. The lane in is narrow. Reviewers found it quiet, though in 2024 building work next to the van area started at 6am. The coast path to Mevagissey starts in the village, with a bus back",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 15,
      price_note: "24 hours, paid to the attendant, reviewers say, August 2026; £4 for the day",
      hookup: false,
    },
  },
  {
    slug: "rising-sun-portmellon",
    name: "The Rising Sun Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 59718971, "The Rising Sun Inn", whose phone tag is the
    // old number. The PL26 6PL postcode centroid, which the owner gives, is
    // 23 m south.
    lat: 50.26253, lon: -4.78585,
    address: "Portmellon, Mevagissey, PL26 6PL",
    phone: "01726 473214",
    email: "hello@therisingsuninn.com",
    url: "https://therisingsuninn.com/rooms",
    notes: "17th-century free house on the beach at Portmellon Cove, on the coast path a 15-minute walk from Mevagissey, run by Kelly's family; refurbished inside, with seats on the beach wall. Two newly refurbished rooms directly above the pub, both with a king-size bed, en-suite and a full sea view: the Green Room, and the Blue Room with its own kitchen and weekly rates. No breakfast. Check in from 4pm, out by 10am. Parking in the public car park next door, charged daily or weekly and not the pub's, or on nearby residential roads. Rooms book through Breakwater Holidays. Bar Monday noon–9pm, Tuesday–Saturday noon–11pm, Sunday 11am–9pm; restaurant Wednesday–Saturday noon–3pm and 5–9pm, Sunday brunch 11am–3pm; pizza and quiz on Tuesdays. The Shack across the road is a kiosk café with a few groceries",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Dogs very welcome in the pub; ring to discuss dogs staying in the rooms",
      season: null,
      price_per_night: 110,
      price_note: "Green Room, from; Blue Room with kitchen from £130",
    },
  },
  {
    slug: "portmellon-car-park",
    name: "Portmellon car park",
    kind: "stay",
    // Centre of OSM way 117338638, an unnamed car park behind the Rising Sun;
    // park4night's pin is 12 m away. park4night gives PL26 6PL.
    lat: 50.26251, lon: -4.78618,
    address: "Portmellon Park, Mevagissey, PL26 6PL",
    url: "https://park4night.com/en/place/467996",
    // park4night listing and reviews, rated 4.75 from 8, the latest August
    // 2026. The Rising Sun's rooms page says the car park isn't the pub's. No
    // owner found.
    notes: "Small public pay car park behind the Rising Sun Inn at Portmellon, across the road from the beach, where vans stay overnight: mostly level, room for about five vans. A portaloo in the car park, open all night and kept clean; the Shack kiosk café opposite from about 10am. The ticket machine takes cards; press the yellow button first for the campervan fee. Quiet nights, with houses around. The approach through Mevagissey is narrow, and a 2024 reviewer wouldn't bring a motorhome over 6 m. A 15-minute walk to Mevagissey harbour; a circular walk to Gorran Haven by the coast path",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "£6 for the night, an August 2026 reviewer says; another paid £15 for 24 hours in November 2025",
      hookup: false,
    },
  },
  {
    slug: "kerthua-park-meadow",
    name: "Kerthua Park Meadow",
    kind: "stay",
    // The PL26 6EW postcode centroid, which the Club gives; OSM has no feature
    // for the site. The Club's own point is 270 m north-west.
    lat: 50.26381, lon: -4.80807,
    address: "St Ewe, St Austell, PL26 6EW",
    phone: "07966 962220",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/mevagissey/kerthua-park-meadow/",
    // The Caravan and Motorhome Club's listing, including the owner's own
    // description. No owner website found.
    notes: "Caravan and Motorhome Club Certificated Location, members only: an adults-only caravan and motorhome site on a lawned acre and a half, a mile and a half from Mevagissey. Generous pitches separated by fences and willow trees, each with its own 16 A hookup and water. Chemical and grey water disposal, recycling, battery charging; woods and a field on site for walking dogs. Unfenced water on site. Latest arrival 10pm, departure by noon. Directions for members only",
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing calls it dog friendly, with a dog walk on site",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "higher-kestle-farm",
    name: "Higher Kestle Farm Campsite",
    kind: "stay",
    // Centre of OSM way 844416449, "Higher Kestle Farm Campsite"; the
    // campsites.co.uk pin is 120 m north-west.
    lat: 50.27150, lon: -4.81627,
    address: "Higher Kestle, St Ewe, St Austell",
    url: "https://www.campsites.co.uk/search/campsites-in-cornwall/st-austell/higher-kestle-farm-campsite",
    // campsites.co.uk listing, with reviews to September 2026. No owner
    // website found.
    notes: "Small, level site of 1.75 acres west of Mevagissey, directories say: 25 electric grass pitches, two extra-large ones, two electric hardstandings and two non-electric pitches, all 10 A, up to six people each; tents, campervans and tourers. Modern toilet and shower block, sheltered washing-up, laundry, ice pack freezer, free wifi, picnic benches. BBQs off the ground; no campfires. A woodland walk to Heligan; Mevagissey's pubs half an hour's walk. Reviewers in 2026 found big pitches, clean facilities and a walkable route to Mevagissey",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say up to two per pitch",
      // campsites.co.uk says 2 April–1 October.
      season: null,
      price_per_night: null,
      price_note: "pitch for two from £18, campsites.co.uk says",
      hookup: true,
    },
  },
  {
    slug: "willow-car-park-mevagissey",
    name: "Willow Car and Coach Park",
    kind: "stay",
    // Centre of OSM way 117336505, "Willow Car Park", operator Mevagissey
    // Garages; park4night's pin is 47 m south. park4night gives PL26 6SB.
    lat: 50.27200, lon: -4.79034,
    address: "Valley Road, Mevagissey, PL26 6SB",
    url: "https://park4night.com/en/place/56504",
    // park4night listings 56504 (4.44 from 79, the latest September 2026),
    // 162158 (Polkirt Hill) and 257264 (Sunny Corner). No owner website found.
    notes: "Car and coach park at the top of Mevagissey, five minutes' walk from the harbour, with a section for campers and motorhomes on the right: level hardstanding, suits large motorhomes; 7.3 m is fine. Friendly staff on site. Overnight is 6pm–10am; staying on into the day is paid next morning. Bin at the entrance, CCTV. Public toilets 100 yards down the road, 8am–6pm, a September 2026 reviewer says. Long vehicles should come in by the B3273, not through the town. Mevagissey's harbour car park on Polkirt Hill is signed no overnight camping or sleeping, with a £500 warning in 2026, and its approach is very narrow; the Sunny Corner car park no longer allows overnight stays",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 10,
      price_note: "6pm–10am, reviewers say, August 2026; a September 2026 reviewer paid £15. £5 for two hours by day. The car park posted winter rates of £5 from 4pm to 10am in 2024",
      hookup: false,
    },
  },
  {
    slug: "ship-inn-mevagissey",
    name: "The Ship Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1006300303, "The Ship Inn". The PL26 6UQ postcode is
    // the owner's.
    lat: 50.27016, lon: -4.78773,
    // House number from OSM's tags.
    address: "1 Fore Street, Mevagissey, PL26 6UQ",
    email: "shipinn.meva@outlook.com",
    url: "https://www.theshipinnmeva.co.uk/en-GB/rooms",
    notes: "Traditional fisherman's pub in the middle of Mevagissey by the harbour, with real ales and home-cooked food. Five letting rooms: cosy en-suite doubles, a triple family room with a double and a single and a bath-only en-suite, and a quad family room with a double and two singles; TV and tea and coffee. Continental or cooked breakfast, or breakfast to go. Check in from 2pm, with 24-hour and contactless check-in. Parking is off site. Book online",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Well-behaved dogs welcome; £20 per booking with one or more dogs, paid on arrival. Say when booking",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  // Section 32.
  {
    slug: "pentewan-sands",
    name: "Pentewan Sands Holiday Park",
    kind: "stay",
    // Centre of OSM way 161694186, "Pentewan Sands"; park4night's pin is 200 m
    // south-west. The PL26 6BT postcode centroid, which the owner gives, is
    // 170 m south-west.
    lat: 50.28857, lon: -4.78365,
    address: "Pentewan, St Austell, PL26 6BT",
    phone: "01726 843485",
    email: "info@pentewan.co.uk",
    url: "https://pentewan.co.uk/faqs/",
    // Prices from park4night listing 357500, rated 3.73 from 15, the latest
    // June 2026.
    notes: "Large five-star family holiday park with its own sandy beach beside Pentewan village, on the coast path: touring pitches for tents, caravans and motorhomes, and holiday homes. Indoor pools, restaurants, beach bars, fish and chips and a shop. Arrive from 11am; no arrivals after dusk and no pitching 10pm–9am. No young adult single-sex groups, no generators. 25% deposit on touring pitches, the balance 42 days ahead. Quiet after 11.30pm. Reviewers say pitches nearer the sea cost more and that phone signal is poor; same-day bookings go by phone, not online. Heligan Caravan and Camping Park is the same owner's dog-friendly site",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: false,
      dogs_note: "No pets of any kind anywhere on the park or its beach. Registered assistance dogs on a harness only, with certification sent ahead",
      season: { from: "03-20", to: "10-31" },
      price_per_night: null,
      price_note: "a motorhome and two people with hookup £35, April 2026; a small van for two without hookup £31 for two nights, May 2026, reviewers say",
      hookup: null,
    },
  },
  {
    slug: "heligan-campsite",
    name: "Heligan Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 173693959, "Heligan Woods". The PL26 6EL postcode
    // centroid, which the owner gives, is 260 m north-west.
    lat: 50.28780, lon: -4.81311,
    address: "Pengrugla, St Austell, PL26 6EL",
    phone: "01726 842714",
    email: "info@heligancampsite.com",
    url: "https://heligancampsite.com/faqs/",
    notes: "Family-run five-star park beside the Lost Gardens of Heligan, with countryside and sea views; sister site to Pentewan Sands. Tarmac and gravel hardstandings, grass electric and non-electric pitches, campervan and motorhome pitches; 16 A hookups, and 7.5 kW EV chargers on some pitches for £1 a night plus use. Heated amenity block with private shower rooms and an accessible wet room, dishwashing, launderette, drying room, dog shower, play area; shop and hot drinks in reception. Lobb's Farm Shop five minutes' walk. Paid wifi. No open fires or disposable BBQs. Pitches 12–8pm or dusk, later only by arrangement; out by 10.30am. £50 deposit per booking. A gate links the site to the Heligan car park, where the 471 bus to Mevagissey, Gorran and St Austell stops. Mevagissey is 40 minutes to an hour on foot by the hilly, off-road cycle path",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "All touring pitches take dogs, two per booking at most, at the warden's discretion; charged, the amount by phone. On a lead on site, never left unattended, including in vehicles or tents. Rottweilers, Dobermanns and American Bully XLs refused",
      // The owner says open January to November; no dates.
      season: null,
      price_per_night: null,
      price_note: "shown only in the tariff sheet and online booking",
      hookup: true,
    },
  },
  {
    slug: "little-winnick",
    name: "Little Winnick Touring Park",
    kind: "stay",
    // Centre of OSM way 437733450, "Little Winnick Touring Park". The PL26 6DL
    // postcode centroid, which the owner gives, is 180 m west.
    lat: 50.29934, lon: -4.79777,
    // Street from OSM's tags.
    address: "Pentewan Road, Pentewan, St Austell, PL26 6DL",
    phone: "01726 843687",
    email: "mail@littlewinnick.co.uk",
    url: "https://www.littlewinnick.co.uk/faqs",
    notes: "Traditional, quiet, flat family park in the Pentewan Valley beside a river, with direct access to the Pentewan Valley trail: Pentewan beach and its pub are a 30-minute level walk. Grass pitches with or without 10 A hookup and electric hardstandings with a TV aerial point, at least 8 × 8 m; premium pitches larger. Toilets, showers, family bathroom, accessible toilet and shower, laundry; black water disposal and a drive-over grey waste drain. Café and shop on site, dog walking meadow, rally field. Very limited phone signal; slow wifi. A bus stop outside for Mevagissey and St Austell. Check in 1–6pm, late arrivals only by arrangement; out by 11am. Changes to a booking carry an admin fee",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch. On a lead on site, never left alone in the unit, not in any building. Pentewan beach doesn't allow dogs in summer; Carlyon Bay does",
      // The owner says late April to the end of September.
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "the-meadows-pentewan",
    name: "The Meadows Campsite",
    kind: "stay",
    // Centre of OSM way 224301907, "The Meadows Campsite". The PL26 6DL
    // postcode centroid, which the owner gives, is 170 m north-west.
    lat: 50.29840, lon: -4.79888,
    address: "B3273, Pentewan Valley, St Austell, PL26 6DL",
    email: "enquiries@themeadowspentewanvalley.co.uk",
    url: "https://www.themeadowspentewanvalley.co.uk/tariff-availability/",
    notes: "Small adults-only campsite of six acres in the Pentewan Valley on the B3273, run by Mike and Donna, who live on site; easy access for caravans, and it adjoins the Pentewan Valley trail. Hookup pitches of 10 A with hardstanding and grass, many suiting large motorhomes; non-electric grass camping wings and tent-only pitches in a wildflower meadow. Toilet and shower block with private wet-room cubicles, accessible shower room, chemical and grey water disposal, free ice pack freezing and phone charging, small shop, the Alfresco bar, fire pits and BBQs to hire, secure dog exercise area. Paid wifi by app; TV reception not guaranteed. A bus stop nearby. In July and August hookup pitches need five nights and tent pitches three, except late availability. No car camping, sleeping in commercial vans or sign-written commercial vehicles. Book by email or the site's form; deposits non-refundable. Backpacker pitches at a discount",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to four per pitch, on a lead except in the dog run; none on the dangerous dogs list. Pentewan Sands beach isn't dog friendly while the site is open",
      season: { from: "05-01", to: "09-24" },
      price_per_night: null,
      price_note: "two adults and a car, 2026: hardstanding £29, grass £27 in May, June and September; £34 and £32 in July and August. The tariff adds £6 a night for hookup. Extra adult £5",
      hookup: true,
    },
  },
  {
    slug: "menagwins-farm",
    name: "Menagwins Farm Pop Up and Pitch",
    kind: "stay",
    // The PL26 7AN postcode centroid, which the owner gives; OSM has no feature
    // for the site. park4night's pin is 390 m west.
    lat: 50.32133, lon: -4.78631,
    address: "Pentewan Road, St Austell, PL26 7AN",
    phone: "07817 789696",
    url: "https://menagwinsfarm.co.uk/",
    // Facilities and the price paid from park4night listing 426793, rated 4.57
    // from 7, the latest July 2026. Bookings go through campsites.co.uk.
    notes: "Back-to-basics family-run pop-up campsite in the Pentewan Valley off Pentewan Road, on the edge of St Austell, run by Daisy and Charlie. Five non-electric 12 × 12 m grass pitches for campervans, caravans and motorhomes and 25 for tents; one bell tent. Compost loos and cold showers. Reviewers walk to the coast at Porthpean and along the Duporth cliffs to Charlestown, or down the tarmac cycle path to Pentewan. 15% non-refundable deposit; cancel in writing with seven days' notice",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Up to three per pitch, on a lead. Not in the bell tent",
      // The owner says pitches from April to November; campsites.co.uk says to
      // 1 November.
      season: null,
      price_per_night: 16.5,
      price_note: "touring pitch, from; tent pitch from £14. A July 2026 reviewer paid £18 for two in a motorhome",
      hookup: false,
    },
  },
  {
    slug: "st-austell-rfc-cl",
    name: "St Austell RFC",
    kind: "stay",
    // Centre of OSM way 301168389, "St Austell Rugby Football Club". The Club's
    // own point is 140 m north-west; the PL26 7FH postcode centroid, which the
    // Club gives, is 8 m away.
    lat: 50.32791, lon: -4.77707,
    address: "Tregorrick Park, Tregorrick Road, St Austell, PL26 7FH",
    phone: "01726 76430",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/st-austell/st-austell-rfc/",
    // The Caravan and Motorhome Club's listing. No owner website found.
    notes: "Caravan and Motorhome Club Certificated Location, members only, on an acre at St Austell Rugby Football Club's ground at Tregorrick, on the southern edge of St Austell. Hookup 16 A. The listing says Porthpean beach is within walking distance and Charlestown about a mile, with the Pentewan Valley trail to Pentewan beach; a pub and shop within a mile. The Club lists latest arrival 3pm and departure 11am. Directions for members only",
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing calls it dog friendly, with a dog walk from the site",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  {
    slug: "broad-meadow-house",
    name: "Broad Meadow House",
    kind: "stay",
    // Centre of OSM way 970654457, "Broad Meadow House". The PL25 3NX postcode
    // centroid, which the owner gives, is 120 m west.
    lat: 50.33248, lon: -4.75527,
    address: "Quay Road, Charlestown, St Austell, PL25 3NX",
    phone: "01726 76636",
    email: "stay@broadmeadowhouse.com",
    url: "https://broadmeadowhouse.com/",
    notes: "Tiny slow-camping site in a seaside meadow on the coast path above Charlestown harbour, with no more than 12 guests at once across a handful of pitches, each with a picnic bench and parasol; hookup optional. Tents and small campervans no bigger than a VW T6 LWB, 5.3 m and under 3,000 kg. Shared shower and loo rooms, or a private wet room reserved for exclusive use. Pre-paid advance bookings only, at least one clear working day ahead; self check-in; no walk-ins or same-day arrivals, and no arrivals on Sundays. Minimum three nights off peak and seven at Whitsun and in July and August; single nights only for backpackers, cyclists and canoeists, if free. The owner's site says the meadow reopens for camping on 26 March 2027. The Posh Shed, a self-catering cabin for four, is let all year",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dogs welcome; no rules or charge published",
      // The owner says Easter to October, weather permitting.
      season: null,
      price_per_night: null,
      price_note: "from £15 a person a night, with discounts for families, solo and green travellers and some services",
      hookup: true,
    },
  },
  {
    slug: "pier-house-charlestown",
    name: "Pier House",
    kind: "stay",
    // OSM node 925772504, "Pier House Hotel". The PL25 3NJ postcode centroid,
    // which the owner gives, is 100 m north-west.
    lat: 50.33136, lon: -4.75701,
    // Street from OSM's tags.
    address: "Charlestown Road, Charlestown, St Austell, PL25 3NJ",
    email: "reservations@staustellbrewery.co.uk",
    url: "https://pierhousehotel.com/our-rooms",
    notes: "St Austell Brewery hotel in a listed building at the entrance to Charlestown's Georgian harbour, on the coast path. Fifteen boutique rooms, all up stairs, some with steps to the bathroom or a sunken shower; cosy cabin-style doubles and larger rooms, all with king-size beds. Full breakfast included, 8–10am. No air conditioning. Check in from 3pm, out by 10.30am. Two nights minimum on Friday and Saturday at peak times. Full payment taken in the 48 hours before arrival. Reservations 0345 241 1133",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay. On a lead in public areas, never left alone in the room; allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "rashleigh-arms",
    name: "The Rashleigh Arms",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 237949897, "The Rashleigh Arms". The PL25 3NJ postcode
    // centroid, which the owner gives, is 120 m south-west.
    lat: 50.33324, lon: -4.75857,
    // Street from OSM's tags.
    address: "Charlestown Road, Charlestown, St Austell, PL25 3NJ",
    phone: "01726 73635",
    email: "reservations@staustellbrewery.co.uk",
    url: "https://rashleigharms.co.uk/our-rooms",
    notes: "St Austell Brewery pub with rooms by Charlestown's harbour, a few minutes from the coast path. Eighteen nautically styled rooms on the first to third floors, stairs only; cosy doubles and superior rooms with harbour and sea views; no family rooms. Full breakfast included, 7.30–10am. No air conditioning. Check in from 3pm, out by 10am. Car park behind the pub, first come first served; register the car at check-in. Two nights minimum on Friday and Saturday at peak times. Pub open 7.30am–11pm. Reservations 0345 241 1133",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dog-friendly rooms only, booked before arrival; £20 per dog per stay. On a lead in public areas, never left alone in the room; allowed everywhere but the main restaurant",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "carlyon-bay-camping",
    name: "Carlyon Bay Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 1190099477, "Carlyon Bay Caravan & Camping Park";
    // park4night's pin is 65 m north. The PL25 3RE postcode centroid, which the
    // owner gives, is 60 m east.
    lat: 50.34115, lon: -4.73981,
    address: "Cypress Avenue, Carlyon Bay, St Austell, PL25 3RE",
    phone: "01726 812735",
    email: "holidays@carlyonbaycamping.co.uk",
    url: "https://www.carlyonbaycamping.co.uk/faqs/",
    notes: "Family-run touring park in 30 acres of meadow and woodland at Carlyon Bay, a ten-minute walk from the beach and 40 minutes along the coast path from Charlestown. Large level pitches, typically 11–13 m wide: grass with hookup, part hardstanding with hookup, and serviced pitches with water and grey waste; hookups 10 A. No EV charging. Heated outdoor pools from late May half term to mid September, two play areas, crazy golf, three toilet and shower blocks with family rooms and an accessible room, coin laundry, licensed shop with gas, free wifi. No clubhouse or bar; no wood burners or fire pits; no pitching after dark; quiet after 11pm. Check in 9am–6pm in low season, 8.30am–7pm in high; pitches from noon, out by 11am. Online bookings two nights minimum, seven in late July and August; £75 deposit and admin fee. Couples and families only. Walkers and cyclists needn't book: £15 a person for one night, arriving by 6pm, 7pm in high season. A request stop for the 25 Fowey–Par–St Austell bus at the end of the drive; the 24 from Tregrehan Turn on the A390. A reviewer heard trains",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Friendly dogs under close control, tethered or on a lead; not dogs that are bad with children, other dogs or cats, since a campsite cat lives there. Banned breeds refused, and XL Bullies may be. Carlyon Bay beach takes dogs all year",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking; walkers and cyclists £15 a person for one night",
      hookup: true,
    },
  },
  {
    slug: "east-crinnis",
    name: "East Crinnis Holiday Park",
    kind: "stay",
    // Centre of OSM way 973242505, "East Crinnis Holiday Camp". The PL24 2SD
    // postcode centroid is 80 m north-west.
    lat: 50.34423, lon: -4.72438,
    address: "East Crinnis Farm, Par, PL24 2SD",
    // Phone from OSM's tags; the owner's pages give only email.
    phone: "01726 813023",
    email: "info@eastcrinnis.com",
    url: "https://www.eastcrinnis.com/caravan-camping",
    notes: "Family-run park near Par, ten minutes' walk from the coast path and 20 minutes from Crinnis and Carlyon Bay beach: camping and touring pitches, a geodome and yurt, three log cabins and holiday homes. Level pitches of at least 8 × 8 m: gravel or tarmac hardstanding, grass electric or non-electric, 16 A hookups. The main site is open March–October, the Summer Meadow April–September. Water points and showers near every pitch; chemical waste and a grey water drop on the main site only. Campfires in your own fire basket or pit, supervised; BBQs off the ground. One car per pitch; extra parking at reception for a charge. Play park, Grumpy's Pond and a two-acre field for walking dogs, the Shack, and the Avalanche slip and slide. Choose a pitch on the site map when booking online",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£7.50 per dog a night, two at most, the tariff page says. Supervised and on a lead in the camping areas. Mind the ducklings, moorhens and geese at the pond",
      // The main site March–October; no dates.
      season: null,
      price_per_night: null,
      price_note: "non-electric pitch from £18 in low season",
      hookup: true,
    },
  },
  {
    slug: "britannia-inn-par",
    name: "Britannia Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1254187739, the pub's free customer car park;
    // park4night's pin is 25 m away. The PL24 2SL postcode centroid, which the
    // owner gives, is 300 m east.
    lat: 50.34575, lon: -4.73969,
    address: "St Austell Road, Tregrehan, Par, PL24 2SL",
    phone: "01726 812889",
    url: "https://park4night.com/en/place/60861",
    // park4night listing 60861 and reviews, rated 4.85 from 207, the latest
    // September 2026. Rooms and hours from the owner's site, which says nothing
    // about vans.
    notes: "Former coaching inn on St Austell Road between St Austell and Par, family owned since 1981, where vans stay free overnight: a large grass field behind the pub, closed to vans out of season, and a tarmac car park. Toilets, drinking water and an Elsan point; no showers or grey waste. Reviewers ask that you eat or drink in the pub. The road is busy and noisy, quiet only from about 11pm to 4am, reviewers say; in summer they mention a DJ, a bouncy castle and parties in the marquee beside the field, and the owner warns of live music some weekends 9–11.30pm. Breakfast 8–10am daily; food noon–8pm Sunday–Thursday, to 9pm Friday–Saturday, shorter out of season. Also eight AA four-star rooms, one night's deposit. Carlyon Bay beach 15–20 minutes' walk; a footpath from St Blazey Gate reaches the Eden Project in about 40 minutes, a reviewer says",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      dogs_note: "The owner welcomes well-behaved dogs in certain dining areas; the room pages don't mention dogs",
      season: "all-year",
      price_per_night: null,
      price_note: "free, reviewers say, September 2026",
      hookup: false,
    },
  },
  {
    slug: "boscoppa-farm",
    name: "Boscoppa Farm",
    kind: "stay",
    // OSM node 14059116401, "Boscoppa farm campsite". The PL25 3TE postcode
    // centroid, which the owner gives for sat nav, is 430 m south-east.
    lat: 50.35586, lon: -4.75762,
    address: "Boscoppa, St Austell, PL25 3TE",
    phone: "07594 507352",
    email: "hello@boscoppafarm.co.uk",
    url: "https://www.boscoppafarm.co.uk/faqs",
    notes: "Family-run glamping and camping site at the top of a working farm on the north-east edge of St Austell, looking over Carlyon Bay; tractors, balers and horses about. Non-electric grass pitches for up to two adults and two children, parking beside; small campervans such as a Transit or VW Transporter welcome, but no large motorhomes or RVs because of the access. Modern shower and toilet blocks with hot water. Barrel cabins, bell tents and emperor tents too, with fire pits; logs for sale. Pitches check in and out at noon. No check-in desk: go straight to your numbered pitch, following the signs past Bishop Bronescombe School, over the bridge and cattle grid, then left at the farm sign. The Eden Project is ten minutes by car. Aliki answers the phone for help",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Welcome, on a lead around the farm; not on beds in the glamping. Dangerous breeds refused",
      // The owner says it reopens on 1 April; no closing date.
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
      hookup: false,
    },
  },
  {
    slug: "par-sands-holiday-park",
    name: "Par Sands Holiday Park",
    kind: "stay",
    // Centre of OSM way 99268349, an unnamed caravan site behind Par beach. The
    // PL24 2AS postcode centroid, which the owner gives, is 140 m south-east.
    lat: 50.34936, lon: -4.69762,
    address: "Par, PL24 2AS",
    phone: "01726 210486",
    url: "https://www.parkholidays.com/holidays/parks/cornwall/par-sands",
    // Park Holidays' page for the park, which lists touring among its
    // accommodation but publishes no pitch details or rules for pitches.
    notes: "Park Holidays holiday park behind the dunes of Par beach, open all year, mostly holiday caravans and lodges, with pet-friendly breaks; the owner also lists touring, camping and pods. Heated indoor pool, steam room, play area, multi-sports and tennis courts, pitch and putt, wildlife lake, launderette and a dog wash station. Card payment only across the park. Pitch types, hookup and whether touring pitches take dogs aren't published: ring before booking",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Pet-friendly caravans and a dog wash station; the owner doesn't say whether touring pitches take dogs",
      season: "all-year",
      price_per_night: null,
      hookup: null,
    },
  },
  {
    slug: "royal-inn-par",
    name: "The Royal Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1363612837, "The Royal Inn". The PL24 2AJ postcode
    // centroid, which the owner gives, is 130 m east.
    lat: 50.35686, lon: -4.70379,
    address: "66 Eastcliffe Road, Par, PL24 2AJ",
    phone: "01726 815601",
    email: "info@royal-inn.co.uk",
    // The owner's site's security certificate had expired in September 2026.
    url: "https://royal-inn.ladybirdinns.co.uk/rooms/",
    notes: "Inn in Par near the station, often fully booked, so book ahead. Fifteen refurbished en-suite rooms with twin or king-size beds: family rooms with bunks or sofa beds, two four-posters, and a ground-floor accessible room with a wet-room shower sleeping four. Full English or continental breakfast included. Free wifi. Food cooked to order from local produce: breakfast 8am–noon, lunch from noon, à la carte 6–9pm",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. Directories say dogs are welcome in the lower bar, and reviewers mention a dog in their room",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "kilhallon-farm-cl",
    name: "Kilhallon Farm",
    kind: "stay",
    // The PL24 2RL postcode centroid, which the Club gives; OSM has no feature
    // for the site. The Club's own point is 310 m north-east.
    lat: 50.36249, lon: -4.71203,
    address: "Driving Lane, Par, PL24 2RL",
    phone: "01726 814926",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/st-austell/kilhallon-farm/",
    // The Caravan and Motorhome Club's listing. No owner website found.
    notes: "Caravan and Motorhome Club Certificated Location, members only, on two acres of a working farm on Driving Lane, north of Par. Hookup 16 A; good TV reception. The listing puts a sandy beach a mile away and a pub, shop and village within a mile. Directions for members only",
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club's listing calls it dog friendly",
      season: null,
      price_per_night: null,
      hookup: true,
    },
  },
  // Section 33.
  {
    slug: "fowey-hall",
    name: "Fowey Hall",
    kind: "stay",
    // Centre of OSM way 162376206, "Fowey Hall Hotel". The PL23 1ET postcode
    // centroid, which the owner gives, is 188 m south-west.
    lat: 50.33435, lon: -4.64103,
    address: "Hanson Drive, Fowey, PL23 1ET",
    phone: "01726 833866",
    email: "info@foweyhallhotel.co.uk",
    url: "https://luxuryfamilyhotels.co.uk/locations/fowey-hall/dog-breaks/",
    // Which rooms take dogs from the pet-friendly filter on the owner's rooms
    // page: every room type but The Lantic Bay, The Polruan and the accessible
    // room carries it.
    notes: "Luxury Family Hotels' manor house in secluded grounds above Fowey, looking over the harbour; aimed at families, with the Four Bears Den kids' club, a cinema, play area, outdoor pool and spa. Rooms in the main house and the Courtyard, from Cosy and Classic rooms to two-bedroom family rooms and suites; most room types are listed as pet friendly. Dog wash station with hot water and towels. Central reservations 0208 0765 555, reservations@luxuryfamilyhotels.co.uk",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "£25 per dog per night, with a bowl, bed, ball and treats; an in-room dog menu. On a lead in public areas; not allowed in the spa, terrace, cinema, children's play area or outdoor pool",
      season: null,
      price_per_night: 165,
      price_note: "Cosy Room, from; the owner doesn't say what the rate includes",
    },
  },
  {
    slug: "penhale-fowey",
    name: "Penhale Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 222954072, "Penhale Caravan and Camping Park". The
    // PL23 1JU postcode centroid, which the owner gives, is 693 m east, at
    // Four Turnings on the main road.
    lat: 50.34313, lon: -4.66992,
    address: "Fowey, PL23 1JU",
    phone: "01726 833425",
    email: "info@penhale-fowey.co.uk",
    url: "https://www.penhale-fowey.co.uk/Camping/Tariff-and-Availability/",
    notes: "Family-run campsite on a working organic farm just outside Fowey, looking over St Austell Bay. Level serviced pitches with hookup, water tap and wifi, some hardstanding, at least 10 × 10 m; the camping page says 41, the FAQ 49. Standard tent pitches too. Twelve static holiday homes. Free hot showers, dishwashing, laundry, chemical disposal, drive-over waste disposal, a small shop at reception, Calor and Campingaz, ice-pack freezer. BBQs and campfires allowed if raised off the grass. Quiet 11pm–7am; groups of eight at most. Pitches from midday, out by 11am. Buses stop at the entrance, hourly at 20 past. A footpath runs across the farm into Fowey, about an hour; Polkerris beach and the Rashleigh Inn a mile",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved dogs; on a lead on the campsite, off the lead in a large dog-walking field at the bottom of camping field 2. A small nightly charge on the tariff",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 25,
      price_note: "service pitch with hookup and two adults, 1 April–21 May; £29 22–30 May, £27 31 May–23 July, £38 24 July–31 August, £27 September. Backpacker or cyclist £5.50 all in",
      hookup: true,
    },
  },
  {
    slug: "fowey-main-car-park",
    name: "Fowey Main car park",
    kind: "stay",
    // Centre of OSM way 161572966, "Main Car Park"; park4night's pin is 46 m
    // south. The PL23 1ET postcode centroid, which the council gives, is
    // 319 m south-west.
    lat: 50.33530, lon: -4.63994,
    address: "Hanson Drive, Fowey, PL23 1ET",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/main-fowey-pl23-1et/",
    // Rules from the car park's page, updated 27 May 2026, the council's pages
    // for Readymoney, Caffa Mill and Albert Quay, and its motorhome parking
    // page. Old Station Yard from park4night listing 168927, reviews of
    // December 2024 and June 2025; the 2026 stays from listing 129630.
    notes: "Cornwall Council long-stay car park at the top of Fowey: 269 spaces, tarmac, open 24 hours, no height or weight limit, all vehicles but caravans. The one council car park in Fowey where self-contained motorhomes with their own toilet may stay overnight; no motorhome bays or facilities. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which include two consecutive nights at most. Two park4night reviewers stayed at £18 in June and August 2026; the car park isn't level, and it's a steep walk down into town. Readymoney, Caffa Mill and Albert Quay are cars only with no sleeping or overnight camping. The private Old Station Yard car park on Passage Lane is signed no occupation of vehicles 8pm–8am, with fines, reviewers say. Pay and display (coins, card, contactless) or JustPark location 8352",
    verified: "2026-09-16",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; £12 November–March",
    },
  },
  {
    slug: "old-quay-house-fowey",
    name: "The Old Quay House",
    kind: "stay",
    // OSM node 2962638591, "The Old Quay House Hotel". The PL23 1AQ postcode
    // centroid, which the owner gives, is 22 m south-west.
    lat: 50.33603, lon: -4.63413,
    address: "28 Fore Street, Fowey, PL23 1AQ",
    phone: "01726 833302",
    email: "info@theoldquayhouse.com",
    url: "https://theoldquayhouse.com/rooms/",
    // Dog rules from the owner's dog policy PDF. The home page still carries an
    // older paragraph saying no pets or children under 12; the rooms page and
    // the policy are current.
    notes: "Boutique hotel of Providence Hotels in a Victorian house on the water in the middle of Fowey, looking across the estuary to Polruan. 14 rooms over three floors: Signature rooms with roll-top baths, Deluxe and Superior rooms with small balconies and partial estuary views, the Quay View and the Hideaway, and street-facing Luxury Classic and Classic rooms. Samphire restaurant and terrace for breakfast, lunch and dinner. No children under 8. No car park: stop outside for five minutes to unload, then use a town car park. Set sat nav to avoid ferries, or it sends you over the Bodinnick ferry or to Polruan",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "One dog per party, first-floor rooms 1–6 only; £15 per dog per night. Welcome in the restaurant. Can be left alone in the room if settled. Not on furniture or beds, so bring bedding; on a lead in public areas",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "king-of-prussia-fowey",
    name: "The King of Prussia",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1760012165, "King of Prussia", whose website tag,
    // thekingofprussiafowey.com, no longer resolves. The PL23 1AT postcode
    // centroid, which the owner gives, is 19 m south.
    lat: 50.33529, lon: -4.63464,
    address: "3 Town Quay, Fowey, PL23 1AT",
    phone: "01726 211061",
    email: "enquiries@thekingfowey.co.uk",
    url: "https://www.thekingfowey.co.uk/stay",
    notes: "Historic pub with rooms on Fowey's Town Quay, restored and reopened under Teresa and her team, with head chef Scott Williams cooking pub classics and seasonal dishes. Six characterful en-suite rooms upstairs, every one looking over the estuary, with super-king or double beds. Breakfast, lunch and dinner in the bar and restaurant. Card details guarantee a booking; cancel at least seven days before arrival, by noon, for a refund",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. Directories say dogs are welcome in the pub by arrangement",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "galleon-inn-fowey",
    name: "The Galleon Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 6007305250, "The Galleon"; OSM also has a hotel node for it,
    // 13703949817, 7 m away. The PL23 1AQ postcode centroid, which the owner
    // gives, is 40 m north-east.
    lat: 50.33563, lon: -4.63474,
    address: "12 Fore Street, Fowey, PL23 1AQ",
    phone: "01726 833014",
    email: "info@galleon-inn.co.uk",
    url: "https://www.galleon-inn.co.uk/accommodation",
    notes: "Riverside pub and B&B on Fore Street with its own frontage on the Fowey estuary. Nine en-suite rooms: three super-king river-view rooms, Heron, Kingfisher and Bewick, two with a sofa bed; two super-king or twin, Avocet and Guillemot; four king rooms, Puffin, Sandpiper, Kittiwake and Cormorant. Air conditioning in most. Breakfast included. A self-contained suite for B&B or self-catering by enquiry. Pub food including pizzas; live bands on Friday nights through the summer into October",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't say whether rooms take dogs. Booking sites say no pets; a reviewer calls the pub dog friendly",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "polruan-holidays",
    name: "Polruan Holidays",
    kind: "stay",
    // Centre of OSM way 111872188, "Polruan Holiday Centre"; park4night's pin
    // is 41 m north-east. The PL23 1QH postcode centroid, which the owner
    // gives, is 306 m west.
    lat: 50.32747, lon: -4.62577,
    address: "Townsend, Polruan-by-Fowey, PL23 1QH",
    phone: "01726 870263",
    email: "info@polruanholidays.com",
    url: "https://www.polruanholidays.com/camping",
    // Prices from the owner's 2026 tariff image. Cash only and the chocks from
    // park4night listing 310275, rated 4.82 from 11, the latest July 2026. The
    // St Saviour's Hill rule from listing 116404.
    notes: "Small, quiet three-acre campsite run by Ray and Liz at the top of Polruan, beside National Trust land, with sea views; the coast path to Lantic Bay is just opposite. 25 grass pitches, most with 16 A hookup, and six hardstandings with hookup in the level top field for caravans; motorhomes and campervans usually go in the gently sloping middle field, tents in the bottom one. Motorhomes up to 7.5 m; no twin axles; no drive-over waste disposal. Heated amenity block with free showers, laundry, dishwashing, chemical disposal, a communal fridge-freezer and microwave, Calor and Campingaz, wifi. Two nights minimum, except hikers; four people a pitch at most; no visitors, gazebos or fire baskets. Quiet 10.30pm–8am; no driving on site after 11pm. Check in from noon, out by 10am; £50 non-refundable deposit. Buses to Looe and Polperro stop outside; a steep ten-minute walk down to the harbour and the Fowey ferry. Reviewers say cash only and chocks needed for some pitches. The St Saviour's Hill car park in the village bans motorhomes and overnight stays",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Two per pitch at most, £2 each a night; on a lead at all times, no fouling on site",
      // The tariff starts on 3 April; seasonal pitches run 1 April–31 October,
      // and park4night says April to September. No closing date for touring.
      season: null,
      price_per_night: 31,
      price_note: "electric pitch and two adults, 3 April–17 May; £37 in September, adults only; £43 13 July–31 August. Backpacker without a car, one night: £12–18 alone, £21–33 for two sharing a tent",
      hookup: true,
    },
  },
  {
    slug: "lugger-inn-polruan",
    name: "The Lugger Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 182927739, "The Lugger Inn". The PL23 1PA postcode
    // centroid, which the owner gives, is 1 m west.
    lat: 50.32904, lon: -4.63469,
    address: "The Quay, Polruan, PL23 1PA",
    phone: "01726 870567",
    url: "https://www.luggerpolruan.co.uk/stay-with-us",
    // Room types from the owner's Beds24 booking page. The February 2026
    // closure from a pub directory via a search summary.
    notes: "Harbourside pub on Polruan quay, a few steps from the Fowey ferry, run by landlords Tom and Kay after the previous operator closed it in February 2026; Tom cooks seasonal dishes inspired by French and Middle Eastern food. A small number of rooms above the pub overlooking the harbour: deluxe double and deluxe king rooms with TV, kettle and coffee maker. Code DIRECTBOOKING takes 10% off. Bar Monday–Saturday 11.30am–11pm, Sunday to 6pm; kitchen noon–3pm and 6–8.30pm, Sunday noon–5pm. Not accessible: steep internal stairs and uneven levels. Drivers park at St Saviour's Hill car park at the top of the village and walk ten minutes down, very steeply",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "highertown-farm-campsite",
    name: "Highertown Farm Campsite",
    kind: "stay",
    // Centre of OSM way 481689710, "Highertown Farm Campsite"; park4night's
    // pin is 10 m south. The PL13 2PX postcode centroid is 92 m north-east.
    lat: 50.33639, lon: -4.56960,
    address: "Highertown Farm, Lansallos, Looe, PL13 2PX",
    url: "https://www.nationaltrust.org.uk/holidays/cornwall/highertown-farm-campsite",
    // The National Trust's pages refuse automated requests, so its rules come
    // from search summaries of them and nothing is confirmed. Showers, prices
    // and access from park4night listing 344042, rated 4.5 from 16, the latest
    // July 2026.
    notes: "National Trust campsite at Lansallos, a walk from Lansallos Cove. Grass pitches only, unallocated; eight with hookup, first come first served. Vehicles 6 m at most. Toilets, showers, washing-up, chemical disposal. Four adults a group at most. Book online, as late as the day of arrival. Reviewers say: a meadow for tents and another for vans beside the 14th-century church, sea views only from the top of the van field; compost and flush toilets, solar-heated showers at 20p in coins, a barn to shelter in; BBQs but no fires; some pitches need chocks; the lanes in are steep and narrow, so avoid approaching through Polperro; the climb back from the cove is steep; a food truck across the road in July 2026",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "The Trust's page, seen only in search summaries, says free, two per pitch, say when booking; on a lead at all times and exercised away from other campers; no breeds listed in the Dangerous Dogs Act. park4night's 2022 listing priced a van with a dog",
      // The Trust's page says March to October; park4night says 1 April–31
      // October.
      season: null,
      price_per_night: null,
      price_note: "£33 for a van and two people, a June 2026 reviewer says",
      hookup: true,
    },
  },
  {
    slug: "hilltop-camping-polperro",
    name: "Hilltop Camping",
    kind: "stay",
    // OSM node 13136880201, "Hilltop Camping"; park4night's pin is 41 m
    // south-west. No postcode found.
    lat: 50.33639, lon: -4.53680,
    address: "Langreek Road, Polperro, Looe",
    // From OSM's tags.
    phone: "07931 257807",
    url: "https://park4night.com/en/place/625657",
    // park4night listing 625657, rated 4.8 from 5, the latest August 2026. The
    // owner's website, hilltopcamping.co.uk, now returns not found; its
    // Facebook page dates from 2025.
    notes: "Campsite on a family farm above Polperro, twenty minutes' walk from the village and the coast path; directories say five acres of hillside, and no price rise in the school holidays. Reviewers say: one large sloping field, pitch where you like, run by Pete; big clean hot showers, toilets, washing-up sinks; dwarf goats, and ice cream from the owner. The lane in is narrow: drive up past the entrance, turn at the top and come back in",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Reviewers found it dog friendly; directories say well-behaved dogs welcome",
      // park4night says open all year.
      season: null,
      price_per_night: null,
      price_note: "£30 a night, a May 2026 reviewer says",
    },
  },
  {
    slug: "great-kellow-farm",
    name: "Great Kellow Farm",
    kind: "stay",
    // Centre of OSM way 198565790, "Great Kellow Farm Caravan & Camping Site".
    // The PL13 2QL postcode centroid, which the owner gives, is 364 m
    // north-west.
    lat: 50.34083, lon: -4.52577,
    address: "Great Kellow Farm, Polperro, PL13 2QL",
    phone: "01503 272387",
    email: "enquiries@greatkellowfarm.co.uk",
    url: "https://greatkellowfarm.co.uk/booking-info/",
    notes: "Campsite on Dan and Sadie Stanbury's working beef and sheep farm above Polperro, looking over Polperro Bay; ten minutes' walk into the village. Pitches for tents, campervans, motorhomes and caravans, with or without hookup; book ahead for hookup. Toilets, hot showers, family bathrooms, accessible shower room, washing-up, chemical disposal, water points, ice-pack freezer. The Cabin shop sells the farm's own meat, bread, milk and essentials, plus logs and BBQ and fire-pit hire; BBQs and fires allowed off the ground. No EV charging from hookups. Arrive 2–9pm, leave by 11am; quiet 9pm–7am. 20% non-refundable deposit, balance 14 days before. Tourers should ignore sat nav and come via Pelynt, not through Polperro",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£1 a night; on a short lead, never left unattended. No breeds listed in the Dangerous Dogs Act",
      // Open for 2026; the owner gives no dates.
      season: null,
      price_per_night: 35,
      price_note: "electric pitch with two adults; non-electric £12.50 per adult. Backpacker, tent only, £10 a person",
      hookup: true,
    },
  },
  {
    slug: "crumplehorn-inn",
    name: "The Crumplehorn Inn & Mill",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1743458666, "Crumplehorn Inn". The PL13 2RJ postcode centroid,
    // which the owner gives, is 59 m west.
    lat: 50.33597, lon: -4.52346,
    address: "The Coombes, Polperro, Looe, PL13 2RJ",
    phone: "01503 272348",
    email: "crumplehorninn@kernowpubgroup.co.uk",
    url: "https://www.thecrumplehorninn.co.uk/staying-with-us.html",
    notes: "Historic pub at the top of Polperro, part of the small Kernow Pub Group. Eight rooms and suites, most in a building behind the pub up outside steps: Trelawny and Harding sleep families, Job, Du Maurier, Betjeman and Arthur are suites with a lounge, Bligh and Couch are doubles; all with shower rooms, TV, kettle and fridge. Rooms aren't serviced during a stay. Continental buffet breakfast 8.30–9.30am, residents only. Small private car park, one space per room. Pub open midday to about 10pm daily except Christmas; food noon–3.30pm and 5–8.30pm, varying by season; booking advised. Live music in the beer garden in summer. Check out by 10.15am",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Bring the dog's own bedding; kept off furniture and beds, never left alone in the room, on a lead in public areas. Charges for damage or extra cleaning",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "claremont-hotel-polperro",
    name: "The Claremont Hotel",
    kind: "stay",
    // Centre of OSM way 439462177, "Claremont Hotel". The PL13 2RG postcode
    // centroid, which the owner gives, is 8 m north-west.
    lat: 50.33205, lon: -4.52109,
    address: "The Coombes, Polperro, PL13 2RG",
    phone: "01503 272241",
    email: "enquiries@theclaremonthotel.co.uk",
    url: "https://www.theclaremonthotel.co.uk/dogfriendly.php",
    notes: "Small, privately owned adults-only (18+) hotel in the middle of Polperro, five minutes' walk from the harbour. Twelve en-suite rooms over three floors, village-view at the front and quieter hillside-facing at the back: TV, wifi, mini fridge, tea tray. Breakfast included, 8–10am in allotted slots; takeaway breakfast baguette if asked the day before. Residents' lounge, terrace and honesty bar. Private car park opposite with one space per room, from 11am: suits medium cars, and larger vehicles go to the pay and display car park at the top of the village if it's full. Reception closes at 5pm; ring ahead to check in by phone if later. Rooms from 3pm, out by 11am. Minimum stays all year. Standard rate takes the first night as a non-refundable deposit; a free-cancellation rate costs 10% more",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Rooms 1, 2, 4, 5, 7, 8, 10 and 11, by prior arrangement; two per room when booking online. £12 per dog per night, with a welcome pack and a breakfast sausage. Welcome in all communal areas including the breakfast room; on a short lead; not on lounge furniture; never left in the room if you're off site. Owners sign house rules at check-in",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "crumplehorn-car-park",
    name: "Crumplehorn car park, Polperro",
    kind: "stay",
    // Centre of OSM way 268204225, an unnamed pay car park; park4night's pin is
    // 132 m north-east. The PL13 2PL postcode centroid, from park4night, is
    // 38 m north-west.
    lat: 50.33811, lon: -4.52225,
    address: "Longcoombe Lane, Polperro, Looe, PL13 2PL",
    url: "https://park4night.com/en/place/17839",
    // park4night listing 17839, rated 1.95 from 19, the latest August 2026.
    notes: "Large private pay and display car park at the entrance to Polperro, about a kilometre above the harbour, where vans stay overnight: tarmac and sloping, no facilities. Motorhomes pay a three-hour minimum. Coins only, with a change machine; no cards. Bus stop for Looe. Public toilets nearby, 50p in 2023. A 2023 reviewer found a no overnight sleeping notice in the window of the attendant's hut, though not on the machines; reviewers slept there in 2022 and August 2026 without trouble. West Wayland Touring Park is the usual cheaper alternative",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "£28 for 24 hours or £12 for three hours for a motorhome, coins only, an August 2026 reviewer says",
      hookup: false,
    },
  },
  {
    slug: "talland-bay-hotel",
    name: "Talland Bay Hotel",
    kind: "stay",
    // Centre of OSM way 1147355885, "Talland Bay Hotel". The PL13 2JB postcode
    // centroid, which the owner gives, is 63 m north-west.
    lat: 50.33977, lon: -4.49493,
    address: "Porthallow, Looe, PL13 2JB",
    phone: "01503 272667",
    email: "info@tallandbayhotel.com",
    url: "https://www.tallandbayhotel.co.uk/stay-with-us",
    notes: "Country house hotel above Talland Bay, between Polperro and Looe, reached down the lane off the A387 signed for Talland and Sclerder Abbey. 20 individually themed rooms designed by the artist in residence: sea-view and country-view rooms, garden cottages and a bungalow. Restaurant, lounge and bar, conservatory, afternoon tea. Breakfast 8–10am. Check in from 3pm, out by 11am. Free parking; four 7.5 kW EV chargers. Deposits non-refundable; bookings cancelled 14 days ahead can move to another date",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "All rooms are dog friendly, by prior arrangement, with a welcome hamper of treats, bowls, mat and towels. The owner doesn't publish a charge; directories say £15 a night and dogs everywhere but the main restaurant",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "west-wayland-touring-park",
    name: "West Wayland Touring Park",
    kind: "stay",
    // Centre of OSM way 266530868, "West Wayland Touring Park". The PL13 2JS
    // postcode centroid, which the owner gives, is 535 m east.
    lat: 50.35146, lon: -4.49992,
    address: "Polperro Road, Looe, PL13 2JS",
    phone: "01503 262418",
    email: "info@westwayland.co.uk",
    url: "https://westwayland.co.uk/tariff/",
    notes: "Quiet family-owned touring park midway between Looe and Polperro, with views down the Talland valley to the sea; no pool or entertainment. Pitches for caravans, motorhomes and tents, with or without hookup, the car beside the pitch. Free hot showers and hot water, accessible wet room, launderette, dishwashing, shop open seven days, play area, dog exercise area. Cards accepted. Book by phone in office hours; hookup bookings take a £5 a night non-refundable deposit. No charging electric cars from hookups. One vehicle included, extra £1.50 a night",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night; on a lead at all times, never left alone in a van, awning or tent. Off the lead in the dog exercise area. Owners of unruly dogs asked to leave",
      // The owner's 2026 dates.
      season: { from: "03-27", to: "10-28" },
      price_per_night: 16,
      price_note: "two adults at £5.50 each plus £5 hookup, 27 March–22 May and 29 September–28 October; £18 23 May–28 September. Child 5–15 £3.50–4, under 5 free",
      hookup: true,
    },
  },
  {
    slug: "camping-caradon",
    name: "Camping Caradon Touring Park",
    kind: "stay",
    // Centre of OSM way 266529496, "Camping Caradon"; OSM's caravan site way
    // 266529494 adjoins it to the south. No postcode on the owner's site.
    lat: 50.35973, lon: -4.50728,
    address: "Trelawne, Looe",
    phone: "01503 272388",
    email: "enquiries@campingcaradon.co.uk",
    url: "https://campingcaradon.co.uk/",
    // The owner's prices are published as images that couldn't be read.
    notes: "Touring park of 3.5 level acres in the hamlet of Trelawne, inland between Looe and Polperro, run by Lance and Marianne Ferguson since 2023. Flat pitches for tents, campervans, caravans and motorhomes; free wifi. Toilet and shower block with two private family rooms, washing-up and laundry. Bar and clubhouse with bingo, karaoke, quiz and cabaret nights; no food served from 2027, visiting food vans instead. Bus stop at the entrance for Looe and Polperro",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "The owner calls the bar dog friendly but doesn't say whether dogs may stay; directories say up to four per pitch, on a lead",
      // The owner says closed from 5 October 2026 until 22 March 2027.
      season: { from: "03-22", to: "10-04" },
      price_per_night: null,
      price_note: "from £15 a night, directories say",
    },
  },
  {
    slug: "jubilee-inn-pelynt",
    name: "The Jubilee Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 8895578706, "Jubilee Inn". The PL13 2JZ postcode centroid,
    // which the owner gives, is 90 m north-west.
    lat: 50.36607, lon: -4.52485,
    address: "Jubilee Hill, Pelynt, Looe, PL13 2JZ",
    phone: "01503 771048",
    email: "info@jubileeinn-pelynt.co.uk",
    url: "https://www.jubileeinn-pelynt.co.uk/",
    // Room count, prices and the van parking from the B and B Stays listing;
    // the owner's site mentions none of them. Brit Stops membership isn't
    // confirmed.
    notes: "16th-century country inn in Pelynt, inland from Polperro, with an open fire and a large beer garden with country views; breakfast, lunch and dinner. B&B rooms with double, king or twin beds, smart TVs and Cornish tea and coffee; a trundle bed or cot turns the larger rooms into family rooms. Bookings bookings@jubileeinn-pelynt.co.uk. A directory listing says eleven rooms, and that campervans and motorhomes can stay overnight in the car park for £10 if booked ahead",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner says dogs are welcome in the bar and garden, not whether rooms take them. A directory says pets welcome",
      season: null,
      price_per_night: null,
      price_note: "from £130 per room for two, B&B; family room £140, Bridgerton Suite £150, a directory says",
    },
  },
  // Section 34.
  {
    slug: "hannafore-point-hotel",
    name: "Hannafore Point Hotel & Spa",
    kind: "stay",
    // OSM node 5486683850, "Headland", the hotel's restaurant; OSM doesn't
    // name the hotel building. The PL13 2DG postcode centroid, which the owner
    // gives, is 31 m south-west.
    lat: 50.34978, lon: -4.45146,
    address: "Marine Drive, Hannafore, West Looe, PL13 2DG",
    phone: "01503 263273",
    email: "stay@hannaforepointhotel.com",
    url: "https://hannaforepointhotel.com/hotel-tariff",
    notes: "Hotel on the point at Hannafore, West Looe, on the coast path, with panoramic views across Looe Bay, sister to the Berry Head Hotel. 37 en-suite rooms, most with balconies, some with sea views; a lift serves most rooms, with three or four steps beyond it. The Headland restaurant, the View bistro and bar, Sunday roasts. Waves Spa: indoor heated pool, spa bath, sauna, steam room, gym and treatments, up 12 steps. Parking. Rooms from 2pm, out by 10.30am; late check-out to noon £30. Rooms may be released at 6pm on arrival day unless you say you're coming. 10% deposit, £50 at least; two-thirds charged on cancellation unless the room is re-let. Book by phone or email",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Small dogs only, by arrangement; £12 a day",
      season: null,
      price_per_night: 198,
      price_note: "double or twin, B&B, one night in September 2026, per room; sea-view supplements £15–32 per person per night; dinner, bed and breakfast £266",
    },
  },
  {
    slug: "harbour-moon-inn-looe",
    name: "Harbour Moon Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 9882873462, "Harbour Moon Inn". The PL13 2BU postcode centroid,
    // which the owner gives, is 36 m south.
    lat: 50.35513, lon: -4.45665,
    address: "Quayside, West Looe, PL13 2BU",
    phone: "01503 265600",
    email: "harbourmoonlooe1@gmail.com",
    url: "https://harbourmoon.co.uk/contact-us",
    // The owner's booking site, run through eviivo. Its facilities list
    // offers cooked breakfast and parking, but the owner's own text says
    // neither.
    notes: "Pub with rooms on the quayside in West Looe, with views across the water, a few steps from the coast path. Four bedrooms, many en-suite, all with river views, all on the first floor. No breakfast and no parking, the owner says. Real ales; lunches and dinners in the bar or dining room; a terrace over the water. Check-in 4–8pm, out by 10am. Adults preferred; no parties. Book online",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "No pets in the rooms. Directories say dogs are welcome in the bar",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "bridgeside-guest-house-looe",
    name: "Bridgeside Guest House",
    kind: "stay",
    // The PL13 1HH postcode centroid, which the owner gives, at the East Looe
    // end of the bridge; OSM has no feature for the house.
    lat: 50.35603, lon: -4.45493,
    address: "Fore Street, East Looe, PL13 1HH",
    phone: "01503 263113",
    email: "bridgesideguesthouse@googlemail.com",
    url: "http://www.bridgeside-guesthouse-looe.co.uk/",
    notes: "Family-run licensed Victorian guest house in the heart of East Looe, overlooking the harbour, river and bridge; run by Sammy and Belinda. Eight rooms: seven en-suite doubles, twins, triples and family rooms, and a front single with a basin and the bathroom on the same floor. Full English breakfast 8–9am, from 7am on request; packed lunches, afternoon teas, laundry, lounge bar and a large front patio. Up 20 steps to the entrance and 19 or 35 more to the rooms. Bus stops to Polperro and Plymouth, and the taxi rank, directly below; the station a few minutes' walk. Check-in 1–8.30pm, out by 10am. A week's notice to cancel, or the first night is charged. Ring or email for prices: online bookings cost more",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. Directories disagree: some say dogs welcome, with a sausage at breakfast, others that they aren't allowed",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "millendreath-beach-car-park",
    name: "Millendreath Beach car park",
    kind: "stay",
    // Centre of OSM way 996311020, a gravel pay car park; park4night's pin is
    // 51 m south, between it and a smaller unnamed car park, way 447018126.
    // park4night gives PL13 1PD.
    lat: 50.36296, lon: -4.43562,
    address: "Millendreath, Looe, PL13 1PD",
    url: "https://park4night.com/en/place/382974",
    // park4night listing 382974, rated 3.96 from 25, the latest August 2026.
    // Looe's car park rules from the council's pages for Millpool, Kilminorth
    // Woods and Riverbank; Marine Drive from park4night listing 184129. No
    // owner found for this car park.
    notes: "Large, flat private pay car park behind the beach at Millendreath, on the coast path east of Looe, where vans stay overnight: about 50 places, some on grass at the far end. RingGo with ANPR cameras: pay up to 10pm, buy the overnight ticket from 10pm to 7am, and pay again from 7am. A 2025 reviewer was fined £60 for leaving at 7.52am without the morning top-up; several buy a week's ticket instead. Old, faded no-overnight signs remain, reviewers from 2023 to 2025 say, and none reports being moved on. A water tap on the side of one of the wooden huts. Toilets at the beach bar and café when they're open, not overnight. The access lane is narrow with passing places; a 7 m van got in in August 2026. A cocktail bar and a beach shack serving breakfast alongside. Out of season some park free on the road outside. In Looe itself the council's Millpool, Kilminorth Woods and Riverbank car parks ban motorhomes 11pm–8am, and Hannafore's Marine Drive seafront is signed no overnight camping, a July 2026 reviewer says",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 2,
      price_note: "10pm–7am, reviewers say, August 2026; £2 an hour either side, or £20 for a week",
      hookup: false,
    },
  },
  {
    slug: "bay-view-farm-looe",
    name: "Bay View Farm Camping Site",
    kind: "stay",
    // Centre of OSM way 266535904, "Bay View Campsite"; park4night's pin is
    // 67 m east. The PL13 1NZ postcode centroid, which the owner gives, is
    // 758 m north-east; park4night gives PL13 1NY.
    lat: 50.36393, lon: -4.43022,
    address: "Bay View Farm, St Martins, Looe, PL13 1NZ",
    phone: "01503 265922",
    email: "stay@bayviewcamping.co.uk",
    url: "https://www.looebaycaravans.co.uk/camping.htm",
    // Hookup, water and the latest prices from park4night listing 125307,
    // rated 3.92 from 38, the latest July 2026.
    notes: "Coastal farm campsite beside the coast path east of Millendreath, looking over Looe, Looe Island and the Banjo Pier; shire horses in the next field. Tents, campervans and motorhomes; no touring caravans. Ladies' and gents' toilets and showers, coin laundry, freezer for ice packs, free wifi. One static caravan to let. Don't drive to or from Seaton: the coast lane is very narrow with few passing places; come from No Man's Land following the Monkey Sanctuary signs. Arrive from noon, leave by 11am. Book by phone or the enquiry form; one night's deposit, non-refundable; cards accepted. Reviewers praise the view and Liz, the owner, and warn of tight lanes; hardstandings with hookup, a 2025 reviewer says. In May and July 2026 reviewers found the toilets and chemical disposal dirty, the showers cold, weak wifi and water charged extra. A ten-minute track down to the beach bars",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Welcome with responsible owners",
      // The owner says open all year; park4night's listing says closed
      // 6 January–6 February.
      season: "all-year",
      price_per_night: null,
      price_note: "variable, ring for the tariff. £30 without hookup in May 2026, park4night reviewers say; the listing gives £31 for two with a tent, £37 with a camper",
      hookup: null,
    },
  },
  {
    slug: "looe-club-campsite",
    name: "Looe Caravan and Motorhome Club Campsite",
    kind: "stay",
    // Centre of OSM way 830310896, "Looe Club Campsite". The Club's own GPS
    // point is 177 m north-west; the PL13 1PB postcode centroid, which the
    // Club gives, is 589 m north-east.
    lat: 50.37503, lon: -4.43932,
    address: "St Martin, Looe, PL13 1PB",
    phone: "01503 264006",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/cornwall/looe-club-campsite/",
    notes: "Caravan and Motorhome Club campsite at the top of the hill off the B3253 above Millendreath, half a mile past Tregoad; non-members welcome. Two pitching areas divided by conifers and flowering cherries, distant views of Looe Bay: 217 touring pitches, 99 of them hardstanding, and six for tents; maximum outfit 8.5 m. Hookup, motorhome service point, drive-over waste disposal, toilet block, family washroom, accessible shower room, dishwashing, laundry, wifi, dog walk on site. Swimming pool, end of May to mid-September, weather and lifeguard permitting; tennis, crazy golf, play area. Late arrivals area with hookup. Arrive from 1pm. Follow the Club's directions, not sat nav. Millendreath beach and the coast path a short walk down. Buses to Looe and Plymouth within a mile; a small Co-op in Looe. £5 deposit, free cancellation up to 21 days before arrival",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The Club lists it as ideal for dogs, with a dog walk on site, and dogs stay free at Club campsites; keep them close and in sight",
      season: { from: "03-20", to: "11-02" },
      price_per_night: null,
      price_note: "shown only in the online booking",
      hookup: true,
    },
  },
  {
    slug: "bucklawren-farm-bnb",
    name: "Bucklawren Farm B&B",
    kind: "stay",
    // Centre of OSM way 232702501, "Bucklawren Farm B&B". The PL13 1NZ
    // postcode centroid, which the owner gives, is 699 m south.
    lat: 50.37320, lon: -4.42329,
    address: "Bucklawren Farm, St Martin by Looe, PL13 1NZ",
    phone: "01503 240738",
    email: "info@bucklawren.co.uk",
    url: "https://www.bucklawren.co.uk/accommodation",
    notes: "B&B in the farmhouse of a working arable and beef farm inland from the coast between Millendreath and Seaton, with sea views across the fields to Looe Island; the beach a mile. Run by Jo Eastley, whose parents took the farm on in 1987. Six en-suite rooms: two doubles, two triples, a family room, and a ground-floor twin or super-king. Full English or a lighter breakfast with Cornish produce. Holiday cottages too. From the B3253 at No Man's Land follow the Monkey Sanctuary signs, then Bucklawren. Book online, by phone or WhatsApp",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "looe-country-park",
    name: "Looe Country Park Caravan & Campsite",
    kind: "stay",
    // OSM node 1789141108, still named "Polborder House Car. & Cp. Park", inside
    // an unnamed caravan site, way 447018127; park4night's pin is 34 m
    // south-west. The PL13 1QS postcode centroid, which the owner gives, is
    // 645 m north-west.
    lat: 50.37728, lon: -4.41818,
    address: "Bucklawren Road, No Mans Land, Looe, PL13 1QS",
    phone: "01503 240265",
    email: "info@looecountrypark.co.uk",
    url: "https://www.looecountrypark.co.uk/campingandtouring.php",
    // Formerly Polborder House, run by Polborder Holidays Ltd. Price from
    // park4night listing 449228, rated 5 from 2, the latest April 2025.
    notes: "Small, quiet caravan park and campsite down Bucklawren Road between Looe and Seaton, formerly Polborder House: statics, camping pods, and individually marked touring pitches round the perimeter, every second one hedged. Hardstanding and grass pitches, some with gravel awning stands, water within reach; several fully serviced with hookup, water and drain. Two shower blocks with free hot water, dishwashing sinks, coin laundry, chemical disposal, gas, free and paid wifi, battery charging, BBQ area. Shop with milk, bread, essentials and dog food, open reception hours, fewer in winter. A fenced dog walking garden. No pub or club on site; no hen or stag groups. A gate onto a lane down to the beach, a reviewer says. Book online",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Well-behaved pets on leads; no dangerous breeds",
      season: "all-year",
      price_per_night: 35,
      price_note: "two adults, a child, a dog and a van with water and hookup, park4night's listing says",
      hookup: true,
    },
  },
  {
    slug: "seaton-bridge-car-park",
    name: "Seaton Bridge car park",
    kind: "stay",
    // Centre of OSM way 108025155, an unnamed pay car park east of the bridge;
    // the council's map is centred on it. park4night's pin, "Seaton - Hessenford
    // Road", is 170 m north-west on another pay car park, way 108025158, across
    // the river. Position unconfirmed.
    lat: 50.36544, lon: -4.38543,
    address: "Seaton, Torpoint, PL11 3JD",
    phone: "0300 1234 222",
    url: "https://www.cornwall.gov.uk/transport-parking-and-streets/parking/cornwall-council-car-parks/seaton-bridge-seaton-pl11-3jd/",
    // Rules from the council's pages for Seaton Bridge, Seaton Beach and Seaton
    // Park, updated July and August 2026, Tregantle, updated July 2026, and
    // the motorhome parking page, updated 12 May 2026. Portwrinkle from the
    // Sheviock Parish Council page. park4night listing 691005, rated 5 from 1,
    // August 2026.
    notes: "Cornwall Council long-stay car park beside the bridge at Seaton, behind the beach and on the coast path: 62 tarmac spaces for cars, motorhomes and coaches, open 24 hours, no height limit, though the council gives a 3,050 kg weight limit. One of the council car parks where self-contained motorhomes with their own toilet may stay overnight; no motorhome facilities or dedicated bays. Buy a motorhome overnight ticket for each night: 24-hour, weekly, season and rover tickets don't count. Follow the signs, which may include two consecutive nights at most. Pay for every bay you cover. Pay and display (card, contactless) or JustPark location 8314. Public toilets about 50 m north-east; the Smugglers Inn and Seaton Beach Café alongside; Seaton Valley Countryside Park up the river. The council's Seaton Beach and Seaton Park car parks ban motorhomes 11pm–8am, Tregantle bans sleeping, and Portwrinkle's parish car park forbids sleeping in vans, with toilets locked overnight",
    verified: "2026-09-16",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 18,
      price_note: "self-contained motorhome, 6pm–9am, April–October; the council lists no charge November–March",
    },
  },
  {
    slug: "inn-on-the-shore-downderry",
    name: "Inn on the Shore",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 162113651, "Inn On The Shore". The PL11 3JY postcode
    // centroid, which the owner gives, is 36 m north-east.
    lat: 50.36125, lon: -4.37071,
    address: "Downderry, Torpoint, PL11 3JY",
    phone: "01503 250027",
    url: "https://www.innontheshore.co.uk/stay/",
    // The Fireside Pub Company. Rooms book through eviivo.
    notes: "Seafront pub on Downderry beach, on the coast path, with an alfresco terrace and outdoor gin bar looking from the Rame Peninsula to Looe Island; steps down to the beach beside it. Eight en-suite double and twin rooms named after local beaches and landmarks, with sea views from many; TV, wifi, toiletries, tea and coffee. Open Monday–Thursday 8.30am–11pm, Friday–Saturday to midnight, Sunday to 11pm; food daily 8.30–10.30am and noon–8pm; lunch and a drink £14.50 weekdays until 5pm. A double-sided woodburner. Book rooms online",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Three dedicated rooms for well-behaved dogs; ring to book one. Keep the dog with you at all times. Dogs welcome in the pub. Directories say £15 a night and one dog per room",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "finnygook-inn",
    name: "The Finnygook Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 511848264, "Finnygook Inn", whose note says the website
    // isn't in use; it is. OSM's addr:postcode is PL11 3BQ. The PL11 3BN
    // postcode centroid, which the owner gives, is 44 m south.
    lat: 50.36498, lon: -4.29917,
    address: "Cliff Road, Crafthole, Torpoint, PL11 3BN",
    phone: "01503 230338",
    email: "eat@finnygook.co.uk",
    url: "https://finnygook.co.uk/stay/",
    notes: "Pub and restaurant in Crafthole, on the cliff top above Portwrinkle and a short walk up from the coast path; run by Erika and Neil; badly damaged by fire in December 2017. Six en-suite B&B rooms: four spacious superior rooms looking across the Tamar Valley to Dartmoor, and two smaller ones without the view. Smart TV, coffee machine, fridge, towels, hairdryer. Beamed bar with a fire; restaurant with valley views; a sun-trap patio. Bar Monday 4–10pm, Tuesday–Saturday noon–11pm, Sunday noon–9pm; food Monday–Saturday noon–2pm and 6–8pm, Sunday lunch noon–4pm. Hours can vary, so ring before a special journey, best 10.30am–noon or 3–6pm. Monthly quiz nights and the Finny Fest. Book rooms online. Crafthole Village Store is nearby",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner quotes a review calling the pub dog friendly, but doesn't say whether rooms take dogs. Booking.com says dogs of any size stay free",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "halfway-house-polbathic",
    name: "The Halfway House",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 7179896835, "Halfway House". The PL11 3EY postcode centroid,
    // which the owner gives, is 42 m south.
    lat: 50.38861, lon: -4.32488,
    address: "Polbathic, Torpoint, PL11 3EY",
    phone: "01503 232986",
    email: "info@halfwayhousepolbathic.co.uk",
    url: "https://www.halfwayhousepolbathic.co.uk/stay-in-polbathic",
    // Rooms book through eviivo.
    notes: "Family-run village pub and kitchen in Polbathic, in the countryside along the River Lynher, in CAMRA's Good Beer Guide, with its own Pride of Polbathic ale. Five en-suite letting rooms: four doubles, one with a king-size bed and one double or twin with a bath and an extra single, some with countryside views, and a no-frills single. TV, wifi, tea and coffee, towels and toiletries; iron, hairdryer and travel cot free; a lift to the station if you ask nicely. Open fires in winter; a large beer garden with an allotment, an ale, cider and pie festival in summer, live bands all year. Food Monday noon–2pm with a 6pm supper club; Tuesday noon–2pm and 5–9pm; Wednesday–Friday noon–2pm and 6–9pm; Saturday 10am–2pm and 6–9pm; Sunday breakfast 10am–noon, lunch noon–4pm. Book rooms online",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "Dogs welcome at the pub; the owner doesn't say whether rooms take them",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  // Section 35.
  {
    slug: "whitsand-bay-fort",
    name: "Whitsand Bay Fort",
    kind: "stay",
    // Centre of OSM way 960137758, "Whitsand Bay Holiday Park"; park4night's
    // pin is 20 m south. The PL10 1JZ postcode centroid, which the owner gives,
    // is 82 m west.
    lat: 50.34160, lon: -4.23804,
    address: "Donkey Lane, Whitsand Bay, Torpoint, PL10 1JZ",
    phone: "01752 822597",
    url: "https://www.whitsandbayfort.co.uk/whitsand-bay-fort-holiday-park-rame-peninsular-cornwall-caravan-site-motorhomes-campsite-touring-ramehead-camping.html",
    // Pitch details from the owner's touring, motorhome and CampManager booking
    // pages; rules from its terms, dated August 2026. Reviews from park4night
    // listing 151196, rated 4 from 10, the latest August 2026.
    notes: "Holiday park in an 1860s fort above Whitsand Bay, beside the coast path, with lodges, cottages and touring pitches; the booking system calls it Whitsand Bay Holiday Park. Gravel pitches in two areas, none with a sea view from the pitch: the Meadow, with 16 A hookup and separate water and Elsan point, near the toilet and shower block, launderette and pot wash; and the Moat, fully serviced with hookup, water and waste on the pitch. Motorhome service point. Nothing over 8 m, for pitch access; one vehicle per pitch. No sign-written or commercial vehicles, no generators, no fire pits. Indoor pool and gym, fees apply. The Fort Inn bar and restaurant on site, carvery on Sundays; wifi only in the Fort Inn. Tamar View bedroom suites too: hotel-style en-suite rooms, not self-catering. Open all year; book ahead, no same-day bookings, deposit taken. Pitch arrivals midday–6pm in winter, to 8pm in summer time, none later; leave by 11am. No refunds; pitch bookings may move dates. Photo ID and the booking card at reception. The beach, where dogs are allowed, an 8-minute walk down; not for everyone with limited mobility. A 2025 reviewer found the men's facilities tired and charged £6 for washing and £6 a person for the pool",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Two per pitch unless the manager agrees more; on a lead in the park, with collar and tag. Allowed in the bar and restaurant on a lead. Dangerous Dogs Act breeds, XL Bully included, banned",
      season: "all-year",
      price_per_night: null,
      price_note: "shown only in the online booking; directories give pitches from £28 for two",
      hookup: true,
    },
  },
  {
    slug: "maker-camping",
    name: "Maker Camping",
    kind: "stay",
    // Centre of OSM way 223613067, "Maker Camping"; park4night's pin is 142 m
    // north-west. The PL10 1LA postcode centroid, which the owner gives, is
    // 36 m south.
    lat: 50.34203, lon: -4.20039,
    address: "Maker Heights, Millbrook, Torpoint, PL10 1LA",
    phone: "01752 822618",
    email: "reception@makercamping.org.uk",
    url: "https://makercamping.org.uk/camp-maker-heights-camping-cornwall",
    // The owner's camp, rates, terms and equity-of-access pages. Showers, the
    // common room, sauna, shop and dog charge from park4night listing 369152,
    // rated 4.25 from 8, the latest June 2026.
    notes: "Semi-wild campsite on the grassland of Maker Heights, the highest point of the Rame Peninsula, among old fortifications, wartime anti-aircraft emplacements and a Grade II* listed barrack block; run by the Rame Conservation Trust, with the profits kept for the site. Pitches cut as circles in unmown meadow, each sized for a campervan and a 3–4 man tent; a car-free area with views over Plymouth Sound. Tents, caravans, campervans and motorhomes; no hookup; Elsan point. Toilets, hot showers, a common room with wifi, phone charging and washing-up, reviewers say. The Canteen serves breakfast, lunch and cakes; the Guardhouse tapas and drinks; Garrison Gallery cocktails in the evenings; a sauna some days and a small shop, the park4night listing says. Open 1 April–30 September 2026. Pay in full when booking; refunds only in exceptional circumstances. Check-in 1–7pm, later by phone; out by 11am. Two nights minimum in July and August; one-night stays by email or phone. Walkers arriving on foot get discounted pitches, and ten are kept for one-night stays. 14 nights at most; up to six a pitch; extra vehicle £3. Fires only in raised bowls, rented at reception with logs; no disposable BBQs or generators. The coast path half a mile; Kingsand and Cawsand 15 minutes south, steeply. Request stop on the 70 bus between Torpoint and Cremyll",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "On a lead at all times; long leads and ground spikes for hire. A 2024 park4night reviewer paid £2 a night for a dog",
      season: { from: "04-01", to: "09-30" },
      price_per_night: 20,
      price_note: "two adults at £10 each, midweek off season; up to £15 each at peak. Under 16 £5, under 5 free; a surcharge for large vehicles",
      hookup: false,
    },
  },
  {
    slug: "penmillard-farm-cl",
    name: "Penmillard Farm",
    kind: "stay",
    // Centre of OSM way 998427705, the farm building "Penmillard Farm"; the
    // Club's GPS point is 2 m away. The PL10 1LG postcode centroid, which the
    // Club gives, is 168 m south-west.
    lat: 50.32344, lon: -4.21415,
    address: "Rame, Cawsand, Torpoint, PL10 1LG",
    // Phone from directories; the Club shows contact details to members only.
    phone: "01752 822215",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/cornwall/torpoint/penmillard-farm/",
    // The Club's listing. No owner website found. Sea views, the coast path and
    // the lack of toilets from directories.
    notes: "Caravan and Motorhome Club Certificated Location on a working farm at Rame, members only: five touring pitches on three acres of lawned grass, 16 A hookup. Open all year; arrive from 1pm, leave by noon. Pub and shop within a mile, in Kingsand and Cawsand; a daily bus within a mile to Torpoint and Plymouth. Directions for members only. Directories say sea views, the coast path at the bottom of the site, and no toilets or showers, so bring your own",
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club lists it as ideal for dogs",
      season: "all-year",
      price_per_night: null,
      price_note: "shown to Club members only",
      hookup: true,
    },
  },
  {
    slug: "rame-barton",
    name: "Rame Barton",
    kind: "stay",
    // The PL10 1LG postcode centroid, which the owner gives; OSM has no
    // feature for the house.
    lat: 50.32197, lon: -4.21357,
    address: "Rame, Torpoint, PL10 1LG",
    phone: "01752 822789",
    email: "ramebarton@gmail.com",
    url: "https://www.ramebarton.co.uk/stay",
    // The owner's B&B page is unfinished placeholder text, so rooms and
    // prices aren't published; booking is through eviivo, which blocks
    // automated requests.
    notes: "Guest house in an 18th-century farmhouse in over two acres of gardens at Rame, overlooking Rame church with views to Whitsand Bay; the owners say it's on the coast path. B&B with a Cornish breakfast, and a two-bedroom self-catering apartment. Pottery classes with the ceramic designer Paul Cardew. Book online",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention guests' dogs. Directories say dogs aren't allowed; the owners keep dogs",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "halfway-house-inn-kingsand",
    name: "The Halfway House Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 229693294, "Halfway House Inn". The PL10 1NA postcode
    // centroid, which the owner gives, is 60 m north.
    lat: 50.33334, lon: -4.20158,
    address: "Fore Street, Kingsand, Torpoint, PL10 1NA",
    phone: "01752 822279",
    email: "info@halfwayinnkingsand.co.uk",
    url: "https://www.halfwayinnkingsand.co.uk/rooms",
    notes: "Pub with rooms where Kingsand meets Cawsand, on the coast path; the stream behind it was once the Devon–Cornwall border, hence the name. Six refurbished en-suite rooms, all non-smoking with breakfast included: four doubles, three of them with bath and shower, a twin and a single; TV, wifi, tea and coffee. B&B all year. A 30-second walk from the car park and 20 seconds from the beach. Cask Marque real ale; beer garden. Food at lunch and in the evening. Book online through freetobook",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site calls it a dog friendly pub but doesn't say whether dogs may stay in the rooms. Directories say dogs by prior arrangement, and a charge may apply",
      season: "all-year",
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "coombe-house-cawsand",
    name: "Coombe House",
    kind: "stay",
    // The PL10 1LR postcode centroid, which the owner gives; OSM has no
    // feature for the house.
    lat: 50.33996, lon: -4.20846,
    address: "Fourlanesend, Cawsand, Torpoint, PL10 1LR",
    phone: "07805 895074",
    email: "info@coombehouse-cawsand.co.uk",
    url: "https://www.coombehouse-cawsand.co.uk/tariff-offers/",
    // Rooms, tariff and terms from the owner's site; the landline, parking and
    // peak-weekend minimum from its Visit Rame listing. The tariff is undated.
    notes: "Family-run farmhouse B&B at Coombe Farm on the Mount Edgcumbe estate, above Kingsand and Cawsand, rebuilt after wartime bombing. Five rooms: four king-size en-suites, two with sea views and one sleeping four, and a double with a large private bathroom and sea view. Full English breakfast included, 8–9am. Check-in 4pm, out by 10.30am. 20% non-refundable deposit, the balance 28 days before; a one-night stay is paid in full and non-refundable, and booked direct. Cancelling within 28 days costs 50–100%. Two nights minimum at peak weekends; three nights for the price of two, Sunday–Thursday, 1 October–1 March, not over Christmas and New Year. Ample parking, its Visit Rame listing says. Landline 01752 823925",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. Directories say pets aren't allowed",
      season: "all-year",
      price_per_night: 120,
      price_note: "a couple in a double, 1 October–1 March; £130 2 March–30 September. The four-bed sea-view room £140–150; single occupancy £95–100",
    },
  },
  {
    slug: "edgcumbe-arms-cremyll",
    name: "The Edgcumbe Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1892969581, "Edgcumbe Arms". The PL10 1HX postcode centroid,
    // which the owner gives, is 56 m south-west.
    lat: 50.36051, lon: -4.17528,
    address: "Cremyll, Torpoint, PL10 1HX",
    phone: "01752 822294",
    email: "info@edgcumbearms.co.uk",
    url: "https://edgcumbearms.co.uk/coast-path",
    // The owner's site is a single-page app; details from its rooms, coast
    // path, winter information and wedding tariff sections.
    notes: "17th-century inn at the water's edge in Cremyll, beside the ferry landing and at the gates of Mount Edgcumbe Country Park; the coast path waymarker stands outside. Six en-suite rooms upstairs: rooms 1–4 with river views over the Tamar to Plymouth, 5 and 6 without; doubles and family rooms, room only or B&B. Check-in from 3pm, out by 11am; in winter arrive by 6pm unless arranged. Free residents' car park, limited, so mention it when booking; walkers may leave a car for up to a week. Walker packages from £99 a person a night with breakfast, evening meal and packed lunch, October–March, Sunday–Wednesday nights; single occupancy £25 extra. Two nights Sunday–Wednesday outside school holidays, the second half price. Packed lunches, kit washed and dried, secure bike storage, help with luggage transfer. Self-service dog wash in the car park, 8am–8pm, £10 for 10 minutes. Sunday carvery; log fires. Also 01752 822330",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Designated dog-friendly rooms by arrangement, £15 a night; the wedding terms add one dog per room, vaccinated, never left alone. Dogs welcome throughout the pub, with a dog menu",
      season: "all-year",
      price_per_night: null,
    },
  },
  {
    slug: "devils-point-car-park",
    name: "Devil's Point car park",
    kind: "stay",
    // Centre of OSM way 34512448, an unnamed free surface car park at Devil's
    // Point; park4night's pin is 37 m north-east. The PL1 3RS postcode
    // centroid, which the council gives, is 67 m north.
    lat: 50.36033, lon: -4.16391,
    address: "Devil's Point, Stonehouse, Plymouth, PL1 3RS",
    url: "https://www.plymouth.gov.uk/devils-point-car-park",
    // Rules from the council's page. Access, slope and noise from park4night
    // listing 78213, rated 3.79 from 14, the latest April 2026.
    notes: "Plymouth City Council car park at Devil's Point, the tip of Stonehouse, with views over Plymouth Sound; a long flight of steps down to Royal William Yard, reviewers say. 39 spaces, five disabled; no height limit; open 24 hours. 8am–8pm free in the blue spaces for three hours at most, no return within two hours, enforced by ANPR; 8pm–8am no maximum stay, so a van arriving after 8pm must leave by 11am. The council says nothing about sleeping in vehicles. Sloping and busy by day, reviewers say. The lane in is narrow: a 6.7 m motorhome 2.17 m wide and a 6.4 m van couldn't get through in April 2026. Teenagers in cars some evenings, reviewers say. Pay toilets in Royal William Yard, about 230 m",
    verified: "2026-09-16",
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free, the council says: 8pm–8am unlimited, three hours by day",
      hookup: false,
    },
  },
  {
    slug: "duke-of-cornwall-hotel",
    name: "The Duke of Cornwall Hotel",
    kind: "stay",
    // Centre of OSM relation 11965706, "Duke of Cornwall". The PL1 3LG
    // postcode centroid, which the owner gives, is 13 m south-west.
    lat: 50.36772, lon: -4.14984,
    address: "Millbay Road, Plymouth, PL1 3LG",
    phone: "01752 275850",
    url: "https://thedukeofcornwall.co.uk/faqs/",
    notes: "Victorian hotel of 1863 with a landmark tower at Millbay, between Stonehouse and the Hoe. AA rosette restaurant; lounge and bar; afternoon tea in the tower. Check-in from 3pm, out before 11am; late check-out £25. Breakfast included on B&B rates, otherwise £15 a person: 6.30–9.30am weekdays, 7–9.30am Saturday, 8–10.30am Sunday. Car park behind the hotel, limited and not guaranteed: free by day, a flat fee overnight paid at check-in, £5 to stay after check-out; register the car at reception for the ANPR. Pay and display on the street beside it. Free luggage storage, including six hours after departure. Accessible room 108",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Selected rooms, by prior arrangement, at an extra charge. Not in the restaurant; welcome in the lounge and bar, where breakfast can be served",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "invicta-hotel-plymouth",
    name: "The Invicta Hotel",
    kind: "stay",
    // OSM node 4305986130, "Invicta". The PL1 2PU postcode centroid, which the
    // owner gives, is 55 m south.
    lat: 50.36659, lon: -4.14379,
    address: "11/12 Osborne Place, Lockyer Street, The Hoe, Plymouth, PL1 2PU",
    phone: "01752 664997",
    url: "https://www.invictahotel.co.uk/invicta-hotel-the-hoe-plymouth-FAQ.html",
    notes: "Hotel in a Grade II listed building on the Hoe, a few minutes' walk from the seafront and the Barbican. 23 en-suite rooms over three floors, stairs only: singles, doubles, twins, triples, family rooms, superior twins and superior kings. Full English breakfast included when booked direct. Bar and restaurant. Check-in 3–9pm, later by arrangement; out by 10.30am. On-site parking £10 a night, subject to availability; ring to guarantee a space. Free cancellation up to 48 hours before arrival. Cash accepted",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "Superior twin and superior king rooms only, by prior arrangement; £15 a dog a night cleaning fee",
      season: null,
      price_per_night: null,
      price_note: "best rates by phone, the owner says",
    },
  },
  {
    slug: "george-guest-house-plymouth",
    name: "The George Guest House",
    kind: "stay",
    // OSM node 13050148453, "The George Guest House". The PL1 2HU postcode
    // centroid, which the owner gives, is 27 m north-east.
    lat: 50.36695, lon: -4.14092,
    address: "161 Citadel Road, Plymouth, PL1 2HU",
    phone: "01752 661517",
    email: "info@georgeguesthouse.com",
    url: "https://www.georgeguesthouse.com/rooms-rates/",
    // Prices undated.
    notes: "Family-run guest house on Citadel Road on the Hoe, next to the Gipsy Moth, open all year. Room only, no breakfast: singles, doubles, twins and triples with or without en-suite, and a family room with a double and two singles. Free wifi, TV, tea and coffee. Parking permits £5 for the day; limited secure parking behind, suited to motorcycles; a garage for bikes. Check-in 2–10.30pm, out by 10.30am. Pay on arrival; card details secure the booking. Cancel at least 72 hours ahead, or pay half of a one-night stay or the first night of a longer one",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "Small pets and dogs welcome; no charge or rules published",
      season: "all-year",
      price_per_night: 70,
      price_note: "en-suite double or twin, room only, from; non-en-suite double from £50, family room £75–105",
    },
  },
  {
    slug: "elphinstone-car-park",
    name: "Elphinstone car park",
    kind: "stay",
    // Centre of OSM way 824331899, an unnamed pay surface car park on the
    // waterfront by the Barbican; park4night's pin is 4 m away. The PL1 2NU
    // postcode centroid, which the council gives, is 39 m south-west.
    lat: 50.36372, lon: -4.13404,
    address: "Elphinstone Road, Plymouth, PL1 2NU",
    url: "https://www.plymouth.gov.uk/elphinstone-car-park",
    // Tariff and rules from the council's page. Reviews from park4night
    // listing 98869, rated 4.23 from 75, the latest September 2026; Madeira
    // Road from 441989. Milehouse from the council's park and ride page.
    notes: "Plymouth City Council pay and display car park on the waterfront at the foot of the Hoe, beside the Barbican, where vans stay overnight: 69 spaces, five disabled, two fast EV chargers, no height limit, charged at all times. The council's page doesn't mention motorhomes or sleeping; a penalty charge of £50 or £70 for parking outside the bay markings, and a July 2026 reviewer's neighbour got one despite paying. No motorhome bays, reviewers say: two or three longer spaces with hatching at one end; a 6 m van overhangs both ends, and bays are narrow and sloping. A LWB Boxer and a Crafter fitted in 2026. Full by day; arrive in the evening. Anglers on the quay until late, and some boy racers on the road behind; a September 2026 reviewer found it quiet on Friday and Saturday nights. Public toilets beside it, 50p, open by day only, reviewers say. The water tap was off in 2023. Reviewers also stay in the pay bays along Madeira Road on the Hoe, narrow and with a big camber. The council's Milehouse park and ride doesn't allow overnight motorhome parking. Pay by card at the machine, or RingGo location 16983",
    verified: "2026-09-16",
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: 15,
      price_note: "24 hours, the council says; weekly £60",
      hookup: false,
    },
  },
  // Section 36.
  {
    slug: "royal-oak-hooe",
    name: "The Royal Oak",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 4944269523, "The Royal Oak". The PL9 9QY postcode centroid is
    // 13 m north. CAMRA gives PL9 8QY, which is a different postcode two
    // kilometres away in Plymstock.
    lat: 50.35437, lon: -4.11207,
    address: "Lake Road, Hooe, Plymouth, PL9 9QY",
    // From CAMRA; the pub has no working website.
    phone: "01752 404360",
    url: "https://camra.org.uk/PLY/A-01-139",
    // Rooms and prices from an undated bedandbreakfast.uk listing; CAMRA's
    // entry doesn't mention accommodation, and royaloakhooe.co.uk, the address
    // CAMRA prints, doesn't resolve. Ring before counting on a bed.
    notes: "Waterside pub of 1799 on Hooe Lake, an Asset of Community Value, run by Stonegate and recently taken over by new management; four moorings, a slipway and a garden over the water. Open Monday–Thursday noon–11pm, Friday and Saturday to midnight, Sunday noon–11pm; food noon–3pm and 6–9pm, Sunday roast noon–6pm, no food Sunday evening or Monday. Two regular real ales and a changing one, in the LocAle scheme; real fire, darts, live music, free wifi. A directory lists two B&B rooms: a family room and an en-suite king double looking over Hooe Green",
    verified: null,
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "CAMRA calls the pub dog friendly; nothing published about the rooms",
      season: null,
      price_per_night: null,
      price_note: "£40–60 for the double and £45–70 for the family room, an undated directory says",
    },
  },
  {
    slug: "boringdon-arms",
    name: "The Boringdon Arms",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 6119713785, "Boringdon Arms". The PL9 9TQ postcode centroid is
    // 39 m north-east.
    lat: 50.35829, lon: -4.11767,
    address: "13 Boringdon Terrace, Turnchapel, Plymouth, PL9 9TQ",
    phone: "01752 402053",
    email: "boringdonarmsinfo@gmail.com",
    url: "https://boringdonarms.co.uk/",
    // The owner's site is a holding page saying the venue is under new
    // management and a website is coming; the pub, ales and hours are CAMRA's,
    // the rooms a directory's. Whether the new management still lets them is
    // unconfirmed.
    notes: "Traditional waterside pub in Turnchapel, on the coast path, a former CAMRA Regional Pub of the Year and city pub runner-up in 2025; two secluded gardens behind. Four regular ales and a changing guest, home-cooked food daily. Open Monday–Thursday noon–11pm, Friday and Saturday to midnight, Sunday noon–10.30pm; food noon–3pm daily and 6–9pm Monday–Saturday. Stagecoach 2 from Plymouth, or the water taxi from the Barbican. A directory lists six letting rooms, most looking over the harbour: three twins and a triple sharing a bathroom, and two en-suite family rooms for three or four, each with TV, wifi and a hospitality tray, breakfast included",
    verified: null,
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "CAMRA calls it a dog friendly pub; nothing published about the rooms",
      season: null,
      price_per_night: null,
    },
  },
  {
    slug: "mount-batten-centre",
    name: "The Mount Batten Centre",
    kind: "stay",
    // OSM node 1209419517, "Mount Batten Centre".
    lat: 50.35971, lon: -4.12734,
    address: "Lawrence Road, Mount Batten, Plymouth, PL9 9SJ",
    phone: "01752 404567",
    email: "enquiries@mount-batten-centre.com",
    url: "https://mount-batten-centre.com/accommodation/",
    // The closure is the Centre's own redevelopment update of 14 October 2024;
    // no later news item announces a reopening. The room count comes from
    // search summaries of the Centre's pages, which publish no prices, rules
    // or dog policy of their own.
    notes: "Watersports and activities centre run by a charity trust on the Mount Batten peninsula, on the coast path beside the ferry pier. Closed: the café and the accommodation shut on 14 October 2024 for the Plymouth Sound National Marine Park redevelopment, with a reopening date still to be confirmed, and no reopening announced by September 2026; conference, event and wedding bookings are suspended too. The pontoon reopened to the Mount Batten Ferry in July 2026. Mount Batten beach itself was closed in August 2026 after asbestos fibres were found in sand samples. When it runs, the accommodation is 23 rooms sleeping up to 60, twins through to family rooms, bed and breakfast, with waterfront views and bike storage; full board for groups of twelve or more",
    verified: "2026-09-16",
    stay: {
      type: "hostel",
      dogs: null,
      dogs_note: "The Centre publishes no dog policy",
      season: null,
      price_per_night: null,
      price_note: "not published; ring or email",
    },
  },
  {
    slug: "hotel-mount-batten",
    name: "Hotel Mount Batten",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 394120213, "Hotel Mount Batten". The PL9 9SJ postcode centroid,
    // which CAMRA gives, is 168 m south-east.
    lat: 50.36036, lon: -4.12969,
    address: "Lawrence Road, Mount Batten, Plymouth, PL9 9SJ",
    phone: "01752 484660",
    email: "info@hotelmountbatten.co.uk",
    url: "https://hotelmountbatten.co.uk/",
    // Recorded as a pub with rooms rather than a hotel: the bar is open to
    // non-residents and is CAMRA-listed, and the owner's website is a single
    // holding page with no rooms, prices or rules on it. The room count and
    // their fittings come from booking sites; the bar and food from CAMRA.
    notes: "Bar, restaurant and rooms on the waterfront at Mount Batten, fifty yards from the water on the coast path, looking across the Cattewater to the Barbican and Coxside. The owner's site says only that the hotel is open with limited dates available, and takes enquiries by phone or email; booking sites list 16 en-suite rooms with TV, hairdryer and hospitality tray, many with sea views and some with balconies. The bar is open to non-residents, with up to three regional real ales — Dartmoor Jail Ale, Draught Bass and St Austell Tribute; open Monday–Saturday noon–11pm, Sunday noon–10.30pm, food daily noon–9pm and a Sunday carvery noon–4pm. Buses to the city centre, or the water taxi from the Mayflower Steps",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site publishes nothing. Directories call it dog friendly; a booking site says pets aren't allowed. Ring before arriving with one",
      season: null,
      price_per_night: null,
      price_note: "not published; ring or email",
    },
  },
  {
    slug: "jennycliff-car-park",
    name: "Jennycliff car park",
    kind: "stay",
    // Centre of OSM way 34326446, an unnamed free surface car park; park4night's
    // pin is 25 m away. The PL9 9SW postcode centroid, which the council gives,
    // is 127 m north-west.
    lat: 50.35170, lon: -4.12000,
    address: "Staddon Lane, Jennycliff, Plymouth, PL9 9SW",
    url: "https://www.plymouth.gov.uk/jennycliff-car-park",
    // Tariff, hours and toilets from the council's page. Reviews and the
    // conflicting signs from park4night listing 21391, rated 3.67 from 40, the
    // latest 2026. Mount Batten and Bovisand from the council's own car park
    // pages and the Bovisand Park Estate parking page.
    notes: "Plymouth City Council car park on the cliff above Jennycliff Bay, on the coast path, with the whole of Plymouth Sound in front of it: free, open 24 hours, no height limit, about 30 gravel places, and public toilets open 9.30am to 4pm. The council's page says nothing about motorhomes or sleeping, and park4night classes it as daytime parking only; reviewers in May 2026 contradict each other, one finding a new sign showing free parking with no motorhome restriction and another a \"no overnight parking\" notice. Cars meet and rev on it most evenings until about 11pm, then police patrol and it goes quiet; the surface isn't level. A café across the road. Mount Batten Pier car park, also free and open 24 hours, has no height limit, toilets 10.30am–4pm and rapid EV chargers; Mount Batten Beach car park next to it is limited to 2.2 m. The private estate car park at Bovisand forbids staying in vehicles or camping overnight at any time of year, limits vehicles to 5 m and 3,500 kg and runs ANPR, and the National Trust car park at Wembury beach allows no overnight stays",
    verified: "2026-09-16",
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free, the council says, with no maximum stay published",
      hookup: false,
    },
  },
  {
    slug: "drakes-view-cl",
    name: "Drakes View",
    kind: "stay",
    // The Club's GPS point. The PL9 9SP postcode centroid, which the Club
    // gives, is 111 m south. No owner website found.
    lat: 50.34747, lon: -4.11572,
    address: "The White House, Staddon Heights, Plymouth, PL9 9SP",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/plymouth/drakes-view/",
    // The Club's listing, which shows contact details and directions to members
    // only.
    notes: "Caravan and Motorhome Club Certificated Location on half an acre at Staddon Heights, members only, a few minutes from the coast path: five grass touring pitches, some sloping, levelling blocks needed, nothing over 14 m. No electric hookup and no toilets or showers listed, so bring your own. Wifi, good TV reception, a dog walk from the site, and a helipad. Views over Plymouth Sound one way and to Dartmoor the other; a sandy beach half a mile. Open all year; arrive from 10am, leave by 3pm. The golf club next door has a restaurant. Directions for members only",
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club says it welcomes responsible pet owners, with a dog walk from the site",
      season: "all-year",
      price_per_night: null,
      price_note: "shown to Club members only",
      hookup: false,
    },
  },
  {
    slug: "plymouth-sound-club-campsite",
    name: "Plymouth Sound Caravan and Motorhome Club Campsite",
    kind: "stay",
    // The Club's GPS point; the centre of OSM way 174532124, "Plymouth Sound",
    // is 17 m away and the PL9 0AE postcode centroid, which the Club gives, is
    // 95 m south.
    lat: 50.33441, lon: -4.10619,
    address: "Bovisand Lane, Down Thomas, Plymouth, PL9 0AE",
    phone: "01752 862325",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/devon/plymouth-sound-club-campsite/",
    notes: "Caravan and Motorhome Club campsite on the headland above Bovisand, looking out over Plymouth Sound; non-members welcome. 62 touring pitches, no pods, maximum outfit 9 m. Hookup, motorhome service point, drive-over waste disposal, wifi, good TV reception, play area, a dog walk on site; charcoal, gas and electric BBQs allowed. There is no toilet block, so the site suits a van with its own facilities. Open 30 April to 5 October 2026, and 29 April to 4 October 2027; arrive from 1pm. £5 refundable deposit. Bovisand and the coast path half a mile down; Down Thomas village, a shop and a pub within a mile, with buses to Plymouth. Signed off Renney Road for Down Thomas, then right into Bovisand Lane",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Dogs stay free at Club campsites, up to two a pitch, on a lead no longer than 2 m and not in the buildings; no breeds listed in the Dangerous Dogs Act",
      season: { from: "04-30", to: "10-05" },
      price_per_night: null,
      price_note: "shown only in the online booking; the Club advertises a £25 Tour for Less rate, children 5–17 £1 and under-5s free",
      hookup: true,
    },
  },
  {
    slug: "eddystone-inn",
    name: "The Eddystone Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 1067926841, "The Eddystone Inn". The PL9 0BN postcode
    // centroid, which the owner gives, is 119 m north.
    lat: 50.32057, lon: -4.11311,
    address: "Heybrook Drive, Heybrook Bay, Plymouth, PL9 0BN",
    phone: "01752 862572",
    email: "contact@eddystoneinn.co.uk",
    url: "https://www.eddystoneinn.co.uk/eddyaccommodation/",
    // Hours, ales and the dog-friendly bar from CAMRA; the accommodation from
    // the owner's own page. It is one self-catering apartment, not rooms, and
    // it books through Airbnb, so nothing about price or dogs is published.
    notes: "Clifftop pub on the coast path at Heybrook Bay, with a terrace looking out to the Eddystone lighthouse. The accommodation is a single newly renovated three-bedroom apartment on the third floor above the pub, sleeping up to six, with its own kitchen, linen and towels, and no noise from the bar; the host, Tim, has lived locally for over fifteen years. Enquiries and booking through Airbnb. Pub open Wednesday and Thursday 11.30am–10.30pm, Friday and Saturday to 11.30pm, Sunday 10.30am–9pm, closed Monday and Tuesday; food noon–9pm daily in summer, shorter hours in winter. Two regular ales, Dartmoor Jail Ale and St Austell Tribute, and two changing guests; restaurant, separate bar, real fire, wifi, parking, live music. Buses run to the school timetable only",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "CAMRA calls the pub dog friendly; the owner says nothing about dogs in the apartment",
      season: null,
      price_per_night: null,
      price_note: "shown only in the Airbnb listing",
    },
  },
  {
    slug: "mewstone-meadow-cl",
    name: "Mewstone Meadow",
    kind: "stay",
    // The Club's GPS point. The PL9 0DY postcode centroid, which the Club
    // gives, is 591 m north-east and covers Langdon Court as well. No owner
    // website found.
    lat: 50.32534, lon: -4.09438,
    address: "Langdon Barton Farm, Down Thomas, Plymouth, PL9 0DY",
    url: "https://www.caravanclub.co.uk/certificated-locations/england/devon/plymouth/mewstone-meadow/",
    // The Club's listing, which shows contact details and directions to members
    // only.
    notes: "Caravan and Motorhome Club Certificated Location on an acre and a half of a working 300-acre farm between Down Thomas and Wembury, members only: five enhanced hardstanding pitches with 16 A hookup, lawned areas, wifi, recycling and a dog walk from the site. No toilets or showers listed, so bring your own. Open all year. Wembury Point half a mile and Wembury beach a mile, with the coast path between; a pub, a shop and a bus to Plymouth within a mile. Directions for members only",
    verified: null,
    stay: {
      type: "cl",
      dogs: null,
      dogs_note: "The Club lists it as ideal for dogs, with a dog walk from the site",
      season: "all-year",
      price_per_night: null,
      price_note: "shown to Club members only",
      hookup: true,
    },
  },
  {
    slug: "shearwater-bnb-wembury",
    name: "Shearwater Bed & Breakfast",
    kind: "stay",
    // OSM node 11537248014, "Shearwater", 146 Church Road. The PL9 0HR
    // postcode centroid, which the owner gives, is 91 m west.
    lat: 50.32038, lon: -4.07984,
    address: "146 Church Road, Wembury, Plymouth, PL9 0HR",
    phone: "07746 105129",
    email: "mrobingray@gmail.com",
    url: "https://shearwaterbandbwembury.weebly.com/accommodation.html",
    // Rooms, meals, tariff and terms from the owner's site, which is undated.
    // The email and a second number, 07565 213447, are from Wembury Parish
    // Council's accommodation list.
    notes: "Bed and breakfast in a family home 400 m from Wembury beach and the coast path, with National Trust land between it and the sea and panoramic views from the patio. A double and a twin sharing a wet room kept for guests, with tea and coffee, towels and toiletries; no televisions, but wifi and a shelf of books. Non-smoking, adults and well-behaved children. Guests must be able to manage two flights of stairs up from the road. Parking for two cars in the drive, which guests may leave there in the day at their own risk. Check in from 4pm, out by 10am; guests leave by 10am each day and return after 4pm. Full English or continental breakfast in the sun lounge; evening meals, an arrival tea and packed lunches at extra cost. 50% non-refundable deposit at booking, the balance on arrival; bank transfer or cash only",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs",
      season: null,
      price_per_night: 120,
      price_note: "two sharing at £60 each; a single guest £70, and £30 more for sole use of the bathroom. 10% off stays in August",
    },
  },
  {
    slug: "wembury-bay-bnb",
    name: "Wembury Bay Bed & Breakfast",
    kind: "stay",
    // The PL9 0AF postcode centroid, which the owner gives; OSM has no feature
    // for the house.
    lat: 50.32046, lon: -4.07457,
    address: "2 Warren Close, Wembury, Plymouth, PL9 0AF",
    phone: "01752 863392",
    email: "pwgreenwood59@gmail.com",
    url: "https://wemburybaybedandbreakfast.yolasite.com/",
    // The owner's site sits behind a bot check, so its rooms, tariff and dog
    // policy come from search summaries of it. Wembury Parish Council's
    // accommodation list carries it as "Greenwood", run by Phil Greenwood, and
    // gives the mobile 07554 919295.
    notes: "Bed and breakfast run by Phil Greenwood in Warren Close, a few minutes from Wembury beach and the coast path. Three rooms: a twin en-suite, a twin and a double with a king-size bed, each with TV, wifi and tea and coffee. Cooked breakfast included. 10% off stays of two nights or more",
    verified: null,
    stay: {
      type: "bnb",
      dogs: false,
      dogs_note: "The owner says they don't take dogs",
      season: null,
      price_per_night: 120,
      price_note: "the twin en-suite; the twin £100, single occupancy of the twin £90. A directory instead gives £50 and £40 a person and £80 for the double, so confirm when booking",
    },
  },
  {
    slug: "pilgrims-rest-wembury",
    name: "Pilgrims Rest",
    kind: "stay",
    // Centre of OSM way 1071991391, "Pilgrims Rest". The owner's map link is a
    // zoomed-out view rather than a pin, 300 m south-west. The PL9 0JD
    // postcode centroid is 550 m west, at the Odd Wheel.
    lat: 50.32913, lon: -4.06270,
    address: "Top of Knighton Road, Wembury, Plymouth, PL9 0JD",
    phone: "01752 863429",
    url: "http://www.pilgrimsrest.co.uk/",
    // Run by Jimmy Manley; mobile 07742 982957. The owner's site is undated and
    // was built in 2015, so the tariff is not a 2026 figure. Directories give
    // the address as 41 or 43 Knighton Road, PL9 0EA, and searchforsites lists
    // the site as closed while the owner's site and phone numbers are still up:
    // ring before relying on it.
    notes: "Family-run Camping and Caravanning Club Certificated Site on the Wembury road, members only, five units at most and up to 28 nights: tents, caravans, motorhomes, small campervans, backpackers and cyclists, in an elevated position with countryside and sea views. Grass touring pitches with hookup and hardstanding pitches with hookup; toilets, showers, mains water and night lights. Cash and cheques only. A bus stop outside the entrance and a good wide entrance off the main road. The Odd Wheel, Knighton Stores and the post office are close, and Wembury beach and the coast path are a walk away",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say dogs are welcome; the owner's site doesn't mention them",
      // searchforsites says March to September; the owner gives no dates.
      season: null,
      price_per_night: null,
      price_note: "undated owner's tariff: £20 hardstanding with hookup for two, £16 grass with hookup, £10 for a cyclist or backpacker without",
      hookup: true,
    },
  },
  {
    slug: "brixton-caravan-camping-park",
    name: "Brixton Caravan & Camping Park",
    kind: "stay",
    // Centre of OSM way 1084498266, "Brixton Camping and Caravan Park", on Venn
    // Drive. The PL8 2BN postcode centroid, which the owner gives, is 231 m
    // east.
    lat: 50.34925, lon: -4.04053,
    address: "Brixton, Plymouth, PL8 2BN",
    phone: "01752 402732",
    email: "campsite@mycane.co.uk",
    url: "https://www.brixton-caravan-camping-park.co.uk/prices.htm",
    // The owner's own 2026 site fees. Mobile 07903 432746.
    notes: "Sheltered parkland touring site two minutes' walk from Brixton village, inland from the Yealm, now open all year. Tents, motorhomes and touring caravans; toilet and shower blocks with shaver points, hot and cold water always on, electric hookups. Caravan, trailer tent, motorhome and boat storage at a separate secure site. No charging an electric car off a hookup. The village has a pub, a restaurant, a fish and chip shop, a garage, a church and small shops, and buses pass through; Wembury and Bovisand beaches are three miles. Book through the enquiry form or by phone. Coming from the A379, turn at the Brixton mini-roundabout onto Steer Point Road; the drive is 250 m on the right",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2 a night; the owner publishes no other rules",
      season: "all-year",
      price_per_night: 24,
      price_note: "2026 fees, added up: two adults at £5 each, £7 for the van and £7 for hookup; £17 without hookup. A large motorhome £10 instead of £7, awning £3, boat £10, child 3–14 £2, under 3 free",
      hookup: true,
    },
  },
  // Section 37.
  {
    slug: "worswell-barton-farm",
    name: "Worswell Barton Farm",
    kind: "stay",
    // OSM node 13181456257, "Worswell Barton Farm". The PL8 1HB postcode
    // centroid, which the owner gives, is 1.4 km east: the postcode covers a
    // wide stretch of farmland.
    lat: 50.30600, lon: -4.05739,
    address: "Worswell Barton Farm, Noss Mayo, Plymouth, PL8 1HB",
    phone: "07771 522281",
    email: "worswellbartonfarm@outlook.com",
    url: "https://www.worswellbarton.co.uk/wp/",
    // The owner's site; the pods from their Pitchup listing, rated 9.9.
    notes: "B&B in the farmhouse of a 600-acre working National Trust farm on the headland between the Yealm and Stoke Point, run by Phil and Jane. Five rooms: Gunrow and Gara, en-suite with king beds; Blackstone and Beacon, family rooms with a double and a single; Cellars, the smallest, a double. Full English breakfast 7–9am. No arrivals before 4pm; parking in front of the farmhouse; shoes off indoors, and it is a working farm with machinery about. Ten minutes' walk from the National Trust's Warren car park, twenty from Noss Mayo. Camping pods too, adults only, from £60 for two and three at most: bed linen, cooking equipment, a kitchen and lounge, gas and electricity, but no shower in the pod; one dog £10 a night. No pitches for a campervan",
    verified: "2026-09-17",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "\"We welcome well-behaved dogs but do not allow them in the farmhouse. We offer an outside kennel for dogs that are happy to be on their own. There is a small charge for kennel use\"",
      season: null,
      price_per_night: null,
      price_note: "room prices aren't published; ring or email",
    },
  },
  {
    slug: "sail-away-noss-mayo",
    name: "Sail Away",
    kind: "stay",
    // The PL8 1DX postcode centroid, which directories give; OSM has no
    // feature for the house.
    lat: 50.31377, lon: -4.03211,
    address: "Stoke Road, Bridgend, Noss Mayo, Plymouth, PL8 1DX",
    // No owner website found, so everything here comes from directories and
    // the prices are undated. Tripadvisor's most recent reviews are from 2021,
    // so check it is still trading before relying on it.
    notes: "Small B&B run by Clive and Mo at Bridgend, on the Noss Mayo side of the creek, fifty yards from the water and next to the footpath towards Stoke Beach. Two en-suite rooms: Sandpipers, a first-floor king with glimpses of the estuary and a slipper bath, and Little Grebe, a ground-floor king with a rainfall shower over the bath. Breakfast included; guests' lounge; an acre and a half of terraced gardens with seating looking across to Newton Ferrers. Free parking. Oystercatchers, a one-bedroom self-catering unit, as well",
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "No owner's site, and directories don't say",
      season: null,
      price_per_night: null,
      price_note: "a directory gives Sandpipers £88.50 and Little Grebe £82.50, undated",
    },
  },
  {
    slug: "briar-hill-farm",
    name: "Briar Hill Farm",
    kind: "stay",
    // The PL8 1AR postcode centroid, which the owner gives. OSM's way
    // 235013105, "Briar Hill Farm Holiday Lodges", is 65 m west, and covers
    // the lodges rather than the touring field.
    lat: 50.31673, lon: -4.03720,
    address: "Briar Hill Farm, Court Road, Newton Ferrers, Plymouth, PL8 1AR",
    phone: "01752 872252",
    email: "info@briarhillfarm.co.uk",
    url: "https://www.briar-hill.co.uk/",
    // The owner's site now sells holiday lodges and says nothing about
    // touring, so the pitches come from the UK Parks and Campsites.co.uk
    // listings, which disagree with each other and are undated.
    notes: "Quiet, secluded site in woodland above the Yealm estuary on the Newton Ferrers side, a mile from the coast path. The owner's own site is now about buying a holiday lodge, from £109k, and mentions no camping at all; directories still list touring. UK Parks gives 20 touring pitches on an acre and a half of unmarked pasture with electricity for tourers, alongside seven privately owned caravans and four lodges, and a season of 1 March to 5 January; another listing gives 30 pitches and March to the end of October, a third 50. Basic toilets and shower block with a separate washing-up area; laundry, fishing, tennis court, tourer storage. Ring to confirm touring is still taken before relying on it",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say well-behaved dogs are welcome for a charge, with no breed restrictions and an area for walking them; the owner's site doesn't say",
      season: null,
      price_per_night: null,
      price_note: "not published",
      hookup: null,
    },
  },
  {
    slug: "dolphin-inn-kingston",
    name: "The Dolphin Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 827355538, "Dolphin Inn". The TQ7 4QE postcode
    // centroid is 30 m north.
    lat: 50.31425, lon: -3.91758,
    address: "Kingsbridge Road, Kingston, Kingsbridge, TQ7 4QE",
    // Phone from CAMRA's entry, updated 9 February 2026; directories also give
    // 07764 218736 and 01752 216391.
    phone: "07907 923398",
    // The pub's own domain 301s to its Facebook page; there is no website.
    url: "https://www.the-dolphin-inn-kingston.co.uk/",
    // Rooms from Punch's tenancy advertisement and from directories; hours,
    // beer and the change of landlord from CAMRA, 9 February 2026.
    notes: "16th-century village pub in Kingston, a mile up from Wonwell beach and the Erme mouth: three cottages knocked together, exposed stone, low light, three inglenooks and open fires. Three en-suite letting rooms in the building across the lane, double or twin, with TV, wifi and a tea tray; full English breakfast included. CAMRA's February 2026 entry calls the rooms adjacent holiday cottages and says the pub itself has none. A new landlord took over in April 2025 and put a chef in; Punch is now advertising the tenancy, with a fourth letting room planned. Dartmoor Jail Ale and Butcombe Original with two changing beers, and Hunts cider. Food Monday–Saturday noon–2pm and 6–8.30pm, Sunday lunch noon–3pm; bar to 11pm, 10.30pm on Sunday. Garden, real fire, darts, free wifi, twelve parking spaces. Monthly quiz and open mic nights. Registered as an asset of community value",
    verified: null,
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "CAMRA lists the pub as dog friendly and a directory calls the B&B dog friendly too; there's no owner's site to confirm the rooms",
      season: null,
      price_per_night: null,
      price_note: "not published; ring",
    },
  },
  {
    slug: "pickwick-inn-bigbury",
    name: "The Pickwick Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 11053856269, "The Pickwick Inn". The TQ7 4HQ postcode centroid,
    // which the owner gives, is 22 m north-east.
    lat: 50.30963, lon: -3.87837,
    address: "The Pickwick Inn, St Ann's Chapel, Bigbury, Kingsbridge, TQ7 4HQ",
    phone: "01548 810310",
    email: "pickwick_inn@outlook.com",
    url: "https://www.thepickwick.co.uk/bed-breakfast",
    // Not the Pickwick Inn at St Issey near Padstow, pickwickinn.co.uk, whose
    // rooms, prices and £10 dog charge belong to a different pub.
    notes: "Pub, B&B and registered wedding chapel in St Ann's Chapel, inland of Bigbury: an 18th-century Grade II listed building incorporating the remains of the 15th-century St Ann's Chapel and a 17th-century house, formerly the Old Chapel Inn. The owners since December 2022 restored the chapel and had it licensed for weddings again; the Old Chapel room, with original beams and historic artwork in the walls, is let for private hire. Five en-suite rooms. Pub noon–11pm Monday–Saturday, noon–10pm Sunday; lunch Monday–Saturday noon–2pm, Sunday roast noon–3pm, dinner Monday–Saturday 5.30–8pm. Gluten-free options. Rooms book through Booking.com or by ringing. Holywell Stores in the village",
    verified: "2026-09-17",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "The owner's site doesn't mention dogs. A dog-friendly directory lists it under its old name, the Old Chapel Inn, as allowing dogs everywhere",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "chapelcombe",
    name: "Chapelcombe Caravan and Motorhome Site",
    kind: "stay",
    // Centre of OSM way 993728448, an unnamed caravan site 275 m east of the
    // Pickwick Inn, which matches the owner's "200 metres from the Pickwick
    // Inn"; the identification is inferred, since the way carries no name. The
    // TQ7 4HQ postcode centroid, which the owner gives, is 265 m west.
    lat: 50.30999, lon: -3.87447,
    address: "Chapelcombe Farm, St Ann's Chapel, Bigbury, Kingsbridge, TQ7 4HQ",
    phone: "01548 810512",
    email: "chapelcombe1@hotmail.com",
    url: "https://chapelcombecouk.wordpress.com/",
    notes: "Small family-run site on a farm at St Ann's Chapel, run by the same family for over forty years: 20 pitches on two acres, part grass, part hardstanding, with a view from every pitch. Electric hookup on every pitch, ladies' and gents' toilets and showers at 50p, free wifi, chemical waste disposal. Fresh eggs, preserves and frozen beef and lamb packs for sale. 200 m from the Pickwick Inn and Holywell Stores, three-quarters of a mile from the Oyster Shack; Modbury 4 miles, Kingsbridge 8, Plymouth 18. Don't use a car sat nav, the owner says: use caravan-friendly directions. Mobiles Andrew 07790 307711 and Tracey 07544 910969. A directory calls it a five-pitch Camping and Caravanning Club Certificated Location, which doesn't square with the owner's twenty",
    verified: "2026-09-17",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "\"dog (and cat!) friendly but please keep dogs on a lead and be responsible owners\"",
      season: "all-year",
      price_per_night: 25,
      price_note: "a pitch in 2026, with standard electric, water, awning, one car and dogs",
      hookup: true,
    },
  },
  {
    slug: "mount-folly-farm",
    name: "Mount Folly Farm",
    kind: "stay",
    // Centre of OSM way 235019397, "Mount Folly Farm"; park4night's pin is
    // 120 m south-east. The TQ7 4AR postcode centroid, which the owner gives,
    // is 400 m south-west, on the farm's grass overflow car park.
    lat: 50.28750, lon: -3.88323,
    address: "Mount Folly Farm, Bigbury on Sea, Kingsbridge, TQ7 4AR",
    // Also 07492 815824; an older listing gives 07830 138133.
    phone: "01548 810079",
    email: "info@bigburyholidays.co.uk",
    url: "https://www.bigburyholidays.co.uk/campsite-south-hams-devon/",
    // Pitch count, water, waste and the reviews from park4night listing 94623,
    // rated 4.24 from 38, the latest July 2026.
    notes: "Working farm campsite on the hill above Bigbury beach, with the coast path running through it and the view out to Burgh Island; run by Bigbury Camping Ltd and listed as an Accommodation Way Maker, deliberately a low-cost base for walkers. Grass pitches for tents, roof tents, campervans, motorhomes and caravans; park4night gives 25. Basic toilets and showers, free and open around the clock; drinking water and black waste disposal; a self-service coffee hut. Hookups are limited and must be booked in advance. Strict rules on no radios, speakers or amplified music of any kind. Book through CampManager: 30% deposit, the balance a month before. Reviewers warn the ground slopes enough to need levelling blocks and call the toilets tired but working; no wifi and patchy signal",
    verified: "2026-09-17",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night. A July 2026 park4night reviewer called it dog friendly; another the same month said it wasn't",
      season: "all-year",
      price_per_night: 20,
      price_note: "two adults at £10 each; child 10–16 £5, 5–9 £1, under 5 free. Hookup £6, dog £3, and £4 more an adult on Friday and Saturday nights, May–August",
      hookup: true,
    },
  },
  {
    slug: "challaborough-bay-holiday-park",
    name: "Challaborough Bay Holiday Park",
    kind: "stay",
    // Centre of OSM way 156245248, "Challaborough Bay Holiday Park", tagged
    // tents=no. The TQ7 4HU postcode centroid, which the owner gives, is
    // 330 m west.
    lat: 50.29084, lon: -3.89472,
    address: "Challaborough Bay Holiday Park, Near Bigbury, Kingsbridge, TQ7 4HU",
    url: "https://www.parkdeanresorts.co.uk/location/devon/challaborough-bay/",
    notes: "No touring or camping pitches: caravans, lodges, cottages and safari tents to hire, and nowhere to put your own van. A Parkdean Resorts park on the hillside above Challaborough beach, with the coast path running along the top and the beach and Burgh Island below; caravans sleeping up to eight in three bedrooms, extra-wide and wheelchair-friendly models among them, and two-bedroom lodges. Indoor heated pool with sauna, open 13 March–2 November 2026; adventure playground, sports court, convenience store, launderette, restaurant, takeaway, entertainment venue, chemical disposal. Wifi in the accommodation is extra, from £5.95",
    verified: "2026-09-17",
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Some caravans are pet friendly; the owner publishes no charge or rules. Dogs are banned from Challaborough beach 1 May–30 September, though Bigbury and Bantham take them all year",
      season: null,
      price_per_night: null,
      price_note: "priced by the break, not the night: caravans from £116, lodges from £239, cottages from £389",
      hookup: null,
    },
  },
  {
    slug: "summerwinds-bigbury",
    name: "Summerwinds",
    kind: "stay",
    // OSM node 5150555679, "Summerwinds B&B". The TQ7 4AS postcode centroid,
    // which directories give, is 130 m north-west.
    lat: 50.28300, lon: -3.89377,
    address: "Summerwinds, Marine Drive, Bigbury on Sea, Kingsbridge, TQ7 4AS",
    phone: "01548 810669",
    email: "tk.summerwinds@gmail.com",
    // No owner website found; the rooms and facilities come from the South
    // West Coast Path and National Trails accommodation listings and from
    // Tripadvisor, none of them dated.
    notes: "Small B&B on Marine Drive at Bigbury-on-Sea, on the coast path above the beach, looking out to Burgh Island and across the Avon to Bantham. Three double rooms, two of them en-suite, some with balconies. Full English breakfast and other choices. Free parking, free wifi, laundry service. One-night stays taken",
    verified: null,
    stay: {
      type: "bnb",
      dogs: null,
      dogs_note: "Tripadvisor describes the rooms as dog friendly; there's no owner's site to confirm it",
      season: null,
      price_per_night: null,
      price_note: "not published; ring or email",
    },
  },
  {
    slug: "bigbury-marine-drive-car-park",
    name: "Marine Drive car park, Bigbury-on-Sea",
    kind: "stay",
    // Centre of OSM way 159896991, an unnamed tarmac pay car park 146 × 98 m
    // behind the beach; park4night's pin is 20 m away. The TQ7 4AS postcode
    // centroid, which the operator gives, is 170 m north.
    lat: 50.28222, lon: -3.89428,
    address: "Marine Drive, Bigbury-on-Sea, Kingsbridge, TQ7 4AS",
    url: "https://www.rcpparking.com/node/2194",
    // Spaces, tariff and facilities from the operator's own page. The council's
    // former motorhome rule from its motorhomes page; the handover from South
    // Hams District Council's March 2024 news item. Reviews from park4night
    // listing 57895, rated 4.06 from 18, and the free Marine Drive bays from
    // 265402, rated 3.8 from 5.
    notes: "The big pay car park behind the beach where the coast path arrives at Bigbury-on-Sea, and not a place to sleep. 315 spaces, seven disabled, open 24 hours, with ANPR, CCTV, lighting, patrols and staff in core hours. RCP Parking has run it since 25 March 2024, when South Hams District Council gave it up; under the council it was one of the car parks where a self-contained motorhome could stay 6pm–9am, and that rule went with the council. The tariff is by the day, not the night: 30 minutes £1, an hour £2, two hours £4.50, four £8.50, six £12.50, all day to 23.59 £14.50, vans and minibuses all day £25, coaches £50; card and contactless only, no Amex. park4night reviewers report no-overnight signs, enforcement officers checking after dark and a motorhome ticketed, while others say they stayed unbothered; that listing's £8 for four hours and £2 from 6pm to 8am no longer match the operator's tariff. A smaller free car park along Marine Drive is signed against overnight sleeping, and reviewers there found the machines dead and the PayByPhone code hard to use on a weak signal. Public toilets open 24 hours alongside. Every other South Hams council car park bans overnight camping and sleeping at all times",
    verified: "2026-09-17",
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "no night rate: all day to 23.59 is £14.50, or £25 for a van or minibus",
      hookup: false,
    },
  },
  // Section 38.
  {
    slug: "sloop-inn-bantham",
    name: "The Sloop Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 283936675, "The Sloop Inn". The TQ7 3AJ postcode
    // centroid, which the owner gives, is 54 m east.
    lat: 50.27831, lon: -3.86886,
    address: "The Sloop Inn, Bantham, Kingsbridge, TQ7 3AJ",
    phone: "01548 560489",
    url: "https://www.thesloop.co.uk/",
    notes: "14th-century inn in the village a few minutes up from where the Bantham ferry lands, and the first building the path passes on the east bank. Five en-suite rooms directly above the inn, plus a family suite with a double bedroom and an adjoining children's room with bunks; 32-inch smart TV, tea tray, free wifi and central heating in each. Bar noon–3pm and 6–11pm Monday–Thursday and noon–11pm Friday–Sunday; food noon–2pm and 6–9pm Monday–Thursday, with breakfast 9.30–11am Friday–Sunday and Sunday lunch running to 4pm. Rooms and tables book online. The lane down to the village is single track with passing places and awkward for anything large",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "\"children and dogs are welcome throughout the inn\"; no charge, and no room set aside or ruled out",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "bantham-beach-car-park",
    name: "Bantham Beach car park",
    kind: "stay",
    // Centre of OSM way 97118054, "Bantham Beach Car Park", a pay surface car
    // park behind the dunes; park4night's pin is 22 m south-east.
    lat: 50.27765, lon: -3.87599,
    address: "Bantham Beach Car Park, Bantham, Kingsbridge",
    // Everything here is from park4night listing 247202, rated 4.67 from 3,
    // the latest August 2026. No operator's page found, so the tariff is only
    // what reviewers paid.
    notes: "The big pay car park behind the dunes at Bantham, a few hundred metres from the ferry slip, and not a place to sleep: the gates are locked at 21:00 or sunset and reviewers say overnight parking is not allowed inside. 99 spaces. A reviewer paid £18 for the day in a campervan in August 2026 and says it costs less if you arrive late; earlier reviewers paid £7 in 2024 and £4 in 2023, when the gateman said the lower gate locks at eight and suggested parking on the road instead, which several vans then did overnight. Toilets, water and food vans; a café on the beach car park to 5pm. Dogs are allowed on the riverbank end of the beach only. No sea view from the car park itself — the beach is over the dunes. Reviewers with larger vans struggled badly with oncoming traffic on the lane down",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "no night rate: £18 for the day in a campervan in 2026, a reviewer says, and less arriving late",
      hookup: false,
    },
  },
  {
    slug: "higher-aunemouth-farm",
    name: "Higher Aunemouth Farm",
    kind: "stay",
    // Centre of OSM way 156245251, "Higher Aunemouth Camping". The TQ7 3AD
    // postcode centroid, which directories give, is 199 m south-west, and
    // park4night's pin 140 m south-west.
    lat: 50.28472, lon: -3.85373,
    address: "Higher Aunemouth Farm, Bantham, Kingsbridge, TQ7 3AD",
    url: "https://aunemouthcamping.co.uk/",
    notes: "Small family campsite on the farm above Bantham, a quarter of a mile from the beach and looking out over the Avon estuary. The main fields are unallocated — turn up and pick your own spot. Hot showers, eco toilets, a washing-up area and water points; firebowls, logs and kindling to hire or buy. Williams Field is a separate area of four pitches, each with its own firebowl, table, water and one vehicle, at £35 a night early season with weekly discounts at peak and a minimum stay. No young adult groups, and under-18 groups only with an adult. The 2027 season opens on 1 April",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "\"very welcome\", the owner says, at no charge",
      season: { from: "04-01", to: "09-13" },
      price_per_night: 25,
      price_note: "a campervan or motorhome; a one-person tent £15, two-person £20, family tent £25, caddy van £20, an extra small tent £5",
      hookup: false,
    },
  },
  {
    slug: "north-upton-farm",
    name: "North Upton Caravan and Campsite",
    kind: "stay",
    // Centre of OSM way 156245250, "North Upton Caravan and Camp Site". The
    // TQ7 3AB postcode centroid, which the owner gives, is 233 m south-east.
    lat: 50.28788, lon: -3.84551,
    address: "North Upton, Bantham, Kingsbridge, TQ7 3AB",
    phone: "01548 560508",
    email: "northupton@outlook.com",
    url: "https://www.northupton.org.uk/",
    notes: "Family-run site a mile inland of Bantham on an acre and a half of sloping ground: caravan pitches and ten camping pitches, taking caravans, campervans, motorhomes and tents, alongside privately owned statics — there's a long waiting list for a static pitch. Toilet block with coin-operated showers, disabled facilities, coin laundry, waste disposal, cold water taps and recycling. Music off by nine and minimal noise after ten; under-18 groups only with an adult. It is also a Caravan and Motorhome Club Certificated Location",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "\"Dogs must be kept on leads throughout the whole site\"; no charge published, and a dog walk from the site",
      season: { from: "03-15", to: "11-15" },
      price_per_night: null,
      price_note: "published only as a downloadable PDF tariff on the owner's site",
      hookup: true,
    },
  },
  {
    slug: "south-devon-camping",
    name: "South Devon Camping",
    kind: "stay",
    // Centre of OSM way 1423869795, one of two unnamed camp_site ways tagged
    // with this operator and website. The TQ7 3JT postcode centroid, which the
    // owner gives, is 130 m north-west.
    lat: 50.26764, lon: -3.84695,
    address: "Lower Terawhiti Farm, South Milton, Kingsbridge, TQ7 3JT",
    phone: "07545 650868",
    email: "southdevoncamping@gmail.com",
    url: "https://www.southdevoncampingsite.co.uk/",
    notes: "Off-grid camping on a traditional working farm above South Milton, a kilometre inland of the path and ten minutes' walk down to South Milton Sands: \"rustic, relaxed, affordable\", the owner says, on pitches of at least 10 m by 10 m with views out over the fields to the coast. Clean toilets and showers. Sheep, goats, ducks and chickens for the children; winter vegetables, summer berries and autumn pumpkins from the farm, and a 200-head beef herd. Books online. Neither prices nor season dates are published — ring or email",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "\"Well-behaved dogs are welcome to join the adventure\"; no charge or rules published",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
      hookup: false,
    },
  },
  {
    slug: "hope-and-anchor-hope-cove",
    name: "Hope & Anchor",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 165093323, "The Hope And Anchor". The TQ7 3HQ postcode
    // centroid, which the owner gives, is 29 m south-west.
    lat: 50.24592, lon: -3.85840,
    address: "Hope & Anchor, Hope Cove, Kingsbridge, TQ7 3HQ",
    // Also 0345 241 1133, St Austell Brewery's central reservations line.
    phone: "01548 561294",
    email: "reservations@staustellbrewery.co.uk",
    url: "https://www.hopeandanchor.co.uk/",
    notes: "St Austell Brewery's pub with rooms at Outer Hope, on the path where it comes down into the cove. Four grades of room — standard double, signature view double, standard family and premium view double — each with a king bed, en-suite and a full breakfast included, served 8–11.30am. Check-in 3–10pm, out by 11am; the pub opens 8am–11pm. A pay and display car park alongside, and no EV charging. St Austell prices by demand, so a rate only exists once you ask for particular nights",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "Dogs are welcome in most of the pub but not the main restaurant, and in a limited number of bedrooms which must be booked ahead; £20 a dog for the stay, which buys a hamper with a ball, Forthglade treats, poo bags and a can of dog beer",
      season: null,
      price_per_night: null,
      price_note: "not published: priced by demand and quoted on request",
    },
  },
  {
    slug: "cottage-hotel-hope-cove",
    name: "The Cottage Hotel",
    kind: "stay",
    // Centre of OSM way 165092863, "The Cottage Hotel". The TQ7 3HJ postcode
    // centroid, which the owner gives, is 26 m south.
    lat: 50.24507, lon: -3.85851,
    address: "The Cottage Hotel, Hope Cove, Kingsbridge, TQ7 3HJ",
    phone: "01548 561555",
    email: "info@hopecove.com",
    url: "https://hopecove.com/",
    notes: "Long-established hotel in its own grounds above the beach at Outer Hope, looking across Bigbury Bay to Burgh Island. Six grades of room, from a 36 m² premier balcony room down to a 5 m² back-facing single. Rates are quoted as dinner, bed and breakfast — a continental and hot Devon buffet breakfast and a daily changing table d'hôte dinner — with £22 a person a night off for bed and breakfast alone. Sunday lunch at 12.30, cream teas and afternoon tea on the terrace, bar snacks and a lighter menu; breakfast for non-residents £15. Check-in 3pm, out by 11am, with early check-in £20 if they can manage it. The first night is a non-refundable deposit, forfeit inside 30 days, though they may credit it against a stay within six months. Beach Barefoot Hospitality took over recently from William and Sarah Ireland, who stay on as advisers",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "\"Well behaved dogs are welcome in some of our guest bedrooms. Charges of £15.00 per dog, per night are payable (excluding food)\" — not the premier balcony rooms, and not in the restaurant or bar, though they are welcome in the snug and guest lounge. Booking sites quote £9, which the hotel's own terms don't",
      season: null,
      price_per_night: null,
      price_note: "priced as dinner, bed and breakfast, by season and length of stay: in high season £435 a night for a premier balcony room down to £99 for the budget single",
    },
  },
  {
    slug: "karrageen",
    name: "Karrageen Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 156120935, "Karrageen Campsite". The TQ7 3EN postcode
    // centroid, which the owner gives, is 138 m south, and park4night's pin
    // 139 m south-east.
    lat: 50.23978, lon: -3.84066,
    address: "Karrageen Caravan and Camping Park, Bolberry, Malborough, Kingsbridge, TQ7 3EN",
    phone: "01548 561230",
    email: "holiday@karrageen.co.uk",
    url: "https://www.karrageen.co.uk/",
    notes: "Terraced family park in the lanes above Hope Cove, a kilometre inland of the path at Bolberry Down. Level pitches with sea views, a well-stocked licensed shop at reception, a disabled and family shower room, site-wide wifi, laundry and waste disposal. A pitch takes a car, two adults and two children, six people at most, and a unit over 6 m is charged as extra-large. Booking is by online form — the site doesn't show live availability — and you must be over 20 to book. The Top Field opens only 22 May–1 June and 18 July–1 September 2026",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£3 a night; no rules published",
      season: { from: "03-27", to: "09-28" },
      price_per_night: 26,
      price_note: "a touring caravan, motor caravan or tent up to 6 m in low season; £33 mid, £38 high, and £26, £37 and £44 for a unit over 6 m. A one-person hiker tent £15–£25. Hookup £6, or £9 with a mobile mains unit; adult 17+ £6–£10 by season, child £3. Low season is 27 March–20 May, high 10 July–4 September",
      hookup: true,
    },
  },
  {
    slug: "bolberry-house-farm",
    name: "Bolberry House Farm",
    kind: "stay",
    // Centre of OSM way 156120928, "Bolberry House Farm Camping". The TQ7 3DY
    // postcode centroid, which the owner gives, is 411 m south-west.
    lat: 50.23960, lon: -3.83312,
    address: "Bolberry House Farm, Bolberry, Malborough, Kingsbridge, TQ7 3DY",
    phone: "01548 561251",
    email: "enquiries@bolberryhousefarm.com",
    url: "https://www.bolberryhousefarm.com/",
    notes: "Small family park in the hills between Hope Cove and Salcombe, on the lane out to Bolberry Down. Two areas: the Main Park, six mostly level acres, part hardstanding and mostly grass, for caravans, motorhomes, campervans and tents; and the Paddock, three quieter acres 300 m away whose own facilities are shut, so guests there walk to the Main Park's. Free showers and hot water, basins, hairdryers and shaver points, washing machines and tumble dryers, a dishwashing room, an outside wetsuit wash, wifi, a shop in high season and food vans some evenings. Three nights for the price of two, or seven for five, in low and mid season to late September. Static caravans by the week, £500–£800",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "£2–£3 a night by season, with a dog exercising meadow and an outside wash. In a static, two at most and £45 a week",
      season: null,
      price_per_night: 25,
      price_note: "a family pitch — two adults, up to two under-18s and a car — in low season; £30 mid, £37 high. Couples only £24, £28 and £34; a solo hiker tent without a car £12–£14, low and mid season only. Hookup £6, extra adult £5–£7, child £2–£3, under-2s free. Low season is 5 April–22 May and 7–28 September, high 19 July–31 August",
      hookup: true,
    },
  },
  {
    slug: "higher-rew",
    name: "Higher Rew Caravan and Camping Park",
    kind: "stay",
    // Centre of OSM way 373598412, "Higher Rew Campsite". The TQ7 3BW postcode
    // centroid, which the owner gives, is 201 m north-west, and park4night's
    // pin 182 m north-west.
    lat: 50.22930, lon: -3.80329,
    address: "Higher Rew, Malborough, Kingsbridge, TQ7 3BW",
    // Also 07808 645913.
    phone: "01548 842681",
    email: "enquiries@higherrew.co.uk",
    url: "http://www.higherrew.co.uk/",
    notes: "Family park in the valley behind Soar Mill Cove, a mile and a half inland of the path and about an hour and a half's walk from Salcombe. Ninety grass pitches in three areas: the Main Park takes motorhomes, campervans, caravans and tents up to 8 m, most pitches with hookup; the Bungalow Field, ten pitches, is campervans and tents only; the Reservoir Field has eight numbered pitches for campervans and tents, hookup on four of them, and anything over 6.5 m needs a phone call first. EV charging at 50p an hour; locked indoor storage and boat mooring by arrangement. The booking system has a backpacker-without-a-car option for coast path walkers, and one adult can bring one child at no extra charge. £100 deposit, balance 28 days before; ring for a single night in high season if the site shows none. No price rise in 2026, the owner says. The lane in is very narrow — park4night reviewers with big motorhomes say to take Higher Town Road and to watch which of the two entrances you use — and the ground is uneven enough that some pitches need levelling",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Kept on a lead while on the pitch; no charge published",
      season: { from: "03-27", to: "11-01" },
      price_per_night: null,
      price_note: "the owner publishes the tariff only as an image. A directory gives £12–£32 a pitch a night for two people and a car; park4night gives £25–£40, and a 2019 reviewer paid £17 for a motorhome, four people and hookup",
      hookup: true,
    },
  },
  {
    slug: "soar-mill-cove-hotel",
    name: "Soar Mill Cove Hotel",
    kind: "stay",
    // Centre of OSM way 156118751, "Soar Mill Cove Hotel". The TQ7 3DS postcode
    // centroid, which the owner gives, is 541 m east: the postcode covers a
    // stretch of farmland inland.
    lat: 50.22489, lon: -3.81829,
    address: "Soar Mill Cove Hotel, Soar Mill Cove, Salcombe, TQ7 3DS",
    phone: "01548 561566",
    email: "info@soarmillcove.co.uk",
    url: "https://soarmillcove.co.uk/",
    notes: "Family-run hotel in its own valley at the head of Soar Mill Cove, a few hundred metres off the path between Bolberry Down and Bolt Head, with ten acres of garden running towards the beach. Rooms and family suites, including connecting family rooms and sea-view rooms; the ground-floor rooms open by patio doors straight onto the garden. Breakfast cooked to order and included with most rates; lunch, afternoon tea, a café, a bar and a restaurant. Spa, indoor pool. Free parking. West Soar and Ocean View are self-catering and separate from the hotel",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "\"Only some of our rooms are available for dog friendly stays\" — ring to check — and \"a small fee of £20 per dog, per night applies\", though the hotel's terms elsewhere say all but three rooms take dogs, two at most, and give £15. A pooch protocol form to sign, dogs kept on the floor and moved out of the dining room if they are noisy; dog and boot wash, and the resident labradors come with a walks map",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "alston-farm-campsite",
    name: "Alston Farm Campsite",
    kind: "stay",
    // Centre of OSM relation 11874413, "Alston Farm". The TQ7 3BJ postcode
    // centroid, which the owner gives, is 459 m west.
    lat: 50.25380, lon: -3.79444,
    address: "Alston Farm, Malborough, Kingsbridge, TQ7 3BJ",
    // Also 01548 561260.
    phone: "07969 750229",
    email: "info@alstoncampsite.co.uk",
    url: "https://alstoncampsite.co.uk/",
    notes: "Plain farm camping in the lanes above the Salcombe estuary — \"simple camping\", the owner says, and the facilities are always clean and open. Grass and hardstanding pitches for tents, touring caravans, campervans and motorhomes, with 6 amp hookup where you want it. Showers 20p. A playground with a zip line, and a dog walking area. Two static caravans to hire, number 70 sleeping six and number 77 four. No booking needed for a tent or campervan unless you want hookup",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "The first two free and £1 a night each from the third; a dog walking area on the farm, and static number 70 takes dogs",
      season: { from: "03-15", to: "11-01" },
      price_per_night: 25,
      price_note: "a motorhome, van or four-berth tent in low season; £32 high. A small tent or campervan £22 or £30, one person in a small tent £15 or £20, and weekly rates from £95. Hookup £3 a night or £20 a week, extra adult £5–£6, child 8–17 £3–£4, under-7s free, extra vehicle £2 in high season, boat £4. High season is 22 May–1 June and 17 July–5 September",
      hookup: true,
    },
  },
  {
    slug: "south-sands-hotel",
    name: "South Sands Hotel",
    kind: "stay",
    // Centre of OSM way 293592719, "South Sands Boutique Hotel and Restaurant".
    // The TQ8 8LL postcode centroid, which the owner gives, is 53 m west.
    lat: 50.22478, lon: -3.78445,
    address: "South Sands Hotel, Bolt Head, Salcombe, TQ8 8LL",
    phone: "01548 845900",
    email: "enquiries@southsands.com",
    url: "https://southsands.com/",
    notes: "Hotel on the beach at South Sands, where the path comes off Bolt Head and turns into Salcombe, with a restaurant and bar opening onto the sand. Rooms are graded by class of dinghy — Optimist, Enterprise, Yawl, Dragon and J Class — with beach suites as well. Guests arriving with a dog and no dog room free pay £50 for a deep clean, so say so when you book",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "\"A charge of £19.50 per dog, per night will be applied for dogs staying in hotel rooms or beach suites\", in at least one room of every grade but J Class; two dogs at most, three in a sea-view Dragon room or a beach suite. A dog policy to sign at check-in, £150 if a dog is on the bed linen or fouls the room. Welcome gifts, towels, bowls, treats and a blanket on request. South Sands beach itself takes dogs only from October to May",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "salcombe-cliff-road-parking",
    name: "Cliff Road, Salcombe",
    kind: "stay",
    // No OSM feature for the roadside bays, so the TQ8 8LD postcode centroid;
    // park4night's pin is 31 m south-west.
    lat: 50.22975, lon: -3.78218,
    address: "Cliff Road, Salcombe, TQ8 8LD",
    // Reviews and the restrictions from park4night listing 188686, rated 4.86
    // from 36, the latest September 2026; Devon Road from 363464, rated 4.2
    // from 5. Nothing here is from an operator.
    notes: "Roadside bays on Cliff Road above South Sands, marked but with no overnight restriction — two hours only between 8am and 6pm — which is more than the beach car park below allows. About four spaces on the road itself, and room for ten or so once the day's cars have gone; reviewers wait in the car park through the afternoon and move across when one frees up, then stay until morning. The beach car park is patrolled and signed against overnight parking, and a 2025 reviewer in a 6 m panel van was told by the attendant that it counts as a motorhome there. The latest reviewer, September 2026, found it quiet at night apart from a fitness class behind on Tuesdays and Saturdays and cold-water swimmers from about 7.30am. Clean public toilets a minute up the road, open around the clock; twenty minutes' walk into Salcombe and all of it back uphill. The road is narrow and steep in places — reviewers call it fine for a van and no place for a motorhome. Devon Road, at St Dunstan's Road up the hill (park4night 363464), is a second option: about twenty free unrestricted spaces in woodland, a slight camber the length of it, and full of visitors' cars in season",
    verified: null,
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "free on the road; the beach car park below is pay and display and bans overnight parking",
      hookup: false,
    },
  },
  {
    slug: "fortescue-inn-salcombe",
    name: "The Fortescue Inn",
    kind: "stay",
    food: { type: "pub" },
    // OSM node 1645044687, "The Fortescue". The TQ8 8BZ postcode centroid,
    // which the owner gives, is 17 m north.
    lat: 50.23887, lon: -3.76703,
    address: "The Fortescue Inn, Union Street, Salcombe, TQ8 8BZ",
    phone: "01548 844686",
    email: "info@fortescueinn.co.uk",
    url: "https://fortescueinn.co.uk/",
    notes: "Pub with rooms a street back from the water in Salcombe town. Six en-suite bedrooms — doubles, triples and quads — with tea and coffee, TV, hairdryer, desk and wardrobe, and a bath or a sofa bed in some. Breakfast included and served 8.30–11am, main menu noon–9pm, bar 8.30am to midnight. No parking of its own: Whitestrand is two minutes away, Shadycombe five to ten and Creek eight to ten, all pay and display or PayByPhone",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "\"Dogs welcome throughout the pub as well as in our beer garden\", with bowls and treats, but the owner's site says nothing about the bedrooms; a directory says dogs are taken in the rooms on request if you tell the pub first",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  // Section 39.
  {
    slug: "gara-rock",
    name: "Gara Rock",
    kind: "stay",
    // Centre of OSM way 156117656, "Gara Rock Hotel". The TQ8 8FA postcode
    // centroid, which the owner gives, is 32 m west.
    lat: 50.22091, lon: -3.75083,
    address: "Gara Rock, East Portlemouth, Near Salcombe, TQ8 8FA",
    phone: "01548 845946",
    url: "https://www.gararock.com/",
    notes: "Clifftop hotel on the path above Gara Rock, on the site of the old coastguard cottages: rooms and junior suites, some with private balconies; larger suites — the Secret Suite, Signal House and the Penthouse — with panoramic sea views; and self-catering residences over one to three floors, sleeping four to six in two or three bedrooms. Indoor and outdoor pools, the Wild Rock spa with sauna and jacuzzi, a cinema room, the Gara Kitchen and a restaurant. Signed from Kingsbridge by Stokenham and East Portlemouth. Its non-residents' car park is on the lane above, £2 suggested and day only: park4night listing 189018 says the sign forbids overnight parking, and that the hotel's generator is audible from it",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "\"Some of our accommodation is pet friendly, including our Coastal Cottages and selected Suites. If your accommodation has a garden, it will be pet friendly\" — £40 for a short break, £60 for a week. Dogs are allowed in the Gara Kitchen and the residents' lounge but not in the restaurant at mealtimes",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "east-prawle-camping",
    name: "East Prawle Camping, Stephens Field",
    kind: "stay",
    // Centre of OSM way 167672849, "Stephen's Field". The TQ7 2BY postcode
    // centroid is 112 m south-east.
    lat: 50.21413, lon: -3.70824,
    address: "Stephens Field, East Prawle, Kingsbridge, TQ7 2BY",
    email: "eastprawlecamping@gmail.com",
    url: "https://eastprawlecamping.co.uk/",
    notes: "A spacious field just off the village green at East Prawle, a mile and a half inland of Prawle Point, with a back-to-nature feel and a panoramic sea view. No frills: toilets and washbasins, cleaned once a day, and a drinking water tap. Tents, campervans and motorhomes; no caravans. Arrive 3–8pm, leave by 11am. 20% deposit, the balance two weeks before. A family site, firmly — no radios or stereos, and no noise after 10pm. The Pigs Nose Inn and the Piglet Stores and café are on the green. It opens only on selected dates within its season",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "\"Well-behaved dogs permitted if kept on a lead at all times, dog mess picked up promptly and not causing a nuisance\"; no charge",
      season: { from: "05-24", to: "09-01" },
      price_per_night: 20,
      price_note: "a pitch with two adults; extra adult 16+ £10, child 4–15 £3, under-4s free",
      hookup: null,
    },
  },
  {
    slug: "mollie-tuckers-field",
    name: "Mollie Tucker's Field",
    kind: "stay",
    // Centre of OSM way 994821439, "Mollie Tuckers Field". The TQ7 2BU postcode
    // centroid, which the Club gives, is 237 m north-west.
    lat: 50.21364, lon: -3.70954,
    address: "Higher House Farm, East Prawle, Kingsbridge, TQ7 2BU",
    phone: "07856 897053",
    email: "eastprawlecamping@btinternet.com",
    url: "https://www.eastprawlefarmholidays.co.uk/camping",
    notes: "A Caravan and Motorhome Club Certificated Location of three-quarters of an acre at East Prawle, five pitches with some slope, each with a 16 amp hookup and a water tap, for outfits up to 8 m. Members only, and it books online. Recycling, a dog walk from the site, fair TV reception, and the village and the coast path a short walk off. The same family lets Shepherd's Hollaway, a year-round field for tents, campervans and motorhomes from £10 a night for two, with flushing toilets, basins, showers, a drinking water tap, a field kitchen sink and an elsan point",
    verified: "2026-09-16",
    stay: {
      type: "cl",
      dogs: true,
      dogs_note: "\"dogs are welcome with well behaved owners\"; at Shepherd's Hollaway they must be tethered on site",
      season: { from: "03-01", to: "10-31" },
      price_per_night: 18,
      price_note: "from, the owner says; the Club shows the rate only to members",
      hookup: true,
    },
  },
  {
    slug: "the-retreat-east-prawle",
    name: "The Retreat",
    kind: "stay",
    // Centre of OSM way 1082713941, "The Retreat"; park4night's pin is 11 m
    // north. The TQ7 2BU postcode centroid is 129 m north-west.
    lat: 50.21490, lon: -3.71280,
    address: "East Prawle, Kingsbridge, TQ7 2BU",
    // No owner website found. Everything here is from park4night listing
    // 421079, rated 5 from 3, the latest November 2024, so the prices are what
    // reviewers actually paid rather than a published tariff.
    notes: "A flat five-pitch field on the right just before East Prawle village, with electric hookup, fresh water and grey waste disposal. No view from the field itself, reviewers say, but a minute's walk to one. Ring ahead and pay Richard, the owner, in cash — one reviewer was met in the village. Motorhomes and caravans as well as vans. The Pigs Nose Inn and the village shop and café are a short walk",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "No owner's site, and the reviews don't say",
      season: "all-year",
      price_per_night: 18,
      price_note: "park4night's figure; reviewers paid £14 in cash without hookup in January 2024 and £16 with it in November 2024",
      hookup: true,
    },
  },
  {
    slug: "maelcombe-house-campsite",
    name: "Maelcombe House Campsite",
    kind: "stay",
    // Centre of OSM way 167672850, "Maelcombe House Campsite". The TQ7 2DE
    // postcode centroid is 238 m south-west.
    lat: 50.21404, lon: -3.69875,
    address: "Maelcombe House, East Prawle, Kingsbridge, TQ7 2DE",
    // No owner website found and no listing that looks recent, so nothing here
    // comes from the owner. Call at the house or ring before relying on it.
    notes: "A field sloping to the sea on the stretch between Prawle Point and Lannacombe, with the coast path running along the top of it and a steep private track down. Wild camping in all but name: directories describe a water supply and little else, and say to bring a sturdy tent and expedition-grade sleeping gear, because it is exposed. Nothing larger than a campervan is likely to get in",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "Directories say dogs are allowed; there's no owner's site to confirm it",
      season: null,
      price_per_night: null,
      price_note: "not published",
      hookup: false,
    },
  },
  {
    slug: "mattiscombe-farm-camping",
    name: "Mattiscombe Farm Camping",
    kind: "stay",
    // Centre of OSM way 991631548, "Mattiscombe Farm". The TQ7 2SR postcode
    // centroid, which the owner gives, is 35 m north-east, and park4night's pin
    // 113 m south-east.
    lat: 50.26750, lon: -3.67354,
    address: "Mattiscombe Farm, Stokenham, Kingsbridge, TQ7 2SR",
    phone: "07514 512757",
    email: "info@mattiscombefarmcamping.co.uk",
    url: "https://www.mattiscombefarmcamping.co.uk/",
    notes: "Three acres of hilltop field on a working farm above Start Bay, with 28 large open pitches spread over two fields, Waypark and Summerpark. Compost toilets, gas-heated showers, cold water taps, a washing-up station, a chemical waste point, bins and recycling; the taps are not treated water. Under a mile from Stokenham, with beaches, a farm shop, pubs and woodland walks a short walk off. Only gas or electric barbecues at present — no fire pits, charcoal or wood, the owner says, given the weather. park4night reviewers rate it 4.2 from 5, the latest June 2026, and praise the showers and the views; one left mid-stay over a group shouting until two in the morning, and some tent pitches look steep",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "\"Well behaved dogs are welcome, with an on lead or complete supervision policy\"; no charge published",
      season: { from: "05-22", to: "09-13" },
      price_per_night: 15,
      price_note: "single occupancy, the owner says, held at that for the whole season; park4night gives £20 a night",
      hookup: false,
    },
  },
  {
    slug: "beryls-campsite",
    name: "Beryl's Campsite",
    kind: "stay",
    // Centre of OSM way 167880575, "Beryl's Campsite"; park4night's pin is 26 m
    // south-east. The TQ7 2HW postcode centroid is 267 m south-west.
    lat: 50.25718, lon: -3.66675,
    address: "Beeson, Kingsbridge, TQ7 2HW",
    phone: "07967 116682",
    email: "berylscampsite@gmail.com",
    url: "https://www.berylscampsite.co.uk/",
    notes: "Thirty widely spaced pitches at the end of a quiet road in Beeson, on a wooded hillside with a pond and a view over Start Bay. Tents and campervans only — no motorhomes or caravans, the owner says. Plenty of hot water for showers and washing up, fridges and freezers, and fire pits with wood for a small charge. A bird hide over the nature reserve's lake. Five to ten minutes' walk down to Beesands and the coast path, and Slapton Ley within a walk. Pizza nights and other evenings now and then. Two nights minimum when busy and three over a bank holiday; three families or more booking together costs extra",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "50p a night, and kept on a lead",
      season: null,
      price_per_night: 27,
      price_note: "a couple's pitch without hookup, £32 with; a family pitch £30 or £35, and both include two adults and two children under 16. A coast path walker without a vehicle £10; off-season midweek £25 or £30. Extra adult 16+ £10, child 4–15 £5, under-4s £1. Hookups are limited",
      hookup: true,
    },
  },
  {
    slug: "cricket-inn-beesands",
    name: "The Cricket Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 642741031, "The Cricket Inn". The TQ7 2EN postcode
    // centroid, which the owner gives, is 66 m south.
    lat: 50.25130, lon: -3.65738,
    address: "The Cricket Inn, Beesands, Kingsbridge, TQ7 2EN",
    phone: "01548 580215",
    email: "enquiries@thecricketinn.com",
    url: "https://www.thecricketinn.com/",
    notes: "The pub on the sea wall at Beesands, with the path running past the door, and seven refurbished en-suite bedrooms above — five of them looking out over Start Bay to the Start Point lighthouse, AA four gold stars, walk-in showers, smart TVs and Nespresso machines. Breakfast included, with a dinner, bed and breakfast rate as well. Breakfast 8.30–10am, lunch noon–2.30pm and to 3pm on Sunday, dinner 6–8.30pm; open 11am–10pm and to 11pm on Friday and Saturday. Free parking outside, first come first served and tight in season",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: false,
      dogs_note: "\"Whilst we welcome 4-legged friends in our bar and restaurant, we don't allow them in our bedrooms\" — water bowls and biscuits in the front bar and part of the restaurant, but nowhere to sleep with a dog",
      season: null,
      price_per_night: 155,
      price_note: "Headingly or Old Trafford, each sleeping three; Trentbridge or the Lords family room £180, and the Trueman or Botham four-poster suites or the Oval £210. All include breakfast",
    },
  },
  {
    slug: "start-bay-club-campsite",
    name: "Start Bay Club Campsite",
    kind: "stay",
    // Centre of OSM way 995607964, "Start Bay Caravan and Motorhome Club Site".
    // The Club's own coordinates are 47 m north-west and the TQ7 2SE postcode
    // centroid 189 m north-east.
    lat: 50.27251, lon: -3.66529,
    address: "Start Bay Club Campsite, Stokenham, Kingsbridge, TQ7 2SE",
    phone: "01548 580430",
    url: "https://www.caravanclub.co.uk/club-sites/england/devon-and-cornwall/devon/start-bay-club-campsite/",
    notes: "Caravan and Motorhome Club site on the A379 halfway between Stokenham and Torcross, a mile from the path at Torcross. Ninety-three touring pitches, 59 of them hardstanding, for outfits up to 9 m. Motorhome service point, wifi, laundry, baby changing and a family washroom, a disabled shower room and wheelchair access, gas for sale, and charcoal or gas barbecues allowed. Non-members are welcome. It runs 16 April–4 October in 2027",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "No charge, with a dog pit stop and a dog walk from the site",
      season: { from: "04-02", to: "10-05" },
      price_per_night: null,
      price_note: "shown only in the booking system and changed fortnightly; the Club advertises £4 a night off on its South West Getaways, children 5–17 at £1 and under-5s free",
      hookup: true,
    },
  },
  {
    slug: "torcross-tank-car-park",
    name: "Torcross Tank car park",
    kind: "stay",
    // Centre of OSM way 203477602, an unnamed pay surface car park immediately
    // north of the Sherman tank (node 716014166, 67 m south). The TQ7 2TQ
    // postcode centroid, which the council gives, is 221 m south.
    lat: 50.26925, lon: -3.65214,
    address: "Torcross Tank, Torcross, Kingsbridge, TQ7 2TQ",
    url: "https://www.southhams.gov.uk/parking/car-parks/torcross-tank",
    // Tariff and the overnight rule from the council's own pages. The height
    // barrier from park4night listing 33364, rated 2.76 from 17, which covers
    // the bar car parks a couple of kilometres north towards Slapton.
    notes: "South Hams District Council's car park behind the beach where the path arrives at Torcross, beside the Sherman tank raised from Slapton Sands — and not a place to sleep. Long stay, 14 hours at most, charged 8am to 10pm; PayByPhone code 810462. The council allows a self-contained motorhome with an on-board toilet to stay 6pm to 9am at £15 a night, but only at Longmarsh in Totnes, Leonards Road in Ivybridge, Poundwell Meadow in Modbury, the Dartmouth park and ride and the Cattlemarket in Kingsbridge — two consecutive nights at most, no return within 48 hours, no caravans or trailers, 6 m between vehicles, and nothing put out beside the van. Of those five the Cattlemarket is the nearest. \"Overnight camping or sleeping is not permitted in any of our other Off-Street Car Parks at any time.\" On the bar car parks a couple of kilometres north, park4night reviewers report a 1.9 m height barrier fitted in July 2020 to keep vans out, and before that the council moving people on at 5.30am and ticketing those who hadn't paid",
    verified: "2026-09-16",
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "no night rate: all day £10.50 in either season, an hour £2.10 in high season, 25 March–31 October, and £1.60 low",
      hookup: false,
    },
  },
  // Section 40.
  {
    slug: "slapton-sands-club-site",
    name: "Slapton Sands Camping and Caravanning Club Site",
    kind: "stay",
    // The Club's own GPS point. The centre of OSM way 203336560, "Slapton
    // Sands", is 177 m south-west, and the TQ7 2QW postcode centroid, which
    // the Club gives, is 460 m south.
    lat: 50.29320, lon: -3.65090,
    address: "Middle Grounds, Slapton, Kingsbridge, TQ7 2QW",
    phone: "01548 580538",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/devon/kingsbridge/slapton-sands-camping-and-caravanning-club-site/",
    // Managers Angela and Paul Cartwright. The road closure is the A379
    // Slapton Line, shut between Torcross and Strete Gate since Storm Ingrid
    // in January 2026 and still shut in September 2026; Devon County Council
    // bid for £19.62m towards repairs in August 2026.
    notes: "Tree-lined Club site in the fields above Slapton village, a walk from Slapton Sands and the Ley, with bay views from some pitches. Grass pitches with and without hookup, hardstandings with hookup, and jumbo grass pitches for units over 5 m by 9 m; all unit types taken, but a maximum of eight caravans at a time because of the narrow approach, and those for members only. Toilets, showers, accessible facilities, parent and baby room, dishwashing, washing machines, ice pack freezing, battery charging, motorhome service point, shop, play area, wifi and a designated dog walk. Open 27 March to 26 October 2026, and 22 March to 25 October 2027; arrive from 1pm, leave by noon. Most grass pitches slope, so bring levelling ramps, and 25 m hookup cables are needed for most of them. Do not follow a sat nav here: the A379 Slapton Line is closed and the Club says not to navigate via Torcross. The road closure has also taken away the bus service from the site; the nearest stop is 2.5 miles",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Pets welcome, with a designated dog walk on site; Slapton Sands beach takes dogs all year",
      season: { from: "03-27", to: "10-26" },
      price_per_night: null,
      price_note: "from £11.30 a night, the members' adult price; extras on top",
      hookup: true,
    },
  },
  {
    slug: "sea-view-campsite-slapton",
    name: "Sea View Campsite",
    kind: "stay",
    // Centre of OSM way 995580233, "Sea View Camping", at Newlands Farm. The
    // TQ7 2RB postcode centroid, which the owner gives, is 574 m north-east.
    lat: 50.30472, lon: -3.66582,
    address: "Newlands Farm, Slapton, Kingsbridge, TQ7 2RB",
    phone: "01548 580366",
    email: "campingdevon@gmail.com",
    url: "https://devon.camp/home/",
    // The owner's own 2026 tariff and FAQs.
    notes: "Family site of eleven acres of meadow on Newlands Farm above Slapton, with large grass pitches for tents, caravans and campervans and sea views over Start Bay. Grass hookup pitches and non-electric pitches; no hardstanding and no fully serviced pitches. Two drinking water taps, grey water and chemical disposal, showers, toilets, washing up, a communal campfire and a children's nature trail. The owner suggests 6 m as the limit for a van: the local lanes don't suit longer or over-cab vehicles. Showers are metered, 20p for five minutes of hot water. Payment by bank transfer, cash or debit card; no charging an electric car off a hookup, which carries a £200 fine. Slapton village is a mile and a half down the hill, and the beach beyond it on a footpath; the coast path a mile and a half. Skylarks, a two-bedroom chalet sleeping four, as well. Quiet from 11pm; no groups that want to make noise later",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "\"Dogs are welcome and have their own large exercise fields. They must be kept on a lead whilst on the rest of the campsite.\" £1 a night",
      // The owner's 2026 dates; they are set afresh each year.
      season: { from: "05-15", to: "09-13" },
      price_per_night: 26,
      price_note: "2026 tariff, two adults at £13 each; child 4–15 £3, under 4 free, dog £1, 10 A hookup £7. No charge for a car, boat, gazebo, awning or windbreak that fits on the pitch",
      hookup: true,
    },
  },
  {
    slug: "tower-inn-slapton",
    name: "The Tower Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 266643778, "The Tower Inn". The TQ7 2PN postcode
    // centroid is 32 m north-west.
    lat: 50.29374, lon: -3.65600,
    address: "Church Street, Slapton, Kingsbridge, TQ7 2PN",
    phone: "01548 580216",
    email: "towerinnslapton@outlook.com",
    // thetowerinn.com, the address OSM carries, no longer resolves; the live
    // site is thetowerinnslapton.com. Hours, ales and the dog-friendly bar are
    // CAMRA's; the rooms the owner's own page, which publishes no tariff
    // because the rooms book through Airbnb.
    url: "https://www.thetowerinnslapton.com/accomodation",
    notes: "Village inn of 1347 beside the ruined tower of Slapton's ecclesiastical college, originally six cottages for the men who built it; flagstones, low beams, real fires and a walled garden. Three cosy rooms with a simple kitchenette, in a separate wing with its own entrance; breakfast packages for walkers on the coast path, booked through Airbnb. Reopened in March 2022 after a kitchen fire the year before. Bar Monday, Wednesday–Saturday 6–10pm and Sunday noon–6.30pm, closed Tuesday; food 6–8.30pm and Sunday noon–4pm. Three regular ales — South Hams Wild Blonde, St Austell Proper Job and Butcombe Gold — and a changing beer; wifi, function room, restaurant. Parking is limited and the lane in is narrow. Camping 650 m away",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: null,
      dogs_note: "CAMRA calls the pub dog friendly; the owner's site doesn't mention dogs in the rooms, and a directory says only one of the three takes them, so ring first",
      season: null,
      price_per_night: null,
      price_note: "shown only in the Airbnb listing",
    },
  },
  {
    slug: "slapton-ley-field-centre",
    name: "Slapton Ley Field Centre",
    kind: "stay",
    // Centre of OSM way 565887047, "Slapton Ley Field Centre". The TQ7 2QP
    // postcode centroid, which the Council gives, is 15 m away.
    lat: 50.29270, lon: -3.65257,
    address: "Slapton Ley Field Centre, Sands Road, Slapton, Kingsbridge, TQ7 2QP",
    url: "https://www.field-studies-council.org/locations/slaptonley/",
    // The Field Studies Council's own pages sit behind a bot check, so the
    // rooms and the bed count come from search summaries of them and from a
    // group-accommodation listing; nothing about price or dogs was found.
    notes: "Field Studies Council residential centre in Slapton village, on the edge of the Slapton Ley National Nature Reserve. Bed and breakfast across four buildings, 42 bedrooms and 178 beds sleeping up to 162: single and twin rooms through to larger dormitories, with ten single or twin rooms, most of them en-suite; Uplands, a separate property sleeping 27 in eight bedrooms, is hired on top. Chiefly a school and university centre, but it runs residential courses for individuals and families. Ring or email before counting on a bed: this is not a place that sells rooms to passing walkers as a matter of course",
    verified: null,
    stay: {
      type: "hostel",
      dogs: null,
      dogs_note: "No dog policy found for Slapton Ley. Another Field Studies Council centre charges £20 a dog a stay, which says nothing about this one",
      season: null,
      price_per_night: null,
      price_note: "not published; ring or email",
    },
  },
  {
    slug: "strete-gate-car-park",
    name: "Strete Gate car park",
    kind: "stay",
    // Centre of OSM way 203336593, the pay car park behind the north end of
    // Slapton Sands; park4night's pin is 142 m south-east. The TQ6 0RR postcode
    // centroid, which the council gives, is 450 m north.
    lat: 50.29949, lon: -3.63695,
    address: "Strete Gate, Slapton, TQ6 0RR",
    url: "https://www.southhams.gov.uk/parking/car-parks/strete-gate-slapton",
    // Tariff and hours from the council's own page; the closure and the damage
    // to the Memorial car park from South Hams' news of 3 February 2026 and
    // Slapton Parish Council's update of 25 January 2026. Reviews and the
    // marked bays from park4night listing 75458, rated 4.22 from 23, and 234381.
    notes: "The council car park behind the north end of Slapton Sands, on the coast path, and not a place to sleep: it is closed from 10pm until 6am. Charges 8am–10pm, 14 hours maximum, PayByPhone code 810461; low season 1 November to 24 March, high season 25 March to 31 October. An hour £1.60 low season and £2.10 high, four hours £5.20 or £6.30, all day £8.90 or £10.50. Toilets and a beach café alongside. park4night reviewers report marked bays with £150 fines for wheels outside them, bays too small for a panel van or motorhome, and enforcement officers photographing vehicles at about 7am. The Slapton Memorial car park in the middle of the beach keeps the same hours and tariff but has a 1.9 m height barrier, and the two Torcross car parks charge to 10pm as well; a small free parking area on Sands Road beside the Club site is signed against overnight parking. Overnight camping or sleeping is banned in every South Hams car park except the five that take self-contained motorhomes, the nearest being the Dartmouth Park and Ride. Note the A379 Slapton Line itself is closed between Torcross and Strete Gate after Storm Ingrid in January 2026 — the Memorial car park was damaged too, and part of its bank removed to make a temporary road entrance",
    verified: "2026-09-16",
    stay: {
      type: "park4night",
      dogs: null,
      season: "all-year",
      price_per_night: null,
      price_note: "no night rate: the car park closes 10pm–6am. All day is £8.90 low season, £10.50 high",
      hookup: false,
    },
  },
  {
    slug: "manor-farm-strete",
    name: "Manor Farm Camping",
    kind: "stay",
    // Centre of OSM way 203336592, "Manor Farm Camping (Naturist and
    // Textile)". The TQ6 0RU postcode centroid is 351 m south and covers a
    // wide stretch of Totnes Road. park4night's pin is 260 m south-west.
    lat: 50.31510, lon: -3.63081,
    address: "Totnes Road, Strete, Dartmouth, TQ6 0RU",
    email: "manorfarmstrete@hotmail.co.uk",
    // No owner website found: the contact is the email Strete's own village
    // site publishes for Ms J Gill and Ms K Gill. Pitches, tariff and services
    // from park4night listing 209019, rated 4.64 from 14, the latest June 2026,
    // and from directory listings, none of them dated.
    notes: "Six acres of level or gently sloping fields on Totnes Road at the top of Strete, with views over Start Bay and the mouth of the Dart; about a third of it is set aside for naturists and the rest is textile. Tents, caravans, motorhomes and small campervans; grass pitches with electric hookup, toilets, showers, drinking water and waste disposal. park4night counts 70 pitches and gives the hosts as Dave and Ian. The owners don't publish a calendar, so ring or email to check availability. The village, the Kings Arms and the coast path are a short walk down the hill; CAMRA puts the site 600 m from the pub",
    verified: null,
    stay: {
      type: "campsite",
      dogs: null,
      dogs_note: "park4night says pets are taken free and there is a dog exercise area, and a directory says dogs are welcome; there's no owner's site to confirm it",
      season: null,
      price_per_night: null,
      price_note: "park4night gives £14–15 a night, electricity £6 and showers 50p to £1, undated",
      hookup: true,
    },
  },
  {
    slug: "blackpool-sands-car-park",
    name: "Blackpool Sands car park",
    kind: "stay",
    // Centre of OSM way 586700277, "Blackpool Beach parking"; two more car
    // parks and an overflow adjoin it. The owner gives TQ6 0RG as the nearest
    // postcode for a sat nav.
    lat: 50.31992, lon: -3.61053,
    address: "Blackpool Sands, Dartmouth, TQ6 0RG",
    phone: "01803 771800",
    email: "beach@blackpoolsands.co.uk",
    url: "https://www.blackpoolsands.co.uk/faqs/",
    // The owner's own FAQs and facilities pages.
    notes: "The private car parks behind Blackpool Sands, where the coast path drops to the beach, and not a place to sleep: \"overnight or late night parking and/or camping is not permitted\". No height restrictions. ANPR: nothing to do on arrival, then enter your registration at one of two pay stations before leaving, or pay within 48 hours through parkwithease.co.uk; charges vary through the season. More to the point with a dog — this is a Blue Flag beach with a seasonal dog ban, and dogs are shut out of the beach, the café and the car parks from 1 May to 30 September, service dogs excepted. Toilets, showers, a café, a beach shop, a sauna and RNLI lifeguards in summer. The phone number is a message service. Open fires, drones, metal detectors and disposable BBQs are all banned; other BBQs after 5pm on the shingle in high summer",
    verified: "2026-09-16",
    stay: {
      type: "park4night",
      dogs: false,
      dogs_note: "\"there is a seasonal dog ban in place, this means dogs will not be permitted on the beach or in the café or car parks from 1st May – 30th September each year\"",
      season: "all-year",
      price_per_night: null,
      price_note: "no night rate; the day charge varies through the season and is worked out from your registration when you leave",
      hookup: false,
    },
  },
  {
    slug: "leonards-cove",
    name: "Leonards Cove Holiday Park",
    kind: "stay",
    // Centre of OSM way 231194847, "Leonards Cove Holiday Park". The TQ6 0NR
    // postcode centroid, which the owner gives, is 135 m north-west.
    lat: 50.32345, lon: -3.59714,
    address: "New Road, Stoke Fleming, Dartmouth, TQ6 0NR",
    phone: "01803 770206",
    email: "info@leonardscove.co.uk",
    url: "https://www.leonardscove.co.uk/touring/",
    // The owner's own touring page. Note the pets line applies to the touring
    // and camping fields; the park's mobile homes and cottages are let as
    // dog-friendly, which is what the front page advertises.
    notes: "Holiday park on the hillside at Stoke Fleming above Blackpool Sands, with panoramic sea views: mobile homes, cottages, lodges, bungalows, a farmhouse and a yurt to hire, and a small touring field alongside. Nine grass touring pitches, six people at most on each, 16 A hookup, no hardstanding and tourers up to 7.5 m; motorhomes and campervans welcome, twin axles not. Six separate tent pitches with sea views, on a field vehicles may not go on. Three ladies' and three gents' showers and toilets, wifi. The field has a slight slope. Check in noon–8pm, out by 11am. Winter stays \"can be accepted but not advisable\", the owner says, there being no hardstanding. Walking distance to Blackpool Sands, on the bus route, and Dartmouth a few minutes by road",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: false,
      dogs_note: "\"We are unable to accept pets\" on the touring and camping pitches, the owner's touring page says, though the park advertises dog-friendly hire accommodation",
      // The owner publishes no touring season, only that winter is accepted
      // and not advised.
      season: null,
      price_per_night: 30,
      price_note: "from £30 a night for two, touring or tent",
      hookup: true,
    },
  },
  {
    slug: "channel-view-guest-house",
    name: "Channel View Guest House",
    kind: "stay",
    // The TQ6 0PH postcode centroid, which the owner gives; OSM has no feature
    // for the house.
    lat: 50.32166, lon: -3.59798,
    address: "Stoke Fleming, Dartmouth, TQ6 0PH",
    phone: "07815 143743",
    email: "relax@channelviewguesthouse.com",
    url: "https://www.channelviewguesthouse.com/",
    // The owner's own site. Prices are shown only in their booking engine.
    notes: "Guest house at Stoke Fleming with sea views, a few minutes off the coast path and about a mile from Blackpool Sands. Free off-road parking, one car a room, with more spaces at £10 a night when they're free; a 7 kW type 2 EV charger at 45p a unit. Breakfast 8–9am: juices, cereals, toast, tea and coffee and a full English, with vegetarian, vegan and gluten-free by arrangement. Free wifi, daily housekeeping, laundry at £15 a load. A fully enclosed five-acre field for exercising dogs",
    verified: "2026-09-16",
    stay: {
      type: "bnb",
      dogs: true,
      dogs_note: "\"We WELCOME (as opposed to accept) a maximum of TWO dogs per room (in all rooms except our Standard Double Room).\" No charge published",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "stoke-lodge-hotel",
    name: "Stoke Lodge Hotel",
    kind: "stay",
    // Centre of OSM way 231073743, "Stoke Lodge Hotel". The TQ6 0RA postcode
    // centroid, which the owner gives, is 6 m away.
    lat: 50.32602, lon: -3.59966,
    address: "Cinders Lane, Stoke Fleming, Dartmouth, TQ6 0RA",
    phone: "01803 770523",
    // The owner's site gives hello@stokelodge.co.uk on the front page and
    // hello@stokelodgehotel.co.uk on the rooms page.
    email: "hello@stokelodge.co.uk",
    url: "https://stokelodgehotel.co.uk/stay/",
    // The owner's own rooms page. It publishes no tariff; rooms book through
    // Cloudbeds.
    notes: "Country house hotel in the middle of Stoke Fleming, on the coast path and a walk from Blackpool Sands. 22 rooms, from Comfy Kings through sea-facing and sea-view rooms to a family suite; rooms at the front look over the village and the sea, those at the back are quieter beside the woodland, and the ground-floor King Rooms have recently been refurbished. Some can be set up as twins and several take an extra guest on a rollaway bed. Indoor and outdoor pools and a sauna, with day passes and memberships sold to non-residents; the Wildflower garden restaurant is open to outside guests too",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "\"Selected rooms are dog-friendly\" — the ground-floor King Rooms, at the back of the hotel. No charge published; say so when booking",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "dartmouth-club-site",
    name: "Dartmouth Camping and Caravanning Club Site",
    kind: "stay",
    // The Club's own GPS point. The centre of OSM way 230952449, "The Camping
    // And Caravanning Club Dartmouth Site", is 216 m north-west. Formerly Deer
    // Park; the Deer Park Homes Village next door is residential park homes for
    // the over-50s, not holiday lets.
    lat: 50.33020, lon: -3.59620,
    address: "Deer Park, Stoke Fleming, Dartmouth, TQ6 0RF",
    phone: "01803 770253",
    url: "https://www.campingandcaravanningclub.co.uk/campsites/uk/devon/dartmouth/dartmouth-camping-and-caravanning-club-site/",
    // Managers Kate and Rob Lawler.
    notes: "Club site on the edge of Stoke Fleming, two miles from Dartmouth and the closest campsite to it, with sea views from some pitches and a large camping field. Grass pitches with hookup, hardstandings with hookup, jumbo grass pitches for units over 5 m by 9 m, and super service hardstandings with hookup, fresh water and waste drainage. Grass-only pitches for tents in July and August only; ring the site in other months. Toilets, showers, accessible facilities, family shower room, dishwashing, washing machines, ice pack freezing, gas cylinders, motorhome service point, shop, play area and wifi. Open 27 March to 26 October 2026, and 22 March to 25 October 2027. Some pitches slope, so bring levelling ramps, and rock pegs are needed on the hardstandings; a directional aerial for TV. A bus stop at the site entrance, and Blackpool Sands within walking distance",
    verified: "2026-09-16",
    stay: {
      type: "campsite",
      dogs: true,
      dogs_note: "Pets welcome, but no dog walk on site: the Club points walkers to Stoke Fleming Park, or Little Dartmouth for the coast path",
      season: { from: "03-27", to: "10-26" },
      price_per_night: null,
      price_note: "from £12.20 a night, the members' adult price; extras on top",
      hookup: true,
    },
  },
  {
    slug: "dartmouth-park-and-ride",
    name: "Dartmouth Park and Ride",
    kind: "stay",
    // Centre of OSM way 222211691, "Dartmouth Park and Ride". The TQ6 9LW
    // postcode centroid, which the council gives, is 234 m north-east.
    lat: 50.34676, lon: -3.60325,
    address: "Dartmouth Park and Ride, Townstal Road, Dartmouth, TQ6 9LW",
    phone: "01803 861234",
    url: "https://www.southhams.gov.uk/parking/motorhomes",
    // Tariff from the council's car park page, rules from its motorhomes page.
    // One of only five South Hams car parks where a motorhome may stay; the
    // others are Longmarsh in Totnes, Leonards Road in Ivybridge, Poundwell
    // Meadow in Modbury and Cattlemarket in Kingsbridge.
    notes: "The one council car park near the path where a motorhome may legally stay the night. £15 a night, 6pm to 9am, self-contained with an onboard toilet only, two consecutive nights at most and no return within 48 hours; no caravans or trailers, and no vehicle that isn't self-contained. PayByPhone code 810484 for motorhomes. Nothing outside the vehicle: no chairs, tables or awnings, no waste discharge, no open fires, BBQs or open cooking, no generators, and 6 m between vehicles for fire safety. No height barrier. Free public toilets on the site and two 22 kW EV charging bays. Day parking too, at 8am–6pm car rates, one ticket for each bay the vehicle occupies. The Park and Ride bus runs in the high season only — 3 to 19 April, 15 to 17 May and 23 May to 13 September 2026, plus 23 to 25 October — so out of season it is a walk into the town, about two miles round by road. Overnight camping or sleeping is banned in every other South Hams car park at all times",
    verified: "2026-09-16",
    stay: {
      type: "aire",
      dogs: null,
      season: "all-year",
      price_per_night: 15,
      price_note: "£15 a night for a motorhome, 6pm to 9am; day parking charged separately",
      hookup: false,
    },
  },
  {
    slug: "bayards-cove-inn",
    name: "Bayards Cove Inn",
    kind: "stay",
    food: { type: "pub" },
    // Centre of OSM way 515034595, "Bayards Cove Inn". The TQ6 9AN postcode
    // centroid, which the owner gives, is 43 m north-east.
    lat: 50.34887, lon: -3.57811,
    address: "27 Lower Street, Dartmouth, TQ6 9AN",
    phone: "01803 839278",
    email: "info@bayardscoveinn.co.uk",
    url: "https://bayardscoveinn.co.uk/about/dog-friendly/",
    // The owner's own dog-friendly page for the policy; the £18 charge is a
    // booking site's and isn't published by the inn.
    notes: "Fifteenth-century inn on Lower Street by Bayards Cove, where the coast path comes into Dartmouth; hotel, café, bar and restaurant in one. Seven rooms, named for admirals — Nelson, Drake, Beatty, Raleigh, Jervis, Fisher and Mountbatten — two of them family suites, the rest doubles and triples, furnished in a contemporary take on South Devon's naval history. Daytime and evening menus, Sunday lunch and a children's menu; booking advised. Dogs get a wooden bed with cushions, bowls, treats and poo bags in the room, and an extra sausage at breakfast if you ask",
    verified: "2026-09-16",
    stay: {
      type: "inn",
      dogs: true,
      dogs_note: "\"We love dogs, and if yours is coming to stay we'll provide dog beds, bowls and locally made treats.\" The owner publishes no charge; a booking site says £18 a dog a night, up to two a room",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "royal-castle-hotel",
    name: "Royal Castle Hotel",
    kind: "stay",
    // Centre of OSM way 515330477, "Royal Castle Hotel". The TQ6 9PS postcode
    // centroid, which the owner gives, is 32 m south-west.
    lat: 50.35153, lon: -3.57870,
    address: "11 The Quay, Dartmouth, TQ6 9PS",
    phone: "01803 833033",
    email: "reservations@staustellbrewery.co.uk",
    url: "https://www.royalcastle.co.uk/our-rooms",
    // The owner's own rooms page. St Austell Brewery's central reservations
    // line is 0345 241 1133.
    notes: "St Austell Brewery hotel on the quay in the middle of Dartmouth, looking over the boat float and the Dart. 24 individually decorated en-suite rooms on the second, third and fourth floors: cosy doubles, standards, signature rooms, premium view rooms and family rooms with a king bed and a sofa bed. Breakfast 8–10am, included. No parking of its own: the hotel points guests at Mayors Avenue and the Dartmouth Castle car parks, £3 overnight, or the Park and Ride",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "\"£20 per dog, per stay\", in selected rooms that must be booked in advance; on a lead in public areas, and not left alone in the room. Pup presents with a tennis ball, treats and poo bags",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "browns-hotel-dartmouth",
    name: "Browns Hotel",
    kind: "stay",
    // Centre of OSM way 516822960, "Browns". The TQ6 9RT postcode centroid,
    // which the owner gives, is 5 m away.
    lat: 50.35122, lon: -3.58079,
    address: "27–29 Victoria Road, Dartmouth, TQ6 9RT",
    phone: "01803 832572",
    url: "https://www.brownshoteldartmouth.co.uk/can-we-bring-our-dog/",
    // The owner's site blocks fetching, so the rooms and the dog policy come
    // from search summaries of its own pages, which are undated.
    notes: "Small town house hotel, bar and bistro on Victoria Road, a few minutes up from the quay. Nine en-suite rooms in comfort, classic and premium grades, plus the Blue Room, which takes a cot or fold-out beds for children. The Bistro at Browns serves residents and the public. Midweek discounts through the year and cheaper weekends in the low season",
    verified: null,
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "All rooms take dogs at £20 a night, the owner's site says: one dog a room, no weight limit, larger dogs steered to the roomier classic rooms, dogs welcome in the bar and bistro and never left alone in a room",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
  {
    slug: "dart-marina-hotel",
    name: "Dart Marina Hotel",
    kind: "stay",
    // The TQ6 9PH postcode centroid, which the owner gives; OSM's way
    // 180048310 is the marina itself and 180048309 the hotel's private car
    // park, 90 m south.
    lat: 50.35757, lon: -3.57807,
    address: "Sandquay Road, Dartmouth, TQ6 9PH",
    phone: "01803 832580",
    email: "reservations@dartmarina.com",
    url: "https://dartmarina.com/dog-friendly/",
    // The owner's own dog-friendly page. Recorded because the dogs go in
    // ordinary bedrooms, not a self-catering unit.
    notes: "Hotel and spa on the water at Sandquay, a kilometre upriver of the quay towards the higher ferry, with its own private car park — rare in Dartmouth. The Garden Rooms and Garden Suite are on the ground floor with private outdoor seating. Zephyr bistro for meals, or the full restaurant menu in the lounge and on the terrace; treatments in the spa",
    verified: "2026-09-16",
    stay: {
      type: "hotel",
      dogs: true,
      dogs_note: "\"Dogs are welcome in the Garden Rooms and Garden Suite. Both are ground-floor rooms with private outdoor seating areas.\" £20 a night on the room rate; a bed, bowls and treats provided. Welcome in the lounge and on the terrace, not in Zephyr bistro",
      season: null,
      price_per_night: null,
      price_note: "shown only in the online booking",
    },
  },
];
