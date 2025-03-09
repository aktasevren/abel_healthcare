'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className={`bg-background py-8 ${theme === 'light' ? 'border-t' : 'border-t border-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              LOGO
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/urunler" className="text-gray-600 hover:text-primary">
              {t('products')}
            </Link>
            <Link href="/teknik-servis" className="text-gray-600 hover:text-primary">
              {t('technical_service')}
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-primary">
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 