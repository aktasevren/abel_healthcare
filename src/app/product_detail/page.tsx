"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import urunDetaylari from '../../../public/data/urun-detaylari.json';
import styles from './ProductDetail.module.css';
import Image from 'next/image';

const ProductDetailPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState<{ [key: string]: string | undefined } | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = urunDetaylari.find(item => item.product_id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productImageContainer}>
        <Image src={product.img_path?.startsWith('http') ? product.img_path : '/default-image.png'} alt={product.product_title || 'Ürün Resmi'} className={styles.productImage} width={500} height={500} />
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