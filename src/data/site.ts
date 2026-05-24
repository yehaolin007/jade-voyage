export const site = {
  brand: 'Harmony Retreats',
  brandCn: '和旅出行',
  slogan: 'Medical wellness retreats, trusted travel care, and restorative journeys across China.',
  tagline: 'Medical · Wellness · Cultural Itineraries',
  email: 'hello@harmonyretreats.com',
  whatsapp: '+86 138-0000-0000',
  offices: ['Hangzhou', 'Shanghai', 'Chengdu'],
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  tawkPropertyId: 'YOUR_TAWK_PROPERTY_ID',
  paypal: {
    clientId: 'sb',
    currency: 'USD',
    intent: 'capture' as const,
  },
  countries: 32,
  yearsOfService: 15,
  guestsWelcomed: '8,000+',
  curatedItineraries: '200+',
  certifiedPartners: '30+'
};

export const offices = [
  { city: 'Hangzhou', note: 'West Lake · Headquarters', phone: '+86 571 8800-0000' },
  { city: 'Shanghai', note: "Jing'an · Medical liaison", phone: '+86 21 6200-0000' },
  { city: 'Chengdu', note: 'Jinjiang · Cultural team', phone: '+86 28 6688-0000' },
];

export const nav = [
  {
    label: 'Home',
    href: '/',
    hasSub: true,
    children: [
      { label: 'Overview', href: '/', desc: 'Hero and quick inquiry' },
      { label: 'Core Credentials', href: '/#trust-safety', desc: 'Trust and safety proof' },
      { label: 'Featured Packages', href: '/#tours', desc: 'Popular retreat products' },
    ],
  },
  {
    label: 'Tour SOP',
    href: '/tours',
    hasSub: true,
    children: [
      { label: 'Tour Packages', href: '/tours/west-lake-restoration/', desc: 'Detail page and booking options' },
    ],
  },
  {
    label: 'Trust & Safety',
    href: '/#trust-safety',
    hasSub: true,
    children: [
      { label: 'Hospital Credentials', href: '/verified-partners', desc: 'Medical partner standards' },
      { label: 'Privacy Policy', href: '/verified-partners', desc: 'Data handling and consent' },
      { label: 'Insurance Support', href: '/contact', desc: 'Claim material guidance' },
      { label: 'Licensed Travel Partners', href: '/verified-partners', desc: 'Screened travel agencies' },
    ],
  },
  {
    label: 'Services',
    href: '/#services',
    hasSub: true,
    children: [
      { label: 'Health Check-up Services', href: '/#services', desc: 'Medical screening support' },
      { label: 'Therapy & Wellness', href: '/#services', desc: 'TCM and restorative care' },
      { label: 'Travel Services', href: '/#tours', desc: 'Culture and retreat routing' },
      { label: 'Service Process', href: '/#process', desc: 'How planning works' },
    ],
  },
  {
    label: 'Real Stories',
    href: '/#stories',
    hasSub: true,
    children: [
      { label: 'UGC Videos', href: '/#stories', desc: 'Guest video stories' },
      { label: 'Guest Reviews', href: '/#stories', desc: 'Recovery and travel feedback' },
      { label: 'Repeat Guests', href: '/#stories', desc: 'Long-term trust cases' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    hasSub: true,
    children: [
      { label: 'Why Choose Us', href: '/#about', desc: 'What makes us different' },
      { label: 'Team Introduction', href: '/about', desc: 'Medical and travel curators' },
      { label: 'Partner Network', href: '/verified-partners', desc: 'Hospitals and agencies' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
    hasSub: true,
    children: [
      { label: 'Inquiry Form', href: '/contact', desc: 'Send travel requirements' },
      { label: 'Book Consultation', href: '/contact', desc: 'Talk to a concierge' },
      { label: 'WhatsApp & Email', href: '/contact', desc: 'Fast contact options' },
    ],
  }
];
