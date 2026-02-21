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
  metadataBase: new URL("https://nestmoney.in"),

  title: {
    default: "Nest Money | The family finance app",
    template: "%s | Nest Money",
  },

  description:
    "Nest Money is a family finance app for Indian families. Manage all your family's utility and credit card bills in one place. Share important documents securely with your family members, so it is accessible when needed. Track all ongoing loans in one place and monitor each other's credit reports to maintain your family's overall financial wellbeing.",

  keywords: [
    "family finance",
    "finance app",
    "family finance app for India",
    "finance app for families",
    "family",
    "india's family finance app",
    "indian families",
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
    title: "Nest Money | The family finance app",
    description:
      "Nest Money is a family finance app for Indian families. Manage all your family's utility and credit card bills in one place. Share important documents securely with your family members, so it is accessible when needed. Track all ongoing loans in one place and monitor each other's credit reports to maintain your family's overall financial wellbeing.",
    url: "https://nestmoney.in",
    siteName: "Nest Money",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nest Money The family finance app",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nest Money | The family finance app",
    description:
      "Nest Money is a family finance app for Indian families. Manage all your family's utility and credit card bills in one place. Share important documents securely with your family members, so it is accessible when needed. Track all ongoing loans in one place and monitor each other's credit reports to maintain your family's overall financial wellbeing.",
    images: ["/og-image.png"],
    creator: "@nestmoney",
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
                "Nest Money is a family finance app for Indian families. Manage all your family's utility and credit card bills in one place. Share important documents securely with your family members, so it is accessible when needed. Track all ongoing loans in one place and monitor each other's credit reports to maintain your family's overall financial wellbeing.",
              url: "https://nestmoney.in",
              image: "https://nestmoney.in/og-image.png",
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
