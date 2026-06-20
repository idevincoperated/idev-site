export type AppStatus = 'live' | 'in-development' | 'planned' | 'requires-review';

export interface SuiteApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  category: string;
  accent: 'violet' | 'cyan';
  glyph: string; // short letterform used in the placeholder icon
}

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
}
