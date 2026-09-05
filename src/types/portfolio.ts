export type Level = "basic" | "intermediate" | "advanced";
export type LinkIcon = "Mail" | "Github" | "Briefcase";
export type SkillIcon = "Server" | "Code2" | "Database" | "Wrench" | "Layers";
export type BadgeIcon = "ShieldCheck" | "Database" | "Wrench" | "Terminal";
export type IconName = LinkIcon | SkillIcon | BadgeIcon;

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

export type Portfolio = {
  name: string;
  title: string;
  location: string;
  headline: string;
  summary: string;
  heroBadges: { icon: BadgeIcon; label: string }[];
  links: Link[];
  quickInfo: {
    languages: { name: string; level: string }[];
    license: string;
    interests: string[];
  };
  about: {
    focus: string[];
    workStyle: string[];
  };
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  services: Service[];
  projects: Project[];
  certifications: Certification[];
  certificationsSecondary: Certification[];
};
