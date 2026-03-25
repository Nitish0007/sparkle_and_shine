"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  SparklesIcon,
  CallingIcon,
  LocationIcon,
  MailIcon,
  ClockIcon,
  MenuIcon,
  Cancel01Icon,
  CheckCircle,
  ShieldCheck,
  DoorIcon,
  DocumentCodeIcon,
  TruckIcon,
  HomeIcon,
  PhoneCheckIcon,
  BugIcon,
  UserCheckIcon,
  DollarCircleIcon,
  ToolsIcon,
  CalendarCheckInIcon,
  FacebookIcon,
  Facebook02Icon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
  ShareIcon,
  HatIcon,
  LeafIcon,
} from "@hugeicons/core-free-icons";

// Icon name to component mapping
const iconMap: Record<string, any> = {
  // Common icons
  "Sparkle01": SparklesIcon,
  "PhoneCalling01": CallingIcon,
  "Location01": LocationIcon,
  "Mail01": MailIcon,
  "Clock01": ClockIcon,
  "Menu01": MenuIcon,
  "Close01": Cancel01Icon,
  "CheckmarkCircle01": CheckCircle,
  "AlertCircle01": Cancel01Icon, // Using Cancel01Icon as alert/error icon

  // Service icons
  "ShieldCheck01": ShieldCheck,
  "Door01": DoorIcon,
  "DocumentCheck01": DocumentCodeIcon,
  "Truck01": TruckIcon,
  "Home01": HomeIcon,
  "HomeCheck01": PhoneCheckIcon, // Using PhoneCheckIcon as fallback
  "Bug01": BugIcon,

  // Feature icons
  "UsersCheck01": UserCheckIcon,
  "DollarCircle01": DollarCircleIcon,
  "Tools01": ToolsIcon,
  "CalendarCheck01": CalendarCheckInIcon,

  // Social media icons
  "Facebook01": FacebookIcon,
  "Facebook02": Facebook02Icon,
  "Instagram01": InstagramIcon,
  "Twitter01": TwitterIcon,
  "Youtube01": YoutubeIcon,
  "Linkedin01": LinkedinIcon,
  "Share01": ShareIcon,

  // Other icons
  "Heart01": HatIcon, // Using HatIcon as fallback (HeartIcon doesn't exist)
  "Leaf01": LeafIcon,

  // Carpet icon fallback
  "Carpet01": HomeIcon, // Fallback since Carpet01 might not exist
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, size = 24, className = "", strokeWidth = 2 }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return <span className={className}>⚠</span>;
  }

  return (
    <HugeiconsIcon
      icon={IconComponent}
      size={size}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
