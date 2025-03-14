"use client";

import React from 'react';
import urunGruplari from '../../../public/data/urun-gruplari.json';
import './ProductsPage.css';
import { useRouter } from 'next/navigation';

const ProductsPage = () => {
  const router = useRouter();

  const handleProductClick = (id: string) => {
    router.push(`/subproducts?id=${id}`);
  };

  return (
    <div className="products-container">
      <h1>Ürün Grupları</h1>
      <div className="product-cards">
        {urunGruplari.map((urun) => (
          <div key={urun.id} className="product-card" onClick={() => handleProductClick(urun.id)}>
            <img src={urun.img_src} alt={urun.card_title} className="product-image" />
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