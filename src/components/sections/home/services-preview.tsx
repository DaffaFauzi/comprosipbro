import { getTranslations } from 'next-intl/server';

import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import { activeContentProvider } from '@/lib/content-provider';

interface ServicesPreviewProps {
  locale: string;
}

export async function ServicesPreview({ locale }: ServicesPreviewProps) {
  const t = await getTranslations({
    locale,
    namespace: 'Pages.home.servicesPreview',
  });

  const servicesContent = await activeContentProvider.getServices(locale);
  const categories = servicesContent.categories;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24 border-t border-slate-100">
      <Container>
        <SectionHeading
          badge={t('eyebrow')}
          title={t('title')}
          description={t('description')}
          align="center"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-10 md:mt-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              href="/services"
              className="group block h-full focus:outline-none"
            >
              <Card
                variant="service"
                title={category.title}
                description={category.description}
                imageUrl={category.image?.currentPublicPath || undefined}
                imageAlt={category.title}
                className="h-full flex flex-col justify-between"
              >
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-sm font-semibold text-brand-blue group-hover:text-brand-blue-dark">
                  <span>{t('readMore')}</span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-250 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button
            variant="secondary"
            size="md"
            href="/services"
          >
            {t('cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
