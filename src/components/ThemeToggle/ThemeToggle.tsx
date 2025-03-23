'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const ThemeToggle = () => {
  // Başlangıçta 'system' olarak ayarlayalım, böylece ilk render'da hydration uyumsuzluğu olmaz
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const { t } = useLanguage();

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan tema bilgisini al
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      // HTML elementine tema sınıfını ekle
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Sistem tercihine göre tema belirle
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' || theme === 'system' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // HTML elementine tema sınıfını ekle/çıkar
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Tema tercihini localStorage'a kaydet
    localStorage.setItem('theme', newTheme);
  };

  // Eğer tema henüz belirlenmemişse (client-side'da çalışmadan önce), bir yükleme göstergesi gösterebiliriz
  // veya varsayılan bir tema simgesi gösterebiliriz
  const isDarkTheme = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white dark:bg-gray-100 text-gray-800 dark:text-black-800 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors shadow-sm"
      aria-label={isDarkTheme ? t('lightMode') : t('darkMode')}
      title={isDarkTheme ? t('lightMode') : t('darkMode')}
    >
      {!isDarkTheme ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle; 