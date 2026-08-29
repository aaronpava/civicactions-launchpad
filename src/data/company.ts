export type Stat = { value: string; label: string };
export type PressItem = { outlet: string; date: string; headline: string; href: string };
export type Vehicle = { name: string; number: string; description: string };
export type Faq = { question: string; answer: string };

/* ---------------------------------- Impact --------------------------------- */

export const impact = {
  title: "Impact",
  intro:
    "We are a public benefit company. Our work is measured by whether people can get what they need from their government, and by whether the teams we work with can keep improving after we leave.",
  stats: [
    { value: "20+", label: "Years serving government agencies" },
    { value: "90+", label: "Cities our team works from" },
    { value: "40M+", label: "People served by systems we help maintain" },
    { value: "100%", label: "Projects delivered with accessibility testing" },
  ] as Stat[],
  mission: {
    title: "Our mission",
    body: [
      "CivicActions exists to help government deliver services people can trust. That means plain language, accessible interfaces, secure systems, and teams inside the agency who can maintain what we build together.",
      "We choose work where the public benefit is clear: healthcare, benefits, science, education, transit, and the data that helps decision makers act on evidence.",
    ],
  },
  sustainability: {
    title: "Sustainability commitments",
    items: [
      "Fully remote since 2004, which removes daily commuting from our operations.",
      "We measure the carbon footprint of company travel and offset what we cannot avoid.",
      "We build lightweight, efficient websites; smaller pages use less energy on every device that loads them.",
      "We prefer vendors and cloud regions with published renewable energy commitments.",
    ],
  },
  openSource: {
    title: "Open source contributions",
    body: "Almost everything we build for government is open source, and we contribute improvements back to the projects we rely on.",
    items: [
      "Drupal core and contributed modules, including accessibility and migration fixes.",
      "OpenACR, an open tool that modernizes Accessibility Conformance Reporting.",
      "Compliance as Code tooling that automates security documentation and evidence.",
      "DKAN, an open source open data platform used by agencies to publish public datasets.",
    ],
  },
};

/* ---------------------------------- Press ---------------------------------- */

export const pressIntro =
  "Coverage of our work with government agencies, our research, and our approach to distributed teams.";

export const pressItems: PressItem[] = [
  {
    outlet: "FedScoop",
    date: "June 2026",
    headline: "How VA rebuilt its web content operations around Veterans",
    href: "https://fedscoop.com/",
  },
  {
    outlet: "Government Executive",
    date: "April 2026",
    headline: "Continuous compliance is changing how agencies earn an ATO",
    href: "https://www.govexec.com/",
  },
  {
    outlet: "StateScoop",
    date: "February 2026",
    headline: "States turn to open data platforms to plan healthcare workforces",
    href: "https://statescoop.com/",
  },
  {
    outlet: "Federal News Network",
    date: "December 2025",
    headline: "Inside a fully distributed federal contractor",
    href: "https://federalnewsnetwork.com/",
  },
  {
    outlet: "Nextgov",
    date: "October 2025",
    headline: "Accessibility conformance reporting gets an open source upgrade",
    href: "https://www.nextgov.com/",
  },
  {
    outlet: "Drupal Association",
    date: "August 2025",
    headline: "Government case study: one platform, many agency products",
    href: "https://www.drupal.org/",
  },
];

export const mediaContact = {
  title: "Media contact",
  body: "For interviews, background, or speaking requests, reach our communications team. We usually respond within one business day.",
  email: "press@civicactions.com",
  phone: "510-408-7510",
};

/* -------------------------------- Contracting ------------------------------- */

export const contracting = {
  title: "Contracting",
  intro:
    "We hold contract vehicles that make it straightforward for federal, state, and local agencies to put our teams to work. If you do not see a path that fits, tell us about the work and we will help you find one.",
  vehicles: [
    {
      name: "NASA SEWP VI",
      number: "Solutions for Enterprise-Wide Procurement VI",
      description:
        "A government-wide acquisition contract for IT products and services, available to all federal agencies.",
    },
    {
      name: "GSA Multiple Award Schedule",
      number: "GS-35F-0000X",
      description:
        "IT professional services under SIN 54151S, including software development, DevSecOps, and design.",
    },
    {
      name: "CIO-SP3 Small Business",
      number: "Subcontractor",
      description: "Available as a subcontractor on health and IT services task orders.",
    },
    {
      name: "State and local",
      number: "Direct and cooperative",
      description:
        "Direct contracts and cooperative purchasing agreements with state agencies, counties, and cities.",
    },
  ] as Vehicle[],
  naics: [
    { code: "541511", label: "Custom Computer Programming Services" },
    { code: "541512", label: "Computer Systems Design Services" },
    { code: "541513", label: "Computer Facilities Management Services" },
    { code: "541519", label: "Other Computer Related Services" },
    { code: "541611", label: "Administrative Management and General Management Consulting" },
    { code: "611420", label: "Computer Training" },
  ],
  identifiers: [
    { label: "UEI", value: "UEI-PLACEHOLDER" },
    { label: "CAGE code", value: "CAGE-PLACEHOLDER" },
    { label: "DUNS", value: "DUNS-PLACEHOLDER" },
    { label: "Business size", value: "Small business" },
  ],
  socioeconomic: [
    "Small business",
    "Public benefit corporation",
    "Registered in SAM.gov and active for federal awards",
  ],
  pastPerformance: [
    {
      client: "U.S. Department of Veterans Affairs",
      body: "Content management system development, accessibility, and product support for VA.gov.",
    },
    {
      client: "Centers for Medicare and Medicaid Services",
      body: "Web experience services, Drupal upgrades, and cybersecurity information modernization.",
    },
    {
      client: "National Science Foundation",
      body: "Human-centered redesign and Drupal platform delivery for research audiences.",
    },
    {
      client: "Defense Security Cooperation Agency",
      body: "Platform rebuild plus ongoing DevOps and IT support for an international user base.",
    },
  ],
};

export const sewp = {
  title: "NASA SEWP VI",
  intro:
    "SEWP VI is a government-wide acquisition contract managed by NASA. Any federal agency can use it to buy IT products and services, including the professional services our teams provide.",
  what: [
    "SEWP VI covers IT solutions across hardware, software, and the services needed to deliver and support them.",
    "Because the vehicle is already competed, agencies can move from requirement to award without running a new full-and-open procurement.",
    "SEWP charges a low, fixed surcharge and the program office provides no-cost quote support to ordering agencies.",
  ],
  howToOrder: [
    "Tell us about the requirement so we can confirm scope fit and the right SEWP group.",
    "Submit a Request for Quote through the SEWP portal, naming CivicActions as a quoting contract holder.",
    "We return a quote with labor mix, period of performance, and pricing within the SEWP terms.",
    "Your contracting officer issues the delivery order directly against SEWP VI.",
  ],
  inScope: [
    "Content management system development and migration",
    "Human-centered research, service design, and accessibility",
    "DevSecOps, cloud migration, and site reliability engineering",
    "Continuous compliance and automated Authority to Operate support",
    "Open data platform implementation and support",
    "Agile coaching and workforce training",
  ],
  contact: {
    name: "Bill Ogilvie",
    role: "VP of Public Sector",
    email: "contracting@civicactions.com",
    phone: "510-408-7510",
  },
};

/* ----------------------------------- DITAP ---------------------------------- */

export const ditap = {
  title: "DITAP: Digital IT Acquisition Professional training",
  intro:
    "DITAP is a certification program for federal contracting professionals who buy digital services. We deliver the program as a facilitated cohort, grounded in the real acquisitions participants are working on.",
  what: [
    "The Digital IT Acquisition Professional Training and Development Program was created to help the federal acquisition workforce buy modern digital services well.",
    "Completing an approved program earns the FAC-C Digital Services specialization, and more importantly it changes how participants write, evaluate, and manage digital service acquisitions.",
  ],
  audience: [
    "Contracting officers and contract specialists buying digital services",
    "Program and project managers who partner with acquisition teams",
    "Agency digital service and modernization leads",
    "COR and technical evaluation team members",
  ],
  format: [
    { title: "Cohort length", body: "Six months, part time, with a small cohort of peers from across government." },
    { title: "Live sessions", body: "Weekly facilitated virtual sessions, plus office hours with instructors." },
    { title: "Applied work", body: "Participants apply each module to an actual acquisition in their portfolio." },
    { title: "Coaching", body: "One-on-one coaching and peer review throughout the program." },
  ],
  outcomes: [
    "Write requirements and evaluation criteria that support iterative delivery",
    "Structure agile and modular contracts that reduce program risk",
    "Run market research and industry engagement that improves competition",
    "Evaluate vendors on demonstrated ability rather than written promises",
    "Manage performance with working software and user outcomes as evidence",
    "Coach program partners through modern acquisition practices",
  ],
};

/* ----------------------------------- Legal ---------------------------------- */

export const accessibilityStatement = {
  updated: "August 2026",
  intro:
    "Accessibility is our business. This statement describes how accessible this website is, how we test it, what we know is imperfect, and how to tell us when something blocks you.",
  conformance: [
    "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, and to meet the requirements of Section 508 of the Rehabilitation Act.",
    "This site is designed to work with keyboard-only navigation, screen readers, screen magnification, speech input, and browser zoom up to 400 percent. Text contrast meets or exceeds 4.5:1 for body content.",
  ],
  testing: [
    "Automated checks with axe run against every page template in our build pipeline, and new violations fail the build.",
    "Manual keyboard testing of every interactive component, including the navigation menus, the case study filters, and the contact form.",
    "Screen reader testing with NVDA on Windows Firefox, VoiceOver on macOS Safari, and VoiceOver on iOS.",
    "Review of headings, landmarks, focus order, form labeling, and error messaging by an accessibility specialist before release.",
  ],
  limitations: [
    "Some embedded video is hosted by third parties. Captions are provided, and we are adding audio descriptions to older recordings.",
    "A small number of older PDF documents in our archive are not fully tagged. We will provide an accessible alternative on request.",
    "Charts in some older insight posts convey information visually with a text summary nearby rather than a full data table.",
  ],
  reporting: [
    "If any part of this site prevents you from doing what you came to do, tell us. Include the page address, what you were trying to do, and the assistive technology and browser you use, if you can.",
    "We acknowledge reports within two business days and aim to resolve barriers within ten business days. When a fix will take longer, we will tell you why and offer another way to get the information.",
  ],
  contact: {
    email: "accessibility@civicactions.com",
    phone: "510-408-7510",
  },
};

export const legalPages: Record<
  "licensing" | "privacy" | "sustainability" | "feedback",
  { title: string; description: string; sections: { heading: string; paragraphs: string[] }[] }
> = {
  licensing: {
    title: "Licensing",
    description: "How the content and code on this site are licensed, and how you may reuse them.",
    sections: [
      {
        heading: "Site content",
        paragraphs: [
          "Unless a page says otherwise, the writing and images on this website are published under a Creative Commons Attribution 4.0 International license. You may share and adapt the material, including commercially, as long as you credit CivicActions and note any changes.",
          "Client logos, agency seals, and partner trademarks are excluded. Those marks belong to their owners and are used here to describe our work.",
        ],
      },
      {
        heading: "Our code",
        paragraphs: [
          "Software we write for government is open source by default. Most of our public repositories use the MIT or GPL license, matching the community project they extend.",
          "Contributions we make to Drupal, DKAN, OpenACR, and Compliance as Code carry the license of the upstream project.",
        ],
      },
      {
        heading: "Questions about reuse",
        paragraphs: [
          "If you would like to reuse something and are not sure which license applies, write to contact@civicactions.com and we will confirm.",
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy",
    description: "What information this website collects, why, and what choices you have.",
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "We collect the information you choose to send us: the name, email address, organization, and message you enter in a form on this site. We use it to answer you and nothing else.",
          "Our servers keep standard request logs, including IP address, browser type, and the pages requested. We use those logs to keep the site available and secure.",
        ],
      },
      {
        heading: "Analytics and cookies",
        paragraphs: [
          "We use privacy-respecting, aggregate analytics to understand which pages are useful. We do not sell data, we do not run advertising trackers, and we do not build profiles of visitors.",
          "This site sets one local storage value to remember that you dismissed the announcement bar. Clearing your browser storage removes it.",
        ],
      },
      {
        heading: "Retention and your choices",
        paragraphs: [
          "We keep form submissions for as long as needed to respond and to maintain a record of the conversation, then delete them.",
          "You can ask us what we hold about you, ask for a correction, or ask us to delete it. Write to privacy@civicactions.com and we will respond within thirty days.",
        ],
      },
    ],
  },
  sustainability: {
    title: "Sustainability",
    description: "How a fully distributed company thinks about its environmental footprint.",
    sections: [
      {
        heading: "How we work",
        paragraphs: [
          "CivicActions has been fully remote since 2004. We have no offices, and no daily commuting, which removes the largest single source of emissions for a company of our size.",
          "We meet in person deliberately and rarely, and we measure the footprint of the travel we do choose.",
        ],
      },
      {
        heading: "The software we build",
        paragraphs: [
          "Efficient websites use less energy on every device that loads them. We set performance budgets, keep page weight low, serve appropriately sized images, and avoid heavy client-side frameworks where they are not needed.",
          "Long-lived, maintainable systems are also a sustainability choice: replatforming has a real material and energy cost.",
        ],
      },
      {
        heading: "Our supply chain",
        paragraphs: [
          "We prefer cloud regions and vendors with published renewable energy commitments, and we ask about energy sourcing during procurement.",
          "We extend the life of team hardware with repair and refurbishment before replacement, and recycle responsibly at end of life.",
        ],
      },
    ],
  },
  feedback: {
    title: "Feedback",
    description: "Tell us what is working on this site, what is broken, and what is missing.",
    sections: [
      {
        heading: "We read everything",
        paragraphs: [
          "This site is a product, and like any product it improves when people tell us where it falls short. Broken links, unclear writing, missing information, and accessibility barriers are all worth reporting.",
          "Email contact@civicactions.com or call 510-408-7510. If your report is about an accessibility barrier, accessibility@civicactions.com reaches our specialists directly.",
        ],
      },
      {
        heading: "What to include",
        paragraphs: [
          "The address of the page, what you were trying to do, and what happened instead. If you use assistive technology, telling us which software and browser helps us reproduce the problem quickly.",
        ],
      },
      {
        heading: "What happens next",
        paragraphs: [
          "We acknowledge feedback within two business days. For defects, we tell you when a fix is scheduled. For suggestions, we tell you honestly whether we plan to act on them.",
        ],
      },
    ],
  },
};
