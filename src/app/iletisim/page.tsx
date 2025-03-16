'use client';

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      {/* Başlık Bölümü */}
      <div className={styles.breadcrumbs}>
        <div className={styles.container}>
          <h1>İLETİŞİM</h1>
          <div className={styles.breadcrumbLinks}>
            <Link href="/">ANASAYFA</Link> / İLETİŞİM
          </div>
        </div>
      </div>

      {/* İletişim Bilgileri */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            {/* Telefon Kartları */}
            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <FaPhone className={styles.icon} />
                </div>
                <div className={styles.content}>
                  <h3>Satış Destek</h3>
                  <a href="tel:05335228791">0533 522 8791</a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <FaPhone className={styles.icon} />
                </div>
                <div className={styles.content}>
                  <h3>Teknik Servis</h3>
                  <a href="tel:02124300888">0212 430 0888</a>
                </div>
              </div>
            </div>

            {/* Harita ve Adres Bölümü */}
            <div className={styles.mapAddressSection}>
              <div className={styles.mapContainer}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.198226477148!2d28.865462277229568!3d41.06465947134262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab16af0cd37b7%3A0xa2f96de462279997!2sAbel%20Health%20Care%20Medikal!5e0!3m2!1sen!2str!4v1732735021051!5m2!1sen!2str" 
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Abel Health Care Medikal Konum"
                />
              </div>

              <div className={styles.addressCard}>
                <div className={styles.iconWrapper}>
                  <FaMapMarkerAlt className={styles.icon} />
                </div>
                <div className={styles.content}>
                  <h3>Satış Ofisi</h3>
                  <address>
                    Oruçreis Mah. Tekstilkent Cad. Tekstilkent G2 Blok No: 10-AD İç Kapı No: 2084
                    <br />
                    Esenler / İstanbul
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 