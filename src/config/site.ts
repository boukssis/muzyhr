/**
 * Single source for muzyhr's public facts, navigation, and the
 * founding-client announcement. Hide the announcement by setting
 * `announcement.enabled` to false. Do not add scarcity, pricing,
 * or unverified credentials here.
 */
export const announcement = {
  enabled: true,
  eyebrow: "Founding client opportunities",
  message:
    "muzyhr is welcoming businesses ready to build stronger HR foundations.",
  cta: "Let's connect",
  href: "/contact" as const,
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
  { id: "onboarding-offboarding", label: "Onboarding & Offboarding" },
  { id: "general", label: "General Enquiry" },
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
  "Process improvement",
] as const;

export const focusAreas = [
  "Group Benefits",
  "Group Retirement Services",
  "HR Infrastructure",
  "Employee Onboarding",
  "People Operations",
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
      "HR process development",
      "Employee lifecycle processes",
      "HR documentation and templates",
      "Policy and procedure support",
      "HR audits and process reviews",
      "Internal HR workflows",
      "Employee file management",
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
      "Benefits administration support",
      "Employee enrolment support",
      "Benefits communications",
      "Vendor coordination",
      "Ongoing administration support",
      "Benefits-related workflow organization",
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
      "Employee announcements",
      "Benefits communications",
      "HR communications",
      "Internal resources and guides",
      "Employee-facing documentation",
      "Onboarding communications",
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
      "HR process audits",
      "Documentation reviews",
      "Benefits process reviews",
      "Workflow assessments",
      "Improvement recommendations",
      "Action plans",
      "Process standardization",
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
      "A conversation about how people operations work today — onboarding, benefits, documents, vendors, and the places where the work still depends on memory.",
  },
  {
    number: "02",
    title: "Organize",
    summary: "Identify gaps, priorities, and opportunities to improve.",
    detail:
      "Sort what is already in place from what is missing, then agree on a practical order of work. The aim is a clearer picture, not a long list of everything that could change.",
  },
  {
    number: "03",
    title: "Build",
    summary: "Develop practical documentation, workflows, and systems.",
    detail:
      "Create the documents, workflows, and simple systems the business can actually use — templates, guides, and processes written for the way the team works.",
  },
  {
    number: "04",
    title: "Support",
    summary: "Help implement improvements and strengthen everyday operations.",
    detail:
      "Stay alongside implementation so the new structure is used. That can include benefits administration, employee communications, and the everyday details that keep operations steady.",
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
