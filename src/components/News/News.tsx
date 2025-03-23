'use client';

import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Türkiye'nin İlk Yerli MRI Cihazı Geliştirildi",
    content: "Türk bilim insanları tarafından geliştirilen ilk yerli MRI cihazı, Sağlık Bakanlığı'ndan onay aldı. Bu gelişme, ülkemizin biyomedikal teknoloji alanındaki önemli bir başarısı olarak değerlendiriliyor.",
    image: "/media/news/mri.jpg",
    date: "15 Mart 2024",
    category: "Biyomedikal"
  },
  {
    id: 2,
    title: "Yapay Zeka Destekli Tanı Sistemleri Yaygınlaşıyor",
    content: "Türkiye'deki hastanelerde yapay zeka destekli tanı sistemlerinin kullanımı artıyor. Bu sistemler, doktorların tanı süreçlerini hızlandırırken, doğruluk oranını da yükseltiyor.",
    image: "/media/news/ai-diagnosis.jpg",
    date: "12 Mart 2024",
    category: "Teknoloji"
  },
  {
    id: 3,
    title: "Biyomedikal Sektöründe İhracat Rekoru",
    content: "Türkiye'nin biyomedikal sektöründe ihracat, geçen yıla göre %25 artış gösterdi. Bu artışta, yerli üretimin payı ve uluslararası standartlara uygunluğun etkisi büyük.",
    image: "/media/news/export.jpg",
    date: "10 Mart 2024",
    category: "Ekonomi"
  }
];

const News = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Haberler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-semibold">{news.category}</span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{news.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{news.content}</p>
                <Link 
                  href={`/haberler/${news.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Devamını Oku
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 