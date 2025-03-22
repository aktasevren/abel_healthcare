'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const slides = [
  {
    id: 1,
    titleKey: 'slider.ekg.title',
    descriptionKey: 'slider.ekg.description',
    image: '/media/sliders/ekg.jpg',
    specs: {
      resolution: '12-bit',
      samplingRate: '1000 Hz',
      channels: '12',
      display: '12.1" TFT'
    }
  },
  {
    id: 2,
    titleKey: 'slider.ultrasound.title',
    descriptionKey: 'slider.ultrasound.description',
    image: '/media/sliders/carrier.jpg',
    specs: {
      frequency: '2-18 MHz',
      probes: '4',
      depth: '30 cm',
      display: '15" LED'
    }
  },
  {
    id: 3,
    titleKey: 'slider.mri.title',
    descriptionKey: 'slider.mri.description',
    image: '/media/sliders/medical.jpg',
    specs: {
      fieldStrength: '1.5T',
      boreSize: '70cm',
      gradientStrength: '45mT/m',
      display: '32" 4K'
    }
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getDeviceType = (id: number) => {
    switch (id) {
      case 1:
        return 'ekg';
      case 2:
        return 'ultrasound';
      case 3:
        return 'mri';
      default:
        return 'ekg';
    }
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
          }}
        >
          <div className="relative w-full h-full flex items-center bg-gray-900">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={t(slide.titleKey)}
                fill
                className="object-cover opacity-40"
                priority
              />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    {t(slide.titleKey)}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8">
                    {t(slide.descriptionKey)}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(slide.specs).map(([key, value]) => {
                      const deviceType = getDeviceType(slide.id);
                      const translationKey = `slider.${deviceType}.specs.${key}`;
                      return (
                        <div key={key} className="bg-white/10 p-4 rounded-lg">
                          <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                            {t(translationKey)}
                          </div>
                          <div className="text-lg font-semibold text-white">
                            {value}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg z-20 transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-lg z-20 transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider; 