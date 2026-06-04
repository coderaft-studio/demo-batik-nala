import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Batik Nala — Warisan Budaya, Gaya Modern",
  description: "Koleksi batik tulis dan cap premium dari pengrajin lokal Yogyakarta. Autentik, berkualitas, dan penuh makna budaya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
