import React from 'react';
import urunGruplari from '../../../public/data/urun-gruplari.json';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="product-list">
      <h1>Ürün Grupları</h1>
      <div className="product-cards">
        {urunGruplari.map((urun) => (
          <div key={urun.id} className="product-card">
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