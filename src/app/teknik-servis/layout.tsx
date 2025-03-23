import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teknik Servis - Abel Health Care Medikal | 7/24 Biyomedikal Servis',
  description: 'İstanbul\'da tüm tıbbi cihazlarınız için 7/24 teknik servis hizmeti. Uzman ekibimizle profesyonel ve garantili biyomedikal cihaz bakım ve onarım hizmetleri.',
  keywords: 'biyomedikal teknik servis, tıbbi cihaz bakımı, medikal cihaz onarımı, 7/24 teknik servis, istanbul biyomedikal servis',
  openGraph: {
    title: 'Teknik Servis - Abel Health Care Medikal | 7/24 Biyomedikal Servis',
    description: 'İstanbul\'da tüm tıbbi cihazlarınız için 7/24 teknik servis hizmeti. Uzman ekibimizle profesyonel ve garantili biyomedikal cihaz bakım ve onarım hizmetleri.',
    type: 'website',
    locale: 'tr_TR',
  }
};

export default function TeknikServisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
} 