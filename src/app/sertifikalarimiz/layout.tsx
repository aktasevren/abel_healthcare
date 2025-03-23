import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sertifikalarımız - Abel Health Care Medikal | Kalite Belgeleri',
  description: 'ISO 13485:2016 ve CE sertifikalarımızla kalite standartlarını karşılayan biyomedikal firması. Profesyonel ve güvenilir hizmet.',
  keywords: 'ISO 13485, CE sertifikası, biyomedikal sertifika, tıbbi cihaz sertifikası, kalite belgesi, medikal cihaz sertifikası',
  openGraph: {
    title: 'Sertifikalarımız - Abel Health Care Medikal | Kalite Belgeleri',
    description: 'ISO 13485:2016 ve CE sertifikalarımızla kalite standartlarını karşılayan biyomedikal firması. Profesyonel ve güvenilir hizmet.',
    type: 'website',
    locale: 'tr_TR',
  }
};

export default function SertifikalarimizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
} 