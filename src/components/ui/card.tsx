import React from 'react';
import Image from 'next/image';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'service' | 'value' | 'simple';
  title: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
}

export function Card({
  variant = 'simple',
  title,
  description,
  imageUrl,
  imageAlt = '',
  icon,
  className = '',
  children,
  ...props
}: CardProps) {
  if (variant === 'service') {
    return (
      <div
        className={`group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-md transition-all duration-250 ease-out hover:-translate-y-1 hover:shadow-lg ${className}`}
        {...props}
      >
        {imageUrl && (
          <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              fill
              sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-text-primary mb-2 line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="font-sans text-sm text-text-secondary line-clamp-3 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }

  if (variant === 'value') {
    return (
      <div
        className={`rounded-xl bg-bg-secondary border-l-4 border-brand-blue p-6 shadow-sm ${className}`}
        {...props}
      >
        {icon && <div className="text-brand-blue mb-4">{icon}</div>}
        <h4 className="font-heading text-lg font-bold text-text-primary mb-2">
          {title}
        </h4>
        {description && (
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border border-slate-100 bg-white p-6 shadow-sm ${className}`}
      {...props}
    >
      <h4 className="font-heading text-lg font-bold text-text-primary mb-2">
        {title}
      </h4>
      {description && (
        <p className="font-sans text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
