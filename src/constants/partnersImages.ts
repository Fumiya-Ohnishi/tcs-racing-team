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
  | 'naturalWin'
  | 'repetir'
  | 'yowapeda'
  | 'revoFish'
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
  | 'inno';

export const partners: Record<PartnersKey, Partner> = {
  alpenBlick: {
    imagePath: '/images/top/ourPartners/img-sponsor-alpenBlick.webp',
    link: 'https://www.alpenBlick-resort.com/',
    partnersPageLogoImageWidth: '',
    commonLogoImageWidth: '272px',
  },
  blisStage: {
    imagePath: '/images/top/ourPartners/img-sponsor-blisStage.webp',
    link: 'https://www.blisstage.jp/',
    partnersPageLogoImageWidth: '112px',
    commonLogoImageWidth: '128px',
  },
  hokuei: {
    imagePath: '/images/top/ourPartners/img-sponsor-hokuei.webp',
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
  naturalWin: {
    imagePath: '/images/top/ourPartners/img-sponsor-naturalWin.webp',
    link: 'https://www.3plmnt.co.jp/',
    partnersPageLogoImageWidth: '72px',
    commonLogoImageWidth: '80px',
  },
  repetir: {
    imagePath: '/images/top/ourPartners/img-sponsor-repetir.webp',
    link: 'https://repetir.official.ec/',
    partnersPageLogoImageWidth: '96px',
    commonLogoImageWidth: '104px',
  },
  yowapeda: {
    imagePath: '/images/top/ourPartners/img-sponsor-yowapeda.webp',
    link: 'https://yowapeda.com/',
    partnersPageLogoImageWidth: '96px',
    commonLogoImageWidth: '96px',
  },
  revoFish: {
    imagePath: '/images/top/ourPartners/img-sponsor-revoFish.png',
    link: 'https://www.revofish.com/',
    partnersPageLogoImageWidth: '64px',
    commonLogoImageWidth: '80px',
  },
  kabuto: {
    imagePath: '/images/top/ourPartners/img-sponsor-kabuto.webp',
    link: 'https://www.ogkkabuto.co.jp/',
    partnersPageLogoImageWidth: '96px',
    commonLogoImageWidth: '112px',
  },
  hirooSangyo: {
    imagePath: '/images/top/ourPartners/img-sponsor-hirooSangyo.webp',
    link: 'https://www.hiroosangyo.jp/',
    partnersPageLogoImageWidth: '150px',
    commonLogoImageWidth: '168px',
  },
  houseWs: {
    imagePath: '/images/top/ourPartners/img-sponsor-watanabe.webp',
    link: 'https://house-ws.com/',
    partnersPageLogoImageWidth: '80px',
    commonLogoImageWidth: '80px',
  },
  beeSpeed: {
    imagePath: '/images/top/ourPartners/img-sponsor-beeSpeed.png',
    link: 'https://www.beespeed.jp/',
    partnersPageLogoImageWidth: '152px',
  },
  shibaken: {
    imagePath: '/images/top/ourPartners/img-sponsor-shibaken.webp',
    link: 'http://www.shibaken-inc.co.jp/',
    partnersPageLogoImageWidth: '152px',
  },
  honda: {
    imagePath: '/images/top/ourPartners/img-sponsor-honda.png',
    link: 'https://www.honda-indonesia.com/',
    partnersPageLogoImageWidth: '184px',
  },
  maxxis: {
    imagePath: '/images/top/ourPartners/img-sponsor-maxxis.jpg',
    link: 'https://www.maxxis.co.jp/',
    partnersPageLogoImageWidth: '108px',
  },
  fox: {
    imagePath: '/images/top/ourPartners/img-sponsor-fox.png',
    link: '',
    partnersPageLogoImageWidth: '76px',
  },
  raceface: {
    imagePath: '/images/top/ourPartners/img-sponsor-raceface.png',
    link: 'https://www.raceface.com/',
    partnersPageLogoImageWidth: '180px',
  },
  proApparel: {
    imagePath: '/images/top/ourPartners/img-sponsor-pro-apparel.webp',
    link: 'https://www.proapparel.asia/',
    partnersPageLogoImageWidth: '104px',
  },
  inno: {
    imagePath: '/images/top/ourPartners/img-sponsor-inno.webp',
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

// スポンサーのカテゴリごとの配列を作成
export const partnersImages: Record<PartnerCategory, Partner[]> = {
  black: [partners.alpenBlick],
  platinum: [partners.blisStage, partners.hokuei, partners.polygonBike],
  gold: [
    partners.naturalWin,
    partners.repetir,
    partners.yowapeda,
    partners.revoFish,
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
    partners.inno,
  ],
} as const;
