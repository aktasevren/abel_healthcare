'use client';

import Slider from '@/components/Slider';
import ServiceBlocks from '@/components/ServiceBlocks';
import ServiceCategories from '@/components/ServiceCategories';
import SpecialDaysPopup from '@/components/SpecialDaysPopup';

const slides = [
  {
    image: '/media/sliders/ekg.jpg',
    title: 'Abel Health Care Medikal',
    description: 'Sağlık sektöründe güvenilir çözüm ortağınız',
  },
  // ... existing code ...
];

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
