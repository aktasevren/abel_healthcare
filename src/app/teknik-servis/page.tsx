'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import styles from './TeknikServis.module.css';
import { FaTools, FaWrench, FaCheckCircle, FaClock } from 'react-icons/fa';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ServiceSection {
  title: string;
  items: ServiceItem[];
}

const serviceSections: ServiceSection[] = [
  // ... existing sections ...
];

const handleServiceClick = (sectionIndex: number, itemIndex: number) => {
  // ... existing code ...
};

export default function TeknikServis() {
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
        {/* Üst Bilgi Bölümü */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Teknik Servis Hizmetleri</h1>
            <div className={styles.heroDescription}>
              <p>İstanbul'da biyomedikal teknik servis hizmeti veren firmamız, uzman kadromuz ve modern ekipmanlarımızla tıbbi cihazlarınızın bakım ve onarımını en yüksek kalitede gerçekleştiriyoruz.</p>
            </div>
          </div>
        </section>

        {/* Özellikler Bölümü */}
        <section className={styles.featuresSection}>
          <div className={styles.featureCard}>
            <FaTools className={styles.featureIcon} />
            <h3>Uzman Kadro</h3>
            <p>Deneyimli ve sertifikalı teknik ekibimizle profesyonel hizmet</p>
          </div>
          <div className={styles.featureCard}>
            <FaWrench className={styles.featureIcon} />
            <h3>Kaliteli Hizmet</h3>
            <p>En yüksek standartlarda bakım ve onarım hizmetleri</p>
          </div>
          <div className={styles.featureCard}>
            <FaCheckCircle className={styles.featureIcon} />
            <h3>Güvenilirlik</h3>
            <p>Zamanında ve güvenilir teknik servis desteği</p>
          </div>
          <div className={styles.featureCard}>
            <FaClock className={styles.featureIcon} />
            <h3>7/24 Destek</h3>
            <p>Acil durumlarda kesintisiz teknik destek hizmeti</p>
          </div>
        </section>

        {/* Hizmet Kartları */}
        <section className={styles.servicesSection}>
          <div className={styles.projcardContainer}>
            {/* Ameliyathane */}
            <div className={`${styles.projcard} ${styles.projcardBlue}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Anestezi Cihazları</div>
                  <div className={styles.projcardSubtitle}>Anestezi cihazlarının bakım ve onarımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Anestezi cihazlarının düzenli bakımı ve teknik servis hizmetleri ile ameliyatlarınızda güvenliği ve etkinliği artırın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Anestezi</span>
                    <span className={styles.projcardTag}>Bakım</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardRed}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Ameliyat Masaları</div>
                  <div className={styles.projcardSubtitle}>Ameliyat masalarının teknik servis hizmetleri</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Ameliyat masalarının onarımı ve periyodik bakımları ile operasyonlarda güvenli ve stabil bir ortam sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Ameliyat</span>
                    <span className={styles.projcardTag}>Teknik Servis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardGreen}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Elektrokoter/Ligasure/Radyo Frekans Cihazları</div>
                  <div className={styles.projcardSubtitle}>Elektrokoter ve RF cihazlarının bakımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Elektrokoter, Ligasure ve radyo frekans cihazlarınızın bakım ve onarımı ile cerrahi müdahalelerde en iyi sonuçları alın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Elektrokoter</span>
                    <span className={styles.projcardTag}>RF Cihazları</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardCustomcolor}`} style={{ "--projcard-color": "#F5AF41" } as any}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Aspiratörler</div>
                  <div className={styles.projcardSubtitle}>Cerrahi aspiratörlerin teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Cerrahi aspiratör cihazlarınızın teknik servis ve bakım hizmetleri ile operasyonlarda kesintisiz çalışmayı garantileyin.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Aspiratör</span>
                    <span className={styles.projcardTag}>Bakım</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Endovizyon Sistemleri */}
            <div className={`${styles.projcard} ${styles.projcardBlue}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Medikal Monitörler</div>
                  <div className={styles.projcardSubtitle}>Medikal monitörlerin bakım ve onarımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Medikal monitör cihazlarınızın düzenli bakımı ve teknik servis hizmetleri ile kesintisiz görüntüleme sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Medikal Monitör</span>
                    <span className={styles.projcardTag}>Teknik Servis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardRed}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Prosesörler</div>
                  <div className={styles.projcardSubtitle}>Prosesör cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Prosesör cihazlarınızın bakım ve onarımı ile operasyonlarda en yüksek verimi alın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Prosesör</span>
                    <span className={styles.projcardTag}>Bakım</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardGreen}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Kameralar</div>
                  <div className={styles.projcardSubtitle}>Medikal kameraların teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Medikal kameralarınızın bakım ve onarımı ile yüksek kaliteli görüntüler elde edin.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Kamera</span>
                    <span className={styles.projcardTag}>Servis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardCustomcolor}`} style={{ "--projcard-color": "#F5AF41" } as any}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Soğuk Işık Kaynakları</div>
                  <div className={styles.projcardSubtitle}>Soğuk ışık kaynaklarının bakım ve onarımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Soğuk ışık kaynakları cihazlarınızın teknik servis hizmetleri ile ameliyatlarda en iyi aydınlatmayı sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Soğuk Işık</span>
                    <span className={styles.projcardTag}>Bakım</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Diğer Hizmetler */}
            <div className={`${styles.projcard} ${styles.projcardBlue}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>İnsüflatörler</div>
                  <div className={styles.projcardSubtitle}>İnsüflatör cihazlarının bakım ve onarımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>İnsüflatör cihazlarınızın düzenli bakımı ve teknik servis hizmetleri ile operasyonlarda kesintisiz çalışmayı garantileyin.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>İnsüflatör</span>
                    <span className={styles.projcardTag}>Bakım</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardRed}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Aspirasyon-İrrigasyon Cihazları</div>
                  <div className={styles.projcardSubtitle}>Aspirasyon ve irrigasyon cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Aspirasyon ve irrigasyon cihazlarınızın bakım ve onarımı ile operasyonlarda hijyenik ve etkili çalışma ortamı sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Aspirasyon</span>
                    <span className={styles.projcardTag}>İrrigasyon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardGreen}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Ameliyat Kafa Lambaları</div>
                  <div className={styles.projcardSubtitle}>Ameliyat kafa lambalarının bakım ve onarımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Ameliyat kafa lambalarınızın teknik servis hizmetleri ile cerrahi müdahalelerde net ve doğru aydınlatma sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Ameliyat Kafa Lambası</span>
                    <span className={styles.projcardTag}>Teknik Servis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardCustomcolor}`} style={{ "--projcard-color": "#F5AF41" } as any}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Isıtıcı/Soğutucular</div>
                  <div className={styles.projcardSubtitle}>Medikal ısıtıcı ve soğutucuların teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Medikal ısıtıcı ve soğutucu cihazlarınızın bakım ve onarımı ile ameliyathanelerde optimal sıcaklık kontrolü sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Isıtıcı</span>
                    <span className={styles.projcardTag}>Soğutucu</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardBlue}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Turnike Cihazları</div>
                  <div className={styles.projcardSubtitle}>Turnike cihazlarının bakım ve onarımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Turnike cihazlarınızın düzenli bakımı ve teknik servis hizmetleri ile operasyonlarda güvenliği artırın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Turnike</span>
                    <span className={styles.projcardTag}>Teknik Servis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Erişkin Yoğun Bakım */}
            <div className={`${styles.projcard} ${styles.projcardRed}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Yetişkin Ventilatörler</div>
                  <div className={styles.projcardSubtitle}>Yetişkin ventilatör cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Yetişkin ventilatör cihazlarınızın bakım ve onarımı ile yoğun bakım ünitelerinde kesintisiz destek sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Ventilatör</span>
                    <span className={styles.projcardTag}>Teknik Servis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Yenidoğan Yoğun Bakım */}
            <div className={`${styles.projcard} ${styles.projcardGreen}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Bebek Ventilatörleri</div>
                  <div className={styles.projcardSubtitle}>Yenidoğan ventilatör cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Bebek ventilatör cihazlarınızın bakım ve onarımı ile yenidoğan yoğun bakım ünitelerinde en iyi desteği sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Bebek Ventilatörü</span>
                    <span className={styles.projcardTag}>Teknik Servis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardCustomcolor}`} style={{ "--projcard-color": "#F5AF41" } as any}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Nemlendiriciler</div>
                  <div className={styles.projcardSubtitle}>Medikal nemlendiricilerin teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Medikal nemlendirici cihazlarınızın düzenli bakımı ve teknik servis hizmetleri ile yenidoğan yoğun bakım ünitelerinde optimal nemlendirme sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Nemlendirici</span>
                    <span className={styles.projcardTag}>Bakım</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Acil Servis */}
            <div className={`${styles.projcard} ${styles.projcardBlue}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Transport Ventilatörler</div>
                  <div className={styles.projcardSubtitle}>Taşınabilir ventilatör cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Transport ventilatör cihazlarınızın bakım ve onarımı ile acil durumlarda kesintisiz ventilasyon sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Transport Ventilatör</span>
                    <span className={styles.projcardTag}>Teknik Servis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Poliklinik */}
            <div className={`${styles.projcard} ${styles.projcardRed}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Otoskop Oftalmoskop Cihazları</div>
                  <div className={styles.projcardSubtitle}>Otoskop ve oftalmoskop cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Otoskop ve oftalmoskop cihazlarınızın bakım ve onarımı ile polikliniklerde en iyi görüntüleme sonuçlarını elde edin.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Otoskop</span>
                    <span className={styles.projcardTag}>Oftalmoskop</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cerrahi Motor Sistemleri */}
            <div className={`${styles.projcard} ${styles.projcardGreen}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Beyin Cerrahi Tur Motoru Tamiri</div>
                  <div className={styles.projcardSubtitle}>Beyin cerrahisi motorlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Beyin cerrahisi tur motorlarınızın tamiri ve bakımı ile cerrahi müdahalelerde yüksek performans sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Beyin Cerrahisi</span>
                    <span className={styles.projcardTag}>Tur Motoru</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardCustomcolor}`} style={{ "--projcard-color": "#F5AF41" } as any}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Delici Kesici Ortopedi Motor Tamiri</div>
                  <div className={styles.projcardSubtitle}>Ortopedi motorlarının bakım ve onarımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Ortopedi motorlarınızın teknik servis hizmetleri ile cerrahi müdahalelerde güvenilir ve kesintisiz performans sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Ortopedi</span>
                    <span className={styles.projcardTag}>Motor Tamiri</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardBlue}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>KBB Tur Motor Tamiri</div>
                  <div className={styles.projcardSubtitle}>KBB cerrahi motorlarının bakım ve onarımı</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>KBB tur motorlarınızın tamir ve bakım hizmetleri ile cerrahi müdahalelerde yüksek performans sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>KBB</span>
                    <span className={styles.projcardTag}>Motor Tamiri</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Flexible Endoskopi Cihazları */}
            <div className={`${styles.projcard} ${styles.projcardRed}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Fujinon Endoskopi Tamiri</div>
                  <div className={styles.projcardSubtitle}>Fujinon endoskopi cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Fujinon endoskopi cihazlarınızın bakım ve onarımı ile endoskopik işlemlerde yüksek görüntü kalitesi ve güvenilir performans sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Fujinon</span>
                    <span className={styles.projcardTag}>Endoskopi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardGreen}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Olympus Endoskopi Tamiri</div>
                  <div className={styles.projcardSubtitle}>Olympus endoskopi cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Olympus endoskopi cihazlarınızın bakım ve onarımı ile endoskopik işlemlerde en iyi performansı sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Olympus</span>
                    <span className={styles.projcardTag}>Endoskopi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardCustomcolor}`} style={{ "--projcard-color": "#F5AF41" } as any}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Pentax Endoskopi Tamiri</div>
                  <div className={styles.projcardSubtitle}>Pentax endoskopi cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Pentax endoskopi cihazlarınızın bakım ve onarımı ile endoskopik işlemlerde güvenilir ve net görüntüleme sağlayın.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Pentax</span>
                    <span className={styles.projcardTag}>Endoskopi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.projcard} ${styles.projcardBlue}`}>
              <div className={styles.projcardInnerbox}>
                <div className={styles.projcardTextbox}>
                  <div className={styles.projcardTitle}>Karl Storz Endovizyon Sistemleri</div>
                  <div className={styles.projcardSubtitle}>Karl Storz endovizyon cihazlarının teknik servisi</div>
                  <div className={styles.projcardBar}></div>
                  <div className={styles.projcardDescription}>Karl Storz endovizyon sistemlerinizin bakım ve onarımı ile endoskopik işlemlerde en yüksek kaliteyi elde edin.</div>
                  <div className={styles.projcardTagbox}>
                    <span className={styles.projcardTag}>Karl Storz</span>
                    <span className={styles.projcardTag}>Endovizyon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 