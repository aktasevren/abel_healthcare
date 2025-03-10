const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Next.js + Tailwind</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Modern web uygulamaları geliştirmek için mükemmel bir kombinasyon.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="/hakkimizda" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/iletisim" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Next.js + Tailwind. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 