'use client';

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaComments, FaRobot } from 'react-icons/fa';
import styles from './WhatsAppSupport.module.css';

const WhatsAppSupport = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isAIChat, setIsAIChat] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905335228791', '_blank');
  };

  const handleAIClick = () => {
    setIsAIChat(true);
  };

  const handleBack = () => {
    setIsAIChat(false);
  };

  if (isMobile) return null;

  return (
    <div className={`${styles.whatsappSupport} ${isMinimized ? styles.minimized : ''}`}>
      {!isMinimized && (
        <div className={styles.content}>
          <button 
            className={styles.closeButton}
            onClick={() => setIsMinimized(true)}
          >
            <FaTimes />
          </button>

          {!isAIChat ? (
            <>
              <div className={styles.contactOptions}>
                <button 
                  className={styles.whatsappButton}
                  onClick={handleWhatsAppClick}
                >
                  <FaWhatsapp className={styles.buttonIcon} />
                  <span>WhatsApp ile Mesaj Gönder</span>
                </button>

                <button 
                  className={styles.aiButton}
                  onClick={handleAIClick}
                >
                  <FaRobot className={styles.buttonIcon} />
                  <span>AI Robotumuzdan Destek Alın</span>
                </button>
              </div>

              <div className={styles.contactInfo}>
                <p className={styles.availability}>7/24 Hizmetinizdeyiz</p>
                <p className={styles.phoneNumber}>+90 533 522 87 91</p>
              </div>
            </>
          ) : (
            <div className={styles.chatContainer}>
              <button 
                className={styles.backButton}
                onClick={handleBack}
              >
                ← Geri
              </button>
              <div className={styles.chatMessage}>
                <div className={styles.chatAvatar}>
                  <FaRobot className={styles.robotIcon} />
                </div>
                <div className={styles.chatContent}>
                  <p className={styles.chatText}>
                    Merhaba ben AbelAI,
                  </p>
                  <p className={styles.chatText}>
                    Yapay zeka kullanarak kendimi geliştirmeye devam ediyorum. En yakın zamanda sizlere destek olacağım.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {isMinimized && (
        <button 
          className={styles.maximizeButton}
          onClick={() => setIsMinimized(false)}
        >
          <FaComments />
          <span>Canlı Destek</span>
        </button>
      )}
    </div>
  );
};

export default WhatsAppSupport; 