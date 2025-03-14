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
  title: "Your Company Name",
  description: "Your company description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <TopBar />
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <MobileFooter />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
