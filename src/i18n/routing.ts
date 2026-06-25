import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

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

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
