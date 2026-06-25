// Pekeng (mock) na detalye para sa Live Demos.
// Isang lugar lang ang i-eedit mo kung gusto mong palitan ang sample content.

export const weddingDemo = {
  slug: 'wedding',
  couple: 'Juan & Maria',
  tagline: 'Together with their families, invite you to celebrate their wedding',
  date: '2026-12-12T15:00:00',
  dateLabel: 'December 12, 2026 · 3:00 PM',
  heroImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&q=75&auto=format&fit=crop',
  venue: {
    name: 'San Agustin Church',
    address: 'General Luna St, Intramuros, Manila',
    mapQuery: 'San Agustin Church Intramuros Manila',
  },
  reception: {
    name: 'The Blue Leaf Cosmopolitan',
    address: 'Aseana Ave, Parañaque City',
  },
  program: [
    { time: '3:00 PM', title: 'Wedding Ceremony' },
    { time: '5:30 PM', title: 'Cocktails & Photos' },
    { time: '6:30 PM', title: 'Reception & Dinner' },
    { time: '8:00 PM', title: 'First Dance' },
  ],
  entourage: [
    {
      role: 'Our Beloved Parents',
      name: 'Ricardo M. Salvador †   ·   Alfonso D. Mendoza\nTeresa V. Salvador   ·   Lucia R. Mendoza',
    },
    {
      role: 'Principal Sponsors',
      name: 'Mr. & Mrs. Gregorio Villanueva\nMr. & Mrs. Rafael Aquino',
    },
    { role: 'Maid of Honor', name: 'Andrea Santos' },
    { role: 'Best Man', name: 'Carlo Reyes' },
    { role: 'Bridesmaids', name: 'Liza Cruz   ·   Mae Tan   ·   Joy Lim' },
    { role: 'Groomsmen', name: 'Paolo Diaz   ·   Rico Yu   ·   Ken Sy' },
    { role: 'Officiating Priest', name: 'To be announced' },
  ],
  story: {
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=75&auto=format&fit=crop',
    text: "We first met at a friend's birthday party in Manila back in 2018 — one shared playlist and a long conversation later, we knew it was the start of something. Through countless memories, spontaneous trips, and quiet everyday moments, our love only grew stronger. And under a sky full of stars in early 2026, with both our families hiding nearby, Juan asked the question — and Maria said yes. Now, we can't wait to begin forever with all of you by our side.",
  },
  // Placeholder sample photos — palitan ng totoong event photos (public/images).
  gallery: [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=70&auto=format&fit=crop',
  ],
}

export const debutDemo = {
  slug: 'debut',
  celebrant: 'Sofia Mae',
  tagline: 'You are invited to my 18th Birthday Celebration',
  date: '2026-09-20T18:00:00',
  dateLabel: 'September 20, 2026 · 6:00 PM',
  venue: {
    name: 'Marquis Events Place',
    address: 'BGC, Taguig City',
    mapQuery: 'Marquis Events Place BGC Taguig',
  },
  program: [
    { time: '6:00 PM', title: 'Guest Arrival' },
    { time: '6:30 PM', title: 'Grand Entrance' },
    { time: '7:00 PM', title: '18 Roses & 18 Candles' },
    { time: '8:30 PM', title: 'Party & Dancing' },
  ],
  dressCode: {
    theme: 'Glamorous Evening',
    palette: [
      { label: 'Champagne Gold', color: '#D4AF7A' },
      { label: 'Blush Pink', color: '#F4C2C2' },
      { label: 'Deep Plum', color: '#5D3A5A' },
    ],
    note: 'Semi-formal to formal attire. Avoid white and casual wear.',
  },
  gallery: [
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1612722432474-b971cdcea546?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=600&q=70&auto=format&fit=crop',
  ],
}

export const birthdayDemo = {
  slug: 'birthday',
  celebrant: "Lucas' 5th Birthday",
  tagline: "Come join the fun at Lucas' Safari Adventure!",
  date: '2026-07-15T14:00:00',
  dateLabel: 'July 15, 2026 · 2:00 PM',
  venue: {
    name: 'Kidzoona Play Area',
    address: 'SM Mall of Asia, Pasay City',
    mapQuery: 'Kidzoona SM Mall of Asia',
  },
  program: [
    { time: '2:00 PM', title: 'Welcome & Free Play' },
    { time: '2:30 PM', title: 'Magic Show' },
    { time: '3:15 PM', title: 'Games & Prizes' },
    { time: '4:00 PM', title: 'Cake & Blowing of Candles' },
  ],
  gallery: [
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=70&auto=format&fit=crop',
  ],
}
