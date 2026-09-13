// One glyph per accommodation type, used for both the list badge and the map
// pin. Defined once here so the two can't drift apart: the filter renders them
// into the page, and `staysForMap` hands the same markup to the map script.
//
// Kept deliberately blunt — these are read at about 22px on a contour map, so
// simple filled shapes survive where fine linework would not.
const GLYPHS = {
  // tent
  campsite: '<path d="M12 4 21 20H3z"/><path d="M12 11 16.5 20h-9z" fill="#fff" fill-opacity=".55"/>',
  // beer glass — Brit Stops are pubs and businesses
  britstop: '<path d="M7 5h10l-1.4 9.5H8.4z"/><rect x="10.6" y="15" width="2.8" height="4.5" rx=".6"/>',
  // parking P
  park4night: '<path d="M8.5 4.5h4.2a4.2 4.2 0 0 1 0 8.4h-1.9V20H8.5zm2.3 2.4v3.7h1.6a1.85 1.85 0 0 0 0-3.7z"/>',
  // caravan
  cl: '<rect x="2.5" y="7" width="15" height="8.5" rx="2"/><rect x="18" y="13" width="3.5" height="2.5" rx="1"/><circle cx="7.5" cy="18" r="2.2"/>',
  // bed
  bnb: '<path d="M3 8v11h2.2v-3h13.6v3H21v-7H9.8V8z"/><circle cx="6.6" cy="11.4" r="2.1"/>',
  // pub sign hanging from a bracket
  inn: '<rect x="4" y="3.5" width="2" height="17" rx=".8"/><path d="M6 5h11v2H6z"/><rect x="12" y="6.5" width="8" height="7.5" rx="1"/>',
  // A route isn't a place, so these never become pins — but the badge is how
  // you tell one entry from another at a glance, and a service deserves one
  // just as much as a campsite does.
  bus: '<path fill-rule="evenodd" d="M4.6 2.8h14.8a1.6 1.6 0 0 1 1.6 1.6v10.9a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 15.3V4.4a1.6 1.6 0 0 1 1.6-1.6zm1 2.6v4.2h12.8V5.4z"/><circle cx="7.2" cy="19.4" r="2.1"/><circle cx="16.8" cy="19.4" r="2.1"/>',
  // a star: something worth stopping for
  poi: '<path d="M12 1.9 15 9h7.5l-6 4.8 2.3 7.3L12 16.6 5.2 21.1 7.5 13.8l-6-4.8H9z"/>',
  // a stop: sign on a post
  stop: '<path d="M4.5 3h15v8.5h-15z"/><path d="M10.9 11.5h2.2v9.5h-2.2z"/><path d="M7.5 20h9v1.6h-9z"/>',
  train: '<path fill-rule="evenodd" d="M6.2 2.4h11.6a2 2 0 0 1 2 2v9.9a2 2 0 0 1-2 2H6.2a2 2 0 0 1-2-2V4.4a2 2 0 0 1 2-2zm1 2.9v4.1h9.6V5.3z"/><path d="M7 17.6h10l2.6 4h-3.2l-1.2-1.6H8.8l-1.2 1.6H4.4z"/>',
  ferry: '<path d="M2.6 14.8h18.8l-2.6 6.2H5.2z"/><path d="M6.8 6.6h10.4v6.6H6.8z"/><path d="M10.9 2.2h2.2v3.2h-2.2z"/>',
  taxi: '<path fill-rule="evenodd" d="M5.6 8.2h12.8l1.8 4.8v4.2a1 1 0 0 1-1 1h-1.1v1.6h-2.6v-1.6H8.5v1.6H5.9v-1.6H4.8a1 1 0 0 1-1-1V13zm1.5 2.2-.9 2.4h11.6l-.9-2.4z"/><path d="M9.4 3h5.2v3.2H9.4z"/>',
  // knife and fork
  food: '<path d="M5.2 2.5h2v7.2h1.4V2.5h2v7.2h1.4V2.5h2V11a3 3 0 0 1-2.4 2.9V21.5h-2.4v-7.6A3 3 0 0 1 5.2 11z"/><path d="M17.2 2.5c1.8 0 3.2 2.4 3.2 5.6 0 2.5-.9 4.4-2.1 5.1v8.3h-2.2V2.5z"/>',
  // shopping basket
  shop: '<path d="M8.6 2.2 6.2 7.4H3v2.3h1.3l1.7 9.3h12l1.7-9.3H21V7.4h-3.2l-2.4-5.2-1.9.9 2 4.3H8.5l2-4.3zM8 11.4h1.9l.5 5.3H8.5zm4.1 0H14l-.4 5.3h-1.1zm4.1 0h1.8l-.9 5.3h-1.3z"/>',
  // medical cross
  hospital: '<path d="M9.4 2.8h5.2v6.6h6.6v5.2h-6.6v6.6H9.4v-6.6H2.8V9.4h6.6z"/>',
  // paw print
  vet: '<circle cx="6.8" cy="9.6" r="2.15"/><circle cx="11.2" cy="6.8" r="2.15"/><circle cx="16" cy="7.6" r="2.15"/><circle cx="18.9" cy="11.8" r="2"/><path d="M12.4 12.2c3.1 0 5.6 2.4 5.6 5 0 2-1.7 3.2-3.7 3.2-1 0-1.6-.4-2.4-.4s-1.4.4-2.4.4c-2 0-3.7-1.2-3.7-3.2 0-2.6 2.5-5 6.6-5z"/>',
  // a way off the path: an arrow leaving a line
  escape: '<path d="M2.5 19h9v2.4h-9z"/><path d="M13.5 3h8v8h-2.4V7.1l-7.2 7.2-1.7-1.7 7.2-7.2h-3.9z"/><path d="M2.5 10.6h5.6V13H2.5z"/>',
  // start or finish of a day
  endpoint: '<path d="M6 2.5h2.2v19H6z"/><path d="M9 3.5h10l-2.2 3.4L19 10.3H9z"/>',
  // bunk beds
  hostel: '<path d="M3 4v7h18V8H8V4z"/><path d="M3 13v7h18v-3H8v-4z"/>',
};

// A transfer firm is a taxi by another name.
const ALIAS = { transfer: "taxi" };

export function glyph(type) {
  type = ALIAS[type] || type;
  return GLYPHS[type] || '<circle cx="12" cy="12" r="6"/>';
}

// The badge markup shared by the list and the map pin.
export function badge(type, extraClass) {
  return (
    '<span class="stay-badge stay-pin-' + type + (extraClass ? " " + extraClass : "") + '">' +
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    glyph(type) +
    "</svg></span>"
  );
}
