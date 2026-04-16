import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsapp/WhatsApp";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}