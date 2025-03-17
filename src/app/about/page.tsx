'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import styles from './Hakkimizda.module.css';

export default function Hakkimizda() {
  return (
    <div>
      <PageHeader 
        title="HAKKIMIZDA"
        breadcrumbs={[
          { name: "ANASAYFA", href: "/" },
          { name: "HAKKIMIZDA", href: "/hakkimizda" }
        ]}
      />
      <div className={styles.container}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2>Biz Kimiz?</h2>
            <p>Abel Health Care Medikal olarak, 2010 yılından bu yana medikal cihaz sektöründe faaliyet göstermekteyiz. Firmamız, biyomedikal teknik servis hizmetleri ve medikal cihaz satışı konusunda uzmanlaşmış bir kuruluştur.</p>
            
            <h2>Misyonumuz</h2>
            <p>Sağlık sektörüne en kaliteli medikal cihazları ve teknik servis hizmetlerini sunarak, hastaların tedavi süreçlerinde en iyi sonuçların elde edilmesine katkıda bulunmak.</p>
            
            <h2>Vizyonumuz</h2>
            <p>Türkiye'nin önde gelen medikal cihaz ve teknik servis firması olarak, yenilikçi çözümlerle sağlık sektörüne değer katmak ve global standartlarda hizmet sunmak.</p>
            
            <h2>Değerlerimiz</h2>
            <ul>
              <li>Kalite ve Güvenilirlik</li>
              <li>Müşteri Memnuniyeti</li>
              <li>Yenilikçilik</li>
              <li>Profesyonellik</li>
              <li>Sürdürülebilirlik</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 