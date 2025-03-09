'use client';

import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image 
        src="/media/logo-text.png" 
        alt="Logo" 
        width={192}
        height={96}
        className="h-24 w-auto"
        priority
      />
    </div>
  );
};

export default Logo; 