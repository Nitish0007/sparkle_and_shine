import { config } from "./data";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "name": config.site.name,
    "image": "https://sparkleandshinecleaningsydney.au/assets/logo.png",
    "@id": "https://sparkleandshinecleaningsydney.au",
    "url": "https://sparkleandshinecleaningsydney.au",
    "telephone": config.site.phone,
    "email": config.site.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "10 bora place",
      "addressLocality": "Toongabbie",
      "addressRegion": "NSW",
      "postalCode": "2146",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.7874,
      "longitude": 150.9419
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": config.socialMedia.map(s => s.url),
    "areaServed": [
      {
        "@type": "City",
        "name": "Sydney"
      },
      {
        "@type": "Country",
        "name": "Australia"
      }
    ]
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };
}
