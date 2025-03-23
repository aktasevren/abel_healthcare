'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaMicrochip, FaCogs, FaChartLine, FaShieldAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    titleKey: 'slider.slide1.title',
    descriptionKey: 'slider.slide1.description',
    image: '/media/sliders/ekg.jpg',
    features: [
      {
        icon: <FaMicrochip className="w-6 h-6" />,
        titleKey: 'slider.slide1.features.tech.title',
        descriptionKey: 'slider.slide1.features.tech.description'
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        titleKey: 'slider.slide1.features.advanced.title',
        descriptionKey: 'slider.slide1.features.advanced.description'
      },
      {
        icon: <FaChartLine className="w-6 h-6" />,
        titleKey: 'slider.slide1.features.precise.title',
        descriptionKey: 'slider.slide1.features.precise.description'
      },
      {
        icon: <FaShieldAlt className="w-6 h-6" />,
        titleKey: 'slider.slide1.features.reliable.title',
        descriptionKey: 'slider.slide1.features.reliable.description'
      }
    ]
  },
  {
    id: 2,
    titleKey: 'slider.slide2.title',
    descriptionKey: 'slider.slide2.description',
    image: '/media/sliders/carrier.jpg',
    features: [
      {
        icon: <FaMicrochip className="w-6 h-6" />,
        titleKey: 'slider.slide2.features.hd.title',
        descriptionKey: 'slider.slide2.features.hd.description'
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        titleKey: 'slider.slide2.features.multi.title',
        descriptionKey: 'slider.slide2.features.multi.description'
      },
      {
        icon: <FaChartLine className="w-6 h-6" />,
        titleKey: 'slider.slide2.features.analysis.title',
        descriptionKey: 'slider.slide2.features.analysis.description'
      },
      {
        icon: <FaClock className="w-6 h-6" />,
        titleKey: 'slider.slide2.features.quick.title',
        descriptionKey: 'slider.slide2.features.quick.description'
      }
    ]
  },
  {
    id: 3,
    titleKey: 'slider.slide3.title',
    descriptionKey: 'slider.slide3.description',
    image: '/media/sliders/medical.jpg',
    features: [
      {
        icon: <FaMicrochip className="w-6 h-6" />,
        titleKey: 'slider.slide3.features.field.title',
        descriptionKey: 'slider.slide3.features.field.description'
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        titleKey: 'slider.slide3.features.sequence.title',
        descriptionKey: 'slider.slide3.features.sequence.description'
      },
      {
        icon: <FaChartLine className="w-6 h-6" />,
        titleKey: 'slider.slide3.features.imaging.title',
        descriptionKey: 'slider.slide3.features.imaging.description'
      },
      {
        icon: <FaCheckCircle className="w-6 h-6" />,
        titleKey: 'slider.slide3.features.quality.title',
        descriptionKey: 'slider.slide3.features.quality.description'
      }
    ]
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
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
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
          <div className="relative w-full h-full flex flex-col justify-center bg-gray-900">
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={t(slide.titleKey)}
                fill
                className="object-cover opacity-30"
                priority
              />
            </div>
            <div className="relative z-10 container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{t(slide.titleKey)}</h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 opacity-90 max-w-2xl mx-auto">{t(slide.descriptionKey)}</p>
                </div>
                
                <div className="relative">
                  {/* Mobil görünüm */}
                  <div className="md:hidden px-8">
                    <div className="flex flex-col gap-2">
                      {slide.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-white">{t(feature.titleKey)}</h3>
                            <p className="text-xs text-gray-300">{t(feature.descriptionKey)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tablet ve masaüstü görünüm */}
                  <div className="hidden md:block">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {slide.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="text-blue-400 mb-3">
                            {feature.icon}
                          </div>
                          <h3 className="text-base font-semibold text-white mb-2">{t(feature.titleKey)}</h3>
                          <p className="text-sm text-gray-300">{t(feature.descriptionKey)}</p>
                        </div>
                      ))}
                    </div>
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
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full shadow-lg z-20 border border-white/20 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full shadow-lg z-20 border border-white/20 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-400 scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider; 