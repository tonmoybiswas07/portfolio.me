export interface Project {
  id: number;
  title: string;
  badge: string;
  description: string;
  domain: string;
  role: string;
  status: string;
  live: string;
  source: string;
  tags: string[];
  highlights: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  number: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  type: string;
  details: string;
  status?: string;
}

export interface EducationItem {
  number: string;
  title: string;
  institution: string;
  duration: string;
  description: string;
  gpa: string;
  stream: string;
  subjects: string[];
}

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}
