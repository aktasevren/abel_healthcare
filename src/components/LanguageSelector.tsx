'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/context/LanguageContext';

const languages = [
  {
    code: 'tr',
    name: 'Türkçe',
    flag: '/flags/tr.svg',
  },
  {
    code: 'en',
    name: 'English',
    flag: '/flags/en.svg',
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: '/flags/ar.svg',
  },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md hover:bg-muted transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        aria-label="Dil seçimi"
      >
        <div className="w-5 h-5 relative overflow-hidden rounded-sm">
          {currentLanguage && (
            <div className="w-5 h-5 relative">
              {currentLanguage.flag ? (
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage.name}
                  width={20}
                  height={20}
                  className="object-cover"
                />
              ) : (
                <span className="text-xs font-bold">{currentLanguage.code.toUpperCase()}</span>
              )}
            </div>
          )}
        </div>
        <span className="text-sm font-medium">{language.toUpperCase()}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-card border border-border rounded-md shadow-lg overflow-hidden z-10">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code as Language)}
                className={`w-full flex items-center space-x-2 px-4 py-2 text-sm text-left text-card-foreground hover:bg-secondary transition-colors duration-200 ${
                  language === lang.code ? 'bg-secondary' : ''
                }`}
              >
                <div className="w-5 h-5 relative overflow-hidden rounded-sm">
                  {lang.flag ? (
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-xs font-bold">{lang.code.toUpperCase()}</span>
                  )}
                </div>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 