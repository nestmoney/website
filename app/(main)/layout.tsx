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
  metadataBase: new URL("https://nestmoney.in"), //important change to real domain

  title: {
    default: "Nest Money | The family finance app",
    template: "%s | Nest Money",
  },
  description: "A home for your family finances. Manage all your family's utility and credit card bills in one place. Share important documents securely with your family members, so it is accessible when needed. Track all ongoing loans in one place and monitor each other's credit reports to maintain your family's overall financial wellbeing.",

  keywords: [
    "family finance",
    "nest",
    "nestmoney",
    "indian families",
    "credit cards",
    "money",
    "utility bills",
    "credit card bills",
    "electricity",
    "insurance",
    "loan repayment",
    "digital locker",
    "credit score",
    "credit report",
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
    description: "A home for your family finances",
    url: "https://nestmoney.in", //important change to real domain
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
    description: "A home for your family finances",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://nestmoney.in", //important change to real domain
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preload" as="image" href="/heroAnimePlaceholder.png" />
        <link rel="preload" as="image" href="/heroAnimeMobPlaceholder.png" />
        <link rel="preload" as="video" href="/heroAnime.mp4" type="video/mp4" />
        <link
          rel="preload"
          as="video"
          href="/heroAnimeMob.mp4"
          type="video/mp4"
        />
      </head>
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
              description: "A home for your family finances",
              url: "https://nestmoney.in", //important change to real domain
            }),
          }}
        />
      </body>
    </html>
  );
}
