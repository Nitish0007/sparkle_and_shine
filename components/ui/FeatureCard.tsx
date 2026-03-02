import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/Icon";
import { Feature } from "@/lib/data";

interface FeatureCardProps {
  feature: Feature;
}

const iconMap: Record<string, string> = {
  "users-check": "UsersCheck01",
  "dollar-circle": "DollarCircle01",
  "tools": "Tools01",
  "shield-check": "ShieldCheck01",
  "calendar-check": "CalendarCheck01",
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const iconName = iconMap[feature.icon] || "Sparkle01";

  return (
    <Card className="h-full text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon name={iconName} size={32} />
          </div>
        </div>
        <CardTitle className="text-xl">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {feature.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
