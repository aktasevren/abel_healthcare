'use client';

import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes, FaComments, FaRobot } from 'react-icons/fa';
import styles from './WhatsAppSupport.module.css';
import AIChat from './AIChat';

const WhatsAppSupport = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

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
    setShowAIChat(true);
  };

  if (isMobile) return null;

  return (
    <div className={`${styles.whatsappSupport} ${isMinimized ? styles.minimized : ''}`}>
      {!isMinimized && !showAIChat && (
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <FaWhatsapp className={styles.whatsappIcon} />
              <span className={styles.headerText}>Canlı Destek</span>
            </div>
            <button 
              className={styles.minimizeButton}
              onClick={() => setIsMinimized(true)}
            >
              <FaTimes />
            </button>
          </div>

          <div className={styles.welcomeMessage}>
            <h3>Merhaba! 👋</h3>
            <p>Size nasıl yardımcı olabiliriz?</p>
          </div>

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
        </div>
      )}

      {showAIChat && (
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <FaRobot className={styles.whatsappIcon} />
              <span className={styles.headerText}>AI Destek</span>
            </div>
            <button 
              className={styles.minimizeButton}
              onClick={() => setShowAIChat(false)}
            >
              <FaTimes />
            </button>
          </div>
          <AIChat />
        </div>
      )}

      {isMinimized && !showAIChat && (
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