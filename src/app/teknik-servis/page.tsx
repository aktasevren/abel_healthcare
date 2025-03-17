'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import styles from './TeknikServis.module.css';

const TeknikServis: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="TEKNİK SERVİS"
        breadcrumbs={[
          { name: "ANASAYFA", href: "/" },
          { name: "TEKNİK SERVİS", href: "/teknik-servis" }
        ]}
      />
      <div className={styles.container}>
        <section className={styles.serviceSection}>
          <div className={styles.serviceContent}>
            <h2>Teknik Servis Hizmetlerimiz</h2>
            <p>Abel Health Care Medikal olarak, tüm medikal cihazlarınız için profesyonel teknik servis hizmetleri sunuyoruz. Deneyimli ekibimiz ve modern ekipmanlarımızla, cihazlarınızın en iyi performansta çalışmasını sağlıyoruz.</p>

            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <h3>Periyodik Bakım</h3>
                <p>Cihazlarınızın düzenli bakımı ile olası arızaların önüne geçiyor, uzun ömürlü kullanım sağlıyoruz.</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Arıza Tespit ve Onarım</h3>
                <p>Hızlı ve etkili arıza tespiti ile cihazlarınızın en kısa sürede tamir edilmesini sağlıyoruz.</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Kalibrasyon</h3>
                <p>Uluslararası standartlara uygun kalibrasyon hizmeti ile cihazlarınızın doğru ölçüm yapmasını garanti ediyoruz.</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Yedek Parça</h3>
                <p>Orijinal yedek parçalar ile cihazlarınızın güvenilir çalışmasını sağlıyoruz.</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>Eğitim</h3>
                <p>Cihaz kullanıcılarına yönelik teknik eğitimler ile doğru kullanım ve bakım bilincini artırıyoruz.</p>
              </div>

              <div className={styles.serviceCard}>
                <h3>7/24 Destek</h3>
                <p>Acil durumlarda 7/24 teknik destek hizmeti ile yanınızdayız.</p>
              </div>
            </div>

            <div className={styles.contactInfo}>
              <h3>Teknik Servis İletişim</h3>
              <p>Teknik servis talepleriniz için bize ulaşın:</p>
              <p>Telefon: 0212 430 0888</p>
              <p>E-posta: teknik@abelmedikal.com</p>
              <p>Adres: Oruçreis Mah. Tekstilkent Cad. Tekstilkent G2 Blok No: 10-AD İç Kapı No: 2084 Esenler / İstanbul</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeknikServis; 