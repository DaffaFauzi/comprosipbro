import { SiteContent, MediaAsset } from '@/types/content';
import mediaLibrary from '@/content/media-library.json';

const getAsset = (id: string): MediaAsset | null => {
  const asset = mediaLibrary.find((a) => a.id === id);
  return asset ? (asset as MediaAsset) : null;
};

export const siteContentID: SiteContent = {
  locale: 'id',
  navigation: {
    header: [
      { id: 'nav-home', label: 'Beranda', path: '/' },
      { id: 'nav-about', label: 'Tentang Kami', path: '/about' },
      { id: 'nav-services', label: 'Layanan Kami', path: '/services' },
      { id: 'nav-partners', label: 'Mitra', path: '/projects' },
      { id: 'nav-contact', label: 'Kontak', path: '/contact' }
    ],
    footer: [
      { id: 'nav-home', label: 'Beranda', path: '/' },
      { id: 'nav-about', label: 'Tentang Kami', path: '/about' },
      { id: 'nav-services', label: 'Layanan Kami', path: '/services' },
      { id: 'nav-partners', label: 'Mitra', path: '/projects' },
      { id: 'nav-contact', label: 'Kontak', path: '/contact' }
    ]
  },
  hero: {
    heading: 'Insurance and Guarantee Consultant',
    subHeading: 'SIP BRO',
    description:
      'Dengan menjunjung tinggi profesionalisme dan integritas, mengedepankan inovasi teknologi, serta berkomitmen pada kepuasan pelanggan, kami hadir sebagai mitra terpercaya dalam memberikan solusi layanan yang efisien, responsif, dan berorientasi pada nilai bisnis Anda.',
    ctaText: 'Learn more',
    ctaLink: '#start',
    backgroundImage: getAsset('img-hero-businessman-scaled')
  },
  about: {
    title: 'Tentang Kami',
    description:
      'Dengan menjunjung tinggi profesionalisme dan integritas, mengedepankan inovasi teknologi, serta berkomitmen pada kepuasan pelanggan, kami hadir sebagai mitra terpercaya dalam memberikan solusi layanan yang efisien, responsif, dan berorientasi pada nilai bisnis Anda.',
    vision:
      'Menjadi perusahaan agen asuransi terdepan dan bernilai serta berkontribusi meningkatkan keamanan bisnis bagi setiap rekan dan mitra.',
    missionTitle: 'Visi dan Misi Perusahaan',
    missionPoints: [
      {
        title: 'Terpercaya',
        description:
          'Memberikan solusi asuransi sesuai kebutuhan tertanggung dan para mitra, membangun pengalaman terbaik para mitra dalam memberikan solusi perlindungan dan memberikan layanan terbaik.'
      },
      {
        title: 'Konsisten',
        description:
          'Meningkatkan serta memiliki sumber daya manusia yang profesional, berintegritas, penuh loyalitas dan inovatif.'
      },
      {
        title: 'Komitmen',
        description:
          'Memberikan layanan asuransi profesional untuk memenuhi kepuasan para mitra, tertanggung dan pemangku kepentingan.'
      },
      {
        title: 'Fokus',
        description: 'Menyediakan keahlian dan manajemen risiko bagi para klien.'
      }
    ],
    image: getAsset('img-about-shaking-hands-scaled'),
    valuesTitle: 'Tata Nilai Perusahaan',
    values: [
      {
        id: 'val-professionalism',
        title: 'Profesionalisme & Integritas',
        description:
          'Kami menjunjung tinggi nilai integritas dan profesionalisme dalam setiap aspek layanan kami. Pelanggan dapat percaya bahwa bisnis mereka akan ditangani dengan penuh dedikasi & kejujuran.'
      },
      {
        id: 'val-technology',
        title: 'Teknologi & Inovasi',
        description:
          'Kami terus mengadopsi inovasi dan teknologi terkini dalam memberikan layanan. Ini memastikan bahwa kami selalu dapat memberikan solusi yang efisien dan responsif terhadap perkembangan bisnis dan kebutuhan pelanggan.'
      },
      {
        id: 'val-commitment',
        title: 'Komitmen pada Kepuasan Pelanggan',
        description:
          'Kami tidak hanya berkomitmen untuk memberikan layanan terbaik, tetapi juga untuk memastikan kepuasan pelanggan. Umpan balik dari pelanggan adalah landasan utama dalam terus meningkatkan kualitas layanan kami.'
      }
    ]
  },
  services: {
    title: 'Layanan Kami',
    description: 'Kami menawarkan solusi asuransi komprehensif untuk melindungi aset dan bisnis Anda.',
    categories: [
      {
        id: 'cat-group',
        title: 'Produk Asuransi Kumpulan',
        description: 'Perlindungan komprehensif bagi kelompok dan korporasi.',
        image: getAsset('img-service-insurance-scaled'),
        items: [
          { id: 'srv-group-life-credit', name: 'Asuransi Jiwa Kredit' },
          { id: 'srv-group-credit', name: 'Asuransi Kredit' },
          { id: 'srv-group-death', name: 'Asuransi Meninggal Alami/Sakit' },
          { id: 'srv-group-accident', name: 'Asuransi Kecelakaan Diri' },
          { id: 'srv-group-health', name: 'Asuransi Kesehatan' },
          { id: 'srv-group-micro', name: 'Asuransi Mikro' }
        ]
      },
      {
        id: 'cat-general',
        title: 'Asuransi Umum',
        description: 'Perlindungan aset, tanggung jawab hukum, dan kerugian finansial lainnya.',
        image: getAsset('img-service-property-scaled'),
        items: [
          { id: 'srv-general-fire', name: 'Asuransi Kebakaran' },
          { id: 'srv-general-vehicle', name: 'Asuransi Kendaraan' },
          { id: 'srv-general-car-ear', name: 'CAR/EAR (Contractor\'s All Risks / Erection All Risks)' },
          { id: 'srv-general-property-liability', name: 'Property dan Liability' },
          { id: 'srv-general-marine-hull', name: 'Marine Hull' }
        ]
      },
      {
        id: 'cat-bancassurance',
        title: 'Bancassurance',
        description:
          'Bancassurance adalah kerja sama strategis antara perusahaan asuransi dan bank dalam menyediakan produk asuransi kepada nasabah bank. Melalui model ini, nasabah dapat dengan mudah mengakses layanan asuransi seperti jiwa, kesehatan, dan perlindungan aset langsung melalui jaringan perbankan. Bancassurance menawarkan kemudahan, efisiensi, dan solusi finansial terpadu dalam satu layanan.',
        image: getAsset('img-service-finance-scaled'),
        items: []
      }
    ]
  },
  partners: {
    title: 'Mitra Asuransi',
    categories: {
      life: {
        id: 'part-life',
        title: 'Asuransi Jiwa',
        partners: [],
        fallbackCombinedLogo: getAsset('img-partner-kejiwaan-original')
      },
      general: {
        id: 'part-general',
        title: 'Asuransi Umum',
        partners: [],
        fallbackCombinedLogo: getAsset('img-partner-umum-original')
      }
    }
  },
  contact: {
    address: 'Office Tower Fontana Jalan Trembesi Blok D, Kompleks Bandar Baru Kemayoran Jakarta Utara 14410, Indonesia 388',
    addressUnitNotes: '388 (Needs confirmation for floor or suite unit detail)',
    email: 'info@sipbro.id',
    phone: '0812-3456-7890 (Placeholder / Needs confirmation)',
    phoneRaw: 'tel:081234567890',
    mapImage: getAsset('map-tile-1')
  },
  footerCTA: {
    heading: 'Jangan Tunda Keamanan Bisnis Anda!',
    description: 'Segera konsultasikan kebutuhan asuransi dan penjaminan Anda bersama SIP BRO. Tim kami siap memberikan solusi yang cepat, tepat, dan menyeluruh.',
    ctaText: 'Konsultasi Sekarang'
  },
  copyright: '© 2026 Sip Bro. All rights reserved.'
};

export const siteContentEN: SiteContent = {
  locale: 'en',
  navigation: {
    header: [
      { id: 'nav-home', label: 'Home', path: '/' },
      { id: 'nav-about', label: 'About Us', path: '/about' },
      { id: 'nav-services', label: 'Our Services', path: '/services' },
      { id: 'nav-partners', label: 'Partners', path: '/projects' },
      { id: 'nav-contact', label: 'Contact', path: '/contact' }
    ],
    footer: [
      { id: 'nav-home', label: 'Home', path: '/' },
      { id: 'nav-about', label: 'About Us', path: '/about' },
      { id: 'nav-services', label: 'Our Services', path: '/services' },
      { id: 'nav-partners', label: 'Partners', path: '/projects' },
      { id: 'nav-contact', label: 'Contact', path: '/contact' }
    ]
  },
  hero: {
    heading: 'Insurance and Guarantee Consultant',
    subHeading: 'SIP BRO',
    description:
      'With high professionalism and integrity, leveraging technological innovation, and committing to customer satisfaction, we are here as a trusted partner in providing efficient, responsive, and business value-oriented service solutions.',
    ctaText: 'Learn more',
    ctaLink: '#start',
    backgroundImage: getAsset('img-hero-businessman-scaled')
  },
  about: {
    title: 'About Us',
    description:
      'With high professionalism and integrity, leveraging technological innovation, and committing to customer satisfaction, we are here as a trusted partner in providing efficient, responsive, and business value-oriented service solutions.',
    vision:
      'To be the leading and valuable insurance agency company and contribute to improving business safety for every partner and associate.',
    missionTitle: 'Company Vision and Mission',
    missionPoints: [
      {
        title: 'Trusted',
        description:
          'Providing insurance solutions according to the needs of the insured and partners, building the best experience for partners in providing protection solutions and giving the best services.'
      },
      {
        title: 'Consistent',
        description:
          'Improving and having professional, high integrity, loyal, and innovative human resources.'
      },
      {
        title: 'Commitment',
        description:
          'Providing professional insurance services to meet the satisfaction of partners, insured parties, and stakeholders.'
      },
      {
        title: 'Focus',
        description: 'Providing risk management and expertise for clients.'
      }
    ],
    image: getAsset('img-about-shaking-hands-scaled'),
    valuesTitle: 'Company Values',
    values: [
      {
        id: 'val-professionalism',
        title: 'Professionalism & Integrity',
        description:
          'We uphold integrity and professionalism in every aspect of our service. Customers can trust that their business will be handled with dedication & honesty.'
      },
      {
        id: 'val-technology',
        title: 'Technology & Innovation',
        description:
          'We continue to adopt the latest innovation and technology in providing services. This ensures that we can always provide efficient and responsive solutions to business developments and customer needs.'
      },
      {
        id: 'val-commitment',
        title: 'Commitment to Customer Satisfaction',
        description:
          'We are not only committed to providing the best service, but also to ensuring customer satisfaction. Feedback from customers is the main foundation in continuing to improve our service quality.'
      }
    ]
  },
  services: {
    title: 'Our Services',
    description: 'We offer comprehensive insurance solutions to protect your assets and business.',
    categories: [
      {
        id: 'cat-group',
        title: 'Group Insurance Products',
        description: 'Comprehensive protection for groups and corporations.',
        image: getAsset('img-service-insurance-scaled'),
        items: [
          { id: 'srv-group-life-credit', name: 'Credit Life Insurance' },
          { id: 'srv-group-credit', name: 'Credit Insurance' },
          { id: 'srv-group-death', name: 'Natural/Sickness Death Insurance' },
          { id: 'srv-group-accident', name: 'Personal Accident Insurance' },
          { id: 'srv-group-health', name: 'Health Insurance' },
          { id: 'srv-group-micro', name: 'Micro Insurance' }
        ]
      },
      {
        id: 'cat-general',
        title: 'General Insurance',
        description: 'Asset protection, liability, and other financial loss protection.',
        image: getAsset('img-service-property-scaled'),
        items: [
          { id: 'srv-general-fire', name: 'Fire Insurance' },
          { id: 'srv-general-vehicle', name: 'Motor Vehicle Insurance' },
          { id: 'srv-general-car-ear', name: 'CAR/EAR (Contractor\'s All Risks / Erection All Risks)' },
          { id: 'srv-general-property-liability', name: 'Property & Liability' },
          { id: 'srv-general-marine-hull', name: 'Marine Hull' }
        ]
      },
      {
        id: 'cat-bancassurance',
        title: 'Bancassurance',
        description:
          'Bancassurance is a strategic partnership between insurance companies and banks in providing insurance products to bank customers. Through this model, customers can easily access insurance services such as life, health, and asset protection directly through the banking network. Bancassurance offers convenience, efficiency, and integrated financial solutions in one service.',
        image: getAsset('img-service-finance-scaled'),
        items: []
      }
    ]
  },
  partners: {
    title: 'Insurance Partners',
    categories: {
      life: {
        id: 'part-life',
        title: 'Life Insurance',
        partners: [],
        fallbackCombinedLogo: getAsset('img-partner-kejiwaan-original')
      },
      general: {
        id: 'part-general',
        title: 'General Insurance',
        partners: [],
        fallbackCombinedLogo: getAsset('img-partner-umum-original')
      }
    }
  },
  contact: {
    address: 'Office Tower Fontana Jalan Trembesi Blok D, Kompleks Bandar Baru Kemayoran Jakarta Utara 14410, Indonesia 388',
    addressUnitNotes: '388 (Needs confirmation for floor or suite unit detail)',
    email: 'info@sipbro.id',
    phone: '0812-3456-7890 (Placeholder / Needs confirmation)',
    phoneRaw: 'tel:081234567890',
    mapImage: getAsset('map-tile-1')
  },
  footerCTA: {
    heading: 'Don\'t Delay Your Business Security!',
    description: 'Immediately consult your insurance and guarantee needs with SIP BRO. Our team is ready to provide fast, precise, and comprehensive solutions.',
    ctaText: 'Consult Now'
  },
  copyright: '© 2026 Sip Bro. All rights reserved.'
};
