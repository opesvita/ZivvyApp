import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'desktop' | 'tablet' | 'mobile';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ 
  children, 
  size = 'desktop',
  className 
}) => {
  const containerStyles = {
    desktop: 'max-w-[1440px] px-[var(--grid-margin-desktop)]',
    tablet: 'max-w-[1280px] px-[var(--grid-margin-tablet)]',
    mobile: 'max-w-[375px] px-[var(--grid-margin-mobile)]'
  };

  return (
    <div 
      className={cn(
        'mx-auto w-full',
        containerStyles[size],
        className
      )}
      style={{
        paddingLeft: `var(--grid-margin-${size})`,
        paddingRight: `var(--grid-margin-${size})`
      }}
    >
      {children}
    </div>
  );
};