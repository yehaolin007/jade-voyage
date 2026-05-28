export const site = {
  brand: 'Harmony Retreats',
  brandCn: '跨境康旅',
  slogan: 'Checkup, TCM heritage therapies, and Chongqing mountain-city travel in one coordinated wellness journey.',
  tagline: 'Checkup · TCM · Travel',
  email: 'hello@harmonyretreats.com',
  whatsapp: '+86 138-0000-0000',
  offices: ['Chongqing', 'Shanghai', 'Hangzhou'],
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
  { city: 'Chongqing', note: 'Mountain-city wellness base', phone: '+86 23 8800-0000' },
  { city: 'Shanghai', note: "Jing'an · Medical liaison", phone: '+86 21 6200-0000' },
  { city: 'Hangzhou', note: 'Recovery partner liaison', phone: '+86 571 8800-0000' },
];

export const nav = [
  {
    label: 'Home',
    href: '/',
    hasSub: false,
  },
  {
    label: 'Packages',
    href: '/tours',
    hasSub: true,
    children: [
      { label: 'Tour Packages', href: '/tours/chongqing-wellness-starter/', desc: 'Detail page and booking options' },
    ],
  },
  {
    label: 'Trust & Safety',
    href: '/#trust-safety',
    hasSub: true,
    children: [
      { label: 'Hospital Credentials', href: '/verified-partners#medical', desc: 'Medical partner standards' },
      { label: 'TCM Clinic Credentials', href: '/verified-partners#wellness', desc: 'Licensed heritage therapy partners' },
      { label: 'Travel Agency Credentials', href: '/verified-partners#travel', desc: 'Screened travel operators' },
      { label: 'Privacy Policy', href: '/verified-partners#privacy-policy', desc: 'Data handling and consent' },
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
      { label: 'Why Choose Us', href: '/#why-choose-us', desc: 'What makes us different' },
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
