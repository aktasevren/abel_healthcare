"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import urunDetaylari from "../../../public/data/urun-detaylari.json";
import urunGruplari from "../../../public/data/urun-gruplari.json";
import styles from "./ProductDetail.module.css";
import PageHeader from "@/components/PageHeader";

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

const ProductDetailPage: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState<Product | null>(null);
  const [group, setGroup] = useState<Group | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = urunDetaylari.find(
        (product: Product) => product.product_id === id
      );
      setProduct(foundProduct || null);

      if (foundProduct) {
        const foundGroup = urunGruplari.find(
          (group: Group) => group.id === foundProduct.group_id
        );
        setGroup(foundGroup || null);
      }
    }
  }, [id]);

  if (!product) {
    return <div>Ürün bulunamadı.</div>;
  }

  // Attribute'ları bir array'e dönüştür
  const attributes = [
    product.attribute1,
    product.attribute2,
    product.attribute3,
    product.attribute4,
    product.attribute5
  ].filter(attr => attr); // Boş olmayan attribute'ları filtrele

  return (
    <div className={styles.container}>
      <PageHeader 
        title={product.product_title}
        breadcrumbs={[
          { name: 'Anasayfa', href: '/' },
          { name: 'Ürünlerimiz', href: '/urunlerimiz' },
          { name: group?.card_title || 'Ürün Grubu', href: `/subproducts?id=${product.group_id}` },
          { name: product.product_title, href: '#' }
        ]}
      />

      <div className={styles.productDetail}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              src={product.img_path}
              alt={product.product_title}
              width={500}
              height={500}
              className={styles.productImage}
            />
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.description}>
            <h2>Ürün Açıklaması</h2>
            <p>{product.product_description}</p>
          </div>

          {attributes.length > 0 && (
            <div className={styles.attributes}>
              <h2>Özellikler</h2>
              <ul className={styles.attributesList}>
                {attributes.map((attr, index) => (
                  <li key={index} className={styles.attributeItem}>
                    {attr}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.technical_specs && Object.keys(product.technical_specs).length > 0 && (
            <div className={styles.specifications}>
              <h2>Teknik Özellikler</h2>
              <div className={styles.specsGrid}>
                {Object.entries(product.technical_specs).map(([key, value]) => (
                  <div key={key} className={styles.specItem}>
                    <span className={styles.specLabel}>{key}:</span>
                    <span className={styles.specValue}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 