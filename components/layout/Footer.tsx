import Link from "next/link";
import { config } from "@/lib/data";
import { SocialLinks } from "./SocialLinks";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/services/bond-cleaning/", label: "Bond Cleaning" },
    { href: "/services/exit-cleaning/", label: "Exit Cleaning" },
    { href: "/services/end-of-lease-cleaning/", label: "End-of-Lease Cleaning" },
    { href: "/services/move-in-move-out-cleaning/", label: "Move-In/Move-Out Cleaning" },
    { href: "/services/carpet-cleaning/", label: "Carpet Cleaning" },
    { href: "/services/vacate-cleaning/", label: "Vacate Cleaning" },
    { href: "/services/pest-control/", label: "Pest Control" },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/assets/logo.png" alt={config.site.name} width={160} height={160} className="h-14 w-auto max-h-16 object-contain" />
              <span className="text-xl font-semibold text-foreground hidden sm:block">{config.site.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              {config.site.description}
            </p>
            <SocialLinks links={config.socialMedia} />
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/get-a-quote"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <Icon name="Location01" size={20} className="mt-0.5 flex-shrink-0" />
                <span>{config.site.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="PhoneCalling01" size={20} className="flex-shrink-0" />
                <a
                  href={`tel:${config.site.phone}`}
                  className="hover:text-foreground transition-colors"
                >
                  {config.site.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail01" size={20} className="flex-shrink-0" />
                <a
                  href={`mailto:${config.site.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {config.site.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Clock01" size={20} className="flex-shrink-0" />
                <span>{config.site.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {config.site.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
