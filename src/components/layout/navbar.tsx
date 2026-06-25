'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  Link,
  usePathname
} from '@/i18n/navigation';
import type { AppPathname } from '@/i18n/routing';
import type { NavigationItem } from '@/types/content';

import { Button } from '../ui/button';
import { Container } from '../ui/container';
import { LanguageSwitcher } from './language-switcher';
import { MobileNavigation } from './mobile-navigation';

interface NavbarProps {
  items: NavigationItem[];
  ctaText: string;
}

export function Navbar({
  items,
  ctaText
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <Container variant="wide">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-1 sm:flex-initial">
            <Link
              href="/"
              aria-label="SIP BRO homepage"
              className="inline-flex items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <Image
                src="/media/branding/logo-primary.png"
                alt="SIP BRO"
                width={140}
                height={45}
                priority
                className="h-9 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigasi desktop */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-x-8 md:flex"
          >
            {items.map((item) => {
              const itemPath = item.path as AppPathname;

              const isActive =
                itemPath === '/'
                  ? pathname === '/'
                  : pathname === itemPath ||
                  pathname.startsWith(`${itemPath}/`);

              return (
                <Link
                  key={item.id}
                  href={itemPath}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-md py-2 font-sans text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${isActive
                      ? 'text-brand-blue'
                      : 'text-text-secondary hover:text-brand-blue'
                    }`}
                >
                  {item.label}

                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-brand-blue"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action desktop */}
          <div className="hidden items-center justify-end gap-6 md:flex">
            <LanguageSwitcher />

            <Button
              variant="primary"
              size="sm"
              href="/contact"
            >
              {ctaText}
            </Button>
          </div>

          {/* Action mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />

            <button
              type="button"
              aria-label="Open main menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors hover:bg-slate-100 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={items}
        ctaText={ctaText}
        activePath={pathname}
      />
    </header>
  );
}