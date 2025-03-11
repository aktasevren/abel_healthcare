import React from 'react';
import path from 'path';
import fs from 'fs';
import './ProductsPage.css';

interface Product {
  id: string;
  img_src: string;
  card_title: string;
  description: string;
  slug: string;
}

function getProductsData(): Product[] {
  const filePath = path.join(process.cwd(), 'public/data/datagrup1.csv');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');
  return lines.slice(1).map((line) => {
    const values = line.split(',').map(value => value.trim());
    if (values.length < 4) return null;
    return {
      id: values[0],
      img_src: `/media/urun-resimleri/${values[1].split('/').pop()}`,
      card_title: values[2],
      description: values[3],
      slug: values[4],
    };
  }).filter(product => product !== null);
}

const ProductsPage: React.FC = () => {
  const products = getProductsData();

  return (
    <div className="products-container">
      <h1 className="products-title">Ürünler</h1>
      <nav className="breadcrumb">
        <a href="/">Anasayfa</a> &gt; <span>Ürünler</span>
      </nav>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <a href={`/${product.description}`}>
              <img src={product.img_src} alt={product.card_title} className="product-image" />
              <h2>{product.card_title}</h2>
              <p className="product-slug">{product.slug}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage; 