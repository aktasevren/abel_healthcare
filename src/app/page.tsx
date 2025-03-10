'use client';

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Slider from '@/components/Slider';
import ServiceBlocks from '@/components/ServiceBlocks';
import ServiceCategories from '@/components/ServiceCategories';

export default function Home() {
  const { t } = useLanguage();
  
  // Çeviriler için LanguageContext'e yeni anahtarlar ekleyin
  const translations = {
    welcome: {
      tr: 'Hoş Geldiniz',
      en: 'Welcome',
      ar: 'مرحبا بكم',
    },
    homePage: {
      tr: 'Ana Sayfa',
      en: 'Home Page',
      ar: 'الصفحة الرئيسية',
    },
  };

  return (
    <main>
      <Slider />
      <ServiceBlocks />
      <ServiceCategories />
    </main>
  );
}
