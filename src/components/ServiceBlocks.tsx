'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FaUserMd, FaHospital, FaHandHoldingHeart, FaStethoscope } from 'react-icons/fa';
import styles from './ServiceBlocks.module.css';

const ServiceBlocks = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FaStethoscope className={styles.icon} />,
      title: 'Tıbbi Cihaz Satışı',
      description: 'Satış sonrası hizmetleri ile birlikte en kaliteli tıbbi cihazlar.',
      color: 'linear-gradient(135deg, #4CAF50, #45a049)'
    },
    {
      icon: <FaHospital className={styles.icon} />,
      title: 'Teknik Servis',
      description: 'Marka bağımsız teknik servis hizmeti, bakım ve onarım.',
      color: 'linear-gradient(135deg, #2196F3, #1976D2)'
    },
    {
      icon: <FaHandHoldingHeart className={styles.icon} />,
      title: 'Yedek Parça',
      description: 'Geniş ürün yelpazesi ile tüm yedek parça ihtiyaçlarınız.',
      color: 'linear-gradient(135deg, #E91E63, #C2185B)'
    }
  ];

  return (
    <section className={styles.serviceBlocks}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hizmetlerimiz</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ background: service.color }}
            >
              <div className={styles.cardContent}>
                <div className={styles.header}>
                  <div className={styles.iconWrapper}>
                    {service.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <p className={styles.cardDescription}>{service.description}</p>
                <div className={styles.buttonWrapper}>
                  <span className={styles.buttonText}>Detaylı Bilgi</span>
                  <svg 
                    className={styles.arrowIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBlocks; 