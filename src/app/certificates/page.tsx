"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import styles from './Certificates.module.css';

const CertificatesPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div style={{ textAlign: 'center', margin: '0 auto', padding: '10px', backgroundColor: '#f8d7da', borderRadius: '8px', maxWidth: '1200px' }}>
        <h1 style={{ fontSize: '2em' }}>Sertifikalarımız</h1>
      </div>

      <div className={styles.certificatesContainer}>
        <div className={styles.certificateCard}>
          <div className={styles.imageContainer}>
            <Image
              src="/media/sertifikalar/sertifika-first.jpg"
              alt="Sertifika"
              width={300}
              height={400}
              className={styles.certificateImage}
            />
            <div 
              className={styles.overlay}
              onClick={() => setSelectedImage("/media/sertifikalar/sertifika-first.jpg")}
            >
              <FaSearch size={24} />
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent}>
            <Image
              src={selectedImage}
              alt="Büyütülmüş Sertifika"
              width={800}
              height={1000}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage; 