'use client';

import Slider from '@/components/Slider';
import ServiceBlocks from '@/components/ServiceBlocks';
import ServiceCategories from '@/components/ServiceCategories';
import SpecialDaysPopup from '@/components/SpecialDaysPopup';

export default function Home() {
  return (
    <main>
      <SpecialDaysPopup />
      <Slider />
      <ServiceBlocks />
      <ServiceCategories />
    </main>
  );
}
