import { useState, useEffect } from 'react';
import Image from 'next/image';
import specialDays from '@/data/specialDays.json';

const SpecialDaysPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    const specialDay = specialDays.find(day => day.date === formattedDate);
    if (specialDay) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const today = new Date();
  const formattedDate = `${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  const specialDay = specialDays.find(day => day.date === formattedDate);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        <button 
          onClick={closePopup} 
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={3} 
            stroke="currentColor" 
            className="w-8 h-8 text-red-500"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {specialDay && (
          <Image 
            src={specialDay.image} 
            alt="Özel Gün" 
            width={400} 
            height={300} 
            className="rounded-md" 
          />
        )}
      </div>
    </div>
  );
};

export default SpecialDaysPopup; 