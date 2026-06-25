import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import '../globals.css';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { routing } from '@/i18n/routing';
import { activeContentProvider } from '@/lib/content-provider';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap'
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'SIP BRO | Insurance and Guarantee Consultant',
  description:
    'Dengan menjunjung tinggi profesionalisme dan integritas, SIP BRO hadir sebagai mitra terpercaya asuransi dan penjaminan Anda.'
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale
  }));
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Mengikat locale dari URL ke request next-intl.
  setRequestLocale(locale);

  const [content, messages] = await Promise.all([
    activeContentProvider.getSiteContent(locale),
    getMessages()
  ]);

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg-canvas text-text-primary">
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <Navbar
            items={content.navigation.header}
            ctaText={content.footerCTA.ctaText}
          />

          <main className="flex flex-grow flex-col">
            {children}
          </main>

          <Footer content={content} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}