"use client";

import React from "react";
import Image from "next/image";
import PageHeader from '@/components/PageHeader';
import { FaHospital, FaStethoscope, FaHandHoldingHeart, FaTools, FaClock, FaShieldAlt, FaUserMd, FaCheckCircle } from 'react-icons/fa';
import "./TeknikServis.css";

const TeknikServisPage: React.FC = () => {
  return (
    <div>

      
      <div className="service-hero">
        <div className="service-hero-content">
          <h1>7/24 Teknik Servis Hizmeti</h1>
          <p>Uzman ekibimizle tüm tıbbi cihazlarınız için profesyonel teknik servis hizmeti sunuyoruz.</p>
        </div>
      </div>

      <div className="service-features">
        <div className="feature-card">
          <FaClock className="feature-icon" />
          <h3>7/24 Hizmet</h3>
          <p>Acil durumlarınız için her zaman yanınızdayız</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Garantili Hizmet</h3>
          <p>Tüm servis işlemlerimiz garantilidir</p>
        </div>
        <div className="feature-card">
          <FaUserMd className="feature-icon" />
          <h3>Uzman Ekip</h3>
          <p>Deneyimli ve sertifikalı teknik kadro</p>
        </div>
        <div className="feature-card">
          <FaCheckCircle className="feature-icon" />
          <h3>Kalite Standartları</h3>
          <p>Uluslararası standartlarda hizmet</p>
        </div>
      </div>

      <div className="service-categories">
        <h2>Servis Kategorilerimiz</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">
              <FaHospital />
            </div>
            <h3>Görüntüleme Sistemleri</h3>
            <p>Ultrason, MR, CT ve X-Ray cihazları için profesyonel bakım ve onarım hizmetleri</p>
            <ul>
              <li>Periyodik Bakım</li>
              <li>Arıza Tespit ve Onarım</li>
              <li>Kalibrasyon</li>
              <li>Yazılım Güncelleme</li>
            </ul>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <FaStethoscope />
            </div>
            <h3>Yaşam Bulguları Monitörleri</h3>
            <p>Hasta monitörleri ve vital bulgu cihazları için kapsamlı teknik servis</p>
            <ul>
              <li>Hasta Monitörleri</li>
              <li>EKG Cihazları</li>
              <li>Nabız Oksimetreleri</li>
              <li>Kan Basıncı Monitörleri</li>
            </ul>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <FaTools />
            </div>
            <h3>Cerrahi Sistemler</h3>
            <p>Ameliyathane ekipmanları ve cerrahi sistemler için özel servis hizmetleri</p>
            <ul>
              <li>Anestezi Cihazları</li>
              <li>Cerrahi Masalar</li>
              <li>Endoskopi Sistemleri</li>
              <li>Lazer Sistemleri</li>
            </ul>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <FaHandHoldingHeart />
            </div>
            <h3>Laboratuvar Cihazları</h3>
            <p>Laboratuvar ekipmanları için detaylı bakım ve onarım hizmetleri</p>
            <ul>
              <li>Analizörler</li>
              <li>Santrifüjler</li>
              <li>İnkübatörler</li>
              <li>Sterilizasyon Cihazları</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="service-process">
        <h2>Servis Sürecimiz</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>İletişim</h3>
            <p>7/24 çağrı merkezimizden hızlı destek</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Değerlendirme</h3>
            <p>Uzman ekibimizle detaylı arıza analizi</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Çözüm</h3>
            <p>Hızlı ve etkili teknik müdahale</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Takip</h3>
            <p>Düzenli kontrol ve bakım hizmeti</p>
          </div>
        </div>
      </div>

      <div className="service-contact">
        <h2>Teknik Servis Talebi</h2>
        <p>7/24 teknik servis hizmetimizden yararlanmak için hemen iletişime geçin</p>
        <div className="contact-buttons">
          <a href="tel:+902161234567" className="contact-button">
            <FaClock /> 7/24 Çağrı Merkezi
          </a>
          <a href="mailto:servis@biomedical.com" className="contact-button">
            <FaUserMd /> Servis Talebi
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeknikServisPage; 