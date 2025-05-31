'use client';

import React from 'react';
import { 
  FaStethoscope, 
  FaHospital, 
  FaHandHoldingHeart 
} from 'react-icons/fa';
import styles from './ServiceBlocks.module.css';

const ServiceBlocks = () => {
  const services = [
    {
      icon: <FaStethoscope className={styles.icon} />,
      title: 'Tıbbi Cihaz Satışı',
      description: 'Satış sonrası hizmet desteğiyle birlikte, en son teknolojiye sahip, alanında öncü markaların cihazlarını sunuyoruz.',
      color: 'linear-gradient(135deg, #cbd5e0, #a0aec0)'
    },
    {
      icon: <FaHospital className={styles.icon} />,
      title: 'Teknik Servis',
      description: 'Her marka cihaza yönelik teknik servis, bakım ve onarım hizmetlerini, uzman ekibimiz ve yüksek hizmet standartlarımızla sağlıyoruz.',
      color: 'linear-gradient(135deg, #cbd5e0, #a0aec0)'
    },
    {
      icon: <FaHandHoldingHeart className={styles.icon} />,
      title: 'Yedek Parça',
      description: 'Farklı marka ve modellere uyumlu geniş yedek parça stoğumuz sayesinde, tüm ihtiyaçlarınıza eksiksiz ve zamanında yanıt veriyoruz.',
      color: 'linear-gradient(135deg, #cbd5e0, #a0aec0)'
    }
  ];

  return (
    <section className={styles.serviceBlocks}>
      <div className={styles.container}>
        <h1 className={styles.title}>Biyomedikal Hizmetlerimiz</h1>
        <p className={styles.subtitle}>Biyomedikal cihazlarınız için profesyonel bakım, onarım ve satış hizmetleri. Sertifikalı uzman ekibimizle, tüm tıbbi cihazlarınıza kapsamlı teknik destek sağlıyoruz. Yerinde servis, periyodik bakım ve kalibrasyon hizmetlerimizle cihazlarınızın optimum performansta çalışmasını garanti ediyoruz.</p>
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