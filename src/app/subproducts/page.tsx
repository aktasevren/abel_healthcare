"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import urunGruplari from '../../../public/data/urun-gruplari.json';
import urunDetaylari from '../../../public/data/urun-detaylari.json';
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

const SubproductsContent: React.FC = () => {
  const searchParams = useSearchParams();
  const groupId = searchParams.get('id');

  const group = urunGruplari.find((g: Group) => g.id === groupId);
  const products = urunDetaylari.filter((p: Product) => p.group_id === groupId);

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
          { name: group.card_title, href: "#" }
        ]}
      />
      <div className={styles.container}>
        <section className={styles.productsSection}>
          <div className={styles.productsContent}>
            <div className={styles.groupInfo}>
              <h2>{group.card_title}</h2>
              <p>{group.description}</p>
            </div>

            <div className={styles.productsGrid}>
              {products.map((product: Product) => (
                <div key={product.product_id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <Image
                      src={product.img_path}
                      alt={product.product_title}
                      width={300}
                      height={300}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <h3>{product.product_title}</h3>
                    <p>{product.product_description}</p>
                    <a 
                      href={`/product_detail?id=${product.product_id}`}
                      className={styles.detailButton}
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

const Subproducts: React.FC = () => {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <SubproductsContent />
    </Suspense>
  );
};

export default Subproducts;
