/**
 * Single source for muzyhr's public facts, navigation, and the
 * founding-client announcement. Hide the announcement by setting
 * `announcement.enabled` to false. Do not add scarcity, pricing,
 * or unverified credentials here.
 */
export const announcement = {
  /** Turn on only after Tamara confirms founding-client availability. */
  enabled: false,
  eyebrow: "Founding client opportunities",
  message:
    "muzyhr is welcoming businesses ready to build stronger HR foundations.",
  cta: "Let's connect",
  href: "/contact" as const,
};

export const preview = {
  label: "Concept preview",
  note: "An unofficial design concept. Not an authorized muzyhr website.",
};

export const company = {
  name: "muzyhr",
  founder: "Tamara Siziba",
  role: "Founder, muzyhr",
  founded: "January 2026",
  foundingDate: "2026-01",
  location: "Montréal, Québec, Canada",
  locality: "Montréal",
  region: "Québec",
  country: "CA",
  linkedin: "https://www.linkedin.com/company/muzy-hr/",
  founderLinkedin: "https://www.linkedin.com/in/tamara-siziba-257632220/",
  positioning: "Streamlined HR infrastructure that grows with your business.",
  promise: "Turning workplace chaos into structured, scalable HR operations.",
};

export const nav = [
  { href: "/", label: "Home", number: "01" },
  { href: "/services", label: "Services", number: "02" },
  { href: "/approach", label: "Our Approach", number: "03" },
  { href: "/about", label: "About", number: "04" },
  { href: "/contact", label: "Contact", number: "05" },
] as const;

export type NavHref = (typeof nav)[number]["href"];

export const serviceOptions = [
  { id: "hr-infrastructure", label: "HR Infrastructure & Operations" },
  { id: "benefits-administration", label: "Benefits Administration" },
  { id: "employee-communications", label: "Employee Communications" },
  { id: "hr-audit", label: "HR Audit & Optimization" },
  { id: "other", label: "Other" },
] as const;

export type ServiceId = (typeof serviceOptions)[number]["id"];

export const businessSizes = [
  "1–10 employees",
  "11–25 employees",
  "26–50 employees",
  "51–100 employees",
  "More than 100 employees",
] as const;

export const expertise = [
  "HR operations",
  "Benefits",
  "Onboarding",
  "Communications",
  "Process improvement",
] as const;

export const focusAreas = [
  "Group Benefits",
  "Group Retirement Services",
  "HR Infrastructure",
  "Benefits Administration",
  "Employee Communications",
  "Onboarding",
  "Process Improvement",
] as const;

export const services = [
  {
    id: "hr-infrastructure",
    number: "01",
    name: "HR Infrastructure & Operations",
    headline: "Build the foundation.",
    description:
      "We help you establish the processes, systems, and documentation that keep your people operations running smoothly.",
    capabilities: [
      { name: "HR process development", detail: "Give every recurring HR task a clear path to follow." },
      { name: "Employee lifecycle processes", detail: "Give every new employee a consistent experience from day one." },
      { name: "HR documentation and templates", detail: "Put the documents people need where they can actually find them." },
      { name: "Policy and procedure support", detail: "Write the rules of the workplace so they are easy to use." },
      { name: "HR audits and process reviews", detail: "See what is working before small gaps turn into daily friction." },
      { name: "Internal HR workflows", detail: "Make handoffs between people obvious, not improvised." },
      { name: "Employee file management", detail: "Keep employee records organized and easier to maintain." },
    ],
    bestFor: "Growing businesses that need reliable HR structure.",
    homeSummary:
      "Processes, documents, and workflows in one dependable structure — so the business is not held together by memory.",
    cta: "Discuss HR infrastructure",
  },
  {
    id: "benefits-administration",
    number: "02",
    name: "Benefits Administration",
    headline: "Take benefits off your plate.",
    description:
      "From employee enrolment to ongoing coordination, we help make benefits administration simpler for businesses and the people they support.",
    capabilities: [
      { name: "Benefits administration support", detail: "Take the day-to-day administration off the founder’s desk." },
      { name: "Employee enrolment support", detail: "Help new employees get enrolled without a scramble." },
      { name: "Benefits communications", detail: "Explain the plan in language people can use." },
      { name: "Vendor coordination", detail: "Keep insurers and providers moving with the business, not around it." },
      { name: "Ongoing administration support", detail: "Handle the changes that show up after enrolment." },
      { name: "Benefits-related workflow organization", detail: "Give benefits a repeatable path instead of a one-off inbox thread." },
    ],
    bestFor:
      "Companies offering employee benefits without dedicated in-house HR administration.",
    homeSummary:
      "Enrolment, vendor coordination, and day-to-day benefits administration, made simpler for the business and its people.",
    cta: "Discuss benefits administration",
  },
  {
    id: "employee-communications",
    number: "03",
    name: "Employee Communications",
    headline: "Make HR easier to understand.",
    description:
      "Clear communication helps employees feel informed and supported. We help businesses communicate important people-related information consistently and professionally.",
    capabilities: [
      { name: "Employee announcements", detail: "Share important news in a voice the whole company can follow." },
      { name: "Benefits communications", detail: "Tell people what their benefits mean, not just that they exist." },
      { name: "HR communications", detail: "Make people-related updates consistent from one message to the next." },
      { name: "Internal resources and guides", detail: "Give employees a place to look before they have to ask." },
      { name: "Employee-facing documentation", detail: "Write the materials people actually receive, clearly." },
      { name: "Onboarding communications", detail: "Welcome someone with the same clear information every time." },
    ],
    bestFor:
      "Businesses looking to create clearer and more consistent employee experiences.",
    homeSummary:
      "Clear, consistent information for employees — from announcements and benefits notes to onboarding.",
    cta: "Discuss employee communications",
  },
  {
    id: "hr-audit",
    number: "04",
    name: "HR Audit & Optimization",
    headline: "Find the gaps before they become problems.",
    description:
      "We review existing people operations processes to identify what's working, what's missing, and where practical improvements can make a difference.",
    capabilities: [
      { name: "HR process audits", detail: "Look at how people operations actually run, not how they are supposed to." },
      { name: "Documentation reviews", detail: "Find the policies and guides that are missing, outdated, or hard to find." },
      { name: "Benefits process reviews", detail: "See where enrolment and administration create avoidable work." },
      { name: "Workflow assessments", detail: "Identify gaps and make daily HR processes easier to follow." },
      { name: "Improvement recommendations", detail: "Leave with practical changes, not a pile of observations." },
      { name: "Action plans", detail: "Put the next steps in an order a growing team can carry out." },
      { name: "Process standardization", detail: "Turn one-off habits into a way of working the next hire can follow." },
    ],
    bestFor:
      "Businesses that already have HR processes but want stronger organization and consistency.",
    homeSummary:
      "A clear look at what is working, what is missing, and which practical changes will strengthen people operations.",
    cta: "Discuss an HR audit",
  },
] as const;

export const relatedWork = [
  "Employee onboarding and offboarding",
  "Vendor coordination",
  "Employee file management",
  "Internal documentation",
  "Workflow optimization",
  "Scalable HR systems",
] as const;

export const problems = [
  "Onboarding differs from employee to employee.",
  "Important documents are scattered.",
  "Benefits become difficult to manage.",
  "Employees don't always know where to find information.",
  "Essential processes rely on one person's memory.",
] as const;

export const steps = [
  {
    number: "01",
    title: "Understand",
    summary: "Learn how the business currently manages its people operations.",
    detail:
      "Learn how onboarding, benefits, documents, and vendors work today, including what still depends on memory.",
  },
  {
    number: "02",
    title: "Organize",
    summary: "Identify gaps, priorities, and opportunities to improve.",
    detail:
      "Separate what is working from what is missing, then agree on a practical order of work.",
  },
  {
    number: "03",
    title: "Build",
    summary: "Develop practical documentation, workflows, and systems.",
    detail:
      "Create the templates, guides, and workflows the team can actually use.",
  },
  {
    number: "04",
    title: "Support",
    summary: "Help implement improvements and strengthen everyday operations.",
    detail:
      "Help put the structure into everyday use, from benefits administration to employee communications.",
  },
] as const;

export const reactiveHr = [
  "Scattered documentation",
  "Repeated administrative confusion",
  "Inconsistent onboarding",
  "Unclear responsibilities",
] as const;

export const organizedHr = [
  "Structured workflows",
  "Clear information",
  "Repeatable processes",
  "Better employee communication",
] as const;

export const engagementShapes = [
  {
    title: "One-time HR infrastructure projects",
    text: "For businesses that need the foundation built: processes, templates, and a clearer way of working.",
  },
  {
    title: "Process improvement support",
    text: "For teams that already have a way of doing things and want it tighter and more consistent.",
  },
  {
    title: "Employee documentation projects",
    text: "For policies, guides, onboarding materials, and the documents people should be able to find.",
  },
  {
    title: "Ongoing operational assistance",
    text: "For businesses that want continued help with administration, communications, and day-to-day people operations.",
  },
] as const;

export const experience = [
  "Designed and implemented an HR operations framework.",
  "Created onboarding workflows and employee documentation systems.",
  "Developed standardized processes.",
  "Established systems designed to support workforce growth.",
] as const;

export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) return "http://localhost:3000";
  try {
    return new URL(raw).origin;
  } catch {
    return "http://localhost:3000";
  }
}

export function deliveryEnabled() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.RESEND_FROM_EMAIL,
  );
}
