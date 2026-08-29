export type FooterLink = {
  label: string;
  to: string;
  external?: boolean;
};

export const footerMenu: FooterLink[][] = [
  [
    { label: "Team", to: "/team" },
    { label: "Press", to: "/press" },
    { label: "Impact", to: "/impact", external: true },
  ],
  [
    { label: "Services", to: "/services" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Contracting", to: "/contracting" },
  ],
  [
    { label: "Contact", to: "/contact" },
    { label: "Insights", to: "/insights", external: true },
    { label: "Careers", to: "/careers" },
  ],
];

export const legalLinks: FooterLink[] = [
  { label: "Accessibility", to: "/accessibility-statement" },
  { label: "Licensing", to: "/licensing" },
  { label: "Privacy", to: "/privacy" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Feedback", to: "/feedback" },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: "vimeo" | "bluesky" | "x" | "linkedin";
};

export const socialLinks: SocialLink[] = [
  { name: "CivicActions on Vimeo", href: "https://vimeo.com", icon: "vimeo" },
  { name: "CivicActions on Bluesky", href: "https://bsky.app", icon: "bluesky" },
  { name: "CivicActions on X", href: "https://x.com", icon: "x" },
  { name: "CivicActions on LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

export const contactInfo = {
  addressLines: ["3527 Mt. Diablo Blvd., Unit 269", "Lafayette, CA 94549"],
  phone: "510-408-7510",
  email: "contact@civicactions.com",
};
