import React from "react";
import Link from "next/link";
import Image from "next/image"; // Next.js Image bileşeni eklendi

interface ProductCardProps {
  productId: string;
  imgSrc: string;
  title: string;
  href?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ productId, imgSrc, title, href }) => {
  const content = (
    <div className="flex items-center space-x-4">
      <Image
        src={imgSrc}
        alt={title}
        width={64} // 16x16 yerine 64x64 olarak ayarlandı
        height={64}
        className="object-cover rounded"
      />
      <h1 className="text-md font-medium text-foreground">{title}</h1>
    </div>
  );

  return (
    <div
      key={productId}
      className="product-card p-4 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
    >
      {href ? (
        <Link href={href} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};

export default ProductCard;
