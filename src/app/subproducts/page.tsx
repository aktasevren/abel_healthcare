"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import urunDetaylari from "../../../public/data/urun-detaylari.json";
import urunGruplari from "../../../public/data/urun-gruplari.json";
import styles from "./Subproducts.module.css";
import PageHeader from "@/components/PageHeader";

interface Product {
  product_id: string;
  group_id: string;
  img_path: string;
  product_title: string;
  product_description: string;
}

interface Group {
  id: string;
  img_src: string;
  card_title: string;
  slug: string;
  description: string;
}

const SubproductsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [products, setProducts] = useState<Product[]>([]);
  const [group, setGroup] = useState<Group | null>(null);

  useEffect(() => {
    if (id) {
      const foundGroup = urunGruplari.find((group: Group) => group.id === id);
      setGroup(foundGroup || null);

      const filteredProducts = urunDetaylari.filter(
        (product: Product) => product.group_id === id
      );
      setProducts(filteredProducts);
    }
  }, [id]);

  if (!group) {
    return <div>Grup bulunamadı.</div>;
  }

  return (
    <div className={styles.container}>
      <PageHeader 
        title={group.card_title}
        breadcrumbs={[
          { name: 'Anasayfa', href: '/' },
          { name: 'Ürünlerimiz', href: '/urunlerimiz' },
          { name: group.card_title, href: '#' }
        ]}
      />

      <div className={styles.groupInfo}>
        <div className={styles.groupImage}>
          <Image
            src={group.img_src}
            alt={group.card_title}
            width={400}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.groupDescription}>
          <h2>{group.card_title}</h2>
          <p>{group.description}</p>
        </div>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.product_id} className={styles.productCard}>
            <div className={styles.productImage}>
              <Image
                src={product.img_path}
                alt={product.product_title}
                width={300}
                height={200}
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
  );
};

export default SubproductsPage;
