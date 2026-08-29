export const teamRoles = [
  "Leadership",
  "Growth & Strategy",
  "People & Operations",
  "Product & Design",
  "Engineering",
  "Client Services",
] as const;

export type TeamRoleGroup = (typeof teamRoles)[number];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  group: TeamRoleGroup;
  bio: string;
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type Seed = [name: string, role: string, group: TeamRoleGroup, bio: string];

const seeds: Seed[] = [
  [
    "Aaron Pava",
    "Chief Experience Officer",
    "Leadership",
    "Aaron co-founded CivicActions and keeps our focus on the people who use government services. He works across design, delivery, and strategy to make sure the experience we ship matches the promise we make.",
  ],
  [
    "Adrian Cooke",
    "Content Designer",
    "Product & Design",
    "Adrian writes and structures content so people can find an answer on the first try. He is happiest turning dense policy language into plain, testable sentences.",
  ],
  [
    "Adrienne Cabouet",
    "Full Stack Engineer",
    "Engineering",
    "Adrienne builds and maintains the back end and front end of government platforms, with a habit of leaving code easier to change than she found it.",
  ],
  [
    "Alaine Karoleff",
    "Director of Digital Services",
    "Leadership",
    "Alaine leads delivery teams on large modernization programs and helps agency partners sequence work so value shows up early and often.",
  ],
  [
    "Alanna Blinn",
    "Technical Writer",
    "Client Services",
    "Alanna documents systems, runbooks, and decisions so the teams who come next can pick up the work without guesswork.",
  ],
  [
    "Alex Kerr",
    "Front End Engineer",
    "Engineering",
    "Alex builds accessible interfaces with design systems and tests every pattern with a keyboard and a screen reader before calling it done.",
  ],
  [
    "Allison Conley",
    "In-house Counsel",
    "People & Operations",
    "Allison handles contracts, compliance, and the legal questions that come with federal work, translating requirements into practical guidance.",
  ],
  [
    "Amir Abdullaev",
    "QA Engineer",
    "Engineering",
    "Amir designs test coverage that catches regressions early, including automated accessibility checks in every pipeline.",
  ],
  [
    "Andrew Croftcheck",
    "Project Manager",
    "Client Services",
    "Andrew keeps commitments, risks, and dependencies visible so agency stakeholders always know where a release stands.",
  ],
  [
    "Andy Hawks",
    "Director of Drupal",
    "Leadership",
    "Andy guides our Drupal practice, from content architecture to upgrade strategy, and contributes fixes back to the community.",
  ],
  [
    "April Cruz",
    "Project Manager",
    "Client Services",
    "April runs agile ceremonies that people actually find useful, and keeps scope conversations grounded in user outcomes.",
  ],
  [
    "Arielle LaBrecque",
    "Digital Services Manager",
    "Client Services",
    "Arielle connects agency priorities to team capacity, and coaches product owners on writing clear, testable acceptance criteria.",
  ],
  [
    "Ashish Kumar",
    "DevOps Engineer",
    "Engineering",
    "Ashish automates build, deploy, and monitoring pipelines so teams can ship small changes safely and often.",
  ],
  [
    "Bentley Hensel",
    "Data and DevOps Engineer",
    "Engineering",
    "Bentley works where data platforms meet infrastructure, building pipelines and catalogs that keep public data usable.",
  ],
  [
    "Beth Jacobsen",
    "Back End Engineer",
    "Engineering",
    "Beth builds APIs and content models that hold up under real traffic, and writes the tests that prove it.",
  ],
  [
    "Bethany Dunfield",
    "Front End Engineer",
    "Engineering",
    "Bethany turns design systems into resilient components, with careful attention to focus order and reduced motion.",
  ],
  [
    "Bill Ogilvie",
    "VP of Public Sector",
    "Growth & Strategy",
    "Bill helps agencies find the right contract path for the work they need, and makes sure our proposals reflect what teams can actually deliver.",
  ],
  [
    "Blake Organ",
    "Product Designer",
    "Product & Design",
    "Blake designs end-to-end service flows, testing prototypes with the people who will use them before a line of code is written.",
  ],
  [
    "Bob Schmitt",
    "Product Manager",
    "Product & Design",
    "Bob keeps a product backlog honest: fewer priorities, clearer problems, measurable outcomes.",
  ],
  [
    "Brenton Kelly",
    "Front End Engineer",
    "Engineering",
    "Brenton builds interfaces for high-traffic public sites, with performance budgets treated as a requirement.",
  ],
  [
    "Brian Seek",
    "Front End Engineer",
    "Engineering",
    "Brian specializes in component libraries and design-token systems that stay consistent across many agency products.",
  ],
  [
    "Bridgette Golson",
    "QA Engineer",
    "Engineering",
    "Bridgette tests the paths people actually take, and documents defects clearly enough to fix on the first attempt.",
  ],
  [
    "Cameron Prince",
    "Back End Engineer",
    "Engineering",
    "Cameron works on integrations and migrations, moving content out of legacy systems without losing history.",
  ],
  [
    "Chianti Lomax",
    "Workforce Development Lead",
    "Growth & Strategy",
    "Chianti designs and facilitates training that helps agency teams build modern skills and keep them after we leave.",
  ],
  [
    "Chris Bauer",
    "Front End Engineer",
    "Engineering",
    "Chris builds accessible forms and interactive patterns, and reviews other teams' work for conformance gaps.",
  ],
  [
    "Christia Troyer",
    "Back End Engineer",
    "Engineering",
    "Christia builds server-side services with a preference for boring, well-monitored solutions that agencies can maintain.",
  ],
  [
    "Christian Anderson",
    "Project Manager",
    "Client Services",
    "Christian coordinates multi-team releases and keeps stakeholders aligned on what is shipping and why.",
  ],
  [
    "Christian Burk",
    "Back End Engineer",
    "Engineering",
    "Christian works on content APIs and search, tuning systems so editors and the public both get fast results.",
  ],
  [
    "Curtis Hayes",
    "Back End Engineer",
    "Engineering",
    "Curtis builds and hardens the services behind public-facing applications, with security reviews built into the routine.",
  ],
  [
    "David Sumner",
    "Associate Director of DevSecOps",
    "Leadership",
    "David helps agencies automate security and compliance so authorization is a continuous practice instead of a yearly scramble.",
  ],
  [
    "Iris Ibekwe",
    "Engineer",
    "Engineering",
    "Iris works across the stack on modernization projects and mentors newer engineers on our teams.",
  ],
  [
    "Jamila Ferris",
    "Accessibility Specialist",
    "Product & Design",
    "Jamila audits products against WCAG 2.1 AA and trains agency teams to catch barriers before release.",
  ],
  [
    "Jonah Whitfield",
    "Site Reliability Engineer",
    "Engineering",
    "Jonah builds monitoring and incident practices that keep critical services available during peak demand.",
  ],
  [
    "Karina Delgado",
    "UX Researcher",
    "Product & Design",
    "Karina plans and runs research with the public and with agency staff, then turns findings into decisions teams can act on.",
  ],
  [
    "Leah Brennan",
    "Director of People",
    "People & Operations",
    "Leah leads hiring, onboarding, and the practices that make a distributed company feel connected.",
  ],
  [
    "Marcus Ellery",
    "Cloud Architect",
    "Engineering",
    "Marcus designs cloud environments that meet federal security requirements without slowing delivery teams down.",
  ],
  [
    "Nadia Rahmani",
    "Content Strategist",
    "Product & Design",
    "Nadia builds content models and governance plans that keep large agency sites accurate over time.",
  ],
  [
    "Omar Castellanos",
    "Data Engineer",
    "Engineering",
    "Omar builds open data pipelines and catalogs, with a focus on making datasets easy to find and reuse.",
  ],
  [
    "Priya Raghavan",
    "Service Designer",
    "Product & Design",
    "Priya maps the full journey people take through a government service, including the parts that happen offline.",
  ],
  [
    "Quinn Delacroix",
    "Agile Coach",
    "Client Services",
    "Quinn coaches blended agency and contractor teams on flow, feedback, and finishing work before starting more.",
  ],
  [
    "Rosa Villanueva",
    "Contracts Manager",
    "People & Operations",
    "Rosa manages contract administration and reporting, keeping our federal obligations tracked and on time.",
  ],
  [
    "Samuel Okafor",
    "Security Engineer",
    "Engineering",
    "Samuel automates control validation and evidence collection so compliance reflects the real state of a system.",
  ],
  [
    "Tessa Lindgren",
    "Front End Engineer",
    "Engineering",
    "Tessa builds interfaces for editors and administrators, the internal tools that decide how good the public content gets.",
  ],
  [
    "Uche Nwosu",
    "Product Manager",
    "Product & Design",
    "Uche partners with agency product owners to define outcomes, then protects the team's focus on reaching them.",
  ],
  [
    "Vera Kaminski",
    "Business Analyst",
    "Growth & Strategy",
    "Vera translates program goals into requirements and measures whether the delivered work moved the numbers.",
  ],
  [
    "Wesley Bright",
    "DevOps Engineer",
    "Engineering",
    "Wesley builds delivery pipelines with automated testing gates, including accessibility and security scans.",
  ],
  [
    "Yuki Tanaka",
    "Visual Designer",
    "Product & Design",
    "Yuki designs interfaces and design systems that stay legible, calm, and consistent at government scale.",
  ],
  [
    "Zoe Marchetti",
    "Talent Partner",
    "People & Operations",
    "Zoe guides candidates through our hiring process and makes sure every interview is a two-way conversation.",
  ],
  [
    "Damaris Okonkwo",
    "Engagement Director",
    "Growth & Strategy",
    "Damaris works with agency leaders on program strategy and makes sure our teams are set up to deliver on it.",
  ],
  [
    "Elliot Vance",
    "Training Facilitator",
    "Growth & Strategy",
    "Elliot facilitates cohort-based training for procurement and delivery staff, including our DITAP program.",
  ],
  [
    "Farah Haddad",
    "Chief Operating Officer",
    "Leadership",
    "Farah keeps operations, finance, and delivery aligned so teams have what they need to do good work.",
  ],
  [
    "Gideon Marsh",
    "Solutions Architect",
    "Engineering",
    "Gideon designs system architectures for modernization programs, favoring approaches agencies can own long term.",
  ],
  [
    "Helena Stroud",
    "Operations Manager",
    "People & Operations",
    "Helena runs the internal systems and rituals that keep a fully remote company running smoothly.",
  ],
  [
    "Isaac Delacruz",
    "Front End Engineer",
    "Engineering",
    "Isaac builds public-facing pages that stay fast and usable on old devices and slow connections.",
  ],
  [
    "Juniper Reyes",
    "Research Operations Lead",
    "Product & Design",
    "Juniper recruits research participants and manages consent and compensation for federal user research.",
  ],
  [
    "Kofi Mensah",
    "Data Scientist",
    "Engineering",
    "Kofi analyzes program data to help agencies see how services perform for different groups of people.",
  ],
  [
    "Lucia Ferrante",
    "Delivery Manager",
    "Client Services",
    "Lucia removes blockers, tracks commitments, and keeps teams and stakeholders honest with each other.",
  ],
  [
    "Miriam Oyelaran",
    "Compliance Analyst",
    "People & Operations",
    "Miriam maintains our security documentation and helps agency partners through assessment and authorization.",
  ],
  [
    "Nils Bergstrom",
    "Platform Engineer",
    "Engineering",
    "Nils builds the shared platform tooling that many agency product teams depend on every day.",
  ],
  [
    "Opal Whitaker",
    "Proposal Manager",
    "Growth & Strategy",
    "Opal leads proposal development, making sure what we promise matches how our teams actually work.",
  ],
];

export const team: TeamMember[] = seeds.map(([name, role, group, bio]) => ({
  slug: slugify(name),
  name,
  role,
  group,
  bio,
}));

export const teamNote = {
  headline: "We work from wherever we live.",
  body: "CivicActions has been fully remote since 2004. Our team works from more than 90 cities across the United States and Canada, which means we can hire the right person for the work no matter where they are.",
  linkLabel: "See our open positions",
  linkTo: "/careers",
};
