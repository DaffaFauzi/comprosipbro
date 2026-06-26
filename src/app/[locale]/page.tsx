import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { HeroSection } from '@/components/sections/home/hero-section';
import { TrustHighlights } from '@/components/sections/home/trust-highlights';
import { AboutPreview } from '@/components/sections/home/about-preview';
import { ServicesPreview } from '@/components/sections/home/services-preview';
import { WhyChooseUs } from '@/components/sections/home/why-choose-us';
import { ServiceProcess } from '@/components/sections/home/service-process';
import { PartnersPreview } from '@/components/sections/home/partners-preview';
import { ConsultationCta } from '@/components/sections/home/consultation-cta';
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
      <AboutPreview locale={locale} />
      <ServicesPreview locale={locale} />
      <WhyChooseUs locale={locale} />
      <ServiceProcess locale={locale} />
      <PartnersPreview locale={locale} />
      <ConsultationCta locale={locale} />
    </>
  );
}