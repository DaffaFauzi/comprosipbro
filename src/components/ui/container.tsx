import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'wide' | 'ultrawide';
  children: React.ReactNode;
}

export function Container({
  variant = 'standard',
  children,
  className = '',
  ...props
}: ContainerProps) {
  const baseClass = 'mx-auto px-6 w-full';

  const widths = {
    standard: 'max-w-[1200px]',
    wide: 'max-w-[1440px]',
    ultrawide: 'max-w-[1680px]',
  };

  return (
    <div className={`${baseClass} ${widths[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
