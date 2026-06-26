import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { HeroSection } from '@/components/sections/home/hero-section';
import { TrustHighlights } from '@/components/sections/home/trust-highlights';
import { routing } from '@/i18n/routing';

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({
  params
}: HomePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrustHighlights />
    </>
  );
}