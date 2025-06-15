import React, { HTMLAttributes, ReactNode } from 'react';

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

export const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      {children}
    </div>
  );
};

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const DialogContent = ({ className = '', children, ...props }: DialogContentProps) => {
  return (
    <div className={`bg-white rounded-lg p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export const DialogHeader = ({ children, ...props }: DialogContentProps) => {
  return <div {...props}>{children}</div>;
};

export const DialogTitle = ({ children, ...props }: DialogContentProps) => {
  return <h3 className="text-xl font-semibold" {...props}>{children}</h3>;
};

export const DialogFooter = ({ children, className = '', ...props }: DialogContentProps) => {
  return <div className={`mt-4 flex ${className}`} {...props}>{children}</div>;
};

export const DialogTrigger = ({ children, ...props }: { children: ReactNode } & React.HTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>;
};

export const DialogClose = ({ children, ...props }: { children: ReactNode } & React.HTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>;
}; 