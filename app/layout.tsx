import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { config } from "@/lib/data";
import { getLocalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sparkleandshinecleaningsydney.au"),
  title: {
    default: `${config.site.name} | Professional Cleaning Services in Sydney, Australia`,
    template: `%s | ${config.site.name}`,
  },
  description: "Experience the best professional cleaning services in Sydney and across Australia with Sparkle & Shine. We specialize in bond cleaning, exit cleaning, carpet cleaning, and more with a satisfaction guarantee.",
  keywords: [
    "cleaning services Australia",
    "cleaning services Sydney",
    "Sparkle & Shine",
    "Sparkle and Shine cleaning",
    "Sparkle and Shine cleaning services",
    "Sparkle and Shine Sydney",
    "bond cleaning Sydney",
    "exit cleaning Australia",
    "carpet cleaning Sydney",
    "professional cleaners Sydney",
    "end of lease cleaning Sydney",
    "vacate cleaning Australia",
    "pest control Sydney",
  ],
  authors: [{ name: config.site.name }],
  creator: config.site.name,
  publisher: config.site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://sparkleandshinecleaningsydney.au",
    siteName: config.site.name,
    title: `${config.site.name} | Top-Rated Cleaning Services in Sydney`,
    description: "Looking for reliable cleaning services in Australia? Sparkle & Shine offers expert bond, carpet, and office cleaning in Sydney. Get your free quote today!",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: `${config.site.name} - Professional Cleaning Sydney`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.site.name} | Cleaning Services Sydney`,
    description: "Professional and reliable cleaning services across Sydney, Australia. Bond cleaning, carpet cleaning, and more.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
    shortcut: "/assets/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = getLocalBusinessSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FloatingCallButton />
      </body>
    </html>
  );
}
