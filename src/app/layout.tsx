import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import MobileFooter from "@/components/MobileFooter";
import Footer from '@/components/Footer';
import WhatsAppSupport from '@/components/WhatsAppSupport';

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
              <WhatsAppSupport />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
