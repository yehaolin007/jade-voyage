export interface PackageProduct {
  cnTitle: string;
  title: string;
  region: string;
  duration: string;
  priceFrom: number;
  pairPrice?: number;
  pairNote?: string;
  highlights: string[];
  image: string;
  alt: string;
  group: 'wellness' | 'medical';
  badgeLabel: string;
}

export const wellnessTravelPackages: PackageProduct[] = [
  {
    cnTitle: '川渝山水疗愈行',
    title: 'Sichuan-Chongqing Wellness Escape',
    region: 'Chongqing · Jiuzhaigou · Chengdu',
    duration: '8 days · 7 nights',
    priceFrom: 2099,
    pairPrice: 3999,
    highlights: [
      'Two advanced TCM therapy sessions',
      'DIY wellness tea & herbal sachet workshop',
      '8-day Sichuan–Chongqing–Jiuzhaigou tour',
    ],
    image: '/assets/products/jiuzhaigou-valley.png',
    alt: 'Jiuzhaigou valley scenery on the Sichuan-Chongqing wellness escape',
    group: 'wellness',
    badgeLabel: 'WELLNESS + TRAVEL',
  },
  {
    cnTitle: '江峡全景臻养之旅',
    title: 'Three Gorges Panorama Wellness Journey',
    region: 'Chongqing · Enshi · Yangtze Three Gorges',
    duration: '10 days · 9 nights',
    priceFrom: 2999,
    pairPrice: 5599,
    highlights: [
      'Two premium TCM therapy sessions',
      'Tea ceremony & herbal sachet experience',
      '10-day Chongqing–Enshi–Three Gorges tour',
    ],
    image: '/assets/products/wulong-three-bridges.png',
    alt: 'Wulong canyon and Three Gorges scenery on the panorama wellness journey',
    group: 'wellness',
    badgeLabel: 'WELLNESS + TRAVEL',
  },
];

export const checkupTravelPackages: PackageProduct[] = [
  {
    cnTitle: '山城体检轻观光之旅',
    title: 'Chongqing Health Check Light Tour',
    region: 'Chongqing',
    duration: '6 days · 5 nights',
    priceFrom: 1899,
    pairNote: 'Couple price on request',
    highlights: [
      'Xueping Package 1 health check',
      '5-day leisurely Chongqing city tour',
      'Hongyadong · Ciqikou · Liziba',
    ],
    image: '/assets/products/hongyadong-night.png',
    alt: 'Hongyadong night view on the Chongqing health check light tour',
    group: 'medical',
    badgeLabel: 'HEALTH CHECK + TRAVEL',
  },
  {
    cnTitle: '渝州川渝体检深度游',
    title: 'Chongqing-Sichuan Health Deep Dive',
    region: 'Chongqing · Jiuzhaigou · Chengdu',
    duration: '9 days · 8 nights',
    priceFrom: 2899,
    pairNote: 'Couple price on request',
    highlights: [
      'Xueping premium health check',
      '8-day Sichuan–Chongqing–Jiuzhaigou tour',
      'Wulong Fairy Mountain · Jiuzhaigou · Chengdu',
    ],
    image: '/assets/products/wulong-fairy-mountain.png',
    alt: 'Wulong Fairy Mountain on the Chongqing-Sichuan health deep dive',
    group: 'medical',
    badgeLabel: 'HEALTH CHECK + TRAVEL',
  },
  {
    cnTitle: '江峡全景体检尊享游',
    title: 'Three Gorges Premium Health Tour',
    region: 'Chongqing · Yangtze Three Gorges · Hubei',
    duration: '11 days · 10 nights · cruise',
    priceFrom: 3899,
    pairNote: 'Couple price on request',
    highlights: [
      'Xueping ultimate health check',
      '10-day Chongqing–Three Gorges cruise tour',
      'Yangtze cruise scenery & city landmarks',
    ],
    image: '/assets/products/liangjiang-cruise.png',
    alt: 'Yangtze river cruise on the Three Gorges premium health tour',
    group: 'medical',
    badgeLabel: 'HEALTH CHECK + TRAVEL',
  },
];
