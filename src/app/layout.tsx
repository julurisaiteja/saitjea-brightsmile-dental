import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
const heading = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: ["400","500","600","700"] });
const body = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ["400","600","700"] });
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = { title: "BrightSmile Dental", description: "Demo storefront" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="friendly-vector">
      <body className={`${heading.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            {children}
            <Footer />
            <AiAssistant />
            <StickyMobileCta primaryHref="/matcher" primaryLabel="Match your care plan" />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
