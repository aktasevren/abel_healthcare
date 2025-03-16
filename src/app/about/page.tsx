"use client";

import React from 'react';
import { FaBoxOpen, FaStethoscope, FaTools, FaCogs, FaLightbulb, FaHandshake, FaHeadset, FaChartLine, FaGithub } from 'react-icons/fa';
import styles from './About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* Başlık */}
      <div style={{ textAlign: 'center', margin: '0 auto', padding: '10px', backgroundColor: '#f8d7da', borderRadius: '8px', maxWidth: '1200px' }}>
        <h1 style={{ fontSize: '2em' }}>HAKKIMIZDA</h1>
      </div>

      {/* Ana Bölüm */}
      <section className={styles.mainSection}>
        <h2 className={styles.companyName}>Abel Health Care Medikal</h2>
        <div className={styles.mainContent}>
          <p className={styles.description}>
            Abel Health Care Medikal 2022 yılında İstanbul'da kurulmuştur. Şirketimizin kurucuları sağlık sektöründeki iş deneyimlerinin tamamını enerjik, yenilikçi, metamorfoza uğrayan tıp bilimi ve medikal sektörde uyumu yakalamak için sınırsız bilgi erişimi genişletmeye adamış teknik ve mühendis kadrosuyla kaliteli hizmet anlayışını benimsemiştir. Her zaman gaye ve çabamız yurtiçi ve yurtdışında doğru pazarlama ve satış politikasını güvenilir ve sağlam adımlarla ilerletebilmek bu şirket çizgimizde devam edebilmektir.
          </p>
        </div>
      </section>

      {/* Hizmetler */}
      <section className={styles.servicesSection}>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <FaStethoscope className={styles.icon} />
            <p>Yüksek kalite cerrahi tıbbi sarf malzeme</p>
          </div>
          <div className={styles.serviceCard}>
            <FaBoxOpen className={styles.icon} />
            <p>Tıbbi cihaz satışı</p>
          </div>
          <div className={styles.serviceCard}>
            <FaTools className={styles.icon} />
            <p>Marka model farketmeksizin teknik servis hizmeti</p>
          </div>
          <div className={styles.serviceCard}>
            <FaCogs className={styles.icon} />
            <p>Geniş yedek parça yelpazesi</p>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className={styles.whyUsSection}>
        <h2>Neden Bizi Seçmelisiniz</h2>
        <p className={styles.whyUsContent}>
          Şirketimiz, mevcut ürünlerimize ek olarak yeni nesil tedavi şekillerini de takip etmekte olup kullanılabilecek yeni ürün gruplarını ülkemizdeki sağlık sistemimin içine adapte etmektedir. Profesyonel yatırımlarla, piyasada kalite ve güven esasına dayalı hizmet vermeye her zaman tarafımızda devam edilecektir.
        </p>
      </section>

      {/* Özellikler */}
      <section className={styles.featuresSection}>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <FaChartLine className={styles.icon} />
            <h3>Yeni Ürün Grupları</h3>
          </div>
          <div className={styles.featureCard}>
            <FaLightbulb className={styles.icon} />
            <h3>Enerjik ve Yenilikçi</h3>
          </div>
          <div className={styles.featureCard}>
            <FaHandshake className={styles.icon} />
            <h3>Danışmanlık</h3>
          </div>
          <div className={styles.featureCard}>
            <FaHeadset className={styles.icon} />
            <h3>Destek</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 