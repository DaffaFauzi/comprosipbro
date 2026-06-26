import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

interface ConsultationCtaProps {
  locale: string;
}

export async function ConsultationCta({ locale }: ConsultationCtaProps) {
  const t = await getTranslations({
    locale,
    namespace: 'Pages.home.consultationCta',
  });

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-12 shadow-xl sm:px-12 md:py-16 lg:px-20">
          {/* Subtle design accents (pure CSS decorative shapes) */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3.5xl leading-tight">
              {t('title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm md:text-base leading-relaxed text-slate-300">
              {t('description')}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                variant="accent"
                size="md"
                href="/contact"
                className="w-full sm:w-auto"
              >
                {t('primaryCta')}
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="/services"
                className="w-full sm:w-auto border-white text-white hover:bg-white/10"
              >
                {t('secondaryCta')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
