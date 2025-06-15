import React, { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div className={`rounded-lg ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}; 