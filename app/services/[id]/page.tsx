import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/Icon";
import { services, config } from "@/lib/data";
import { Hero } from "@/components/ui/Hero";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const iconMap: Record<string, string> = {
  "shield-check": "ShieldCheck01",
  "door-exit": "Door01",
  "document-check": "DocumentCheck01",
  "truck": "Truck01",
  "carpet": "Carpet01",
  "home-check": "HomeCheck01",
  "bug": "Bug01",
  "home": "Home01",
};

// Service-specific content and images
const serviceDetails: Record<string, {
  longDescription: string;
  imageUrl: string;
  whatWeClean: string[];
  whyChooseUs: string[];
  process: Array<{ step: number; title: string; description: string }>;
}> = {
  "bond-cleaning": {
    longDescription: "Our comprehensive bond cleaning service is designed to help you get your full bond back. We understand the stress of moving out and the importance of meeting your landlord's or property manager's expectations. Our experienced team follows a detailed checklist to ensure every corner of your rental property is spotless and inspection-ready.",
    imageUrl: "/assets/bond_cleaning.jpg",
    whatWeClean: [
      "All rooms including bedrooms, living areas, and hallways",
      "Kitchen: appliances, cupboards, drawers, and benchtops",
      "Bathrooms: tiles, grout, mirrors, and fixtures",
      "Windows: inside and outside where accessible",
      "Carpets and floors: vacuuming and mopping",
      "Walls: marks, scuffs, and fingerprints",
      "Light fixtures and ceiling fans",
      "Skirting boards and door frames",
      "Garage and storage areas"
    ],
    whyChooseUs: [
      "Bond return guarantee - we'll return if needed",
      "Free re-clean within 72 hours if required",
      "All equipment and eco-friendly supplies included",
      "Available 7 days a week for your convenience",
      "Fully insured and professional team"
    ],
    process: [
      {
        step: 1,
        title: "Book Your Service",
        description: "Contact us to schedule your bond cleaning. We'll confirm the date and time that works best for you."
      },
      {
        step: 2,
        title: "Pre-Cleaning Inspection",
        description: "Our team arrives and conducts a thorough inspection to identify all areas that need attention."
      },
      {
        step: 3,
        title: "Deep Cleaning",
        description: "We perform a comprehensive clean using professional-grade equipment and eco-friendly products."
      },
      {
        step: 4,
        title: "Final Inspection",
        description: "We do a final walkthrough to ensure everything meets the highest standards before you hand over the keys."
      }
    ]
  },
  "exit-cleaning": {
    longDescription: "Moving out can be overwhelming, but our exit cleaning service makes it easy. We provide a complete deep clean that covers every surface, appliance, and corner of your property. Our goal is to leave your property looking brand new, ensuring a smooth handover process.",
    imageUrl: "/assets/move_in_move_out.png",
    whatWeClean: [
      "Complete interior deep cleaning",
      "All appliances: oven, fridge, dishwasher, and more",
      "Bathrooms: thorough sanitization and scrubbing",
      "Windows and window sills",
      "Carpets: professional steam cleaning",
      "Walls and ceilings",
      "Light fixtures and fittings",
      "Cupboards and drawers",
      "Garage and outdoor areas"
    ],
    whyChooseUs: [
      "Complete exit cleaning package",
      "Bond return guarantee",
      "Professional-grade equipment",
      "Flexible scheduling to fit your move",
      "Eco-friendly cleaning products"
    ],
    process: [
      {
        step: 1,
        title: "Schedule Your Exit Clean",
        description: "Book your exit cleaning service at a time that suits your moving schedule."
      },
      {
        step: 2,
        title: "Comprehensive Cleaning",
        description: "Our team performs a thorough deep clean of every room and surface."
      },
      {
        step: 3,
        title: "Appliance Cleaning",
        description: "We clean all appliances inside and out, ensuring they're spotless."
      },
      {
        step: 4,
        title: "Final Walkthrough",
        description: "We complete a final inspection to ensure everything is perfect for handover."
      }
    ]
  },
  "end-of-lease-cleaning": {
    longDescription: "End-of-lease cleaning requires attention to detail and meeting strict standards. Our professional team understands exactly what landlords and property managers look for during inspections. We ensure every surface, skirting board, and appliance meets the highest standards for a successful inspection.",
    imageUrl: "/assets/vacate_cleaning.png",
    whatWeClean: [
      "All rooms: comprehensive deep cleaning",
      "Kitchen: appliances, cupboards, and surfaces",
      "Bathrooms: tiles, grout, and fixtures",
      "Windows: inside and outside cleaning",
      "Carpets: professional cleaning",
      "Walls: marks and scuffs removal",
      "Skirting boards and architraves",
      "Light fixtures and switches",
      "Blinds and curtains"
    ],
    whyChooseUs: [
      "Meets strict landlord standards",
      "Comprehensive property inspection included",
      "Professional-grade equipment",
      "Eco-friendly cleaning products",
      "Satisfaction guarantee"
    ],
    process: [
      {
        step: 1,
        title: "Property Assessment",
        description: "We assess your property to understand the scope of work required."
      },
      {
        step: 2,
        title: "Professional Cleaning",
        description: "Our team performs a thorough clean using professional equipment."
      },
      {
        step: 3,
        title: "Quality Check",
        description: "We conduct a detailed quality check to ensure all standards are met."
      },
      {
        step: 4,
        title: "Inspection Ready",
        description: "Your property is now ready for the final inspection with confidence."
      }
    ]
  },
  "move-in-move-out-cleaning": {
    longDescription: "Whether you're moving into a new home or leaving one behind, our move-in/move-out cleaning service ensures your property is perfectly sanitized and fresh. We make the transition smooth by handling all the cleaning, so you can focus on settling in or moving out.",
    imageUrl: "/assets/move_in_move_out.png",
    whatWeClean: [
      "Complete property sanitization",
      "All rooms: deep cleaning",
      "Kitchen: appliances and surfaces",
      "Bathrooms: thorough cleaning and sanitization",
      "Floors: vacuuming, mopping, and polishing",
      "Windows: inside cleaning",
      "Cupboards and storage areas",
      "Light fixtures and fittings",
      "Fresh and ready for new tenants"
    ],
    whyChooseUs: [
      "Complete sanitization included",
      "Fresh and move-in ready",
      "Flexible scheduling",
      "Complete property preparation",
      "Professional and reliable service"
    ],
    process: [
      {
        step: 1,
        title: "Book Your Service",
        description: "Schedule your cleaning service to align with your move-in or move-out date."
      },
      {
        step: 2,
        title: "Deep Sanitization",
        description: "We perform a comprehensive clean and sanitization of the entire property."
      },
      {
        step: 3,
        title: "Property Preparation",
        description: "We ensure everything is fresh, clean, and ready for the next occupants."
      },
      {
        step: 4,
        title: "Final Check",
        description: "We complete a final inspection to ensure everything is perfect."
      }
    ]
  },
  "carpet-cleaning": {
    longDescription: "Revive your carpets with our professional steam carpet cleaning service. We use advanced steam cleaning technology to remove deep-seated dirt, stains, and allergens. Our service not only makes your carpets look brand new but also creates a healthier environment for your family.",
    imageUrl: "/assets/carpet_cleaning.png",
    whatWeClean: [
      "Deep steam cleaning of all carpets",
      "Stain removal and treatment",
      "Allergen elimination",
      "Odor neutralization",
      "High-traffic area treatment",
      "Edge and corner cleaning",
      "Carpet protection treatment",
      "Quick drying process"
    ],
    whyChooseUs: [
      "Advanced steam cleaning technology",
      "Effective stain removal",
      "Allergen elimination for healthier homes",
      "Odor neutralization",
      "Fast drying time"
    ],
    process: [
      {
        step: 1,
        title: "Pre-Inspection",
        description: "We inspect your carpets to identify stains, high-traffic areas, and special requirements."
      },
      {
        step: 2,
        title: "Pre-Treatment",
        description: "We apply pre-treatment solutions to loosen dirt and treat stains."
      },
      {
        step: 3,
        title: "Steam Cleaning",
        description: "We use professional steam cleaning equipment to deep clean your carpets."
      },
      {
        step: 4,
        title: "Post-Treatment",
        description: "We apply protective treatments and ensure quick drying for immediate use."
      }
    ]
  },
  "vacate-cleaning": {
    longDescription: "Moving out soon? Our vacate cleaning service guarantees a spotless finish, making your handover process simple and stress-free. We understand the importance of getting your bond back, and our comprehensive cleaning service ensures your property meets all inspection requirements.",
    imageUrl: "/assets/vacate_cleaning.png",
    whatWeClean: [
      "Complete property clean",
      "All rooms: bedrooms, living areas, and more",
      "Kitchen: thorough cleaning of all appliances",
      "Bathrooms: deep cleaning and sanitization",
      "Windows: inside and outside",
      "Carpets: professional cleaning",
      "Walls and skirting boards",
      "Light fixtures and fittings",
      "Garage and storage areas"
    ],
    whyChooseUs: [
      "Complete property clean",
      "Handover ready guarantee",
      "Bond back guarantee",
      "Professional and experienced team",
      "Available 7 days a week"
    ],
    process: [
      {
        step: 1,
        title: "Schedule Your Vacate Clean",
        description: "Book your vacate cleaning service to align with your moving schedule."
      },
      {
        step: 2,
        title: "Comprehensive Cleaning",
        description: "Our team performs a thorough clean of every room and surface."
      },
      {
        step: 3,
        title: "Quality Assurance",
        description: "We ensure all areas meet inspection standards."
      },
      {
        step: 4,
        title: "Handover Ready",
        description: "Your property is now ready for a smooth handover process."
      }
    ]
  },
  "pest-control": {
    longDescription: "We provide safe and eco-friendly pest control treatments that effectively eliminate insects and rodents. Our service is ideal for end-of-lease requirements or regular maintenance. We use products that are safe for pets and children while being highly effective against pests.",
    imageUrl: "/assets/pest_control.png",
    whatWeClean: [
      "Insect treatment and elimination",
      "Rodent control and prevention",
      "Safe and eco-friendly solutions",
      "Pet and child-safe treatments",
      "Prevention strategies",
      "Regular maintenance programs",
      "End-of-lease pest control",
      "Comprehensive property treatment"
    ],
    whyChooseUs: [
      "Eco-friendly solutions",
      "Safe for pets and children",
      "Effective treatment and prevention",
      "Professional pest control experts",
      "Long-lasting results"
    ],
    process: [
      {
        step: 1,
        title: "Inspection",
        description: "We conduct a thorough inspection to identify pest issues and entry points."
      },
      {
        step: 2,
        title: "Treatment Plan",
        description: "We develop a customized treatment plan based on your specific needs."
      },
      {
        step: 3,
        title: "Application",
        description: "We apply safe, eco-friendly treatments to eliminate pests."
      },
      {
        step: 4,
        title: "Prevention",
        description: "We provide prevention strategies and follow-up treatments as needed."
      }
    ]
  }
};

export async function generateStaticParams() {
  return services.services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const resolvedParams = await params;
  const service = services.services.find((s) => s.id === resolvedParams.id);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | ${config.site.name}`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const resolvedParams = await params;
  const service = services.services.find((s) => s.id === resolvedParams.id);
  const detail = service ? serviceDetails[resolvedParams.id] : null;

  if (!service || !detail) {
    notFound();
  }

  const iconName = iconMap[service.icon] || "Sparkle01";

  return (
    <>
      <Hero
        title={service.title}
        description={service.description}
        hideButtons={true}
      />

      {/* Service Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={detail.imageUrl}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon name={iconName} size={32} />
              </div>
              <h2 className="text-3xl font-bold">About This Service</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {detail.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Clean</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.whatWeClean.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-background border hover:bg-primary/5 transition-colors"
                >
                  <Icon name="CheckmarkCircle01" size={20} className="mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detail.whyChooseUs.map((item, index) => {
                // Map items to appropriate icons based on content
                const getIconForItem = (text: string): string => {
                  const lowerText = text.toLowerCase();
                  if (lowerText.includes("guarantee") || lowerText.includes("bond") || lowerText.includes("insured") || lowerText.includes("satisfaction")) {
                    return "ShieldCheck01";
                  }
                  if (lowerText.includes("free") || lowerText.includes("re-clean") || lowerText.includes("return")) {
                    return "CheckmarkCircle01";
                  }
                  if (lowerText.includes("equipment") || lowerText.includes("professional-grade") || lowerText.includes("technology") || lowerText.includes("tools")) {
                    return "Tools01";
                  }
                  if (lowerText.includes("eco-friendly") || lowerText.includes("green") || lowerText.includes("environment")) {
                    return "Leaf01";
                  }
                  if (lowerText.includes("7 days") || lowerText.includes("available") || lowerText.includes("scheduling") || lowerText.includes("flexible")) {
                    return "CalendarCheck01";
                  }
                  if (lowerText.includes("team") || lowerText.includes("professional") || lowerText.includes("experts") || lowerText.includes("experienced")) {
                    return "UsersCheck01";
                  }
                  if (lowerText.includes("complete") || lowerText.includes("comprehensive") || lowerText.includes("thorough")) {
                    return "CheckmarkCircle01";
                  }
                  if (lowerText.includes("effective") || lowerText.includes("fast") || lowerText.includes("quick") || lowerText.includes("long-lasting")) {
                    return "Sparkle01";
                  }
                  return "CheckmarkCircle01"; // Default icon
                };

                return (
                  <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start space-x-3">
                        <Icon name={getIconForItem(item)} size={24} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Process</h2>
            <div className="space-y-6">
              {detail.process.map((step) => (
                <Card key={step.step} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                      <div className="flex h-16 w-16 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl sm:text-xl flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                        <CardDescription className="text-base">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-background border"
                >
                  <Icon name="CheckmarkCircle01" size={20} className="mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-primary/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free quote for {service.title} today. No obligations, just professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/get-a-quote">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${config.site.phone}`} className="flex items-center space-x-2">
                  <Icon name="PhoneCalling01" size={20} />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
