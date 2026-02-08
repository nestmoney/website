import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Footer from "@/components/sections/Footer";
import Download from "@/components/sections/Download";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nest Money | Family Finance App",
  description:
    "Nest Money helps families stay on top of bills, shared finances, and financial wellbeing in one place.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-secondary">
        <Navbar />
        {children}
        <Download />
        <Footer />
      </body>
    </html>
  );
}
