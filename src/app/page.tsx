'use client';

import Slider from '@/components/Slider';
import ServiceBlocks from '@/components/ServiceBlocks';
import ServiceCategories from '@/components/ServiceCategories';

export default function Home() {

  return (
    <main>
      <Slider />
      <ServiceBlocks />
      <ServiceCategories />
    </main>
  );
}
