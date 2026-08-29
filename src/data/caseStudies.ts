import vaVeterans from "@/assets/home/va-veterans.jpg";
import cmsDrupal from "@/assets/home/cms-drupal.jpg";
import medicareSeniors from "@/assets/home/medicare-seniors.jpg";
import accessibilityKeyboard from "@/assets/case-studies/accessibility-keyboard.jpg";
import cyberCircuit from "@/assets/case-studies/cyber-circuit.jpg";
import laptopCollab from "@/assets/case-studies/laptop-collab.jpg";
import globalNetwork from "@/assets/case-studies/global-network.jpg";
import transitPlatform from "@/assets/case-studies/transit-platform.jpg";
import healthData from "@/assets/case-studies/health-data.jpg";
import mobileFiling from "@/assets/case-studies/mobile-filing.jpg";
import scienceLab from "@/assets/case-studies/science-lab.jpg";

export const serviceCategories = [
  "Web & CMS",
  "IT & Service Modernization",
  "Product & Design",
  "Security & Compliance",
  "Data Services",
  "Workforce Development",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export type CaseStudyStat = { value: string; label: string };

export type CaseStudyDetailContent = {
  atAGlance: { services: string; timeline: string; contractVehicle: string };
  challenge: string[];
  whatWeDid: { paragraphs: string[]; activities: string[] };
  impact: CaseStudyStat[];
  quote: { text: string; name: string; role: string };
};

export type CaseStudyEntry = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  categories: ServiceCategory[];
  image: string;
  imageAlt: string;
  detail?: CaseStudyDetailContent;
};

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: "va-cms-modernization",
    client: "U.S. Department of Veterans Affairs",
    title: "Helping Veterans access care and benefits online",
    summary:
      "We joined the modernization effort at VA to implement a modern Drupal content management system and empower a Veteran-first approach to online healthcare.",
    categories: ["Web & CMS", "IT & Service Modernization", "Product & Design"],
    image: vaVeterans,
    imageAlt: "Two Veterans talking with a benefits counselor in an office",
    detail: {
      atAGlance: {
        services: "CMS development, content strategy, accessibility, product management",
        timeline: "2018 – present",
        contractVehicle: "VA CTO Digital Experience (DEPO) task order",
      },
      challenge: [
        "Veterans looking for care or benefits had to move between hundreds of separate VA websites, each with its own navigation, publishing tools, and editorial standards. Information about the same benefit often appeared in several places with different wording, and people could not tell which page to trust.",
        "Behind the scenes, VA communications staff at more than 1,000 facilities maintained pages by hand in aging systems. Publishing a simple update, like a change in clinic hours, could take days and required help from a developer.",
        "VA needed a single content platform that field staff could use directly, that met Section 508 requirements, and that could scale to the whole enterprise without slowing teams down.",
      ],
      whatWeDid: {
        paragraphs: [
          "We work as part of a blended VA and contractor team building and maintaining the Drupal content management system behind VA.gov. Our focus is giving VA staff editorial tools they can learn quickly, with accessibility and plain-language guidance built into the editing experience rather than bolted on at review time.",
          "We started with research: interviews and usability sessions with Veterans, caregivers, and the communications staff who publish content. Those findings shaped the content models for facilities, health services, and benefits pages, so each page type carries the fields a Veteran actually looks for.",
          "We ship in small increments, test with assistive technology on every release, and pair with VA product owners so the agency can operate and extend the platform on its own.",
        ],
        activities: [
          "Built reusable content types for VA medical centers, health services, and benefit pages",
          "Migrated content from legacy systems into a single editorial workflow",
          "Added automated accessibility and content-quality checks to the deployment pipeline",
          "Trained hundreds of field editors on the CMS and plain-language standards",
          "Set up continuous integration and monitoring for a high-traffic public platform",
        ],
      },
      impact: [
        { value: "1,000+", label: "VA facilities publishing in one CMS" },
        { value: "3,000+", label: "trained editors across the enterprise" },
        { value: "508", label: "conformance verified on every release" },
      ],
      quote: {
        text: "The team treats accessibility as a requirement, not a review step. That changed how our editors think about the content they publish for Veterans.",
        name: "Product owner",
        role: "VA Office of the CTO, Digital Experience",
      },
    },
  },
  {
    slug: "cms-drupal-10-upgrade",
    client: "Centers for Medicare and Medicaid Services",
    title: "An Upgraded Experience with Drupal 10",
    summary:
      "We upgraded 8 sites to Drupal 10 for the Centers for Medicare and Medicaid Services (CMS) ahead of deadline.",
    categories: ["Web & CMS", "Security & Compliance"],
    image: cmsDrupal,
    imageAlt: "Hands typing on a laptop keyboard at a desk",
  },
  {
    slug: "openacr-accessibility-accelerator",
    client: "OpenACR (Accessibility Conformance Reporting)",
    title: "Modernizing the ACR Process",
    summary:
      "An accessibility accelerator that modernizes the Accessibility Conformance Reporting process.",
    categories: ["Product & Design", "Web & CMS"],
    image: accessibilityKeyboard,
    imageAlt: "Backlit laptop keyboard glowing in magenta and blue",
  },
  {
    slug: "cms-cybersecurity-information",
    client: "Centers for Medicare and Medicaid Services",
    title: "Modernizing and Streamlining Cybersecurity Information",
    summary:
      "We worked alongside ISPG customers and stakeholders to design and build a searchable, user-friendly portal for cybersecurity information — making it easier for security personnel to keep CMS data and systems safe.",
    categories: ["Security & Compliance", "Web & CMS"],
    image: cyberCircuit,
    imageAlt: "Close-up of a glowing teal computer circuit board",
  },
  {
    slug: "va-alternative-text-validation",
    client: "U.S. Department of Veterans Affairs",
    title: "Better Accessibility Through Alternative Text Validation",
    summary:
      "We updated VA.gov based on user research to create better alternative (alt) text in order to provide a more accessible experience for Veterans.",
    categories: ["Web & CMS", "Product & Design"],
    image: laptopCollab,
    imageAlt: "Two colleagues reviewing a website together on a laptop",
  },
  {
    slug: "dscf-globalnet-platform",
    client: "Defense Security Cooperation Agency",
    title: "A global professional networking platform for security practitioners",
    summary:
      "We redesigned and rebuilt the GlobalNET platform to enable secure international collaboration, and now we provide ongoing DevOps and IT support services.",
    categories: ["IT & Service Modernization", "Security & Compliance", "Product & Design"],
    image: globalNetwork,
    imageAlt: "Aerial night view of a city with a network of connecting lights",
  },
  {
    slug: "medicare-gov-mvp",
    client: "Centers for Medicare and Medicaid Services",
    title: "Building an MVP for Medicare.gov with human-centered design",
    summary:
      "We did a fast-paced collaboration to submit deliverables in just 8 days, winning the design challenge to help CMS improve the customer experience of their websites.",
    categories: ["Product & Design", "Web & CMS"],
    image: medicareSeniors,
    imageAlt: "An older couple looking at a tablet together",
  },
  {
    slug: "dept-of-education-system-lifecycle-development-management",
    client: "U.S. Department of Education",
    title: "Modern learning platforms for adult education practitioners",
    summary:
      "We streamlined a mix of legacy federal websites into a modern, secure platform to support the adult education community — and now we provide ongoing support and improvements.",
    categories: ["IT & Service Modernization", "Web & CMS", "Security & Compliance"],
    image: laptopCollab,
    imageAlt: "Two adult educators working together at a laptop",
    detail: {
      atAGlance: {
        services: "Platform consolidation, Drupal development, DevSecOps, ongoing support",
        timeline: "2020 – present",
        contractVehicle: "System Lifecycle Development and Management (SLDM)",
      },
      challenge: [
        "The Office of Career, Technical, and Adult Education supported adult education practitioners through a set of separate websites and applications built at different times by different vendors. Each had its own hosting, login, and update schedule.",
        "Teachers and state administrators had to remember which site held the resource they needed. Program staff spent budget maintaining duplicate infrastructure instead of improving content and services.",
        "The Department wanted one platform that met federal security requirements, could be patched on a predictable schedule, and left room to add new programs later.",
      ],
      whatWeDid: {
        paragraphs: [
          "We inventoried the existing sites and applications, mapped the audiences each one served, and worked with program staff to decide what to consolidate, what to retire, and what to keep separate for legitimate reasons.",
          "We then built a shared Drupal platform with a common design system and a single publishing workflow, and migrated the surviving content into it. Automated testing and a hardened deployment pipeline let the Department apply security updates without a manual release effort each time.",
          "We continue to support the platform, adding features requested by practitioners and keeping documentation current so Department staff can direct the roadmap.",
        ],
        activities: [
          "Audited legacy sites, content, and integrations before any migration",
          "Built a shared Drupal platform with a reusable component library",
          "Migrated and redirected content to preserve existing links and search rankings",
          "Automated security patching, backups, and accessibility testing",
          "Provided help desk and enhancement support for program offices",
        ],
      },
      impact: [
        { value: "6", label: "legacy sites consolidated into one platform" },
        { value: "1 day", label: "typical time to ship a security patch" },
        { value: "50 states", label: "of adult education staff served" },
      ],
      quote: {
        text: "Consolidating the sites let our program staff spend their time on content for practitioners instead of coordinating separate vendors and release schedules.",
        name: "Program manager",
        role: "Office of Career, Technical, and Adult Education",
      },
    },
  },
  {
    slug: "cms-web-experience-services",
    client: "Centers for Medicare and Medicaid Services",
    title: "Improving the online experience for Medicare beneficiaries with WECMS",
    summary:
      "We are working to re-platform and redesign legacy systems for CMS, making it easier for millions of people to get the benefits they need.",
    categories: ["Web & CMS", "Product & Design", "IT & Service Modernization"],
    image: medicareSeniors,
    imageAlt: "An older couple reviewing Medicare information on a tablet",
    detail: {
      atAGlance: {
        services: "Research, service design, CMS re-platforming, content strategy",
        timeline: "2021 – present",
        contractVehicle: "Web Enterprise Content Management Services (WECMS)",
      },
      challenge: [
        "People choosing Medicare coverage are often making a decision under time pressure, sometimes on behalf of a parent or spouse. The information they need was spread across several legacy systems with inconsistent language and different navigation patterns.",
        "Content teams at CMS worked in publishing tools that made it hard to reuse a single, reviewed explanation of a benefit across pages, so wording drifted apart over time.",
        "CMS needed to move this content onto a common platform without interrupting service for the millions of people who use it during open enrollment.",
      ],
      whatWeDid: {
        paragraphs: [
          "We ran research with beneficiaries, caregivers, and call center staff to find where people got stuck, then used those findings to restructure the content around the decisions people are actually trying to make.",
          "We are re-platforming the legacy sites onto a shared content management system with a reusable component library, so a benefit explanation is written once and referenced wherever it appears. Migration happens in phases, with each phase tested for accessibility and performance before release.",
          "We work in the open with CMS product owners and content designers, documenting decisions so the agency's teams can maintain and extend the platform.",
        ],
        activities: [
          "Conducted usability research with beneficiaries and caregivers",
          "Restructured content around beneficiary decisions instead of program org charts",
          "Built a shared component library on a single content management system",
          "Migrated legacy pages in phases with redirects and rollback plans",
          "Tested each release with screen readers and keyboard-only navigation",
        ],
      },
      impact: [
        { value: "Millions", label: "of beneficiaries served each year" },
        { value: "8", label: "legacy properties moving to one platform" },
        { value: "0", label: "unplanned outages during migration phases" },
      ],
      quote: {
        text: "Grounding the work in research with beneficiaries gave our team a shared reason to simplify pages we had argued about for years.",
        name: "Content strategy lead",
        role: "Centers for Medicare and Medicaid Services",
      },
    },
  },
  {
    slug: "nsf-research-discovery",
    client: "The National Science Foundation",
    title: "A smoother path to scientific research and discovery",
    summary:
      "Using human-centered design and the latest Drupal technology, we helped NSF build a dynamic website to advance their mission.",
    categories: ["Web & CMS", "Product & Design"],
    image: scienceLab,
    imageAlt: "Two researchers in safety goggles working in a laboratory",
  },
  {
    slug: "georgia-healthcare-workforce-open-data",
    client: "Georgia Board of Health Care Workforce",
    title: "Using open data to power Georgia's healthcare workforce",
    summary:
      "Using the DKAN open source open data platform, we built tools to help Georgia decision-makers plan for a resilient healthcare workforce.",
    categories: ["Data Services"],
    image: healthData,
    imageAlt: "A stethoscope resting on a clipboard of healthcare workforce charts",
  },
  {
    slug: "mta-real-time-transit-data",
    client: "New York Metropolitan Transportation Authority",
    title: "Better transit service with real-time data",
    summary:
      "Wrangling a vast network of real-time transit data, we used Drupal 8 and the Internet of Things to modernize digital subway signage in New York City.",
    categories: ["IT & Service Modernization", "Data Services"],
    image: transitPlatform,
    imageAlt: "Commuters on a subway platform beneath a digital arrival sign",
  },
  {
    slug: "fcc-modern-web-experience",
    client: "Federal Communications Commission",
    title: "Building a modern web experience for FCC customers",
    summary:
      "In a fast-paced, comprehensive content migration, we applied Agile development and DevSecOps to modernize a legacy federal website.",
    categories: ["Web & CMS", "Security & Compliance", "IT & Service Modernization"],
    image: mobileFiling,
    imageAlt: "A person submitting a filing on a smartphone at a desk",
  },
];

export function getCaseStudy(slug: string): CaseStudyEntry | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export type MoreClientsGroup = { category: string; clients: string[] };

export const moreClients: MoreClientsGroup[] = [
  {
    category: "Web & CMS",
    clients: [
      "Defense Security Cooperation Agency",
      "U.S. Executive Office of the President",
      "U.S. House of Representatives",
      "U.S. Department of the Interior",
      "California Polytechnic State University",
      "San Francisco Department of the Environment",
      "City of Los Angeles",
      "Doctors Without Borders",
    ],
  },
  {
    category: "IT & Service Modernization",
    clients: [
      "U.S. Department of Veterans Affairs",
      "General Services Administration (data.gov)",
      "California Health and Human Services Agency",
      "California Department of Motor Vehicles",
      "California Child Welfare Digital Services",
      "City of Los Angeles",
    ],
  },
  {
    category: "Product & Design",
    clients: [
      "Defense Security Cooperation Agency",
      "Centers for Medicare and Medicaid Services",
      "National Science Foundation",
    ],
  },
];
