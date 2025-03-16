'use client';

import React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Abel Health Care Medikal. Tüm hakları saklıdır.
        </div>
        <div className={styles.signature}>
          <span>Designed & Developed with</span>
          <FaHeart className={styles.heartIcon} />
          <span>by</span>
          <a
            href="https://github.com/aktasevren"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.developerLink}
          >
            Evren Aktaş
          </a>
          <a
            href="https://github.com/aktasevren/abel_cursor"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 