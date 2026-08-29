import seal from "@/assets/home/agency-seal.png";
import vaVeterans from "@/assets/home/va-veterans.jpg";
import cmsDrupal from "@/assets/home/cms-drupal.jpg";
import medicareSeniors from "@/assets/home/medicare-seniors.jpg";
import insightVeteran from "@/assets/home/insight-veteran.jpg";

export type ClientLogo = { name: string; src: string };

export const clientLogos: ClientLogo[] = [
  { name: "State of Georgia", src: seal },
  { name: "U.S. Department of Veterans Affairs", src: seal },
  { name: "Executive Office of the President", src: seal },
  { name: "U.S. House of Representatives", src: seal },
  { name: "U.S. Department of Health & Human Services", src: seal },
  { name: "National Science Foundation", src: seal },
  { name: "U.S. Drug Enforcement Administration", src: seal },
  { name: "Louisville Jefferson County", src: seal },
  { name: "FOIA", src: seal },
];

export type HomeService = { title: string; to: string; icon: "web" | "gear" | "compass" | "shield" | "data" | "people" };

export const homeServices: HomeService[] = [
  { title: "Web & CMS", to: "/services#web-cms", icon: "web" },
  { title: "IT & Service Modernization", to: "/services#it-modernization", icon: "gear" },
  { title: "Product & Design", to: "/services#product-design", icon: "compass" },
  { title: "Security & Compliance", to: "/services#security-compliance", icon: "shield" },
  { title: "Data Services", to: "/services#data-services", icon: "data" },
  { title: "Workforce Development", to: "/services#workforce-development", icon: "people" },
];

export type HomeCaseStudy = {
  client: string;
  title: string;
  href?: string;
  image: string;
  imageAlt: string;
};

export const homeCaseStudies: HomeCaseStudy[] = [
  {
    client: "U.S. Department of Veterans Affairs",
    title: "Helping Veterans access care and benefits online",
    href: "/case-studies/va-cms-modernization",
    image: vaVeterans,
    imageAlt: "Two veterans in uniform working on laptops in a bright office",
  },
  {
    client: "Centers for Medicare and Medicaid Services",
    title: "An Upgraded Experience with Drupal 10",
    image: cmsDrupal,
    imageAlt: "Hands typing on a laptop showing a government web dashboard",
  },
  {
    client: "Centers for Medicare and Medicaid Services",
    title: "Improving the online experience for Medicare beneficiaries with WECMS",
    href: "/case-studies/cms-web-experience-services",
    image: medicareSeniors,
    imageAlt: "An older couple smiling while using a tablet together on a couch",
  },
];

export const homeQuote = {
  quote:
    "CivicActions always looked for the optimal solutions to difficult problems and improved constantly on delivered functionality. They responded with agility, creativity, and skill to any challenge that was thrown at them.",
  attribution: "Katrina Barry",
  role: "Contracting Officer — National Science Foundation",
};

export type HomeInsight = {
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export const homeInsights: HomeInsight[] = [
  {
    title: "Designing a Veteran-first online experience",
    description: "How we help VA deliver consistent and useful information",
    href: "/insights",
    image: insightVeteran,
    imageAlt: "A person working on a laptop in a modern office",
  },
  {
    title: "Improving the ATO process with Compliance as Code",
    description: "Better and faster security for government IT systems",
    href: "/insights",
  },
  {
    title: "One Drupal platform, multiple government products",
    description: "A community of practice for government accessibility",
    href: "/insights",
  },
];

export type TeamMember = { name: string; initials: string };

const firstNames = [
  "Alana", "Ben", "Carla", "Devon", "Elena", "Farid",
  "Grace", "Henry", "Iris", "Jon", "Kira", "Luis",
  "Maya", "Nate", "Olivia", "Priya", "Quinn", "Rosa",
  "Sam", "Tara", "Umar", "Vera", "Will", "Ximena",
];

export const teamMosaic: TeamMember[] = firstNames.map((name) => ({
  name,
  initials: name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase(),
}));
