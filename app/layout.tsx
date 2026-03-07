import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
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
    "professional cleaning",
    "Sydney cleaning",
  ],
  authors: [{ name: config.site.name }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://sparkleandshine.com.au",
    siteName: config.site.name,
    title: config.site.name,
    description: config.site.description,
    images: [
      {
        url: "/assets/logo.png",
        width: 160,
        height: 160,
        alt: config.site.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
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
  return (
    <html lang="en">
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
