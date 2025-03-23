'use client';

import Slider from '@/components/Slider/Slider';
import ServiceBlocks from '@/components/ServiceBlocks';
import ServiceCategories from '@/components/ServiceCategories';
import SpecialDaysPopup from '@/components/SpecialDaysPopup';
import News from '@/components/News/News';

export default function Home() {
  return (
    <main>
      <SpecialDaysPopup />
      <Slider />
      <ServiceBlocks />
      <ServiceCategories />
      <News />
    </main>
  );
}
