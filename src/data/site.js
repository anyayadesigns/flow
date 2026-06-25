// ──────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH para sa buong website.
// Dito mo lang babaguhin ang business facts, stats, at presyo —
// awtomatikong tutugma ang lahat ng section (home, navbar, footer,
// packages page). HUWAG nang i-hardcode sa ibang file.
// ──────────────────────────────────────────────────────────────

export const business = {
  name: 'RSVP Lounge',
  tagline: 'Digital Invitations & RSVP Websites',
  // Turnaround na ginagamit sa stats at FAQ — iisa lang ang pinagmumulan.
  turnaround: '3 days',
}

// Trust-strip stats. Ang una ay ginagamit din sa hero social-proof line.
export const stats = [
  { value: '200+', label: 'celebrations made' },
  { value: business.turnaround, label: 'average turnaround' },
  { value: '4.9 / 5', label: 'client rating' },
]

// Launch promo — iisang halaga lang, ginagamit sa hero at sa bawat tier.
export const launchOffer = {
  saveUpTo: '1,000', // dapat tugma sa pinakamalaking `save` sa tiers sa baba
}

// Mga package. Ito lang ang pinagmumulan ng presyo (home + packages page).
export const tiers = [
  {
    name: 'Standard',
    tagline: 'the web invitation',
    price: '1,999',
    original: '2,999',
    save: '1,000',
    features: [
      'Custom web invitation with its own link',
      'Countdown & event details',
      'Simple RSVP form',
      'Photo gallery',
      'Three rounds of revisions',
    ],
    recommended: false,
  },
  {
    name: 'Premium',
    tagline: 'the full rsvp website',
    price: '3,999',
    original: '4,999',
    save: '1,000',
    features: [
      'Everything in Standard',
      'Venue map & directions',
      'All special sections — story, entourage, attire & gifts',
      'Background music on your invitation',
      'Larger photo gallery',
      'Unlimited revisions',
    ],
    recommended: true,
  },
]
