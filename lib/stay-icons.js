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
  // bunk beds
  hostel: '<path d="M3 4v7h18V8H8V4z"/><path d="M3 13v7h18v-3H8v-4z"/>',
};

export function glyph(type) {
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
