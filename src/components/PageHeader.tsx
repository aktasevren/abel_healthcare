import React from 'react';
import Link from 'next/link';
import styles from './PageHeader.module.css';

interface Breadcrumb {
  name: string;
  href: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.breadcrumbs}>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.href}>
              <Link href={item.href} className={styles.breadcrumbItem}>
                {item.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className={styles.separator}>/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 