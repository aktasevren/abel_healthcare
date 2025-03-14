"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image"; // Image bileşeni eklendi
import urunDetaylari from "../../../public/data/urun-detaylari.json";
import styles from "../products/ProductCard.module.css"; // Ürünler sayfasındaki CSS dosyasını kullanıyoruz

// JSON verisi için TypeScript tipi belirlendi
interface SubProduct {
  product_id: string;
  group_id: string;
  img_path: string;
  product_title: string;
  product_description: string;
}

const SubProductsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [subProducts, setSubProducts] = useState<SubProduct[]>([]); // `any[]` yerine SubProduct tipini kullandık
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const filteredProducts = urunDetaylari.filter(
        (product: SubProduct) => product.group_id === id
      );
      setSubProducts(filteredProducts);
    }
  }, [id]);

  const handleSubProductClick = (productId: string) => {
    router.push(`/product_detail?id=${productId}`);
  };

  return (
    <div className={styles.productList}>
      {subProducts.map((product) => (
        <div
          key={product.product_id}
          className={styles.productCard}
          onClick={() => handleSubProductClick(product.product_id)}
        >
          <Image
            src={product.img_path}
            alt={product.product_title}
            width={300} // Gerekli genişlik ayarlandı
            height={200} // Gerekli yükseklik ayarlandı
            className={styles.productImage}
          />
          <h3 className={styles.productTitle}>{product.product_title}</h3>
          <p className={styles.productDescription}>
            {product.product_description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SubProductsPage;
