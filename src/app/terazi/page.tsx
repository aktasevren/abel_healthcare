import React from 'react';
import path from 'path';
import fs from 'fs';
import '../ventilator/VentilatorPage.css';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard';

interface SubProduct {
  product_id: string;
  img_path: string;
  product_title: string;
  product_description: string;
}

function getSubProductsData(): SubProduct[] {
  const filePath = path.join(process.cwd(), 'public/data/grupdata.csv');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split('\n');
  return lines.slice(1).map((line) => {
    const values = line.split(',').map(value => value.trim());
    if (values.length < 5 || values[1] !== '15') return null;
    return {
      product_id: values[0],
      img_path: `/media/urun-resimleri/${values[3].split('/').pop()}`,
      product_title: values[4],
      product_description: values[5],
    };
  }).filter(subProduct => subProduct !== null);
}

const TeraziPage: React.FC = () => {
  const subProducts = getSubProductsData();

  return (
    <div className="sub-products-container">
      <h1 className="sub-products-title">Terazi</h1>
      <nav className="breadcrumb">
        <Link href="/">Anasayfa</Link> &gt; <a href="/products">Ürünler</a> &gt; <span>Terazi</span>
      </nav>
      <div className="sub-product-list">
        {subProducts.map((subProduct) => (
          <ProductCard 
            key={subProduct.product_id} 
            productId={subProduct.product_id} 
            imgSrc={subProduct.img_path} 
            title={subProduct.product_title} 
            href={`/product-detail/${subProduct.product_id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TeraziPage; 