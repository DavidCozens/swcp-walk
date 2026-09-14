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
    name: "Yealm ferry",
    type: "ferry",
    provider: "ycet",
    serves: ["yealm-wembury", "yealm-noss-mayo"],
    // The operator's site gives the 2026 season as ending 30 Sep, core hours
    // 10am–4pm. A directory says it starts in April, which the operator
    // doesn't confirm — so null until it does.
    season: null,
    frequency: null,
    url: "https://www.ycet.co.uk/",
    notes: "Core hours 10am–4pm, cut back in bad weather and quiet spells. Ring before relying on it",
    verified: null,
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
    // 100 m from the endpoint. Tintagel Visitor Centre (0800COA10024) is 0.9 km
    // from the tintagel endpoint, and Boscastle has no record, so neither is in
    // serves yet. Wainhouse Corner (0800COA10046) is 3.6 km off the path.
    serves: ["bude", "widemouth-bay", "crackington-haven"],
    season: null,
    frequency: "6 a day each way Mon–Sat all year, about every two hours; not bank holidays. Sundays and bank holidays 6 from Bude and 5 back, from 5 Apr 2026: the operator's PDF says until 31 Aug, its journey planner shows them to 25 Oct",
    url: "https://passenger-line-assets.s3.eu-west-1.amazonaws.com/gocornwallbus/TFCN/95-timetable-20260726-e2b75fdf.pdf",
    notes: "The only bus along this stretch, inland by the A39 between Widemouth and Crackington: The Strand to Crackington Haven Cabin Cafe in 26 minutes, Widemouth Bay in 6. Mon–Sat from The Strand 06:30 on schooldays or 06:50 on Saturdays and school holidays, 09:20, 11:20, 13:20, 15:15 on schooldays or 15:20, and 17:40, reaching the Cabin Cafe at 06:56 or 07:16, 09:46, 11:46, 13:46, 15:51 or 15:46, and 18:06. Back from the Cabin Cafe 08:04, 10:44, 12:44, 14:44, 16:44 and 18:44, passing Widemouth Bay 18 minutes later and reaching The Strand at 08:32 (08:37 on schooldays), 11:12, 13:12, 15:12, 17:12 and 19:12. Sundays from The Strand 08:10, 10:00, 12:00, 14:00, 16:00 and 18:00, Cabin Cafe 08:31, 10:26, 12:26, 14:26, 16:26 and 18:26; back from the Cabin Cafe 10:06, 12:36, 14:36, 16:36 and 18:36, The Strand 28 minutes later. Onward to Boscastle in 20 minutes and Tintagel Visitor Centre in 36; on Sundays it goes on by Port Isaac and Polzeath to Wadebridge. No bus at Millook or Dizzard. Timetable from 26 Jul 2026",
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
];
