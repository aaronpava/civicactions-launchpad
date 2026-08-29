export type Benefit = { title: string; body: string };
export type HiringStep = { title: string; body: string };
export type CulturePost = { title: string; slug: string };
export type OpenPosition = { title: string; location: string; summary: string; applyHref: string };

export const careersHero = {
  title: "Work for the public good.",
  body: "Join our team of talented and open-minded people working to build modern and accessible government services for all.",
  ctaLabel: "See open positions",
};

export const careersVideo = {
  caption:
    "CivicActions is a place to learn and grow with others who are passionate about putting people first. Learn how our multi-disciplinary teams use technology and design to bring government services up to today's standards.",
};

export const whoWeAre = {
  title: "Who we are",
  body: "CivicActions is built on a culture of openness, authenticity, and appreciation. We find inspiration in the things that make each of us unique, and we continually share and learn from each other. We are people first, striving to make the world better through our work, but also creating an environment that allows us to care for ourselves and each other.",
  linkLabel: "Learn about how we bring our humanity to work",
  linkSlug: "thirty-second-ritual",
};

export const whatWeLookFor = {
  title: "What we look for",
  body: "Hiring smart and friendly people is the most important thing we do for ourselves and our clients. We look for folks with high emotional intelligence and strong communication skills. We also believe that your willingness to learn and grow is as valuable as your existing skill set. We seek self-motivated, curious people who want to make a difference.",
  linkLabel: "Learn about our unique hiring process",
  linkSlug: "fierce-openness",
};

export const benefitsIntro =
  "We believe people do their best work when they can be balanced, healthy, and happy. Our work environment is designed to support your personal and professional growth.";

export const benefits: Benefit[] = [
  {
    title: "Health benefits",
    body: "100% company-paid national medical benefits plan option, with a range of choices and levels for employees and their dependents — including options for disability, mental health, life insurance, dental, and vision.",
  },
  {
    title: "401k program",
    body: "A range of investment options for building out a balanced portfolio — including socially responsible investment options.",
  },
  {
    title: "Time off",
    body: "Paid time off is flexible, and employees are encouraged to arrange their schedules as needed to remain balanced.",
  },
  {
    title: "Remote life",
    body: "Fully remote since 2004; we now work from over 90 cities across the U.S. and Canada.",
  },
  {
    title: "Annual upgrades",
    body: "Two annual stipends: a tech stipend for tools or equipment, and a professional development stipend.",
  },
  {
    title: "Family friendly",
    body: "New parents get 12 weeks of paid leave, and we support each other through the shifting responsibilities of working from home.",
  },
];

export const careersTestimonials = [
  {
    quote:
      "I love the camaraderie at CivicActions. We share and learn from each other constantly. Instead of competition, it's collaboration.",
    attribution: "David Sumner",
    role: "Associate Director of DevSecOps",
  },
  {
    quote:
      "I love the honest, collaborative atmosphere, and the way CivicActions prioritizes the well-being of team members.",
    attribution: "Iris Ibekwe",
    role: "Engineer",
  },
];

export const eeoStatement =
  "CivicActions is an equal opportunity employer. We do not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, disability, or veteran status.";

export const openPositions: OpenPosition[] = [];

export const hiringSteps: HiringStep[] = [
  {
    title: "Application Review",
    body: "Your application is reviewed by our hiring team and the folks who will be working with you.",
  },
  {
    title: "Workstyle Interview",
    body: "The first interview helps us learn how you collaborate, problem-solve, and work as a team player.",
  },
  {
    title: "Skills-based Interview",
    body: "This interview evaluates your qualifications for the specific role (technical, design, etc.)",
  },
  {
    title: "Deeper Dive",
    body: "You may be asked to do a take-home assignment, simulation, challenge, or interview with a client.",
  },
];

export const hiringClosing =
  "If all goes well, we will answer any questions and welcome you to the CivicActions team!";

export const culturePosts: CulturePost[] = [
  { title: "Quickly shifting to distributed teams in government", slug: "shifting-to-distributed-teams" },
  { title: "Best practices for agency teams transitioning to telework", slug: "telework-best-practices" },
  { title: "Improving scrum team flow on digital service projects", slug: "improving-scrum-team-flow" },
  { title: "The 30-second ritual that helps us work better together", slug: "thirty-second-ritual" },
  { title: "How our distributed team makes up for a year apart", slug: "a-year-apart" },
  { title: 'What "fierce openness" can do for government', slug: "fierce-openness" },
];
