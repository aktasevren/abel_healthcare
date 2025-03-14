import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-gray-800 text-white py-8">
      <div className="footer-top">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="single-footer">
              <h2 className="text-2xl font-bold">Abel Healthcare</h2>
              <p>Medikal Ticaret Limited Şirketi</p>
              <ul className="flex space-x-4 mt-4">
                <li>
                  <a href="https://www.instagram.com/abelhealthcaremedikal/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abelhealthcaremedikal/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <i className="icofont-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/abelhealthcaremedikal/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-footer f-link">
              <h2 className="text-2xl font-bold">Hızlı Bağlantılar</h2>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <ul>
                  <li>
                    <Link href="/" legacyBehavior>
                      <a className="flex items-center">
                        <i className="fa fa-caret-right mr-2" aria-hidden="true"></i>Anasayfa
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/urun-grup" legacyBehavior>
                      <a className="flex items-center">
                        <i className="fa fa-caret-right mr-2" aria-hidden="true"></i>Ürünlerimiz
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teknikservis" legacyBehavior>
                      <a className="flex items-center">
                        <i className="fa fa-caret-right mr-2" aria-hidden="true"></i>Teknik Servis
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/kurumsal" legacyBehavior>
                      <a className="flex items-center">
                        <i className="fa fa-caret-right mr-2" aria-hidden="true"></i>Kurumsal
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/iletisim" legacyBehavior>
                      <a className="flex items-center">
                        <i className="fa fa-caret-right mr-2" aria-hidden="true"></i>İletişim
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 