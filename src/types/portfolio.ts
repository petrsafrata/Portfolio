export type Level = "základy" | "středně pokročilý" | "pokročilý";
export type LinkIcon = "Mail" | "Github" | "Briefcase";
export type SkillIcon = "Server" | "Code2" | "Database" | "Wrench" | "Layers";

export type Link = {
  label: string;
  value: string;
  href: string;
  icon: LinkIcon;
};

export type Skill = { name: string; level: Level };

export type SkillGroup = {
  title: string;
  icon: SkillIcon;
  items: Skill[];
};

export type Experience = {
  company: string;
  role: string;
  type: string;
  period: string;
  bullets: string[];
};

export type Education = {
  school: string;
  program: string;
  degree: string;
  period: string;
  notes: string[];
};

export type Project = {
  title: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  note?: string;
};

export type Certification = {
  name: string;
  org: string;
  year: string;
  issuer?: string;
  tags?: string[];
  certificate?: string;
};

export type Service = {
  title: string;
  description: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  location: string;
  summary: string;
  links: Link[];
  quickInfo: {
    languages: { name: string; level: string }[];
    license: string;
    interests: string[];
  };
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  services: Service[];
  projects: Project[];
  certifications: Certification[];
  certificationsSecondary: Certification[];
};