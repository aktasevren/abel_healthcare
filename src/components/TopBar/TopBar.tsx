'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

const TopBar = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-2 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            {/* Online Katalog */}
            <Link 
              href="https://pdfupload.io/docs/835ba6ab" 
              className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
              style={{ color: 'var(--topbar-text)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span>{t('topbar.onlineCatalog')}</span>
            </Link>

            {/* Telefon */}
            <a 
              href="tel:+905335228791" 
              className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
              style={{ color: 'var(--topbar-text)' }}
              title={t('topbar.phone')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>212 430 0888</span>
            </a>

            {/* E-posta */}
            <a 
              href="mailto:info@abelmedikal.com" 
              className="flex items-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
              style={{ color: 'var(--topbar-text)' }}
              title={t('topbar.email')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>info@abelmedikal.com</span>
            </a>
          </div>

          {/* Tema ve Dil Seçimi */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 