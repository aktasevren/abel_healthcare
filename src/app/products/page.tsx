"use client";

import React from "react";
import Image from "next/image"; // Image bileşeni eklendi
import urunGruplari from "../../../public/data/urun-gruplari.json";
import "./ProductsPage.css";
import { useRouter } from "next/navigation";

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
    <div className="products-container">
      <h1>Ürün Grupları</h1>
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
  );
};

export default ProductsPage;
