import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/Icon";
import { config } from "@/lib/data";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
            <Icon name="FileQuestion01" size={48} className="text-primary" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-primary">404</h1>
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>
        
        {/* Description */}
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
          Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Icon name="Home01" size={20} className="mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              <Icon name="Sparkle01" size={20} className="mr-2" />
              View Services
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-sm text-primary hover:underline">
              Services
            </Link>
            <Link href="/about" className="text-sm text-primary hover:underline">
              About Us
            </Link>
            <Link href="/get-a-quote" className="text-sm text-primary hover:underline">
              Get a Quote
            </Link>
            <Link href="/contact" className="text-sm text-primary hover:underline">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-2">
            Need help? Contact us at:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a 
              href={`tel:${config.site.phone}`} 
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <Icon name="PhoneCalling01" size={16} />
              <span>{config.site.phone}</span>
            </a>
            <a 
              href={`mailto:${config.site.email}`} 
              className="flex items-center space-x-2 text-primary hover:underline"
            >
              <Icon name="Mail01" size={16} />
              <span>{config.site.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
