import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function HeroSection() {
  const t = useTranslations('Pages.home.hero');

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      {/* Decorative subtle background blobs */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl sm:h-96 sm:w-96" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-brand-cyan/5 blur-3xl sm:h-96 sm:w-96" 
      />

      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Text and CTA buttons */}
          <div className="flex flex-col items-start lg:col-span-7">
            <span className="mb-3 inline-flex items-center rounded-full bg-brand-blue/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-blue sm:text-sm">
              {t('eyebrow')}
            </span>
            
            <h1 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl leading-[1.2] sm:leading-[1.2] lg:leading-[1.2]">
              {t('title')}
            </h1>
            
            <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed max-w-2xl font-sans">
              {t('description')}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                href="/services"
                className="w-full sm:w-auto"
              >
                {t('primaryCta')}
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="/contact"
                className="w-full sm:w-auto"
              >
                {t('secondaryCta')}
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive, ratio-preserved visual asset */}
          <div className="w-full lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-xl transition-all duration-300 hover:shadow-2xl lg:max-w-none">
              <div className="aspect-[3/2] relative w-full">
                <Image
                  src="/media/hero/hero-businessman.jpg"
                  alt="SIP BRO Corporate Insurance and Guarantee Services"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 40vw, 450px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
