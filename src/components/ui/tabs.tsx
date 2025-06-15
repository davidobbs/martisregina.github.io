import React, { createContext, useContext, useState, ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';

interface TabsContextType {
  value: string;
  onChange: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  className?: string;
  children: ReactNode;
}

export const Tabs = ({ defaultValue, className = '', children, ...props }: TabsProps) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <div className={className} {...props}>{children}</div>
    </TabsContext.Provider>
  );
};

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const TabsList = ({ className = '', children, ...props }: TabsListProps) => {
  return <div className={className} {...props}>{children}</div>;
};

export interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  className?: string;
  children: ReactNode;
}

export const TabsTrigger = ({ value, className = '', children, ...props }: TabsTriggerProps) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within Tabs');
  const selected = context.value === value;
  return (
    <button
      className={`${className} ${selected ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
      onClick={() => context.onChange(value)}
      {...props}
    >
      {children}
    </button>
  );
};

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
  className?: string;
  children: ReactNode;
}

export const TabsContent = ({ value, className = '', children, ...props }: TabsContentProps) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within Tabs');
  return context.value === value ? <div className={className} {...props}>{children}</div> : null;
}; 