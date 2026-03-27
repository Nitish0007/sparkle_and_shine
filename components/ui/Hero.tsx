import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showSecondaryCta?: boolean;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  hideButtons?: boolean;
}

export function Hero({
  title,
  description,
  ctaText = "Get a Free Quote",
  ctaLink = "/get-a-quote",
  showSecondaryCta = false,
  secondaryCtaText,
  secondaryCtaLink,
  hideButtons = false,
}: HeroProps) {
  return (
    <section className="relative pt-20 pb-10 md:pt-32 md:pb-16 bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground mb-8">
              {description}
            </p>
          )}
          {!hideButtons && (
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button asChild className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20 animate-breath hover:animate-none hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
              {showSecondaryCta && secondaryCtaText && secondaryCtaLink && (
                <Button asChild variant="outline" className="h-12 px-6 text-base font-semibold border-2 hover:bg-primary/5 transition-colors duration-200">
                  <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
