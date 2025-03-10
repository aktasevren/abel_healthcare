'use client';

import React, { createContext, useContext, useState } from 'react';
import tr from '@/translations/tr.json';
import en from '@/translations/en.json';
import ar from '@/translations/ar.json';

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

// Çeviri nesnesi için tip belirleme
const translations: Record<Language, TranslationObject> = { tr, en, ar };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: TranslationObject | string | undefined = translations[language];

    for (const k of keys) {
      if (typeof value === 'string') return value; // Eğer string'e ulaşıldıysa döndür
      if (typeof value === 'object' && value !== null && k in value) {
        value = value[k] as TranslationObject | string; // İç içe nesneye eriş
      } else {
        return key; // Eğer anahtar yoksa key'in kendisini döndür
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
