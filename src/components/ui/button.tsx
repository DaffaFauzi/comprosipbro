import React from 'react';
import { Link } from '@/i18n/navigation';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill';
  href?: string;
  external?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  href,
  external,
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold font-sans transition-all duration-250 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const variants = {
    primary:
      'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-sm hover:shadow hover:-translate-y-0.5',
    secondary:
      'border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue/10 hover:-translate-y-0.5',
    accent:
      'bg-brand-accent text-slate-900 hover:bg-[#e09f1b] shadow-sm hover:shadow hover:-translate-y-0.5',
    dark:
      'bg-bg-dark text-white hover:bg-bg-dark-secondary shadow-sm hover:shadow hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const shapes = {
    rounded: 'rounded-lg',
    pill: 'rounded-full',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${shapes[shape]} ${className}`;

  if (href) {
    const isExternal =
      external ||
      href.startsWith('http') ||
      href.startsWith('tel:') ||
      href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...(props as unknown as Omit<
            React.AnchorHTMLAttributes<HTMLAnchorElement>,
            'href'
          >)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href as '/'}
        className={combinedStyles}
        {...(props as unknown as Omit<
          React.ComponentPropsWithoutRef<typeof Link>,
          'href'
        >)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
