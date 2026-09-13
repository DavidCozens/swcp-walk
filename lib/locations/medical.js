// Hospitals and vets.
//
// Unlike everything else these are matched by "the nearest few, however far" —
// there is always a nearest A&E and you always want to know which it is, even
// when it's an hour away. They're deliberately kept off the map: the nearest
// A&E to this stretch is in Taunton, and putting it on a section map would
// zoom the route out to nothing.
//
//   hospital.type   "ae"  a full 24/7 emergency department
//                   "utc" urgent treatment centre — the old minor injuries
//                         unit, right for a sprain or a gash, not for a
//                         serious injury
//                   "minor" a GP practice's minor injuries service — nurse-led,
//                         weekdays, ring first. Worth knowing on the doorstep,
//                         but not somewhere you can simply turn up
//   vet.emergency   true | false | null — whether they cover out of hours
export default [
  {
    slug: "minehead-utc",
    name: "Minehead Community Hospital",
    kind: "hospital",
    hospital: { type: "utc" },
    lat: 51.20011, lon: -3.46191,
    address: "Luttrell Way, Minehead, TA24 6DF",
    phone: "01643 701701",
    hours: "8am – 9pm daily, last patient 8.30pm",
    notes: "Urgent treatment centre, not an A&E — right for sprains and cuts. NHS 111 first if you're unsure it's the right place",
    verified: null,
  },
  {
    slug: "musgrove-park",
    name: "Musgrove Park Hospital",
    kind: "hospital",
    hospital: { type: "ae" },
    lat: 51.01157, lon: -3.12170,
    address: "Parkfield Drive, Taunton, TA1 5DA",
    phone: "01823 333444",
    hours: "24 hours, every day",
    notes: "Nearest full A&E to the Somerset end of the path",
    verified: null,
  },
  {
    slug: "north-devon-district",
    name: "North Devon District Hospital",
    kind: "hospital",
    hospital: { type: "ae" },
    lat: 51.09217, lon: -4.05046,
    address: "Raleigh Park, Barnstaple, EX31 4JB",
    phone: "01271 322577",
    hours: "24 hours, every day",
    notes: "Nearest full A&E once you're into Devon; also a designated trauma unit",
    verified: "2026-09-13",
  },
  {
    slug: "white-lodge-minehead",
    name: "White Lodge Veterinary Centre",
    kind: "vet",
    vet: { emergency: true },
    lat: 51.20092, lon: -3.46509,
    address: "Stephenson Road, Alcombe, Minehead",
    phone: "01643 703649",
    url: "https://www.whitelodgevetclinic.co.uk/",
    hours: "Emergencies 24 hours on the same number",
    notes: "8am–7pm handled by the Minehead or Williton practice; 7pm–8am by Somerset Veterinary Emergency Clinic at Bridgwater. Registered clients first — others seen at their discretion, possibly for a higher fee",
    verified: "2026-09-13",
  },
  {
    slug: "charter-barnstaple",
    name: "Charter Veterinary Hospital (CVS Vets 24/7)",
    kind: "vet",
    vet: { emergency: true },
    lat: 51.06500, lon: -4.09262,
    address: "Charter Court, Roundswell, Barnstaple, EX31 3FG",
    phone: "01271 371115",
    url: "https://www.cvsvets.com/south-west/charter-veterinary-hospital",
    hours: "Emergencies 24 hours, every day",
    notes: "Formerly MiNightVet, whose site now redirects to CVS. Out-of-hours cover for the Ilfracombe practice too",
    verified: "2026-09-13",
  },
  {
    slug: "lyn-health-lynton",
    name: "Lyn Health minor injury service",
    kind: "hospital",
    hospital: { type: "minor" },
    lat: 51.22921, lon: -3.83722,
    address: "Burvill Street, Lynton, EX35 6HA",
    phone: "01598 753226",
    hours: "Mon–Fri, appointments 9am – 5pm. Not at weekends",
    notes: "Nurse-led, at the GP surgery: wounds, burns, bites and stings, sprains, minor head injuries. No walk-ins; ring first or use NHS 111",
    verified: "2026-09-13",
  },
  {
    slug: "combe-coastal-ilfracombe",
    name: "Combe Coastal Practice minor injuries",
    kind: "hospital",
    hospital: { type: "minor" },
    lat: 51.20374, lon: -4.12687,
    address: "Ilfracombe Medical Centre, St Brannocks Road, Ilfracombe, EX34 8EG",
    phone: "01271 863119",
    hours: "Mon–Fri only. 8am – 6.30pm on the practice's site, 8.30am – 6pm in Royal Devon's 2024 notice",
    notes: "Ilfracombe's minor injuries service while the Tyrrell Hospital unit is closed, which Royal Devon calls temporary. Ring first; the duty clinician calls back with a same-day slot. Whether visitors are seen isn't stated",
    verified: "2026-09-13",
  },
  {
    slug: "charter-mullacott",
    name: "Charter Veterinary Centre – Mullacott",
    kind: "vet",
    vet: { emergency: false },
    lat: 51.17762, lon: -4.14603,
    address: "Bickenbridge Farm, Mullacott, Ilfracombe, EX34 8NZ",
    phone: "01271 866770",
    url: "https://www.cvsvets.com/south-west/charter-veterinary-centre-mullacott",
    notes: "Small animals, CVS group. Nights, weekends and bank holidays go to Charter Veterinary Hospital, Barnstaple. Street address from OSM, not the CVS page",
    verified: "2026-09-13",
  },
  {
    slug: "argyll-braunton",
    name: "Argyll Veterinary Centre – Braunton",
    kind: "vet",
    vet: { emergency: false },
    // EX33 2JL via postcodes.io; OSM has no node for it.
    lat: 51.10695, lon: -4.16053,
    address: "28 Exeter Road, Braunton, EX33 2JL",
    phone: "01271 812405",
    url: "https://www.cvsvets.com/south-west/argyll-veterinary-centre-braunton",
    hours: "Mon–Fri 8.30am – 7pm, Sat 9am – 12.30pm",
    notes: "Small animals, CVS group. Nights, weekends and bank holidays go to Charter Veterinary Hospital, Barnstaple. Position is the postcode's, not the building's. Argyll's Ilfracombe branch, still on OSM, closed in 2021",
    verified: "2026-09-13",
  },
];
