'use client';

import React from 'react';
import Image from 'next/image';
import { 
  FaStethoscope, 
  FaHospital, 
  FaHandHoldingHeart 
} from 'react-icons/fa';
import styles from './ServiceBlocks.module.css';

const ServiceBlocks = () => {
  const services = [
    {
      title: 'Tıbbi Cihaz Satışı',
      description: 'Kaliteli tıbbi cihazlar ve satış sonrası hizmetler',
      image: '/media/medical-devices.jpg',
      link: '/services/medical-devices',
      icon: <FaStethoscope className={styles.serviceIcon} />
    },
    {
      title: 'Teknik Servis',
      description: 'Bağımsız teknik servis ve bakım hizmetleri',
      image: '/media/technical-service.jpg',
      link: '/services/technical-service',
      icon: <FaHospital className={styles.serviceIcon} />
    },
    {
      title: 'Yedek Parça',
      description: 'Geniş yedek parça yelpazesi',
      image: '/media/spare-parts.jpg',
      link: '/services/spare-parts',
      icon: <FaHandHoldingHeart className={styles.serviceIcon} />
    }
  ];

  return (
    <section className={styles.serviceBlocks}>
      <div className={styles.container}>
        <h2 className={styles.title}>Hizmetlerimiz</h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.link}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBlocks; 