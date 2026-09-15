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
    // (0800COZ06359), not recorded. Portloe goes through the portloe endpoint
    // record: Church (NE-bound 0800COC30843, OSM node 11657380207; opposite
    // 0800COC30842, node 10835730408), 70–80 m from it. Sunny Corner (0800SCH16357
    // / 16358, OSM nodes 11657380205 / 11657380206), 450 m west, and Camels Farm
    // (0800SCH16359 / 16360), 1 km west on the road to Veryan, are not recorded.
    // Veryan goes through the veryan escape record, Pendower Road (N-bound). Ruan
    // High Lanes is the ruan-high-lanes stop record, where the 50 connects. No
    // Sunday buses. No buses 25 Dec or 1 Jan; bank holiday Monday 28 Dec runs
    // Saturday times.
    serves: ["portloe", "veryan", "ruan-high-lanes"],
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
];
