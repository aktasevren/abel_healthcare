'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FaStethoscope, FaTools, FaCogs } from 'react-icons/fa';
import styles from './ServiceBlocks.module.css';

const blocks = [
  {
    id: 1,
    titleKey: 'services.medical_devices.title',
    descriptionKey: 'services.medical_devices.description',
    href: '/urunler',
    icon: <FaStethoscope className={styles.icon} />,
    gradient: 'from-blue-500 to-blue-600',
    hoverGradient: 'from-blue-600 to-blue-700',
  },
  {
    id: 2,
    titleKey: 'services.technical_service.title',
    descriptionKey: 'services.technical_service.description',
    href: '/teknik-servis',
    icon: <FaTools className={styles.icon} />,
    gradient: 'from-red-500 to-red-600',
    hoverGradient: 'from-red-600 to-red-700',
  },
  {
    id: 3,
    titleKey: 'services.spare_parts.title',
    descriptionKey: 'services.spare_parts.description',
    href: '/urunler',
    icon: <FaCogs className={styles.icon} />,
    gradient: 'from-green-500 to-green-600',
    hoverGradient: 'from-green-600 to-green-700',
  },
];

const ServiceBlocks = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.serviceBlocks}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('services.title')}</h2>
        <div className={styles.grid}>
          {blocks.map((block) => (
            <Link
              key={block.id}
              href={block.href}
              className={`${styles.card} bg-gradient-to-br ${block.gradient} hover:${block.hoverGradient}`}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  {block.icon}
                </div>
                <h3 className={styles.cardTitle}>
                  {t(block.titleKey)}
                </h3>
                <p className={styles.cardDescription}>
                  {t(block.descriptionKey)}
                </p>
                <div className={styles.buttonWrapper}>
                  <span className={styles.buttonText}>{t('services.learn_more')}</span>
                  <svg
                    className={styles.arrowIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceBlocks; 