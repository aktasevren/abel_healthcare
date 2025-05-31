"use client";

import React, { Suspense } from 'react';
import Image from 'next/image';
import urunGruplari from '../../../../public/data/urun-gruplari.json';
import urunDetaylari from '../../../../public/data/urun-detaylari.json';
import styles from './Subproducts.module.css';
import PageHeader from '@/components/PageHeader';

interface Product {
  product_id: string;
  group_id: string;
  img_path: string;
  product_title: string;
  product_description: string;
  technical_specs?: {
    [key: string]: string;
  };
  attribute1?: string;
  attribute2?: string;
  attribute3?: string;
  attribute4?: string;
  attribute5?: string;
}

interface Group {
  id: string;
  card_title: string;
  description: string;
  img_src: string;
  slug: string;
}

interface Props {
  params: {
    slug: string;
  };
}

const SubproductsContent: React.FC<Props> = ({ params }) => {
  const { slug } = params;
  const group = urunGruplari.find((g: Group) => g.slug === slug);
  const products = urunDetaylari.filter((p: Product) => p.group_id === group?.id);

  if (!group) {
    return <div>Ürün grubu bulunamadı.</div>;
  }

  return (
    <div>
      <PageHeader 
        title={group.card_title}
        breadcrumbs={[
          { name: "ANASAYFA", href: "/" },
          { name: "ÜRÜNLERİMİZ", href: "/urunlerimiz" },
          { name: group.card_title, href: `/urunlerimiz/${group.slug}` }
        ]}
      />
      <div className={styles.container}>
        <section className={styles.productsSection}>
          <div className={styles.productsContent}>
            <div className={styles.productsGrid}>
              {products.map((product: Product) => (
                <div key={product.product_id} className="updated-product-card">
                  <div className="product-image-wrapper">
                    <Image
                      src={product.img_path}
                      alt={product.product_title}
                      width={320}
                      height={220}
                      className="updated-product-image"
                    />
                  </div>
                  <div className="updated-product-info">
                    <h2 className="updated-product-title">{product.product_title}</h2>
                    <p className="updated-product-description">{product.product_description}</p>
                    <a 
                      href={`/urunlerimiz/${group.slug}/${product.product_id}`}
                      className="updated-view-products-btn"
                    >
                      Detayları Gör
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const Subproducts: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <SubproductsContent {...props} />
    </Suspense>
  );
};

export default Subproducts; 