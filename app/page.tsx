import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/ui/Hero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Button } from "@/components/ui/button";
import { config, services, images } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Sydney, Australia | Sparkle & Shine",
  description: "Top-rated cleaning services in Sydney, Australia. Sparkle & Shine provides expert bond cleaning, carpet cleaning, and end-of-lease cleaning. Get a free quote now!",
  keywords: ["cleaning services Australia", "cleaning services Sydney", "bond cleaning Sydney", "Sparkle & Shine", "professional cleaners"],
  openGraph: {
    title: "Expert Cleaning Services in Sydney | Sparkle & Shine",
    description: "Book our professional cleaners in Sydney for a spotless home. Bond back guarantee and satisfaction assured.",
  }
};

export default function HomePage() {
  const featuredServices = services.services.slice(0, 6);
  const allFeatures = config.features;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Professional Cleaning Services Sydney, Australia"
        description="Sparkle & Shine offers top-tier cleaning services in Sydney, Australia. Whether it's bond cleaning or regular maintenance, our expert team ensures your home is spotless."
        ctaText="Get a Free Quote"
        ctaLink="/get-a-quote"
        showSecondaryCta={true}
        secondaryCtaText="View Services"
        secondaryCtaLink="/services"
      />

      {/* Home Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[450px] md:h-[700px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images.home_page_image}
              alt="Professional cleaning services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={75}
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why {config.site.name} Stands Out from the Rest
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a full suite of residential and rental cleaning services to ensure your home or property is spotless, stress-free, and ready for inspection or handover.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Full-Range Cleaning Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              We proudly serve all suburbs across the Sydney region
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {services.areas.map((area, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-3 rounded-lg bg-background hover:bg-primary/5 transition-colors"
              >
                <Icon name="Location01" size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-primary/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Goal is to Wow You With Every Clean
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with a free quote today. No obligations, just professional service.
            </p>
            <Button asChild size="lg">
              <Link href="/get-a-quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
