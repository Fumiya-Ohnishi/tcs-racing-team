export type Partner = {
  imagePath: string;
  link: string;
  partnersPageLogoImageWidth: string;
  commonLogoImageWidth?: string;
};

export type PartnersKey =
  | 'alpenBlick'
  | 'blisStage'
  | 'hokuei'
  | 'polygonBike'
  | 'threePlmnt'
  | 'repetir'
  | 'yowapeda'
  | 'revofish'
  | 'kabuto'
  | 'hirooSangyo'
  | 'houseWs'
  | 'beeSpeed'
  | 'shibaken'
  | 'honda'
  | 'maxxis'
  | 'fox'
  | 'raceface'
  | 'proApparel'
  | 'innoracks';

export const partners: Record<PartnersKey, Partner> = {
  alpenBlick: {
    imagePath: '/images/top/ourPartners/img-sponsor-01.webp',
    link: 'https://www.alpenblick-resort.com/',
    partnersPageLogoImageWidth: '',
    commonLogoImageWidth: '272px',
  },
  blisStage: {
    imagePath: '/images/top/ourPartners/img-sponsor-04.webp',
    link: 'https://www.blisstage.jp/',
    partnersPageLogoImageWidth: '112px',
    commonLogoImageWidth: '128px',
  },
  hokuei: {
    imagePath: '/images/top/ourPartners/img-sponsor-05.webp',
    link: 'https://www.hokuei-gr.com/',
    partnersPageLogoImageWidth: '64px',
    commonLogoImageWidth: '80px',
  },
  polygonBike: {
    imagePath: '/images/top/ourPartners/img-sponsor-polygonbike.png',
    link: 'https://www.polygonbikes.com/',
    partnersPageLogoImageWidth: '80px',
    commonLogoImageWidth: '96px',
  },
  threePlmnt: {
    imagePath: '/images/top/ourPartners/img-sponsor-02.webp',
    link: 'https://www.3plmnt.co.jp/',
    partnersPageLogoImageWidth: '72px',
    commonLogoImageWidth: '80px',
  },
  repetir: {
    imagePath: '/images/top/ourPartners/img-sponsor-07.webp',
    link: 'https://repetir.official.ec/',
    partnersPageLogoImageWidth: '96px',
    commonLogoImageWidth: '104px',
  },
  yowapeda: {
    imagePath: '/images/top/ourPartners/img-sponsor-09.webp',
    link: 'https://yowapeda.com/',
    partnersPageLogoImageWidth: '95px',
    commonLogoImageWidth: '96px',
  },
  revofish: {
    imagePath: '/images/top/ourPartners/img-sponsor-revofish.png',
    link: 'https://www.revofish.com/',
    partnersPageLogoImageWidth: '64px',
    commonLogoImageWidth: '80px',
  },
  kabuto: {
    imagePath: '/images/top/ourPartners/img-sponsor-10.webp',
    link: 'https://www.ogkkabuto.co.jp/',
    partnersPageLogoImageWidth: '96px',
    commonLogoImageWidth: '112px',
  },
  hirooSangyo: {
    imagePath: '/images/top/ourPartners/img-sponsor-13.webp',
    link: 'https://www.hiroosangyo.jp/',
    partnersPageLogoImageWidth: '150px',
    commonLogoImageWidth: '168px',
  },
  houseWs: {
    imagePath: '/images/top/ourPartners/img-sponsor-03.webp',
    link: 'https://house-ws.com/',
    partnersPageLogoImageWidth: '80px',
    commonLogoImageWidth: '80px',
  },
  beeSpeed: {
    imagePath: '/images/top/ourPartners/img-sponsor-beespeed.png',
    link: 'https://www.beespeed.jp/',
    partnersPageLogoImageWidth: '152px',
  },
  shibaken: {
    imagePath: '/images/top/ourPartners/img-sponsor-12.webp',
    link: 'http://www.shibaken-inc.co.jp/',
    partnersPageLogoImageWidth: '152px',
  },
  honda: {
    imagePath: '/images/top/ourPartners/img-sponsor-honda.png',
    link: 'https://www.honda-indonesia.com/',
    partnersPageLogoImageWidth: '144px',
  },
  maxxis: {
    imagePath: '/images/top/ourPartners/img-sponsor-11.jpg',
    link: 'https://www.maxxis.co.jp/',
    partnersPageLogoImageWidth: '112px',
  },
  fox: {
    imagePath: '/images/top/ourPartners/img-sponsor-fox.png',
    link: '',
    partnersPageLogoImageWidth: '80px',
  },
  raceface: {
    imagePath: '/images/top/ourPartners/img-sponsor-raceface.png',
    link: 'https://www.raceface.com/',
    partnersPageLogoImageWidth: '144px',
  },
  proApparel: {
    imagePath: '/images/top/ourPartners/img-sponsor-pro-apparel.webp',
    link: 'https://www.proapparel.asia/',
    partnersPageLogoImageWidth: '104px',
  },
  innoracks: {
    imagePath: '/images/top/ourPartners/img-sponsor-08.webp',
    link: 'https://www.innoracks.com/',
    partnersPageLogoImageWidth: '112px',
  },
} as const;

export type PartnerCategory =
  | 'black'
  | 'platinum'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'supporters'
  | 'suppliers';

// **3️⃣ スポンサーのカテゴリごとの配列を作成**
export const partnersImages: Record<PartnerCategory, Partner[]> = {
  black: [partners.alpenBlick],
  platinum: [partners.blisStage, partners.hokuei, partners.polygonBike],
  gold: [
    partners.threePlmnt,
    partners.repetir,
    partners.yowapeda,
    partners.revofish,
  ],
  silver: [partners.kabuto],
  bronze: [partners.hirooSangyo, partners.houseWs],
  supporters: [partners.beeSpeed, partners.shibaken],
  suppliers: [
    partners.honda,
    partners.maxxis,
    partners.fox,
    partners.raceface,
    partners.proApparel,
    partners.innoracks,
  ],
};
