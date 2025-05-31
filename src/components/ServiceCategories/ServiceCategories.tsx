'use client';

import React, { useState } from 'react';
import { 
  FaStethoscope, 
  FaTools, 
  FaWrench, 
  FaCheckCircle, 
  FaClock, 
  FaUserTie,
  FaHospital,
  FaMicroscope,
  FaHeartbeat,
  FaBed,
  FaProcedures,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import styles from './ServiceCategories.module.css';

const ServiceCategories = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    {
      icon: <FaProcedures className={styles.icon} />,
      title: 'Ameliyathane',
      description: 'Ameliyathane ekipmanları için profesyonel teknik servis hizmetleri',
      items: [
        'Anestezi Cihazları',
        'Ameliyat Masaları',
        'Ameliyat Masası Kumandaları',
        'Elektrokoter/Ligasure/Radyo Frekans Cihazları',
        'Aspiratörler',
        'Endovizyon Sistemleri',
        'Medikal Monitörler',
        'Prosesörler',
        'Kameralar',
        'Soğuk Işık Kaynakları',
        'İnsüflatörler',
        'Aspirasyon-İrrigasyon Cihazları',
        'Ameliyat Kafa Lambaları',
        'Isıtıcı/Soğutucular',
        'Turnike Cihazları'
      ]
    },
    {
      icon: <FaHeartbeat className={styles.icon} />,
      title: 'Erişkin Yoğun Bakım',
      description: 'Erişkin yoğun bakım ünitesi cihazları için teknik servis',
      items: [
        'Yetişkin Ventilatörler'
      ]
    },
    {
      icon: <FaBed className={styles.icon} />,
      title: 'Yenidoğan Yoğun Bakım',
      description: 'Yenidoğan yoğun bakım ünitesi cihazları için teknik servis',
      items: [
        'Bebek Ventilatörleri',
        'Nemlendiriciler',
        'Küvözler',
        'Radyan Isıtıcılar',
        'Fototerapi Cihazları'
      ]
    },
    {
      icon: <FaHospital className={styles.icon} />,
      title: 'Acil Servis',
      description: 'Acil servis ekipmanları için teknik servis hizmetleri',
      items: [
        'Transport Ventilatörler',
        'Hastabaşı Monitörleri',
        'Pulseoksimetre Cihazları',
        'Acil Müdahale Lambaları',
        'Defibrilatör (Elektroşok Cihazları)',
        'Tansiyon Aletleri'
      ]
    },
    {
      icon: <FaStethoscope className={styles.icon} />,
      title: 'Poliklinik',
      description: 'Poliklinik ekipmanları için teknik servis hizmetleri',
      items: [
        'Otoskop Oftalmoskop Cihazları'
      ]
    },
    {
      icon: <FaTools className={styles.icon} />,
      title: 'Cerrahi Motor Sistemleri',
      description: 'Cerrahi motor sistemleri için teknik servis hizmetleri',
      items: [
        'Beyin Cerrahi Tur Motoru Tamiri',
        'Delici Kesici Ortopedi Motor Tamiri',
        'KBB Tur Motor Tamiri',
        'Shaver Tamiri',
        'Sternum Testere Tamiri'
      ]
    },
    {
      icon: <FaMicroscope className={styles.icon} />,
      title: 'Flexible Endoskopi Cihazları',
      description: 'Endoskopi cihazları için teknik servis hizmetleri',
      items: [
        'Fujinon Endoskopi Tamiri',
        'Olympus Endoskopi Tamiri',
        'Pentax Endoskopi Tamiri',
        'Karl Storz Endovizyon Sistemleri'
      ]
    }
  ];

  const features = [
    {
      icon: <FaWrench className={styles.featureIcon} />,
      title: '7/24 Teknik Servis',
      description: 'Acil durumlarda hızlı müdahale ve etkin teknik destek ile kesintilerin önüne geçiyoruz.'
    },
    {
      icon: <FaCheckCircle className={styles.featureIcon} />,
      title: 'Garantili Hizmet',
      description: 'Gerçekleştirilen tüm bakım ve onarım hizmetleri, garanti koşulları çerçevesinde güvenceyle sunulmaktadır.'
    },
    {
      icon: <FaClock className={styles.featureIcon} />,
      title: 'Hızlı Müdahale',
      description: 'Minimum sürede müdahale ile yerinde teknik servis hizmeti sağlayarak, operasyonel aksaklıkların önüne geçiyoruz.'
    },
    {
      icon: <FaUserTie className={styles.featureIcon} />,
      title: 'Uzman Ekip',
      description: 'Alanında uzman, sertifikalı ve deneyimli teknik ekibimizle, yüksek standartlarda hizmet sunuyoruz.'
    }
  ];

  return (
    <section className={styles.serviceCategories}>
      <div className={styles.container}>
        <h1 className={styles.title}>Teknik Servis Hizmetlerimiz</h1>
        <p className={styles.subtitle}>Biyomedikal cihazlarınız için profesyonel bakım, onarım ve teknik servis hizmetleri. Sertifikalı uzman ekibimizle, tüm tıbbi cihazlarınıza kapsamlı teknik destek sağlıyoruz. Yerinde servis, periyodik bakım ve kalibrasyon hizmetlerimizle cihazlarınızın optimum performansta çalışmasını garanti ediyoruz. 15 yılı aşkın sektör deneyimimiz ve geniş yedek parça stoğumuzla, kesintisiz hizmet sunuyoruz.</p>
        
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={styles.categoryCard}
            >
              <div className={styles.categoryContent}>
                <div className={styles.header}>
                  <div className={styles.iconWrapper}>
                    {category.icon}
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <p className={styles.categoryDescription}>{category.description}</p>
                <ul className={styles.itemsList}>
                  {category.items.slice(0, expandedCategories.includes(index) ? undefined : 2).map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.item}>
                      <FaCheckCircle className={styles.checkIcon} />
                      {item}
                    </li>
                  ))}
                </ul>
                {category.items.length > 2 && (
                  <button 
                    className={styles.showMoreButton}
                    onClick={() => toggleCategory(index)}
                  >
                    {expandedCategories.includes(index) ? (
                      <>
                        <span>Daha Az Göster</span>
                        <FaChevronUp className={styles.chevronIcon} />
                      </>
                    ) : (
                      <>
                        <span>Tümünü Gör</span>
                        <FaChevronDown className={styles.chevronIcon} />
                      </>
                    )}
                  </button>
                )}

              </div>
            </div>
          ))}
        </div>

        <div className={styles.featuresSection}>
          <h3 className={styles.featuresTitle}>Neden Bizi Seçmelisiniz?</h3>
          <p className={styles.subtitle}>Biyomedikal cihazlarınız için profesyonel bakım, onarım ve teknik servis hizmetleri. Sertifikalı uzman ekibimizle, tüm tıbbi cihazlarınıza kapsamlı teknik destek sağlıyoruz. Yerinde servis, periyodik bakım ve kalibrasyon hizmetlerimizle cihazlarınızın optimum performansta çalışmasını garanti ediyoruz. 15 yılı aşkın sektör deneyimimiz ve geniş yedek parça stoğumuzla, kesintisiz hizmet sunuyoruz.</p>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>
                  {feature.icon}
                </div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories; 