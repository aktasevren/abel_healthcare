'use client';

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {

  const footerLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Ürünlerimiz', href: '/urunlerimiz' },
    { name: 'Teknik Servis', href: '/teknik-servis' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Sertifikalarımız', href: '/certificates' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            {/* İletişim Bilgileri */}
            <div className={styles.footerSection}>
              <h3>İletişim</h3>
              <div className={styles.contactInfo}>
                <p>
                  <FaPhone className={styles.icon} />
                  <a href="tel:+902124300888">0212 430 0888</a>
                </p>
                <p>
                  <FaEnvelope className={styles.icon} />
                  <a href="mailto:info@abelmedikal.com">info@abelmedikal.com</a>
                </p>
                <p>
                  <FaMapMarkerAlt className={styles.icon} />
                  Oruçreis Mah. Tekstilkent Cad. Tekstilkent G2 Blok No: 10-AD İç Kapı No: 2084
                  <br />
                  Esenler / İstanbul
                </p>
              </div>
            </div>

            {/* Hızlı Linkler */}
            <div className={styles.footerSection}>
              <h3>Hızlı Linkler</h3>
              <ul className={styles.quickLinks}>
                {footerLinks.map((link, index) => (
                  <li key={index}><Link href={link.href}>{link.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Hizmetlerimiz */}
            <div className={styles.footerSection}>
              <h3>Hizmetlerimiz</h3>
              <ul className={styles.quickLinks}>
                <li>Satış</li>
                <li>Teknik Servis</li>
                <li>Yedek Parça</li>
              </ul>
            </div>

            {/* Harita */}
            <div className={styles.footerSection}>
              <h3>Adres</h3>
              <div className={styles.map}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.198226477148!2d28.865462277229568!3d41.06465947134262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab16af0cd37b7%3A0xa2f96de462279997!2sAbel%20Health%20Care%20Medikal!5e0!3m2!1sen!2str!4v1732735021051!5m2!1sen!2str" 
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Abel Health Care Medikal Konum"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Signature */}
      <div className={styles.signature}>
        <div className={styles.container}>
          <div className={styles.signatureContent}>
            <span>© 2024 Abel Medikal. Tüm hakları saklıdır.</span>
            <span className={styles.separator}>|</span>
            <span>Geliştirici: Evren Aktaş</span>
            <a
              href="https://github.com/aktasevren"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 