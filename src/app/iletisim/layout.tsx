import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim - Abel Health Care Medikal | Biyomedikal Teknik Servis',
  description: 'İstanbul\'da biyomedikal cihaz teknik servisi ve satışı için bize ulaşın. 7/24 teknik destek ve profesyonel hizmet.',
  keywords: 'biyomedikal iletişim, tıbbi cihaz servisi, teknik servis, istanbul biyomedikal, medikal cihaz servisi',
  openGraph: {
    title: 'İletişim - Abel Health Care Medikal | Biyomedikal Teknik Servis',
    description: 'İstanbul\'da biyomedikal cihaz teknik servisi ve satışı için bize ulaşın. 7/24 teknik destek ve profesyonel hizmet.',
    type: 'website',
    locale: 'tr_TR',
  }
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
} 