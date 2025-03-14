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
  slug: string;
  description: string;
}

function getProductsData(): Product[] {
  const filePath = path.join(process.cwd(), 'public/data/urun-gruplari.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(fileContent);
  
  return products.map((product: any) => ({
    id: product.id,
    img_src: product.img_src.replace('../', '/media/'),
    card_title: product.card_title,
    slug: product.slug,
    description: product.description
  }));
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
            href={`/${product.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage; 