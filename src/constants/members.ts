export type Member = {
  id: MemberId;
  nameJa: string;
  nameEn: string;
  memberType: string;
  gradationImagesPath: string;
  topTheTeamSectionBackgroundImagePath?: string;
  topTheTeamSectionImagePath?: string;
  ourTeamPageTheRiderSectionImagePath?: string;
  memberPageAboutSectionImagesPath?: string;
  memberPageFirstViewMemberImagePath?: string;
  memberPageFirstViewBackgroundImagePc?: string;
  memberPageFirstViewBackgroundImageSp?: string;
  isTopTheStaff?: boolean;
  isOurTeamTheStaffMain?: boolean;
  isOurTeamTheStaffSub?: boolean;
};

export const MemberId = {
  KoheiYamamoto: 'kohei-yamamoto',
  YusukeFukumitsu: 'yusuke-fukumitsu',
  RiyadhHakim: 'riyadh-hakim',
  SayuBella: 'sayu-bella',
  YutaMatsumoto: 'yuta-matsumoto',
  EusebiaNicole: 'eusebia-nicole',
  YoshiharuShiozawa: 'yoshiharu-shiozawa',
  DeddyKurniawan: 'deddy-kurniawan',
  FiliYudiono: 'fili-yudiono',
  RinaZaki: 'rina-zaki',
  AyakaHiyoshi: 'ayaka-hiyoshi',
} as const;

export type MemberId = (typeof MemberId)[keyof typeof MemberId];

export const parseMemberId = (id: string): MemberId | undefined => {
  switch (id) {
    case MemberId.KoheiYamamoto:
      return MemberId.KoheiYamamoto;
    case MemberId.YusukeFukumitsu:
      return MemberId.YusukeFukumitsu;
    case MemberId.RiyadhHakim:
      return MemberId.RiyadhHakim;
    case MemberId.SayuBella:
      return MemberId.SayuBella;
    case MemberId.YutaMatsumoto:
      return MemberId.YutaMatsumoto;
    case MemberId.EusebiaNicole:
      return MemberId.EusebiaNicole;
    case MemberId.YoshiharuShiozawa:
      return MemberId.YoshiharuShiozawa;
    case MemberId.DeddyKurniawan:
      return MemberId.DeddyKurniawan;
    case MemberId.FiliYudiono:
      return MemberId.FiliYudiono;
    case MemberId.RinaZaki:
      return MemberId.RinaZaki;
    case MemberId.AyakaHiyoshi:
      return MemberId.AyakaHiyoshi;
    default:
      return undefined;
  }
};

export const MemberKey = {
  KoheiYamamoto: 'KoheiYamamoto',
  YusukeFukumitsu: 'YusukeFukumitsu',
  RiyadhHakim: 'RiyadhHakim',
  SayuBella: 'SayuBella',
  YutaMatsumoto: 'YutaMatsumoto',
  EusebiaNicole: 'EusebiaNicole',
  YoshiharuShiozawa: 'YoshiharuShiozawa',
  DeddyKurniawan: 'DeddyKurniawan',
  FiliYudiono: 'FiliYudiono',
  RinaZaki: 'RinaZaki',
  AyakaHiyoshi: 'AyakaHiyoshi',
} as const;

export type MemberKey = (typeof MemberKey)[keyof typeof MemberKey];

export const members: Record<MemberKey, Member> = {
  [MemberKey.KoheiYamamoto]: {
    id: MemberId.KoheiYamamoto,
    nameJa: '山本 幸平',
    nameEn: 'Kohei Yamamoto',
    memberType: 'ライダー',
    gradationImagesPath:
      '/images/member/img-member-kohei-yamamoto-gradation.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-kohei-yamamoto-top-theTeam.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-kohei-yamamoto.png',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-kohei-yamamoto.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-kohei-yamamoto-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-kohei-yamamoto-sp.webp',
    isOurTeamTheStaffMain: true,
  },
  [MemberKey.YusukeFukumitsu]: {
    id: MemberId.YusukeFukumitsu,
    nameJa: '福光 悠介',
    nameEn: 'Yusuke Fukumitsu',
    memberType: 'GM',
    gradationImagesPath:
      '/images/member/img-member-yusuke-fukumitsu-gradation.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-yusuke-fukumitsu.jpeg',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-yusuke-fukumitsu.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-yusuke-fukumitsu-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-yusuke-fukumitsu-sp.webp',
    isTopTheStaff: true,
    isOurTeamTheStaffMain: true,
  },
  [MemberKey.RiyadhHakim]: {
    id: MemberId.RiyadhHakim,
    nameJa: 'リアッド ハキム',
    nameEn: 'Riyadh Hakim',
    memberType: 'ライダー',
    gradationImagesPath:
      '/images/member/img-member-riyadh-hakim-gradation.webp',
    topTheTeamSectionBackgroundImagePath:
      '/images/top/img-top-singapore-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-riyadh-hakim-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-riyadh-hakim-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-riyadh-hakim.png',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-riyadh-hakim.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-riyadh-hakim-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-riyadh-hakim-sp.webp',
  },
  [MemberKey.SayuBella]: {
    id: MemberId.SayuBella,
    nameJa: 'サユ ベラ',
    nameEn: 'Sayu Bella',
    memberType: 'ライダー',
    gradationImagesPath: '/images/member/img-member-sayu-bella-gradation.webp',
    topTheTeamSectionBackgroundImagePath:
      '/images/top/img-top-indonesia-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-sayu-bella-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-sayu-bella-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-sayu-bella.jpeg',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-sayu-bella.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-sayu-bella-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-sayu-bella-sp.webp',
  },
  [MemberKey.YutaMatsumoto]: {
    id: MemberId.YutaMatsumoto,
    nameJa: '松本 佑太',
    nameEn: 'Yuta Matsumoto',
    memberType: 'ライダー',
    gradationImagesPath:
      '/images/member/img-member-yuta-matsumoto-gradation.webp',
    topTheTeamSectionBackgroundImagePath: '/images/top/img-top-japan-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-yuta-matsumoto-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-yuta-matsumoto-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-yuta-matsumoto.jpeg',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-yuta-matsumoto.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-yuta-matsumoto-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-yuta-matsumoto-sp.webp',
  },
  [MemberKey.EusebiaNicole]: {
    id: MemberId.EusebiaNicole,
    nameJa: 'エセビア ニコル',
    nameEn: 'Eusebia Nicole',
    memberType: 'ライダー',
    gradationImagesPath:
      '/images/member/img-member-eusebia-nicole-gradation.webp',
    topTheTeamSectionBackgroundImagePath:
      '/images/top/img-top-philippines-flag.webp',
    topTheTeamSectionImagePath:
      '/images/member/img-member-eusebia-nicole-rider.webp',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-eusebia-nicole-rider.webp',
    memberPageAboutSectionImagesPath:
      '/images/memberPage/img-memberPage-bg-eusebia-nicole.jpeg',
    memberPageFirstViewMemberImagePath:
      '/images/memberPage/img-memberPage-eusebia-nicole.webp',
    memberPageFirstViewBackgroundImagePc:
      '/images/memberPage/img-memberPage-top-eusebia-nicole-pc.webp',
    memberPageFirstViewBackgroundImageSp:
      '/images/memberPage/img-memberPage-top-eusebia-nicole-sp.webp',
  },
  [MemberKey.YoshiharuShiozawa]: {
    id: MemberId.YoshiharuShiozawa,
    nameJa: '汐澤 芳治',
    memberType: '広報',
    nameEn: 'Yoshiharu Shiozawa',
    gradationImagesPath:
      '/images/member/img-member-yoshiharu-shiozawa-gradation.webp',
    isTopTheStaff: true,
    isOurTeamTheStaffSub: true,
  },
  [MemberKey.DeddyKurniawan]: {
    id: MemberId.DeddyKurniawan,
    nameJa: 'デディー クルニアワン',
    nameEn: 'Deddy Kurniawan',
    memberType: 'スタッフ',
    gradationImagesPath:
      '/images/member/img-member-deddy-Kurniawan-gradation.png',
    isTopTheStaff: true,
    isOurTeamTheStaffSub: true,
  },
  [MemberKey.FiliYudiono]: {
    id: MemberId.FiliYudiono,
    nameJa: 'フェリ ユドヨノ',
    nameEn: 'Fili Yudiono',
    memberType: 'ライダー',
    gradationImagesPath: '',
    topTheTeamSectionBackgroundImagePath: '',
    topTheTeamSectionImagePath:
      '/images/member/img-member-fili-yudiono-rider.png',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-fili-yudiono-rider.png',
    memberPageAboutSectionImagesPath: undefined,
    memberPageFirstViewMemberImagePath: '',
    memberPageFirstViewBackgroundImagePc: '',
    memberPageFirstViewBackgroundImageSp: '',
  },
  [MemberKey.RinaZaki]: {
    id: MemberId.RinaZaki,
    nameJa: 'リナ ザキ',
    nameEn: 'Rina Zaki',
    memberType: 'ライダー',
    gradationImagesPath: '',
    topTheTeamSectionBackgroundImagePath: '',
    topTheTeamSectionImagePath: '/images/member/img-member-rina-zaki-rider.png',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-rina-zaki-rider.png',
    memberPageAboutSectionImagesPath: undefined,
    memberPageFirstViewMemberImagePath: '',
    memberPageFirstViewBackgroundImagePc: '',
    memberPageFirstViewBackgroundImageSp: '',
  },
  [MemberKey.AyakaHiyoshi]: {
    id: MemberId.AyakaHiyoshi,
    nameJa: '日吉 彩華',
    nameEn: 'Ayaka Hiyoshi',
    memberType: 'ライダー',
    gradationImagesPath: '',
    topTheTeamSectionBackgroundImagePath: '',
    topTheTeamSectionImagePath:
      '/images/member/img-member-ayaka-hiyoshi-rider.png',
    ourTeamPageTheRiderSectionImagePath:
      '/images/member/img-member-ayaka-hiyoshi-rider.png',
    memberPageAboutSectionImagesPath: undefined,
    memberPageFirstViewMemberImagePath: '',
    memberPageFirstViewBackgroundImagePc: '',
    memberPageFirstViewBackgroundImageSp: '',
  },
} as const;

// TopページのTheStaffで使用する配列を取得
export const getTopTheStaffList = (): Member[] => {
  return Object.values(members).filter(member => member.isTopTheStaff);
};

// OurTeamページのTheRiders使用する配列を取得
export const getOurTeamPageTheRiderSectionList = (): Member[] => {
  return Object.values(members).filter(
    member => member.ourTeamPageTheRiderSectionImagePath !== undefined,
  );
};

// 個人ページの `Other Members` セクションで使用する配列を取得
export const getOtherMembersList = (): Member[] => {
  return Object.values(members).filter(
    member => member.memberPageAboutSectionImagesPath !== undefined,
  );
};

// OurTeamページのTheStaffのメインスタッフを取得
export const getOurTeamTheStaffMainList = (): Member[] => {
  return Object.values(members).filter(member => member.isOurTeamTheStaffMain);
};

// OurTeamページのTheStaffのサブスタッフを取得
export const getOurTeamTheStaffSubList = (): Member[] => {
  return Object.values(members).filter(member => member.isOurTeamTheStaffSub);
};

// 指定された ID に対応するメンバーを取得する
export const getMemberById = (id: string): Member => {
  const member = Object.values(members).find(member => member.id === id);

  if (!member) {
    throw new Error(`Member with ID "${id}" not found.`);
  }

  return member;
};

// 指定された MemberKey に対応するメンバーを取得する
export const getMemberByMemberKey = (key: MemberKey): Member => {
  const member = members[key];

  if (!member) {
    throw new Error(`Member with key "${key}" not found.`);
  }

  return member;
};
