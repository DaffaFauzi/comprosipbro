'use client';

import React, { useEffect, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import { NavigationItem } from '@/types/content';
import { LanguageSwitcher } from './language-switcher';
import { Button } from '../ui/button';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  ctaText: string;
  activePath: string;
}

export function MobileNavigation({
  isOpen,
  onClose,
  items,
  ctaText,
  activePath,
}: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Esc key event handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end md:hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Navigation Panel */}
      <div
        ref={panelRef}
        className="relative flex w-full max-w-[300px] flex-col bg-white p-6 shadow-xl h-full animate-slide-in overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-heading text-lg font-bold text-brand-blue">Menu</span>
          <button
            type="button"
            className="-m-2 rounded-md p-2 text-text-secondary hover:text-brand-blue hover:bg-slate-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
            onClick={onClose}
            aria-label="Close menu"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Localized navigation links */}
        <nav className="flex flex-col gap-2.5">
          {items.map((item) => {
            const isActive =
              activePath === item.path ||
              (item.path !== '/' && activePath.startsWith(item.path));
            return (
              <Link
                key={item.id}
                href={item.path as '/'}
                onClick={onClose}
                className={`font-sans text-base font-semibold py-2.5 px-3.5 rounded-lg transition-colors ${
                  isActive
                    ? 'text-brand-blue bg-brand-blue/5'
                    : 'text-text-secondary hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer info & CTA */}
        <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-5">
          <div className="flex items-center justify-between px-1">
            <span className="font-sans text-xs font-semibold text-text-muted">
              Language
            </span>
            <LanguageSwitcher />
          </div>

          <Button
            variant="primary"
            size="md"
            href="/contact"
            onClick={onClose}
            className="w-full text-center"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}
