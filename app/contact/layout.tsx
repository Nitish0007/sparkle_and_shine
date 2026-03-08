import { Metadata } from 'next';
import { config } from '@/lib/data';

export const metadata: Metadata = {
  title: `Contact Us | ${config.site.name} - Best Cleaning Services in Sydney`,
  description: "Get a free quote for professional cleaning services in Sydney, Australia. Contact Sparkle & Shine for bond cleaning, carpet cleaning, and more.",
  keywords: ["contact Sparkle & Shine", "cleaning quote Sydney", "professional cleaners contact", "cleaning services Australia"],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
