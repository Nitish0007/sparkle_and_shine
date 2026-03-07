import Image from "next/image";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Hero } from "@/components/ui/Hero";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services | Sparkle & Shine",
  description: "Comprehensive cleaning services including bond cleaning, exit cleaning, carpet cleaning, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Cleaning Services"
        description="Comprehensive cleaning solutions for every need. From bond cleaning to regular maintenance, we've got you covered."
      />

      {/* Services Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/move_in_move_out.png"
              alt="Our cleaning services - Professional cleaning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.services.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
