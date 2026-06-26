import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';

interface PartnersPreviewProps {
  locale: string;
}

export async function PartnersPreview({ locale }: PartnersPreviewProps) {
  const t = await getTranslations({
    locale,
    namespace: 'Pages.home.partnersPreview',
  });

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-t border-slate-100">
      <Container>
        <SectionHeading
          badge={t('eyebrow')}
          title={t('title')}
          description={t('description')}
          align="center"
        />

        {/* All partner logo assets are unconfirmed/needs-confirmation combined sheets, so we exclude them from the visible grid */}
        <div className="mx-auto max-w-2xl mt-10 md:mt-12 mb-10 md:mb-12">
          <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-8 text-center shadow-sm">
            <svg
              className="mx-auto h-12 w-12 text-slate-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {t('loadingText')}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button
            variant="secondary"
            size="md"
            href="/partners"
          >
            {t('cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
