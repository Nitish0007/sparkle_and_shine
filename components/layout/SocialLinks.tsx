import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SocialMediaLink } from "@/lib/data";

interface SocialLinksProps {
  links: SocialMediaLink[];
  className?: string;
}

const iconMap: Record<string, string> = {
  facebook: "Facebook01",
  instagram: "Instagram01",
  twitter: "Twitter01",
  youtube: "Youtube01",
  linkedin: "Linkedin01",
};

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {links.map((link) => {
        const iconName = iconMap[link.icon.toLowerCase()] || "Share01";
        return (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={link.name}
          >
            <Icon name={iconName} size={24} />
          </Link>
        );
      })}
    </div>
  );
}
