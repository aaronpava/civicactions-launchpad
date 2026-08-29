export const insightTopics = [
  "Accessibility",
  "Drupal",
  "Security & Compliance",
  "Human-Centered Design",
  "Agile",
  "Open Source",
  "Remote Work",
] as const;

export type InsightTopic = (typeof insightTopics)[number];

export type InsightPost = {
  slug: string;
  title: string;
  topic: InsightTopic;
  author: string;
  date: string;
  displayDate: string;
  excerpt: string;
  body: string[];
};

export const insightsIntro = "Thoughts and takeaways from our work in the field.";

export const posts: InsightPost[] = [
  {
    slug: "designing-a-veteran-first-online-experience",
    title: "Designing a Veteran-first online experience",
    topic: "Human-Centered Design",
    author: "Karina Delgado",
    date: "2026-06-18",
    displayDate: "June 18, 2026",
    excerpt:
      "How we help VA deliver consistent and useful information, starting with what Veterans actually search for when they need care.",
    body: [
      "When a Veteran looks for care, they rarely start at a homepage. They start at a search engine, land somewhere in the middle of a large website, and try to work out whether the page in front of them is current and applies to them.",
      "Our research at VA kept returning to that moment. People were not confused by technology; they were confused by inconsistency. The same benefit was described three different ways, and the page that ranked best was not always the page that was maintained.",
      "So we treated consistency as a product feature. We built content types that require the fields a Veteran looks for — eligibility, what to bring, how long it takes, who to call — and we made those fields easy for facility staff to keep current without a developer.",
      "The result is less dramatic than a redesign and more useful: the same answer, in the same shape, wherever a Veteran lands.",
    ],
  },
  {
    slug: "improving-the-ato-process-with-compliance-as-code",
    title: "Improving the ATO process with Compliance as Code",
    topic: "Security & Compliance",
    author: "David Sumner",
    date: "2026-05-27",
    displayDate: "May 27, 2026",
    excerpt:
      "Better and faster security for government IT systems, by treating control documentation as code that stays close to the system it describes.",
    body: [
      "Authority to Operate is often described as paperwork. In practice it is a translation problem: engineers describe a system in configuration, and assessors read about it in prose written months earlier.",
      "Compliance as Code closes that gap. Control narratives live in version control next to the infrastructure they describe, and the evidence for each control is produced by the same pipeline that deploys the system.",
      "That changes the review conversation. Instead of asking whether a document is accurate, an assessor can look at when a control was last validated and by what job.",
      "It also changes the engineering conversation. When compliance is generated, drift is a build failure rather than a discovery during the next assessment.",
    ],
  },
  {
    slug: "one-drupal-platform-multiple-government-products",
    title: "One Drupal platform, multiple government products",
    topic: "Drupal",
    author: "Andy Hawks",
    date: "2026-05-06",
    displayDate: "May 6, 2026",
    excerpt:
      "A community of practice for government accessibility, built by sharing one well-maintained platform across many product teams.",
    body: [
      "Agencies rarely have one website. They have dozens, often built at different times by different vendors, each with its own upgrade path and accessibility debt.",
      "A shared platform is not just a cost decision. When many product teams use the same components, an accessibility fix made once benefits every site that adopts the update.",
      "The hard part is governance, not code. We help agencies decide what belongs in the platform, what belongs to a product team, and how a team proposes a change to the shared layer.",
      "Done well, the platform becomes a community of practice: teams review each other's patterns and the standard rises for everyone.",
    ],
  },
  {
    slug: "shifting-to-distributed-teams",
    title: "Quickly shifting to distributed teams in government",
    topic: "Remote Work",
    author: "Leah Brennan",
    date: "2026-04-22",
    displayDate: "April 22, 2026",
    excerpt:
      "What agencies can borrow from companies that have worked remotely for two decades, starting with written communication.",
    body: [
      "We have been fully distributed since 2004, long enough to learn that remote work is mostly a writing problem.",
      "Teams that write decisions down can hand off work across time zones. Teams that rely on hallway conversation lose context every time someone takes leave.",
      "For agency teams making the shift, we suggest starting narrow: one written decision log, one meeting with an agenda, one channel where questions get answered in public rather than in direct messages.",
      "Tooling matters less than the habit. The habit is what survives a reorganization.",
    ],
  },
  {
    slug: "telework-best-practices",
    title: "Best practices for agency teams transitioning to telework",
    topic: "Remote Work",
    author: "Helena Stroud",
    date: "2026-04-08",
    displayDate: "April 8, 2026",
    excerpt:
      "Practical guidance on meetings, availability, and onboarding for public sector teams working apart.",
    body: [
      "Telework policy usually answers the question of where people work. It rarely answers how they will work, which is where most friction lives.",
      "We recommend agreeing on core hours rather than full-day availability, and writing down what an urgent request looks like so people can safely ignore everything else.",
      "Onboarding deserves special attention. New staff who join remotely cannot absorb norms by watching, so norms have to be documented and repeated.",
      "The teams that adapt fastest are the ones that treat their own practices as a product to iterate on.",
    ],
  },
  {
    slug: "improving-scrum-team-flow",
    title: "Improving scrum team flow on digital service projects",
    topic: "Agile",
    author: "Quinn Delacroix",
    date: "2026-03-19",
    displayDate: "March 19, 2026",
    excerpt:
      "Why finishing work matters more than starting it, and how blended agency and contractor teams get there.",
    body: [
      "On many government projects the backlog is not the constraint. Review is. Work sits complete-but-unapproved while the team starts something new.",
      "Making that visible is usually enough to change behavior. When a board shows five items waiting for review, teams stop pulling and start helping.",
      "We also encourage explicit work-in-progress limits per column, agreed by the team rather than imposed, and a standing conversation about the oldest item on the board.",
      "Flow improvements compound. Shorter cycle time means faster feedback, which means fewer large rewrites later.",
    ],
  },
  {
    slug: "thirty-second-ritual",
    title: "The 30-second ritual that helps us work better together",
    topic: "Remote Work",
    author: "Zoe Marchetti",
    date: "2026-03-04",
    displayDate: "March 4, 2026",
    excerpt: "A short check-in at the start of every meeting, and why it changes what people say next.",
    body: [
      "Every meeting starts with a quick round: one word or one sentence about how you are arriving.",
      "It takes about thirty seconds per person and it does two things. It gets everyone's voice into the room early, and it gives useful context for the rest of the hour.",
      "People are more direct after they have already spoken once. Quieter colleagues are more likely to raise a concern later in the call.",
      "It is a small ritual with an outsized effect on how honest a distributed team can be.",
    ],
  },
  {
    slug: "a-year-apart",
    title: "How our distributed team makes up for a year apart",
    topic: "Remote Work",
    author: "Farah Haddad",
    date: "2026-02-17",
    displayDate: "February 17, 2026",
    excerpt: "Deliberate connection, from working groups to annual gatherings, when there is no office to rely on.",
    body: [
      "Without an office, connection has to be scheduled. We do it through practice groups, peer learning sessions, and an annual gathering where the agenda is mostly time together.",
      "The point is not to simulate an office. It is to build enough trust that hard conversations can happen over video without ceremony.",
      "We also keep a low bar for starting a group. If two people care about accessibility testing or data visualization, that is a group.",
      "Belonging is not a perk. It is what makes candid feedback possible.",
    ],
  },
  {
    slug: "fierce-openness",
    title: 'What "fierce openness" can do for government',
    topic: "Open Source",
    author: "Aaron Pava",
    date: "2026-01-28",
    displayDate: "January 28, 2026",
    excerpt: "Working in the open changes what teams build, not just who can see it.",
    body: [
      "Open source in government is often framed as a licensing choice. We think of it as a working style.",
      "When code, decisions, and roadmaps are public, teams write clearer commit messages, document assumptions, and design for reuse by people they will never meet.",
      "That discipline pays off inside the agency first. The next team to touch the system is usually a different team.",
      "Public work also invites correction. We have had accessibility bugs reported by strangers who could see the code before a release shipped.",
    ],
  },
  {
    slug: "automated-accessibility-testing-in-ci",
    title: "Putting automated accessibility testing in your pipeline",
    topic: "Accessibility",
    author: "Jamila Ferris",
    date: "2026-01-14",
    displayDate: "January 14, 2026",
    excerpt: "Automation catches roughly a third of issues. Here is how to make that third stop coming back.",
    body: [
      "Automated tools cannot tell you whether a heading makes sense or whether a form is understandable. They are excellent at catching regressions in the things that are mechanical.",
      "We run axe against key templates on every pull request and fail the build on new violations, while keeping a documented list of accepted exceptions.",
      "The manual work then goes where it belongs: keyboard walkthroughs, screen reader testing, and sessions with people who use assistive technology daily.",
      "Together the two approaches keep a large site from sliding backward between audits.",
    ],
  },
  {
    slug: "content-models-that-survive-reorgs",
    title: "Content models that survive a reorganization",
    topic: "Drupal",
    author: "Nadia Rahmani",
    date: "2025-12-11",
    displayDate: "December 11, 2025",
    excerpt: "Model the service people need, not the office that currently owns it.",
    body: [
      "Government sites often mirror the org chart, which means every reorganization becomes a migration.",
      "We model content around services and audiences instead. An office name becomes a field, not a section of the site.",
      "This is harder up front because it requires agreement across offices about what a service actually is.",
      "It pays for itself the first time a program moves and the public URLs stay where people bookmarked them.",
    ],
  },
  {
    slug: "open-data-that-people-actually-use",
    title: "Publishing open data that people actually use",
    topic: "Open Source",
    author: "Omar Castellanos",
    date: "2025-11-20",
    displayDate: "November 20, 2025",
    excerpt: "A dataset is not open until someone outside your agency can find it and understand it.",
    body: [
      "Compliance with an open data mandate is a starting point, not an outcome. Plenty of published datasets go unused because nobody can tell what a column means.",
      "We start with the people who want the data: journalists, researchers, other agencies, and app developers. Their questions shape the catalog.",
      "Good metadata, stable identifiers, and a documented update cadence do more for reuse than any dashboard.",
      "When those basics are in place, useful tools tend to appear without the agency building them.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function relatedPosts(post: InsightPost, count = 3) {
  const sameTopic = posts.filter((p) => p.slug !== post.slug && p.topic === post.topic);
  const rest = posts.filter((p) => p.slug !== post.slug && p.topic !== post.topic);
  return [...sameTopic, ...rest].slice(0, count);
}
