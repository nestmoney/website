import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Download from "@/components/sections/Download";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nestmoney.app"), //important change to real domain

  title: {
    default: "Nest Money | Family Finance App",
    template: "%s | Nest Money",
  },

  description:
    "Nest Money helps families manage shared expenses, track bills, and improve financial wellbeing in one simple app.",

  keywords: [
    "family finance app",
    "shared expense tracker",
    "bill management app",
    "household budgeting",
    "family budgeting tool",
  ],

  authors: [{ name: "Nest Money Team" }],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Nest Money | Family Finance App",
    description:
      "Track bills, manage shared finances, and improve family financial wellbeing with Nest Money.",
    url: "https://nestmoney.app", //important change to real domain
    siteName: "Nest Money",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nest Money - Family Finance App",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nest Money | Family Finance App",
    description: "Manage shared expenses and bills with Nest Money.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://nestmoney.app", //important change to real domain
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-secondary">
        <Navbar />
        {children}
        <Download />
        <Footer />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Nest Money",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              description:
                "Nest Money helps families manage shared finances and track bills.",
              url: "https://nestmoney.app", //important change to real domain
            }),
          }}
        />
      </body>
    </html>
  );
}
