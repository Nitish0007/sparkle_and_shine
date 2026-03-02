import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { config } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: config.site.name,
    template: `%s | ${config.site.name}`,
  },
  description: config.site.description,
  keywords: [
    "cleaning services",
    "bond cleaning",
    "exit cleaning",
    "carpet cleaning",
    "house cleaning",
    "professional cleaning",
    "Brisbane cleaning",
  ],
  authors: [{ name: config.site.name }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://sparkleandshine.com.au",
    siteName: config.site.name,
    title: config.site.name,
    description: config.site.description,
  },
  robots: {
    index: true,
    follow: true,
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
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
