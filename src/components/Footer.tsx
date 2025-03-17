'use client';

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Ürünlerimiz', href: '/urunlerimiz' },
    { name: 'Teknik Servis', href: '/teknik-servis' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Sertifikalarımız', href: '/certificates' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            {/* İletişim Bilgileri */}
            <div className={styles.footerSection}>
              <h3>{t('footer.contact.title')}</h3>
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
              <h3>{t('footer.links.title')}</h3>
              <ul className={styles.quickLinks}>
                {footerLinks.map((link, index) => (
                  <li key={index}><Link href={link.href}>{link.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Hizmetlerimiz */}
            <div className={styles.footerSection}>
              <h3>{t('footer.services.title')}</h3>
              <ul className={styles.quickLinks}>
                <li>{t('footer.services.sales')}</li>
                <li>{t('footer.services.service')}</li>
                <li>{t('footer.services.parts')}</li>
              </ul>
            </div>

            {/* Harita */}
            <div className={styles.footerSection}>
              <h3>{t('footer.contact.address')}</h3>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8673795097837!2d28.878252776117437!3d41.05172127134307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa53e9c6b0f2b%3A0x3c5a9d4f8d8e4b0!2sAbel%20Medikal!5e0!3m2!1str!2str!4v1710700844659!5m2!1str!2str"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developer Signature */}
      <div className={styles.signature}>
        <div className={styles.container}>
          <div className={styles.signatureContent}>
            <span>{t('footer.copyright')}</span>
            <span className={styles.separator}>|</span>
            <span>{t('footer.developer')}</span>
            <a
              href="https://github.com/aktasevren/abel_cursor"
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