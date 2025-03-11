'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Logo from './Logo';

type MenuItem = {
  href: string;
  labelKey: string;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const menuItems: MenuItem[] = [
    { href: '/', labelKey: 'nav.home' },
    { href: '/products', labelKey: 'nav.products' },
    { href: '/teknik-servis', labelKey: 'nav.technical_service' },
    { href: '/kurumsal', labelKey: 'nav.corporate' },
    { href: '/iletisim', labelKey: 'nav.contact' },
  ];

  const getLinkClassName = (isActive: boolean, isMobile: boolean = false) => {
    const baseClasses = 'text-sm font-semibold transition-colors uppercase';
    const mobileClasses = isMobile ? 'px-4 py-2 rounded-md' : 'px-1 py-2 relative';
    
    if (isActive) {
      return `${baseClasses} ${mobileClasses} text-blue-600`;
    }
    
    return `${baseClasses} ${mobileClasses} text-black-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500`;
  };

  return (
    <nav className="bg-background shadow-sm mb-6 md:mb-8 lg:mb-10" >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 py-2 md:py-3">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Mobil Menü Butonu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-gray-200 hover:text-white hover:bg-gray-700'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">{t('nav.menu')}</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menü */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={getLinkClassName(pathname === item.href)}
              >
                {t(item.labelKey)}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobil Menü */}
        <div
          className={`md:hidden transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'
          } pb-4 mt-2`}
        >
          <div className="flex flex-col space-y-2 mx-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${getLinkClassName(pathname === item.href, true)} ${
                  pathname === item.href
                    ? theme === 'light' ? 'bg-gray-50' : 'bg-gray-700'
                    : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 