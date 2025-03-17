import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image"; // Image import edildi
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import MobileFooter from "@/components/MobileFooter";
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abel Health Care Medikal",
  description: "Abel Health Care Medikal - Tıbbi Cihaz ve Sarf Malzemeleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/media/logo-text.png" type="image/png" />
      </head>
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <TopBar />
              <Navbar />
              <main style={{ flex: 1 }}>{children}</main>
              <MobileFooter />
              <Footer />
              <a
                href="https://wa.me/+905335228791" // Buraya kendi WhatsApp numaranızı ekleyin
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex flex-col items-center hidden md:flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/media/whatsapp.png"
                  alt="WhatsApp Canlı Destek"
                  width={32} // Boyutları optimize ettim
                  height={32}
                  className="mb-1"
                />
                <span className="text-sm">Canlı Destek</span>
              </a>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
