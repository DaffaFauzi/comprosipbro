import React from 'react';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import type { SiteContent } from '@/types/content';

import { Container } from '../ui/container';

interface FooterProps {
  content: SiteContent;
}

export function Footer({ content }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { locale, navigation, contact } = content;

  // Localized labels for column headers
  const labels = {
    id: {
      company: 'Perusahaan',
      services: 'Layanan Kami',
      contact: 'Hubungi Kami',
      rights: 'Hak Cipta Dilindungi.',
    },
    en: {
      company: 'Company',
      services: 'Our Services',
      contact: 'Contact Us',
      rights: 'All rights reserved.',
    },
  }[locale as 'id' | 'en'] || {
    company: 'Company',
    services: 'Our Services',
    contact: 'Contact Us',
    rights: 'All rights reserved.',
  };

  return (
    <footer className="bg-bg-dark text-slate-400 font-sans border-t border-slate-800">
      <div className="py-16 md:py-20">
        <Container variant="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
            {/* Column 1: Brand Info */}
            <div className="md:col-span-4 flex flex-col items-start">
              <Link
                href="/"
                className="inline-flex items-center mb-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue rounded-lg"
              >
                <Image
                  src="/media/branding/logo-white-lg.png"
                  alt="SIP BRO Logo"
                  width={140}
                  height={45}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-sm">
                {content.about.description}
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-2">
              <h3 className="font-heading text-xs font-bold tracking-wider text-white uppercase mb-4">
                {labels.company}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {navigation.footer.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path as '/'}
                      className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Confirmed Services Categories */}
            <div className="md:col-span-3">
              <h3 className="font-heading text-xs font-bold tracking-wider text-white uppercase mb-4">
                {labels.services}
              </h3>
              <ul className="flex flex-col gap-3 text-sm">
                {content.services.categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      href="/services"
                      className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue rounded"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Confirmed Contact Info */}
            <div className="md:col-span-3">
              <h3 className="font-heading text-xs font-bold tracking-wider text-white uppercase mb-4">
                {labels.contact}
              </h3>
              <ul className="flex flex-col gap-4 text-sm text-slate-400">
                {/* Address */}
                <li className="flex gap-3 items-start">
                  <svg
                    className="h-5 w-5 shrink-0 text-brand-accent mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>{contact.address}</span>
                </li>

                {/* Email */}
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex gap-3 items-center hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue rounded"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-brand-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span className="truncate">{contact.email}</span>
                  </a>
                </li>

                {/* Phone */}
                <li>
                  <a
                    href={contact.phoneRaw}
                    className="flex gap-3 items-center hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue rounded"
                  >
                    <svg
                      className="h-5 w-5 shrink-0 text-brand-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.117-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    {/* Render clean contact phone digits only */}
                    <span>{contact.phone.split(' ')[0]}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Sub Footer Area */}
      <div className="py-6 border-t border-slate-800/80 bg-[#080d19]">
        <Container variant="wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              &copy; {currentYear} SIP BRO. {labels.rights}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>&middot;</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
