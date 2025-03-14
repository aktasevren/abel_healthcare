import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import MobileFooter from "@/components/MobileFooter";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abel Healthcare Medical",
  description: "Abel Healthcare Medical - Sağlık ve Medikal Çözümler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/media/logo-text.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <TopBar />
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <MobileFooter />
              <a
                href="https://wa.me/1234567890" // Buraya kendi WhatsApp numaranızı ekleyin
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex flex-col items-center hidden md:flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/media/whatsapp.png" alt="WhatsApp" className="w-8 h-8 mb-1" />
                <span className="text-sm">Canlı Destek</span>
              </a>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
