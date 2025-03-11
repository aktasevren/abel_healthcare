import React from 'react';
import './Footer.css'; // CSS dosyasını import ediyorum

const Footer = () => {
  return (
    <footer>
      FOOTER
      <div className="mobile-buttons">
        <a href="https://wa.me/1234567890?text=Merhaba" className="whatsapp-button">
          <img src="/path/to/whatsapp-icon.png" alt="WhatsApp" />
        </a>
        <a href="#" className="offer-button">Teklif Al</a>
      </div>
    </footer>
  );
};

export default Footer; 