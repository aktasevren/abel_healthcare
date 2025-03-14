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
  const filePath = path.join(process.cwd(), 'public/data/urun-detaylari.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(fileContent);
  
  return products
    .filter((product: any) => product.group_id === '7')
    .map((product: any) => ({
      product_id: product.product_id,
      img_path: product.img_path.replace('../', '/media/'),
      product_title: product.product_title,
      product_description: product.product_description
    }));
}

const FlowmetrePage: React.FC = () => {
  const subProducts = getSubProductsData();

  return (
    <div className="sub-products-container">
      <h1 className="sub-products-title">Oksijen Flowmetreleri ve Negatif Basınç Ölçerler</h1>
      <nav className="breadcrumb">
        <Link href="/">Anasayfa</Link> &gt; <Link href="/products">Ürünler</Link> &gt; <span>Oksijen Flowmetreleri</span>
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

export default FlowmetrePage; 