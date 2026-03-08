import Image from "next/image";
import { Hero } from "@/components/ui/Hero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { config, images } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

export const metadata = {
  title: "About Us | Sparkle & Shine",
  description: "Learn about Sparkle & Shine - professional cleaning services with skilled, trusted cleaners.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Sparkle & Shine"
        description="Professional cleaning services you can trust. We're committed to delivering spotless results with precision and professionalism."
      />

      {/* About Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images.about_us}
              alt="About Sparkle & Shine - Professional cleaning team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={75}
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At {config.site.name}, we believe that a clean space is essential for a healthy and happy life.
              Our mission is to provide exceptional cleaning services that exceed your expectations,
              making your life easier and your spaces spotless.
            </p>
            <p className="text-lg text-muted-foreground">
              We pride ourselves on our attention to detail, use of eco-friendly products, and commitment
              to customer satisfaction. Every member of our team is trained, insured, and background-checked
              to ensure your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We stand out from the competition with our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Icon name="CheckmarkCircle01" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality. Every clean is thorough, detailed, and meets the highest standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Icon name="Heart01" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                  <p className="text-muted-foreground">
                    Your satisfaction is our priority. We listen to your needs and tailor our services accordingly.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Icon name="Leaf01" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                  <p className="text-muted-foreground">
                    We use environmentally safe products that are effective yet gentle on your home and the planet.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Icon name="ShieldCheck01" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Trust & Reliability</h3>
                  <p className="text-muted-foreground">
                    All our cleaners are vetted, insured, and trustworthy. Your property is in safe hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
