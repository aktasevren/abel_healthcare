import React from 'react';
import path from 'path';
import fs from 'fs';
import './ProductsPage.css';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard';

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
        <Link href="/">Anasayfa</Link> &gt; <span>Ürünler</span>
      </nav>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            productId={product.id} 
            imgSrc={product.img_src} 
            title={product.card_title} 
            href={`/${product.description}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage; 