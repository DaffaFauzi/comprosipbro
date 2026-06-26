import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { activeContentProvider } from '@/lib/content-provider';

interface ServiceProcessProps {
  locale: string;
}

export async function ServiceProcess({ locale }: ServiceProcessProps) {
  const t = await getTranslations({
    locale,
    namespace: 'Pages.home.serviceProcess',
  });

  const siteContent = await activeContentProvider.getSiteContent(locale);
  const { title, steps } = siteContent.serviceProcess;

  return (
    <section className="bg-bg-secondary py-16 md:py-20 lg:py-24 border-t border-slate-100">
      <Container>
        <SectionHeading
          badge={t('eyebrow')}
          title={title}
          align="center"
        />

        <div className="relative mt-12 md:mt-16 max-w-5xl mx-auto">
          {/* Vertical Connecting Line (Mobile only) */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 md:hidden z-0" />

          {/* Horizontal Connecting Line (Desktop only) */}
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 hidden md:block z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
            {steps.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center group z-10"
              >
                {/* Numbered Indicator */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-bold text-lg border-4 border-white shadow-md mb-0 md:mb-6 mr-4 md:mr-0 z-10 group-hover:scale-110 group-hover:bg-brand-blue-dark transition-all duration-300">
                  {step.step}
                </div>

                {/* Step Details */}
                <div className="flex-grow md:mt-2">
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-xs md:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
