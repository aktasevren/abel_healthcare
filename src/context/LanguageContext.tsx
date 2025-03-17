'use client';

import React, { createContext, useContext, useState } from 'react';
import tr from '../../messages/tr.json';
import en from '../../messages/en.json';
import ar from '../../messages/ar.json';

type Language = 'tr' | 'en' | 'ar';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const translations = {
  tr,
  en,
  ar,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('tr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: Record<string, string | Record<string, string>> | string = translations[language];

    for (const k of keys) {
      if (typeof value === 'string') return value;
      if (typeof value === 'object' && value !== null && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;

export type { Language };
