'use client';

import React, { createContext, useContext, useState } from 'react';
import tr from '@/translations/tr.json';
import en from '@/translations/en.json';
import ar from '@/translations/ar.json';

type Language = 'tr' | 'en' | 'ar';
type TranslationKey = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const translations: Record<Language, Record<string, any>> = { tr, en, ar };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let value: Record<string, any> | string | undefined = translations[language];

    for (const k of keys) {
      if (typeof value !== 'object' || value === null) return key;
      value = value[k];
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
