'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type SubCategory = {
  id: string;
  title: string;
};

type Category = {
  id: string;
  title: string;
  subCategories?: SubCategory[];
};

const categories: Category[] = [
  {
    id: '1',
    title: 'Ameliyathane',
    subCategories: [
      { id: '1-1', title: 'Anestezi Cihazları' },
      { id: '1-2', title: 'Ameliyat Masaları' },
      { id: '1-3', title: 'Ameliyat Masası Kumandaları' },
      { id: '1-4', title: 'Elektrokoter/Ligasure/Radyo Frekans Cihazları' },
      { id: '1-5', title: 'Aspiratörler' },
    ],
  },
  {
    id: '1.1',
    title: 'Endovizyon Sistemleri',
    subCategories: [
      { id: '1.1-1', title: 'Medikal Monitörler' },
      { id: '1.1-2', title: 'Prosesörler' },
      { id: '1.1-3', title: 'Kameralar' },
      { id: '1.1-4', title: 'Soğuk Işık Kaynakları' },
      { id: '1.1-5', title: 'İnsüflatörler' },
      { id: '1.1-6', title: 'Aspirasyon-İrrigasyon Cihazları' },
      { id: '1.1-7', title: 'Ameliyat Kafa Lambaları' },
      { id: '1.1-8', title: 'Isıtıcı/Soğutucular' },
      { id: '1.1-9', title: 'Turnike Cihazları' },
    ],
  },
  {
    id: '2',
    title: 'Erişkin Yoğun Bakım',
    subCategories: [
      { id: '2-1', title: 'Yetişkin Ventilatörler' },
    ],
  },
  {
    id: '3',
    title: 'Yenidoğan Yoğun Bakım',
    subCategories: [
      { id: '3-1', title: 'Bebek Ventilatörleri' },
      { id: '3-2', title: 'Nemlendiriciler' },
      { id: '3-3', title: 'Küvözler' },
      { id: '3-4', title: 'Radyan Isıtıcılar' },
      { id: '3-5', title: 'Fototerapi Cihazları' },
    ],
  },
  {
    id: '4',
    title: 'Acil Servis',
    subCategories: [
      { id: '4-1', title: 'Transport Ventilatörler' },
      { id: '4-2', title: 'Hastabaşı Monitörleri' },
      { id: '4-3', title: 'Pulseoksimetre Cihazları' },
      { id: '4-4', title: 'Acil Müdahale Lambaları' },
      { id: '4-5', title: 'Defibrilatör (Elektroşok Cihazları)' },
      { id: '4-6', title: 'Tansiyon Aletleri' },
    ],
  },
  {
    id: '5',
    title: 'Poliklinik',
    subCategories: [
      { id: '5-1', title: 'Otoskop Oftalmoskop Cihazları' },
    ],
  },
  {
    id: '6',
    title: 'Cerrahi Motor Sistemleri',
    subCategories: [
      { id: '6-1', title: 'Beyin Cerrahi Tur Motoru Tamiri' },
      { id: '6-2', title: 'Delici Kesici Ortopedi Motor Tamiri' },
      { id: '6-3', title: 'KBB Tur Motor Tamiri' },
      { id: '6-4', title: 'Shaver Tamiri' },
      { id: '6-5', title: 'Sternum Testere Tamiri' },
    ],
  },
  {
    id: '7',
    title: 'Flexible Endoskopi Cihazları',
    subCategories: [
      { id: '7-1', title: 'Fujinon Endoskopi Tamiri' },
      { id: '7-2', title: 'Olympus Endoskopi Tamiri' },
      { id: '7-3', title: 'Pentax Endoskopi Tamiri' },
      { id: '7-4', title: 'Karl Storz Endovizyon Sistemleri' },
    ],
  },
];

const ServiceCategories = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Teknik Servis Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-4 py-3 flex justify-between items-center bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openCategories.includes(category.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openCategories.includes(category.id) && category.subCategories && (
                <div className="px-4 py-3">
                  <ul className="space-y-2">
                    {category.subCategories.map((subCategory) => (
                      <li
                        key={subCategory.id}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {subCategory.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories; 