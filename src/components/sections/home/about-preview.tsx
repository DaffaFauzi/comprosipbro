import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { activeContentProvider } from '@/lib/content-provider';

interface AboutPreviewProps {
  locale: string;
}

export async function AboutPreview({ locale }: AboutPreviewProps) {
  const t = await getTranslations({
    locale,
    namespace: 'Pages.home.aboutPreview',
  });

  const siteContent = await activeContentProvider.getSiteContent(locale);
  const companyDescription = siteContent.about.description;

  return (
    <section className="bg-bg-secondary py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Visual Asset */}
          <div className="w-full lg:col-span-5 order-last lg:order-first">
            <div className="relative mx-auto w-full max-w-[540px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl lg:max-w-none">
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/media/about/about-shaking-hands.jpg"
                  alt="SIP BRO - Partner Insurance and Guarantee"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-w: 1024px) 100vw, (max-w: 1200px) 40vw, 480px"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="flex flex-col items-start lg:col-span-7">
            <span className="mb-3 inline-flex items-center text-xs font-semibold uppercase tracking-wider text-brand-cyan sm:text-sm">
              {t('eyebrow')}
            </span>

            <h2 className="font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3.5xl leading-[1.2] sm:leading-[1.2] lg:leading-[1.2]">
              {t('title')}
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base sm:leading-relaxed max-w-2xl font-sans">
              {companyDescription}
            </p>

            <div className="mt-8 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href="/about"
                className="w-full sm:w-auto"
              >
                {t('cta')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
