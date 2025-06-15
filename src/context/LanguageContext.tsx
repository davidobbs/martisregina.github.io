'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'PT' | 'EN';

interface LanguageContextProps {
  currentLanguage: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  currentLanguage: 'PT',
  toggleLanguage: () => {}
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('PT');

  // Load saved language from localStorage, if available
  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language | null;
    if (stored) {
      setCurrentLanguage(stored);
    }
  }, []);

  // Update document language attribute and persist selection
  useEffect(() => {
    document.documentElement.lang = currentLanguage === 'PT' ? 'pt-BR' : 'en';
    localStorage.setItem('lang', currentLanguage);
  }, [currentLanguage]);

  const toggleLanguage = () => {
    setCurrentLanguage(prev => (prev === 'PT' ? 'EN' : 'PT'));
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 