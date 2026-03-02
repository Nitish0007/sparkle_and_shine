"use client";

import { config } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${config.site.phone}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-110 active:scale-95"
      aria-label="Call Now"
      title={`Call ${config.site.phone}`}
    >
      <Icon name="PhoneCalling01" size={24} />
    </a>
  );
}
