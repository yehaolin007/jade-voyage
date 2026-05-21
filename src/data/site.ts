export const site = {
  brand: 'Jade Voyage',
  brandCn: '玉 行',
  slogan: 'Where ancient healing meets modern care — across the heart of China.',
  tagline: 'Medical · Wellness · Cultural Itineraries',
  email: 'hello@jadevoyage.com',
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
  { label: 'Services', href: '/#services' },
  { label: 'Tours', href: '/tours', hasSub: true },
  { label: 'Verified Partners', href: '/verified-partners', hasSub: true },
  { label: 'Stories', href: '/#stories' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
