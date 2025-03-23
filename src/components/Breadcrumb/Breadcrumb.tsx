import React from 'react';
import Link from 'next/link';

const Breadcrumb = ({ items }: { items: { name: string; href: string }[] }) => {
  return (
    <nav aria-label="breadcrumb" style={{ textAlign: 'left', margin: '20px auto', maxWidth: '1200px' }}>
      <ol className="breadcrumb" style={{ display: 'inline-block', padding: '0', margin: '0', listStyle: 'none' }}>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item" style={{ display: 'inline', marginRight: '5px' }}>
            {index < items.length - 1 ? (
              <Link href={item.href} legacyBehavior>
                <a>{item.name}</a>
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
            {index < items.length - 1 && <span> &gt; </span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 