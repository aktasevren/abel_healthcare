"use client";

import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import urunGruplari from '../../../../../public/data/urun-gruplari.json';
import urunDetaylari from '../../../../../public/data/urun-detaylari.json';
import styles from './ProductDetail.module.css';
import PageHeader from '@/components/PageHeader';
import { FaBookOpen, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface Product {
  product_id: string;
  group_id: string;
  group_name: string;
  img_path: string;
  product_title: string;
  product_description: string;
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
  attribute6?: string;
  attribute7?: string;
  attribute8?: string;
  attribute9?: string;
  attribute10?: string;
}

interface Group {
  id: string;
  card_title: string;
  description: string;
  img_src: string;
  slug: string;
}

const ProductDetailContent = ({ params }) => {
  const { slug, productId } = params;
  const group = urunGruplari.find((g: Group) => g.slug === slug);
  const product = urunDetaylari.find((p: Product) => p.product_id === productId);

  const [open, setOpen] = useState<'genel' | 'teknik' | null>('genel');

  if (!group || !product) {
    return <div>Ürün bulunamadı.</div>;
  }

  const genelOzellikler = [product.attribute1, product.attribute2, product.attribute3].filter(Boolean);
  const teknikOzellikler = [product.attribute4, product.attribute5, product.attribute6, product.attribute7, product.attribute8, product.attribute9, product.attribute10].filter(Boolean);

  return (
    <div>
      <PageHeader 
        title={product.product_title}
        breadcrumbs={[
          { name: "ANASAYFA", href: "/" },
          { name: "ÜRÜNLERİMİZ", href: "/urunlerimiz" },
          { name: group.card_title, href: `/urunlerimiz/${group.slug}` },
          { name: product.product_title, href: `/urunlerimiz/${group.slug}/${product.product_id}` }
        ]}
      />
      <div className={styles.container}>
        <div className={styles.productDetail}>
          <div className={styles.productImage}>
            <Image
              src={product.img_path}
              alt={product.product_title}
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.productInfo}>
            <h1>{product.product_title}</h1>
            <p className={styles.description}>{product.product_description}</p>
            <div className={styles.bookletBox}>
              <FaBookOpen className={styles.bookletIcon} />
              <span className={styles.bookletText}>Ürün Kitapçığı (PDF)</span>
            </div>
            <div className={styles.accordion}>
              <div className={styles.accordionItem}>
                <button className={styles.accordionHeader} onClick={() => setOpen(open === 'genel' ? null : 'genel')}>
                  <span>Genel Özellikler</span>
                  {open === 'genel' ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {open === 'genel' && (
                  <ul className={styles.accordionContent}>
                    {genelOzellikler.length > 0 ? genelOzellikler.map((attr, i) => <li key={i}>{attr}</li>) : <li>Bilgi yok</li>}
                  </ul>
                )}
              </div>
              <div className={styles.accordionItem}>
                <button className={styles.accordionHeader} onClick={() => setOpen(open === 'teknik' ? null : 'teknik')}>
                  <span>Teknik Özellikler</span>
                  {open === 'teknik' ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {open === 'teknik' && (
                  <ul className={styles.accordionContent}>
                    {teknikOzellikler.length > 0 ? teknikOzellikler.map((attr, i) => <li key={i}>{attr}</li>) : <li>Bilgi yok</li>}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetail = (props) => {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <ProductDetailContent {...props} />
    </Suspense>
  );
};

export default ProductDetail; 