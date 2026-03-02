import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  showSecondaryCta?: boolean;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function Hero({
  title,
  description,
  ctaText = "Get a Free Quote",
  ctaLink = "/get-a-quote",
  showSecondaryCta = false,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
            {showSecondaryCta && secondaryCtaText && secondaryCtaLink && (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
