import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { activeContentProvider } from '@/lib/content-provider';

interface WhyChooseUsProps {
  locale: string;
}

const ICONS_MAP: Record<string, React.ReactNode> = {
  professional: (
    <svg
      className="w-8 h-8 text-brand-blue"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  responsive: (
    <svg
      className="w-8 h-8 text-brand-blue"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  ),
  transparent: (
    <svg
      className="w-8 h-8 text-brand-blue"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  ),
  trusted: (
    <svg
      className="w-8 h-8 text-brand-blue"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  )
};

export async function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const t = await getTranslations({
    locale,
    namespace: 'Pages.home.whyChooseUs',
  });

  const siteContent = await activeContentProvider.getSiteContent(locale);
  const { title, values } = siteContent.whyChooseUs;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-t border-slate-100">
      <Container>
        <SectionHeading
          badge={t('eyebrow')}
          title={title}
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-12">
          {values.map((item) => (
            <Card
              key={item.id}
              variant="value"
              title={item.title}
              description={item.description}
              icon={ICONS_MAP[item.iconName]}
              className="h-full flex flex-col justify-start transition-all duration-300 hover:shadow-md"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
