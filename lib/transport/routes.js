// A service and the locations it calls at.
//
// `serves` is a set of location slugs, not an ordered list: it answers "can I
// get from here to there on one service", which is the question a section
// actually asks. Direction and journey time would need ordering and a great
// deal more maintenance.
//
// `season` sits on the route rather than the provider — an operator can run
// year-round while one particular service is summer-only, which is exactly the
// case here.
//
// A caution learned the hard way: bus service pages move. The bustimes.org URL
// for this service, captured from a search result, already redirects to the
// operator's page because the service slug changed. Treat `url` as a fact with
// a date on it, like anything else carrying `verified`.
export default [
  {
    slug: "exmoor-coaster-300",
    number: "300",
    name: "Exmoor Coaster (Minehead – Lynmouth)",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["minehead", "porlock", "county-gate", "countisbury", "lynmouth"],
    // 23 May – 31 Aug 2026 on Stagecoach's timetable. Unlike a campsite's
    // season this is set afresh each year, so it needs rechecking annually
    // rather than assumed to recur.
    season: { from: "05-23", to: "08-31" },
    frequency: "3 a day each way, daily, in season",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/May%2026/300%20230526.pdf",
    notes: "The eastern half of the 300, over Porlock Hill, calling at County Gate and Countisbury — the two escape points on section 2. Change at Lynmouth for the western half to Combe Martin",
    verified: "2026-09-13",
  },
  {
    slug: "exmoor-coaster-300-west",
    number: "300",
    name: "Exmoor Coaster (Lynmouth – Combe Martin – Ilfracombe)",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["lynmouth", "woody-bay-station", "combe-martin", "watermouth", "hele-bay", "ilfracombe"],
    // Same season and same caveat as the eastern half.
    season: { from: "05-23", to: "08-31" },
    frequency: "3 a day each way, daily, in season",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/May%2026/300%20230526.pdf",
    notes: "The only direct bus between the ends of section 3: 40–50 minutes. Inland by Barbrook and Blackmoor Gate, not through Lynton. Timed to meet the Minehead half at Lynmouth, but it's a change of bus. Out of season, Mon–Sat: the 301 to Barnstaple and the 310 on to Lynmouth, about 2 h 35. No Sunday buses at all outside late May to mid September",
    verified: "2026-09-13",
  },
  {
    slug: "service-10",
    number: "10",
    name: "Minehead – Porlock – Porlock Weir",
    type: "bus",
    provider: "atwest",
    serves: ["minehead", "porlock", "porlock-weir"],
    // Unknown whether it runs year-round; null rather than a guess.
    season: null,
    frequency: null,
    url: null,
    notes: "The local link that reaches Porlock Weir itself, which the coast bus does not",
    verified: null,
  },
  {
    slug: "service-310",
    number: "309/310",
    name: "Barnstaple – Lynton – Lynmouth",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["lynmouth", "woody-bay-station", "barnstaple-bus-station"],
    season: null,
    frequency: "About hourly Mon–Sat all year. Sundays only 24 May – 13 Sep in 2026",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/May%2026/309_310%20050426.pdf",
    notes: "Lynmouth to Barnstaple via Lynton, Woody Bay Station and Blackmoor Gate, about an hour. The 309 journeys also call at North Devon District Hospital. Out of season it's the only way between the ends of section 3: the 301 from Combe Martin, change at Barnstaple, about 2 h 35 in all. On the 2026 timetable 07:16 from Combe Martin reaches Lynmouth at 09:50, and 16:16 is the last that connects",
    verified: "2026-09-13",
  },
  {
    slug: "service-301",
    number: "301",
    name: "Combe Martin – Ilfracombe – Barnstaple",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["combe-martin", "watermouth", "hele-bay", "ilfracombe", "barnstaple-bus-station"],
    season: null,
    frequency: "Hourly Mon–Sat all year. Sundays only 24 May – 13 Sep in 2026",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/May%2026/301%20050426.pdf",
    notes: "Combe Martin to Ilfracombe in about 20 minutes, Barnstaple in about an hour, calling at North Devon District Hospital. Change there to the 310 for Lynmouth",
    verified: "2026-09-13",
  },
  {
    slug: "yealm-ferry",
    number: "Ferry",
    name: "Yealm ferry (Warren Point – Noss Mayo)",
    type: "ferry",
    provider: "ycet",
    // Season, hours and fares from the operator's own 2026 posters on
    // ycet.co.uk: "RIVER YEALM ELECTRIC WATER TAXI/FERRY, 28 March –
    // 30 September 2026, DAILY 10AM – 4PM*", and a second sheet, "SUMMER
    // OPERATING HOURS*, SUN – THUR / 9am-5pm, FRI – SAT / 9am – 9pm,
    // *10 JUL – 30 SEPT 2026". The price sheet is marked effective 15 April
    // 2026. The directory claim of an April start is wrong: the operator's own
    // start is 28 March.
    serves: ["yealm-wembury", "yealm-noss-mayo"],
    season: { from: "03-28", to: "09-30" },
    frequency: "Daily in season, on demand rather than to a timetable: 10am – 4pm from 28 March, and from 10 July to 30 September Sun–Thu 9am – 5pm, Fri and Sat 9am – 9pm. Nothing 1 October – 27 March",
    url: "https://www.ycet.co.uk/timetable",
    notes: "An electric launch that comes when called, not a boat on a timetable: ring or text 07399 067942, or call on VHF channel 69. Warren Point on the Wembury side; Wide Slip below Noss Mayo and Yealm Steps at Newton Ferrers on the other, so it lands you at either village. The coast path fare, shore to shore, is £5 adult, £2.50 child 5–14, £12 for two adults and three children; under 5s free, bicycles £2. The price sheet says nothing about dogs. \"Subject to weather conditions and tides\", and in bad weather or quiet spells the hours are cut back, so ring before relying on it. Out of season there is no crossing at all: a taxi round by Brixton and Yealmpton, or Mon–Sat the 48 from Wembury to Elburton and the 94 on to Noss Mayo. Times and prices from the operator's 2026 posters",
    verified: "2026-09-16",
  },

  {
    slug: "service-31",
    number: "31",
    name: "Ilfracombe – Mortehoe – Woolacombe",
    type: "bus",
    provider: "taw-and-torridge",
    serves: ["ilfracombe", "mortehoe", "woolacombe", "mullacott-cross"],
    season: null,
    // The operator's PDF is a 2024 file; its September 2026 open data has the
    // same hourly pattern but drops the 10:35 and 17:05. Times below are in both.
    frequency: "About hourly Mon–Sat. Not on bank holidays",
    url: "https://images.tawandtorridge.co.uk/CMO/pdf/mondaytosaturday31winter.pdf",
    notes: "Ilfracombe High Street to Woolacombe in about 20 minutes, some journeys via Mortehoe. With the 301, changing at Ilfracombe: 09:16 from Combe Martin reaches Woolacombe at 10:28, and 17:16 at 17:58. Back, 09:35 from Woolacombe reaches Combe Martin at 10:47; the last that connects leaves at 17:59 and arrives at 18:46, with a 200 m walk from Wilder Road to the High Street",
    verified: null,
  },
  {
    slug: "service-31-sunday",
    number: "31",
    name: "Ilfracombe – Woolacombe (Sundays)",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["ilfracombe", "mortehoe", "woolacombe", "mullacott-cross"],
    // "Operates from 24th May 2026 until 14th September 2026 inclusive",
    // Sundays and public holidays.
    season: { from: "05-24", to: "09-14" },
    frequency: "8 a day each way, Sundays and bank holidays, in season",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/May%2026/31%20050426.pdf",
    notes: "Stagecoach runs the Sunday 31; Taw & Torridge the rest of the week. Only three Sunday 301s connect: 10:11 from Combe Martin reaches Woolacombe at 11:34, and 13:11 at 14:28; from Woolacombe, 11:37 reaches Combe Martin at 12:45. Out of season there's no Sunday bus at either end",
    verified: "2026-09-13",
  },
  {
    slug: "service-303",
    number: "303",
    name: "Woolacombe – Mortehoe – Braunton – Barnstaple",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["woolacombe", "mortehoe", "braunton", "barnstaple-bus-station"],
    season: null,
    frequency: "5 a day Mon–Fri from Braunton, 6 back; 4 and 5 on Saturdays, one more each way 24 May – 14 Sep. No Sundays",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/May%2026/303%20050426.pdf",
    notes: "The only direct bus between the ends of section 5: Braunton George Inn to Woolacombe Sands in 28 minutes, inland by West Down, and on to Barnstaple bus station. Mon–Fri from Braunton 09:27, 11:27, 14:17, 17:17, 18:22; from Woolacombe 07:51, 09:55, 11:55, 14:55, 17:47, 18:52. Saturday times differ slightly, and the last each way runs only 24 May – 14 Sep. Northbound it also calls at Braunton Tesco, by the end of section 5. Between its times, Mon–Sat, change at Mullacott Cross between the 21B and the 31, about hourly: 08:53 from Braunton reaches Woolacombe at 09:32; 09:35 from Woolacombe reaches Braunton at 10:28, and the last, 17:59, arrives 18:34. Summer Sundays, change at Ilfracombe: 09:05 from Braunton arrives 10:28; 09:37 from Woolacombe arrives 10:59. Out of season no Sunday bus reaches Woolacombe. Doesn't go to Ilfracombe, Combe Martin, Croyde or Saunton",
    verified: "2026-09-13",
  },
  {
    slug: "service-35",
    number: "35",
    name: "Ilfracombe – Slade – Lee",
    type: "bus",
    provider: "independent-coach-company",
    serves: ["ilfracombe", "lee-ilfracombe"],
    season: null,
    frequency: "Tuesdays and Fridays only",
    url: null,
    notes: "Leaves Lee sea wall at 10:40 and 13:10, reaching Ilfracombe High Street about 17 minutes later. Times from Lee's community website and the national bus dataset; no operator timetable found",
    verified: null,
  },
  {
    slug: "service-21c",
    number: "21C",
    name: "Barnstaple – Braunton – Saunton – Croyde – Georgeham",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["braunton", "saunton-sands", "croyde-bay", "georgeham", "chivenor", "barnstaple-bus-station"],
    season: null,
    frequency: "About hourly Mon–Sat all year. Sundays only 24 May – 14 Sep in 2026, 8 a day, not to Georgeham",
    // Stagecoach's timetable from 7 Sep 2026; it prints timing points only, so
    // the stop list is from the May 2026 PDF and Stagecoach's data on bustimes.org.
    url: "https://tis-kml-stagecoach.s3.amazonaws.com/PdfTimetables/XDDO021C.pdf",
    notes: "The only bus at Croyde, Saunton and Georgeham: Croyde Bay to Braunton in about 30 minutes along the coast road. Mon–Sat from Croyde Bay 09:45, 10:45, 11:55, 12:55, 14:00, 15:00, 16:05, 17:00, 18:15 and 19:05; out from Braunton George Inn about hourly, 06:56 to 18:17. Summer Sundays from Croyde Bay hourly 10:00 to 18:00, but not 14:00. Only some journeys go on to Georgeham, which is 4 km from Woolacombe in a straight line, over the hill; the 303 is the way there",
    verified: "2026-09-13",
  },
  {
    slug: "service-21b",
    number: "21B",
    name: "Ilfracombe – Mullacott Cross – Braunton – Barnstaple",
    type: "bus",
    provider: "stagecoach-south-west",
    // Calls at Ilfracombe's Wilder Road car park and St James' Place, not the
    // High Street garage the ilfracombe record points at; 200 m apart.
    serves: ["ilfracombe", "mullacott-cross", "braunton", "chivenor", "barnstaple-station", "barnstaple-bus-station"],
    season: null,
    frequency: "Every 30 minutes Mon–Sat daytime, hourly evenings and Sundays, all year",
    url: "https://tis-kml-stagecoach.s3.amazonaws.com/PdfTimetables/XDDO021C.pdf",
    notes: "Braunton to Ilfracombe or Barnstaple in about 20 minutes, inland by the A361. Meets the 31 to Woolacombe at Mullacott Cross",
    verified: "2026-09-13",
  },
  {
    slug: "service-21",
    number: "21",
    name: "Barnstaple – Fremington – Instow – Bideford – Westward Ho!",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stop list from Stagecoach's data on bustimes.org; the PDF prints timing
    // points only. Southbound it stops in Instow at Rectory Lane, Vespers,
    // Down Road, Anstey Way and Westleigh; northbound at Estuary View, opp
    // Vespers, Kiln Close Lane and Marine Parade. Not at The Quay, which has no
    // services. Westward Ho! is the car park stop, 640 m east of the endpoint
    // record and 100 m from where section 7 finishes.
    serves: ["barnstaple-bus-station", "barnstaple-station", "fremington", "instow", "instow-westleigh", "bideford-quay", "northam-durrant-house", "westward-ho-car-park"],
    season: null,
    frequency: "Every 30 minutes Mon–Sat daytime, hourly on Sundays, every two hours in the evening, all year. With the 21A, every 15–20 minutes Mon–Sat and every 30 minutes on Sundays",
    url: "https://tis-kml-stagecoach.s3.amazonaws.com/PdfTimetables/XDAO021.pdf",
    notes: "Barnstaple bus station to Instow in about 25 minutes; Fremington is 10 minutes from Instow. Last bus from Barnstaple to Westward Ho! 23:25; later ones as far as Instow and Bideford Quay, 00:00 Mon–Fri and into the early hours at weekends. Instow to Westward Ho! about 30 minutes: Mon–Fri, Rectory Lane 10:08 reaches the car park stop at 10:38, and the 10:40 from there reaches Marine Parade at 11:08; Sundays, 10:00 from Rectory Lane arrives 10:27, and 10:33 back reaches Marine Parade at 10:58. No bus runs between Instow and Braunton: change at Barnstaple for the 21B, about an hour in all. Mon–Fri, 09:28 from Braunton SQ Restaurant reaches Instow Rectory Lane at 10:23 on the 10:00 21A; back, 09:48 from Instow Marine Parade reaches Braunton George Inn at 10:54. Northbound buses stop at Marine Parade, 300 m south of the quay",
    verified: "2026-09-13",
  },
  {
    slug: "service-21a",
    number: "21A",
    name: "Barnstaple – Fremington – Instow – Bideford – Appledore",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["barnstaple-bus-station", "barnstaple-station", "fremington", "instow", "instow-westleigh", "bideford-quay", "northam-durrant-house", "appledore"],
    season: null,
    frequency: "Every 30 minutes Mon–Fri late morning to early afternoon, otherwise about hourly; hourly Saturdays and Sundays; every two hours in the evening, all year",
    url: "https://tis-kml-stagecoach.s3.amazonaws.com/PdfTimetables/XDAO021A.pdf",
    notes: "The 21's road as far as Bideford, then on to Appledore's Seagate Hotel stop, 200 m from the ferry slip. When the ferry isn't running it's the way back to Instow, one bus: Seagate Hotel to Marine Parade in about 27 minutes",
    verified: "2026-09-13",
  },
  {
    slug: "appledore-instow-ferry",
    number: "Ferry",
    name: "Instow – Appledore ferry",
    type: "ferry",
    provider: "appledore-instow-ferry",
    serves: ["instow", "appledore"],
    // The operator's licence allows 1 April to 31 October. Tides mean no
    // sailings 25–31 Oct 2026; the last is Sat 24 Oct.
    season: { from: "04-01", to: "10-31" },
    frequency: "Back and forth through one tide window a day, roughly two hours either side of high tide. None on some days",
    url: "https://www.appledoreinstowferry.com/index.php/timetable-fares/timetable.html",
    notes: "Volunteer-run, two 12-passenger boats. The window is 2½–4½ hours, anywhere from 9.30am to 9pm. When high tide falls early and late there's no crossing at all: 12 of 30 days in September 2026, 14 in October. Monthly timetables on the operator's site. Adults £2 single, card only. Dogs free, at the skipper's discretion. Steep steps at Instow quay. Not the path, which goes round by Bideford",
    verified: "2026-09-13",
  },
  {
    slug: "service-16",
    number: "16",
    name: "Bideford – Westward Ho! – Appledore circular",
    type: "bus",
    provider: "stagecoach-south-west",
    serves: ["bideford-quay", "northam-durrant-house", "westward-ho-car-park", "appledore"],
    season: null,
    frequency: "3 a day, Tuesdays and Thursdays only, not bank holidays",
    url: "https://tis-kml-stagecoach.s3.amazonaws.com/PdfTimetables/XDAO016.pdf",
    notes: "One way round: Bideford Quay, Northam, Westward Ho!, Appledore, Northam, Bideford. The only direct bus from Westward Ho! to Appledore: Nelson Road 09:27, 11:57 and 13:32, reaching Appledore Seagate Hotel 13 minutes later. The other way means riding round through Bideford. Timetable from 7 Sep 2026",
    verified: "2026-09-13",
  },
  {
    slug: "service-319",
    number: "319",
    name: "Barnstaple – Bideford – Clovelly – Hartland",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stop list from Stagecoach's data on bustimes.org; the PDF prints timing
    // points only. Every journey calls at every stop below except the Clovelly
    // Visitor Centre, which the 06:00 and 08:55 from Barnstaple pass by.
    // Clovelly's endpoint is 130 m from the Visitor Centre stop, so the route
    // serves it directly.
    serves: ["barnstaple-bus-station", "barnstaple-station", "bideford-quay", "abbotsham-church", "fairy-cross-portledge", "horns-cross", "hoops-inn-stop", "bucks-cross", "clovelly-cross", "clovelly", "velly-lighthouse-cross", "hartland"],
    season: null,
    frequency: "6 a day each way Mon–Sat. Southbound, 4 go via Clovelly Visitor Centre and 2 only as far as Clovelly Cross. No Sundays or bank holidays",
    url: "https://tis-kml-stagecoach.s3.amazonaws.com/PdfTimetables/XDBO319.pdf",
    notes: "Doesn't go to Westward Ho!: change at Bideford for the 21. Mon–Fri, 10:38 from Westward Ho! car park reaches Bideford Quay at 10:57 for the 11:30, Clovelly 12:12; 12:38 connects with the 13:29, Clovelly 14:13. Back, 10:31, 12:51 and 14:51 from Clovelly reach Bideford Quay at 11:17, 13:35 and 15:39, for 21s from Stop C at 11:19, 13:49 and 15:59, about 20 minutes on to Westward Ho!; the 18:34 meets a 21 at Kingsley Road, 19:11 for 19:16. The 06:22 and 09:22 from Bideford Quay stop at Clovelly Cross, not the Visitor Centre. No bus goes to Stoke or Hartland Quay. From Hartland Northgate Green 07:10, 10:15, 12:35, 14:35, 18:20 (Sat 18:10) and 19:00, 15 minutes to Clovelly; from Clovelly Visitor Centre to Hartland 12:12, 14:13, 17:59 and 18:44, and from Clovelly Cross 06:49 and 09:55. Saturday times within a few minutes. Timetable from 7 Sep 2026",
    verified: "2026-09-13",
  },
  {
    slug: "service-219",
    number: "219",
    name: "Hartland – Kilkhampton – Bude",
    type: "bus",
    provider: "go-cornwall-bus",
    // Clovelly is left out of serves: only one schoolday journey calls there.
    // Bude is The Strand, NaPTAN 0800COA10071, OSM node 682268017: 140 m from
    // the bude endpoint in a straight line but on the other bank of the Neet,
    // about 200 m on foot over Nanny Moore's Bridge. Every stop between
    // Hartland and Bude (Welcombe Cross, Woolley, Crimp, Kilkhampton,
    // Grimscott) is 4.6 km or more from the path, so none is in serves.
    serves: ["hartland", "bude"],
    season: null,
    frequency: "5 a day each way Mon–Sat, not bank holidays. No Sundays",
    url: "https://passenger-line-assets.s3.eu-west-1.amazonaws.com/gocornwallbus/TFCN/219-timetable-20260726-506f746f.pdf",
    notes: "Inland by Welcombe Cross and Kilkhampton, about 45 minutes; most journeys call at Stratton Hospital. From Hartland Northgate Green 10:30, 12:30, 14:30, 16:10 on schooldays or 16:30 on Saturdays and school holidays, and 18:30, reaching Bude The Strand at 11:14, 13:14, 15:14, 17:17 or 17:14, and 19:04. From The Strand 09:20, 11:30, 13:30, 15:30 and 17:30, reaching Hartland at 10:09, 12:19, 14:19, 16:09 or 16:19, and 18:19; on schooldays the 15:30 is a 218 via Poughill and Stibb. Hartland Quay is 3.9 km on from Northgate Green, by the road through Stoke. The Strand stop is across the Neet from the end of the path, over Nanny Moore's Bridge. Mon–Fri from Morwenstow, the 13:37 217 reaches The Strand at 14:20 for the 15:30 to Hartland; the 16:57 arrives after the last 219 has gone. On schooldays the 16:10 from Hartland goes via Clovelly Visitor Centre at 16:30, and the 218 leaves Clovelly at 07:35 for Hartland and Bude. Timetable from 26 Jul 2026",
    verified: "2026-09-14",
  },
  {
    slug: "service-217",
    number: "217",
    name: "Bude – Stibb – Morwenstow",
    type: "bus",
    provider: "go-cornwall-bus",
    // Morwenstow is Crosstown, NaPTAN 0800COD40806, OSM node 682271900, at
    // 50.90737, -4.55024: 280 m from the morwenstow-escape record (the Rectory
    // Tearooms) and 0.85 km from the route. It's served through the escape
    // slug because a route that reaches neither end of a section only appears
    // if it serves an escape point. Some journeys start at Holsworthy; that
    // half is left out, since it's nowhere near the path.
    serves: ["bude", "stibb-beach-turn", "coombe-duckpool", "morwenstow-escape"],
    season: null,
    frequency: "3 a day each way between Bude and Morwenstow. Mon–Fri in the national bus data, Mon–Sat on the operator's timetable. No Sundays or bank holidays",
    url: "https://passenger-line-assets.s3.eu-west-1.amazonaws.com/gocornwallbus/TFCN/217-timetable-20260726-4b8a0527.pdf",
    notes: "The only bus near the path between Hartland Quay and Bude. From Bude The Strand 08:45, 13:10 and 16:30, by Poughill and Stibb, reaching Coombe at 09:04, 13:29 and 16:49 and Morwenstow Crosstown at 09:12, 13:37 and 16:57. From Crosstown it loops inland by Gooseham and Woodford, then comes back the same way: from Crosstown 09:12, 13:37 and 16:57, Coombe 09:38, 14:03 and 17:23, reaching The Strand at 09:55, 14:20 and 17:48. Crosstown is past Morwenstow church, by the Bush Inn; Coombe is 700 m up the lane from Duckpool; Stibb Beach Turn is at the top of the Sandymouth lane, 1.6 km inland. The operator's timetable is headed Monday to Saturday, but the national bus data has no Saturday journeys, so ring before relying on one. Doesn't go to Hartland: change at Bude for the 219. Timetable from 26 Jul 2026",
    verified: "2026-09-14",
  },
  {
    slug: "service-95",
    number: "95",
    name: "Bude – Widemouth Bay – Crackington Haven – Boscastle – Tintagel – Camelford – Wadebridge",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stop list from Go Cornwall Bus's data on bustimes.org; the PDF prints
    // timing points only. Bude is The Strand, NaPTAN 0800COA10071, as for the
    // 219. Widemouth Bay is the Toilets stop, NaPTAN 0800COA10063 (towards
    // Bude) and 0800COA10064 opposite, no OSM node: 30 m from the
    // widemouth-bay escape record, so it's served through that slug.
    // Crackington Haven is the Cabin Cafe stop, NaPTAN 0800COA10044 (OSM node
    // 682267975) southbound and 0800COA10043 (OSM node 682267971) northbound,
    // 100 m from the endpoint. Boscastle is served through the boscastle escape
    // record: towards Crackington the 95 uses Boscastle Bridge, NaPTAN
    // 0800COA10035 (OSM node 682267958), 130 m from it; towards Tintagel, Car
    // Park, 0800COA10036 (OSM node 682267959), 220 m from it. Every 95 also
    // calls at Boscastle Doctors Corner and Willapark at the top of the
    // village, 0.6–0.7 km from the path. Rocky Valley is served through the
    // rocky-valley record, which is the Trethevy Bus Shelter stop
    // (0800COA10022; opposite 0800COA10032). Bossiney is served through the
    // bossiney record: the Bossiney Campsite stops (0800COA10027, 0800COA10028
    // opposite, no OSM node) are 30–50 m from it. Tintagel is the Molesworth
    // Street stop record. Trevalga Turn (0800COA15719) is 0.5 km off the path;
    // Wainhouse Corner (0800COA10046) 3.6 km. Tregatta Bus Shelter
    // (0800COA10023 / 10018) both ways. Delabole Westdowns Road (0800FWX38620 /
    // 38630) on most journeys; not the last from Tintagel or the 06:57 from
    // St Teath. Sundays are service-95-sunday, which runs by Port Isaac.
    serves: ["bude", "widemouth-bay", "crackington-haven", "boscastle", "rocky-valley", "bossiney", "tintagel-molesworth-street", "tregatta", "delabole-westdowns-road"],
    season: null,
    frequency: "6 a day each way Mon–Sat all year, about every two hours; not bank holidays. Summer Sundays run a different route, by Port Isaac",
    url: "https://passenger-line-assets.s3.eu-west-1.amazonaws.com/gocornwallbus/TFCN/95-timetable-20260726-e2b75fdf.pdf",
    notes: "The only bus along this stretch, inland by the A39 between Widemouth and Crackington: The Strand to Crackington Haven Cabin Cafe in 26 minutes, Widemouth Bay in 6. Mon–Sat from The Strand 06:30 on schooldays or 06:50 on Saturdays and school holidays, 09:20, 11:20, 13:20, 15:15 on schooldays or 15:20, and 17:40, reaching the Cabin Cafe at 06:56 or 07:16, 09:46, 11:46, 13:46, 15:51 or 15:46, and 18:06. Back from the Cabin Cafe 08:04, 10:44, 12:44, 14:44, 16:44 and 18:44, passing Widemouth Bay 18 minutes later and reaching The Strand at 08:32 (08:37 on schooldays), 11:12, 13:12, 15:12, 17:12 and 19:12. Towards Tintagel, Mon–Sat from Boscastle Car Park 07:16 on schooldays or 07:36, 10:06, 12:06, 14:06, 16:11 on schooldays or 16:06, and 18:26, 20 minutes after the Cabin Cafe. Trethevy for Rocky Valley is 6 minutes on, Bossiney 8, Tintagel Visitor Centre 16. Back from opposite Tintagel Visitor Centre 07:25, 10:05, 12:05, 14:05, 16:05 and 18:05: Bossiney 7 minutes later, Trethevy 9, Boscastle Bridge 19, Cabin Cafe 39. On schooldays a 15:29 from Tintagel goes only as far as Boscastle Doctors Corner. Molesworth Street is within a minute of the Visitor Centre times. Doesn't go to Port Isaac Mon–Sat: change to the 96 at Delabole Westdowns Road or Wadebridge. No bus at Millook or Dizzard. Timetable from 26 Jul 2026",
    verified: "2026-09-14",
  },
  {
    slug: "service-95a",
    number: "95A",
    name: "Bude – Bude Meadows – Widemouth Bay – Bude",
    type: "bus",
    provider: "go-cornwall-bus",
    // A one-way loop: out inland by Morrisons and Bude Meadows, back along
    // Marine Drive. Only the return calls at the Widemouth Bay Toilets stop
    // (NaPTAN 0800COA10063), 30 m from the widemouth-bay escape record.
    serves: ["bude", "widemouth-bay"],
    season: null,
    frequency: "3 a day Mon–Sat, not bank holidays. No Sundays",
    url: "https://passenger-line-assets.s3.eu-west-1.amazonaws.com/gocornwallbus/TFCN/95-timetable-20260726-e2b75fdf.pdf",
    notes: "Three more buses from Widemouth Bay back to Bude between the 95s: from the Toilets stop 10:02, 12:02 and 14:02, reaching The Strand at 10:12, 12:12 and 14:12. Out of Bude it goes inland, from The Strand at 09:40, 11:40 and 13:40, so it's no use for getting to Widemouth along the coast. Timetable from 26 Jul 2026",
    verified: "2026-09-14",
  },
  {
    slug: "service-181",
    number: "181",
    name: "Otterham – Boscastle – Tintagel – Camelford – Bodmin (Callywith College)",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stop list from Stagecoach's data on bustimes.org. Boscastle both ways is
    // Car Park (0800COA10036), 220 m from the boscastle escape record, and
    // Doctors Corner. Trethevy is 0800COA10032 in the morning and 0800COA10022
    // in the evening, both at the rocky-valley record. The morning journey calls
    // at the Bossiney Campsite and Bus Shelter stops, the evening one at Bus
    // Shelter only, 200 m from the bossiney record. Tintagel is Molesworth
    // Street in the morning and opposite the Visitor Centre, 110 m east, in the
    // evening. Nothing at Crackington Haven.
    serves: ["boscastle", "rocky-valley", "bossiney", "tintagel-molesworth-street", "tregatta"],
    season: null,
    frequency: "1 a day each way along this stretch, Mon–Fri in college terms only, not bank holidays",
    url: "https://tis-kml-stagecoach.s3.amazonaws.com/PdfTimetables/XDAO181.pdf",
    notes: "A college service for Callywith College, Bodmin, on Stagecoach's public timetables, marked \"period only\"; whether anyone can ride isn't stated. Towards Tintagel from Boscastle Car Park 07:43, Trethevy 07:51, Bossiney 07:54, Tintagel Visitor Centre 07:56, then Camelford 08:13 and Bodmin by 09:00. Back, 16:40 from the college and 17:26 from Camelford, reaching opposite Tintagel Visitor Centre at 17:43, Bossiney Bus Shelter 17:45, Trethevy 17:48, Boscastle Doctors Corner 17:53 and Car Park 17:55, then Otterham Station 18:11. The evening one fills the gap between the 16:05 and 18:05 95s from Tintagel. College term dates not checked. Timetable from 10 Sep 2026",
    verified: "2026-09-14",
  },
  {
    slug: "service-95-sunday",
    number: "95",
    name: "Bude – Boscastle – Tintagel – Delabole – Port Isaac – Polzeath – Wadebridge (Sundays)",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops as for service-95 north of Tintagel, from the operator's data on
    // bustimes.org. South of Tintagel it calls at Tregatta (0800COA10023 /
    // 10018), Delabole Westdowns Road (0800FWX38620 / 38630) and Port Isaac The
    // Pea Pod (0800COA10247). The operator's PDF says "Service operates until
    // Monday 31st August 2026"; its open data has Sunday journeys to 25 Oct and
    // none on 1 Nov. The 5 Apr start is from the February 2026 PDF.
    // Polzeath through the polzeath escape record (Beach, 0800COA10238 /
    // 10237); Port Quin Cross, The Mowhay and Rock Clock Garage are stop
    // records. Clock Garage towards Port Isaac is from bustimes.org; the PDF
    // skips it.
    serves: ["bude", "widemouth-bay", "crackington-haven", "boscastle", "rocky-valley", "bossiney", "tintagel-molesworth-street", "tregatta", "delabole-westdowns-road", "port-isaac-pea-pod", "port-quin-cross", "polzeath", "trebetherick-mowhay", "rock-clock-garage"],
    season: { from: "04-05", to: "10-25" },
    frequency: "Sundays and bank holidays in season: 6 a day from Bude and Tintagel to Port Isaac, 4 from Port Isaac back to Tintagel and Bude, and one more from Tintagel that starts at Wadebridge",
    url: "https://passenger-line-assets.s3.eu-west-1.amazonaws.com/gocornwallbus/TFCN/95-timetable-20260726-e2b75fdf.pdf",
    notes: "The only direct bus between Tintagel and Port Isaac: Molesworth Street to the Pea Pod in 48 minutes, inland by Camelford and Delabole. From Molesworth Street 09:02, 11:02, 13:02, 15:02, 17:02 and 19:02, Tregatta a minute later, Delabole Westdowns Road 30 minutes, the Pea Pod at 09:50, 11:50, 13:50, 15:50, 17:50 and 19:50, then Polzeath Beach at 10:10, 12:10, 14:10, 16:10, 18:10 and 20:10, Rock Clock Garage ten minutes later and Wadebridge at 10:45 to 20:45. From Wadebridge 10:25, 12:25, 14:25 and 16:25: Clock Garage 10:44, 12:44, 14:44 and 16:44, Polzeath Beach 12 minutes later, the Pea Pod at 11:15 to 17:15. From Padstow, the Sunday 57 at 09:20, 11:20, 13:20 and 15:20 reaches Wadebridge 22 minutes later for these. The other way the 95 reaches Wadebridge four minutes after each 57 has left: Port Isaac 09:50 gets to Padstow at 13:06, so use the ferry. Back from the Pea Pod 11:15, 13:15, 15:15 and 17:15: Westdowns Road 13 minutes later, Tregatta 40, Molesworth Street 41, then on to Boscastle and Bude. The 09:27 from Tintagel comes from Wadebridge by St Kew, not Port Isaac. From Bude The Strand 08:10, 10:00, 12:00, 14:00, 16:00 and 18:00, Cabin Cafe 08:31, 10:26, 12:26, 14:26, 16:26 and 18:26; back from the Cabin Cafe 10:06, 12:36, 14:36, 16:36 and 18:36, The Strand 28 minutes later. Towards Tintagel from Boscastle Car Park 08:46, 10:46, 12:46, 14:46, 16:46 and 18:46, Tintagel 16 minutes on. Back from Tintagel 09:27, 11:57, 13:57, 15:57 and 17:57, Boscastle Bridge 19 minutes later, Cabin Cafe 39. The operator's PDF says the Sunday service ends 31 Aug; its own data runs to 25 Oct. Timetable from 26 Jul 2026",
    verified: "2026-09-14",
  },
  {
    slug: "service-96",
    number: "96",
    name: "Wadebridge – Rock – Polzeath – Port Isaac – Delabole – Camelford",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stop list from Go Cornwall Bus's data on bustimes.org. Port Isaac is The
    // Pea Pod, 0800COA10247. Delabole Westdowns Road (0800FWX38620 towards Port
    // Isaac, 0800FWX38630 towards Camelford) only on journeys through Delabole;
    // the 07:46 schoolday from Port Isaac goes by St Teath instead. Polzeath is
    // served through the polzeath escape record: Beach (0800COA10238, OSM node
    // 10087876468) and opposite (0800COA10237, node 682268113) are 100–130 m
    // from it. Port Quin Cross, Trebetherick The Mowhay and Rock Clock Garage
    // are stop records. Every journey calls at all of them except the 07:15
    // schoolday from Wadebridge, which goes straight to St Endellion. St
    // Endellion Church and Trelights Junction are 2.1 km from the path.
    serves: ["port-isaac-pea-pod", "delabole-westdowns-road", "port-quin-cross", "polzeath", "trebetherick-mowhay", "rock-clock-garage"],
    season: null,
    frequency: "Mon–Sat, not bank holidays: 8 a day from Port Isaac to Wadebridge by Polzeath and Rock, 5 back. Only some run between Port Isaac and Delabole: 5 a day towards Port Isaac, 2 back. No Sundays",
    url: "https://passenger-line-assets.s3.eu-west-1.amazonaws.com/gocornwallbus/TFCN/96-timetable-20260726-04bda119.pdf",
    notes: "Port Isaac to Wadebridge in about 55 minutes: Polzeath Beach 20 minutes from the Pea Pod, Rock Clock Garage 30. Towards Wadebridge from the Pea Pod 09:04, 10:28, 12:30 and 18:40 every Mon–Sat, plus 07:30, 13:54, 15:39 and 16:58 on schooldays, or 07:34, 14:30, 15:30 and 16:30 on Saturdays and in school holidays. Towards Port Isaac, Mon–Fri from Clock Garage 09:37, 11:55, 13:55, 15:34 on schooldays or 15:56 in school holidays, and 18:07, reaching the Pea Pod 30 minutes later; Saturdays 09:36, 11:53, 13:53, 15:53 and 18:06. Polzeath Beach is 9–11 minutes after Clock Garage. No bus to Padstow: change at Wadebridge bus station for the 57, 25 minutes on to Padstow Bus Terminus. Padstow to Port Isaac: the 57 at 08:00 meets the 09:15, Port Isaac 10:08 (Sat 10:07); 11:00 meets the 11:33 (Sat 11:32), 12:25; 13:00 the 13:33 (Sat 13:32), 14:25; the last is 17:15, with five minutes at Wadebridge for the 17:45, Port Isaac 18:37. Port Isaac to Padstow: 09:04 meets the 10:31, Padstow 10:56; 10:28 the 11:31, 11:56; 12:30 the 13:31, 13:56; the last, 18:40, meets the 20:06, Padstow 20:24. Or cross by ferry: Clock Garage is 1.5 km from the Rock slipway. Doesn't go to Tintagel: Mon–Sat, change to or from the 95 at Delabole Westdowns Road or Wadebridge. Tintagel to Port Isaac: the 95 from Tintagel Visitor Centre at 07:52 (07:32 on schooldays) meets the 08:46 from Westdowns Road, Port Isaac 09:04; on Saturdays and in school holidays the 14:22 meets the 15:12, Port Isaac 15:30; the 10:22, 12:22 and 16:22 (16:27 on schooldays) reach Wadebridge about ten minutes before the 96 at 11:33, 13:33 and 17:45 (Sat 11:32, 13:32), Port Isaac 12:25, 14:25 and 18:37. Port Isaac to Tintagel: 07:30 (07:34 Saturdays and school holidays) to Wadebridge for the 09:10 95, Tintagel 10:05; 10:08 (Sat 10:07) to Westdowns Road for the 11:37, Tintagel 12:05. The last is 16:05 on schooldays, 16:31 in school holidays or 16:24 on Saturdays, meeting the 17:37 at Westdowns Road, Tintagel 18:05. Timetable from 26 Jul 2026",
    verified: "2026-09-14",
  },
  {
    slug: "padstow-rock-ferry",
    number: "Ferry",
    name: "Padstow – Rock ferry (Black Tor Ferry)",
    type: "ferry",
    provider: "padstow-harbour-commissioners",
    // Landings from the operator's crossing map and OSM. At high tide Padstow is
    // the ferry pontoon in the outer harbour, OSM node 5226431061, 35 m from the
    // padstow endpoint, and Rock the slipway by the beach car park, by the
    // rock escape record: OSM way 540188266, "Padstow Rock Ferry (high tide)".
    // At low water Rock's landing moves onto the sand (way 540185551), and on
    // the lowest tides Padstow's moves to its low-tide point towards St
    // Saviour's Point, node 5226404377, 460 m north of the endpoint (ways
    // 540185551, 540185550). Not Porthilly. The operator's page gives no closed
    // days; Wikipedia and directories say no Sunday crossings mid-November to
    // mid-February, which it doesn't confirm, so no season.
    serves: ["rock", "padstow"],
    season: null,
    frequency: "Back and forth all day from 8am, daily, all year. The operator gives no interval; directories say every 15–20 minutes",
    url: "https://padstow-harbour.co.uk/ferry/",
    notes: "The path's own crossing of the Camel, 5–10 minutes. First ferry 8am. Last from Padstow and from Rock: from the end of BST to 31 Mar 5pm and 4.45pm, with a lunch break 1.30–2pm; 1 Apr – 1 Jun 6pm and 5.45pm; 2 Jun – 20 Jul 7pm and 6.45pm; 21 Jul – 31 Aug 7.45pm and 7.30pm; 1–14 Sep 7pm and 6.45pm; 15 Sep to the end of BST 6pm and 5.45pm. Card only, paid on board, singles only: adult £3, child £1.50, bike £3. Dogs welcome; no dog fare listed. The landing moves with the tide, onto soft sand at Rock and 450 m north of the harbour at Padstow; the operator's page posts each day's times at each. Nothing on weather: ring 07773 081574. After the last ferry, April to October, the Rock Water Taxi runs until 11pm. Otherwise the only way round is the 96 to Wadebridge and the 57 to Padstow, Mon–Sat",
    verified: "2026-09-14",
  },
  {
    slug: "rock-water-taxi",
    number: "Ferry",
    name: "Rock Water Taxi (evenings)",
    type: "ferry",
    provider: "wavehunters",
    // Boards at Rock from the slipway by the beach car park, as the ferry does.
    // At Padstow, South Slip outside the Harbour Office on higher tides, the
    // ferry slip at the start of the outer breakwater on lower ones. No OSM way.
    serves: ["rock", "padstow"],
    // "Every day from April to October from 18.00 to 23.00"; a winter schedule
    // is to be announced in October.
    season: { from: "04-01", to: "10-31" },
    frequency: "Every 10–15 minutes, 6pm – 11pm daily, in season",
    url: "https://www.wavehunters.co.uk/water-taxi-service-in-rock-padstow/",
    notes: "Takes over when the ferry stops. A 12-seat catamaran with a heated cabin. From £7.50, no need to book. From 9pm, ring or tell the skipper if you'll want a crossing one way or back late; after 11pm, when still running, £10 a head extra, by card. If it isn't at your side, ring 07778 105297 after 6.45pm; the page tracks it live. Dogs free, bikes £2.50, six in all per crossing, at the skipper's discretion. At low tide you may walk across sand to board. Darkness and tides can restrict it",
    verified: "2026-09-14",
  },
  {
    slug: "service-184",
    number: "184",
    name: "Pipers Pool – Delabole – Polzeath – Rock – Wadebridge – Bodmin (Callywith College)",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stop list from Stagecoach's data on bustimes.org; Stagecoach's own PDF
    // prints it only as far as Polzeath Beach. The 96's stops from Port Quin
    // Cross to Rock, but by St Endellion, not Port Isaac. Polzeath is Beach and
    // opposite (0800COA10238 / 10237), served through the polzeath escape record.
    serves: ["delabole-westdowns-road", "port-quin-cross", "polzeath", "trebetherick-mowhay", "rock-clock-garage"],
    season: null,
    frequency: "1 a day each way, Mon–Fri in college terms only, not bank holidays",
    url: "https://tis-kml-stagecoach.s3.amazonaws.com/PdfTimetables/XDAO184.pdf",
    notes: "A college service for Callywith College, Bodmin, marked \"period only\" like the 181; whether anyone can ride isn't stated. Towards Bodmin: Port Quin Cross 07:56, Polzeath opposite Beach 08:02, opposite The Mowhay Cafe 08:05, opposite Clock Garage 08:11, Wadebridge about 08:32, the college 09:00. Back, 16:40 from the college: Clock Garage 17:28, The Mowhay 17:33, Polzeath Beach 17:35, Port Quin Cross 17:40, St Endellion Church 17:45, then Delabole and Pipers Pool. Doesn't go to Port Isaac. College term dates not checked. Timetable from 10 Sep 2026",
    verified: "2026-09-14",
  },
  {
    slug: "service-56",
    number: "56",
    name: "Padstow – Harlyn – Constantine Bay – Porthcothan – Mawgan Porth – Newquay Airport – Watergate Bay – Porth – Newquay",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops from the operator's data on bustimes.org and its own journey
    // planner; every journey calls at all of these unless noted. Padstow is the
    // Bus Terminus stop record (also New Street and School Hill). Trevone is the
    // trevone-turn stop record; the Trevone Bay Car Park and Village Hall stops
    // (0800COA10424, 10422 / 10423) have no buses. Harlyn goes through the
    // harlyn-bay escape record: Harlyn Bridge (0800COA10425, OSM node 682268316;
    // 0800COA10426, node 7685499451) is 80–90 m from it. Mother Iveys Corner
    // (0800FWX38550 / 38566), 600 m on, has the same buses a minute apart and
    // isn't recorded. Constantine Bay Surf Stores is a stop record. Porthcothan
    // goes through the porthcothan endpoint: Bay Stores (0800COA10431, OSM node
    // 682268324; opposite 0800COA10432, node 7685139280) is 10 m from it.
    // Nothing at Trevose Head or Treyarnon. South of Porthcothan the bus goes
    // inland by Treburrick and St Eval, so nothing at Carnewas: Tregona opp
    // Bedruthan House Hotel (0800COC31620, OSM node 11128895007), 270 m from
    // the carnewas escape record, has no buses. Mawgan Porth goes through the
    // mawgan-porth escape record: opp Betty's Shop (0800COC31625, OSM node
    // 682269311; Betty's Shop 0800COC31624 has no node) is 60 m from it; the
    // 13:00, and the 14:45 or 15:10, use the Pitch and Putt stops instead
    // (0800COC31614, node 4023456597; 0800COC31615, node 7685499448), 140–160 m
    // away. Watergate Bay goes through watergate-bay: The Phoenix (0800FWX38537,
    // node 682275020; 0800COC31606, node 682278373) is 190–200 m from it. Porth
    // goes through porth: Car Park (0800COC31570, node 7685499443; opposite
    // 0800COC31569, node 8792653419) is 65–70 m from it. Newquay goes through the
    // newquay endpoint: Bus Station Stand 1 (0800COC31523, node 11429988532) is
    // 70 m from it, Arrivals (0800COA15394) 50 m. Porth Four Turns (0800COC31528 /
    // 0800TRX00019), where most Newquay town routes also call, is 800 m from
    // porth and not recorded. From 4 Sep 2026 to 31 Mar 2027 buses towards
    // Newquay are diverted off Cliff Road by Mount Wise; none of these stops
    // change. The 1 Sep PDF is a few minutes out from the operator's dated
    // times on weekdays, and its Sundays are a different timetable (5 from
    // Padstow at 09:25, 10:50, 12:50, 14:50, 16:50; back from Porthcothan 10:11,
    // 12:11, 14:11, 16:11, 18:06). So the url is the service page, which shows
    // the times for a chosen date. The open-top Atlantic Coaster on this road
    // ended in 2025.
    serves: ["padstow-bus-terminus", "trevone-turn", "harlyn-bay", "constantine-bay-surf-stores", "porthcothan", "mawgan-porth", "watergate-bay", "porth", "newquay"],
    season: null,
    frequency: "All year. Mon–Fri, not bank holidays, about hourly: 9 a day from Newquay through Porthcothan to Padstow on schooldays, 10 in school holidays; 11 from Padstow to Newquay on schooldays, 12 in school holidays. Saturdays 6 through each way, and 4 more between Newquay and the airport by Porth and Watergate Bay. Sundays 5 from Newquay, 6 from Padstow",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/56",
    notes: "The direct bus back on two sections: Porthcothan Bay Stores to Padstow Bus Terminus in about 32 minutes, 43 on the journeys that go round by St Merryn Holiday Village; Newquay bus station to Porthcothan in 45–63 minutes, inland by St Eval. Towards Padstow, Mon–Fri from Newquay bus station 06:30, 09:00, 10:00, 11:00, 12:00, 13:00, then 14:45 on schooldays or 14:00 and 15:10 in school holidays, 16:15 and 17:15, reaching Porthcothan at 07:15, 09:52, 10:55, 11:55, 12:55, 14:03, 16:07 or 14:55 and 16:13, 17:10 and 18:10, and Padstow at 07:47, 10:35, 11:30, 12:30, 13:30, 14:38, 16:42 or 15:30 and 16:48, 17:45 and 18:45. The schoolday 14:45 goes by Tretherras School and takes 82 minutes to Porthcothan. Porth Car Park is 34–50 minutes before Porthcothan, Watergate Bay The Phoenix 29–44, Mawgan Porth 15–17. A schoolday 13:50 from Newquay goes only as far as the airport. Constantine Bay Surf Stores is about 20 minutes before Padstow, Harlyn Bridge 10, Trevone Turn 8. Towards Newquay, Mon–Fri from Padstow 06:45 on schooldays or 06:50 and 08:40 in school holidays, then 09:40, 10:40, 11:40, 12:40, 13:40, 14:45, 15:50, 17:00, 18:00 and 18:50, reaching Porthcothan at 07:16 or 07:21 and 09:11, then 10:12, 11:12, 12:12, 13:12, 14:22, 15:17, 16:22, 17:32, 18:32 and 19:22, and Newquay bus station at 08:32 or 08:26 and 10:16, then 11:17, 12:17, 13:17, 14:17, 15:20, 16:22, 17:27, 18:33, 19:30 and 20:20. On schooldays a 09:21 from St Eval stands in for the 08:40: Mawgan Porth 09:27, Newquay 10:16. Trevone Turn is 5–8 minutes after Padstow, Harlyn Bridge 9–11, Constantine Bay Surf Stores 21–23; Mawgan Porth about 15 minutes after Porthcothan, Watergate Bay 34–43, Porth 40–49. Saturdays from Newquay 07:00, 09:00, 11:00, 13:00, 15:10 and 17:15, reaching Porthcothan at 07:45, 09:52, 11:52, 14:00, 16:10 and 18:07 and Padstow at 08:17, 10:35, 12:27, 14:35, 16:45 and 18:42, plus a 17:38 from St Merryn Holiday Village by Constantine Bay Surf Stores (17:50) and Harlyn Bridge (18:00), reaching Padstow at 18:10. From Padstow 06:50, 08:40, 10:40, 12:40, 14:40 and 18:15, reaching Porthcothan at 07:21, 09:11, 11:12, 13:12, 15:12 and 18:47 and Newquay at 08:26, 10:16, 12:10, 14:10, 16:10 and 19:45; the 17:00 only goes as far as St Merryn Holiday Village, passing Constantine Bay Surf Stores at 17:23. Saturdays also 10:00, 12:00, 14:00 and 16:15 from Newquay by Porth and Watergate Bay to the airport, and back from the airport at 10:40, 12:40, 14:40 and 16:50, Newquay 30 minutes later; none reach Mawgan Porth. Sundays from Newquay 09:25, 11:25, 13:25, 15:25 and 17:20, reaching Porthcothan at 10:16, 12:17, 14:17, 16:17 and 18:06 and Padstow at 10:50, 12:51, 14:51, 16:51 and 18:35; from Padstow 09:25, 11:00, 13:00, 15:00, 17:00 and 18:45, reaching Porthcothan at 09:57, 11:32, 13:32, 15:32, 17:30 and 19:15 and Newquay at 10:53, 12:28, 14:28, 16:28, 18:20 and 20:05. The PDF timetable says the Sunday service runs on bank holidays and prints different Sunday times; these are the operator's own dated times. No buses on Christmas Day or New Year's Day. Nearest stop with buses to Carnewas is Mawgan Porth o/s Merlin Golf Course, 1.5 km inland. Times for 16–20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-14",
  },
  {
    slug: "service-87",
    number: "87",
    name: "Truro – RCH Treliske – St Agnes – Perranporth – Holywell Bay – Crantock – Newquay",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops from the operator's own dated all-stops timetable and bustimes.org.
    // Perranporth goes through the perranporth endpoint: Beach Road
    // (0800FWW38453, OSM node 682277498) is 55 m from it and called at both
    // ways. Holywell Bay goes through the holywell-bay escape record: Treguth
    // Inn (0800COC31637, OSM node 682269339; opposite 0800COC31638, no node) is
    // 170–180 m from it. Buses loop through the village and call at both, and
    // at Holywell Bay Holiday Park (0800FWZ38444, node 682279884; 0800COC31641).
    // Crantock is the crantock-bus-shelter stop record. St Agnes goes through the
    // st-agnes escape record, the Institute stop (0800COC30163 / 30162). Newquay
    // goes through the
    // newquay endpoint: Bus Station Stand 1 (0800COC31523, node 11429988532) is
    // 80 m from it, Arrivals (0800COA15394) 50 m. Cubert Post Office and Cubert
    // School, 2.2 km from the route, and Perranporth Perran Sands Entrance
    // (0800COC31652), 1.2 km inland of the dunes, are not recorded. Nothing at
    // West Pentire or along Penhale. From 4 Sep 2026 to 31 Mar 2027 buses
    // towards Newquay are diverted off Cliff Road and miss Railway Station,
    // Tolcarne Beach and Newquay Zoo; Crantock Street and the bus station are
    // still served. Same pattern in the operator's data on sampled dates to
    // May 2027; no buses 25–26 Dec or 1 Jan; bank holiday Monday 28 Dec runs
    // the weekday timetable.
    serves: ["newquay", "crantock-bus-shelter", "holywell-bay", "perranporth", "st-agnes"],
    season: null,
    frequency: "All year, about hourly Mon–Sat: 16 a day from Perranporth to Newquay, all by Crantock and all but one by Holywell Bay; 15 from Newquay to Perranporth by Crantock and Holywell Bay, plus a schoolday 14:35. Sundays 6 each way, every two hours",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/87",
    notes: "The direct bus back: Perranporth Beach Road to Newquay bus station in about an hour, by Goonhavern, Holywell Bay and Crantock. Towards Newquay, Mon–Sat from Beach Road 06:55, 07:42, 08:50, 09:45, 10:45, 11:45, 12:45, 13:45, 14:45, then 15:55 on schooldays or 15:45 on Saturdays and in school holidays, 16:45, 17:45, 18:45, 19:14, 21:14 and 23:14, reaching Holywell Bay Treguth Inn 24–26 minutes later, Crantock Bus Shelter 34–36, and Newquay bus station at 07:48, 08:35, 09:50, 10:44, 11:44, 12:44, 13:44, 14:44, 15:44, 16:44, 17:44, 18:44, 19:44, 20:07, 22:07 and 00:07. The schoolday 15:55 skips Holywell Bay but calls at Crantock, 16:21. Sundays from Beach Road 08:45, 10:46, 12:46, 14:46, 16:46 and 18:46: Holywell Bay 28 minutes later, Crantock 38, Newquay at 09:42, 11:43, 13:43, 15:43, 17:43 and 19:43. Towards Perranporth, Mon–Sat from Newquay bus station 07:25, 08:35, 09:40, 10:40, 11:40, 12:40, 13:40, 14:40, 15:50, 16:50, 17:50, 18:25, 19:30, 20:25 and 22:25, plus 14:35 on schooldays: Crantock Bus Shelter 19–24 minutes later, Holywell Bay Treguth Inn about 30, Beach Road at 08:19, 09:29, 10:34, 11:34, 12:34, 13:34, 14:34, 15:34, 16:44, 17:44, 18:44, 19:21, 20:26, 21:20 and 23:20 (the 14:35 at 15:29). The 06:10 and 06:50 from Newquay go straight down the A3075, not by Crantock or Holywell Bay, reaching Beach Road at 06:49 and 07:29. Sundays from Newquay 08:10, 10:10, 12:10, 14:10, 16:10 and 18:10: Crantock 16 minutes later, Holywell Bay 26, Beach Road at 09:00, 11:00, 13:00, 15:00, 17:00 and 19:00. From St Agnes Institute towards Perranporth, Mon–Sat 06:40, 07:27, 08:32 (08:31 on Saturdays), then 26 past each hour to 18:26, with 15:36 instead of 15:26 on schooldays, and 18:59, 20:59 and 22:59, reaching Beach Road 15–19 minutes later; Sundays 08:30, then 31 past every two hours to 18:31, Beach Road 15 minutes later. From Beach Road to St Agnes Institute is about 17 minutes: Mon–Sat 06:09, 07:06, 07:46, 08:36, 09:46, then 51 past to 15:51, 17:01, 18:01, 19:01, 19:35, 20:40, 21:33 and 23:33, plus 15:46 on schooldays; Sundays 12 past every two hours, 09:12 – 19:12. Beyond St Agnes it reaches the Royal Cornwall Hospital's Trelawny Entrance at Treliske about 22 minutes later, then Truro. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "service-85",
    number: "85",
    name: "Newquay – Crantock – Cubert – Holywell Bay – St Newlyn East – Truro",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops from the operator's own dated all-stops timetable and bustimes.org.
    // Newquay, Crantock and Holywell Bay as for service-87: Crantock Bus Shelter
    // both ways; Holywell Bay Treguth Inn (0800COC31637, OSM node 682269339)
    // and Holywell Bay Holiday Park, the bus looping Cubert – Holywell Bay –
    // Cubert. Doesn't go to Perranporth; the 86 that shares its timetable runs
    // Perranporth – Truro only. No Sundays. Bank holiday Monday 28 Dec runs; no
    // buses on 1 Jan.
    serves: ["newquay", "crantock-bus-shelter", "holywell-bay"],
    season: null,
    frequency: "All year, about hourly Mon–Sat: 11 a day from Newquay by Crantock to Holywell Bay, 13 back. No Sundays",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/85",
    notes: "With the 87, about two buses an hour Mon–Sat between Holywell Bay, Crantock and Newquay. From Newquay bus station 07:20, 08:20, 09:20, 10:20, 11:20, 12:20, 13:20, 14:20, then 14:50 on schooldays (by Tretherras School) or 15:25 on Saturdays and in school holidays, 16:30 and 17:25, reaching Crantock Bus Shelter at 07:43, 08:44, 09:42, 10:42, 11:42, 12:42, 13:42, 14:42, 15:30 or 15:47, 16:57 and 17:52, and Holywell Bay Treguth Inn at 07:53, 08:54, 09:52, 10:52, 11:52, 12:52, 13:52, 14:52, 15:41 or 15:57, 17:07 and 18:02, then Cubert, St Newlyn East and Truro. Towards Newquay from Treguth Inn 06:55, then 07:41 on schooldays or 08:05, 09:05, 10:20, 11:20, 12:20, 13:20, 14:20, 15:20, 16:06 on schooldays or 16:00, 17:15, 18:15 and 19:15; Crantock 10 minutes later; Newquay bus station at 07:30, 08:31 or 08:38, 09:38, 10:53, 11:53, 12:53, 13:53, 14:53, 15:53, 16:30 or 16:33, 17:48, 18:48 and 19:48. Doesn't reach Perranporth: for that, the 87. Times for 16 and 19 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "service-58",
    number: "58",
    name: "Newquay – Pentire – Newquay (town loop)",
    type: "bus",
    provider: "go-cornwall-bus",
    // A one-way loop, from the operator's own dated all-stops timetable: out by
    // Trenance and Mount Wise to Pentire, back by Esplanade Road and Crantock
    // Street. Pentire goes through the pentire escape record, 65 m from Pentire
    // Car Park (0800COC31499, node 682269183), and the fern-pit-landing stop
    // record, 220 m from Pentire Hotel (0800COC31500, OSM node 682269187)
    // and 250 m from Pentire Car Park. Pentire Car Park and Fistral
    // Bay Hotel (0800COC04280, no OSM node) are within 20 m of the route. The
    // fistral escape record is 660 m from the nearest stop, Jctn Pentire Rd and
    // Esplanade Rd (0800COA15430, node 1335023497), so isn't served. Newquay is
    // the bus station, as for the 56. Bank holiday Monday 28 Dec runs; no buses
    // on 1 Jan.
    serves: ["newquay", "fern-pit-landing", "pentire"],
    season: null,
    frequency: "Every two hours Mon–Sat, 6 a day. No Sundays",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/58",
    notes: "Newquay's town bus to Pentire: a way off the headland before the long walk round the Gannel. From Newquay bus station 08:50, 10:50, 12:50, 14:50, 16:50 and 18:50: Pentire Hotel California 11 minutes later, Pentire Hotel 13, Pentire Car Park 15, Fistral Bay Hotel 17, back at the bus station 26 minutes after leaving. So from Pentire Car Park to the bus station is 11 minutes, at 09:05, 11:05, 13:05, 15:05, 17:05 and 19:05. Nothing at Fistral beach itself. Times for 16 and 19 Sep 2026",
    verified: "2026-09-15",
  },
  {
    slug: "fern-pit-ferry",
    number: "Ferry",
    name: "Fern Pit ferry (Pentire – Crantock beach)",
    type: "ferry",
    provider: "fern-pit-beach-kitchen",
    // Landings from OSM: on the Newquay bank the Fern Pit Ferry terminal, way
    // 182827641, the fern-pit-landing stop record; on the Crantock bank the far
    // end of ferry way 182827653 (node 1931946926), on the sand, 190 m from the
    // crantock escape record. The way is tagged tidal and fee=yes. The
    // operator's page gives the season as from 16 May 2026 "until the tides
    // change in mid-September", so the 15 Sep end is a stand-in, not a date it
    // gives. Recheck each year.
    serves: ["fern-pit-landing", "crantock"],
    season: { from: "05-16", to: "09-15" },
    frequency: "10am – 6pm daily in season. No interval given",
    url: "https://fernpit.co.uk/",
    notes: "A short crossing of the Gannel that saves nearly 6 km of path round by the bridleway bridge above Penpol. Reached by the Fern Pit Beach Kitchen's private footpath, which with the ferry is open to the public 10am – 6pm from 16 May 2026 until the tides change in mid-September. The operator's page gives no fares, tide limits, weather arrangements or dog policy: ring 01637 873181. Not the official route, which is the tidal Penpol footbridge. Out of season or out of hours, the 58 runs from Pentire into Newquay and the 85 or 87 from Newquay to Crantock village",
    verified: "2026-09-15",
  },
  {
    slug: "service-315",
    number: "315",
    name: "St Agnes – Mount Hawke – Porthtowan – Redruth",
    type: "bus",
    provider: "hopleys-coaches",
    // Stops from the operator's dated timetable on Transport for Cornwall's site
    // and bustimes.org. Porthtowan goes through the porthtowan escape record:
    // Beach Road (0800COD41227, OSM node 682274539), 160 m from it, is called at
    // both ways; Porthtowan Turn (0800COA15428 / 15429), 560 m away, is not
    // recorded. St Agnes is the st-agnes escape record, Mount Hawke
    // mount-hawke-old-school, Redruth redruth-railway-station. Buses towards
    // Redruth go on to Barncoose Hospital (Camborne Redruth Community Hospital)
    // to set down; from Redruth they start there. Nothing at Chapel Porth:
    // Towan Cross Victory Inn (0800COD41230 / 41231) is 1.3 km from the
    // chapel-porth escape record. No Sundays; nothing on bank holiday Monday
    // 28 Dec.
    serves: ["st-agnes", "mount-hawke-old-school", "porthtowan", "redruth-railway-station"],
    season: null,
    frequency: "All year, Mon–Sat. From St Agnes through Porthtowan to Redruth 4 a day on schooldays, 5 on Saturdays and in school holidays; from Redruth through Porthtowan to St Agnes 4 a day. No Sundays",
    url: "https://www.transportforcornwall.co.uk/services/HOPE/315",
    notes: "The bus from Porthtowan both ways along this section: to St Agnes for the 87 to Perranporth, and to Redruth for the 49 to Portreath. From Redruth Railway Station (opposite side) 10:49, 13:49, 15:49 and 17:49: Porthtowan Beach Road 19 minutes later, Mount Hawke Old School 27, St Agnes Institute at 11:20, 14:24, 16:24 and 18:20, where the 87 leaves for Perranporth at 11:26, 14:26, 16:26 and 18:26, Beach Road 19 minutes after. Saturdays and school holidays also 08:49 from Redruth, Porthtowan 09:08, going no further than Mount Hawke and Goonbell. Towards Redruth from St Agnes Institute 07:30, 09:28, 12:28, 14:24 and 16:24 (Peterville a minute earlier on the first three, a minute later on the last two): Porthtowan Beach Road 07:47, 09:48, 12:48, 14:48 and 16:48, Redruth Railway Station 08:08, 10:09, 13:09, 15:09 and 17:09, then Barncoose Hospital for the minor injury unit. On schooldays the 14:24 goes no further than Mount Hawke. For Portreath, the 49 from Redruth Railway Station at 36 past: the 07:47 from Porthtowan reaches The Square at 09:05, the 09:48 at 11:05, the 12:48 at 14:05, the 16:48 at 18:05. Times for 16 and 19 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "service-304",
    number: "304",
    name: "Porthtowan – Mount Hawke – Blackwater – RCH Treliske – Truro",
    type: "bus",
    provider: "hopleys-coaches",
    // Stops from the operator's dated timetable on Transport for Cornwall's site
    // and bustimes.org. Porthtowan goes through the porthtowan escape record:
    // Beach Road (0800COD41227, OSM node 682274539), 160 m away, where buses
    // from Truro set down and buses to Truro pick up, looping by Porthtowan
    // Turn and Atlantic Way. Mount Hawke is mount-hawke-old-school. Also calls
    // at RCH Treliske Trelawny Entrance, Truro railway station and Truro bus
    // station Stand A (0800TRY38422); no Truro record, being nowhere near the
    // path. No Sundays; nothing on bank holiday Monday 28 Dec.
    serves: ["porthtowan", "mount-hawke-old-school"],
    season: null,
    frequency: "All year, Mon–Sat. Mon–Fri 9 a day each way, about hourly; on schooldays one from Truro stops at Mount Hawke. Saturdays 5 each way, every two hours. No Sundays",
    url: "https://www.transportforcornwall.co.uk/services/HOPE/304",
    notes: "Porthtowan to the Royal Cornwall Hospital at Treliske in 29–40 minutes and Truro bus station in 40–52, inland by Mount Hawke and Blackwater. Another way back to Perranporth: change at Treliske's Trelawny Entrance for the 87, which leaves there for St Agnes and Perranporth at about 4 past the hour Mon–Sat, 41 minutes to Beach Road. Mon–Fri from Porthtowan Beach Road 07:48 on schooldays or 07:53 in school holidays, then 09:05, 10:05, 11:05, 12:05, 13:05, 14:05, 15:35 and 16:50: Treliske at 08:28, 09:39, 10:39, 11:39, 12:34, 13:34, 14:39, 16:10 and 17:25, Truro bus station at 08:40, 09:50, 10:50, 11:50, 12:45, 13:45, 14:50, 16:21 and 17:36. Saturdays 08:00, 10:00, 12:00, 14:00 and 16:00: Treliske 33 minutes later, Truro bus station 43. Towards Porthtowan Mon–Fri from Truro bus station 09:15, 10:15, 11:15, 12:15, 13:15, 14:15, 15:15, 16:30 and 17:45, Beach Road at 10:02, 11:02, 12:02, 13:02, 14:02, 15:02, 16:02, 17:24 and 18:32; on schooldays the 14:15 stops at Mount Hawke. Saturdays 09:10, 11:10, 13:13, 15:10 and 17:45, Beach Road at 09:57, 11:57, 14:00, 15:57 and 18:32. Times for 16 and 19 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "service-49",
    number: "49",
    name: "Camborne – Pool – Portreath – Illogan – Redruth (48, 49, 49A)",
    type: "bus",
    provider: "go-cornwall-bus",
    // One timetable on the operator's site for the 48, 49 and 49A, which run
    // the same way through Portreath; entered once. Stops from the operator's
    // own dated timetable and bustimes.org. Portreath goes through the portreath
    // endpoint: The Square (0800COD41140, OSM node 682273904; opposite
    // 0800FWX38443, node 682277916) is 5–20 m from it and called at both ways,
    // the same minute as the timetable's Beach car park timing point. Redruth
    // is the redruth-railway-station stop record. The 49 and 49A run Mon–Sat;
    // the 48 runs the late evening journeys and all of Sunday. Nothing from
    // Portreath goes to Porthtowan, St Agnes or Perranporth. Bank holiday
    // Monday 28 Dec runs; no buses 1 Jan.
    serves: ["portreath", "redruth-railway-station"],
    season: null,
    frequency: "All year. Mon–Sat about hourly from Portreath to Redruth, 06:54 – 18:54, then 20:13, 22:13 and 00:13; back from Redruth at 36 past, 06:36 – 17:36, then 18:35, 20:35 and 22:35. Sundays 5 each way, every two and a half hours",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/49",
    notes: "Portreath's bus: The Square to Redruth, opposite the station, in 33 minutes by Illogan; the other way it goes by Pool to Camborne bus station. Nothing from Portreath links to Perranporth, so the way back is a change at Redruth. By St Agnes, Mon–Sat: 09:54 from The Square, Redruth 10:27, the 315 at 10:49 to St Agnes Institute 11:20, the 87 at 11:26, Perranporth Beach Road 11:45. Likewise 12:54, Redruth 13:27, the 315 at 13:49, St Agnes 14:24, the 87 at 14:26, Perranporth 14:45; 14:54, Redruth 15:27, the 315 at 15:49, St Agnes 16:24, the 87 at 16:26, Perranporth 16:45 (on schooldays the 14:54 stops short of Redruth: the 49A at 15:18 reaches it at 15:43); 16:54, Redruth 17:27, the 315 at 17:49, St Agnes 18:20, the 87 at 18:26, Perranporth 18:45. The two-minute changes at St Agnes are lost if the 315 runs late, and the next 87 is an hour on. By Truro, later: the 14 or 18 from the same Redruth stop to Truro Railway Station in about 30 minutes, then the 87 from there, about 50 minutes to Perranporth; the 18:54 from Portreath connects with the 19:55 from Redruth and the 20:30 87, Perranporth 21:14, and the 20:13 with the 20:50 and the 22:30, Perranporth 23:14. Sundays, by Truro only: the 48 from The Square at 09:18, 11:48 or 14:18, Redruth 09:45, 12:15 or 14:45, the 18 at 10:00, 12:30 or 15:00, and the 87 from Truro Railway Station at 12:00, 14:00 or 16:00, Perranporth 12:46, 14:46 or 16:46. Towards Portreath, Mon–Sat from Redruth Railway Station at 36 past, The Square 24–29 minutes later; on schooldays the 14:36 doesn't reach Portreath and there's no 15:36, but a 49A from Barncoose Hospital arrives at 15:35. Sundays from Redruth 07:30, 10:00, 12:30, 15:00 and 17:30, The Square 23 minutes later. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "service-14",
    number: "14",
    name: "St Ives – Carbis Bay – Lelant – Hayle – Gwithian – Camborne – Redruth – Truro",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops from the operator's own dated all-stops timetable, which it shares
    // with the 18, and bustimes.org. St Ives is the st-ives-station stop record,
    // through the Harbour Hotel stops (0800COD40446 / 40447), called at both
    // ways; buses start and finish at The Terrace (0800COA16554). Carbis Bay
    // stops are all up on the A3074: Boskerris Road (0800COD40455, OSM node
    // 682270876; 0800COD40456) is 440 m from the carbis-bay escape record, so
    // it isn't served. Lelant is lelant-station, through Village Hall
    // (0800COD40485 / 40486), 280 m. Lelant Saltings goes through the
    // lelant-saltings escape record: Woodlands on Abbey Hill (0800COD40487, OSM
    // node 682270943; 0800COD40488, node 682270946) is 140–155 m from it. Hayle
    // goes through the hayle endpoint: Viaduct (0800COD40507, node 682271007),
    // towards Truro, 80 m; Foundry Square (0800COD40508, node 682271010),
    // towards St Ives, 70 m. Gwithian goes through the gwithian escape record,
    // the Red River Inn stops. Pool isn't recorded. Redruth is
    // redruth-railway-station (towards Hayle the
    // bus uses 0800COD41085, no OSM node found). Upton Towans and Gwithian
    // Towans stops, 510–920 m from the route, aren't recorded. The 18
    // (Penzance – St Erth – Hayle – Connor Downs – Camborne – Truro) isn't
    // entered: it misses St Ives, Lelant and Gwithian and adds only
    // Hayle – Camborne journeys, given in the notes. 13 Sep – 4 Oct 2026, 7pm –
    // 4am Sun–Thu nights, resurfacing in Hayle stops the 14 and 18 serving
    // stops between Foundry Square and the Lidl roundabouts. No buses 25–26 Dec
    // or 1 Jan; bank holiday Monday 28 Dec runs.
    serves: ["st-ives-station", "lelant-station", "lelant-saltings", "hayle", "gwithian", "redruth-railway-station"],
    season: null,
    frequency: "All year, about hourly. Mon–Fri 16 a day each way between St Ives and Hayle, Saturdays 14, Sundays 10; nearly all run on by Gwithian to Camborne, Pool and Redruth",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/14",
    notes: "The direct bus on section 20 and half the way back on section 19. Hayle to St Ives: from Foundry Square Mon–Fri 06:23, 07:16, 08:17, 09:21, 10:31, then 34 past 11:34 – 14:34, 15:38 on schooldays or 15:34, 16:34, 17:19, 18:14, 19:16, 19:58 and 21:56: Lelant Woodlands 4–5 minutes later, St Ives The Terrace 16–21. Saturdays the same from 08:17, with 15:34. Sundays 4 past, 09:04 – 18:03, The Terrace 18 minutes later. St Ives to Hayle: from The Terrace Mon–Fri 06:45, 07:50, 09:10, then 10 past 10:10 – 15:10, 15:20 on schooldays (to Camborne only), 16:05, 17:05, 18:05, 18:40, 20:40 and 22:40: Lelant Woodlands 12–15 minutes later, Hayle Viaduct at 07:04, 08:09, 09:30, then 30 past to 15:30, 15:43, 16:28, 17:27, 18:24, 18:58, 20:56 and 22:56. Saturdays the same from 07:50, no 15:20. Sundays 40 past, 09:40 – 18:40, Hayle 17 minutes later. Nothing from Hayle reaches Portreath: change to the 49 at Pool Cornwall College, across Trevenson Road, or at Camborne bus station. Mon–Sat from Hayle Viaduct the 14 at 30 past, or the 18 at 3 or 7 past, reaches Pool in time for the 49 at 37 past, Portreath The Square at 54 past: the 09:30 reaches Pool at 10:17, the 49 leaves at 10:37, Portreath 10:54; likewise hourly to the 17:27, Pool 18:21, Portreath 18:54. Earliest the 18 at 06:19 to Camborne bus station 06:41 and the 49 at 07:15 (07:20 Saturdays), Portreath 07:49 (07:54). Evenings the 48: the 18:58 from Hayle, Pool 19:40, the 48 at 19:59, Portreath 20:13; the 20:56, 21:35, 21:59, 22:13; the 22:56, 23:35, 23:59, 00:13. Sundays: the 18 at 08:09 from Hayle, Pool 08:45, the 48 at 09:04, Portreath 09:18; the 18 at 10:39, 11:15, 11:34, 11:48; the 14 at 12:57, 13:45, 14:04, 14:18; the 18 at 15:39, 16:15, 16:34, 16:48; the 14 at 17:57, 18:45, 19:04, 19:18. The other way, Mon–Sat the 49 from Portreath The Square at 5 past, 09:05 – 18:05, reaches Pool 20 minutes later for the 14 at 49 past, Hayle Foundry Square at 31–34 past the next hour, or the 18 at 19 past, Hayle at 4 past; the 18:05 connects with the 18 at 18:30, Hayle 19:12. Earliest the 49A at 07:00, Pool 07:20, the 14 at 07:30, Hayle 08:17. Evenings the 48 at 18:54, 20:54 and 22:54 to Camborne bus station, 30 minutes, then 19:34, 21:35 or 23:35, Hayle 19:58, 21:56 or 23:54. Sundays the 48 at 07:53, 10:23, 12:53, 15:23 and 17:53, Hayle 09:04, 11:32, 14:04, 16:29 and 19:03. From Gwithian Red River Inn towards Hayle, Mon–Fri 06:09, 07:00, 08:00, 09:05, 10:17, 19 past 11:19 – 14:19, 15:19 in school holidays, 16:19, 17:04, 18:00, 19:02, 19:45 and 21:46, Hayle Foundry Square 10–15 minutes later; Saturdays from 08:00, with 15:19; Sundays 48 past, 08:48 – 17:48. Towards Camborne and Pool, Mon–Fri 07:19, 08:24, 09:45, 45 past to 15:45, 15:58 on schooldays, 16:45, 17:46, 18:38, 19:12, 21:10 and 23:10, Pool about 30 minutes later; Saturdays from 08:24; Sundays 15 past, 10:15 – 19:15. St Ives Minibus Services' 11 also runs St Ives – Carbis Bay – Lelant Woodlands – Hayle every 45 minutes, about 10:00 – 17:30, daily until late October, on bustimes.org; not confirmed with the operator. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "service-17",
    number: "17",
    name: "St Ives – Carbis Bay – Lelant – St Erth – Penzance",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops from the operator's own dated all-stops timetable and bustimes.org.
    // Between St Ives and Lelant the same stops as the 14: st-ives-station
    // through Harbour Hotel (0800COD40446 / 40447), lelant-station through
    // Village Hall (0800COD40485 / 40486), lelant-saltings through Woodlands
    // (0800COD40487 / 40488). St Erth is the st-erth-station stop record,
    // through the Interchange (0800COA16098), 40 m. Doesn't go to Hayle. Ends
    // at the penzance-bus-station stop record. No buses 25–26 Dec or 1 Jan; bank holiday Monday 28 Dec runs.
    // Every journey calls at Long Rock Mexico Inn (0800COD40532 / 40531), 270–340 m
    // from the long-rock escape record, 7–8 minutes before Penzance.
    serves: ["st-ives-station", "lelant-station", "lelant-saltings", "st-erth-station", "long-rock", "penzance-bus-station", "penzance"],
    season: null,
    frequency: "All year. About hourly Mon–Sat, 16–17 a day each way; Sundays 8 each way, every two hours",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/17",
    notes: "With the 14, about two buses an hour Mon–Sat between St Ives and Lelant, but not to Hayle: at St Erth Interchange, by the station, change to the 18, hourly every day, Hayle Viaduct 6–7 minutes, or a main-line train. Towards St Erth, Mon–Fri from St Ives The Terrace 07:00, 07:25, 08:15, then on the hour 09:00 – 15:00, 16:25, 17:05, 18:00, 19:15, 21:15 and 23:15: Lelant Woodlands 12–18 minutes later, St Erth Interchange 16–23, Penzance bus station about 40. Saturdays the same without the 07:00, and with 16:00. Towards St Ives, Mon–Sat from St Erth Interchange 07:06, 07:52, 23 past 08:23 – 13:23, 14:26, 15:28 and 16:30 (15:59 and 16:40 on schooldays), 17:30, 18:30, 19:00, 20:50 and 22:50, plus 06:35 Mon–Fri: Lelant Woodlands a minute later, St Ives The Terrace 13–18 minutes after St Erth. Sundays from St Ives 25 past every two hours, 09:25 – 21:25, and 23:30, Lelant Woodlands 15 minutes later, St Erth 19; from St Erth 2 past every two hours, 09:02 – 19:02, then 21:05 and 23:05, The Terrace 14–18 minutes later. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "st-ives-bay-line",
    number: "Train",
    name: "St Ives Bay Line (St Erth – Lelant Saltings – Lelant – Carbis Bay – St Ives)",
    type: "train",
    provider: "great-western-railway",
    // Stations and times from GWR's own timetable K5, 7 September to 12 December
    // 2026. St Erth is the st-erth-station stop record, Lelant lelant-station,
    // St Ives st-ives-station. Lelant Saltings goes through the lelant-saltings
    // escape record: the station (OSM node 262345559, CRS LTS) is 60 m from it.
    // Carbis Bay goes through the carbis-bay escape record: the station (OSM
    // node 262345520, CRS CBB) is 170 m up the hill from it. The line doesn't
    // reach Hayle, one stop up the main line from St Erth; main-line trains
    // aren't entered, and GWR's K1 main-line timetable couldn't be read here.
    // The May – September timetable wasn't checked. Sunday columns marked "runs
    // until 13 September" are left out.
    serves: ["st-erth-station", "lelant-saltings", "lelant-station", "carbis-bay", "st-ives-station"],
    season: null,
    frequency: "All year, every day, about half-hourly. Mon–Fri 28 trains each way, Saturdays 26, Sundays 19. Every train calls at Carbis Bay; roughly one in two at Lelant, on request; Lelant Saltings one or two a day",
    url: "https://www.gwr.com/-/media/gwr-sc-website/files/timetables/september-26-december-26/K5-train-times-7-September-to-12-December-2026.pdf",
    notes: "Twelve minutes end to end: St Ives to Carbis Bay 3 minutes, Lelant 8, Lelant Saltings 10, St Erth 12–13. From St Ives, Mon–Fri 07:32, 08:07, 09:02, then about every half hour 10:03 – 19:34, then 20:05, 20:34, 21:05, 21:37 and 22:48; Saturdays 07:30, 08:04, 09:04, about every half hour 09:37 – 17:37, then 18:28, 19:22, 20:20, 20:57, 21:37 and 22:08; Sundays 09:31, 10:04, about every half hour 11:03 – 18:03, then 19:03 and 19:48. From St Erth, Mon–Fri 07:07, 07:50, 08:38, 09:38, then 18 and 48 past 10:18 – 18:48, 19:20, 19:50, 20:20, 20:50, 21:20 and 22:30; Saturdays 07:02, 07:47, 08:48, 09:23, about every half hour 09:52 – 17:23, then 18:08, 19:07, 20:05, 20:43, 21:22 and 21:53; Sundays 09:10, 09:48, 18 and 48 past 10:48 – 17:48, 18:30 and 19:30. Lelant, on request, towards St Erth Mon–Fri 07:40, 08:15, 09:10, 11:10, 13:10, 15:10, 16:11, 17:39, 18:41, 19:42, 20:42, 21:45 and 22:56; towards St Ives 07:10, 07:53, 08:40, 10:20, 12:20, 14:20, 15:20, 16:50, 17:50, 18:51, 19:53, 20:52 and 22:32. Saturdays towards St Erth 07:37, 08:11, 09:11, 11:12, 13:13, 15:13, 17:14, 18:35, 19:29, 21:04, 21:44 and 22:15; towards St Ives 07:04, 07:50, 08:50, 10:23, 12:24, 14:24, 15:24, 16:54, 18:10, 19:09, 20:07, 21:24 and 21:55. Sundays towards St Erth 11:11, 12:11, 14:41, 16:41 and 19:56; towards St Ives 09:14, 10:51, 14:21, 17:21 and 19:33. Lelant Saltings towards St Ives only 07:52 Mon–Fri, 07:49 Saturdays, 09:12 and 12:20 Sundays; towards St Erth only 09:12 Mon–Fri, 09:14 Saturdays, 19:58 Sundays. Otherwise, from Lelant Saltings, the 14 and 17 buses stop 150 m up Abbey Hill at Lelant Woodlands. For Hayle, change at St Erth to a main-line train or the 18 bus. Ticket machines at St Ives and St Erth only. GWR warns that engineering work can change trains, especially at weekends: GWR.com/check. Times for 7 Sep – 12 Dec 2026",
    verified: "2026-09-15",
  },
  {
    slug: "service-7",
    number: "7",
    name: "St Ives – Zennor – Gurnard's Head – Pendeen – St Just – Land's End (7, 7A)",
    type: "bus",
    provider: "go-cornwall-bus",
    // 26 July – 31 August 2026 only, daily including bank holidays, on the
    // operator's own PDF; out of season Transport for Cornwall's service page
    // has no timetable for any date. In 2025 it also ran in May half term
    // (24 May – 1 Jun); the 2026 leaflet names only the summer holidays. Set
    // afresh each year, so recheck before relying on it. The only bus along
    // the B3306 between Gurnard's Head and Pendeen, and the only one linking
    // both ends of section 21. One loop from Penzance: the 7 goes by St Erth
    // to St Ives, round the coast to Land's End and back to Penzance as the
    // 1 or 1A; the 7A the other way. Timing points only, so stops are those:
    // St Ives is st-ives-station, through St Ives Malakoff (0800COD40445, OSM
    // node 682270865), 255 m, and The Terrace (0800COA16554), 215 m. Zennor
    // Turn (0800COD40286, OSM node 682270546; opposite 0800COD40287) goes
    // through the zennor escape record, Gurnards Head Hotel (0800COD40282, OSM
    // node 1348364579) through treen-gurnards-head, Boscaswell Stores through
    // pendeen-boscaswell-stores. St Just Bus Station (0800COD40230) goes
    // through the st-just escape record, where buses wait five minutes. Sennen
    // Cove (0800COD40087) is the sennen-cove endpoint. Geevor Tin Mine
    // (0800COD40204 / 40211) and Land's End Airport (0800COD40097 / 40098),
    // both timing points, touch no record. Not in serves until confirmed:
    // "Rosemurgy", a timing point in Rosemergy, which has two stop pairs, Long Carn
    // (0800COD40303 / 40302), 40 m from the bosigran car park, and Carn Galver
    // Mine (0800COD40304 / 40305), 1 km on by the Carn Galver car park; the
    // leaflet pictures Carn Galver engine house, so probably the latter. And
    // Morvah Telephone Box (0800COD40187 / 40188), on the road between
    // Rosemurgy and Pendeen but not a timing point. The all-stops view that
    // would settle both isn't published out of season.
    serves: ["st-ives-station", "zennor", "treen-gurnards-head", "pendeen-boscaswell-stores", "st-just", "sennen-cove", "lands-end"],
    season: { from: "07-26", to: "08-31" },
    frequency: "Summer holidays only, daily: 4 a day each way between St Ives and Pendeen, about every two hours, and on by St Just to Sennen Cove and Land's End",
    url: "https://passenger-line-assets.s3.eu-west-1.amazonaws.com/gocornwallbus/TFCN/7-timetable-20260726-e3f1775d.pdf",
    notes: "The one-way day on section 21, in season: St Ives to Pendeen 40 minutes by the coast road. From St Ives Malakoff Mon–Sat 11:05, 13:05, 15:05 and 17:35: Zennor Turn 19 minutes later, Gurnards Head Hotel 25, Rosemurgy 31, Pendeen Boscaswell Stores 40, then St Just and Land's End. Sundays and bank holidays 11:30, 13:30, 15:30 and 17:30, Pendeen 40 minutes later. Back from Pendeen Boscaswell Stores Mon–Sat 11:38, 13:38, 15:38 and 17:38: Rosemurgy 8 minutes later, Gurnards Head Hotel 13, Zennor Turn 18, St Ives 41, at the Malakoff or The Terrace. Sundays and bank holidays 12:13, 14:13, 16:13 and 18:13, St Ives at 12:54, 15:00, 16:54 and 19:00. Also Mon–Sat from Penzance bus station 10:10 and 14:10 by St Erth to St Ives, 46 minutes, and on from The Terrace at 14:25 and 18:25 to St Erth and Penzance. The one-way day on section 22 too: Pendeen to Sennen Cove in 39 minutes by St Just. From Pendeen Boscaswell Stores Mon–Sat 11:45, 13:45, 15:45 and 18:15: Geevor Tin Mine 2 minutes later, St Just 12, Land's End Airport 24, Sennen Cove 39, Land's End 49. Sundays and bank holidays 12:10, 14:10, 16:10 and 18:10, Sennen Cove 39 minutes later. Back from Sennen Cove, Mon–Sat 11:06, 13:06, 15:06 and 17:06: St Just 17 minutes later, Pendeen Boscaswell Stores 32. Sundays and bank holidays 11:41, 13:41, 15:41 and 17:41, Pendeen 32 minutes later. Dates for 2026",
    verified: "2026-09-15",
  },
  {
    slug: "service-16a",
    number: "16A",
    name: "St Ives – Zennor – Gurnard's Head – Newmill – Penzance",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops from the operator's own dated all-stops timetable, shared with the
    // 16, and bustimes.org. St Ives is st-ives-station, through the Harbour
    // Hotel stops (0800COD40446 / 40447), called at both ways. Zennor goes
    // through the zennor escape record: Zennor Turn on the B3306 (0800COD40286,
    // OSM node 682270546, towards St Ives; opposite 0800COD40287, towards
    // Penzance — OSM node 682270542 carries 0800COD40285, a code NaPTAN and
    // bustimes.org don't have). Gurnard's Head goes through the
    // treen-gurnards-head escape record: Gurnards Head Hotel, opposite
    // (0800COD40282, OSM node 1348364579), used both ways; the E-bound stop
    // 0800COD40281 has no services. Turns inland at Gurnard's Head for Newmill
    // and Penzance; nothing goes on to Morvah. The 16 (Penzance – Nancledra –
    // Halsetown – St Ives, hourly Mon–Sat) isn't entered: it touches no other
    // location. No Sunday buses. No buses 25–26 Dec or 1 Jan; bank holiday
    // Monday 28 Dec runs.
    serves: ["st-ives-station", "zennor", "treen-gurnards-head", "penzance-bus-station"],
    season: null,
    frequency: "All year, Mon–Sat. 3–4 a day each way; no Sundays",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/16A",
    notes: "The bus for Zennor and Gurnard's Head, and out of the summer the only one on this stretch. Towards St Ives from Gurnards Head Hotel 09:47, 12:47, 15:47 and 18:02: Zennor Turn 5 minutes later, St Ives Harbour Hotel 26. On schooldays the afternoon one leaves Gurnard's Head at 15:59 and ends at Halsetown Inn at 16:18, 2 km short of St Ives. Towards Penzance from St Ives Harbour Hotel 09:35 and 12:35, and 15:35 on Saturdays and in school holidays: Zennor Turn 21 minutes later, Gurnards Head Hotel 29, Penzance bus station 53. On schooldays also 07:30 from Harbour Hotel, Zennor 07:51, Gurnard's Head 07:59, Penzance 08:37 by Mounts Bay Academy; Saturdays and holidays instead 07:39 from Halsetown Inn, Zennor 07:51, Penzance 08:23. From Penzance bus station 09:25, 12:25, 15:25 (15:35 on schooldays) and 17:40, Gurnard's Head 22–24 minutes later. For Morvah or Pendeen change at Penzance to the 4: the 12:35 from St Ives reaches Penzance at 13:28 for the 13:50, Morvah 14:22, Pendeen 14:27. Times for 16 and 19 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "service-4",
    number: "4",
    name: "Penzance – Madron – Morvah – Pendeen – St Just (4, 4A, 4B)",
    type: "bus",
    provider: "go-cornwall-bus",
    // One timetable on the operator's site for the 4, 4A and 4B, entered once.
    // Stops from its dated all-stops timetable and bustimes.org. The 4 runs
    // Penzance – Madron – Lanyon Quoit – Morvah – Pendeen – St Just and back,
    // hourly Mon–Sat; the 4A goes the direct way by Newbridge to St Just,
    // only a few journeys starting or ending at Pendeen; the 4B runs evenings
    // and Sundays by St Just and Pendeen, not Morvah. Morvah goes through the
    // morvah escape record: Telephone Box (opposite, 0800COD40188, OSM node
    // 682270443, towards St Just; E-bound 0800COD40187, NaPTAN 50.16144,
    // -5.63940, no OSM node, towards Penzance). Pendeen is the
    // pendeen-boscaswell-stores stop record. Doesn't reach Bosigran: from
    // Morvah it turns inland for Men-an-tol and Madron; the Long Carn and
    // Waterloo stops on the B3306 have no services. Calls at Penzance, West
    // Cornwall Hospital about 6 minutes before the bus station, the
    // penzance-bus-station record. St Just is the st-just escape record, St
    // Just Terminus (0800COD40230, OSM node 682275118), where every 4, 4A and
    // 4B calls. Between Pendeen and St Just the 4 and 4B call at Trewellard
    // Arms (0800COD40212, OSM node 8756158677; 0800COD40213, node 8756158678)
    // and Botallack Queen's Arms (0800COD40221; 0800COD40222, node
    // 3768751168), 1.4 km and 650 m by road from the levant and botallack car
    // parks, too far to serve through them. On schooldays the 15:00 towards
    // Pendeen starts at Cape Cornwall School instead. No buses 25–26 Dec or 1 Jan;
    // bank holiday Monday 28 Dec runs.
    serves: ["pendeen-boscaswell-stores", "morvah", "st-just", "penzance-bus-station"],
    season: null,
    frequency: "All year. Mon–Sat hourly by Morvah, about 06:40 – 18:20 from Pendeen and 08:50 – 17:50 from Penzance, and hourly between St Just and Pendeen, 12 minutes, then 3–4 evening journeys by St Just. Sundays 5 each way by St Just, every two hours; no Sunday bus at Morvah",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/4",
    notes: "Pendeen's bus, and the way back to St Ives out of the summer, changing at Penzance: nothing runs along the coast road between Morvah and Gurnard's Head. Mon–Sat from Pendeen Boscaswell Stores 06:38, 07:48, then 18 past, 09:18 – 18:18 (15:33 not 15:18 on schooldays): Morvah 5 minutes later, Penzance bus station 33, at 51 past. The 17 leaves Penzance on the hour, St Ives Harbour Hotel 38–45 past. Mon–Fri the 09:18 connects with the 10:00, Harbour Hotel 10:38, and hourly to the 13:18, 14:00, 14:41; then 14:18 with the 15:30, 16:14; 15:33 (schooldays) with the 16:10, 16:55; 16:18 with the 17:00, 17:45; 17:18 with the 18:00, 18:45; 18:18 with the 20:30, 21:01. Saturdays the 14:18 and 15:18 connect with the 15:00 and 16:00, Harbour Hotel 15:44 and 16:45. The 16 also leaves Penzance at 10:30, 11:30, 13:30, 14:30 and 17:30, Harbour Hotel 43 minutes later by Nancledra. Evenings Mon–Sat the 4B from Boscaswell Stores (opposite) 19:22 and 20:27, by St Just, Penzance 20:09 and 21:14, for the 17 at 20:30 and 22:30, St Ives 21:01 and 23:01. Sundays the 4B from Boscaswell Stores at 2 past even hours, 10:02 – 18:02, Penzance 46 minutes later; the 17 leaves at 40 past even hours to 18:40, then 20:45, so each waits nearly two hours: the 12:02 reaches St Ives Harbour Hotel at 15:17, the 16:02 at 19:17, the 18:02 at 21:17. Towards Pendeen Mon–Sat from Penzance bus station at 50 past, 08:50 – 17:50: Morvah 32 minutes later, Boscaswell Stores 37, St Just 54; from St Ives the 16 at 07:30 from Harbour Hotel reaches Penzance in time for the 08:50. Evenings the 4A at 18:30 and 4B at 19:40, 21:40 and 23:20 by St Just, Boscaswell Stores 39–41 minutes later. Sundays the 4B from Penzance at 10 past odd hours, 09:10 – 17:10, Boscaswell Stores 44 minutes later. St Just to Pendeen, Mon–Sat, the 4 from St Just Terminus on the hour, 09:00 – 18:00, and 06:20 and 07:30 (on schooldays the 15:00 starts at Cape Cornwall School at 15:10): Botallack Queen's Arms 4 minutes later, Trewellard Arms 9, Boscaswell Stores 12. Pendeen to St Just from Boscaswell Stores (opposite) at 32 past, 09:32 – 18:32: Trewellard Arms 2 minutes later, Queen's Arms 7, St Just 12. Earlier the 4A at 07:27 Mon–Fri, St Just 07:40, and 08:07 on schooldays or 08:17 otherwise, St Just 08:28 or 08:30. Evenings from St Just 18:59, 20:10, 22:10 and 23:50, Boscaswell Stores 9–12 minutes later; from Boscaswell Stores 19:22, 20:27 and 22:27, St Just 13 minutes later. Sundays the 4B from St Just at 42 past odd hours, 09:42 – 17:42, Boscaswell Stores 12 minutes later; from Boscaswell Stores at 2 past even hours, St Just 13 minutes later. Back to Pendeen from Sennen Cove on section 22, out of the summer: the 1 to Penzance, then the 4. Mon–Sat the 1 from Sennen Cove 10:11, 12:11, 14:11 and 16:11, Penzance bus station 11:13, 13:13, 15:13 and 17:13, for the 4 at 11:50, 13:50, 15:50 and 17:50, Boscaswell Stores 12:27, 14:27, 16:27 and 18:27; the 18:11, Penzance 19:13, for the 4B at 19:40 by St Just, Boscaswell Stores 20:19. Earlier the 1A at 06:40, or the 1 at 07:23 on schooldays and 07:35 on Saturdays and school holidays, reaches Penzance by 08:37 for the 08:50, Boscaswell Stores 09:27. Sundays the 1 from Sennen Cove 08:31, 11:31 and 15:31, Penzance 09:22, 12:22 and 16:22, for the 4B at 11:10, 13:10 and 17:10, Boscaswell Stores 11:54, 13:54 and 17:54; the 19:31 has no connection. The other way, Mon–Sat the 4 from Boscaswell Stores 06:38, Penzance 07:11, the 1 at 07:35, Sennen Cove 08:37; 07:48, Penzance 08:21–08:28, the 09:25, Sennen Cove 10:29; 10:18, 12:18, 14:18 or 16:18, Penzance 33 minutes later, the 1 at 11:25, 13:25, 15:25 (15:30 on schooldays) or 17:25, Sennen Cove 12:29, 14:29, 16:29 (16:34) or 18:29. Sundays the 4B from Boscaswell Stores 10:02 or 14:02, Penzance 10:48 or 14:48, the 1 at 12:10 or 16:10, Sennen Cove 12:59 or 16:59. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-15",
  },
  {
    slug: "service-1",
    number: "1",
    name: "Penzance – Newlyn – Lamorna Turn – St Buryan – Sennen Cove – Land's End",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from the operator's own dated timetable, "1A, 1 (From Sun
    // 26th Jul 2026)", and Transport for Cornwall's dated pages for 19, 20 and 23
    // Sep and 4 Nov 2026, which match it. The 1 and 1A are one timetable: both run
    // Penzance – Newlyn – Sheffield – Lamorna Turn – St Buryan, then the 1 goes by
    // Crows-an-Wra to Sennen Cove and Land's End and the 1A by Treen and Porthcurno.
    // Sennen Cove is the sennen-cove endpoint: the Cove Hill stop (NaPTAN
    // 0800COD40087, OSM node 682270231), 220 m from it, where buses stand and call
    // both ways; 0800COA15697 beside it has no services. Land's End goes through
    // the lands-end escape record: Car Park (0800COD40076, OSM node 682270224),
    // 150 m; 0800COY38487 (node 682275114) has no services. Lamorna is the
    // lamorna-turn stop record, 1.6 km up the valley road from the cove. Penzance
    // is penzance-bus-station, Stand B. Also calls at Sennen First and Last Inn and
    // Sunny Corner Lane, not recorded. The 8 (Long Rock – Penzance – St Just) passes
    // Lamorna Turn and Sennen's Sunny Corner Lane once each way on schooldays only
    // and isn't entered. No buses 25–26 Dec or 1 Jan; the timetable gives Sunday
    // times on bank holidays, but Transport for Cornwall's page for bank holiday
    // Monday 28 Dec shows Mon–Sat times. bustimes.org showed a Chywoone Hill,
    // Newlyn closure on 15 Sep 2026 with weekday diversions by St Buryan.
    // Newlyn goes through the newlyn escape record: Newlyn Bridge towards Lamorna
    // (0800COD40042), 280 m, and towards Penzance (0800COD40124), 330 m. Penzance
    // is also the penzance escape record.
    serves: ["sennen-cove", "lands-end", "lamorna-turn", "newlyn", "penzance-bus-station", "penzance"],
    season: null,
    frequency: "All year. Every two hours Mon–Sat, 6 a day each way through Sennen Cove; Sundays 3–4 each way, every four hours. With the 1A, a bus about hourly between Lamorna Turn and Land's End",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/1",
    notes: "The direct bus back on section 23: Lamorna Turn to Sennen Cove in 27 minutes, inland by St Buryan. Walk up the valley road from the cove to the B3315, 1.6 km. Towards Sennen Cove, Mon–Sat from Lamorna Turn 08:07, 09:59, 11:59, 13:59, 15:59 on Saturdays and school holidays or 16:04 on schooldays, and 17:59: Sennen Cove 08:34, 10:26, 12:26, 14:26, 16:26 or 16:31, 18:26; Land's End 14 minutes after Sennen Cove. From Penzance bus station 07:35, 09:25, 11:25, 13:25, 15:25 or 15:30, 17:25. In the other hours the 1A from Lamorna Turn reaches Land's End at 45 past, and the 1 leaves there at 10:00, 12:00, 14:00, 16:00 and 18:00 for Sennen Cove, 9 minutes; the last 1A, 18:57, reaches Land's End at 19:45 with no bus on, so walk the path back, about 1.6 km. Sundays from Lamorna Turn 08:33, 12:33 and 16:33, Sennen Cove 08:57, 12:57 and 16:57; or the 1A at 07:29, 10:29, 14:29 or 18:29 to Land's End and the 1 at 08:20, 11:20, 15:20 or 19:20, Sennen Cove 9 minutes later. Towards Lamorna and Penzance, Mon–Sat from Sennen Cove 07:23 on schooldays or 07:35 on Saturdays and school holidays, 10:11, 12:11, 14:11, 16:11 and 18:11, Land's End 11 minutes earlier: Lamorna Turn 07:48 or 08:00, 10:36, 12:36, 14:36, 16:36, 18:36; Penzance 08:36, 11:13, 13:13, 15:13, 17:13, 19:13. An early 1A leaves Sennen Cove at 06:40 by Porthcurno, Lamorna Turn 07:24. Sundays from Sennen Cove 08:31, 11:31 and 15:31, Lamorna Turn 08:56, 11:56 and 15:56, Penzance 09:22, 12:22, 16:22; the 19:31 goes by Drift and misses Lamorna Turn, Penzance 19:58",
    verified: "2026-09-15",
  },
  {
    slug: "service-1a",
    number: "1A",
    name: "Penzance – Newlyn – Lamorna Turn – St Buryan – Treen – Porthcurno – Land's End",
    type: "bus",
    provider: "go-cornwall-bus",
    // Same dated timetable as the 1. Porthcurno goes through the porthcurno escape
    // record: Car Park (NaPTAN 0800COA15698), 70 m, where the bus stands a few
    // minutes; OSM node 682270215, "Porthcurno Terminal", is 0800COD40068 beside it,
    // which bustimes.org lists with no services. The Valley (0800COD40066 / 40067),
    // up the road, isn't recorded. Treen is the treen-st-levan escape record, at
    // the bus shelter. Land's End is lands-end, through Car Park (0800COD40076).
    // Lamorna is lamorna-turn, Penzance penzance-bus-station (Stand B). Nothing
    // reaches Porthgwarra or Penberth: Polgigga Tresco (0800COD40072 / 40073), 2 km
    // from Porthgwarra's car park, isn't recorded, and Treen is 730 m from
    // Penberth's. One 1A starts from Sennen Cove, 06:40 Mon–Sat; sennen-cove isn't
    // in serves, so the site measures this bus from Land's End. The 20:30 and 21:55
    // from Penzance go only as far as Newlyn. No buses 25–26 Dec or 1 Jan.
    // Newlyn goes through the newlyn escape record, Newlyn Bridge (0800COD40042 /
    // 40124), 280–330 m. Penzance is also the penzance escape record.
    serves: ["lands-end", "porthcurno", "treen-st-levan", "lamorna-turn", "newlyn", "penzance-bus-station", "penzance"],
    season: null,
    frequency: "All year. Every two hours Mon–Sat, 6 a day towards Land's End and 8 back, counting the 06:40 from Sennen Cove; Sundays 4 towards Land's End and 3 back",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/1A",
    notes: "The only bus on the south coast of this section, at Porthcurno and Treen: Porthcurno to Land's End 16 minutes, to Lamorna Turn 29. Towards Land's End, Mon–Sat from Lamorna Turn 08:57, 10:57, 12:57, 14:57, 16:57 on Saturdays and college holidays or 17:06 on college days, and 18:57: Treen 21 minutes later, Porthcurno Car Park 29–32, Land's End 09:45, 11:45, 13:45, 15:45, 17:45 or 17:54, 19:45. From Penzance bus station 08:25, 10:25, 12:25, 14:25, 16:25 or 16:30, 18:25. At Land's End the 1 leaves for Sennen Cove at 10:00, 12:00, 14:00, 16:00 and 18:00, 9 minutes. Sundays from Lamorna Turn 07:29, 10:29, 14:29 and 18:29, Treen 20 minutes later, Porthcurno 27–29, Land's End 08:14, 11:14, 15:14, 19:14, each met by the 1 to Sennen Cove 6 minutes later. Towards Lamorna and Penzance, Mon–Sat from Land's End 08:50, 10:50, 12:50, 14:50, 16:50, 18:45 and 19:50, plus 06:40 from Sennen Cove: Porthcurno 06:55, 09:07, 11:07, 13:07, 15:07, 17:07, 19:02, 20:07; Treen 8 minutes later; Lamorna Turn 07:24, 09:36, 11:36, 13:36, 15:36, 17:36, 19:31, 20:36; Penzance 07:59, 10:11, 12:11, 14:11, 16:11, 18:11, 20:04, 21:09. Sundays from Land's End 09:20, 13:20 and 17:20: Porthcurno 09:35, 13:35, 17:35; Treen 09:42, 13:42, 17:42; Lamorna Turn 10:03, 14:03, 18:03; Penzance 10:25, 14:25, 18:25. The Minack Theatre is up a steep lane from the car park stop; buses don't go up it",
    verified: "2026-09-15",
  },
  {
    slug: "service-347",
    number: "347",
    name: "Lamorna – Sheffield – Newlyn – Penzance",
    type: "bus",
    provider: "logan-rock-cars",
    // From bustimes.org, "Timetable data from the Traveline National Dataset, 15
    // September 2026"; not on Transport for Cornwall's site, and the operator's own
    // site doesn't mention it. Starts and finishes at Lamorna Village Hall Car Park
    // (NaPTAN 0800COA15819), the lamorna-village-hall stop record, 0.8 km up the
    // valley road from the cove. Also calls at Lamorna Turn (0800COA15620 towards
    // the village, 0800COD40047 towards Penzance), the lamorna-turn record, and at
    // Penzance bus station Stand F, penzance-bus-station. Of no use for getting back
    // to Sennen Cove; entered because it's the only bus into the valley.
    // Newlyn Bridge is 0800COD40042 towards Lamorna and 0800COD40124 towards
    // Penzance, 280 and 330 m from the newlyn escape record.
    serves: ["lamorna-village-hall", "lamorna-turn", "newlyn", "penzance-bus-station", "penzance"],
    season: null,
    frequency: "Mon–Fri, one journey each way, not bank holidays",
    url: "https://bustimes.org/services/347-lamorna-sheffield-penzance",
    notes: "A shopping run into Penzance: from Lamorna Village Hall Car Park 09:30, Lamorna Turn 09:34, Newlyn Bridge 09:43, West Cornwall Hospital 09:47, Penzance bus station 09:56. Back from Penzance bus station 12:30, West Cornwall Hospital 12:38, Newlyn Bridge 12:45, Lamorna Turn 12:54, the village hall 12:58. Ring Logan Rock Cars to check it's running",
    verified: null,
  },
  {
    slug: "service-6",
    number: "6",
    name: "Penzance – Newlyn – Mousehole",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16, 19 and
    // 20 Sep 2026, which link a timetable "6, 6S (From Mon 31st Aug 2026)", and
    // bustimes.org. Mousehole goes through the mousehole escape record: The
    // Parade (NaPTAN 0800COD40151, 50.08540, -5.53617, on The Parade), about
    // 190 m, where buses turn and call both ways. OSM node 682270351 carries
    // that code at the foot of Parade Hill, 100 m away, which looks like an old
    // position. The Harbour (0800COD40153, OSM node 5907093165) and The Parade
    // NE-bound (0800COD40152, inactive) have no services. Newlyn goes through the
    // newlyn escape record: Red Lion (0800COD40144, OSM node 682270336; opposite
    // 0800COD40141), about 200 m; also Newlyn Bridge towards Mousehole
    // (0800COD40140, OSM node 682270329), 250 m, and towards Penzance
    // (0800COD40041, node 682270138), 345 m. Penzance is penzance-bus-station,
    // Stand A, and the penzance escape record. Calls at West Cornwall Hospital
    // Mon–Sat until about 18:20, not in the evenings or on Sundays. The 6S is a
    // schoolday journey by Mounts Bay Academy and Humphry Davy School, not entered
    // separately. Nothing goes on from Mousehole to Lamorna. No buses 25–26 Dec or
    // 1 Jan; bank holiday Monday 28 Dec runs.
    serves: ["mousehole", "newlyn", "penzance-bus-station", "penzance"],
    season: null,
    frequency: "All year. Every half hour Mon–Sat, about 06:30 – 18:30, then hourly to about 23:00; Sundays hourly, about 09:00 – 21:00",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/6",
    notes: "Mousehole's bus, along the harbour road through Newlyn: The Parade to Penzance bus station in 22–24 minutes. Towards Penzance, Mon–Sat from Mousehole The Parade 06:55, 07:30 (not Saturdays), on the hour and half hour 08:00 – 18:30, then 18:55, 19:56, 20:56, 21:56 and 22:56: Newlyn Red Lion 6–7 minutes later, Penzance bus station 22–24, from 18:30 16. Sundays 25 past, 09:25 – 18:25, then 19:20, 20:20 and 21:20: Red Lion 5 minutes later, Penzance 16. Towards Mousehole, Mon–Sat from Penzance bus station 06:30, 07:00 (not Saturdays), on the hour and half hour 07:30 – 18:30, then 30 past, 19:30 – 22:30: Red Lion 17–20 minutes later, from 18:30 12–13; The Parade 22–25, from 18:30 16–17. Sundays on the hour, 09:00 – 21:00: Red Lion 13 minutes later, The Parade 19. Times for 16, 19 and 20 Sep 2026",
    verified: "2026-09-16",
  },
  {
    slug: "service-2",
    number: "2",
    name: "Penzance – Long Rock – Marazion – Praa Sands – Porthleven – Helston (2, 2A)",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16, 19 and 20
    // Sep and 27 Oct 2026, one page for the 2, 2A and 3, and bustimes.org. Long
    // Rock goes through the long-rock escape record: Mexico Inn (E-bound
    // 0800COD40532, OSM node 682271101, 270 m; opposite 0800COD40531, node
    // 682271098, 340 m), every journey both ways. Marazion: The Square (NW-bound
    // 0800COD40548, OSM node 682271152; E-bound 0800COD40549, node 682271155) is
    // the marazion-the-square stop record, where the section 24 route ends; the
    // marazion endpoint record goes through Cemetery (W-bound 0800COD40565, OSM
    // node 682271192; opposite 0800COD40564, node 682271190), 70 m, a timing point
    // on Sundays and on bustimes.org's all-stops list, and Turnpike Road
    // (0800COA15684, OSM node 9877709627; 0800COA15685), 350 m, the Mon–Sat timing
    // point. Perranuthnoe goes through the perranuthnoe escape record: St Pirans
    // Way (NW-bound 0800COD40566, OSM node 682271196), 240 m, on the hourly
    // Mon–Sat loop out of Marazion only; nothing calls there towards Marazion, and
    // St Pirans Hall (0800FWW38426) has no services. Praa Sands goes through the
    // praa-sands escape record: Parc Morrep (W-bound 0800COD40600, OSM node
    // 682271296), 200 m. The bus loops one way through the village whichever way
    // it's heading, down Pengersick Lane and back up Pentreath Lane, so the same
    // stops serve both directions; also Lower Pentreath (0800COD40603), 290 m, and
    // Trewartha Road (0800COD40598, OSM node 682271291), 525 m. The opposite
    // stops, 0800COD40601 and 0800COD40599, have no services. Rosudgeon goes
    // through the rosudgeon escape record: Falmouth Packet Inn (SE-bound
    // 0800COD40581, OSM node 682271239; opposite 0800COD40582, node 682271248),
    // every Porthleven journey both ways. Nothing stops nearer Prussia Cove or
    // Rinsey: Kenneggy Coach and Horses (0800COD40590 / 40589) is 1 km from the
    // route but 1.7 km from Praa Sands by road, and Ashton Lion & Lamb
    // (0800COD40612 / 40613) is 2 km up Rinsey Lane from Rinsey's car park, as
    // far as Praa Sands along the path; neither is recorded. Porthleven is the
    // porthleven endpoint through Harbour Bus Shelter (E-bound 0800COD40636, OSM
    // node 682271392; opposite 0800COD40637, node 682271395), 60 m. Penzance is
    // Helston is the helston-coinagehall-street stop record: every journey
    // towards Porthleven calls at Blue Anchor (W-bound 0800COC30257, OSM node
    // 682268716), and every journey from Porthleven sets down at Seven Stars
    // opposite (0800COC30258, node 682268717), where the 34 also calls.
    // penzance-bus-station, Stand E, and the penzance escape record. Mon–Sat the
    // journeys at half past the hour from Penzance, and the early and evening
    // ones, go by Goldsithney, Rosudgeon, Praa Sands, Ashton, Breage and
    // Porthleven to Helston; those on the hour, 09:00 – 17:00, go by Perranuthnoe
    // and end at Goldsithney Queen Street (0800COA15692). The 06:20 from Porthleven
    // and the 2A skip Praa Sands by the A394. Sundays every two hours by
    // Porthleven, and the hours between turn at Marazion Cemetery. The 2A is an
    // early schoolday journey to Mullion School and one back in the afternoon. The
    // 39A (Camborne – Leedstown – Goldsithney – Marazion – Long Rock – Penzance,
    // 5–6 a day Mon–Sat) and the 15 (Hayle – St Erth – Marazion – Long Rock –
    // Penzance, 3 a day Mon–Sat) call at the same Marazion and Long Rock stops
    // and aren't entered: they add a few journeys, and the 15's link to St Erth
    // station and Hayle serves no section. One early 39A calls at Perranuthnoe St
    // Pirans Way, 07:54, then goes by Long Rock to Heamoor, not Marazion. The 17
    // and 18 also call at Long Rock Mexico Inn, not Marazion. The 38 (Camborne –
    // Sithney – Helston) calls at Porthleven Harbour Bus Shelter on two or three
    // journeys a day Mon–Fri and reaches nothing else on this stretch; not
    // entered. No buses 25–26 Dec or 1 Jan; bank holiday Monday 28 Dec runs.
    serves: ["penzance-bus-station", "penzance", "long-rock", "marazion-the-square", "marazion", "perranuthnoe", "rosudgeon", "praa-sands", "porthleven", "helston-coinagehall-street"],
    season: null,
    frequency: "All year. Every half hour Mon–Sat between Penzance and Marazion, about 08:30 – 17:50 from Penzance, then every two hours to 22:55; Sundays hourly, 08:45 – 18:20. Beyond Marazion, Mon–Sat hourly by Rosudgeon, Praa Sands and Porthleven to Helston, about 07:30 – 18:04 from Marazion, then every two hours to 23:09, and hourly by Perranuthnoe to Goldsithney only, 09:17 – 17:17; Sundays every two hours by Praa Sands and Porthleven, 09:02 – 18:37",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/2",
    notes: "Marazion's bus, and the first leg back to Lamorna: The Square to Penzance bus station in 10 minutes by Long Rock, then the 1 or 1A to Lamorna Turn and down the valley road to the cove. Mon–Sat from Marazion The Square 06:51, Penzance 07:01, the 1 at 07:35, Lamorna Turn 08:07; 08:03 (08:13 Saturdays), Penzance 08:27 (08:23), the 1 at 09:25, Lamorna Turn 09:59; then 44 past, 09:44 – 13:44, Penzance 54 past, for the 1A or 1 at 25 past, Lamorna Turn 10:57, 11:59, 12:57, 13:59 and 14:57; 14:44, Penzance 14:54, the 1 at 15:25 on Saturdays and in school holidays or 15:30 on schooldays, Lamorna Turn 15:59 or 16:04; 15:44, the 1A at 16:25, Lamorna Turn 16:57, or on schooldays 16:15, the 1A at 16:30, Lamorna Turn 17:06; 16:45, the 1 at 17:25, Lamorna Turn 17:59; last 17:45, Penzance 17:55, the 1A at 18:25, Lamorna Turn 18:57. Mon–Fri the 347 is an alternative once a day: 11:44 from The Square, the 347 from Penzance at 12:30, Lamorna Village Hall 12:58. Sundays from The Square 10 past, 10:10 – 18:10, then 19:08 and 20:33, Penzance 12 minutes later, but the 1 and 1A leave Penzance only every two hours: 11:10 for the 1 at 12:10, Lamorna Turn 12:33; 13:10 for the 1A at 14:10, 14:29; 15:10 for the 1 at 16:10, 16:33; last 17:10 for the 1A at 18:10, 18:29. The other way, Mon–Sat the 1A or 1 from Lamorna Turn at 36 past, 09:36 – 15:36, Penzance 11–13 past, the 2 at 30 past, The Square 44–45 past; earlier the 1A at 07:24, the 2 at 08:30, The Square 08:44, and the 1 at 07:48 on schooldays or 08:00 otherwise, the 2 at 09:00, 09:14; later 16:36, the 2 at 17:20, 17:34, and 17:36, the 2 at 18:55, 19:07. Sundays from Lamorna Turn 08:56, 10:03, 11:56, 14:03 and 15:56, the 2 from Penzance at 45 past, The Square 14 minutes later. Towards Penzance, Mon–Sat from The Square 06:51, 08:03 (08:13 Saturdays), 09:30, then 14 and 44 past 09:44 – 17:45, 18:19, 19:27, 20:24, 22:01 and 00:01; schooldays also 16:20 and 16:53. Towards Marazion, Mon–Fri from Penzance bus station 06:45, 07:15, 08:30, then on the hour and half hour 09:00 – 17:00, 17:20, 17:50, 18:55, 20:55 and 22:55; Saturdays 06:50 and 07:20, then the same: The Square 12–15 minutes later. Sundays 45 past, 08:45 – 17:45, and 18:20, The Square 14 minutes later. Long Rock Mexico Inn is 7–9 minutes from Penzance and 3–5 from The Square. The 39A and 15 add journeys between Marazion and Penzance Mon–Sat: from The Square the 39A at 09:22, 11:22, 13:22, 15:22 (15:53 on schooldays), 17:22 and 19:18, and the 15 at 09:32, 12:32 and 17:07. Porthleven's bus, and the direct way back on section 25, inland by Praa Sands and Rosudgeon: Porthleven Harbour Bus Shelter to Marazion Cemetery in about 33 minutes. Towards Marazion, Mon–Sat from Porthleven, opposite Harbour Bus Shelter, 06:20, 07:26 on schooldays or 07:36 on Saturdays and school holidays, 08:51, then 35 past, 09:35 – 16:35 (15:41 not 15:35 on schooldays), 17:40, 18:48, 19:48, 21:25 and 23:25: Cemetery 32–34 minutes later, the 06:20 26; The Square 5 more. On schooldays also the 2A at 16:31, by the A394, Cemetery 16:48. Sundays 10:32, 12:32, 14:32, 16:32, 18:32 and 19:56, Cemetery 31–34 minutes later. Towards Porthleven, Mon–Sat from Cemetery (opposite) 07:30 on schooldays, or 07:05 and 07:35 on Saturdays and school holidays, 08:47, then 47–48 past, 09:47 – 16:48, 17:37, 18:04, 19:09, 21:09 and 23:09: Harbour Bus Shelter 33–38 minutes later, Helston Seven Stars 11–13 more; on schooldays also the 2A at 06:59, 30 minutes. Sundays from Cemetery 09:02, 11:02, 13:02, 15:02, 17:02 and 18:37, Porthleven 34 minutes later. Praa Sands Parc Morrep has every Porthleven journey both ways: towards Porthleven Mon–Sat 07:49 on schooldays, or 07:24 and 07:54, 09:05, then 4–5 past, 10:04 – 17:05, 17:54, 18:22, 19:28, 21:28 and 23:28, Porthleven 14–20 minutes later; towards Marazion 07:42 on schooldays or 07:52, 09:07, then 51 past, 09:51 – 16:51 (15:57 on schooldays), 17:56, 19:04, 20:04, 21:41 and 23:41, Cemetery 16–18 minutes later. Sundays towards Porthleven 19 past odd hours, 09:19 – 17:19, and 18:54; towards Marazion 47 past even hours, 10:47 – 18:47, and 20:11. Rosudgeon Falmouth Packet Inn has the same journeys, 7 minutes before Praa Sands towards Porthleven and 6–7 after it towards Marazion. Perranuthnoe St Pirans Way, Mon–Sat only: hourly 09:23 – 17:23, 6 minutes from Cemetery, heading for Goldsithney, where the timetable ends the journey at Queen Street 11 minutes on. Nothing calls there towards Marazion, or on Sundays; buses back leave Goldsithney Crown Inn about every half hour, Cemetery 3 minutes later. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "service-34",
    number: "34",
    name: "Redruth – Helston – Poldhu – Mullion – The Lizard",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16, 19 and 20
    // Sep, 27 Oct and 17 Nov 2026 and 12 Jan 2027, which link "Timetable 34 (From
    // Sun 26th Jul 2026)", and bustimes.org. From Redruth station by Four Lanes and
    // Wendron; only Helston onwards is recorded. Helston goes through the
    // helston-coinagehall-street stop record: Blue Anchor (W-bound 0800COC30257,
    // OSM node 682268716) towards the Lizard, and Seven Stars opposite
    // (0800COC30258, node 682268717) towards Redruth, both on Coinagehall Street,
    // where the 2 connects. Poldhu goes through the poldhu escape record: Poldhu
    // Cove (SE-bound 0800COC30370, OSM node 2792124409; NW-bound 0800COC30369), on
    // Poldhu Road where the route passes both, 560 m up the road from the car park.
    // Mullion goes through the mullion escape record: Village Hall (0800COC30383,
    // OSM node 11249938655, towards the Lizard; 0800COC30382 towards Helston).
    // The Lizard goes through the lizard-village escape record: The Green
    // (0800COC30396, OSM node 682268728), where every journey starts and ends.
    // Nothing stops at Gunwalloe's coves, Mullion Cove or Kynance Cove: Mullion Golf
    // Club (0800COC30367 / 30368) is 850 m in a straight line from the Church Cove
    // car park, and Kynance Cove Turn (0800COA15433 / 15434), on the A3083, is
    // 1.6 km on foot from the Kynance Cove car park, about as far as the Green;
    // neither is recorded. Gunwalloe Berepper Cross has only the schoolday 2A and
    // OTS's 36B, not recorded. Towards the Lizard every journey loops by Ruan Minor and Kuggar except the
    // 06:35 from Helston and Saturdays' 08:13; towards Helston all do except the
    // 00:15, the 14:35 on schooldays and the evening ones from 19:37. Sundays
    // all do. The loop runs one way, Treleague Cross Roads, Glebe Place, Kuggar,
    // back to Treleague, so both stops have journeys in both directions. Ruan
    // Minor goes through the ruan-minor escape record: Glebe Place
    // (0800COA16072, no OSM node), 1 km up the lane from Cadgwith. Kuggar goes
    // through the kuggar escape record: Phone Box (0800COC30403, OSM node
    // 682268731), 950 m up the lane from the Kennack Sands car park. Cadgwith
    // Turn (0800COA15529 / 15530), on the A3083, is 2 km from the path and not
    // recorded. The 06:35 from Helston, Saturdays' 08:13, and the
    // 00:15 from the Lizard go by Cury Cross Roads and Penhale, missing Poldhu and
    // Mullion village. On schooldays the 14:34 from Helston ends at Mullion School,
    // and the 13:40 and 14:35 from the Lizard at Helston Tesco and the college.
    // Towards Helston it also calls at Cottage Hospital (A3083) (0800COZ06455),
    // 40 m from the helston-miu record. No buses 25–26 Dec or 1 Jan; bank holiday
    // Monday 28 Dec runs Saturday times. The 382 from the Lizard is a college bus.
    serves: ["helston-coinagehall-street", "poldhu", "mullion", "ruan-minor", "kuggar", "lizard-village"],
    season: null,
    frequency: "All year. Hourly Mon–Sat, about 08:30 – 20:57 from Helston and 07:07 – 21:52 from the Lizard, with one more each way around midnight; Sundays every two hours, 08:20 – 16:20 from Helston and 09:30 – 17:30 from the Lizard",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/34",
    notes: "Mullion's and the Lizard's only bus, inland by Culdrose and Cury, and the way back on section 26 with a change at Helston: nothing on it reaches Porthleven. On section 27, back to the Green from Kuggar Phone Box in 12 minutes or Ruan Minor Glebe Place in 16, and to Helston Seven Stars in 53 or 56: towards the Lizard Mon–Sat from Glebe Place hourly 09:18 – 21:36, none 14:18 – 16:28 on schooldays, and 00:01, Kuggar 4 minutes later; Sundays 09:06 – 17:06 every two hours. Towards Helston Mon–Sat from Glebe Place 07:16, 08:54, then 49 past 09:49 – 13:49 (and 14:54, 15:54 on Saturdays and in school holidays), 16:54, 17:54 and 18:54, Kuggar 3 minutes later; Sundays 09:39 – 17:39 every two hours. From Coverack, change at Helston Sainsbury's to or from the 36, Mon–Sat only. Lizard The Green to Helston Seven Stars in 65 minutes by day, round by Ruan Minor and Kuggar, about 50 in the evening; Mullion Village Hall 28 minutes from the Green, 16 in the evening, and Poldhu Cove 5 more. At Helston the 2 to Porthleven leaves Blue Anchor, across the street, 10–12 minutes. Towards Porthleven, Mon–Sat from the Green 07:07, Seven Stars 08:02 (08:12 on Saturdays and in school holidays), the 2 at 08:41, Porthleven Harbour Bus Shelter 08:51; then 08:45, 09:40, 10:40, 11:40 and 12:40, Seven Stars 45–50 past, the 2 at 25 past, Porthleven 10:35, 11:35, 12:35, 13:35, 14:35. On Saturdays and in school holidays also 13:40, 14:45 and 15:45, the 2 at 15:25, 16:25 and 17:30, Porthleven 15:35, 16:35, 17:40. On schooldays the 13:40 ends at Helston Tesco, 14:42, about 900 m from Blue Anchor, for the 2 at 15:31, Porthleven 15:41, and the 14:35 at the college; nothing else leaves the Green before 16:45. Then 16:45, the 2 at 18:38, Porthleven 18:48; 17:45, the 2 at 19:38, 19:48; 18:45 or 19:37, the 2 at 21:15, 21:25; 20:37 or 21:52, the 2 at 23:15, 23:25. Sundays from the Green 09:30, 11:30, 13:30 and 15:30, Seven Stars 65 minutes later, but the 2 leaves Blue Anchor at 20 past even hours: 12:20, 14:20, 16:20 and 18:20, Porthleven 12 minutes later; last 17:30, Seven Stars 18:30, the 2 at 19:45, Porthleven 19:56. Towards the Lizard the 2 reaches Seven Stars just as the 34 leaves, so allow an hour at Helston. Mon–Sat from Porthleven Harbour Bus Shelter 08:06, Seven Stars 08:17, the 34 at 08:31, the Green 09:34; on Saturdays and in school holidays 07:41 for the 34 at 08:13, direct, the Green 08:42, or 08:11 for the 08:34. Then 09:25, 10:21, 11:22 and 12:22, the 34 at 34 past the next hour, the Green 11:34, 12:34, 13:34, 14:34. On Saturdays and in school holidays 13:22 and 14:22, the Green 15:34 and 16:42; on schooldays 13:22 – 15:22 all wait for the 34 at 15:42, the Green 16:44. Then 16:22, or 15:22 on Saturdays and in school holidays, the 34 at 16:44, the Green 17:42; 17:22, the 34 at 17:44 on Saturdays and in school holidays, the Green 18:42, otherwise and from 18:11 the 34 at 18:32, 19:32; 18:38, the 34 at 19:32, 20:26; 19:42, the 34 at 20:57, 21:48; 21:42, the 34 at 23:22, 00:13. Sundays from Porthleven 09:36, 11:36, 13:36 and 15:36, the 34 at 20 past even hours, the Green 11:22, 13:22, 15:22, 17:22. Towards the Lizard Poldhu Cove is 25 minutes from Blue Anchor, Mullion Village Hall 6 more, the Green 29 more, 25 in the evening. Towards Helston it calls at Cottage Hospital (A3083), by the minor injury unit, about 50 minutes from the Green. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "service-36",
    number: "36",
    name: "Truro – Helston – Coverack – St Keverne",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16, 19 and 20
    // Sep, 27 Oct and 28 Dec 2026, which link "Timetable 36, 36A, 36S (From Sun
    // 26th Jul 2026)", and bustimes.org. From Truro by Perranwell, Stithians,
    // Porkellis and Wendron; only Helston onwards is recorded. Helston goes
    // through the helston-coinagehall-street stop record: of the journeys that
    // reach Coverack, the 08:45, 15:39 (15:25 Saturdays and school holidays)
    // and 18:22 (18:15) call at Blue Anchor (0800COC30257, OSM node 682268716);
    // every journey back sets down at Seven Stars opposite (0800COC30258, node
    // 682268717). The 06:58 starts at Sainsbury's. Helston Sainsbury's
    // (0800COA15301, OSM node 4718971494, N-bound) is one stop used both ways by
    // the 36 and the 34, the change for the Lizard; 200 m from the helston-miu
    // record; not recorded. Coverack is the coverack-car-park stop record, Car
    // Park (0800COC30411, OSM node 682268732), the only stop in the village, 410 m
    // from the coverack endpoint. Towards St Keverne five journeys a day call there
    // (the 10:01 and 13:43 from Sainsbury's go direct to St Keverne); towards
    // Helston only the 10:50 and 14:15 (14:50 Saturdays and school holidays) from
    // St Keverne. St Keverne goes through the st-keverne escape record, The Square
    // (0800COC30418, OSM node 682268733), where every journey calls both ways;
    // Health Centre (0800COA15748, OSM node 11110712899) not recorded. Nothing
    // stops within reach of Cadgwith, Kennack Sands or Black Head: Zoar Garage
    // and Traboe Cross are inland on the B3293. The schoolday journey at Coverack
    // at 16:22 starts at Helston Community College, 15:25, and misses Sainsbury's; the 07:30 from St
    // Keverne on schooldays goes by Gunwalloe Berepper Cross to the college. The
    // 36A (Truro – Penryn) and 36S are school and Truro-side journeys, not
    // entered. Sundays only Truro – Helston – Culdrose, three a day. No table on
    // TfC for 25 Dec or 1 Jan; bank holiday Monday 28 Dec runs Saturday times.
    // OTS's 36B (service-36b) meets it at St Keverne The Square but doesn't call
    // at Coverack.
    serves: ["coverack-car-park", "st-keverne", "helston-coinagehall-street"],
    season: null,
    frequency: "Mon–Sat all year; no Sunday buses beyond Culdrose. Five a day call at Coverack on the way to St Keverne, 07:20 – 18:57; only two go straight back to Helston from Coverack, 11:00 and 14:22, or 15:00 on Saturdays and in school holidays",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/36",
    notes: "Coverack's only bus, inland by Zoar, Goonhilly and Mawgan to Helston, and the way back on section 27 with a change at Helston Sainsbury's to the 34: nothing on it reaches the Lizard. Sainsbury's is one stop both buses use both ways. Most journeys call at Coverack only on the way to St Keverne, 8 minutes on, and the bus back from The Square skips Coverack, so ride on and come back through. Towards the Lizard, Mon–Sat from Coverack Car Park 07:20, by St Keverne (The Square 07:30, or 07:40 on Saturdays and in school holidays), Sainsbury's 08:11 (08:20), the 34 at 08:42, Lizard The Green 09:34; 09:15, by St Keverne, Sainsbury's 10:08, the 34 at 10:42, the Green 11:34; 11:00 direct, Sainsbury's 11:38, the 34 at 11:42, the Green 12:34; 12:02, by St Keverne, Sainsbury's 13:08, the 34 at 13:42, the Green 14:34; on schooldays 14:22 direct, Sainsbury's 14:50, or on Saturdays and in school holidays 15:00, Sainsbury's 15:35, the 34 at 15:50, the Green 16:44 (16:42); 16:22 (16:02), by St Keverne, Sainsbury's 17:09, the 34 at 17:50, the Green 18:42; last 18:57 (18:52), by St Keverne, Sainsbury's 19:37, the 34 at 19:39, the Green 20:26, or if that's missed the 34 at 21:01, the Green 21:48. From the Lizard, Mon–Sat from the Green 07:07, Seven Stars 08:02 (08:12), the 36 from Blue Anchor at 08:45, Coverack 09:15; 08:45, Sainsbury's 09:42, the 36 at 10:01 by St Keverne, Coverack 11:00; 09:40, Sainsbury's 10:37, the 36 at 11:35, Coverack 12:02; 10:40, 11:40 or 12:40, Sainsbury's by 13:37, the 36 at 13:43 by St Keverne, Coverack 14:22, or 15:00 on Saturdays and in school holidays. On schooldays the 13:40 ends at Helston Tesco, 14:42, about 900 m from Blue Anchor, for the 36 at 15:39, Coverack 16:22; on Saturdays and in school holidays it reaches Sainsbury's at 14:37 for the 36 at 15:35, Coverack 16:02. Last 16:45, or on Saturdays and in school holidays 14:45 – 16:45, Sainsbury's 17:42, the 36 at 18:30 (18:25), Coverack 18:57 (18:52). Coverack Car Park to Sainsbury's is 38 minutes direct, 50 by St Keverne. No buses at Coverack on Sundays. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "helford-ferry",
    number: "Ferry",
    name: "Helford ferry (Helford village – Helford Passage)",
    type: "ferry",
    provider: "helford-river-boats",
    // Landings are the two ends of OSM ferry way 148393378.
    serves: ["helford-village", "helford-passage"],
    season: { from: "04-01", to: "10-31" },
    frequency: "On demand, allowing for the tide: 9.30am – 5pm daily, to 6pm 7 July – 7 September",
    url: "https://helfordriverboats.co.uk/the-ferry/",
    notes: "The path's way over the Helford. From Helford village the ferry leaves from the jetty at the end of Helford Point: open the yellow circular sign so the boat can see you from the far side, or ring the kiosk. Single £7, return £9, under-12s £4 and £6; bicycle and rider £15 single. Dogs, babies and pushchairs free. Pay on board, cash or card. Out of season, a taxi round, or about 21 km by road through Gweek; by bus only Mon–Fri and most of a day, the 36B from Helford Car Park at 10:00 to Helston, then the 35 from Blue Anchor at 17:46 to Helford Passage, 18:33, or from Helford Passage the 35 at 07:30 to Helston, then the 36B at 13:20, Helford Car Park 14:03",
    verified: "2026-09-16",
  },
  {
    slug: "st-mawes-ferry",
    number: "Ferry",
    name: "St Mawes Ferry (Falmouth – St Mawes)",
    type: "ferry",
    provider: "fal-river-st-mawes-ferry",
    // Falmouth end is OSM ferry way 43993324's, at the falmouth endpoint on the
    // Prince of Wales Pier; the St Mawes end is the st-mawes-quay stop.
    serves: ["falmouth", "st-mawes-quay"],
    season: null,
    frequency: "All year, 7 days a week: up to three an hour in summer, hourly in winter",
    url: "https://www.falriver.co.uk/ferries/st-mawes-ferry",
    notes: "About 20 minutes across Carrick Roads. From Falmouth's Prince of Wales Pier all year; Custom House Quay only April to October. Dogs and bikes carried; contactless accepted. Live status on the operator's site",
    verified: "2026-09-16",
  },
  {
    slug: "place-ferry",
    number: "Ferry",
    name: "Place ferry (St Mawes – Place)",
    type: "ferry",
    provider: "st-mawes-harbour",
    // Landings are the two ends of OSM ferry way 352272841.
    serves: ["st-mawes-quay", "place"],
    season: { from: "04-01", to: "10-31" },
    frequency: "7 days a week in season, up to every 30 minutes: from St Mawes 9am – 5pm, from Place 9.15am – 5.15pm",
    url: "https://www.falriver.co.uk/ferries/place-ferry",
    notes: "About 10 minutes across the Percuil river. All sailings subject to tide, weather and circumstances; ring St Mawes Harbour Office or see placeferry.com. Single £5, return £8.50. Dogs welcome",
    verified: "2026-09-16",
  },
  // ── Section 28 ──
  {
    slug: "service-36b",
    number: "36B",
    name: "St Keverne – Porthallow – Gillan – Manaccan – Helford – Helston",
    type: "bus",
    provider: "ots",
    // Stops and times from OTS's own timetable "36B-OTS-A4-Feb-26" and
    // bustimes.org (BODS data of 10 Sep 2026), which agree; bustimes adds the
    // untimed stops. One journey each way, Mon–Fri except bank holidays. St
    // Keverne goes through the st-keverne escape record, The Square (0800COC30418,
    // OSM node 682268733), where it starts and ends. Porthallow goes through the
    // porthallow escape record: The Beach (NW-bound 0800COC30420, SE-bound
    // 0800COC30419, no OSM nodes), 18 m from the car park. Helford is the
    // helford-car-park stop record (0800COC30427, no OSM node), used both ways.
    // Helston goes through the helston-coinagehall-street stop record: Seven Stars
    // towards Helston, 10:39, and Blue Anchor towards St Keverne, 13:20. Not
    // recorded: Gillan Bus Shelter (N-bound 0800COC30421, OSM node 11076180408;
    // opp 0800COC30422), 765 m south of the Gillan Creek ferry's south landing and
    // 600 m from the route; Gillan Creek (SE-bound 0800COC30423, opp 0800COC30424,
    // no OSM nodes), at the head of the creek, which the high-tide way round passes
    // within 11 m, 1.6 km by the creek lane from the st-anthony-in-meneage escape
    // record; Manaccan The Square House, Church and Minster Meadow; Helford Cross
    // Roads (0800COC30428 / 30429, OSM node 682268735). Beyond Helford by Newtown,
    // St Martin, Mawgan, Culdrose and Gunwalloe Berepper Cross to Helston Sainsbury's
    // (10:36 / 13:25) and Tesco, where it starts and ends. Not to Coverack; the 36
    // from St Keverne The Square reaches Coverack only at 10:50 and 14:15 (14:50 on
    // Saturdays and in school holidays).
    serves: ["st-keverne", "porthallow", "helford-car-park", "helston-coinagehall-street"],
    season: null,
    frequency: "One bus each way, Mon–Fri only, not bank holidays. Towards Helston 09:30 from St Keverne; towards St Keverne 13:15 from Helston Tesco. No Saturday or Sunday buses",
    url: "https://otsfalmouth.co.uk/service-33-st-keverne-to-helston/",
    notes: "The only bus on section 28 beyond Coverack. Towards Helston, from St Keverne The Square 09:30, Porthallow The Beach 09:38, Gillan Bus Shelter 09:45, Gillan Creek 09:49, Manaccan 09:52, Helford Car Park 10:00, Helston Sainsbury's 10:36, Seven Stars 10:39, Tesco 10:44. Towards St Keverne, from Helston Tesco 13:15, Blue Anchor 13:20, Sainsbury's 13:25, Helford Car Park 14:03, Manaccan 14:07, Gillan Creek 14:09, Gillan 14:13, Porthallow 14:20, St Keverne The Square 14:28. Back to Coverack from Helford, Mon–Fri: the 14:03 to St Keverne, then in school holidays the 36 from The Square at 14:50, Coverack Car Park 15:00; on schooldays the 36's 14:15 has gone, so walk the 3.3 km or take a taxi. Or the 10:00 from Helford to Helston Sainsbury's, 10:36, and the 36 at 11:35, Coverack 12:02. Out to Helford for a van left at Coverack, the 36 at 09:15 to St Keverne, 09:23, for the 36B at 09:30, Helford 10:00",
    verified: "2026-09-16",
  },
  {
    slug: "gillan-creek-ferry",
    number: "Ferry",
    name: "Gillan Creek ferry (Halamana – St Anthony)",
    type: "ferry",
    provider: "sailaway-st-anthony",
    // From Sailaway's own ferry page, undated, and the identical page on its
    // cottages site, stanthony.co.uk. Landings are the two ends of OSM ferry way
    // 963909278 "Gillan Creek": the south end is the halamana stop record; the north
    // end (50.08894, -5.10121), by Sailaway's pontoon (way 963909279) and boathouse
    // (way 799346517), is 93 m from the st-anthony-in-meneage escape record. OSM
    // still tags the way access=no with a June 2021 fixme saying it wasn't running;
    // the operator's page now offers it. The path's low-tide crossing is the
    // stepping stones and tidal ford (ways 360956391, 360956393, 360956394,
    // 970694732, 970694734), 130 m west of the ferry. Without either, the way round
    // by the head of the creek is 3.5 km on OSM's ways, past the 36B's Gillan Creek
    // stop.
    serves: ["halamana", "st-anthony-in-meneage"],
    season: { from: "04-01", to: "10-31" },
    frequency: "On demand during normal working hours, 1 April – 31 October",
    url: "https://sailawaystanthony.co.uk/ferry/",
    notes: "Across Gillan Creek when the stepping stones are covered, roughly three hours either side of high water. From the south side, open Sailaway's signboard on the beach at Halamana, opposite St Anthony church, or ring 01326 231357; from the north side, at the Boathouse at St Anthony. £5 a person; dogs free. At low water Sailaway says you can paddle across from Halamana to the church, ankle deep on shingle, avoiding the deeper channel towards the old caravans; the stepping stones are often slippery with weed. Out of season, or out of hours at high tide, it's the lanes round by the head of the creek, about 3.5 km",
    verified: "2026-09-16",
  },

  // ── Section 29 ──
  {
    slug: "service-35-falmouth",
    number: "35/63",
    name: "Falmouth – Mawnan Smith – Helford Passage (– Gweek – Helston)",
    type: "bus",
    provider: "ots",
    // Stops and times from OTS's own timetable "35-OTS-A4-Master-2024" (35, 35A
    // and 63), uploaded Dec 2025, and bustimes.org for 15, 19 and 21 Sep and 27 Oct
    // 2026 (BODS data of 10 Sep 2026), which agree to a few minutes. Mon–Sat except
    // bank holidays. The 63 runs Falmouth – Swanvale – Tregoniggie – Budock Water –
    // Mawnan Smith – Helford Passage and back; the 35 Falmouth – Budock Water –
    // Mawnan Smith – Helford Passage, and on some journeys back by Mawnan Smith,
    // Constantine and Gweek to Helston. Journeys interwork at Helford Passage, so
    // they're one record. Helford Passage is the helford-passage-turn stop record
    // (0800COC30327, OSM node 682268723), where both turn, used both ways. Falmouth
    // is the falmouth-the-moor stop record, The Moor B (0800COZ06299, OSM node
    // 682276135), where all start and end. Helston goes through the
    // helston-coinagehall-street stop record: Blue Anchor, 07:20, 08:41 and 17:46
    // towards Helford Passage, and 08:35 (Saturdays and school holidays) towards
    // Helston. Not recorded, all served both ways: Trebah Gardens (W-bound
    // 0800COC30329, opp 0800COC30328, no OSM nodes), 710 m by lane and bridleway from
    // the durgan escape record; Glendurgan Gardens (0800COC30330 / 30331); Mawnan
    // Smith Shute Hill and Red Lion (S-bound 0800COC30334, no OSM node; opp
    // 0800COC30335, OSM node 682268724), 1.9 km from the mawnan-church escape
    // record by Old Church Road; Chapel Town Close; Little Bareppa on Carlidnack
    // Road (0800COC30325 / 30326), 1.1 km by footpath from the maenporth escape
    // record. Nothing calls at the Maenporth Beach stops (0800COC56534, OSM node
    // 682269734; 0800COA15859), Tregedna Farm, Meudon Hotel or Cricket Club. The
    // 35A (Falmouth – Constantine – Gweek – Helston) doesn't reach Mawnan Smith or
    // Helford Passage and isn't entered. OTS notes The Parade, Helston, is closed to
    // the 35 and 35A 5 Oct – 11 Dec 2026; not a recorded stop.
    serves: ["helford-passage-turn", "falmouth-the-moor", "helston-coinagehall-street"],
    season: null,
    frequency: "About hourly Mon–Sat all year, not bank holidays. From Falmouth The Moor 07:10 – 17:45; from Helford Passage 08:05 – 18:33. No Sunday buses",
    url: "https://otsfalmouth.co.uk/services-35-35a-63-falmouth-to-helston/",
    notes: "Helford Passage's only bus, from the top of the lane by Trebah Garden, and the way back on section 29: Falmouth The Moor to Helford Passage in 20–25 minutes by Budock Water and Mawnan Smith. From The Moor, Mon–Sat 07:10, 09:45, 10:45, 11:45, 12:45, 13:45, then on schooldays 15:05, or on Saturdays and in school holidays 14:45 and 15:45, then 16:45 and 17:45; Helford Passage 20–25 minutes later. From Helford Passage, Mon–Sat 08:05, 09:28, 10:28, 11:28, 12:28, 13:28, then on schooldays 14:10, or on Saturdays and in school holidays 14:28 and 15:28, then 16:28, 17:28 and 18:33; The Moor 19–25 minutes later. The 07:10 and 17:45 from Falmouth go on from Helford Passage by Constantine and Gweek to Helston, about an hour; the 07:20, 08:41 and 17:46 from Helston Blue Anchor come the other way, Helford Passage 08:05, 09:28 and 18:33. For Helford village out of the ferry season, Mon–Fri only: the 07:30 from Helford Passage to Helston, then the 36B at 13:20 from Blue Anchor, Helford Car Park 14:03",
    verified: "2026-09-16",
  },
  {
    slug: "service-67",
    number: "67",
    name: "Falmouth Coastal Circular (The Moor – Pendennis Point – Gyllyngvase – Swanpool)",
    type: "bus",
    provider: "ots",
    // Stops and times from OTS's own timetable "67-OTS-A4-Feb-26" and bustimes.org
    // (BODS data of 10 Sep 2026). A one-way loop, Mon–Sat except bank holidays: The
    // Moor B, Top of Killigrew St, National Maritime Museum, Pendennis Rise,
    // Pendennis Castle Ships and Castles, Pendennis Point, Falmouth Hotel, Lansdowne
    // Road, Gyllyngdune Gardens, Spernen Wyn Road, Swanpool Beach, Swanpool Hill, Top
    // of Killigrew St, The Moor B. Falmouth is the falmouth-the-moor stop record.
    // Swanpool goes through the swanpool escape record, the stop opposite Swanpool
    // Beach (0800COC30783, OSM node 682268858). Pendennis Point goes through the
    // pendennis-point escape record, 50 m from its stop (0800COC04191, OSM node
    // 682268617). Not recorded: Ships and Castles
    // (0800COC30779, node 682268855); Gyllyngdune Gardens (0800COC30776, node
    // 682268853), 40 m from the route above Gyllyngvase beach. The 18:00 from The
    // Moor runs 7 Apr – 31 Oct 2026 only.
    serves: ["falmouth-the-moor", "pendennis-point", "swanpool"],
    season: null,
    frequency: "Hourly Mon–Sat, not bank holidays: from The Moor 09:00 – 17:00, and 18:00 until 31 October 2026. No Sunday buses",
    url: "https://otsfalmouth.co.uk/service-67-falmouth-coastal-circular/",
    notes: "One way round Falmouth's headland, 32 minutes: The Moor on the hour, Pendennis Point 14 past, Gyllyngvase (Gyllyngdune Gardens) 21 past, Swanpool Beach 26 past, back at The Moor 32 past. From The Moor Mon–Sat 09:00 – 14:00 hourly, then on schooldays 14:35, or on Saturdays and in school holidays 15:00 and 16:00, then 17:00, and 18:00 until 31 October. So from Swanpool to The Moor, 6 minutes, 09:26 – 17:26 (15:01 on schooldays in place of 15:26 and 16:26), and 18:26 until 31 October; from Pendennis Point it's the long way round, 18 minutes. The 64A also runs from Swanpool to The Moor",
    verified: "2026-09-16",
  },
  {
    slug: "service-64",
    number: "64/64A",
    name: "Falmouth Town Service (The Moor – Swanpool Beach – Longfield)",
    type: "bus",
    provider: "ots",
    // From OTS's own timetable "64-timetable-20260215" (63, 64, 64A, 65, 65A) and
    // bustimes.org (BODS data of 10 Sep 2026). Mon–Sat except bank holidays. The 64
    // runs clockwise, The Moor, Swanvale Road, Swanpool Beach (S-bound 0800COC30782,
    // OSM node 682268857, 76 m from the swanpool escape record), Pitch & Putt, Swans
    // Reach, Menehay Farm, Longfield, Tregoniggie, Conway Road, Acacia Road, The
    // Moor; the 64A anticlockwise, calling at the stop opposite Swanpool Beach
    // (0800COC30783), the swanpool escape record itself. Falmouth is the
    // falmouth-the-moor stop record. The 65 and 65A take the same loop without
    // Swanpool and aren't entered.
    serves: ["falmouth-the-moor", "swanpool"],
    season: null,
    frequency: "Mon–Sat, not bank holidays. 64: from The Moor 10:45, 12:45, 14:45 and 16:45. 64A: from The Moor 09:15, 11:15, 13:15, 15:15 and 17:15. No Sunday buses",
    url: "https://otsfalmouth.co.uk/services-63-64-64a-65-65a-falmouth-town-circular/",
    notes: "Between Swanpool and The Moor, alternating with the 67. From opposite Swanpool Beach, the 64A at 09:48, 11:48, 13:48, 15:48 and 17:48 to The Moor in 5 minutes. From The Moor, the 64 at 10:45, 12:45, 14:45 and 16:45 to Swanpool Beach in 5 minutes; the 64 on from Swanpool, 10:50 – 16:50, goes round the estates and takes half an hour back to The Moor",
    verified: "2026-09-16",
  },
  {
    slug: "maritime-line",
    number: "Train",
    name: "Maritime Line (Truro – Penryn – Penmere – Falmouth Town – Falmouth Docks)",
    type: "train",
    provider: "great-western-railway",
    // From GWR's own timetable K4, 7 September – 12 December 2026. Falmouth Docks
    // is the falmouth-docks-station stop record, Falmouth Town the
    // falmouth-town-station stop record. Truro, Perranwell, Penryn and Penmere
    // aren't recorded. As entered it links no section's ends and serves no escape
    // point, so it shows on no section; it's here for the Falmouth station records
    // and for when Truro or Penryn is recorded. Main-line connections at Truro not
    // entered.
    serves: ["falmouth-docks-station", "falmouth-town-station"],
    season: null,
    frequency: "All year, every day. Half-hourly Mon–Sat, 06:02 – 22:56 from Truro and 06:30 – 23:22 from Falmouth Docks (23:10 Saturdays); Sundays about hourly, 08:50 – 22:04 from Truro and 09:18 – 22:33 from Falmouth Docks",
    url: "https://www.gwr.com/-/media/gwr-sc-website/files/timetables/september-26-december-26/K4-train-times-7-September-to-12-December-2026.pdf",
    notes: "Falmouth's railway, about 25 minutes to Truro for the main line: Falmouth Docks to Falmouth Town 3 minutes, Penmere 6, Penryn 10, Truro 27. Every other train on weekdays and Saturdays skips Perranwell. From Falmouth Docks, Mon–Fri 06:30, 07:13, 07:43, then 15 and 45 past 08:15 – 15:45, 16:20, 16:50, 17:20, 17:50, 18:20, 19:06, 19:41, 20:17, 21:22, 22:26 and 23:22; Saturdays 06:36, 07:15, then 15 and 45 past 07:45 – 16:45, 17:18, 17:48, 18:38, 19:12, 19:45, 20:15, 21:20, 22:15 and 23:10; Sundays 09:18, then 10:21 – 14:21 hourly, 15:26, 16:26, 17:26, 18:24, 19:26, 20:26, 21:28 and 22:33. All stations on the line unstaffed, with ticket machines at Falmouth Docks, Falmouth Town, Penmere and Penryn",
    verified: "2026-09-16",
  },
  // Section 30.
  {
    slug: "service-50",
    number: "50",
    name: "Truro – Tregony – Portscatho – St Mawes",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16, 19 and 20
    // Sep, 27 Oct, 15 Nov and 28 Dec 2026 and 12 Jan 2027, which link "Timetable 50
    // (From Sun 26th Jul 2026)", and bustimes.org. From Truro bus station Stand C
    // (0800COA15346) by Tresillian and Probus; Truro isn't recorded, being nowhere
    // near the path. Ruan High Lanes is the ruan-high-lanes stop record, Bessy
    // Beneath, where the 51 connects. Pendower Turn is the pendower-turn stop
    // record. Portscatho goes through the portscatho escape record, Springfield
    // (0800COC30859, OSM node 11610830409): towards St Mawes the bus calls at
    // Tregassa (SW-bound 0800COC30860, node 11610830413), loops by Gerrans Top
    // Park An Dillon, Roseland Garage, Gerrans Church, Highertown (0800COC30858,
    // node 11610830410) and Springfield, and passes Tregassa again (W-bound
    // 0800COA15862, node 11610830414); towards Truro it comes from St Just in
    // Roseland to Gerrans, Highertown, Springfield and Tregassa. St Mawes goes
    // through the st-mawes-quay stop record: Car Park (0800COC30870, OSM node
    // 682268881), where every journey starts and ends, 170 m north of the ferry
    // landing. Nothing stops within reach of Place, St Anthony Head, Porth or
    // Carne: the Carne Beach stop (0800COA15231) and Lower Mill Gwendra
    // (0800FWZ38434) are inactive. On schooldays the 14:35 from Truro ends at
    // Tregony, and a 15:20 from Penair School and a 16:45 by Truro College and
    // Treliske run through to St Mawes. The King Harry ferry carries no bus. No
    // buses 25 Dec or 1 Jan; bank holiday Monday 28 Dec runs Saturday times.
    serves: ["st-mawes-quay", "portscatho", "pendower-turn", "ruan-high-lanes"],
    season: null,
    frequency: "All year, every day. Mon–Sat about every 90 minutes, 06:40 – 17:45 from Truro and about 07:00 – 19:00 from St Mawes, with extra journeys on schooldays; Sundays every two hours, 08:35 – 16:35 from Truro and 09:50 – 17:50 from St Mawes",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/50",
    notes: "The bus down the Roseland, inland of the path by the A3078, and on section 30 the way from Pendower and Portscatho to St Mawes for the Place ferry back to the start, April to October: Pendower Turn to St Mawes Car Park in 25–30 minutes, Portscatho Highertown in 20; Truro to St Mawes about 65. The last that makes the 5pm ferry from St Mawes leaves Pendower Turn at 16:07 on schooldays or 15:18 on Saturdays and in school holidays, St Mawes 16:36 or 15:47; Sundays 15:14, St Mawes 15:42. Towards St Mawes, Mon–Sat from Pendower Turn 07:16, 08:54 (08:48 Saturdays and school holidays), 10:48, 12:18, 13:48, 15:18 on Saturdays and in school holidays or 16:07 on schooldays, 16:59 and 18:28, Portscatho Highertown 8–9 minutes later; Sundays 14 past odd hours, 09:14 – 17:14. Towards Truro, Mon–Sat from Highertown 07:12 (07:18), 07:43 (08:05), 09:48, 11:48, 13:18, 14:45 (14:48), 16:28, 17:49 and 19:18, Pendower Turn 7 minutes later, Ruan High Lanes 14, Truro bus station about 50; Sundays 11 past even hours, 10:11 – 18:11. For Portloe change at Ruan High Lanes to the 51, Mon–Sat only: from Highertown 11:48, 14:45 (14:48), 16:28 and 17:49, Pendower Turn 7 minutes later, the 51 at 12:13, 15:21 (15:13), 16:53 and 18:18, Portloe Church 12:27, 15:35 (15:27), 17:07 and 18:32. From Portloe Church 07:13 or 07:54 for the 50 at 08:47 (08:43), Highertown 09:03 (08:57); 09:43 for 10:43, Highertown 10:57; 13:13 for 13:43, 13:57; 16:18 for 16:53, 17:08. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "service-51",
    number: "51",
    name: "St Austell – Tregony – Portloe – Veryan",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16, 19 and 20
    // Sep, 27 Oct and 28 Dec 2026 and 12 Jan 2027, which link "Timetable 51 (From
    // Sun 26th Jul 2026)", and bustimes.org. A loop from Tregony: Ruan High Lanes,
    // Treviskey, Portloe, Veryan, and either back through Portloe or straight to
    // Ruan High Lanes; some journeys start or end at St Austell bus station Stand A
    // (0800COZ06359), the st-austell-station stop record. Portloe goes through the portloe endpoint
    // record: Church (NE-bound 0800COC30843, OSM node 11657380207; opposite
    // 0800COC30842, node 10835730408), 70–80 m from it. Sunny Corner (0800SCH16357
    // / 16358, OSM nodes 11657380205 / 11657380206), 450 m west, and Camels Farm
    // (0800SCH16359 / 16360), 1 km west on the road to Veryan, are not recorded.
    // Veryan goes through the veryan escape record, Pendower Road (N-bound). Ruan
    // High Lanes is the ruan-high-lanes stop record, where the 50 connects. No
    // Sunday buses. No buses 25 Dec or 1 Jan; bank holiday Monday 28 Dec runs
    // Saturday times.
    serves: ["portloe", "veryan", "ruan-high-lanes", "st-austell-station"],
    season: null,
    frequency: "Mon–Sat all year, no Sundays. At Portloe about every two to three hours, 07:13 – 18:33: from Ruan High Lanes by Treviskey 07:54, 12:27, 15:35 (15:27 Saturdays and school holidays), 17:07 and 18:32, and from Veryan 07:13, 09:43, 13:13 and 16:18",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/51",
    notes: "Portloe's only bus, and Veryan's. No bus links the two ends of section 30: back to Place it's the 51 to Ruan High Lanes, the 50 to St Mawes, and the Place ferry, April to October only. Mon–Sat from Portloe Church 07:13 or 07:54, Ruan High Lanes Bessy Beneath 07:25 or 08:24, the 50 at 08:47 (08:43 Saturdays and school holidays), St Mawes Car Park 09:23 (09:17); 09:43, Bessy Beneath 09:55, the 50 at 10:43, St Mawes 11:17; last 13:13, Bessy Beneath 13:25, the 50 at 13:43, St Mawes 14:17. The 16:18 reaches St Mawes at 17:26, after the last ferry at 5pm. The Car Park stop is 170 m up from the quay. The other way, the ferry from Place and the 50 from St Mawes Car Park at 11:30, Bessy Beneath 12:02, the 51 at 12:13, Portloe Church 12:27; 14:27 (14:30), Bessy Beneath 14:59 (15:02), the 51 at 15:21 (15:13), Portloe 15:35 (15:27); 16:10, 16:42, the 51 at 16:53, Portloe 17:07; last 17:30, 18:03, the 51 at 18:18, Portloe 18:32, which the last ferry from Place, 5.15pm, leaves little time for. No 51 on Sundays and no Place ferry November to March: then it's a taxi. Veryan Pendower Road to Portloe Church in 13 minutes at 07:00, 09:30, 13:00 and 16:05; Portloe Sunny Corner to Veryan New Inn in 10–13 minutes at 07:55, 12:28, 15:36 (15:28), 17:08 and 18:33. Camels Farm, inland of Nare Head: towards Portloe 07:09, 09:39, 13:09 and 16:14, 4 minutes; towards Veryan 07:58, 12:30, 15:38 (15:30), 17:10 and 18:35. St Austell bus station to Portloe Church at 11:45, 14:45 and 17:52, 40–50 minutes; back at 13:13, St Austell 14:04. Times for 16 and 19 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "roseland-community-bus",
    number: "RCT",
    name: "Roseland community bus (Tregony – Veryan – Portscatho – St Mawes)",
    type: "bus",
    provider: "roseland-community-transport",
    // Times from the Traveline national dataset on bustimes.org, "Wednesdays",
    // data dated 15 Sep 2026; not on Transport for Cornwall and not confirmed with
    // the operator. Veryan goes through the veryan escape record: this bus calls
    // at New Inn (0800COC30845 / 30846), 140 m from it, not Pendower Road.
    // Pendower Turn, Portscatho (Tregassa, Gerrans, Highertown, Springfield), Ruan
    // High Lanes Bessy Beneath and St Mawes Car Park are the same stops as the
    // 50's. Its other journeys, Ruan Lanihorne – Philleigh – St Just in Roseland –
    // St Mawes, reach nothing near the path and aren't entered.
    serves: ["st-mawes-quay", "portscatho", "pendower-turn", "veryan", "ruan-high-lanes"],
    season: null,
    frequency: "Wednesdays only: two each way between St Mawes and Veryan",
    url: "https://bustimes.org/services/rct-tregony-st-mawes",
    notes: "The only bus between Veryan and Portscatho, and a direct one from St Mawes to Veryan. From St Mawes Car Park 09:38 and 11:06: Portscatho Tregassa 09:54 and 11:22, Highertown 4 minutes later, Pendower Turn 10:01 and 11:29, Veryan New Inn 10:07 and 11:35, Ruan High Lanes 10:14 and 11:42, Tregony 10:18 and 11:46. From Veryan New Inn 14:27 and 15:57, coming from Tregony at 14:16 and 15:46: Pendower Turn 14:29 and 15:59, Portscatho Tregassa 14:35 and 16:05, Highertown 14:38 and 16:08, St Mawes Car Park 14:56 and 16:26, in time for the Place ferry. Times from the national timetable dataset, 15 Sep 2026. Not confirmed with the operator, and whether seats must be booked isn't known: ring before relying on it",
    verified: null,
  },
  // Sections 31 and 32.
  {
    slug: "service-23",
    number: "23",
    name: "St Austell – Pentewan – Mevagissey – Heligan – Gorran Haven",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16, 19 and 20
    // Sep, 27 Oct and 28 Dec 2026, which link "Timetable 23 (From Sun 26th Jul
    // 2026)", and bustimes.org. Starts and ends at St Austell Asda (0800COC31481),
    // not recorded. St Austell is the st-austell-station stop record: bus station
    // Stand A (0800COZ06359). Pentewan goes through the pentewan escape record,
    // Pentewan Turn (S-bound 0800COC31029, OSM node 682268923; opposite
    // 0800COC31030). Mevagissey goes through the mevagissey endpoint record: River
    // Street Car Park (NW-bound 0800COC31036, OSM node 682268925, tagged "Ship
    // Inn"), 130 m from it, and Trevarth (0800COC31037, OSM node 682268929), 410 m;
    // also School Hill and Trevalsa Court Hotel, not recorded. Gorran Haven goes
    // through the gorran-haven escape record, Car Park (0800COC31056), where it
    // turns; on the way it calls at Heligan Gardens Car Park, Gorran High Lanes,
    // Gorran Church, Wansford Meadows, Triangle and Rice Farm, none recorded. The
    // 10:50 from St Austell turns at Heligan and comes back by Mevagissey. Nothing
    // on it calls at Portmellon, Hemmick, Porthluney or Portholland. No Sunday
    // buses. No buses 25–26 Dec or 1 Jan; bank holiday Monday 28 Dec runs Saturday
    // times.
    serves: ["st-austell-station", "pentewan", "mevagissey", "gorran-haven"],
    season: null,
    frequency: "Mon–Sat all year, no Sundays. Three a day each way to Gorran Haven: from St Austell 08:50, 12:50 and 15:58, and a 10:50 as far as Heligan; from Gorran Haven 09:45, 13:45 and 16:50",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/23",
    notes: "Gorran Haven's everyday bus, inland by Gorran Churchtown and Heligan to Mevagissey, Pentewan and St Austell. No bus links the two ends of section 31: back to Portloe it's St Austell and the 51, Mon–Sat only. From Gorran Haven Car Park 09:45, 13:45 and 16:50: Mevagissey River Street Car Park 10:10, 14:10 and 17:15, Pentewan Turn 10:18, 14:18 and 17:23, St Austell bus station 10:33, 14:33 and 17:38. Towards Gorran Haven from St Austell 08:50, 12:50 and 15:58: Pentewan Turn 09:07, 13:07 and 16:15, River Street Car Park 09:14, 13:14 and 16:22, Gorran Haven Car Park 09:37, 13:37 and 16:45. Mevagissey to Portloe, Mon–Sat: the 29 from Trevarth 08:01, St Austell 08:19, the 51 from Stand A at 08:45, which goes round by Veryan, Portloe Church 09:43; the 29 at 10:56, St Austell 11:19, the 51 at 11:45, Portloe 12:27; the 29 at 14:04, St Austell 14:19, the 51 at 14:45, Portloe 15:35 (15:27 Saturdays and school holidays); last this bus from River Street Car Park 17:15, St Austell 17:38, or the 29 from Trevarth 16:56, St Austell 17:19, for the 51 at 17:52, Portloe 18:32. From Gorran Haven the 09:45, 13:45 and 16:50 connect with the 51 at 11:45, 14:45 and 17:52. Portloe to Mevagissey: the 51 from Portloe Church 13:13, St Austell 14:04, the 29 at 14:35, Trevarth 14:52; on schooldays also 07:54, St Austell 08:54, the 29 at 09:35, Trevarth 10:00. No 51 on Sundays: then it's a taxi. Times for 16 and 19 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "service-29",
    number: "29",
    name: "St Austell – Pentewan – Mevagissey",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16, 19 and 20
    // Sep, 27 Oct and 28 Dec 2026, which link "Timetable 29 (From Mon 31st Aug
    // 2026)", and bustimes.org. St Austell is the st-austell-station stop record:
    // bus station Stand B (0800COZ06363). Pentewan goes through the pentewan escape
    // record, Pentewan Turn, both ways. Mevagissey goes through the mevagissey
    // endpoint record: every journey turns at Trevarth (N-bound 0800COC31037, OSM
    // node 682268929), at the top of the village, 410 m from it, and doesn't go
    // down to River Street. Some journeys loop by Heligan Gardens Car Park
    // (0800COA15907) and Tregiskey Farm, about 9 minutes longer. bustimes.org's data
    // for 27 Oct also shows journeys at 13 past from St Austell that Transport for
    // Cornwall doesn't; left out. No buses 25–26 Dec or 1 Jan; bank holiday Monday
    // 28 Dec runs Saturday times.
    serves: ["st-austell-station", "pentewan", "mevagissey"],
    season: null,
    frequency: "All year, every day. Mon–Sat about hourly: from St Austell 07:40 – 18:35, then 20:40 and 22:40; from Mevagissey 06:55 – 19:03, then 21:00 and 23:00. Sundays every two hours: from St Austell 08:56, 09:35, then 11:35 – 17:35; from Mevagissey 09:15, 10:05, then 12:05 – 18:05",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/29",
    notes: "Mevagissey's main bus, and on section 32 the second half of the way back from Par. St Austell bus station, beside the railway station, to Mevagissey Trevarth in 17–25 minutes by Pentewan Turn. From St Austell, Mon–Sat 07:40, then 35 past 08:35 – 18:35, then 20:40 and 22:40: Pentewan Turn 11–15 minutes later, Trevarth 17–25. Sundays 08:56, 09:35, 11:35, 13:35, 15:35 and 17:35, Trevarth 09:13, 10:01, 12:01, 14:01, 16:01 and 18:01. From Trevarth, Mon–Sat 06:55, 08:01, 09:04, 10:04, 10:56, 12:04, 12:56, 14:04, 14:56, 16:04, 16:56, 17:56, 19:03, 21:00 and 23:00: Pentewan Turn 4–12 minutes later, St Austell 15–23. Sundays 09:15, 10:05, 12:05, 14:05, 16:05 and 18:05. Par to Mevagissey, Mon–Sat: the 24 from Par opp Costcutter at 43 past, 08:43 – 18:43, St Austell bus station 17 past, this bus at 35 past, Trevarth at 52 past or on the hour; or a train from Par at about 5–10 past, St Austell 7 minutes later. First the 24 at 06:13, this bus at 07:40, Trevarth 07:57; last the 24 at 19:43, St Austell 20:15, this bus at 20:40, Trevarth 20:55, or the 22:05 train, St Austell 22:12, for the 22:40, Trevarth 22:55. Sundays: the 24A from Par opp Costcutter 09:47, 11:47, 13:47 or 15:47, St Austell 10:30, 12:30, 14:30 or 16:30, this bus at 11:35, 13:35, 15:35 or 17:35, Trevarth 12:01, 14:01, 16:01 or 18:01; trains from Par at 10:52, 13:03, 14:32 and 16:32 cut the wait. In season the Mevagissey ferry from Fowey is the other way back. Times for 16, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "gorranbus",
    number: "G1/G3/G4",
    name: "GorranBus (Gorran Haven – Mevagissey – St Austell)",
    type: "bus",
    provider: "gorranbus",
    // Times from the operator's own "GorranBus Full Timetable" image (file
    // timetable_0925, uploaded September 2025, no other date), which matches the
    // Traveline national dataset on bustimes.org, data dated 15 Sep 2026. One record
    // for three services that share the Gorran – St Austell part: G1 Wednesdays and
    // Fridays to St Austell's supermarkets; G3 Tuesdays and Thursdays to Truro bus
    // station and Treliske; G4 third Monday of the month to Plymouth by Holmbush Inn,
    // St Blazey and Lostwithiel. Gorran Haven goes through the gorran-haven escape
    // record: Car Park (0800COC31056) only if booked; Triangle (0800COC31052 /
    // 31053), 360 m west, every journey. Portmellon goes through the portmellon
    // escape record, Rising Sun Car Park (0800COY38619): booked, outward journeys
    // only. Mevagissey goes through the mevagissey endpoint record, River Street Car
    // Park and Trevarth. Pentewan goes through the pentewan escape record, Pentewan
    // Turn. St Austell is the st-austell-station stop record, bus station Stand E
    // (0800COZ06361), "South St. / Station" on the operator's timetable. Boswinger
    // Seaview (0800COY38624), 820 m on OSM's ways up the lane from the hemmick escape
    // record, booked only, not recorded.
    serves: ["gorran-haven", "portmellon", "mevagissey", "pentewan", "st-austell-station"],
    season: null,
    frequency: "Tue–Fri, once each way, plus a second G3 on Tuesdays and the G4 on the third Monday of the month. No weekend buses",
    url: "https://gorranbus.org/timetable/",
    notes: "A volunteer-run community bus, open to anyone: concessionary passes, cash and contactless; well-behaved dogs welcome; 14 seats. Book on 01726 844933, Mon–Fri 7.30 – 8.20am, or booking@gorranbus.org; otherwise hail it at a stop. Boswinger, Portmellon and Gorran Haven Car Park only if booked, and it can collect from most addresses in St Goran and St Ewe parishes. Out, Tue–Fri and third Mondays: Boswinger Seaview 09:00, Portmellon 09:10, Gorran Haven Car Park 09:25, Triangle 09:30, Gorran Churchtown 09:35, Mevagissey School Hill 09:48, River Street 09:50, Pentewan 09:55, St Austell 10:05; then the G1 (Wed and Fri) to Asda 10:15, the G3 (Tue and Thu) to Truro bus station 10:30, the G4 to Plymouth 11:10. Tuesday's second G3 leaves Gorran Haven Car Park 13:40, Triangle 13:45, Mevagissey 14:05, St Austell 14:20. Back: G1 from St Austell South Street 11:25, Pentewan 11:33, Mevagissey 11:40, Gorran Haven Triangle 12:00; G3 from Truro 12:00 (Tue), 15:00 (Thu) and 16:15 (Tue), St Austell South Street 12:25, 15:25 and 16:40, booked only, Mevagissey 12:40, 15:40 and 16:55, Gorran Haven 13:00, 16:00 and 17:15; G4 from Holmbush Inn 17:05, South Street 17:10, Mevagissey 17:25, Gorran Haven 17:45. Journeys back don't call at Portmellon or Boswinger. The operator's timetable dates from September 2025, so ring to check",
    verified: "2026-09-16",
  },
  {
    slug: "service-24",
    number: "24",
    name: "St Austell – Par – Fowey",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16 and 19 Sep,
    // 27 Oct and 28 Dec 2026, which link "Timetable 24A, 24, 24S (From Sun 26th Jul
    // 2026)", and bustimes.org. Mon–Sat; on Sundays the 24A. St Austell is the
    // st-austell-station stop record: bus station Stand C (0800COZ06360) out, Stand
    // D (0800COZ06362) in. Daytime journeys run by Mount Charles, St Austell
    // Hospital (0800COC31476, OSM node 8979993212, 30 m from the st-austell-miu
    // record), Holmbush Inn and St Blazey Gate on the A390. The 19:20, 21:20 and
    // 23:20 from St Austell and the 20:00, 22:00 and 00:00 from Fowey go by
    // Charlestown Church (SW-bound 0800COC31469, OSM node 11435830525; opposite
    // 0800COC31470) and Biscovey instead, missing the hospital; Charlestown Church is
    // 330 m from the charlestown escape record, so the escape isn't served. Par goes
    // through the par endpoint record: every journey loops round Par both ways, by
    // opp Costcutter (0800COC31449, OSM node 9537858919), 100 m from it, and Moorland
    // Road (0800COC31407, OSM node 9537859017), 140 m. Par Railway Station (NW-bound
    // 0800COC31410, OSM node 11438533239; SE-bound 0800FWV38423, node 682276969)
    // goes through the par-station stop record. Fowey goes through the fowey escape
    // record, Main Car Park (SE-bound 0800COD40767, OSM node 682271769), where it
    // turns; nothing on it calls at Polkerris Turn or Readymoney. The 24S,
    // schooldays only, isn't entered. It serves no escape point on section 32 and
    // St Austell is beyond reach of Mevagissey, so it won't show there; section
    // 29's notes carry the change. No buses 25–26 Dec or 1 Jan; bank holiday Monday 28 Dec runs Saturday
    // times.
    serves: ["st-austell-station", "par", "par-station", "fowey"],
    season: null,
    frequency: "Mon–Sat all year, hourly: from St Austell 06:05 – 18:40, then 19:20, 21:20 and 23:20; from Fowey 06:00 – 19:30, then 20:00, 22:00 and 00:00. No Sunday buses: the 24A runs instead",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/24",
    notes: "The main bus between Par and St Austell, 30–35 minutes by the A390, and on from Par to Fowey in about 15. Towards St Austell, Mon–Sat from Par opp Costcutter 06:13, 07:18 (07:23 Saturdays), then 43 past 08:43 – 19:43, then 20:14, 22:14 and 00:14: Par Railway Station 6 minutes later, St Austell Hospital 06:36 – 20:02, St Austell bus station 06:47, 07:52 (07:57), 17 past 09:17 – 19:17, then 20:15, 20:36, 22:36 and 00:36. Towards Par and Fowey, from St Austell 06:05, 07:25, 08:00 (08:35 Saturdays), 35 past 09:35 – 17:35, then 18:40, 19:20, 21:20 and 23:20: St Austell Hospital 11 minutes later by day, Par Railway Station 29–30, opp Costcutter 31, Moorland Road 33, Fowey Main Car Park 47. For Mevagissey change at St Austell to the 29 at 35 past. For the Mevagissey ferry from Fowey, in season, Par Moorland Road at 8 past, Fowey Main Car Park 22 past, then 600 m down to Whitehouse Quay. From Fowey Main Car Park Mon–Sat 06:00, 07:05 (07:10 Saturdays and school holidays), 07:40, then 30 past 08:30 – 19:30, then 20:00, 22:00 and 00:00: Par Moorland Road 14 minutes later, Par Railway Station 19, St Austell bus station 47. From Polperro on weekdays, the 481 to Polruan and the ferry connect with the 10:30, 12:30, 15:30 and 19:30. Times for 16 and 19 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "service-24a",
    number: "24A",
    name: "St Austell – Charlestown – Carlyon Bay – Par – Fowey (Sundays)",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated page for 20 Sep 2026,
    // which links "Timetable 24A, 24, 24S (From Sun 26th Jul 2026)", and
    // bustimes.org. Sundays only; not 25 Dec or 1 Jan. St Austell is the
    // st-austell-station stop record, bus station Stand C (0800COZ06360) both ways.
    // By St Austell Hospital (0800COC31476) both ways. Charlestown goes through the
    // charlestown escape record, Old Chapel (NW-bound 0800COC31471 towards Par;
    // SE-bound 0800COC31472, OSM node 11435830522, towards St Austell). Carlyon Bay
    // goes through the carlyon-bay escape record, Hotel (NW-bound 0800COC31460
    // towards St Austell; opposite 0800COC31459, OSM node 11435830530, towards Par).
    // Par goes through the par endpoint record, opp Costcutter and Moorland Road,
    // and the par-station stop record, as the 24. Fowey goes through the fowey
    // escape record, Main Car Park (0800COD40767), where it turns.
    serves: ["st-austell-station", "charlestown", "carlyon-bay", "par", "par-station", "fowey"],
    season: null,
    frequency: "Sundays all year, every two hours: from St Austell 08:35 – 18:35, from Fowey 09:32 – 19:32",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/24A",
    notes: "The Sunday bus in place of the 24 and 25, and the Sunday way back on section 32. Towards Par and Fowey, from St Austell bus station 08:35, 10:35, 12:35, 14:35, 16:35 and 18:35: St Austell Hospital 10 minutes later, Charlestown Old Chapel 15, Carlyon Bay Hotel 20, Par Railway Station 36, opp Costcutter 38, Fowey Main Car Park 54. Towards St Austell, from Par opp Costcutter 09:47, 11:47, 13:47, 15:47, 17:47 and 19:47: Par Railway Station 4 minutes later, Carlyon Bay Hotel 20, Charlestown Old Chapel 27, St Austell Hospital 33, St Austell bus station 43, where the 29 leaves for Mevagissey at 11:35, 13:35, 15:35 and 17:35. From Fowey Main Car Park 09:32, 11:32, 13:32, 15:32, 17:32 and 19:32: Par Moorland Road 16 minutes later, Par Railway Station 19. Times for 20 Sep 2026",
    verified: "2026-09-16",
  },
  {
    slug: "service-25",
    number: "25",
    name: "St Austell – Charlestown – Carlyon Bay – St Blazey",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages for 16 and 19 Sep,
    // 27 Oct and 28 Dec 2026, which link "Timetable 25 (From Sun 26th Jul 2026)",
    // and bustimes.org. Mon–Sat; on Sundays the 24A. St Austell is the
    // st-austell-station stop record, bus station Stand B (0800COZ06363). A loop at
    // the St Austell end by St Austell Hospital (0800COC31476) and Duporth, both
    // ways. Charlestown goes through the charlestown escape record, Old Chapel
    // (SE-bound 0800COC31472 towards St Austell; NW-bound 0800COC31471 towards St
    // Blazey), and it also calls at Charlestown Church. Carlyon Bay goes through the
    // carlyon-bay escape record, Hotel (NW-bound 0800COC31460 towards St Austell;
    // opposite 0800COC31459 towards St Blazey); Carlyon Bay Shops (0800COC31463 /
    // 31464), 780 m west, is its timing point. Most journeys end at St Blazey Old
    // Roselyon Manor (0800COC31388 / 31389), not recorded. Only the 06:15 and 07:15
    // from St Austell and the 06:55 and 07:55 from Par go on to Par: Par Railway
    // Station, the par-station stop record, and opp Costcutter and Moorland Rd & Par
    // Green Jctn (0800COC31406, OSM node 682269158), the par endpoint record. No
    // buses 25–26 Dec or 1 Jan; bank holiday Monday 28 Dec runs Saturday times.
    serves: ["st-austell-station", "charlestown", "carlyon-bay", "par", "par-station"],
    season: null,
    frequency: "Mon–Sat all year, hourly: from St Austell 06:15 – 18:25, from St Blazey 07:02 – 19:00. Only two a day each way reach Par, early morning. No Sunday buses: the 24A runs instead",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/25",
    notes: "Charlestown and Carlyon Bay's weekday bus to St Austell. Towards Charlestown and St Austell, from Carlyon Bay Hotel 07:08, 08:08, 09:06, then 6 past to 19:06 (15:03 on schooldays): Charlestown Old Chapel 5 minutes later, St Austell Hospital 15, St Austell bus station 25. Towards Carlyon Bay and St Blazey, from St Austell bus station 06:15, 07:15, 08:22 (08:25 Saturdays and school holidays), then 25 past to 18:25: St Austell Hospital 10 minutes later, Charlestown Old Chapel 14, Carlyon Bay Hotel 19, St Blazey Old Roselyon Manor about half an hour. Only the first two go on to Par, Railway Station 06:48 and 07:48; from Par, Moorland Rd & Par Green 06:55 and 07:55, Carlyon Bay Hotel 07:08 and 08:08. For Mevagissey change at St Austell to the 29, at 35 past. Times for 16 and 19 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "mevagissey-fowey-ferry",
    number: "Ferry",
    name: "Mevagissey – Fowey ferry",
    type: "ferry",
    provider: "mevagissey-ferry",
    // Times, fares and season from the operator's own timetable, home and
    // connections pages, undated. The Traveline national dataset on bustimes.org,
    // 15 Sep 2026, has the same four a day each way, ending Mon–Fri 2 Oct,
    // Saturdays 3 Oct and Sundays 27 Sep. Landings are the two ends of OSM ferry way
    // 122079278 "Fowey - Mevagissey Ferry": Mevagissey, node 1738140577 (NaPTAN
    // 9300MEV1), in the outer harbour by Lighthouse Pier, 330 m in a straight line
    // and 400 m on OSM's ways from the mevagissey endpoint record; Fowey, node
    // 1364970683 "Whitehouse Slip" (NaPTAN 9300FOY1), the fowey-whitehouse stop
    // record. OSM's website tag, ferry.me.uk, is out of date. The operator says the
    // season closes on 4 October and to check social media for the start; its table
    // runs 1 May – 3 October.
    serves: ["mevagissey", "fowey-whitehouse"],
    season: { from: "05-01", to: "10-03" },
    frequency: "Daily in season, weather permitting: three a day each way 1–12 May, four 13 May – 24 June and 7 September – 3 October, five 25 June – 6 September",
    url: "https://www.mevagissey-ferries.co.uk/timetable",
    notes: "35 minutes across St Austell Bay, and in season a way back to Mevagissey from Par that avoids St Austell: the 24 from Par Moorland Road at 8 past, Mon–Sat, Fowey Main Car Park 22 past, then 600 m down to Whitehouse Quay; last the 16:08, for the 16:50 ferry, Mevagissey 17:30. 7 September – 3 October and 13 May – 24 June, from Mevagissey 10.00, 12.00, 14.00 and 16.00; from Fowey 10.50, 12.50, 14.50 and 16.50. 25 June – 6 September, from Mevagissey 10.00, 11.45, 13.30, 15.30 and 17.10; from Fowey 10.50, 12.35, 14.20, 16.20 and 18.00. 1–12 May, from Mevagissey 10.00, 13.00 and 16.00; from Fowey 10.50, 13.50 and 16.50. Doesn't sail in bad weather; the site posts a daily forecast. The national timetable data ends Sunday sailings on 27 September, so check before a late-season Sunday. Adults £12 single, £20 return; children £8 and £12; bikes £10; well-behaved dogs free; folding pushchairs. Pay on board, cash or card; no advance tickets. Urgent contact by text to 07977 203394",
    verified: "2026-09-16",
  },
  {
    slug: "cornish-main-line",
    number: "Train",
    name: "Cornish Main Line (Plymouth – Par – St Austell – Truro – Penzance)",
    type: "train",
    provider: "great-western-railway",
    // From GWR's own timetable K1, "Train times 17 May to 12 December 2026", pages
    // for Mondays to Fridays from 14 September, Saturdays from 19 September and
    // Sundays from 20 September. Par is the par-station stop record, St Austell the
    // st-austell-station stop record; Liskeard is the liskeard-station stop record; no other station on it is recorded yet (st-erth-station
    // could be added to serves once its times are checked).
    // The overnight sleeper's calls, set-down or pick-up only, are left out. The
    // Newquay branch from Par (K3) isn't entered. As entered it links no section's
    // ends and serves no escape point, so it shows on no section; it's here for the
    // station records and the Par – St Austell change on the way back from Par.
    serves: ["liskeard-station", "par-station", "st-austell-station"],
    season: null,
    frequency: "All year, every day. Par – St Austell about two an hour Mon–Sat and roughly hourly on Sundays: westbound from Par Mon–Fri 06:26 – 23:38, Saturdays 06:05 – 22:12, Sundays 09:42 – 22:09; eastbound from St Austell Mon–Fri 06:16 – 22:32, Saturdays 06:36 – 22:20, Sundays 09:04 – 22:27",
    url: "https://www.gwr.com/-/media/gwr-sc-website/files/timetables/may-26-december-26/K1-train-times-17-May-to-12-December-2026.pdf",
    notes: "Par to St Austell in 7–8 minutes, one stop, and on to Truro and Penzance; the other way Lostwithiel, Bodmin Parkway and Plymouth. St Austell station is beside the bus station, for the 29 and 23 to Mevagissey and the 51 to Portloe. From Par towards St Austell, Mon–Fri 06:26, 07:31, 08:12, 08:34, 09:10, 09:35, 10:10, 10:37, 11:09, 11:37, 12:06, 12:37, 13:10, 13:35, 14:01, 14:38, 15:10, 15:36, 16:05, 16:39, 17:09, 17:41, 18:17, 18:38, 19:08, 19:35, 20:16, 21:23, 22:05, 22:39, 23:31 and 23:38; Saturdays 06:05, 08:33, 09:08, 09:35, 10:09, 10:35, 11:08, 11:37, 12:03, 12:33, 13:09, 13:35, 14:06, 14:38, 15:11, 15:41, 16:05, 16:39, 17:08, 17:35, 18:06, 18:36, 19:09, 19:45, 20:26, 21:15 and 22:12; Sundays 09:42, 10:02, 10:16, 10:52, 11:28, 12:25, 13:03, 13:26, 14:02, 14:32, 15:32, 16:02, 16:32, 17:26, 18:02, 18:27, 19:31, 20:02, 20:34, 21:02 and 22:09. From St Austell towards Par, Mon–Fri 06:16, 06:35, 06:57, 07:24, 08:05, 08:41, then about 10 and 46 past 09:11 – 18:47, 19:08, 19:47, 20:11, 20:28, 21:12 and 22:32; Saturdays 06:36, 07:05, 07:35, 08:08, 08:36, 09:12, then about 12 and 46 past 09:46 – 18:42, 19:10, 20:27, 20:35 and 22:20; Sundays 09:04, 09:43, 10:04, 10:40, 11:08, 11:42, 12:25, 12:45, 13:14, 13:45, 14:45, 15:13, 15:44, 16:16, 16:39, 17:14, 17:40, 18:52, 19:10, 20:12, 21:21 and 22:27. Liskeard to Par in 23–29 minutes, for the Looe Valley Line and the 73 from Polperro: westbound from Liskeard Mon–Fri 06:02 – 23:11, Saturdays 05:40 – 21:47, Sundays 09:19 – 21:44. Par ticket office Mon–Fri 7.30am – 2pm, Sat 8am – 2.30pm, closed Sundays; St Austell Mon–Sat 7.30am – 7pm, Sundays 9am – 4.30pm. GWR warns that engineering work can change trains, especially at weekends: GWR.com/check. Times for 14 Sep – 12 Dec 2026",
    verified: "2026-09-16",
  },
  // Sections 33 and 34.
  {
    slug: "polruan-ferry",
    number: "Ferry",
    name: "Polruan ferry (Fowey – Polruan)",
    type: "ferry",
    provider: "c-toms-and-son",
    // Hours, landings, fares and dogs from C Toms & Son's own Polruan ferry pages:
    // operating hours "Last Updated 04/09/2026", current table valid until 26 Sep
    // 2026. Two OSM ferry ways from Polruan Quay (node 16412472), 84 m on OSM's
    // ways from the polruan escape record: way 30620876 to Whitehouse Slip (node
    // 1364970683), the fowey-whitehouse stop record, which the section 33 route
    // takes; and way 427980097 to Town Quay (node 3032371008), the
    // fowey-town-quay stop record. bustimes.org's national data has a nominal
    // every-15-minutes table from Town Quay; the operator says continuous.
    serves: ["polruan", "fowey-whitehouse", "fowey-town-quay"],
    season: null,
    frequency: "Every day except Christmas Day, continuously, leaving each side every 10–15 minutes. Until 26 September Mon–Thu 7am – 9pm, Fri 7am – 11pm, Sat 8am – 11pm, Sun 9am – 9pm; from 27 September Mon–Fri 7am – 7pm, Sat 8am – 7pm, Sundays to 7pm in October and 10am – 5pm from the clocks going back until late March",
    url: "https://ctomsandson.co.uk/polruan-ferry/ferry-fares-and-timetables/",
    notes: "The path's way over the Fowey, a few minutes across. Where it lands in Fowey depends on the date: 16 May – 15 September it runs to Whitehouse Pier on the Esplanade from 9.45am to 5.15pm (from 9am on summer Sundays), and to Town Quay, in the middle of Fowey, before 9.30am and from 5.30pm; 16 September – 15 May, Town Quay all day. The first ferry leaves from Polruan; the last leaves Polruan 5 minutes before the finishing time and Fowey at it. Adult single £3.50, child 3–12 £1.60, dogs 50p, bikes £2.10; all tickets single; cash or card. Dogs, bikes and pushchairs welcome, but both landings are reached by steps. Stops in rough weather: updates on the Polruan Ferry Facebook page and at the landings. The operator itself advises walkers heading for Polperro or Looe to take the bus out and walk back, as buses are limited. Late ferries can sometimes be booked with the ferrymen. Not the Bodinnick ferry, the same firm's car ferry upriver from Caffa Mill car park, which isn't on the path: all year except 25 December, foot passengers £3 single",
    verified: "2026-09-16",
  },
  {
    slug: "service-481",
    number: "481/482",
    name: "Polruan – Lansallos – Polperro – Looe",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages, which link
    // "Timetable 481, 482 (From Sun 26th Jul 2026)"; the PDF's own table (Mon–Fri
    // except bank holidays) agrees for the Polruan-to-Looe direction. The 481 runs
    // Mon, Tue, Thu and Fri; on Wednesdays the 482 replaces the 09:30 from Polruan,
    // going on from West Looe by Pelynt, Lanreath, Lerryn and Lostwithiel to
    // Bodmin, and comes back from Bodmin at 12:40. Polruan goes through the polruan
    // escape record, The Quay (W-bound 0800COD40757, OSM node 682271748), where it
    // starts and ends. Lansallos goes through the lansallos escape record,
    // Lansallos Church (N-bound 0800COD40751 towards Polruan; S-bound 0800COD40752,
    // OSM node 682271729, towards Polperro). Polperro goes through the polperro
    // endpoint record: Crumplehorn (E-bound 0800COA05249, OSM node 682267929;
    // W-bound 0800COD40749, node 682271720), 778 m up the village on OSM's ways.
    // Hannafore goes through the hannafore escape record, The Crescent (SW-bound
    // 0800COA15908), on some journeys only. Looe goes through the looe escape
    // record: Looe Bridge (N-bound 0800COA10167, OSM node 682268066; S-bound
    // 0800COA10166, node 682268065), 340 m on OSM's ways, where most journeys end;
    // only the 08:33 schoolday journey from Looe Community Academy calls at opp
    // Railway Station itself. West Looe The Square (0800COD40739, node 682271695),
    // on the route, isn't recorded. Carey Park, outside Killigarth Manor
    // (0800COA16230, no OSM node), is 1.2 km by lanes from the talland-bay escape
    // record: not served. Nothing between Polruan and Lansallos is anywhere near
    // Lantic Bay car park. No buses 25–26 Dec or 1 Jan.
    serves: ["polruan", "lansallos", "polperro", "hannafore", "looe"],
    season: null,
    frequency: "Mon–Fri only, all year. From Polruan 09:30, 12:00 (not Wednesdays), 14:30, 16:30 and 18:15; from Looe Bridge 08:40, 11:10 and 13:40 (neither on Wednesdays, when the 482 from Bodmin leaves West Looe The Square at 13:40), 15:40 in school holidays and 17:25. No Saturday or Sunday buses",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/481",
    notes: "Polruan's only bus, along the lanes behind the coast to Lansallos, Polperro's Crumplehorn stop at the top of the village, and West Looe. From Polruan The Quay 09:30, 12:00 (not Wednesdays), 14:30, 16:30 and 18:15: Lansallos Church 15 minutes later, Crumplehorn 25, West Looe The Square 38, Looe Bridge 43–48; the 09:30 and 18:15 go round by Hannafore The Crescent, 10:11 and 18:55. Towards Polruan, from Looe Bridge 08:40, 11:10 and 13:40 (not Wednesdays), 15:40 in school holidays and 17:25: Hannafore The Crescent 6 minutes later, Crumplehorn 23, Lansallos 32, Polruan 45. On Wednesdays the 482 from Bodmin at 12:40 instead of the 11:10 and 13:40: West Looe The Square 13:40, Crumplehorn 14:00, Polruan 14:22. On schooldays a 16:10 from Lansallos Church. Back to Par from Polperro, Mon–Fri: this bus from Crumplehorn 09:03, 11:33 (not Wednesdays), 14:03 (14:00 Wednesdays) or 17:48, Polruan The Quay 09:25, 11:55, 14:25 or 18:10, the ferry to Fowey, up to Fowey Main Car Park, the 24 at 10:30, 12:30, 15:30 or 19:30, Par Moorland Road 14 minutes later. Every day, the 73 to Liskeard and the train is quicker: Mon–Fri from Crumplehorn 08:54, 10:04, 12:04, 14:04, 16:25 (16:03 school holidays) or 17:09, Liskeard station 09:47, 10:47, 12:47, 14:47, 17:09 (16:47) or 17:52, trains at 10:14, 11:12, 13:10, 15:11, 17:51 (17:16) or 18:13, Par 10:37, 11:37, 13:35, 15:36, 18:17 (17:41) or 18:38; Saturdays the same buses with trains at 10:12, 11:12, 13:10, 15:17, 17:10 (from the 16:03) and 18:11, Par 10:35, 11:37, 13:35, 15:41, 17:35 and 18:36; Sundays the 73 from Crumplehorn 08:50, 10:50, 12:50, 14:50 or 16:50, Liskeard 09:37, 11:37, 13:37, 15:37 or 17:37, trains at 09:54, 12:00, 14:08, 16:08 or 18:03, Par 10:16, 12:25, 14:32, 16:32 or 18:27. Last of all the 10 from Crumplehorn at 17:50, Looe Railway Station 18:13, the Looe train at 19:02 (19:05 Saturdays; 18:45 Sundays until 8 November), Liskeard 19:31 (19:34; 19:14), the main line at 19:54 (20:02; 19:39), Par 20:16 (20:26; 20:02). Times for 15–21 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "service-73",
    number: "73",
    name: "Liskeard – Looe – Polperro",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages, which link
    // "Timetable 73, 73A (From Sun 26th Jul 2026)", and bustimes.org. Liskeard is
    // the liskeard-station stop record, Liskeard Railway Station (NE-bound
    // 0800COA15021, OSM node 682268456; SW-bound 0800COA10146, node 682274898), 2
    // minutes from Liskeard Bus Station / Bus Interchange (0800COA16703), where it
    // starts and ends, 770 m away. By St Keyne, Duloe and Sandplace. Looe goes
    // through the looe escape record, opp Railway Station (0800COA10165) and Looe
    // Railway Station (NW-bound 0800FWX38738), and Looe Bridge. West Looe The
    // Square and Fire Station aren't recorded. Polperro goes through the polperro
    // endpoint record, Crumplehorn, 778 m on OSM's ways. The 73A journeys, from
    // Liskeard 10:19, 12:20, 14:20 and 17:30 Mon–Sat, go from West Looe by
    // Trelawne and Pelynt instead and miss Polperro, except the 15:31 on schooldays, which reaches Crumplehorn by Pelynt; not entered separately. Nothing on it
    // calls at Talland, Hannafore or Millendreath. No buses 25–26 Dec or 1 Jan.
    serves: ["liskeard-station", "looe", "polperro"],
    season: null,
    frequency: "All year, every day. Mon–Sat about hourly Liskeard – Looe, eight a day on to Polperro Crumplehorn; Sundays every two hours, from Liskeard 07:50 – 17:50 and from Crumplehorn 08:50 – 16:50",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/73",
    notes: "Polperro and Looe's bus to Liskeard, for the Looe Valley Line and main line trains to Par and Plymouth; with the 10 it makes Looe – Polperro roughly hourly. From Polperro Crumplehorn Mon–Sat 06:50, 07:27, 08:54, 10:04, 12:04, 14:04, 16:25 (16:03 Saturdays and school holidays) and 17:09: Looe Bridge 13–31 minutes later, Liskeard Railway Station 35–53. Sundays 08:50, 10:50, 12:50, 14:50 and 16:50: Looe Bridge 09:15 – 17:15, Liskeard station 47 minutes after Crumplehorn. Towards Polperro, from Liskeard Bus Station Mon–Sat 06:46, 07:46, 09:20, 11:20, 13:20, 16:25 and 18:20, plus 15:19 on Saturdays and in school holidays: Looe Bridge 07:08, 08:30, 09:44, 11:44, 13:44, 16:49, 18:44 (15:43), Crumplehorn 07:24, 08:42, 10:01, 12:01, 14:01, 17:06, 19:01 (16:00); on schooldays the 15:31 goes by Pelynt, Crumplehorn 16:22. Sundays from Liskeard 07:50 – 17:50 every two hours, Looe Bridge 30 minutes later, Crumplehorn 52. Back to Par from Polperro by this bus and the train, every day: see the 481. Times for 15, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "service-10-looe",
    number: "10",
    name: "Plymouth – Saltash – Hessenford – Looe – Polperro",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages, which link
    // "Timetable 10, 10S (From Mon 31st Aug 2026)", and bustimes.org (which merges
    // some schoolday and holiday journeys; Transport for Cornwall's day-by-day
    // tables are used). Plymouth City Centre (Royal Parade A7, 118000002) isn't
    // recorded; the plymouth endpoint is 2 km from it. By Saltash, Landrake and
    // Tideford. Hessenford is the hessenford stop record: Opposite Copley Arms
    // (W-bound 0800COA10290) towards Looe, Copley Arms (E-bound 0800COA10291)
    // towards Plymouth. Looe goes through the looe escape record, opp Railway
    // Station (0800COA10165) and Looe Railway Station (NW-bound 0800FWX38738), both
    // ways, and Looe Bridge. Polperro goes through the polperro endpoint record,
    // Crumplehorn. bustimes.org lists Polperro Village Centre (0800COD40750), 200 m
    // from the endpoint, but no journey calls there on any date checked. The 10S,
    // schooldays only, St Germans – Downderry – Seaton – Looe Academy, isn't
    // entered. No buses 25–26 Dec or 1 Jan; bank holiday Monday 28 Dec runs
    // Saturday times.
    serves: ["plymouth-royal-parade", "hessenford", "looe", "polperro"],
    season: null,
    frequency: "All year, every day. Mon–Sat about every two hours: from Plymouth 08:55 – 17:25 (17:35 Saturdays and school holidays), from Polperro 06:55 – 17:50; Sundays every two hours, from Plymouth 10:05 – 18:05 and from Polperro 09:25 – 17:50",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/10",
    notes: "Polperro and Looe's bus to Plymouth, about 1 hour 45, and on section 34 the second half of the way back from Portwrinkle, changing from the 75 at Hessenford. Towards Looe and Polperro from Hessenford Opposite Copley Arms: Mon–Fri schooldays 09:46, 10:16, 12:16, 14:16, 16:55 and 18:16, Crumplehorn 10:40, 11:10, 13:10, 15:10, 17:45 and 19:10; Saturdays and school holidays 09:46, 10:16, 12:16, 14:16, 16:16 and 18:26, Crumplehorn 10:40, 11:10, 13:10, 15:10, 17:10 and 19:20; Sundays 10:52, 12:52, 14:52, 16:52 and 18:52, Crumplehorn 11:40 – 19:40. Looe Bridge is about 25 minutes before Crumplehorn. Extra short journeys from Looe to Polperro Mon–Sat at 07:41, and 08:41 and 15:26 on schooldays; Sundays 09:00. From Crumplehorn towards Looe and Plymouth, Mon–Fri 06:55, 08:00, 09:37, 11:37, 13:37, 15:37 and 17:50 (07:05 not 06:55 on Saturdays and in school holidays); Sundays 09:25, 11:50, 13:50, 15:50 and 17:50: Looe Bridge 14–25 minutes later, Hessenford 39–51, Plymouth about 1 hour 35 – 1 hour 55. Portwrinkle to Polperro, Mon–Sat, with the 75: from Finnygook Beach 09:12, Hessenford West End Cottages 09:39, this bus at 10:16, Crumplehorn 11:10; 12:12, Hessenford 12:39, this bus at 14:16, Crumplehorn 15:10; 14:12, Hessenford 14:39, this bus at 16:55 (16:16 Saturdays and school holidays), Crumplehorn 17:45 (17:10); on schooldays last 15:39, Hessenford 16:07, this bus at 16:55, Crumplehorn 17:45; on Saturdays and in school holidays last 16:12, Hessenford 16:39, this bus at 18:26, Crumplehorn 19:20. The two Hessenford stops are 80 m apart. Times for 15, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "service-75",
    number: "75",
    name: "Torpoint – Crafthole – Portwrinkle – Downderry – Seaton – Liskeard",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's dated pages, which link
    // "Timetable 75 (From Sun 26th Jul 2026)", and bustimes.org. Torpoint is the
    // torpoint-ferry stop record: Torpoint Ferry (SW-bound 0800COB20005), where it
    // starts, and Torpoint Ferry (NE-bound 0800COB20003), where it ends. By HMS
    // Raleigh, Antony, Sheviock and Crafthole Cross Park (0800COA05224 / 05223), 850
    // m on OSM's ways from the portwrinkle endpoint. Portwrinkle goes through the
    // portwrinkle endpoint record: it loops through the village both ways, calling
    // at Finnygook Beach (0800COA10303, OSM node 682268173), 271 m on OSM's ways, and
    // Donkey Lane (0800COA16148 / 16149), 180 m from the route. Downderry goes
    // through the downderry escape record, opp Broads Yard (W-bound 0800COA10296,
    // OSM node 682268158, tagged "The Nook") and Broads Yard (E-bound 0800COA10298,
    // node 682268162); also Church and Tregunnus Lane. Seaton goes through the
    // seaton-cornwall escape record, opp The Car Park (W-bound 0800COA10293) and
    // The Car Park (E-bound 0800COY38529, OSM node 682275263), with Sea Front (NW-bound
    // 0800COA10295, opp 0800COA10294) 180 m east. Hessenford is the hessenford stop
    // record: West End Cottages (N-bound 0800FWZ38633, OSM node 682280453; opposite
    // 0800FWZ38632, node 682280448), 77 m on OSM's ways from the 10's stop. Ends at
    // Liskeard Bus Interchange (0800COA16702 / 16703), 770 m from Liskeard station:
    // not in serves, since the liskeard-station record is the station. It doesn't go
    // to Looe. No buses 25–26 Dec or 1 Jan; bank holiday Monday 28 Dec runs Saturday
    // times.
    serves: ["torpoint-ferry", "crafthole", "portwrinkle", "downderry", "seaton-cornwall", "hessenford"],
    season: null,
    frequency: "Mon–Sat all year, six a day each way, roughly two-hourly: from Torpoint 08:50 – 18:05, from Liskeard 07:25 – 16:45. No Sunday buses",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/75",
    notes: "The only bus along section 34 east of Looe, on the coast road through Portwrinkle, Downderry and Seaton, then inland by Hessenford to Liskeard. Towards Hessenford and Liskeard, from Portwrinkle Finnygook Beach 09:12, 10:12, 12:12, 14:12, 15:39 on schooldays or 16:12 on Saturdays and in school holidays, and 18:26: Downderry Broads Yard 16 minutes later, Seaton Sea Front 21, Hessenford 27, Liskeard Bus Interchange 46–48; the 18:26 ends at Widegates. Towards Portwrinkle and Torpoint, from Hessenford Opposite West End Cottages 07:46, 08:47 (08:52 Saturdays and school holidays), 10:47, 12:47, 14:05 (14:50) and 17:05: Seaton 7 minutes later, Downderry 10–12, Portwrinkle Finnygook Beach 25–30, Torpoint Ferry 50–55. Back to Polperro from Portwrinkle, Mon–Sat: change at Hessenford to the 10, whose stop is 80 m on, or ride on to Liskeard for the 73. From Finnygook Beach 09:12, Crumplehorn 11:10 by Hessenford; 10:12, Liskeard 10:58, the 73 at 11:20, Crumplehorn 12:01; 12:12, Liskeard 12:58, the 73 at 13:20, Crumplehorn 14:01; 14:12, Hessenford 14:39, the 10 at 16:55 (16:16 Saturdays and school holidays), Crumplehorn 17:45 (17:10), or Liskeard 14:58 and the 73 at 16:25 (15:19), Crumplehorn 17:06 (16:00); on schooldays last 15:39, Hessenford 16:07, the 10 at 16:55, Crumplehorn 17:45; on Saturdays and in school holidays last 16:12, Liskeard 16:59, the 73 at 18:20, Crumplehorn 19:01. No Sunday buses at Portwrinkle: a taxi, or early on Sunday morning the 70B from Crafthole Cross Park at 08:51 to Torpoint and Plymouth City Centre, 10:00, for the 10 at 12:05, Crumplehorn 13:40, and walk back. Times for 15, 19 and 20 Sep 2026; school-holiday times for 27 Oct",
    verified: "2026-09-16",
  },
  {
    slug: "looe-valley-line",
    number: "Train",
    name: "Looe Valley Line (Liskeard – Looe)",
    type: "train",
    provider: "great-western-railway",
    // From GWR's own timetable K2, "Train Times 17 May to 12 December 2026" (the
    // v2 PDF), pages for Mondays to Fridays, Saturdays, and Sundays until 8
    // November. Looe goes through the looe escape record: Looe station (OSM node
    // 32039894, NaPTAN 9100LOOE, CRS LOO, GWR category A) is 36 m from it. Liskeard
    // is the liskeard-station stop record. As entered it calls at only one place
    // section 34 touches, so it shows on no section; the looe escape detail and the
    // 481 carry it.
    serves: ["looe", "liskeard-station"],
    season: null,
    frequency: "Mon–Sat 13 trains each way: from Liskeard 06:55 – 21:16 (21:10 Saturdays), from Looe 07:33 – 21:55 (07:31 – 21:42 Saturdays). Sundays until 8 November, 8 each way: from Liskeard 09:31 – 20:15, from Looe 10:03 – 20:49. No Sunday trains after 8 November",
    url: "https://www.gwr.com/-/media/gwr-sc-website/files/timetables/may-26-december-26/K2-train-times-17-May-to-12-December-2026-v2.pdf",
    notes: "Up the East Looe valley to Liskeard in 25–32 minutes, for main line trains to Par and Plymouth. Sandplace, Causeland and St Keyne Wishing Well Halt are request stops: tell the conductor, or signal the driver. From Looe Mon–Fri 07:33, 09:02, 10:09, 11:18, 12:26, 13:29, 14:34, 15:45, 16:50, 17:52, 19:02, 20:42 and 21:55; Saturdays 07:31, 09:01, 10:08, 11:21, 12:22, 13:26, 14:35, 15:40, 16:55, 17:54, 19:05, 20:39 and 21:42; Sundays until 8 November 10:03, 11:06, 12:43, 14:33, 15:43, 17:04, 18:45 and 20:49. From Liskeard Mon–Fri 06:55, 08:16, 09:37, 10:48, 11:54, 12:57, 13:58, 15:15, 16:18, 17:22, 18:24, 20:05 and 21:16; Saturdays 06:55, 08:15, 09:36, 10:51, 11:50, 12:54, 13:55, 15:10, 16:23, 17:24, 18:25, 20:07 and 21:10; Sundays 09:31, 10:34, 12:11, 13:51, 15:11, 16:25, 17:55 and 20:15. Looe station is unstaffed; Liskeard's ticket office Mon–Fri 7am – 6pm, Sat 8am – 6pm, Sun 9.15am – 4.45pm. GWR warns that engineering work can change trains, especially at weekends: GWR.com/check. Times for 14 Sep – 12 Dec 2026",
    verified: "2026-09-16",
  },
  // Section 35.
  // ── Section 35 ──
  {
    slug: "service-70",
    number: "70/70A",
    name: "Plymouth – Torpoint – Tregantle – Freathy – Cawsand – Millbrook – Cremyll",
    type: "bus",
    provider: "go-cornwall-bus",
    // Stops and times from Transport for Cornwall's page, which links "PDF
    // Timetable 70, 70A, 70B, 70S (From Sun 26th Jul 2026)", and bustimes.org's
    // all-stops tables. Plymouth is the plymouth-royal-parade stop record (Stop A3,
    // 1180PLC30132) and the plymouth-station stop record (Railway Station R2
    // 1180PLC30137 out, R1 1180PLC30139 in). Torpoint is the torpoint-ferry stop
    // record: Torpoint Ferry (SW-bound 0800COB20005) out, (NE-bound 0800COB20003)
    // in; the bus crosses on the chain ferry. By HMS Raleigh and Antony Village Shop
    // (W-bound 0800COA10285, opposite 0800COA10286, 22 m apart). Tregantle goes
    // through the tregantle escape record: Tregantle Fort (NW-bound 0800FWX38747)
    // towards Torpoint, Tregantle Fort Car Park (SE-bound 0800COB20050, NaPTAN
    // position 50.35560, -4.26434, 30 m) towards Cremyll. Freathy goes through the
    // freathy escape record: Shelter (SE-bound 0800COB20091) and opp Shelter
    // (0800COA15559, OSM node 12532330283). Polhawn goes through the proposed
    // polhawn escape record: Polhawn Car Park (NW-bound 0800COA15565, SE-bound
    // 0800COB20085). Also Freathy Sharrow Point, Farmers Field Car Park, Whitsand Bay
    // Holiday Park and Rame View Cafe, and Rame Village (E-bound 0800COA15581, OSM node
    // 9521989417; W-bound 0800COB20083), 970 m from the rame-head escape record, so
    // not in serves. Cawsand goes through the cawsand escape record: Kingsand New
    // Road (NW-bound 0800COX38470) towards Millbrook and Cremyll, and (SE-bound
    // 0800COB20080, 16 m) towards Rame and Torpoint; Cawsand Triangle (0800COA15577 /
    // 0800COB20081) 340 m from the route. Cremyll is the cremyll endpoint: Cremyll
    // Ferry (0800COY38556, OSM node 682268542), 80 m. The 70A starts at Milehouse and
    // doesn't reach the city centre; the 70S school bus and the schoolday 70A by
    // Hounster Hill aren't described. bustimes.org doesn't time Freathy, Polhawn or
    // Rame on Sunday journeys towards Cremyll, though the PDF shows them passing
    // Whitsand Bay Holiday Park. No Freathy stop on TfC's own tables for any date:
    // they carry the Military Road diversion.
    serves: ["plymouth-station", "plymouth-royal-parade", "torpoint-ferry", "tregantle", "freathy", "polhawn", "cawsand", "cremyll"],
    season: null,
    frequency: "Every day. Mon–Sat about hourly: towards Cremyll from Plymouth Royal Parade 07:50 (08:00 Saturdays) – 17:20, with 70As from Torpoint Ferry from 05:54; from Cremyll 07:35 (07:55 Saturdays) – 19:15. Sundays every two hours: from Torpoint Ferry 07:09 – 14:54, from Cremyll 12:25 – 18:10. The 70B adds journeys by Crafthole",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/70",
    notes: "Along the coast road above Whitsand Bay to Cawsand, then back inland by Millbrook to Cremyll, crossing on the Torpoint chain ferry: Plymouth Royal Parade to Cremyll in about 1 hour 50, so it is the way round when the Cremyll ferry isn't running. Towards Cremyll from Torpoint Ferry, Mon–Sat 08:39, 09:39, 10:39, 11:39, 13:39, 14:39 (Saturdays and school holidays) and 17:59: Tregantle Fort Car Park 28 minutes later, Freathy 32, Kingsand New Road 46, Cremyll 71. Early 70As from Torpoint Ferry 05:54 and 06:54 Mon–Sat, also 06:24 and 07:14 Mon–Fri and 07:54 Saturdays, reaching Cremyll 06:43 – 08:43. Sundays from Torpoint Ferry 07:09, 09:24, 10:54, 12:54 and 14:54, Cremyll 59 minutes later. Towards Torpoint and Plymouth from Cremyll Ferry, Mon–Sat 07:35 Mon–Fri (07:55 Saturdays; also 08:10 in school holidays), 09:00, 11:00, 13:00, 14:00, 15:00, 16:05, 17:05, 18:15 and 19:15: Kingsand New Road 20 minutes later, Freathy 30–32, Tregantle Fort 35–37, Torpoint Ferry 57–65, Royal Parade 1 hour 25 – 1 hour 45; later from Insworke, Millbrook, 19:58 and 21:13. Sundays from Cremyll 12:25, 14:25, 16:25 and 18:10. Not to Crafthole or Portwrinkle: the 70B goes by Crafthole, or change at Antony Village Shop to the 70B or the 75. Military Road between Tregantle and Cawsand is closed to buses 14 Sep – 2 Oct 2026 for South West Water works: every bus runs by Hounster Hill and Millbrook instead, so none at Freathy, Polhawn or Rame, and buses for Cremyll go to Cawsand and turn back. Times for 3, 4 and 6 Oct 2026",
    verified: "2026-09-16",
  },
  {
    slug: "service-70b",
    number: "70B",
    name: "Plymouth – Torpoint – Crafthole – Freathy – Cawsand – Cremyll",
    type: "bus",
    provider: "go-cornwall-bus",
    // Same sources and stops as service-70, plus a loop from Antony Village Shop by
    // Sheviock to Crafthole, the crafthole stop record: Crafthole Cross Park
    // (S-bound 0800COA05224) towards Tregantle and Cremyll, opp Cross Park
    // (0800COA05223) towards Torpoint; the PDF names the Sunday stop Crafthole
    // Kimberley Foster Close, beside it. Crafthole Cross Park is also where the 75
    // stops, 850 m on OSM's ways from the portwrinkle endpoint: portwrinkle isn't in
    // serves. The 18:20 and 19:55 from Plymouth end at Insworke, Millbrook, and the
    // 21:25 at Crafthole; the 22:17 starts there.
    serves: ["plymouth-station", "plymouth-royal-parade", "torpoint-ferry", "crafthole", "tregantle", "freathy", "polhawn", "cawsand", "cremyll"],
    season: null,
    frequency: "Every day, a few a day. Mon–Sat towards Cremyll from Plymouth Royal Parade 12:00, 15:00 and 16:10, to Millbrook only 18:20 and 19:55, to Crafthole only 21:25; from Cremyll 06:45, 09:55 and 11:55, and from Crafthole 22:17. Sundays from Royal Parade 16:20, from Cremyll 08:10 and 10:25",
    url: "https://www.transportforcornwall.co.uk/services/TFCN/70",
    notes: "The only bus between Crafthole, uphill from Portwrinkle, and Cremyll without a change. From Cremyll Ferry, Mon–Sat 06:45, 09:55 and 11:55: Kingsand New Road 20 minutes later, Freathy 32, Crafthole opposite Cross Park 07:26, 10:36 and 12:36 (12:37 Saturdays), Torpoint Ferry 07:55, 11:08 and 13:08, Royal Parade about 1 hour 50 after Cremyll. Sundays from Cremyll 08:10 and 10:25, Crafthole 08:51 and 11:06. From Crafthole Cross Park towards Cremyll, Mon–Sat 13:05, 16:05 and 17:21: Freathy 10–11 minutes later, Kingsand New Road about 25, Cremyll 13:55, 16:55 and 18:10; also 19:16 and 20:46 as far as Insworke, Millbrook. Sundays 17:19, Cremyll 18:05. Royal Parade to Crafthole about 65 minutes. With a van at Cremyll, the morning bus out to Crafthole and walk back. With a van at Portwrinkle, back after the walk means a change at Antony Village Shop, whose two stops face each other: Mon–Sat the 70 from Cremyll at 13:00, Antony 13:41, then the 75 at 13:59, Portwrinkle Finnygook Beach 14:12; 14:00, Antony 14:41, then on schooldays the 75 at 15:25, Finnygook Beach 15:39; 15:00, Antony 15:41, then this bus at 15:57, Crafthole 16:05, or on Saturdays and in school holidays the 75 at 15:59, Finnygook Beach 16:12; 16:05, Antony 16:46, then this bus at 17:12, Crafthole 17:21; 17:05, Antony 17:46, then the 75 at 18:13, Finnygook Beach 18:26; 18:15, Antony 18:53, then this bus at 19:08, Crafthole 19:16; last 19:15, Antony 19:53, then this bus at 20:38, Crafthole 20:46. Sundays only the 70 from Cremyll at 16:25, Antony 17:06, then this bus at 17:09, Crafthole 17:19: a three-minute change. Military Road closed to buses 14 Sep – 2 Oct 2026, as on the 70. Times for 3, 4 and 6 Oct 2026",
    verified: "2026-09-16",
  },
  // ── Crossing 35.5 ──
  {
    slug: "cremyll-ferry",
    number: "Ferry",
    name: "Cremyll Ferry (Cremyll – Admiral's Hard, Stonehouse)",
    type: "ferry",
    provider: "plymouth-boat-trips",
    // Landings are the two ends of OSM ferry way 9644007 "Cremyll Ferry": node
    // 75340473 at Cremyll Quay (the cremyll endpoint) and node 9316008452 at the
    // Admiral's Hard slipway, 36 m from the plymouth endpoint. Times from the
    // operator's two 2026 PDFs; bustimes.org's TNDS data (last sailing 19:30 in
    // September) is out of date.
    serves: ["cremyll", "plymouth"],
    season: null,
    frequency: "All year, every 30 minutes: from Cremyll on the hour and half past, from Admiral's Hard at quarter past and quarter to. First from Cremyll 06:45 Mon–Fri, 07:30 Saturdays, 08:30 Sundays. Last from Cremyll 1 Apr – 30 Sep 2026: 21:00 Mon–Thu, 22:00 Fri and Sat, 21:30 Sun; 1 Oct 2026 – 31 Mar 2027: 18:30 Mon–Fri, 19:00 Sat, 18:00 Sun. Last from Admiral's Hard 15 minutes after",
    url: "https://www.plymouthboattrips.co.uk/ferries/cremyll-ferry/",
    notes: "The path's way over the mouth of the Tamar, about 8 minutes. The early crossings aren't half-hourly: Mon–Fri from Cremyll 06:45, 07:30, 08:15, 09:00, then every 30 minutes, and from Admiral's Hard 07:15, 07:45, 08:45, 09:15; Saturdays from Cremyll 07:30, 08:00, 08:30 and from Admiral's Hard 07:45, 08:15, 08:45; Sundays from 08:30 and 08:45. Bank holidays run Sunday times. Adult £3, child 3–15 £2, under 3 free, bicycles £1.50; well-behaved dogs free. Cash or card on board, or online for that day only; first come, first served. Not wheelchair accessible. In bad weather check the operator's home page, which shows live status, or ring 01752 253153. From November 2025 to 18 July 2026 it ran from Royal William Yard while the Admiral's Hard slipway was repaired. At Admiral's Hard the 34 bus to Royal Parade, about every 30 minutes Mon–Sat and hourly on Sundays. When it isn't running, the 70 from Cremyll goes round by Millbrook and the Torpoint chain ferry, about 1 hour 45 to Royal Parade",
    verified: "2026-09-16",
  },
  {
    slug: "service-34-plymouth",
    number: "34",
    name: "Plymouth City Centre – Stonehouse – Devonport – Derriford Hospital",
    type: "bus",
    provider: "plymouth-citybus",
    // Stops and times from Plymouth Citybus's page, which links "PDF Timetable 34
    // (From Sun 30th Aug 2026)", and bustimes.org, which agree. The plymouth
    // endpoint goes through Stonehouse Cremyll Street (1180PLA10004, OSM node
    // 399450532 "Admiral's Hard"), 60 m from it, used both ways; Admiralty Street
    // (1180PLA10079, node 399451106) is 130 m. Royal Parade is the
    // plymouth-royal-parade stop record: Stop A2 (1180PLC30131, node 533335523),
    // 27 m from A3; into town on Sundays Stop A24 (118000061). Also Royal William
    // Yard (1180PLA10081), Mount Wise Village by the Sea (1180PLZ01931, OSM node
    // 9112221494 "Cumberland Centre"), 85 m from the Cumberland Centre urgent
    // treatment centre, Devonport Torpoint Ferry (1180PLG40087) and Derriford
    // Hospital Stand 2 (1180PLA10417). It shows only on crossing 35.5, and there
    // only because lib/transport.js counts the ferry crossing itself as a walk from
    // Cremyll; on section 36 it needs an escape on it, such as Royal William Yard.
    serves: ["plymouth", "plymouth-royal-parade"],
    season: null,
    frequency: "Every day. Mon–Sat about every 30 minutes, hourly in the evening: from Royal Parade 05:00 (05:30 Saturdays) – 21:50, from Cremyll Street into town 06:36 (06:47 Saturdays) – 23:06. Sundays hourly: from Royal Parade 06:00 – 19:30, from Cremyll Street 06:54 – 20:46",
    url: "https://www.plymouthbus.co.uk/services/PLYC/34",
    notes: "The bus at Admiral's Hard, where the Cremyll ferry lands: Cremyll Street to Royal Parade in 6–8 minutes. Into town from Cremyll Street, Mon–Fri 06:36, 07:01, 07:41, 08:38, then 12 and 42 minutes past from 09:12 to 16:12, 16:52, 17:22, 17:52, 18:22, 18:44, 19:14, then hourly 20:06 – 23:06; Saturdays 06:47, 07:47, 08:17, 08:47, 09:17, then 12 and 42 past from 10:12 to 18:42, 18:45, 19:15, then hourly 20:06 – 23:06; Sundays 06:54, then hourly 08:46 – 20:46. The other way from Cremyll Street it goes by Mount Wise for the Cumberland Centre urgent treatment centre, 3 minutes, the Devonport side of the Torpoint ferry, 10 minutes, and Stoke and Crownhill to Derriford Hospital, about 40 minutes: Mon–Fri 05:10 – 21:59, at 11 and 41 past from 08:41 to 14:11; Saturdays 05:39 – 21:59; Sundays 06:09, 07:09, 07:39, then hourly 08:39 – 19:39. Royal Parade to Cremyll Street 10–11 minutes. Times for 3, 4 and 6 Oct 2026",
    verified: "2026-09-16",
  },
  // Section 36.
  {
    slug: "service-25-plymouth",
    number: "25",
    name: "Plymouth City Centre – Barbican – The Hoe – West Hoe",
    type: "bus",
    provider: "plymouth-citybus",
    // Stops and times from Plymouth Citybus's page, which links "PDF Timetable
    // 25 (From Sun 30th Aug 2026)", and bustimes.org, which agree. Royal Parade
    // is the plymouth-royal-parade stop record: Stop A15 (1180PLC30113), 130 m
    // from A3, used both ways. The Barbican goes through the barbican escape
    // record, which is the Mayflower Steps stop itself (1180PLC30005, OSM node
    // 10062425917); also Barbican Distillery, The Navy and Lambhay Hill, all
    // within 300 m of it. Then Citadel Hill, Plymouth Dome, West Hoe Park,
    // Rusty Anchor and Walker Terrace, every one of them on the section's
    // route, but none is a record.
    serves: ["plymouth-royal-parade", "barbican"],
    season: null,
    frequency: "Every day. Mon–Sat every 30 minutes from Royal Parade 09:00 – 22:00; Sundays hourly 09:30 – 17:30. Nothing before 9am",
    url: "https://www.plymouthbus.co.uk/services/PLYC/25",
    notes: "A one-way loop round the first few kilometres of the section: Royal Parade Stop A15 to Barbican Mayflower Steps in 5 minutes, then Lambhay Hill, Citadel Hill, the Hoe, West Hoe and back to Royal Parade 24 minutes after it set out. It only goes that way round, so from the Barbican into town is the long way, 19 minutes by the Hoe. Mon–Sat from Royal Parade on the hour and half past 09:00 – 22:00; Sundays hourly 09:30 – 17:30, with the Mayflower Steps 8 minutes on rather than 5. It doesn't reach Admiral's Hard, where the section starts: that's the 34. Timetable from 30 Aug 2026",
    verified: "2026-09-16",
  },
  {
    slug: "mount-batten-ferry",
    number: "Ferry",
    name: "Mount Batten Ferry (Barbican – Mount Batten)",
    type: "ferry",
    provider: "mount-batten-ferry",
    // Landings are the two ends of OSM ferry way 126500824 "Mount Batten
    // Ferry": node 529742033, Barbican Landing Stage, 82 m from the barbican
    // escape record, and node 503195631, 265 m from the mount-batten escape
    // record. Times from the operator's own timetable page; the Traveline data
    // on bustimes.org (08:15 – 21:45 every day, all year) is out of date.
    serves: ["barbican", "mount-batten"],
    season: null,
    frequency: "All year, every 30 minutes: from the Barbican at quarter past and quarter to the hour, from Mount Batten on the hour and half past. 1 May – 27 Sep 2026 Mon–Fri 8am – 10pm, Sat and Sun 9am – 10pm; 28 Sep 2026 – May 2027 Mon–Fri 8am – 6.15pm, Sat and Sun 9am – 6.15pm",
    url: "https://www.mountbattenferry.co.uk/timetable-2/",
    notes: "Four minutes across the Cattewater between the Barbican Landing Stage, by the Mayflower Steps, and the Mount Batten pier by the bar. Not the path, which goes all the way round by Laira Bridge, Hooe and Turnchapel, but it turns that round into a short cut. Adult £3.25, child 3–14 £1.75, under 3s free, bicycles £2.00 from 1 July 2026; dogs free. The operator's fares page still shows the old £3.00, £1.50 and £1.50 alongside them, under a heading about the July increase, so check on board. 20 and 40-trip concession cards. \"363 days a year\", and \"all crossings subject to weather and circumstances\"; winter disruption goes on its Facebook page",
    verified: "2026-09-16",
  },
  {
    slug: "waterlink-ferry",
    number: "Ferry",
    name: "Waterlink Ferry (Barbican – Royal William Yard – Saltash)",
    type: "ferry",
    provider: "plymouth-boat-trips",
    // OSM ferry way 716690726, "The Barbican & Royal William Yard", seasonal=yes.
    // Its Royal William Yard end, node 6731870492, is 410 m from the plymouth
    // endpoint and 60 m from the route; its Barbican end, node 10165991271, is
    // 100 m from the barbican escape record. It is served through `plymouth`
    // because the landing is a walk along Cremyll Street from Admiral's Hard,
    // which is how the operator itself describes the connection.
    serves: ["plymouth", "barbican"],
    season: { from: "04-01", to: "11-01" },
    frequency: "1 Apr – 30 Sep 2026 six each way between Royal William Yard and the Barbican, 08:45 – 17:15, and four on to Saltash; 1 Oct – 1 Nov 09:45 – 17:15. Nothing after 1 November",
    url: "https://www.plymouthboattrips.co.uk/ferries/waterlink-ferry/",
    notes: "The water version of the section's first stretch: Royal William Yard, a short walk along Cremyll Street from Admiral's Hard, round Devil's Point and the Hoe to the Barbican Landing Stage. From Royal William Yard 08:45, 10:45, 12:45, 13:45, 15:45 and 16:45; back from the Barbican 09:15, 11:15, 13:15, 14:15, 16:15 and 17:15. On to Saltash from Royal William Yard 09:45, 11:45, 14:45 and 17:45, back from Jubilee Pier 10:15, 12:15, 15:15 and 18:15; the two afternoon Saltash runs are marked \"no crossing\". Adult £5, child 3–15 £2.50, children 2 and under free, bicycles £2.50. \"Well behaved dogs are very welcome\"; no dog fare given. Tickets are single journey only — no hopping off and rejoining later. A drop-off at Mount Edgcumbe can be asked for on the way; coming back means the Cremyll ferry to Admiral's Hard and a walk to Royal William Yard. Weather, tide and circumstances permitting. Bustimes' Traveline data still times it calling at Cremyll, which the operator's own timetable makes a drop-off on request",
    verified: "2026-09-16",
  },
  {
    slug: "service-2-plymouth",
    number: "2",
    name: "Saltash – Plymouth City Centre – Hooe – Turnchapel – Mount Batten",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stops and times from Stagecoach's own data on bustimes.org, "15 September
    // 2026"; the operator's PDF for the same service is "Service 2 – Saltash –
    // Mount Batten via City Centre", August 2026. Royal Parade is the
    // plymouth-royal-parade stop record: Stop A6 (118000027) into town, A11
    // (1180PLC30109) out, 130–220 m from A3. Mount Batten goes through the
    // mount-batten escape record: Mount Batten Pier (1180PLB11977) is 7 m from
    // it, and the Water Sports Centre stop is on the route. It also calls at
    // Turnchapel Tapson Drive and Cunliffe Avenue, Hooe St Johns Church, Hooe
    // Lake, Meadow Park, Homer Park and Radford Dip, and Prince Rock Laira
    // Bridge — all within 250 m of the route, none of them a record.
    serves: ["plymouth-royal-parade", "mount-batten"],
    season: null,
    frequency: "Every day. Mon–Sat about every 20 minutes daytime, then hourly until 23:34; Sundays every 30 minutes. First from Mount Batten Pier 06:02 Mon–Fri, 06:45 Saturdays, 07:56 Sundays; last 23:34 every day",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/August%202026/Plymouth/Service%202.pdf",
    notes: "The frequent bus along the city half of the section, and the only one that runs on a Sunday: Mount Batten Pier, Turnchapel, Hooe, Plymstock and Laira Bridge to Royal Parade in 26–34 minutes, then on to Devonport, St Budeaux and Saltash. Towards town from Mount Batten Pier, Mon–Fri about every 20 minutes 06:02 – 20:34, then 21:34, 22:34 and 23:34; Saturdays 06:45 – 20:34 and the same late ones; Sundays every 30 minutes 07:56 – 18:29, then 18:45, 19:34, 19:45, 20:10, 20:34, 21:34, 22:34 and 23:34. Towards Mount Batten, from Hooe Lake Mon–Fri 05:57 – 23:23, Saturdays 06:39 – 23:23, Sundays 07:50 – 23:23, with Turnchapel 1 minute on and Mount Batten Pier 3. Doesn't go to the Barbican, Jennycliff or Bovisand. Times for 3, 4 and 6 Oct 2026",
    verified: "2026-09-16",
  },
  {
    slug: "service-54",
    number: "54",
    name: "Plymouth City Centre – Plymstock – Hooe – Jennycliff – Bovisand",
    type: "bus",
    provider: "stagecoach-south-west",
    // Times from Plymouth City Council's own announcement of the 2026 service
    // and from Stagecoach's data on bustimes.org, which carries the last week
    // it ran (30 Aug – 6 Sep 2026) and matches to the minute. Stagecoach's
    // timetable pages drop the service out of season, so there is no operator
    // page to check the season dates against: hence verified: null. Jennycliff
    // goes through the jennycliff escape record — Jennycliff Car Park
    // (1180PCY38492) is 1 m from it and Jennycliff Bay (1180PLB11973) 47 m;
    // Bovisand through the bovisand escape record, Bovisand Cafe
    // (1100PLB11972), 35 m. Also Hooe Lake, Homer Park and Radford Dip.
    // The season runs in two blocks with six weeks of nothing between them,
    // which one `season` can't say: the range below covers both and the
    // frequency line names the gap.
    serves: ["plymouth-royal-parade", "jennycliff", "bovisand"],
    season: { from: "05-23", to: "09-06" },
    frequency: "Daily, but in 2026 only 23–31 May and 25 July – 6 September, with nothing in the six weeks between and nothing the rest of the year: 7 a day each way. Set afresh each year",
    url: "https://www.plymouth.gov.uk/news/all-aboard-bus-bovisand",
    notes: "Plymouth's summer beach bus, and the only bus that reaches Jennycliff or Bovisand at all. From Royal Parade Stop A14 09:40, 10:45, 11:50, 12:55, 15:30, 16:45 and 17:55: Hooe Lake about 20 minutes later, Jennycliff Car Park 21, Bovisand Cafe 26. Back from Bovisand Cafe 10:10, 11:15, 12:20, 13:25, 16:05, 17:20 and 18:25, Jennycliff Bay 5 minutes later, Royal Parade about 30. The two-hour hole in the middle of the afternoon is the drivers' break. Out of season nothing serves either place: a taxi, or walk on to Heybrook Bay for the 49 or back to Turnchapel and Hooe for the 2, which runs every day all year. The 2026 dates are Plymouth City Council's, not Stagecoach's",
    verified: null,
  },
  {
    slug: "service-49-plymouth",
    number: "49",
    name: "Plymouth City Centre – Plymstock – Staddiscombe – Down Thomas – Heybrook Bay",
    type: "bus",
    provider: "tally-ho-coaches",
    // Stops and times from Tally Ho's own timetable, headed "Mondays to
    // Saturdays (Except Public Holidays)", and its data on bustimes.org, which
    // agree. Heybrook Bay goes through the heybrook-bay escape record:
    // Longlands Drive Terminus (1100PLB11927) is 2 m from it. The bus also
    // calls at Heybrook Bay Wembury Point (1100PLB11930), 0.43 km from the
    // route out by Wembury Point and 594 m from the escape record, and at
    // Three Jays, Langdon and Westlake Rise. Down Thomas (Mussel Inn,
    // 1100PLB11925, and Rack Corner) is 1.1–1.6 km from the route, and
    // Staddiscombe Road (1180PLA10803) 2.0 km: no records, and none needed,
    // since the route already reaches the section through heybrook-bay.
    serves: ["plymouth-royal-parade", "heybrook-bay"],
    season: null,
    frequency: "2 a day each way, Mon–Sat, not public holidays. No Sundays",
    url: "https://www.tallyhoholidays.co.uk/timetable-49",
    notes: "The only bus at Heybrook Bay and Down Thomas, and it runs twice a day. Out from Royal Parade Stop A14 at 10:35 and 15:05, reaching the Longlands Drive terminus at 11:19 and 15:36; the same bus turns round there and is back at Royal Parade at 11:50 and 16:20. It loops round Down Thomas and Heybrook Bay twice on the way, so most stops are timed twice: Three Jays 11:04 and 11:25, and 15:27 and 15:51. Wembury Point, out on the headland by the path, is called at only once each trip — 11:03 on the way out in the morning and 15:50 on the way back in the afternoon. Doesn't go to Wembury: that's the 48, from Wembury village",
    verified: "2026-09-16",
  },
  {
    slug: "service-48",
    number: "48",
    name: "Plymouth City Centre – Plymstock – Elburton – Wembury",
    type: "bus",
    provider: "plymouth-citybus",
    // Stops and times from Plymouth Citybus's page, which links "PDF Timetable
    // 48 (From Sun 30th Aug 2026)", and bustimes.org, which agree. Royal Parade
    // is the plymouth-royal-parade stop record: Stop A11 (1180PLC30109) out,
    // A9 (1180PLC30107) in, 220–280 m from A3. Wembury goes through the wembury
    // escape record, the National Trust car park above the beach: Southland
    // Park Terminus (1100PLA10793) is 481 m from it, Mewstone Avenue Bottom
    // (1100PLA10794) 735 m and Hawthorn Drive (1100PLA10790) 940 m — so the
    // village needs no escape record of its own. Church Road, 1.4 km up, is
    // further from the beach than the terminus is. This is the section's way
    // home; there is no single bus between Wembury and Admiral's Hard.
    serves: ["plymouth-royal-parade", "wembury"],
    season: null,
    frequency: "Mon–Sat, roughly hourly with gaps; no Sundays. From Royal Parade Mon–Fri 06:35 – 18:15 and Saturdays 07:00 – 18:15; from Wembury Mon–Fri 07:05 – 18:47 and Saturdays 07:31 – 18:47",
    url: "https://www.plymouthbus.co.uk/services/PLYC/48",
    notes: "The way back from the end of the day: Wembury Southland Park to Royal Parade in about 38 minutes, by Elburton, Plymstock and Cattedown, and the 34 on from Royal Parade to Admiral's Hard in 10. From Southland Park Terminus, Mon–Fri 07:05, 07:26, 09:40, 10:40, 11:40, 12:40, 13:40, 14:40, 17:00, 17:57 and 18:47, reaching Royal Parade Stop A9 at 07:40, 10:18, 11:18, 12:18, 13:18, 14:18, 15:18, 17:35, 18:35 and 19:15 — nothing between 14:40 and 17:00, and the 07:26 doesn't go into the centre. Saturdays 07:31, then 09:40 to 15:40 at forty past, 16:57, 17:57 and 18:47, Royal Parade 08:10, 10:18 to 16:18, 17:35, 18:35 and 19:14. Out from Royal Parade Stop A11, Mon–Fri 06:35, 06:55, 09:05 to 14:05 hourly, 16:15, 17:15 and 18:15; Saturdays 07:00, 09:05 to 15:05 hourly, 16:15, 17:15 and 18:15; Southland Park about 33 minutes later, Church Road 3 minutes before it. From the terminus it's about half a kilometre down the lane to the beach car park. No Sunday service at all, and no bus at Wembury beach itself: on a Sunday the way back is a taxi. Timetable from 30 Aug 2026",
    verified: "2026-09-16",
  },
  // Belongs with section 37, but recorded here because crossing 36.5 lands on
  // the Noss Mayo bank and this is the only bus there. It will not show on
  // section 36 or on the crossing: on a crossing only a ferry is measured along
  // the route, and Warren Point to any Noss Mayo stop crosses the Yealm.
  {
    slug: "service-94",
    number: "94",
    name: "Plymouth – Plymstock – Elburton – Yealmpton – Newton Ferrers – Noss Mayo",
    type: "bus",
    provider: "tally-ho-coaches",
    // Stops and times from Tally Ho's data on bustimes.org. Noss Mayo is
    // St Peter's Church (1100DEA10048 out of the village, 1100DEA10049
    // opposite) at 50.31132, -4.03788, 0.93 km from the yealm-noss-mayo
    // endpoint, and the Tennis Courts stop (1100DEA10047), where journeys start
    // and finish. The 08:40 from Plymouth runs straight to Noss Mayo without
    // going round Newton Ferrers.
    serves: ["plymouth-royal-parade", "yealm-noss-mayo", "mothecombe"],
    season: null,
    frequency: "3 a day each way Mon–Sat, with a fourth early return. No Sundays",
    url: "https://www.tallyhoholidays.co.uk/Service-details",
    notes: "The far bank's bus. From Royal Parade Stop A14 08:40, 13:10 and 17:40, by Plymstock, Elburton, Brixton and Yealmpton, reaching Noss Mayo St Peter's Church at 09:34, 14:01 and 18:31; the 13:10 and 17:40 go round Newton Ferrers first. Back from Noss Mayo Tennis Courts 07:40, 09:35, 14:05 and 18:35, Royal Parade 08:34, 10:32 and 15:02. With the 48 it is also the way round the Yealm when the ferry isn't running, changing at Elburton, Mon–Sat",
    verified: "2026-09-16",
  },  // Sections 37 and 38.
  {
    slug: "bantham-ferry",
    number: "Ferry",
    name: "Bantham ferry (Cockleridge Ham – Bantham)",
    type: "ferry",
    // Season, hours and fare from the estate's own page, which is headed
    // "2026 Dates & Times". OSM ferry way 30417845 (foot=yes,
    // motor_vehicle=no) runs from node 335689863 at Cockleridge Ham,
    // 50.28099 -3.87323, to node 2694321845 at the Bantham slipway,
    // 50.27883 -3.87055 — 250 m of water. The Cockleridge landing is 2.2 km
    // along the route from the bigbury-on-sea endpoint, round Cockleridge
    // sands; the bantham escape record (Bantham Beach car park) is 410 m from
    // the Bantham slipway.
    provider: "bantham-estate",
    serves: ["bigbury-on-sea", "bantham"],
    season: { from: "04-01", to: "09-30" },
    frequency: "Daily in season, 10am – noon and 2pm – 4pm, and \"no matter the tide\". Nothing 1 October – 31 March. Set afresh each year",
    url: "https://banthamestate.co.uk/getting-here/ferry/",
    notes: "A quarter of a kilometre over the Avon between Cockleridge Ham and the Bantham slipway, and the only crossing below Aveton Gifford. £4.95 a head each way in 2026; the page gives no child, dog or bicycle fare, and says nothing about weather. Four hours a day in two blocks, so a morning that runs late waits until two o'clock. Out of season, and outside those hours, the way round is the Avon Estuary Walk inland to the bridge at Aveton Gifford — South Devon National Landscape's own leaflet gives the round walk as 7.5 miles, or 8.5 at high tide, because the tidal road below Aveton Gifford floods and the high-water alternative climbs Drunkard's Hill. A taxi is the other answer: Totally Taxis of Salcombe names both banks",
    verified: "2026-09-16",
  },
  {
    slug: "service-162",
    number: "162",
    name: "Kingsbridge – Thurlestone – Malborough – Hope Cove",
    type: "bus",
    provider: "tally-ho-coaches",
    // Stops and times from Tally Ho's data on bustimes.org, dated 15 September
    // 2026, registrations PH1081198/22 and /23. The service page is titled
    // "Bus Station - Loddiswell Inn" because the same registration covers a
    // second, unrelated leg to Loddiswell; the Hope leg is the one that
    // matters here. Hope Cove goes through the hope-cove escape record: Outer
    // Hope Cove (SW-bound 1100DEA05953, NE-bound 1100PLY38563) is 139 m from
    // it and Inner Hope Sun Bay Hotel (1100DEA10161 / 1100DEA10162) 381 m.
    // Thurlestone is the Church pair (NE-bound 1100DEA10136, opp 1100DEA05952)
    // by the post office, 0.53 km from the route. Malborough is the Post
    // Office pair (1100DEA10155 / 1100DEA10156). It also calls at Galmpton
    // Square and at South Milton village, 2.6 km inland of South Milton Sands
    // and no use for it.
    serves: ["kingsbridge-bus-station", "thurlestone", "hope-cove", "malborough"],
    season: null,
    frequency: "3 a day each way, Mon–Fri. No Saturdays and no Sundays",
    url: "https://www.tallyhoholidays.co.uk/timetable-162",
    notes: "The only bus that reaches Hope Cove or Thurlestone. Out from Kingsbridge Bus Station Stand C at 08:50, 12:00 and 17:30, reaching Outer Hope Cove at 09:08, 12:43 and 18:13 and Inner Hope two minutes later; the 12:00 and 17:30 go round by Thurlestone Church, reached at 12:16 and 17:46, and the 08:50 does not. Back from Inner Hope 09:10, 12:45 and 18:15, Outer Hope two minutes later, Malborough Post Office 09:20, 12:55 and 18:25, Kingsbridge Bus Station 09:58, 13:05 and 18:35. Only the 09:10 calls at Thurlestone Church on the way in, at 09:38. There is also a schooldays 08:10 from South Milton by Thurlestone Church at 08:22 to Kingsbridge Community College, and a 15:30 out from the college. At Kingsbridge the 164 connects for Salcombe and the 3 for Plymouth and Dartmouth, both of which run on Sundays when this does not",
    verified: "2026-09-16",
  },
  {
    slug: "service-164",
    number: "164",
    name: "Totnes – Kingsbridge – Malborough – Salcombe",
    type: "bus",
    provider: "tally-ho-coaches",
    // Stops and times from Tally Ho's data on bustimes.org. Salcombe goes
    // through the salcombe endpoint: Shadycombe Road (E-bound 1100DEA10153),
    // where journeys start and finish, is 420 m from the ferry steps, and
    // Devon Court (1100DEA10150) 290 m. Also Herbert Road, Beadon Cross, the
    // Park & Ride and McIlwraith Road. Malborough is the Garage and Yarde Gate
    // Nursery stops on Salcombe Road, not the Post Office pair the 162 uses.
    // The route reaches Salcombe within half a kilometre of its end, so on
    // section 38 it only ever calls at one place the section touches and will
    // not show on that page — it belongs to the Salcombe end of the day all
    // the same, and section 39 and crossing 38.5 will pick it up.
    serves: ["kingsbridge-bus-station", "malborough", "salcombe"],
    season: null,
    frequency: "About hourly Mon–Sat, roughly 6.45am – 8pm; 4 a day on Sundays",
    // The operator's page for the 164 lives at /timetable-primrose-link; its
    // title is "164 timetable" and the slug is a leftover name.
    url: "https://www.tallyhoholidays.co.uk/timetable-primrose-link",
    notes: "Salcombe's bus, and the way off the end of the day. From Shadycombe Road Mon–Sat at 06:45, 07:20, 08:15, 09:10, 10:25, 11:25, 12:15 and then 25 past the hour to 17:25, with 18:10, 19:00 and 20:05 after that; Kingsbridge Bus Station about 20 minutes later, Totnes rail station about 45 minutes after that. Sundays only 10:30, 13:30, 16:30 and 19:00 from Shadycombe Road, and back into Salcombe at 10:23, 12:53, 15:53 and 18:53. Malborough Garage 10 minutes out of Salcombe. Kingsbridge is the change for the 3 to Plymouth or Dartmouth and, Mon–Fri, the 162 back out to Thurlestone and Hope Cove",
    verified: "2026-09-16",
  },
  {
    // Section 40 stops, from Stagecoach's data on bustimes.org: since Storm
    // Ingrid closed the Slapton Line in January 2026 the Kingsbridge to
    // Dartmouth half runs inland by Woodleigh, Halwell and Blackawton instead
    // of by Torcross and Slapton, so it now calls at Strete Kings Arms Car
    // Park (N-bound 1100DEA10208), 73 m from the strete escape record,
    // Blackpool Sands (1100DEA10211 / 10210), 48 m from blackpool-sands, Shady
    // Lane (1100DEA10212 / 10213), 110 m from stoke-fleming, and Dartmouth
    // Pontoon Stop A (1100DEA11996). Torcross is no longer on it: that is the
    // 93S shuttle, which connects at Kingsbridge on the same ticket.
    slug: "service-3",
    number: "3",
    name: "Plymouth – Yealmpton – Modbury – Kingsbridge – Dartmouth",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stops and times from Stagecoach's data on bustimes.org. It replaced the
    // 93 between Kingsbridge and Dartmouth. Nothing it calls at is near either
    // section: Holbeton Western Lodge on the A379 (1100DEA10064 / 10065) is
    // 4.2 km from the section 37 route, Modbury Harraton Cross 6.1 km from
    // section 38's and Kingsbridge Bus Station 5.3 km from the salcombe
    // endpoint. Recorded because it is the spine every chain of buses out of
    // this stretch uses, and because sections 39 to 41 will want it.
    serves: ["plymouth-royal-parade", "modbury", "kingsbridge-bus-station", "strete", "blackpool-sands", "stoke-fleming", "dartmouth"],
    season: null,
    frequency: "Roughly hourly every day: Mon–Sat about 6.25am – 6.15pm from Plymouth, 5 a day on Sundays",
    url: "https://www.stagecoachbus.com/routes/south-west/3/plymouth-kingsbridge/xdco003.o",
    notes: "The A379 spine. From Plymouth Royal Parade Stop A9 Mon–Fri 06:25, 07:15, then 09:00 to 13:00 hourly, 14:10, 15:15, 16:15, 17:15 and 18:15, calling at Yealmpton, Holbeton Western Lodge about 65 minutes out, Modbury about 73 and Kingsbridge Bus Station about 101. Back from Kingsbridge Mon–Fri 07:13, 10:31, 11:31, 12:31, 13:31, 14:31, 15:39, 16:35, 18:16 and 19:43, Modbury Post Office 35 minutes later and Royal Parade about 80. Sundays from Royal Parade 09:40, 12:10, 14:45 and 17:10, Kingsbridge 10:47, 13:18, 15:53 and 18:20; back from Kingsbridge 10:52, 13:22, 15:52 and 18:25, Royal Parade 11:59, 14:36, 17:04 and 19:32. It goes nowhere near the coast between the Yealm and Kingsbridge: Harraton Cross, where the B3392 turns off for Bigbury, is 6 km short of the sea and nothing runs down it. Beyond Kingsbridge it goes on to Dartmouth, since January 2026 inland by Woodleigh, Halwell and Blackawton rather than along the Slapton Line: Kingsbridge Bus Station to Strete Kings Arms in about 38 minutes, Blackpool Sands 43, Stoke Fleming Shady Lane 47 and Dartmouth Pontoon about 62. From Kingsbridge Mon–Fri 07:45, 08:50, 10:20, 11:20, 12:20, 13:20, 14:20, 15:40, 16:40, 17:40 and 18:40; back from Dartmouth Pontoon 06:15, 07:30, 09:30, 10:30, 11:30, 12:30, 13:30, 14:30, 15:30, 17:15 and 18:45, Kingsbridge about an hour later. Saturdays within about ten minutes of those. Sundays from Kingsbridge 10:47, 13:18, 15:53 and 18:20, Dartmouth 11:52, 14:21, 16:59 and 19:25; back from Dartmouth 09:55, 12:25, 14:55 and 17:30. For Torcross, change at Kingsbridge onto the 93S shuttle — a 93S ticket is valid on the 3 and the other way round: from Dartmouth, 10:30 meets the 10:40 shuttle for Torcross at 11:06, 11:30 the 11:40 for 12:06, 12:30 the 12:40 for 13:06, 13:30 the 13:40 for 14:06 and 15:30 the 16:40 for 17:06, which is the last connection of the day; Sundays 09:55 meets the 11:20 for 11:49, 12:25 the 13:50 for 14:19 and 14:55 the 16:20 for 16:49. The inland route is temporary and should be rechecked when the A379 reopens",
    verified: "2026-09-16",
  },
  {
    slug: "farecar-f17",
    number: "F17",
    name: "Fare Car (Bigbury, Kingston, Challaborough, Ringmore and St Ann's Chapel – Kingsbridge)",
    type: "taxi",
    provider: "devon-fare-car",
    // Devon County Council's own Fare Car page lists five schemes; F17 is
    // "from Bigbury, Kingston, Challaborough, Ringmore and St Ann's Chapel to
    // Kingsbridge". Its leaflet is a SharePoint PDF that will not serve to
    // anything but a browser, so the days and times are not recorded here
    // rather than guessed — hence season and frequency null.
    serves: ["bigbury-on-sea", "challaborough", "kingsbridge-bus-station"],
    season: null,
    frequency: null,
    url: "https://www.traveldevon.info/bus/fare-car/",
    notes: "A shared private-hire car running to a published timetable, not a bus and not a taxi fare: you book your seat with the operator, normally 24 hours ahead, and pay a little over the bus fare for the distance. It is the only public transport at Bigbury-on-Sea, Challaborough or Kingston — the ordinary bus network stops at Modbury and Aveton Gifford. Open to anyone, resident or not. Devon County Council's transport desk, 0345 155 1015 or devonbus@devon.gov.uk, holds the timetable and will say which firm runs it; the days and times are on a leaflet not reachable outside a browser, so ring before planning a day around it",
    verified: "2026-09-16",
  },
  {
    slug: "farecar-f7",
    number: "F7",
    name: "Fare Car (Bigbury, Challaborough and Ugborough – Modbury, Ivybridge and Lee Mill)",
    type: "taxi",
    provider: "devon-fare-car",
    // The other Fare Car out of Bigbury, and the one that reaches Ivybridge
    // station and the 3 at Modbury. Devon County Council's page names the
    // areas; a 2023 leaflet on bigburycommunity.co.uk gives Fridays only, Ivy
    // Cabs of Ivybridge, 01752 895555, and zonal fares of £2.80 to Modbury and
    // £3.50 to Ivybridge — three years old, and not repeated on the council's
    // current page, so season and frequency stay null.
    serves: ["bigbury-on-sea", "challaborough", "modbury"],
    season: null,
    frequency: null,
    url: "https://www.traveldevon.info/bus/fare-car/",
    notes: "The inland Fare Car, put on when Tally Ho's Friday 875 to Plymouth was withdrawn in 2023. Devon County Council's page has it running \"from Bigbury, Challaborough and Ugborough areas to Lee Mill, Ivybridge and Modbury\" and names St Ann's Chapel, Bigbury-on-Sea, Kingston, Ringmore, Ermington and Ludbrook among the places served. Modbury puts you on the 3 for Plymouth and Kingsbridge; Ivybridge has the station as well. Book through the operator, normally 24 hours ahead. A 2023 leaflet gives Fridays only and Ivy Cabs, 01752 895555: worth checking on 0345 155 1015 before relying on either",
    verified: "2026-09-16",
  },
  // Sections 39 and 40.
  // ── Crossing 38.5 ──
  {
    slug: "salcombe-ferry",
    number: "Ferry",
    name: "Salcombe ferry (Salcombe – East Portlemouth)",
    type: "ferry",
    provider: "salcombe-ferry-company",
    // Landings are the two ends of OSM ferry way 14020574, which are already
    // the salcombe and east-portlemouth endpoint records; postcodes.io puts the
    // operator's own TQ8 8JG 30 m from the Salcombe end. Times are from the
    // Traveline National Dataset on bustimes.org, 15 September 2026, which has
    // the same half-hourly pattern every day of the week. The operator has no
    // site, so the seasonal hours and the fare come from its own entry in South
    // Hams District Council's tourism directory and from visitor guides, and
    // none of it is confirmed by the ferry: hence verified null.
    serves: ["salcombe", "east-portlemouth"],
    season: null,
    frequency: "Every day, all year, every 30 minutes: from Salcombe on the hour and half past, from East Portlemouth five minutes later. The national timetable data runs 08:00 – 17:30 from Salcombe and 08:05 – 17:35 back, with nothing at 13:00 or 13:30. The operator's own listing gives 8.30am – 5pm in winter and 8.30am – 6.30pm in summer",
    url: "https://bustimes.org/services/salcombe-ferry-salcombe-east-portlemouth",
    notes: "Four hundred metres of water and about 20 km round by road, so the ferry is the path. Five minutes across. From 1 April to 31 October it leaves the Jubilee Pier at the bottom of the ferry steps by the Ferry Inn, on Fore Street; from 1 November to 31 March from the Whitestrand pontoon in the middle of town, 300 m north. The East Portlemouth landing is the slipway below the Venus cafe. At quiet times stand where the ferryman can see you and he comes over. Dogs are carried; visitor guides put the fare at about £2.50 an adult and £1.70 a child each way, cash or card, but the operator publishes nothing. The 164 bus from Kingsbridge stops at Shadycombe Road, 420 m from the ferry steps. If it isn't running, the far bank is the 164 to Kingsbridge and a taxi out to East Portlemouth, most of an hour by road",
    verified: null,
  },

  // ── Section 39 ──
  {
    slug: "service-93s",
    number: "93S",
    name: "Kingsbridge – Frogmore – Chillington – Stokenham – Torcross",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stops and times from Stagecoach's own data on bustimes.org, 15 September
    // 2026, registration PH1020951/238. The shuttle Stagecoach put on when
    // Storm Ingrid closed the Slapton Line in January 2026 and the 3 was
    // diverted inland; tickets interavail with the 3 at Kingsbridge, and
    // Stagecoach now titles the 3 "Plymouth – Kingsbridge – Inc Torcross
    // Shuttle – Dartmouth". Torcross Stores (N-bound 1100DEA10201, S-bound
    // 1100DEA10202) is 60 m from the torcross endpoint; Torcross Chapel
    // (1100DEA10249) is 460 m. Stokenham is the stokenham stop record.
    //
    // NOTE FOR THE PARENT: as things stand this route matches no section page.
    // On section 39 the walk from east-portlemouth to its nearest calling point
    // is 7.7 km and it serves none of that section's escape points; on section
    // 40 the walk from dartmouth is 11 km, same problem. It is still the only
    // bus at Torcross, so its times are repeated in the notes of service-3,
    // which does show on section 40.
    serves: ["kingsbridge-bus-station", "stokenham", "torcross"],
    season: null,
    frequency: "Every day: 10 each way Mon–Fri, 9 on Saturdays, 6 on Sundays",
    url: "https://www.stagecoachbus.com/routes/south-west/93s/kingsbridge-torcross/xdco093s.o",
    notes: "The only bus at Torcross, and it goes inland to Kingsbridge rather than up the coast: about 28 minutes by West Charleton, Frogmore, Chillington and Stokenham. From Kingsbridge Bus Station Stand A, Mon–Fri 06:15, 07:30, 09:40, 10:40, 11:40, 12:40, 13:40, 15:40, 16:40 and 17:40, reaching Torcross Stores 06:44, 07:59, 10:06, 11:06, 12:06, 13:06, 14:06, 16:06, 17:06 and 18:06; Saturdays the same without the 06:15. Back from Torcross Stores, Mon–Fri 06:47, 08:02, 10:08, 11:08, 12:08, 13:08, 14:08, 16:08, 17:08 and 18:08, Kingsbridge 28 minutes later; Saturdays without the 06:47. Sundays from Kingsbridge 09:50, 11:20, 12:20, 13:50, 14:50 and 16:20, Torcross 10:19, 11:49, 12:49, 14:19, 15:19 and 16:49; back from Torcross 10:20, 11:50, 12:50, 14:20, 15:20 and 16:50. Nothing between 14:08 and 16:08. At Kingsbridge it meets the 3 for Dartmouth or Plymouth and the 164 for Salcombe; a 93S ticket is valid on the 3. A temporary service, put on when the Slapton Line closed, and it should be checked against Stagecoach once the road reopens. Times for 16, 19 and 21 Sep 2026",
    verified: "2026-09-16",
  },
  {
    slug: "coleridge-bus-wednesday",
    number: "Coleridge",
    name: "Coleridge Bus, Wednesdays (East Portlemouth, Prawle Point and East Prawle – Kingsbridge)",
    type: "bus",
    provider: "coleridge-bus",
    // The four Coleridge routes are one per day and share nothing but the
    // Kingsbridge end, so they are four records rather than one set of slugs.
    // Wednesday is the only day anything at all reaches East Portlemouth or
    // East Prawle. Stops and times from the operator's own timetable page.
    // "Prawle Point" is the operator's own wording; whether the bus actually
    // comes down to the National Trust car park or stops in the hamlet of
    // Prawle above it is not stated, so ask when booking.
    serves: ["east-portlemouth", "prawle-point", "east-prawle", "kingsbridge-bus-station"],
    season: null,
    frequency: "Wednesdays only, one run in and one back",
    url: "https://www.coleridgebus.co.uk/timetable.html",
    notes: "The only public transport of any kind at East Prawle, and the only wheels at East Portlemouth other than the ferry. From Stokenham St Michaels at 9am by East Portlemouth, Prawle Point about 9.20, West Prawle about 9.30, East Prawle, South Pool, South Allington and Frogmore about 10, reaching Kingsbridge mid-morning. One bus back, leaving the bay outside Peacocks on the Quay at 12.20pm and Morrisons at 12.30pm. Sixteen seats, volunteer drivers; book with Mrs Ann Potts on 01548 511818 or Brenda Jeffreys on 01548 511371 before 8pm on the Tuesday, and say if you want a bike carried. The operator prints the times as \"for guidance only\", and its website hasn't visibly changed since 2012, so ring first",
    verified: null,
  },
  {
    slug: "coleridge-bus-friday",
    number: "Coleridge",
    name: "Coleridge Bus, Fridays (Beeson, Beesands and North Hallsands – Kingsbridge)",
    type: "bus",
    provider: "coleridge-bus",
    serves: ["beesands", "hallsands", "stokenham", "kingsbridge-bus-station"],
    season: null,
    frequency: "Fridays only, one run in and one back",
    url: "https://www.coleridgebus.co.uk/timetable.html",
    notes: "The only bus that reaches Beesands or North Hallsands. From Stokenham St Michaels at 9am, Beeson about 9.20, then Beesands, Kellaton, North Hallsands, Stokenham about 9.30, Chillington 9.45, Frogmore 10.05 and Charleton 10.10, into Kingsbridge. Back from the bay outside Peacocks on the Quay at 12.20pm, Morrisons 12.30pm. Book with Mr B. Hargrove on 01548 580402 or Mrs June Sanderson on 01548 531040 before 8pm on the Thursday. Times \"for guidance only\"; ring first",
    verified: null,
  },

  // ── Section 40 ──
  {
    slug: "coleridge-bus-thursday",
    number: "Coleridge",
    name: "Coleridge Bus, Thursdays (Slapton and Torcross – Kingsbridge)",
    type: "bus",
    provider: "coleridge-bus",
    serves: ["slapton-village", "torcross", "stokenham", "kingsbridge-bus-station"],
    season: null,
    frequency: "Thursdays only, one run in and one back. Tuesday's route also calls at Slapton village",
    url: "https://www.coleridgebus.co.uk/timetable.html",
    notes: "From Stokenham St Michaels at 9am, Slapton village 9.15, then Torcross, Stokenham, Sherford and Frogmore about 10.10, into Kingsbridge. Back from the bay outside Peacocks on the Quay at 12.20pm, Morrisons 12.30pm. Tuesday's route also starts at Stokenham at 9am and calls at Slapton village at 9.15, then goes inland by Coles Cross, East Allington, Buckland-tout-Saints and Goveton, reaching Charleton at 10.15. Book with June Sanderson on 01548 531040 or Mr B. Hargrove on 01548 580402 before 8pm on the Wednesday, and for Tuesday with Mrs V. Stevens on 01548 521443 before 8pm on the Monday. Times \"for guidance only\"; ring first",
    verified: null,
  },
  {
    slug: "service-93t",
    number: "93T",
    name: "Slapton – Strete – Blackpool Sands – Stoke Fleming – Dartmouth",
    type: "bus",
    provider: "country-bus-devon",
    // Stops and times from Country Bus's data on bustimes.org, 15 September
    // 2026, registration PH1017984/144. The other half of the Slapton Line
    // closure: with the A379 shut between Torcross and Strete Gate, the 93T
    // runs the stranded northern side. Slapton Turn (NE-bound 1100DEA10205,
    // SW-bound 1100DEA10204) is 210 m from the slapton-sands escape record and
    // 40 m from the route, so slapton-sands is how this route reaches the
    // Torcross end of the section — 2.5 km along the path from Torcross.
    // Slapton Strete Gate (1100DEA10207 / 10206) is 38 m from the strete-gate
    // record, Strete Kings Arms Car Park (1100DEA10208 / 10209) 73 m from the
    // strete record, Blackpool Sands (1100DEA10211 / 10210) 48 m from
    // blackpool-sands, and Shady Lane (1100DEA10212 / 10213) 110 m from
    // stoke-fleming. Dartmouth Pontoon Stop A (1100DEA11996) is 280 m from the
    // Lower Ferry slipway where the section 40 route ends. Also Strete Coastal
    // Path, Frogwell, Matthew's Point, Ravensbourne Lane, Deer Park and the
    // Townstal stops, none of them records.
    serves: ["slapton-village", "slapton-sands", "strete-gate", "strete", "blackpool-sands", "stoke-fleming", "dartmouth"],
    season: null,
    frequency: "4 a day each way, Mon–Fri. Tally Ho runs the Saturday one to the same times. No Sundays",
    url: "https://www.countrybusdevon.co.uk/timetables/",
    notes: "The bus along the second half of the section, and the quickest way back from Dartmouth: Dartmouth Pontoon to Slapton Turn in 28 minutes, and Slapton Turn is 2.5 km up the shingle bar from Torcross. Towards Dartmouth from Slapton Village 09:30, 11:00, 13:00 and 14:30, Slapton Turn a minute later, Strete Gate 09:34, 11:04, 13:04 and 14:34, Strete Kings Arms four minutes on, Blackpool Sands 09:43, 11:13, 13:13 and 14:43, Shady Lane for Stoke Fleming four minutes later, Dartmouth Pontoon 10:00, 11:30, 13:30 and 15:00. Back from Dartmouth Pontoon 10:00, 12:00, 14:00 and 16:30: Blackpool Sands 17 minutes later, Strete Kings Arms 22, Strete Gate 25, Slapton Turn 28, Slapton Village 30. Put on when Storm Ingrid closed the A379 between Torcross and Strete Gate in January 2026, so it should be checked once the road reopens: it does not go to Torcross, and no bus does from this side. The 3 covers the same villages more often, every day, on its way round by Blackawton",
    verified: "2026-09-16",
  },
  {
    slug: "service-93t-saturday",
    number: "93T",
    name: "Slapton – Strete – Dartmouth (Saturdays)",
    type: "bus",
    provider: "tally-ho-coaches",
    // A separate registration, PH1081198/29, "From 19 Sep" on bustimes.org, to
    // exactly the same times and stops as Country Bus's Monday–Friday one.
    // Same reason as service-31 / service-31-sunday: one route, two operators.
    serves: ["slapton-village", "slapton-sands", "strete-gate", "strete", "blackpool-sands", "stoke-fleming", "dartmouth"],
    season: null,
    frequency: "4 a day each way, Saturdays only. No Sundays",
    url: "https://www.tallyhoholidays.co.uk/Service-details",
    notes: "Tally Ho runs the Saturday 93T, Country Bus the rest of the week, to the same times: from Slapton Village 09:30, 11:00, 13:00 and 14:30, Dartmouth Pontoon 10:00, 11:30, 13:30 and 15:00; back from Dartmouth 10:00, 12:00, 14:00 and 16:30. Registered from 19 September 2026",
    verified: "2026-09-16",
  },
  {
    slug: "farecar-f23",
    number: "F23",
    name: "Fare Car (Slapton – Kingsbridge)",
    type: "taxi",
    provider: "devon-fare-car",
    // Devon County Council's Fare Car page lists F23 as "Slapton to
    // Kingsbridge". As with F7 and F17 the leaflet is a SharePoint PDF that
    // will not serve outside a browser, so days and times stay null rather than
    // being guessed. F22, "Totnes to Kingsbridge and Salcombe (evening
    // journey)", is the other one near this stretch and belongs with section 38.
    //
    // NOTE FOR THE PARENT: like the 93S this matches no section as things
    // stand — Kingsbridge is not near either end of section 40, so Slapton is
    // the only place it calls that the section touches.
    serves: ["slapton-village", "kingsbridge-bus-station"],
    season: null,
    frequency: null,
    url: "https://www.traveldevon.info/bus/fare-car/",
    notes: "A shared private-hire car to a published timetable, booked with the operator, normally 24 hours ahead, at a little over the bus fare. Open to anyone. With the A379 closed and the 93T running north to Dartmouth only, this and the Thursday Coleridge bus are the only ways from Slapton to Kingsbridge. Devon County Council's transport desk, 0345 155 1015 or devonbus@devon.gov.uk, holds the timetable and will say which firm runs it",
    verified: null,
  },
  {
    slug: "dartmouth-lower-ferry",
    number: "Ferry",
    name: "Dartmouth Lower Ferry (Dartmouth – Kingswear)",
    type: "ferry",
    provider: "south-hams-district-council-ferry",
    // Landings are the two ends of OSM ferry way 151746723 "Dartmouth Lower
    // Ferry": node 11654530 at the foot of Lower Ferry Slip, TQ6 9AP, which is
    // 20 m from where the section 40 route ends, and node 11654531 on the
    // Kingswear side, TQ6 0AA — the kingswear stop record. Times and fares from
    // the operator's own timetable and prices pages. The Traveline data on
    // bustimes.org, which times it every 15 minutes from 07:30 to 23:10 and
    // calls the Dartmouth end "North Embankment", does not match the operator
    // and should not be used.
    serves: ["dartmouth", "kingswear"],
    season: null,
    frequency: "All year except Christmas Day, running continuously rather than to a timetable. Mon–Sat from Dartmouth 7.10am – 10.55pm and from Kingswear 7am – 10.45pm; Sundays from Dartmouth 8.10am – 10.55pm and from Kingswear 8am – 10.45pm",
    url: "https://www.dartmouthlowerferry.co.uk/timetable/",
    notes: "The section's last landmark and the start of section 41: a tug pushing a float across the Dart, the last of its kind in England, carrying cars as well as walkers. Adult single £2.50 on foot or by bike, day return £5; under 16s £1 and £2; car £7.50 single. Cards but not American Express, no cash-back on the old paper vouchers; a £2 Saver pass gives 20 foot crossings for £30 or 40 for £40. Wheelchair accessible. Christmas Day nothing; Boxing Day and New Year's Day 10am – 4.55pm. Two floats normally, but one during maintenance: a single ferry ran 3 November – 8 December 2025 and 5 January – 9 February 2026, with the dates subject to change. Live status on the operator's home page, or ring 01803 752342. If it stops, the Higher Ferry is a kilometre upstream and the passenger ferry lands at the same Kingswear pontoon",
    verified: "2026-09-16",
  },
  {
    slug: "dartmouth-passenger-ferry",
    number: "Ferry",
    name: "Dartmouth passenger ferry (Town Jetty – Kingswear)",
    type: "ferry",
    provider: "dartmouth-steam-railway",
    // OSM ferry way 82630507 "Dartmouth Pedestrian Ferry", foot and bicycle
    // only: node 1125314680 "Dartmouth Town Jetty" at 50.35115, -3.57681, 310 m
    // north of the Lower Ferry slipway and 30 m from the Dartmouth Pontoon bus
    // stop, and node 961721548 on the Kingswear pontoon at 50.34873, -3.57372,
    // 60 m from the Lower Ferry's Kingswear slip and beside Kingswear station.
    // Times and fares from the operator's own boats page.
    serves: ["dartmouth", "kingswear"],
    season: null,
    frequency: "Every 15 minutes, with a break 1pm – 1.40pm. Mon–Sat first from Dartmouth 07:30 and from Kingswear 07:40; Sundays first 09:00 and 09:10. Last from Dartmouth 18:50 and from Kingswear 18:55 every day",
    url: "https://www.dartmouthrailriver.co.uk/boats",
    notes: "The foot ferry that meets the steam trains: five minutes from the Town Jetty by the Boat Float to the Kingswear pontoon, beside the station. Adult single £2.50, child £1.50 from 1 July 2025; books of 20 at £23 and £17. Allow 30 minutes between train and boat, the operator says. It lands within 60 m of the Lower Ferry on the Kingswear side but 310 m further up the town on the Dartmouth side, so for the path itself the Lower Ferry is the crossing; this one is longer-houred at neither end and stops at 6.55pm. Extra sailings on regatta days",
    verified: "2026-09-16",
  },
  {
    slug: "dartmouth-higher-ferry",
    number: "Ferry",
    name: "Dartmouth Higher Ferry (Sandquay – Kingswear)",
    type: "ferry",
    provider: "dartmouth-higher-ferry",
    // OSM ferry way 23208493 "Dartmouth Higher Ferry", which OSM notes is
    // "technically a floating bridge and an extension of the A379": node
    // 3386779568 at Sandquay, TQ6 9PH, 870 m up the town from the Lower Ferry
    // slipway, and node 11915067338 on the Kingswear side, TQ6 0DZ — the
    // kingswear-higher-ferry stop record. Times and fares from the operator's
    // own timetable and onboard-fares pages.
    serves: ["dartmouth", "kingswear-higher-ferry"],
    season: null,
    frequency: "Every day all year, shuttling continuously: Mon–Sat 6.30am – 10.50pm, Sundays 8am – 10.50pm. Bank holidays 8am – 10.45pm",
    url: "https://dkfb.co.uk/timetable/",
    notes: "A chain ferry carrying the A379 across the Dart, three minutes over. Its Dartmouth landing is at Sandquay, 870 m north of the Lower Ferry slip where the path crosses, and its Kingswear landing 1.2 km north of the Lower Ferry's, so on foot it is the long way round — but it runs four hours later at night than the Lower Ferry and does not stop. Foot passengers and cyclists £1 single, card only: it takes no cash or cheques. Cars £8.90 single, £15.50 same-day return. Christmas Day 9am – 2.45pm, Boxing Day 8am – 8.45pm, New Year's Day 9am – 6.45pm. Out of service about a week from 2 February 2026 for its annual refit and Maritime & Coastguard Agency inspection, and again in 2027; the Lower Ferry covers it. Live status on the operator's home page",
    verified: "2026-09-16",
  },
  {
    slug: "dartmouth-castle-ferry",
    number: "Ferry",
    name: "Dartmouth Castle ferry (Dartmouth Castle – South Embankment)",
    type: "ferry",
    provider: "dartmouth-castle-ferry",
    // OSM ferry way 330939098 "Dartmouth Castle Ferry", tagged seasonal
    // ("Summer only"): node 731408489 "Stumpy Steps Ferry Landing" below the
    // castle, 110 m from the dartmouth-castle-car-park escape record and 40 m
    // from the route at 14.5 km along, and the Castle Ferry Steps pier, OSM way
    // 330938727, on the South Embankment, 170 m from the Lower Ferry slipway
    // where the section ends. Fares, hours, landings and the dog policy are the
    // operator's own, headed 2026. Season stays null because the operator gives
    // no dates at all — only hours; see the notes.
    serves: ["dartmouth", "dartmouth-castle-car-park"],
    season: null,
    frequency: "Daily in season, on demand rather than to a timetable: first from Dartmouth 10am, last from Dartmouth 4.45pm, last from the Castle 5pm",
    url: "https://www.dartmouthcastleferry.co.uk/",
    notes: "Two open launches between Stumpy Steps below Dartmouth Castle and the South Embankment opposite the RNLI shop — the last mile and a half of the section by water instead of by the castle lane, ten minutes, past Bayards Cove and the Lower Ferry. Just turn up at the steps and get on the next boat; no tickets and no timetable. £3.50 for 14 and over, £2.50 under 14, dogs free and welcome, and allowed into the castle on a lead. Most cards taken. Run by Julian and Mark; contact is by email, ferryman@dartmouthcastleferry.co.uk, as there is no phone number on the site. Heavy rain or high winds stop it. The operator gives no season dates: OpenStreetMap tags the crossing \"summer only\" and visitor guides say Easter to the end of October, 10am – 5pm and 4pm in October, so check before counting on it out of high summer",
    verified: "2026-09-16",
  },
  // Section 41.
  {
    slug: "service-18",
    number: "18",
    name: "Brixham – Hillhead – Kingswear",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stops and times from Stagecoach's data on bustimes.org, 15 September
    // 2026, registration PH1020951/3. Kingswear Banjo (1100DEM55113, OSM node
    // 1508520907) is the turning circle 270 m up the hill from the Lower Ferry
    // slip where the section starts; Brixham Town Square Stand A (1190TOA10002)
    // is 270 m from the Strand where it finishes, and Strand Statue
    // (1190TOA10086) is on the finish itself. Also Kingswear The Creek,
    // Waterhead Terrace, Cemetery, Oversteps, Hoodown Farm, Croftland Farm,
    // Nethway Cross, the Caravan Club Site, Raddicombe Drive and a dozen
    // Brixham stops, of which Brixham Hospital is two minutes out of the Town
    // Square. This is the section's own bus: it runs the length of the day, on
    // every day of the week, and nothing else links the two ends.
    serves: ["kingswear", "nethway-cross", "hillhead-brixham-cross", "brixham"],
    season: null,
    frequency: "Hourly every day: 13 journeys each way Mon–Sat, 8 on Sundays. About 16 minutes end to end",
    url: "https://www.stagecoachbus.com/routes/south-west/18/brixham-kingswear/xdao018.o",
    notes: "The way back from Brixham, and the way out to the start. Mon–Sat from Brixham Town Square Stand A 06:56, 07:36, then 36 minutes past each hour to 17:36, and 18:30; Brixham Hospital two minutes later, Hillhead Brixham Cross about ten, Nethway Cross about thirteen, Kingswear Banjo 15–17 minutes out. Back from Kingswear Banjo 07:15, 08:10, 09:00, then on the hour to 15:00, 16:08, 17:00, 18:00 and 18:50, reaching the Town Square 16–20 minutes later. Saturdays to the same times. Sundays from Brixham 09:36, 10:36, 11:36, 12:36, 14:36, 15:36, 16:36 and 17:36, and from Kingswear 10:00, 11:00, 12:00, 13:00, 15:00, 16:00, 17:00 and 18:00 — eight each way, with a gap over lunch and nothing before half past nine. The last bus of the day comfortably beats the Lower Ferry, which runs to 10.45pm from Kingswear every night. At the Banjo the 120 to Paignton leaves on the hour as well: two buses meeting at the turning circle, so read the destination before getting on",
    verified: "2026-09-16",
  },
  {
    slug: "service-120",
    number: "120",
    name: "Paignton – Churston – Hillhead – Kingswear",
    type: "bus",
    provider: "stagecoach-south-west",
    // Same source and licence as the 18, registration PH1020951/12. From
    // Paignton Bus Station Stand 10 down the coast road by Goodrington and
    // Broadsands, then Churston Dartmouth Road, and from Hillhead Brixham Cross
    // it follows the 18's road to Kingswear. It never enters Brixham: Churston
    // Dartmouth Road is the nearest it comes to the finish, which is why it
    // shows as a service further out rather than one that links the two ends.
    serves: ["kingswear", "nethway-cross", "hillhead-brixham-cross", "churston", "broadsands", "goodrington", "paignton-bus-station"],
    season: null,
    frequency: "Hourly every day: 10 journeys each way Mon–Sat, 8 on Sundays. About 21 minutes from Kingswear to Paignton",
    url: "https://www.stagecoachbus.com/routes/south-west/120/paignton-bus-station-kingswear-banjo/xdao120.o",
    notes: "The other half of the Kingswear turning circle, and the way to a train. Mon–Fri from Paignton Bus Station Stand 10 07:50, then 09:30 to 14:30 on the half hour, 15:40, 16:30 and 17:30, calling at Churston Dartmouth Road nine minutes out and Hillhead Brixham Cross fourteen, reaching Kingswear Banjo at 08:14 and then 21 minutes after each departure. Back from Kingswear Banjo 08:15, 09:00, then on the hour to 15:00, 16:05, 17:05 and 18:00, Paignton about 21 minutes later. Saturdays from Paignton 08:30 hourly to 17:30, back from Kingswear 09:00 hourly to 18:00. Sundays from Paignton 09:30, 10:30, 11:30, 12:30, 14:30, 15:30, 16:30 and 17:30, back from Kingswear 10:00, 11:00, 12:00, 13:00, 15:00, 16:00, 17:00 and 18:00. For Brixham itself, change at Hillhead Brixham Cross onto the 18, or at Churston Dartmouth Road onto the 12",
    verified: "2026-09-16",
  },
  {
    slug: "service-17-brixham",
    number: "17",
    name: "Brixham town circular (Bank Lane – St Mary's Bay – Berry Head Road – Furzeham)",
    type: "bus",
    provider: "stagecoach-south-west",
    // Same source; the town bus, and the only one that touches the path before
    // Brixham. St Marys Bay Holiday Village (1190TOA10059, OSM node 496818056)
    // is 170 m from the route on Mudstone Lane, and Shoalstone Beach
    // (1190TOA10078 / 10079) 90 m from it on Berry Head Road, on the way back
    // in from the head. Also Ranscombe Road, Wall Park, Breakwater Beach,
    // Berry Head Road, the Strand Statue and Brixham harbour. It runs the loop
    // both ways round, so both of those are served twice an hour.
    //
    // NOTE FOR THE PARENT: the escape slugs below are the ones I expect you to
    // create. `npm run validate` fails on a `serves` entry that is not a known
    // location, so drop any that you name differently — the route still earns
    // its place on "brixham" alone once one escape matches.
    serves: ["brixham", "st-marys-bay", "berry-head"],
    season: null,
    frequency: "Hourly: 10 journeys round Mon–Sat, 8 on Sundays. About 25 minutes back into town from Berry Head Road",
    url: "https://www.stagecoachbus.com/routes/south-west/17/brixham-bank-lane-furzeham-copythorne-road/xdao017.o",
    notes: "The bus for the last two escape points, and the reason a bad afternoon on Berry Head need not be walked out. Mon–Sat from Brixham Town Square Stand A 08:30, then on the half hour to 17:30: St Marys Bay Holiday Village five minutes out, Ranscombe Road eight, Shoalstone Beach eleven, Berry Head Road fourteen, the harbour eighteen. The loop comes back the other way from The Close at 55 minutes past, reaching the Strand Statue about 11 minutes past the hour, Berry Head Road 13, Shoalstone 14, St Marys Bay 19 and the Town Square 23. Sundays 09:30, 10:30, 11:30, 12:30, 14:30, 15:30, 16:30 and 17:30, no 13:30. Country Bus's 16 covers the other side of the town, Town Square to South Bay and Brixham Hospital, hourly 09:00 to 18:00 Mon–Sat and not at all on Sundays; Torbay Mini Buses' SB1 is a Sainsbury's shuttle. Neither reaches the path",
    verified: "2026-09-16",
  },
  {
    slug: "service-12",
    number: "12",
    name: "Newton Abbot – Torquay – Paignton – Churston – Brixham",
    type: "bus",
    provider: "stagecoach-south-west",
    // Brixham Town Square Stand C (1190TOA10001) and Churston Dartmouth Road.
    // The Torbay spine, and the frequent service this section's other buses
    // connect into.
    //
    // NOTE FOR THE PARENT: like the 3 on sections 37 and 38, this matches no
    // section as things stand. Churston Dartmouth Road is 5.6 km from the
    // kingswear endpoint and Churston Village 5.1 km, both just past the 5 km
    // at which a route stops being offered, so it is recorded for the chain
    // rather than for the page.
    serves: ["brixham", "churston", "broadsands", "goodrington", "paignton-bus-station", "torquay-harbour"],
    season: null,
    frequency: "Every 12–15 minutes Mon–Sat daytime and every 15–20 on Sundays, with hourly evenings and journeys through the small hours at weekends",
    url: "https://www.stagecoachbus.com/routes/south-west/12/newton-abbot-brixham/xdbo012.o",
    notes: "Torbay's main bus, and the one that never stops: from Brixham Town Square Stand C to Churston Dartmouth Road in about four minutes, Paignton Bus Station sixteen, Torquay Cary Parade thirty and Newton Abbot about an hour. Mon–Sat from the Town Square 06:00 and 06:30, then every 15 minutes to 09:00, every 12 minutes through the day, and every half hour from 19:30 to 23:30 with a midnight journey. Sundays from 07:40, every 15 to 20 minutes through the day, and 00:00, 01:00, 02:00 and 03:00 after a Saturday night. The 13 from Kingsteignton follows the same corridor. Nothing on it goes near Kingswear: for that, change at Churston Dartmouth Road onto the 120, or at Brixham onto the 18",
    verified: "2026-09-16",
  },
  {
    slug: "paignton-kingswear-railway",
    number: "Steam train",
    name: "Dartmouth Steam Railway (Paignton – Kingswear)",
    type: "train",
    provider: "dartmouth-steam-railway",
    // Times, fares, dog policy and running days from the operator's own
    // timetable page, which is queried a day at a time, and its 2026 leaflet.
    // bustimes.org carries the line as a rail service but shows a single fixed
    // four-train pattern all season, which is not what the operator publishes —
    // treat it the way the Lower Ferry's Traveline data is treated, and don't
    // use it.
    //
    // NOTE FOR THE PARENT: this calls at only one place section 41 touches, so
    // it will not appear on the page as things stand. It is recorded because it
    // is a real way to reach the start with the van left in Paignton, and
    // because it is the other end of the ferry the section begins with.
    serves: ["kingswear-station", "paignton-queens-park"],
    // Not continuous: mid-February and Saturdays in March, then daily from the
    // start of April to 31 October. Nothing at all in January, and the winter
    // Train of Lights in November and December is a separate leaflet.
    season: { from: "02-14", to: "10-31" },
    frequency: "Daily April to October, 4 to 9 trains each way depending on the month; selected days only in February and March. 25 minutes each way",
    url: "https://www.dartmouthrailriver.co.uk/timetables",
    notes: "Paignton Queen's Park to Kingswear along the Dart, and in 2026 it stops nowhere in between — no Churston, no Goodrington. Three patterns: nine trains a day in high summer, first from Paignton 10:00 and last back from Kingswear 17:10; six in spring and autumn, 10:00 out and 17:15 back; four in the quiet weeks, 10:15 or 10:30 out and 16:10 or 17:00 back. Whichever it is, the last train back is hours before the last bus and the last ferry, so it is a way out to the start rather than a way home. Sold as a Paignton–Dartmouth return including the passenger ferry across the river: adult £24.50, child 3–15 £17.50, family £75.00, and dogs £3 each — \"well behaved dogs are welcome on all our trips\". Allow 30 minutes between train and boat, the operator says. The exact running days in February and March are on the colour-coded calendar in the leaflet; check the date on the operator's own timetable page before counting on it outside April to October",
    verified: "2026-09-16",
  },
  // Sections 42 and 43.
  {
    slug: "starcross-ferry",
    number: "Ferry",
    name: "Starcross ferry (Starcross – Exmouth)",
    type: "ferry",
    provider: "starcross-exmouth-ferry",
    // The Starcross landing is OSM ferry terminal node 550405931 at the pier,
    // which is the starcross endpoint itself; the Exmouth landing is OSM node
    // 115539239 "Starcross Ferry", the ferry steps in Exmouth Marina, which is
    // the exmouth endpoint. 1.94 km apart. Season, times, fares and the dog
    // fare are the operator's own, headed "April 2026 - 31st October 2026".
    serves: ["starcross", "exmouth"],
    season: { from: "04-01", to: "10-31" },
    frequency: "Hourly, seven days a week in season including bank holidays, weather and tide permitting: from Starcross 10.10am to 4.10pm, from Exmouth 10.40am to 4.40pm. A 5.10pm from Starcross and 5.40pm from Exmouth are added from 1 June to 31 August",
    url: "https://starcrossexmouthferry.co.uk/",
    notes: "Two kilometres across the mouth of the Exe, and the only way over without going round by Exeter. Starcross Pier is reached by steps over the railway bridge beside the station, so it is no good with wheels; the Exmouth end is the ferry steps in the marina. Be there ten minutes before the departure time — no spaces can be booked, and at peak times the boat fills. Adult £6 single, £10 return; child 1–12 £4 and £5; dogs £1 either way; bikes £2 single, tandems, trikes and trailers £4, tag-alongs £1, and only singles are sold with a bike. Cash only: the boat takes no cards. Tides and weather stop it, and the day's times go on the operator's Facebook page, not the website — check before walking down to the pier. Out of season, and on a blown-out day, it is the train: Starcross to Exeter St Davids, then the Avocet Line from Exeter Central, about an hour and a quarter for what the ferry does in twenty minutes",
    verified: "2026-09-16",
  },

  // ── Section 43 ──
  {
    slug: "shaldon-ferry",
    number: "Ferry",
    name: "Teignmouth – Shaldon ferry",
    type: "ferry",
    provider: "teignmouth-shaldon-ferry",
    // Landings from OSM: node 1883690246 "Teignmouth Ferry Landing" on the
    // back beach at 50.54228, -3.49893, and node 277747145 "Shaldon Ferry
    // Landing" at 50.54025, -3.50331 — 380 m apart. Hours, fares and the dog
    // rule are the operator's own.
    //
    // NOTE FOR THE PARENT: the path does not take this. It crosses Shaldon
    // Bridge, 1.2 km upstream, which is on the route and open at all hours.
    // The ferry is recorded because it cuts about a kilometre and a half off
    // the walk into Teignmouth and because it lands on the beach the route
    // passes; the notes say plainly that it is a shortcut, not the way.
    serves: ["shaldon", "teignmouth"],
    season: null,
    frequency: "All year, every day except Christmas Day and New Year's Day, on demand rather than to a timetable and every 10 to 15 minutes when busy. April to October seven days, 10am – 4.40pm; November to March Wednesday to Sunday, 10am – 3.40pm; seven days in the October and February half terms, 10am – 3.40pm. Later in high summer",
    url: "https://teignmouthshaldonferry.co.uk/",
    notes: "Britain's oldest passenger ferry, four hundred metres across the mouth of the Teign from Teignmouth back beach by the lifeboat house to Shaldon beach. The path does not use it — it goes round by Shaldon Bridge, which is a kilometre and a bit upstream — but the ferry takes about a kilometre and a half off the walk between the two, and lands on the beach either side rather than at a pier, so it is no good with wheels and awkward at the top of a spring tide. Adult £2.50, child £1, bike and rider £4, dogs free; ten crossings for £20. Cash only. Dogs may cross the beach to the road on a lead, but Shaldon beach bans them between Clipper Quay and the east-end steps from 1 April to 30 September, so go east of the steps. Strong tides and bad weather stop it; the day's running goes on Facebook and WhatsApp rather than the website",
    verified: "2026-09-16",
  },
  {
    slug: "riviera-line",
    number: "Train",
    name: "Riviera Line (Exeter – Starcross – Dawlish – Teignmouth – Torquay – Paignton)",
    type: "train",
    provider: "great-western-railway",
    // From GWR's own timetable D1, "Train times 7 September to 12 December
    // 2026", which covers the Riviera and Avocet lines together. Station
    // positions from OSM: Starcross node 1654248337 (9100STRCROS, CRS SCS) is
    // 180 m from the starcross endpoint; Dawlish Warren node 386775449
    // (9100DAWLSHW, DWW) is 230 m from the dawlish-warren escape; Dawlish node
    // 6076782660 (9100DAWLISH, DWL) is 110 m from the dawlish escape, which is
    // the station car park; Teignmouth node 26067992 (9100TEINMTH, TGM) is
    // 200 m from the teignmouth escape; Torquay node 29272140 (9100TORQUAY,
    // TQY) is the torquay-station stop record; Paignton node 246663389
    // (9100PAIGNTN, PGN) is 130 m from the paignton-bus-station stop and 710 m
    // from the paignton-harbour escape, which is why that escape is in
    // `serves` — without it this route reaches neither end of section 42
    // within 5 km and would show on no page at all, though Torquay station is
    // 200 m from the route at Torre Abbey Sands.
    serves: [
      "starcross",
      "dawlish-warren",
      "dawlish",
      "teignmouth",
      "torquay-station",
      "paignton-bus-station",
      "paignton-harbour",
    ],
    season: null,
    frequency: "All year, every day. About hourly at Starcross and Dawlish Warren, about half-hourly at Teignmouth, Dawlish, Torquay and Paignton. From Starcross towards Teignmouth and Torquay, Mon–Fri 05:10 – 23:16, Saturdays 05:12 – 22:24, Sundays 08:33 – 21:52; towards Exeter, about hourly through the day (see the uncertainties note)",
    url: "https://www.gwr.com/-/media/gwr-sc-website/files/timetables/september-26-december-26/D1-train-times-7-September-to-12-December-2026.pdf",
    notes: "The sea-wall railway, and the spine of both sections: it runs on the beach at Dawlish and Teignmouth with the path beside it, and its stations are on the route rather than near it. Starcross to Dawlish Warren 4 minutes, Dawlish 9, Teignmouth 14, Newton Abbot 21, Torquay 33 and Paignton 39; the other way Torquay to Teignmouth about 19 minutes and to Starcross about 34. A sample weekday: Starcross 10:45, Dawlish Warren 10:49, Dawlish 10:54, Teignmouth 10:59, Torquay 11:18, Paignton 11:24. This is also the way back from Starcross to Babbacombe — train to Torquay, then the 22 or the 11 up to St Marychurch, about an hour in all, and it works until nearly midnight. Not every train stops everywhere: Starcross and Dawlish Warren get roughly one an hour while Dawlish and Teignmouth get two, so read the column, not the pattern. Ticket offices: Dawlish Mon–Fri 7.05am – 7pm, Sat 7am – 2pm, closed Sundays; Teignmouth Mon–Fri 7.10am – 7pm, Sat 7am – 2pm, closed Sundays; Torquay Mon–Sat 7.10am – 5pm, Sun 9.40am – 5.10pm; Paignton Mon–Fri 6.55am – 6pm, Sat 7.30am – 4.55pm, Sun 9.40am – 4.40pm. Starcross and Dawlish Warren are unstaffed, Starcross with no ticket machine and no step-free access. STORMS CLOSE IT. The line between Exeter and Newton Abbot is shut whenever the sea is forecast over the wall, and it has been breached: Storm Ingrid closed it from 8.30pm on 23 January 2026, took out two sections of wall and Teignmouth pier, and it did not reopen until the Monday morning. When that happens rail tickets are accepted on Stagecoach's 2, 7 and 12 — the 2 runs the same coast road through Dawlish and Teignmouth — and replacement buses run from Exeter St Davids and Newton Abbot. GWR warns that engineering work can change trains, especially at weekends: GWR.com/check. Times for 7 Sep – 12 Dec 2026",
    verified: "2026-09-16",
  },
  {
    slug: "service-11",
    number: "11",
    name: "Torquay – St Marychurch – Maidencombe – Shaldon – Teignmouth – Dawlish – Dawlish Warren",
    type: "bus",
    provider: "stagecoach-south-west",
    // Stops and times from Stagecoach's data on bustimes.org, read for
    // Thursday 17, Saturday 19 and Sunday 20 September 2026; the operator's
    // own leaflet for the 11 is dated 3 August 2026. St Marychurch Town Hall
    // (1190TOA10828, OSM node 496818983/4) is 350 m from the babbacombe
    // endpoint; Babbacombe Shops (1190TOA10486/7) is 300 m from the
    // babbacombe-beach escape, up the cliff or up the cliff railway; Wellswood
    // Babbacombe Road (1190TOA10467) is 330 m from ansteys-cove; Wellswood
    // Lisburne Place (1190TOA10458) is 760 m up Meadfoot Road from meadfoot;
    // Torquay Cary Parade (1190TOA10279/10280) is 440 m from torquay-harbour;
    // Maidencombe Cross (1190TOA10582/3) is 370 m from maidencombe; Lower
    // Gabwell Deane Lane (1100DEM55102/3) is 450 m from labrador-bay and is
    // the only bus stop anywhere near it; Shaldon Bridge Road (1100DEM55111/2)
    // is 790 m from the shaldon escape at the Ness; Teignmouth Seaview Diner
    // (1100DEC11117) is 40 m from teignmouth; Dawlish Marine Garage
    // (1100DEC11087/8) is 270 m from dawlish; Dawlish Warren Beach Road
    // (1100DEC11084) is 140 m from dawlish-warren. Devon County Council pays
    // for the Teignmouth – Dawlish Warren end of it.
    //
    // This is section 43's own bus: it starts at the section's start and
    // finishes 4.3 km short of its finish, which is why it shows as reaching
    // both ends with a walk at one of them.
    serves: [
      "babbacombe",
      "babbacombe-beach",
      "ansteys-cove",
      "meadfoot",
      "torquay-harbour",
      "maidencombe",
      "labrador-bay",
      "shaldon",
      "teignmouth",
      "dawlish",
      "dawlish-warren",
    ],
    season: null,
    frequency: "Hourly every day, 14 journeys each way Mon–Sat and 12 on Sundays. About 55 minutes from St Marychurch to Dawlish Warren and about 85 from Torquay Cary Parade; Teignmouth to Dawlish Warren about 25",
    url: "https://www.stagecoachbus.com/routes/south-west/11/dawlish-warren-torbay-cary-parade/xdao011.o",
    notes: "The bus that follows section 43, and the only one that touches Maidencombe, Labrador Bay or Shaldon village. Mon–Fri from St Marychurch Town Hall 06:10, 07:05, 08:01, 08:55, then 54 minutes past each hour to 14:54, 15:56, 16:56, 17:54 and 18:48: Maidencombe Cross about twelve minutes later, Shaldon Bridge Road twenty, Teignmouth Post Office thirty-two, Dawlish Marine Garage fifty-two, Dawlish Warren Beach Road fifty-six. Back from Dawlish Warren Beach Road 06:54, 08:05, then five past each hour to 17:05, 18:00, 18:55 and 19:45, reaching Teignmouth about 23 minutes later, Shaldon 32, Maidencombe 41, St Marychurch 52 and Torquay Cary Parade 68. Saturdays much the same, first from St Marychurch 06:35 and last 18:48, first back from Dawlish Warren 07:20 and last 19:45. Sundays from St Marychurch 08:02, 09:02, 09:54, then 54 past to 14:54, 15:52, 16:52, 17:51 and 18:48; back from Dawlish Warren 09:05 then five past each hour to 17:05, 18:00, 18:55 and 19:45. It stops at Dawlish Warren, not Starcross: from the Warren the path still has four and a bit kilometres to run to the ferry pier, or take the train one stop. Dawlish Community Transport's 187, one midday round trip, is the only other bus at the Warren",
    verified: "2026-09-16",
  },
  {
    slug: "service-22",
    number: "22",
    name: "St Marychurch – Babbacombe – Torquay – Paignton – South Devon College",
    type: "bus",
    provider: "stagecoach-south-west",
    // Same source and licence as the 11. The 22 no longer runs to Teignmouth
    // and Dawlish Warren — the 11 took that over — so it is now a Torbay town
    // bus from St Marychurch to the college. St Marychurch Town Hall is its
    // northern terminus, 350 m from the babbacombe endpoint. Its Goodrington
    // stops are the Grange, up in Roselands, nowhere near the sands, so
    // `goodrington` is deliberately not in `serves`.
    serves: ["babbacombe", "babbacombe-beach", "ansteys-cove", "meadfoot", "torquay-harbour", "paignton-bus-station"],
    season: null,
    frequency: "Every 15 minutes Mon–Sat daytime, every 30 on Sundays, hourly into the evening. About 20 minutes St Marychurch to Torquay Cary Parade and 40 to Paignton bus station",
    url: "https://www.stagecoachbus.com/routes/south-west/22/st-marychurch-paignton-south-devon-college/xdao022.o",
    notes: "The frequent bus at the Babbacombe end of the day, and the quickest way down into Torquay. Mon–Fri from St Marychurch Town Hall 06:45, 07:15, 07:30, then every 15 minutes to 17:20, 17:50, 18:20, 18:55 and hourly 19:55 to 22:55: Babbacombe Shops eight minutes later, Torquay Cary Parade nineteen, Paignton bus station thirty-nine. Back from Torquay Cary Parade 07:46, 08:02, then every 15 minutes to 18:37, and 19:04, 19:28 and hourly to 23:28, St Marychurch 10 minutes later. Saturdays to the same pattern, first from St Marychurch 07:15, last 23:55; back from Cary Parade first 07:40, last 00:28. Sundays from St Marychurch 08:30 then every 30 minutes to 18:00, 18:55, and hourly to 22:55; back from Cary Parade 09:05, 09:39, then every 30 to 18:06, 18:34, 19:28 and hourly to 23:27. With the 11 it gives Babbacombe four buses an hour into Torquay on a weekday. For Brixham, change at Cary Parade onto the 12 — there is no through bus between the two ends of section 42",
    verified: "2026-09-16",
  },
  {
    slug: "service-2-devon",
    number: "2",
    name: "Exeter – Starcross – Dawlish – Teignmouth – Newton Abbot",
    type: "bus",
    provider: "stagecoach-south-west",
    // Same source. Starcross Rail Station (1100DEC10907/8, OSM node
    // 410640596/4) is 190 m from the starcross endpoint; Cockwood Bridge
    // (1100DEA05997 / 1100DEB10233) is the cockwood stop record; Dawlish
    // Marine Garage and The Green are within 270 m of the dawlish escape;
    // Teignmouth Seaview Diner (1100DEC11117) is 40 m from the teignmouth
    // escape. It does NOT serve Dawlish Warren: between Cockwood and Dawlish
    // it runs inland by Cofton, Sainsbury's and Shutterton, so the Warren has
    // only the 11. Its "Teignmouth Shaldon Bridge" stop is the Teignmouth end
    // of the bridge, not Shaldon village, so `shaldon` is not in `serves`.
    serves: ["starcross", "cockwood", "dawlish", "teignmouth"],
    season: null,
    frequency: "Every 30 minutes Mon–Sat daytime, hourly on Sundays and in the evening, with buses through to after midnight every night. Starcross to Dawlish about 15 minutes, Teignmouth about 32, Newton Abbot about an hour",
    url: "https://www.stagecoachbus.com/routes/south-west/2/exeter-newton-abbot/xdao002.o",
    notes: "The coast road bus, and the way off the end of section 43 at any hour. From Starcross Rail Station towards Dawlish and Teignmouth, Mon–Fri 06:01, 06:21, 06:53, 07:27, 07:52, then about every 30 minutes to 18:50, 19:12, and hourly 20:12, 21:11, 22:09, 23:09 and 00:09; Saturdays 06:16, 07:11, then every 30 minutes to 19:16, and 20:11, 21:11, 22:11, 23:11 and 00:11; Sundays hourly 08:13 to 23:09. Towards Exeter, Mon–Fri 05:54, 06:30, then about every 30 minutes to 19:43, and 20:11, 21:08, 22:09, 23:09 and 00:09; Saturdays 06:27 to 00:09; Sundays 06:55, 07:55, 08:55, then hourly to 23:14. Cockwood Bridge is three minutes out, Dawlish Marine Garage fifteen, Dawlish The Green nineteen, Teignmouth Post Office thirty-two. Timetable valid from 24 May 2026, with an off-peak timetable of up to hourly between 30 August and 31 October 2026. When the sea wall railway shuts, rail tickets are accepted on this bus",
    verified: "2026-09-16",
  },
  {
    slug: "service-187",
    number: "187",
    name: "Dawlish – Cockwood – Dawlish Warren – Dawlish",
    type: "bus",
    provider: "dawlish-community-transport",
    // Traveline data on bustimes.org, "15 September 2026": one round trip
    // leaving Dawlish, Barton Crescent about 12:05, out by Cofton and Cockwood
    // to Dawlish Warren about 12:56 – 13:03 and back into Dawlish by 13:20.
    // Certain weekdays only, and the pattern on bustimes is not a clean
    // Monday-to-Friday one — hence frequency worded loosely and verified null.
    serves: ["dawlish", "cockwood", "dawlish-warren"],
    season: null,
    frequency: "One round trip on certain weekdays, leaving Dawlish about 12.05pm and back about 1.20pm",
    url: "https://bustimes.org/services/187-dawlish-warren-dawlish",
    notes: "A community shopper's bus, not a way home: it leaves Dawlish at lunchtime, runs out by Cofton and Cockwood to Dawlish Warren and comes straight back, about seventy-five minutes for the loop. It is the only bus besides the 11 that reaches Dawlish Warren, and the only one that links the Warren with Cockwood. The days it runs are not a clean Monday-to-Friday pattern in the national dataset, and the operator is otherwise a ring-and-ride for people who cannot use ordinary buses, so ring 01626 888890 between 9am and 3pm before counting on it",
    verified: null,
  },

  // ── Sections 44 and 45 ──
  // ==== Section 44 ====

  {
    slug: "service-157",
    number: "157",
    name: "Exmouth – Budleigh Salterton – Otterton – Newton Poppleford – Sidmouth",
    type: "bus",
    provider: "stagecoach-south-west",
    // Times from Stagecoach's OWN leaflet, "157 — Exmouth - Sidmouth via
    // Budleigh Salterton, Otterton and Newton Poppleford", From Sunday 5th
    // April 2026, at
    // tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South West/April
    // 2026/Exeter/157 050426.pdf. Checked against the registered data on
    // bustimes.org for Thursday 17, Saturday 19 and Sunday 20 September 2026;
    // they agree.
    //
    // NOTE: the section-44 spine is the 157, NOT the 57. The 57 is Exeter –
    // Topsham – Exmouth and never reaches Budleigh or Sidmouth.
    //
    // Stop positions from OSM: Exmouth Savoy Cinema Stop E (1100DEC10795, node
    // 6141262680) is 730 m from the exmouth endpoint and Exmouth Strand/Parade
    // (1100DEC10797, node 6141262678) 750 m; Exmouth Fairfield Road
    // (1100DEC10790/1, nodes 6141264296/99) is 880 m from exmouth-seafront;
    // Budleigh Salterton Public Hall (1100DEC10760, node 469630827) is 1.15 km
    // from the budleigh-salterton escape at the Lime Kiln car park and 190 m
    // from feathers-hotel-budleigh; Otterton Green (1100DEC10729, node
    // 446096880) is 70 m from kings-arms-otterton; Newton Poppleford War
    // Memorial (1100DEC10665, node 436251263) is the newton-poppleford stop;
    // Sidmouth Triangle is 630 m from the sidmouth endpoint.
    //
    // ladram-bay is deliberately NOT in `serves`: the nearest the 157 gets is
    // Otterton Cross Tree (1100DEC10731, node 577538548), 1.19 km away by the
    // lane down to the cove. That is walkable and the notes say so, but the
    // bus does not call there and `serves` would report a nil walk.
    serves: [
      "exmouth",
      "exmouth-seafront",
      "budleigh-salterton",
      "feathers-hotel-budleigh",
      "otterton",
      "kings-arms-otterton",
      "newton-poppleford",
      "sidmouth",
    ],
    season: null,
    frequency: "Hourly Mon–Sat daytime, four through journeys each way on Sundays. Exmouth to Sidmouth about 65 minutes, Sidmouth to Exmouth about 58; Exmouth to Budleigh Salterton 15 to 21 minutes, Budleigh to Otterton 12, Otterton to Sidmouth 28",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/April%202026/Exeter/157%20050426.pdf",
    notes: "The bus that shadows section 44 inland, and the way back at the end of the day. From Exmouth Strand, Mon–Fri 06:30, 07:05, 07:30, 09:00, then on the hour to 14:00, 15:23, 16:05, 17:00 and 18:00; Budleigh Salterton Public Hall about 18 minutes later, Otterton about 32, Sidmouth Triangle about 65. Back from Sidmouth Triangle 07:35, 08:50, 10:12, then 12 past each hour to 14:12, 15:15, 16:40, 17:25, 18:15 and 19:15, reaching Budleigh about 43 minutes later and Exmouth Strand about 58 — the 19:15 gets in at 20:10. Saturdays much the same: first from Exmouth 06:30, last 18:00; back from Sidmouth 07:35, 09:12, then hourly 12 past to 17:12, 18:15 and 19:15. SUNDAYS ARE THE PROBLEM. Only four buses a day run the whole way: Exmouth 09:30, 11:35, 14:30, 16:35, and back from Sidmouth 10:35, 12:40, 15:35 and 17:35, the last reaching Exmouth at 18:28. Miss it and there is nothing. Between Exmouth and Budleigh Salterton alone the service is far better and runs into the night — hourly on Sundays until 22:00 out and 22:38 back, and on weekdays there are evening journeys from Exmouth at 19:00, 20:00, 21:00, 22:00 and 23:00 and back from Budleigh at 21:20, 22:20 and 23:20. Otterton is the only village stop between Budleigh and Newton Poppleford, and the lane from Otterton Cross Tree down to Ladram Bay is 1.2 km, so the 157 is a usable way off the path at Ladram for the price of that walk. Timetable from 5 April 2026",
    verified: "2026-09-17",
  },

  {
    slug: "service-357",
    number: "357",
    name: "Exmouth – Littleham – Budleigh Salterton",
    type: "bus",
    provider: "stagecoach-south-west",
    // Times from Stagecoach's own leaflet "357 — Exmouth - Budleigh Salterton
    // via Cranford Avenue", From Sunday 5th April 2026, at
    // .../April 2026/Exeter/357 050426.pdf.
    //
    // CAUTION, and the reason the frequency line hedges: the April leaflet ends
    // the day at 17:30 out of Exmouth and 18:07 out of Budleigh, but the
    // currently registered data on bustimes.org (read 17 September 2026) shows
    // the 357 running hourly from Exmouth to 22:34 and back from Budleigh to
    // 22:54. The 157 leaflet also carries evening Exmouth–Budleigh journeys at
    // slightly different times. Something has been re-registered since April;
    // the daytime is safe either way and the evening is not confirmed on an
    // operator page.
    serves: ["exmouth", "budleigh-salterton", "feathers-hotel-budleigh"],
    season: null,
    frequency: "Hourly Mon–Sat, no Sunday service on the operator's leaflet. Exmouth to Budleigh Salterton about 19 minutes, back about 34 the long way round by the hospital",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/April%202026/Exeter/357%20050426.pdf",
    notes: "The town bus between Exmouth and Budleigh Salterton, and with the 157 it gives that half of section 44 two buses an hour. Mon–Sat from Exmouth Parade 08:28 then hourly to 17:28, Budleigh Salterton Public Hall about 21 minutes later; back from the Public Hall 09:07 hourly to 17:57 on weekdays and 18:07 on Saturdays, reaching Exmouth Strand about 34 minutes later — it goes round by Knowle, Greenway Lane, the hospital and the library, so it is slower than the 157 coming back. No Sunday service on the April leaflet. Only useful for the first third of section 44: it turns round at Budleigh and never sees Otterton or Sidmouth. Timetable from 5 April 2026",
    verified: "2026-09-17",
  },

  {
    // SLUG: `service-95` is already taken by a different 95 elsewhere on the
    // path (with service-95-sunday and service-95a beside it), so this one is
    // disambiguated by place, the way seaton-cornwall is.
    slug: "service-95-exmouth",
    number: "95",
    name: "Exmouth – Littleham – Sandy Bay (Devon Cliffs)",
    type: "bus",
    provider: "stagecoach-south-west",
    // Times from Stagecoach's registered data on bustimes.org, read for
    // Thursday 17, Saturday 19 and Sunday 20 September 2026 — identical on all
    // three. Stagecoach's own PDF for the 95 (tis-kml-stagecoach.s3.
    // amazonaws.com/PdfTimetables/XDAO095.pdf) is published with fonts that
    // carry no character mapping and could not be read, and their promotional
    // page for the open-top bus gives no dates, so this is verified: null.
    //
    // Stop positions from OSM: Devon Cliffs South Beach (1100DEC10943, node
    // 4854223191) is 50 m from the sandy-bay escape — this is the only bus of
    // any kind that reaches Sandy Bay. Exmouth Pavilion (1100DEC10917, node
    // 6141265237) is 1.13 km from exmouth-seafront, and Exmouth Savoy Cinema
    // Stop E is 730 m from the exmouth endpoint.
    //
    // SEASON: probing bustimes day by day, it runs every day up to and
    // including Saturday 31 October 2026 and nothing at all from Sunday 1
    // November. The start of the season could not be established — bustimes
    // returns nothing for dates already past, and Stagecoach's own page says
    // only "open top bus services operate only in the summer season" and
    // "visit this page ahead of next summer". `from` is therefore left at the
    // beginning of April as the earliest date the third-party scenicbuses.co.uk
    // claims ("April to October"), which is NOT an operator source — treat the
    // spring end of this season as unknown.
    serves: ["exmouth", "exmouth-seafront", "sandy-bay"],
    season: { from: "04-01", to: "10-31" },
    frequency: "Summer only, every day, roughly hourly 08:30 to 17:30. Exmouth to Sandy Bay about 20 minutes",
    url: "https://bustimes.org/services/95-sandy-bay-devon-cliffs-south-beach-exmouth-leis",
    notes: "The Big Beach Bus, an open-topper between Exmouth and the Devon Cliffs holiday park, and the ONLY bus that reaches Sandy Bay — the escape point six kilometres into section 44 has no other public transport at all. From Exmouth Leisure Centre 08:30, 09:30, 10:30, 11:30, then 13:30, 14:30, 15:30, 16:30 and 17:30 (no 12:30), by the Savoy Cinema a minute later, the Pavilion and the Esplanade, and Devon Cliffs about 20 minutes out. Back from Devon Cliffs South Beach 09:00, 10:00, 11:00, 12:00, then 14:00, 15:00, 16:00 and 17:00 (no 13:00), Exmouth Leisure Centre 23 minutes later. Same times seven days a week. It stops dead at the end of October: nothing runs on 1 November, and the start of the season is not published, so out of high summer Sandy Bay is a taxi or a two-kilometre walk up to the 157 corridor. Single fares capped at £3 to the end of 2026. Times read from the registered data, not from an operator leaflet",
    verified: null,
  },

  {
    slug: "service-358",
    number: "358",
    name: "Otterton – East Budleigh – Budleigh Salterton – Exeter",
    type: "bus",
    provider: "greenslades-tours",
    // One journey each way, from the registered data on bustimes.org read for
    // Thursday 17 September 2026: 07:05 from Otterton Ottery Street into
    // Exeter, and 17:05 back from Exeter Sidwell Street. No operator page for
    // the service was found, so verified: null and the days it runs are not
    // confirmed beyond "weekdays".
    serves: ["otterton", "kings-arms-otterton", "budleigh-salterton", "feathers-hotel-budleigh"],
    season: null,
    frequency: "One journey each way on weekdays: out of Otterton at 07:05, back from Exeter at 17:05",
    url: "https://bustimes.org/services/358-otterton-budleigh-salterton-exeter-city-centre",
    notes: "A commuter run into Exeter and home again, not a way to move about the coast: it leaves Otterton at 07:05 and does not come back until the evening. Recorded because it is the second service of any kind at Otterton, and because it puts Budleigh Salterton on a direct bus to Exeter city centre. Days of operation unconfirmed",
    verified: null,
  },

  {
    slug: "avocet-line",
    number: "Train",
    name: "Avocet Line (Exmouth – Lympstone – Topsham – Exeter)",
    type: "train",
    provider: "great-western-railway",
    // From GWR's own timetable D1, "Train times 7 September to 12 December
    // 2026" — the same leaflet the riviera-line record already cites; the
    // Avocet and Riviera lines share it. Station position from OSM: Exmouth
    // node 21278292 (9100EXMOUTH, CRS EXM) is 770 m from the exmouth endpoint,
    // at the top of the Parade. Exeter St Davids node 6013523209 (9100EXETRSD,
    // EXD) and Exeter Central node 6013523210 (9100EXETERC, EXC).
    serves: ["exmouth", "exmouth-station", "exeter-st-davids"],
    season: null,
    frequency: "All year, every day, about every 30 minutes. Exmouth to Exeter Central 28 minutes, Exeter St Davids 31",
    url: "https://www.gwr.com/-/media/gwr-sc-website/files/timetables/september-26-december-26/D1-train-times-7-September-to-12-December-2026.pdf",
    notes: "The branch up the Exe estuary, and the reason section 44 is easy to start: the train puts you at the top of Exmouth Parade, 800 m from the endpoint, half-hourly from first thing until after midnight. From Exmouth, Mon–Fri 05:51, 06:15, 06:55, 07:24, then roughly every 30 minutes through the day to 21:56, 22:26, 22:56 and 23:50; Saturdays much the same from 06:55; Sundays about every 30 minutes from 08:55 to 18:59 and on to 22:5x. Coming back, trains reach Exmouth from about 05:47 until 00:12 on weekdays. Intermediate stations are Lympstone Village, Lympstone Commando (request), Exton (request), Topsham, Newcourt, Digby & Sowton, Polsloe Bridge, St James' Park and Exeter Central, with Exeter St Davids three minutes further. It is no use as a way home from Sidmouth — Sidmouth has had no railway since 1967 — so the day back is the 157. Ticket office and step-free access at Exmouth; times for 7 September to 12 December 2026",
    verified: "2026-09-17",
  },

  // ==== Section 45 ====

  {
    slug: "service-9a",
    number: "9A",
    name: "Exeter – Sidmouth – Sidford – Seaton",
    type: "bus",
    provider: "stagecoach-south-west",
    // Times from Stagecoach's OWN leaflet, "9/9A — Exeter - Honiton (9)
    // /Seaton (9A) via Clyst St Mary, Newton Poppleford and Sidmouth", From
    // Sunday 5th April 2026, at
    // .../April 2026/Exeter/9_9A 050426.pdf. Checked against the registered
    // data on bustimes.org for 17, 19 and 20 September 2026; they agree.
    //
    // The 9A does NOT go to Lyme Regis any more, and it does NOT touch Beer or
    // Branscombe: between Sidford and Seaton it runs inland over the top by the
    // Donkey Sanctuary, Trow, Street and Holyford. For Beer and Branscombe the
    // only bus is the 899 below.
    //
    // Stop positions from OSM: Seaton Sea Front (1100DEB10368, node 471627538)
    // is 680 m from the seaton endpoint; Sidmouth Triangle is 630 m from the
    // sidmouth endpoint; Sidford Drake's Avenue (1100DEC10695, node
    // 11491295070) is the sidford stop record, 2.45 km inland of the sidmouth
    // endpoint. Exeter Bus Station is OSM way 967568065.
    serves: ["sidmouth", "sidford", "seaton", "exeter-bus-station"],
    season: null,
    frequency: "Hourly every day, seven days a week, including Sundays and public holidays. Sidmouth to Seaton 28 to 31 minutes; Exeter to Sidmouth about 59, Exeter to Seaton about 88",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/April%202026/Exeter/9_9A%20050426.pdf",
    notes: "Section 45's own bus, and an unusually good one: hourly seven days a week and running late. Sidmouth Triangle to Seaton, Mon–Fri 05:50, 07:00, 09:22, then 20 past each hour to 15:20, 16:30, 17:35, 18:34 and 19:55, arriving Seaton Sea Front about 28 minutes later. Back from Seaton Sea Front 06:22, 07:32, 10:02, then 2 minutes past each hour to 15:02, 16:05, 17:10, 18:15, 19:10 and 20:35, Sidmouth Triangle about 31 minutes later — the 20:35 gets in at 21:04. Saturdays from Seaton 08:02 hourly to 15:03, then 16:05, 17:10, 18:15, 19:10 and 20:35. SUNDAYS from Seaton 08:30 hourly to 17:30, then 19:30; out from Sidmouth 08:55 hourly to 16:55 and 18:53. So a one-way day either direction works every day of the week, which is not true of section 44. The 9 runs the same road as far as Sidmouth and then goes on to Sidbury and Honiton instead, so between Exeter and Sidmouth the two together give a bus every 30 minutes. Sunday and public holiday journeys except Christmas Day, Boxing Day and New Year's Day; one extra Sunday journey (Sidmouth 10:00 to Honiton) runs only between 5 April and 25 October 2026. Timetable from 5 April 2026",
    verified: "2026-09-17",
  },

  {
    slug: "service-9",
    number: "9",
    name: "Exeter – Newton Poppleford – Sidmouth – Sidbury – Honiton",
    type: "bus",
    provider: "stagecoach-south-west",
    // Same operator leaflet and the same source as the 9A; they are printed
    // together and alternate on the road out of Exeter. Recorded separately
    // because the 9 turns north at Sidford for Sidbury and Honiton and never
    // reaches Seaton, so it links only one end of either section.
    serves: ["sidmouth", "sidford", "newton-poppleford", "exeter-bus-station"],
    season: null,
    frequency: "Hourly Mon–Sat, roughly two-hourly on Sundays; with the 9A it gives Exeter – Sidmouth a bus every 30 minutes. Exeter to Sidmouth about 59 minutes",
    url: "https://tiscon-maps-stagecoachbus.s3.amazonaws.com/Timetables/South%20West/April%202026/Exeter/9_9A%20050426.pdf",
    notes: "The other half of the Exeter – Sidmouth pair. It shares the road with the 9A as far as Sidford and then climbs to Sidbury and Honiton, so it is no use for getting between the two ends of section 45 — but it doubles the frequency between Exeter and Sidmouth to every 30 minutes Mon–Sat, and it is the bus to Honiton station if the way home is by rail rather than back down the coast. Late journeys from Exeter at 22:00, 22:40 and 23:40 reach Sidmouth at 23:24 and 00:24, which is well after everything else has stopped. Timetable from 5 April 2026",
    verified: "2026-09-17",
  },

  {
    slug: "service-899",
    number: "899",
    name: "Seaton – Beer – Branscombe – Sidford – Sidmouth",
    type: "bus",
    provider: "axe-valley-mini-travel",
    // Times from AVMT's registered data on bustimes.org, read for Thursday 17
    // and Saturday 19 September 2026 (nothing at all on Sunday 20), and
    // checked again for 19 November 2026 and 14 January 2027 — identical, so
    // this is NOT a summer bus, whatever it used to be. AVMT's own site posts
    // the timetable only as a photograph dated 2 September 2024, so the times
    // are verified: null even though the operator and its phone number are
    // confirmed.
    //
    // THIS IS THE ONLY BUS THAT REACHES BRANSCOMBE. Devon County Council's
    // supported-services pages list no community or market-day bus there
    // besides this one.
    //
    // Stop positions from OSM: Branscombe Castle Cottage (1100DEB10472, node
    // 10815411152) is 60 m from masons-arms-branscombe, 740 m from the
    // branscombe-mouth escape and 810 m from the Sea Shanty; Branscombe
    // Village Hall (1100DEB10473, node 6525186011) is 1.01 km from
    // branscombe-mouth; Beer Cross (1100DEB10361, node 4921330236) is 170 m
    // from the beer escape on Fore Street and 840 m from
    // beer-head-caravan-park, and the bus also runs down into the village to
    // Beer Post Box, Underleys and Pecorama; Seaton Sea Front (1100DEB10368)
    // is 680 m from the seaton endpoint.
    //
    // salcombe-mouth is NOT in `serves`, deliberately. Two journeys a day run
    // via Sidmouth Salcombe Road and the Fortescue phone box (1100DEB11532,
    // node 6525207181), which is 960 m from the National Trust car park on
    // Salcombe Hill in a straight line but a stiff climb on foot, and the other
    // three journeys don't go that way at all. Claiming it as a stop would
    // overstate both the walk and the frequency; the notes say what it is.
    serves: [
      "seaton",
      "beer",
      "beer-head-caravan-park",
      "branscombe-village",
      "branscombe-mouth",
      "masons-arms-branscombe",
      "sidford",
      "sidmouth",
    ],
    season: null,
    frequency: "Mon–Sat all year, five journeys each way on weekdays and three on Saturdays. No Sunday service at all. Seaton to Sidmouth about 47 minutes the coast way, Seaton to Branscombe 23, Branscombe to Sidmouth 22",
    url: "https://bustimes.org/services/899-seaton-beer-branscombe-sidmouth",
    notes: "The only bus that reaches Branscombe, and so the only public way off the ten roadless kilometres between Sidmouth and Beer. From Seaton Sea Front 09:30, 11:45, 13:45 and 16:15 by Beer and Branscombe, plus a 14:40 that runs straight over the top by Street and misses both; Beer Cross about 7 minutes out, Branscombe Castle Cottage 16, Branscombe Village Hall 25, Sidmouth Triangle 47. Back from Sidmouth Triangle 09:10 (over the top, no Branscombe), 10:25, 12:40, 14:40 and 17:05, reaching Branscombe about 22 minutes later, Beer about 34 and Seaton Sea Front about 44. Saturdays three each way: from Seaton 09:30, 11:45 and 13:45, back from Sidmouth 10:25, 12:40 and 14:40. NOTHING ON SUNDAYS — on a Sunday, Branscombe Mouth has no bus, and the only way out of it is on foot to Beer or Sidmouth or by taxi. It runs to the same times in November and January as in September, so it is not a summer bus. Two journeys, the 09:30 out of Seaton and the 12:40 out of Sidmouth, go by Salcombe Road and the Fortescue phone box, which is the nearest any bus gets to the Salcombe Hill car park at the top of section 45 — a kilometre and a steep one. Ring AVMT on 01297 625959 before relying on a printed time; their own leaflet online is two years old",
    verified: null,
  },

  {
    // TYPE: recorded as "train", not "tram". lib/transport/routes.js uses only
    // bus, ferry, taxi and train, and lib/stay-icons.js has a glyph and a
    // colour rule for each of those and none for a tram — an unstyled badge
    // type renders as a blank disc and fails npm run check:output. "train" is
    // the closest of the four and matches the precedent set by
    // paignton-kingswear-railway, which is also a heritage line on rails.
    slug: "seaton-tramway",
    number: "Tram",
    name: "Seaton Tramway (Seaton – Colyford – Colyton)",
    type: "train",
    provider: "seaton-tramway",
    // Running pattern, journey time, fares and the dog rule from the
    // operator's own site (tram.co.uk, its timetable calendar and fares
    // pages). Stop positions from OSM: Seaton terminus node 313304412 is 470 m
    // from the seaton endpoint, Colyford node 313304402, Colyton node
    // 313304396. Riverside Halt (node 9561021168) and Seaton Wetlands Halt
    // (node 4917382416) are request halts in between and have no records.
    serves: ["seaton", "colyford", "colyton"],
    // Not continuous. It runs daily through the season, then turns over to the
    // Polar Express in late November and December, and the calendar shows
    // nothing at all through most of February to June of the following year —
    // which is a calendar not yet filled in rather than a closure, so the
    // spring end of this season is a guess and should be rechecked.
    season: { from: "02-14", to: "12-31" },
    frequency: "Daily through the season, every 20 minutes, 10:00 to 16:00 or 17:00 depending on the service pattern. Seaton to Colyton 27 minutes",
    url: "https://www.tram.co.uk/calendar",
    notes: "Narrow-gauge electric trams on the old Seaton branch, up the Axe marshes to Colyford and Colyton. A day out rather than transport, but it is a genuine way inland from the end of section 45 and the terminus is 470 m from the finish, by the Underfleet. Trams every 20 minutes from Seaton at :00, :20 and :40, 10:00 to 16:00 on the standard Yellow pattern and to 17:00 on the busier ones; 27 minutes to Colyton, calling at Riverside Halt, Seaton Wetlands Halt and Colyford. It is priced as an attraction, not a bus: Seaton to Colyton £12.10 adult single, £17.20 return, children £9.60 and £13.70; Colyford £8.60 single. Dogs £2 a journey or £4 for an all-day return, downstairs only, and not allowed on Seaton Wetlands. Check the date on the operator's calendar before counting on it — the winter turns over to the Polar Express and the following spring's dates were not yet published when this was read",
    verified: "2026-09-17",
  },
];
