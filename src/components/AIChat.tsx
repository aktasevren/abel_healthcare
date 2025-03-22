import React from 'react';
import { FaRobot } from 'react-icons/fa';
import styles from './AIChat.module.css';

const AIChat = () => {
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div className={styles.headerContent}>
          <FaRobot className={styles.robotIcon} />
          <span className={styles.headerText}>AI Destek</span>
        </div>
      </div>
      
      <div className={styles.chatMessages}>
        <div className={styles.message}>
          <div className={styles.messageContent}>
            <FaRobot className={styles.messageIcon} />
            <div className={styles.messageText}>
              Şu an kendimi geliştirmeye devam ediyorum. En yakın zamanda size destek olacağım. Bwooop Beedoo Beep! 🚀🤖
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat; 