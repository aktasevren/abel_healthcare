'use client';

import React, { createContext, useContext, useState } from 'react';
import tr from '../../messages/tr.json';
import en from '../../messages/en.json';
import ar from '../../messages/ar.json';

type Language = 'tr' | 'en' | 'ar';

/**
 * JSON çeviri dosyalarının yapısına uygun tip belirleme.
 * Çeviri dosyaları hem string değerler hem de iç içe nesneler içerebilir.
 */
type TranslationObject = { [key: string]: string | TranslationObject };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr,
  en,
  ar,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

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
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;

export type { Language };
