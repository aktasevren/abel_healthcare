import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda - Abel Health Care Medikal | Biyomedikal Çözüm Ortağınız',
  description: '2008\'den beri İstanbul\'da biyomedikal sektöründe faaliyet gösteren firmamız, sertifikalı olarak tıbbi cihaz satışı ve teknik servis hizmetleri sunmaktadır.',
  keywords: 'biyomedikal firma, tıbbi cihaz servisi, ISO 13485, CE sertifikalı, teknik servis, istanbul biyomedikal',
  openGraph: {
    title: 'Hakkımızda - Abel Health Care Medikal | Biyomedikal Çözüm Ortağınız',
    description: '2008\'den beri İstanbul\'da biyomedikal sektöründe faaliyet gösteren firmamız, sertifikalı olarak tıbbi cihaz satışı ve teknik servis hizmetleri sunmaktadır.',
    type: 'website',
    locale: 'tr_TR',
  }
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
} 