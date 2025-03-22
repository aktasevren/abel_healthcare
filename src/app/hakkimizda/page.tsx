"use client";

import React from "react";
import Image from "next/image";
import { FaHandshake, FaHospital, FaTools, FaClock, FaUserMd, FaCertificate, FaLightbulb, FaChartLine, FaGlobe } from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  const values = [
    {
      icon: <FaCertificate className={styles.valueIcon} />,
      title: 'Kalite',
      description: 'En yüksek kalite standartlarında hizmet sunuyoruz.'
    },
    {
      icon: <FaHandshake className={styles.valueIcon} />,
      title: 'Güven',
      description: 'Müşterilerimizle güvene dayalı ilişkiler kuruyoruz.'
    },
    {
      icon: <FaClock className={styles.valueIcon} />,
      title: 'Hız',
      description: 'Hızlı ve etkili çözümlerle yanınızdayız.'
    }
  ];

  const features = [
    {
      icon: <FaLightbulb className={styles.featureIcon} />,
      title: 'Yenilikçi Yaklaşım',
      description: 'Metamorfoza uğrayan tıp bilimi ve medikal sektörde uyumu yakalamak için sürekli gelişim.'
    },
    {
      icon: <FaChartLine className={styles.featureIcon} />,
      title: 'Kaliteli Hizmet',
      description: 'Teknik ve mühendis kadrosuyla kaliteli hizmet anlayışını benimsemiş ekip.'
    },
    {
      icon: <FaGlobe className={styles.featureIcon} />,
      title: 'Global Vizyon',
      description: 'Yurtiçi ve yurtdışında doğru pazarlama ve satış politikası.'
    }
  ];

  const services = [
    {
      icon: <FaHospital className={styles.serviceIcon} />,
      title: 'Cerrahi Tıbbi Sarf Malzeme',
      description: 'Yüksek kalitede cerrahi ve tıbbi sarf malzeme tedariği.'
    },
    {
      icon: <FaTools className={styles.serviceIcon} />,
      title: 'Teknik Servis',
      description: 'Marka model fark etmeksizin profesyonel teknik servis hizmeti.'
    },
    {
      icon: <FaUserMd className={styles.serviceIcon} />,
      title: 'Yeni Nesil Tedavi',
      description: 'Yeni nesil tedavi şekillerini ve ürün gruplarını sağlık sistemine adapte etme.'
    }
  ];

  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Abel Health Care Medikal</h1>
          <p className={styles.heroDescription}>
            2022 yılında İstanbul'da kurulan şirketimiz, sağlık sektöründe yenilikçi ve kaliteli hizmet anlayışıyla faaliyet göstermektedir.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>Hakkımızda</h2>
              <p className={styles.aboutText}>
                Şirketimizin kurucuları sağlık sektöründeki iş deneyimlerinin tamamını enerjik, yenilikçi, 
                metamorfoza uğrayan tıp bilimi ve medikal sektörde uyumu yakalamak için sınırsız bilgi erişimi 
                genişletmeye adamış teknik ve mühendis kadrosuyla kaliteli hizmet anlayışını benimsemiştir.
              </p>
              <p className={styles.aboutText}>
                Her zaman gaye ve çabamız yurtiçi ve yurtdışında doğru pazarlama ve satış politikasını güvenilir 
                ve sağlam adımlarla ilerletebilmek bu şirket çizgimizde devam edebilmektir.
              </p>
            </div>
            <div className={styles.aboutImage}>
              <Image
                src="/media/about-image.jpg"
                alt="Abel Health Care Medikal"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Değerlerimiz</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIconWrapper}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Özelliklerimiz</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.vision}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Vizyonumuz</h2>
          <div className={styles.visionContent}>
            <p className={styles.visionText}>
              Abel Health Care Medikal olarak yüksek kalitede cerrahi tıbbi sarf malzeme, tıbbi cihaz satışı 
              ve marka model fark etmeksizin teknik servis hizmeti vermekteyiz. Şirketimiz, mevcut ürünlerimize 
              ek olarak yeni nesil tedavi şekillerini de takip etmekte olup kullanılabilecek yeni ürün gruplarını 
              ülkemizdeki sağlık sisteminin içine adapte edebilmektedir.
            </p>
            <p className={styles.visionText}>
              Profesyonel yatırımlarla, piyasada kalite ve güven esasına dayalı hizmet vermeye her zaman 
              tarafımızca devam edilecektir.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Hizmetlerimiz</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIconWrapper}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 