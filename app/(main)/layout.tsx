import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Download from "@/components/sections/Download";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nestmoney.in"),

  title: {
    default: "Nest Money | India's family finance app",
    template: "%s | Nest Money",
  },

  description:
    "Nest is a shared space for your family, where everyone can see finances, pay each other's bills, keep track of financial wellbeing, and more",

  keywords: [
    "nestmoney",
    "family finance app",
    "family finance app india",
    "india family finance app",
    "family finance",
    "finance app",
    "family finance app for India",
    "finance app for families",
    "family",
    "India's family finance app",
    "Indian families",
    "Indian family finance app",
    "bill track",
    "credit score",
    "Nest Money",
    "utility bills",
    "electricity bill",
    "utilities",
    "credit card",
    "credit card bills",
    "family expense tracker",
    "nest",
    "nest money",
    "nestmoney in",
    "nestmoney app",
    " nest money",
    "financial management app India",
  ],

  authors: [{ name: "Nest Money Team" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
  },

  alternates: {
    canonical: "https://nestmoney.in",
  },

  openGraph: {
    title: "Nest Money | India's family finance app",
    description:
      "Nest is a shared space for your family, where everyone can see finances, pay each other's bills, keep track of financial wellbeing, and more",
    url: "https://nestmoney.in",
    siteName: "Nest Money",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-img.png",
        width: 1200,
        height: 630,
        alt: "Nest Money | India's family finance app",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nest Money | India's family finance app",
    description:
      "Nest is a shared space for your family, where everyone can see finances, pay each other's bills, keep track of financial wellbeing, and more",
    images: ["/og-img.png"],
    creator: "@nestmoney",
  },

  other: {
    "al:ios:app_store_id": "6756575032",
    "al:ios:app_name": "Nest Money",
    "al:ios:url": "https://app.nestmoney.in",

    "al:android:package": "in.legentree.nestmoney",
    "al:android:app_name": "Nest Money",
    "al:android:url": "https://app.nestmoney.in",

    "al:web:url": "https://nestmoney.in",
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

        {/* Structured Data for SEO */}
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
                "Nest is a shared space for your family, where everyone can see finances, pay each other's bills, keep track of financial wellbeing, and more",
              url: "https://nestmoney.in",
              image: "https://nestmoney.in/og-img.png",
              author: {
                "@type": "Organization",
                name: "Nest Money",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
