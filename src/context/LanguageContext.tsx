'use client';

import React, { createContext, useContext, useState } from 'react';
import tr from '@/translations/tr.json';
import en from '@/translations/en.json';
import ar from '@/translations/ar.json';

type Language = 'tr' | 'en' | 'ar';
type Translations = Record<string, string | Translations>; // İç içe çeviri desteği için

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Translations> = { tr, en, ar };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: Translations | string | undefined = translations[language];

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = value[k] as Translations | string;
      } else {
        return key; // Eğer çeviri bulunamazsa anahtar döndürülür
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
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
