import type { HomeService } from "./home";

export type ServiceHelped = {
  client: string;
  result: string;
  href?: string;
  note?: string;
};

export type ServiceDetail = {
  id: string;
  eyebrow: string;
  icon: HomeService["icon"];
  headline: string;
  intro: string;
  helped: ServiceHelped[];
  capabilities: string[];
  cta: { label: string; to: string };
};

export const servicesHero = {
  title: "Government services that build public trust",
  body: "At its core, digital transformation is about improving the customer experience of government. We use thoughtful design and open source technologies to help you deliver modern public services that put people first.",
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: "web-cms",
    eyebrow: "Web & CMS",
    icon: "web",
    headline: "Accessible and secure government websites at scale",
    intro:
      "Government websites have complex information and diverse user groups, but they can be made surprisingly usable and maintainable. We can help you plan a content strategy that merges business goals with user needs (and makes life easier for your staff!) then build a flexible and secure content management system that will grow with you into the future.",
    helped: [
      {
        client: "U.S. Department of Veterans Affairs",
        result: "Built a modern CMS for VA.gov",
        href: "/case-studies/va-cms-modernization",
      },
      {
        client: "Centers for Medicare and Medicaid Services",
        result: "Designed a user-friendly health journey for seniors",
        href: "/case-studies/cms-web-experience-services",
      },
    ],
    capabilities: [
      "Accessibility consulting and training",
      "Research and discovery",
      "CMS development and migration",
      "User experience and visual design",
      "Custom front end development",
      "Content design and strategy",
      "Maintenance and support",
      "Cloud infrastructure",
      "Product management",
      "Agile delivery management",
    ],
    cta: { label: "Improve your website", to: "/contact" },
  },
  {
    id: "service-modernization",
    eyebrow: "IT & Service Modernization",
    icon: "gear",
    headline: "Modernization of legacy government systems and services",
    intro:
      "Outdated systems and paper-based processes make it hard for agency staff to efficiently meet the needs of people who depend on you for critical government services. We help you transform your legacy applications and improve your workflows using human-centered design, automation, and scalable, secure infrastructure.",
    helped: [
      {
        client: "California Child Welfare Digital Services",
        result: "Provided DevOps support for child welfare systems",
        href: "/case-studies",
      },
      {
        client: "New York Metropolitan Transit Authority",
        result: "Connected Drupal and the Internet of Things to power digital signage",
        href: "/case-studies",
      },
    ],
    capabilities: [
      "Research and discovery",
      "Service design",
      "Cloud adoption and migration",
      "DevSecOps",
      "Site Reliability Engineering (SRE)",
      "Custom front end development",
      "Infrastructure and platform modernization",
      "Accessibility consulting and training",
      "API design and cloud native development",
      "Technology strategy consulting",
    ],
    cta: { label: "Work smarter", to: "/contact" },
  },
  {
    id: "product-design",
    eyebrow: "Product & Design",
    icon: "compass",
    headline: "Human-centered problem solving and strategy",
    intro:
      "No matter what the challenge is, technology is only one part of the solution. Before building anything new, we work with you to define problems and desired outcomes, understand the customer and stakeholder ecosystem, decide on an approach that serves business goals and user needs, and make plans for facilitating adoption and measuring success.",
    helped: [
      {
        client: "Centers for Medicare and Medicaid Services",
        result: "Designed a persona-driven strategy for Medicare benefits",
        href: "/case-studies/cms-web-experience-services",
      },
      {
        client: "National Science Foundation",
        result: "Improved user experience to support science research",
        href: "/case-studies",
      },
    ],
    capabilities: [
      "Research and discovery",
      "Product management",
      "Customer experience and service design",
      "Accessibility consulting and training",
      "User experience and visual design",
      "Content design and strategy",
      "Business and impact analysis",
      "Agile and Human-Centered Design training",
      "Change management consulting",
    ],
    cta: { label: "Design a better future", to: "/contact" },
  },
  {
    id: "security-compliance",
    eyebrow: "Security & Compliance",
    icon: "shield",
    headline: "Modern security practices for continuous compliance and reliability",
    intro:
      "People want to know their government will keep sensitive information safe—but traditional compliance regulations are cumbersome and don't provide an accurate measure of security. We help you \u201cshift left\u201d with automated processes that keep development and operations teams in sync, with security and compliance woven in from the start, for faster deployment of secure and stable code.",
    helped: [
      {
        client: "Defense Security Cooperation Agency",
        result: "Supporting international peace partners with continuous compliance",
        href: "/case-studies",
      },
      {
        client: "Various agencies",
        result: "Helping government automate federal compliance",
        href: "/case-studies",
      },
    ],
    capabilities: [
      "DevSecOps",
      "Continuous integration / deployment (CI / CD)",
      "Site Reliability Engineering (SRE)",
      "Continuous monitoring / automated compliance",
      "Rapid / automated Authority to Operate (ATO)",
      "Continuous compliance / Compliance As Code",
      "Security consulting and training",
      "Free and open source software (FOSS) security",
    ],
    cta: { label: "Re-think security", to: "/contact" },
  },
  {
    id: "data-services",
    eyebrow: "Data Services",
    icon: "data",
    headline: "Open data sharing to drive evidence-based decisions",
    intro:
      "Government can serve people best when public data is open, discoverable, and usable. We can help you create a data strategy and comply with open data mandates using open source tools to aggregate, catalog, and standardize your data. Then it's ready to use, by your staff or the public, to make informed decisions, track metrics, and power useful apps.",
    helped: [
      {
        client: "Centers for Medicare and Medicaid Services (CMS)",
        result: "Supporting government transparency",
        href: "/case-studies",
        note: "We empower federal agencies like CMS to reinstate ownership of their data on open data platforms and are working toward a future in which more public data accessibility can become a reality.",
      },
      {
        client: "Open Payments",
        result: "Open data to search payments made by drug and medical device companies to medical providers",
        href: "/case-studies",
      },
    ],
    capabilities: [
      "Data program strategy",
      "Open data compliance",
      "Research of data users and their needs",
      "Data cataloging and maintenance",
      "Data platform migration / modernization",
      "Custom search and analysis applications",
      "Data visualizations and dashboards",
      "Helpdesk support for your data platform",
      "Data science and analysis",
    ],
    cta: { label: "Be data-driven", to: "/contact" },
  },
  {
    id: "workforce-development",
    eyebrow: "Workforce Development",
    icon: "people",
    headline: "Modern skills for an adaptable government workforce",
    intro:
      "Lasting transformation in government happens from the inside out. Organizational change is hard, but not impossible. We offer consulting and training to help your teams build skills in modern ways of working so your agency can increase resilience, save taxpayer dollars, and serve the public better in the digital age.",
    helped: [
      {
        client: "Federal Acquisitions Institute",
        result: "DITAP program certification for federal procurement officers",
        href: "/services/ditap",
      },
    ],
    capabilities: [
      "DITAP program certification",
      "Telework consulting and training",
      "Agile and Human-Centered Design coaching",
      "Team culture and performance coaching",
      "Technology strategy consulting",
      "Free and open source software (FOSS) education",
      "Change management consulting",
    ],
    cta: { label: "Upskill your team", to: "/services/ditap" },
  },
];

export const practices = {
  headline: "Open standards. Inclusive practices. Better outcomes.",
  body: "No matter what problem we're solving, our core practices and communities power our work and align with current standards for government digital services.",
  tags: [
    "accessibility",
    "agile",
    "DevSecOps",
    "distributed teams",
    "drupal",
    "human-centered design",
    "open source",
    "open data",
    "u.s. web design standards",
  ],
};
