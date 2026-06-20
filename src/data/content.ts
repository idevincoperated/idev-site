import type { SuiteApp, PortfolioProject, TeamMember } from './types';

export const suiteApps: SuiteApp[] = [
  {
    id: 'idevhut',
    name: 'iDevHut',
    tagline: 'Where developers gather',
    description:
      'A community hub for developers to share work, host discussions, and discover collaborators by stack and interest.',
    status: 'planned',
    category: 'Community',
    accent: 'violet',
    glyph: 'H',
  },
  {
    id: 'idevchat',
    name: 'iDevChat',
    tagline: 'Real-time messaging for dev teams',
    description:
      'Threaded, code-aware chat built for engineering teams — syntax highlighting, snippet sharing, and async standups.',
    status: 'planned',
    category: 'Communication',
    accent: 'cyan',
    glyph: 'C',
  },
  {
    id: 'idevtenancy',
    name: 'iDevTenancy',
    tagline: 'Multi-tenant infrastructure, simplified',
    description:
      'Provision and manage isolated tenant environments across the iDev Suite from a single control plane.',
    status: 'planned',
    category: 'Infrastructure',
    accent: 'violet',
    glyph: 'T',
  },
  {
    id: 'clinik',
    name: 'Clinik',
    tagline: 'Health records, modernized',
    description:
      'A streamlined patient and clinic management system built for small practices that have outgrown spreadsheets.',
    status: 'planned',
    category: 'Healthcare',
    accent: 'cyan',
    glyph: 'Cl',
  },
  {
    id: 'idevpulse',
    name: 'iDevPulse',
    tagline: 'Observability that speaks plainly',
    description:
      'Uptime, performance, and error monitoring across the Suite, with alerts that explain what actually broke.',
    status: 'planned',
    category: 'Monitoring',
    accent: 'violet',
    glyph: 'P',
  },
  {
    id: 'idevtrade',
    name: 'iDevTrade',
    tagline: 'Marketplace for goods & services',
    description:
      'A peer-to-peer trading platform connecting buyers and sellers within the iDev ecosystem.',
    status: 'requires-review',
    category: 'Commerce',
    accent: 'cyan',
    glyph: 'Tr',
  },
  {
    id: 'idevpay',
    name: 'iDevPay',
    tagline: 'Payments across the Suite',
    description:
      'Unified payments and payouts infrastructure connecting iDevTrade, Clinik, and future commerce products.',
    status: 'requires-review',
    category: 'Fintech',
    accent: 'violet',
    glyph: 'Pa',
  },
  {
    id: 'idevvault',
    name: 'iDevVault',
    tagline: 'Secure storage for secrets & files',
    description:
      'Encrypted storage for credentials, documents, and assets shared safely across iDev Suite products.',
    status: 'planned',
    category: 'Security',
    accent: 'cyan',
    glyph: 'V',
  },
  {
    id: 'idevflow',
    name: 'iDevFlow',
    tagline: 'Workflow automation, visualized',
    description:
      'Drag-and-drop automation builder for connecting iDev Suite apps and external services without writing glue code.',
    status: 'in-development',
    category: 'Automation',
    accent: 'violet',
    glyph: 'F',
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'naham-admin',
    title: 'Naham Stores — Admin Console',
    subtitle: 'Order management & revenue dashboard',
    image: 'naham-admin.png',
    tags: ['React', 'Dashboard', 'E-commerce'],
  },
  {
    id: 'naham-mobile',
    title: 'Naham Stores — Mobile App',
    subtitle: 'Storefront, checkout & account flows',
    image: 'naham-mobile.png',
    tags: ['Mobile', 'E-commerce', 'UI/UX'],
  },
  {
    id: 'mujahid-autos',
    title: 'Mujahid Autos',
    subtitle: 'Vehicle inventory & inquiry platform',
    image: 'mujahid-autos.png',
    tags: ['Web', 'Inventory', 'Dealership'],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'mukhtar',
    name: 'Olufadi Mukhtar',
    role: 'Founder & CEO',
    bio: "Leads IDEV's mission to unify hardware reliability and scalable multi-tenant platforms.",
    initials: 'OM',
  },
  {
    id: 'ibrahim-ahmad',
    name: 'Ibrahim Ahmad O.',
    role: 'Graphics Director',
    bio: 'Specialist in graphics design and UI/UX for next-gen embedded systems.',
    initials: 'IA',
  },
  {
    id: 'jimoh',
    name: 'Jimoh Ridwan',
    role: 'VP of Programming',
    bio: 'Lead programmer and responsive web app specialist.',
    initials: 'JR',
  },
  {
    id: 'adefioye',
    name: 'Adefioye Ibrahim',
    role: 'Chief Innovation Officer',
    bio: "Pioneer in AI-driven software optimization and cross-cloud orchestration, driving IDEV's core architectures.",
    initials: 'AI',
  },
];
