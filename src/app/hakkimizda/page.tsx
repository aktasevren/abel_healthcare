"use client";

import React from "react";
import { FaHandshake, FaUserMd, FaStethoscope, FaMicroscope, FaHeartbeat } from 'react-icons/fa';
import styles from './Hakkimizda.module.css';
import PageHeader from '@/components/PageHeader';

const Hakkimizda = () => {
  const urunGruplari = [
    "Ventilatör ve Yedek Parça Aksesuarlar",
    "Elektrokoter ve Yedek Parça Aksesuarlar",
    "Hastabaşı Monitör ve Yedek Parça Aksesuarlar",
    "EKG Cihazları ve Aksesuarları",
    "Cerrahi ve Portable Aspiratörler",
    "Yeni Doğan Grubu ve Yedek Parçaları",
    "Oksijen Flowmetreleri ve Negatif Basınç Ölçerler",
    "Veteriner Grubu",
    "Paslanmaz Grubu",
    "Medikal Taşıyıcılar",
    "Optik ve Aleti Grubu",
    "Poliklinik Ürünleri"
  ];

  return (
    <div className={styles.aboutPage}>
      <PageHeader 
        title="HAKKIMIZDA"
        breadcrumbs={[
          { name: "ANASAYFA", href: "/" },
          { name: "HAKKIMIZDA", href: "/hakkimizda" }
        ]}
      />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Sağlık Sektöründe Güvenilir Çözüm Ortağınız</h1>
          <p>2022 yılından bu yana İstanbul'da hizmet vermekteyiz</p>
        </div>
      </section>

      {/* Hakkımızda Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2>Biz Kimiz?</h2>
              <p>
                Abel Health Care Medikal 2022 yılında İstanbul'da kurulmuştur. Şirketimizin kurucuları sağlık sektöründeki iş deneyimlerinin tamamını enerjik, yenilikçi, metamorfoza uğrayan tıp bilimi ve medikal sektörde uyumu yakalamak için sınırsız bilgi erişimi genişletmeye adamış teknik ve mühendis kadrosuyla kaliteli hizmet anlayışını benimsemiştir.
              </p>
              <p>
                Her zaman gaye ve çabamız yurtiçi ve yurtdışında doğru pazarlama ve satış politikasını güvenilir ve sağlam adımlarla ilerletebilmektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon Section */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <h2>Vizyonumuz</h2>
          <div className={styles.visionContent}>
            <p>
              Abel Health Care Medikal olarak yüksek kalitede cerrahi tıbbi sarf malzeme, tıbbi cihaz satışı ve marka model fark etmeksizin teknik servis hizmeti vermekteyiz.
            </p>
            <p>
              Şirketimiz, mevcut ürünlerimize ek olarak yeni nesil tedavi şekillerini de takip etmekte olup kullanılabilecek yeni ürün gruplarını ülkemizdeki sağlık sisteminin içine adapte edebilmektedir.
            </p>
            <p>
              Profesyonel yatırımlarla, piyasada kalite ve güven esasına dayalı hizmet vermeye her zaman tarafımızca devam edilecektir.
            </p>
          </div>
        </div>
      </section>

      {/* Ürün Grupları Section */}
      <section className={styles.productsSection}>
        <div className={styles.container}>
          <h2>Ürün ve Hizmet Gruplarımız</h2>
          <div className={styles.productGrid}>
            {urunGruplari.map((urun, index) => (
              <div key={index} className={styles.productCard}>
                <FaStethoscope className={styles.productIcon} />
                <h3>{urun}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2>Neden Biz?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <FaUserMd className={styles.featureIcon} />
              <h3>Uzman Kadro</h3>
              <p>Deneyimli teknik ve mühendis kadrosu</p>
            </div>
            <div className={styles.featureCard}>
              <FaHeartbeat className={styles.featureIcon} />
              <h3>Kaliteli Hizmet</h3>
              <p>Yüksek kalitede ürün ve servis garantisi</p>
            </div>
            <div className={styles.featureCard}>
              <FaMicroscope className={styles.featureIcon} />
              <h3>Yenilikçi Yaklaşım</h3>
              <p>Yeni nesil tedavi şekillerini takip</p>
            </div>
            <div className={styles.featureCard}>
              <FaHandshake className={styles.featureIcon} />
              <h3>Güvenilir Ortaklık</h3>
              <p>Sağlam ve güvenilir iş birliği</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda; 