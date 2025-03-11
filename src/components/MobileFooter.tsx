import React from 'react';
import './MobileFooter.css'; // CSS dosyasını import ediyorum

const MobileFooter = () => {
  return (
    <footer>
      <div className="mobile-buttons">
        <a href="https://wa.me/1234567890?text=Merhaba" className="whatsapp-button">
          <img src="/media/whatsapp.png" alt="WhatsApp" /> WhatsApp
        </a>
        <a href="#" className="offer-button">Teklif Al</a>
      </div>
    </footer>
  );
};

export default MobileFooter; 