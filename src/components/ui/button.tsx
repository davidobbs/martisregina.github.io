import React, { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  variant?: string;
  size?: string;
  children: ReactNode;
}

export const Button = ({ asChild, children, className = '', variant, size, ...props }: ButtonProps) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as any, { className, ...props } as any);
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}; 