"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import urunDetaylari from '../../../public/data/urun-detaylari.json';
import urunGruplari from '../../../public/data/urun-gruplari.json';
import styles from './ProductDetail.module.css';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

const ProductDetailPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductHeader />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetailContent />
      </Suspense>
    </div>
  );
};

const ProductHeader = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const product = urunDetaylari.find(item => item.product_id === id);
  const productName = product?.product_title || 'Ürün Detayı';
  
  // Ana grubun adını urun-gruplari.json'dan bul
  const parentGroup = urunGruplari.find(group => group.id === product?.group_id);
  const parentGroupName = parentGroup?.card_title || 'Alt Ürünler';

  return (
    <>
      <div style={{ textAlign: 'center', margin: '0 auto', padding: '10px', backgroundColor: '#f8d7da', borderRadius: '8px', maxWidth: '1200px' }}>
        <h1 style={{ fontSize: '2em' }}>{productName}</h1>
      </div>
      <Breadcrumb items={[
        { name: 'Anasayfa', href: '/' }, 
        { name: 'Ürünler', href: '/products' }, 
        { name: parentGroupName, href: `/subproducts?id=${product?.group_id}` }, 
        { name: productName, href: `/product_detail?id=${id}` }
      ]} />
    </>
  );
};

const ProductDetailContent = () => {
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
        <Image src={product.img_path ? product.img_path : '/default-image.png'} alt={product.product_title || 'Ürün Resmi'} className={styles.productImage} width={500} height={500} />
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