"use client";

import React from "react";
import Image from "next/image"; // Image bileşeni eklendi
import urunGruplari from "../../../public/data/urun-gruplari.json";
import "./ProductsPage.css";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import styles from './Products.module.css';
import PageHeader from '@/components/PageHeader';

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
      <PageHeader 
        title="ÜRÜNLERİMİZ"
        breadcrumbs={[
          { name: "ANASAYFA", href: "/" },
          { name: "ÜRÜNLERİMİZ", href: "/urunlerimiz" }
        ]}
      />
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
