"use client";

import React from "react";
import Image from "next/image";
import urunGruplari from "../../../public/data/urun-gruplari.json";
import { useRouter } from "next/navigation";
import PageHeader from '@/components/PageHeader';
import Link from "next/link";
import "./ProductsPage.css";

// JSON verisi için TypeScript tipi belirlendi
interface Urun {
  id: string;
  img_src: string;
  card_title: string;
  description: string;
  slug: string;
}

const ProductsPage: React.FC = () => {
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    router.push(`/urunlerimiz/${slug}`);
  };

  return (
    <div>
      <PageHeader 
        title="ÜRÜNLERİMİZ"
        breadcrumbs={[
          { name: "ANASAYFA", href: "/" },
          { name: "ÜRÜNLERİMİZ", href: "/urunlerimiz" }
        ]}
      />
      <div className="products-container">
        <div className="product-cards">
          {urunGruplari.map((urun: Urun) => (
            <div
              key={urun.id}
              className="product-card updated-product-card"
              onClick={() => handleProductClick(urun.slug)}
            >
              <div className="product-image-wrapper">
                <Image
                  src={urun.img_src}
                  alt={urun.card_title}
                  width={320}
                  height={220}
                  className="product-image updated-product-image"
                />
              </div>
              <div className="product-info updated-product-info">
                <h2 className="updated-product-title">{urun.card_title}</h2>
                <p className="updated-product-description">{urun.description}</p>
                <Link href={`/urunlerimiz/${urun.slug}`} className="view-products-btn updated-view-products-btn">
                  Ürünleri Gör
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
