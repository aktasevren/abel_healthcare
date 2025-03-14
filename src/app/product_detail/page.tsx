"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import urunDetaylari from '../../../public/data/urun-detaylari.json';
import styles from './ProductDetail.module.css';

const ProductDetailPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = urunDetaylari.find(item => item.product_id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productImageContainer}>
        <img src={product.img_path} alt={product.product_title} className={styles.productImage} />
      </div>
      <div className={styles.productAttributes}>
        <h2>{product.product_title}</h2>
        <p>{product.product_description}</p>
        <ul>
          {Object.keys(product).filter(key => key.startsWith('attribute')).map(attrKey => (
            <li key={attrKey}>{product[attrKey]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailPage; 