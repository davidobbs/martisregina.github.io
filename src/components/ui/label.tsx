import React, { LabelHTMLAttributes } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children: React.ReactNode;
}

export const Label = ({ className = '', children, ...props }: LabelProps) => {
  return (
    <label className={`block font-medium mb-1 ${className}`} {...props}>
      {children}
    </label>
  );
}; 