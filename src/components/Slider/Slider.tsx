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
  },
  {
    id: 2,
    titleKey: 'slider.ultrasound.title',
    descriptionKey: 'slider.ultrasound.description',
    image: '/media/sliders/carrier.jpg',
  },
  {
    id: 3,
    titleKey: 'slider.mri.title',
    descriptionKey: 'slider.mri.description',
    image: '/media/sliders/medical.jpg',
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

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
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
                className="object-cover opacity-50"
                priority
              />
            </div>
            <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-2xl text-white mx-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t(slide.titleKey)}</h2>
                <p className="text-lg md:text-xl opacity-90">{t(slide.descriptionKey)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-20"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-20"
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