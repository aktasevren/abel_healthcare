"use client";

import React from "react";
import Image from 'next/image';
import { FaHospital, FaTools, FaHandshake, FaChartLine, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import styles from './About.module.css';
import PageHeader from '@/components/PageHeader';

const AboutPage = () => {
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

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.container}>
          {/* Company Overview */}
          <div className={styles.overviewSection}>
            <div className={styles.overviewContent}>
              <h2>Hakkımızda</h2>
              <p>
                Sağlık sektörünün dinamik yapısına uyum sağlayan, yenilikçi ve güvenilir çözümler sunmak amacıyla kurulan Abel Health Care Medikal, tıbbi cihazlar ve medikal ürünler alanında faaliyet göstermektedir. İstanbul merkezli firmamız, hastane, klinik, poliklinik ve veteriner kuruluşlarına yönelik geniş bir ürün yelpazesi sunmaktadır.
              </p>
            </div>
            <div className={styles.overviewImage}>
              <Image
                src="/media/about/company.jpg"
                alt="Abel Health Care Medikal"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <FaHospital className={styles.serviceIcon} />
              <h3>Geniş Ürün Yelpazesi</h3>
              <p>Ventilatör sistemleri, elektrokoter cihazları, EKG cihazları, hasta başı monitörler ve daha fazlası</p>
            </div>
            <div className={styles.serviceCard}>
              <FaTools className={styles.serviceIcon} />
              <h3>Teknik Servis</h3>
              <p>Marka bağımsız teknik servis hizmetleri ve satış sonrası profesyonel destek</p>
            </div>
            <div className={styles.serviceCard}>
              <FaHandshake className={styles.serviceIcon} />
              <h3>Müşteri Odaklı</h3>
              <p>Müşteri memnuniyetini en üst seviyede tutan yaklaşım ve hizmet anlayışı</p>
            </div>
            <div className={styles.serviceCard}>
              <FaChartLine className={styles.serviceIcon} />
              <h3>Yenilikçi Çözümler</h3>
              <p>Değişen sağlık teknolojilerine hızlı adapte olan yenilikçi ürün ve hizmetler</p>
            </div>
          </div>

          {/* Vision Section */}
          <div className={styles.visionSection}>
            <h2>Vizyonumuz</h2>
            <p>
              &ldquo;Hayat değerlidir&rdquo; mottosuyla çıktığımız bu yolda, değişen sağlık teknolojilerine hızlı adapte olarak, yeni nesil tedavi yöntemlerine uygun, kaliteli ve yenilikçi ürünleri sağlık sistemine entegre etmeyi hedefliyoruz. Etik değerlere bağlı kalarak, sürekli gelişim ve hizmette mükemmellik ilkelerimizle ilerliyoruz.
            </p>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h2>İletişim</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <h3>Adres</h3>
                <p>Oruçreis Mah. Tekstilkent Cad. Tekstilkent G2 Blok No: 10-AD İç Kapı No: 2084 Esenler / İstanbul</p>
              </div>
              <div className={styles.contactCard}>
                <FaPhone className={styles.contactIcon} />
                <h3>Telefon</h3>
                <p>0(212) 430 08 88</p>
              </div>
              <div className={styles.contactCard}>
                <FaEnvelope className={styles.contactIcon} />
                <h3>E-posta</h3>
                <p>info@abelmedikal.com</p>
              </div>
              <div className={styles.contactCard}>
                <FaGlobe className={styles.contactIcon} />
                <h3>Web Sitesi</h3>
                <p>www.abelmedikal.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 