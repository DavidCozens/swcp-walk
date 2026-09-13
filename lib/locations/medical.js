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
    verified: null,
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
    slug: "torch-farm-barnstaple",
    name: "Torch Farm & Equine — Bridge House",
    kind: "vet",
    vet: { emergency: true },
    lat: 51.08572, lon: -4.06179,
    address: "Bridge House, Pilton Quay, Barnstaple, EX31 1PG",
    phone: "01271 879516",
    url: "https://www.torchfarmandequine.co.uk/",
    hours: "24-hour emergency service",
    verified: null,
  },
  {
    slug: "charter-barnstaple",
    name: "Charter Veterinary Hospital (MiNightVet)",
    kind: "vet",
    vet: { emergency: true },
    lat: 51.06500, lon: -4.09262,
    address: "Charter Court, Roundswell, Barnstaple, EX31 3FG",
    url: "https://minightvet.com/our-practices/barnstaple/",
    phone: null,
    hours: "Out-of-hours emergency cover for North Devon",
    verified: null,
  },
];
