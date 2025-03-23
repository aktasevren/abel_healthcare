'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage, Language } from '@/contexts/LanguageContext';

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
        className="flex items-center space-x-1 dark:text-black-800 px-2 py-1 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
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
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white dark:bg-white rounded-md shadow-lg overflow-hidden z-10 border border-gray-100">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code as Language)}
                className={`w-full flex items-center space-x-2 px-4 py-2 text-sm text-left text-gray-800 hover:bg-gray-50 ${
                  language === lang.code ? 'bg-gray-50' : ''
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