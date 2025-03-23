'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Logo from '@/components/Logo';

interface MenuItem {
  href: string;
  labelKey: string;
  subItems?: MenuItem[];
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const menuItems: MenuItem[] = [
    { href: '/', labelKey: 'home' },
    {
      href: '#',
      labelKey: 'corporate',
      subItems: [
        { href: '/hakkimizda', labelKey: 'about' },
        { href: '/sertifikalarimiz', labelKey: 'certificates' }
      ]
    },
    { href: '/urunlerimiz', labelKey: 'products' },
    { href: '/teknik-servis', labelKey: 'technical_service' },
    { href: '/iletisim', labelKey: 'contact' }
  ];

  const handleMouseEnter = (href: string) => {
    if (menuItems.find(item => item.href === href)?.subItems) {
      setActiveDropdown(href);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const getLinkClassName = (isActive: boolean, isMobile: boolean = false) => {
    const baseClasses = 'text-sm font-semibold transition-colors uppercase';
    const mobileClasses = isMobile ? 'px-4 py-2 rounded-md' : 'px-1 py-2 relative';
    
    if (isActive) {
      return `${baseClasses} ${mobileClasses} text-red-600`;
    }
    
    return `${baseClasses} ${mobileClasses} text-red-600 dark:text-red-600 hover:text-red-700 dark:hover:text-red-700`;
  };

  return (
    <nav className="bg-background shadow-sm mb-6 md:mb-8 lg:mb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex-shrink-0 py-2 md:py-3">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

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

          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.href)}
                onMouseLeave={handleMouseLeave}
              >
                {item.subItems ? (
                  <div className="cursor-pointer relative group">
                    <Link
                      href={item.href}
                      className={`${getLinkClassName(pathname === item.href)} flex items-center`}
                    >
                      {t(item.labelKey)}
                      <svg
                        className="inline-block ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
                    <div 
                      className={`absolute left-0 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 z-50 transition-opacity duration-150 ${
                        activeDropdown === item.href ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-1'
                      }`}
                      style={{ top: 'calc(100% - 5px)' }}
                      onMouseEnter={() => setActiveDropdown(item.href)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-red-600 dark:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            {t(subItem.labelKey)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={getLinkClassName(pathname === item.href)}
                  >
                    {t(item.labelKey)}
                    {pathname === item.href && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'
          } pb-4 mt-2`}
        >
          <div className="flex flex-col space-y-2 mx-2">
            {menuItems.map((item) => (
              <div key={item.href}>
                {item.subItems ? (
                  <div>
                    <div
                      className={`${getLinkClassName(false, true)} cursor-pointer flex items-center justify-between`}
                      onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
                    >
                      {t(item.labelKey)}
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {activeDropdown === item.href && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`${getLinkClassName(pathname === subItem.href, true)} ${
                              pathname === subItem.href
                                ? theme === 'light' ? 'bg-red-50' : 'bg-red-900/20'
                                : ''
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {t(subItem.labelKey)}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`${getLinkClassName(pathname === item.href, true)} ${
                      pathname === item.href
                        ? theme === 'light' ? 'bg-red-50' : 'bg-red-900/20'
                        : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.labelKey)}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 