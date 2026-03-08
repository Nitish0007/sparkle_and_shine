import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/Icon";
import { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
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

export function ServiceCard({ service }: ServiceCardProps) {
  const iconName = iconMap[service.icon] || "Sparkle01";

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon name={iconName} size={24} />
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </div>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Icon name="CheckmarkCircle01" size={16} className="mt-0.5 text-primary flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/services/${service.id}/`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
