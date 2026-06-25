export interface MediaAsset {
  id: string;
  originalFilename: string;
  currentPublicPath: string;
  category:
    | 'branding'
    | 'hero'
    | 'about'
    | 'services'
    | 'partners'
    | 'icons'
    | 'documents'
    | 'videos'
    | 'fonts'
    | 'decorative'
    | 'unclassified';
  fileType: string;
  suggestedPurpose: string;
  sourcePage: string | null;
  status:
    | 'selected'
    | 'available'
    | 'duplicate'
    | 'low-quality'
    | 'technical'
    | 'needs-confirmation';
  notes: string;
  sizeBytes: number;
  sha256: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

export interface HeroContent {
  heading: string;
  subHeading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: MediaAsset | null;
}

export interface ServiceItem {
  id: string;
  name: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description?: string;
  items: ServiceItem[];
  image: MediaAsset | null;
}

export interface ServiceContent {
  title: string;
  description?: string;
  categories: ServiceCategory[];
}

export interface PartnerItem {
  id: string;
  name: string;
  logo: MediaAsset | null;
}

export interface PartnerCategory {
  id: string;
  title: string;
  partners: PartnerItem[];
  fallbackCombinedLogo: MediaAsset | null;
}

export interface PartnerContent {
  title: string;
  categories: {
    life: PartnerCategory;
    general: PartnerCategory;
  };
}

export interface ContactContent {
  address: string;
  addressUnitNotes?: string;
  email: string;
  phone: string;
  phoneRaw: string;
  mapImage: MediaAsset | null;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface AboutContent {
  title: string;
  description: string;
  vision: string;
  missionTitle: string;
  missionPoints: {
    title: string;
    description: string;
  }[];
  image: MediaAsset | null;
  valuesTitle: string;
  values: CompanyValue[];
}

export interface SiteContent {
  locale: string;
  navigation: {
    header: NavigationItem[];
    footer: NavigationItem[];
  };
  hero: HeroContent;
  about: AboutContent;
  services: ServiceContent;
  partners: PartnerContent;
  contact: ContactContent;
  footerCTA: {
    heading: string;
    description: string;
    ctaText: string;
  };
  copyright: string;
}
