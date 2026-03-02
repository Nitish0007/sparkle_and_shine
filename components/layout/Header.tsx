"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/get-a-quote", label: "Get a Quote" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Icon name="Sparkle01" size={24} />
            </div>
            <span className="text-xl font-bold">{config.site.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild>
              <Link href="/get-a-quote">Get a Free Quote</Link>
            </Button>
            <a
              href={`tel:${config.site.phone}`}
              className="flex items-center space-x-2 text-sm font-medium text-primary hover:underline"
            >
              <Icon name="PhoneCalling01" size={20} />
              <span>{config.site.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "Close01" : "Menu01"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/get-a-quote" onClick={() => setIsMenuOpen(false)}>
                Get a Free Quote
              </Link>
            </Button>
            <a
              href={`tel:${config.site.phone}`}
              className="flex items-center space-x-2 text-sm font-medium text-primary"
            >
              <Icon name="PhoneCalling01" size={20} />
              <span>{config.site.phone}</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
