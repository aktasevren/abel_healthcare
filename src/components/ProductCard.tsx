import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  productId: string;
  imgSrc: string;
  title: string;
  href?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ productId, imgSrc, title, href }) => {
  const content = (
    <div className="flex items-center space-x-4">
      <img src={imgSrc} alt={title} className="w-16 h-16 object-cover rounded" />
      <h1 className="text-md font-medium text-foreground">{title}</h1>
    </div>
  );

  return (
    <div key={productId} className="product-card p-4 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
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
