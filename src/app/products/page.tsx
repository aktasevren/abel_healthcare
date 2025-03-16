"use client";

import React from "react";
import Image from "next/image"; // Image bileşeni eklendi
import urunGruplari from "../../../public/data/urun-gruplari.json";
import "./ProductsPage.css";
import { useRouter } from "next/navigation";
import Breadcrumb from '@/components/Breadcrumb';

// JSON verisi için TypeScript tipi belirlendi
interface Urun {
  id: string;
  img_src: string;
  card_title: string;
  description: string;
}

const ProductsPage: React.FC = () => {
  const router = useRouter();

  const handleProductClick = (id: string) => {
    router.push(`/subproducts?id=${id}`);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '0 auto', padding: '10px', backgroundColor: '#f8d7da', borderRadius: '8px', maxWidth: '1200px' }}>
        <h1 style={{ fontSize: '2em' }}>Ürünler</h1>
      </div>
      <Breadcrumb items={[{ name: 'Anasayfa', href: '/' }, { name: 'Ürünler', href: '/products' }]} />
      <div className="products-container">
        <div className="product-cards">
          {urunGruplari.map((urun: Urun) => (
            <div
              key={urun.id}
              className="product-card"
              onClick={() => handleProductClick(urun.id)}
            >
              <Image
                src={urun.img_src}
                alt={urun.card_title}
                width={300} // Gerekli genişlik ayarlandı
                height={200} // Gerekli yükseklik ayarlandı
                className="product-image"
              />
              <div className="product-info">
                <h2>{urun.card_title}</h2>
                <p>{urun.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
