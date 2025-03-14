import React from "react";
import Image from "next/image"; // Image bileşeni eklendi
import "./MobileFooter.css"; // CSS dosyasını import ediyorum

const MobileFooter = () => {
  return (
    <footer>
      <div className="mobile-buttons">
        <a
          href="https://wa.me/1234567890?text=Merhaba"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/media/whatsapp.png"
            alt="WhatsApp"
            width={24} // Boyutları optimize ettim
            height={24}
          />
          WhatsApp
        </a>
        <a href="#" className="offer-button">
          Teklif Al
        </a>
      </div>
    </footer>
  );
};

export default MobileFooter;
