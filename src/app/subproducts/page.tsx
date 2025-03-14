"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import urunDetaylari from '../../../public/data/urun-detaylari.json';
import styles from '../products/ProductCard.module.css'; // Ürünler sayfasındaki CSS dosyasını kullanıyoruz

const SubProductsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [subProducts, setSubProducts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const filteredProducts = urunDetaylari.filter(product => product.group_id === id);
      setSubProducts(filteredProducts);
    }
  }, [id]);

  const handleSubProductClick = (productId: string) => {
    router.push(`/product_detail?id=${productId}`);
  };

  return (
    <div className={styles.productList}>
      {subProducts.map((product) => (
        <div key={product.product_id} className={styles.productCard} onClick={() => handleSubProductClick(product.product_id)}>
          <img src={product.img_path} alt={product.product_title} className={styles.productImage} />
          <h3 className={styles.productTitle}>{product.product_title}</h3>
          <p className={styles.productDescription}>{product.product_description}</p>
        </div>
      ))}
    </div>
  );
};

export default SubProductsPage; 