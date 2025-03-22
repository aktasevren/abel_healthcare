'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Logo from './Logo';

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
    { href: '/', labelKey: 'nav.home' },
    {
      href: '#',
      labelKey: 'KURUMSAL',
      subItems: [
        { href: '/hakkimizda', labelKey: 'HAKKIMIZDA' },
        { href: '/certificates', labelKey: 'SERTİFİKALARIMIZ' }
      ]
    },
    { href: '/urunlerimiz', labelKey: 'nav.products' },
    { href: '/teknik-servis', labelKey: 'nav.technical_service' },
    { href: '/iletisim', labelKey: 'nav.contact' },
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
    const baseClasses = 'text-sm font-semibold transition-colors duration-200 uppercase';
    const mobileClasses = isMobile ? 'px-4 py-2 rounded-md' : 'px-1 py-2 relative';
    
    if (isActive) {
      return `${baseClasses} ${mobileClasses} text-blue-600 font-bold`;
    }
    
    return `${baseClasses} ${mobileClasses} text-foreground hover:text-blue-600`;
  };

  return (
    <nav className="bg-card border-b border-border transition-colors duration-200">
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
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary focus:outline-none transition-colors duration-200"
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
                    <span className={`${getLinkClassName(pathname === item.href)} flex items-center`}>
                      {t(item.labelKey)}
                      <svg
                        className="inline-block ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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
                    </span>
                    <div 
                      className={`absolute left-0 w-48 rounded-md shadow-lg bg-background border border-border z-50 transition-all duration-200 ${
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
                            className={`block px-4 py-2 text-sm text-foreground hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 ${
                              pathname === subItem.href ? 'bg-blue-50 text-blue-600 font-bold' : ''
                            }`}
                          >
                            {subItem.labelKey}
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
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-colors duration-200"></span>
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
                        className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                          activeDropdown === item.href ? 'rotate-180' : ''
                        }`}
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
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-border pl-4">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`${getLinkClassName(pathname === subItem.href, true)} ${
                              pathname === subItem.href ? 'bg-blue-50 text-blue-600 font-bold' : ''
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.labelKey}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`${getLinkClassName(pathname === item.href, true)} ${
                      pathname === item.href ? 'bg-blue-50 text-blue-600 font-bold' : ''
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