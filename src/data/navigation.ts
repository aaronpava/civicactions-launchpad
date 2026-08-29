export type NavLink = {
  label: string;
  to: string;
  external?: boolean;
  /** Render a hairline divider above this item (group outliers). */
  dividerAbove?: boolean;
};

export type NavGroup = {
  label: string;
  id: string;
  items: NavLink[];
};

export type NavEntry = NavGroup | NavLink;

export const navGroups: NavGroup[] = [
  {
    label: "Company",
    id: "nav-company",
    items: [
      { label: "Team", to: "/team" },
      { label: "Press", to: "/press" },
      { label: "Impact", to: "/impact" },
    ],
  },
  {
    label: "Services",
    id: "nav-services",
    items: [
      { label: "Web & CMS", to: "/services" },
      { label: "IT Modernization", to: "/services" },
      { label: "Product & Design", to: "/services" },
      { label: "Security & Compliance", to: "/services" },
      { label: "Data Services", to: "/services" },
      { label: "Workforce Development", to: "/services" },
      { label: "DITAP", to: "/services/ditap", dividerAbove: true },
    ],
  },
  {
    label: "Our Work",
    id: "nav-our-work",
    items: [
      { label: "Case Studies", to: "/case-studies" },
      { label: "Contracting", to: "/contracting" },
      { label: "SEWP VI", to: "/contracting/sewp-vi" },
    ],
  },
];

export const navSingles: NavLink[] = [
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
];

export const isNavGroup = (entry: NavEntry): entry is NavGroup =>
  (entry as NavGroup).items !== undefined;

export const primaryNav: NavEntry[] = [...navGroups, ...navSingles];
