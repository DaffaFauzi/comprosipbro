import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Container } from '@/components/ui/container';
import { routing } from '@/i18n/routing';

type AboutPageProps = {
    params: Promise<{
        locale: string;
    }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const t = await getTranslations({
        locale,
        namespace: 'Pages.about'
    });

    return (
        <section className="py-20 sm:py-24">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-blue">
                        {t('eyebrow')}
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                        {t('title')}
                    </h1>

                    <p className="mt-6 text-base leading-8 text-text-secondary sm:text-lg">
                        {t('description')}
                    </p>
                </div>
            </Container>
        </section>
    );
}