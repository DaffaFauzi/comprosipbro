import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  localePrefix: 'always',
  localeDetection: false,

  pathnames: {
    '/': '/',

    '/about': {
      id: '/tentang-kami',
      en: '/about'
    },

    '/services': {
      id: '/layanan',
      en: '/services'
    },

    '/partners': {
      id: '/mitra',
      en: '/partners'
    },

    '/contact': {
      id: '/kontak',
      en: '/contact'
    }
  }
});

export type AppLocale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;