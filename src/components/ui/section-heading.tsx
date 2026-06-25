import React from 'react';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
  ...props
}: SectionHeadingProps) {
  const alignClass =
    align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';
  const descAlignClass = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`flex flex-col mb-8 md:mb-12 ${alignClass} ${className}`} {...props}>
      {badge && (
        <span className="font-heading text-xs md:text-sm font-semibold tracking-wider text-brand-cyan uppercase mb-2">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-2xl md:text-3.5xl font-bold text-text-primary tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`font-sans text-sm md:text-base text-text-secondary mt-3 leading-relaxed max-w-2xl ${descAlignClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
