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
];
