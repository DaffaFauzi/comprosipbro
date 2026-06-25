'use client';

import { useLocale } from 'next-intl';

import {
  usePathname,
  useRouter
} from '@/i18n/navigation';
import type {
  AppLocale,
  AppPathname
} from '@/i18n/routing';

const localeOptions: Array<{
  value: AppLocale;
  label: string;
  longLabel: string;
}> = [
    {
      value: 'id',
      label: 'ID',
      longLabel: 'Bahasa Indonesia'
    },
    {
      value: 'en',
      label: 'EN',
      longLabel: 'English'
    }
  ];

export function LanguageSwitcher() {
  const currentLocale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: AppLocale) {
    if (nextLocale === currentLocale) {
      return;
    }

    router.replace(pathname as AppPathname, {
      locale: nextLocale
    });
  }

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm"
    >
      {localeOptions.map((option) => {
        const isActive = option.value === currentLocale;

        return (
          <button
            key={option.value}
            type="button"
            title={option.longLabel}
            aria-label={`Switch to ${option.longLabel}`}
            aria-pressed={isActive}
            onClick={() => switchLocale(option.value)}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${isActive
                ? 'bg-brand-blue text-white'
                : 'text-text-secondary hover:bg-slate-100 hover:text-brand-blue'
              }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}