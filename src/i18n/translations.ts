import type { Language } from "../types/language";
import type { Level } from "../types/portfolio";

export type Translations = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    certifications: string;
    contact: string;
  };
  languageSwitcher: {
    label: string;
  };
  hero: {
    currently: string;
  };
  about: {
    title: string;
    subtitle: string;
    focusTitle: string;
    workStyleTitle: string;
    quickInfoTitle: string;
    languagesLabel: string;
    licenseLabel: string;
    interestsLabel: string;
  };
  skills: {
    title: string;
    subtitle: string;
    levels: Record<Level, string>;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  education: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    githubLabel: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    moreTitle: string;
    viewCertificate: string;
    openInNewWindow: string;
    closeModalLabel: string;
    certificateAlt: (name: string, org: string) => string;
    certificatePreviewTitle: (name: string) => string;
  };
  contact: {
    title: string;
    subtitle: string;
    heading: string;
    description: string;
  };
  profilePhoto: {
    alt: string;
    fallback: string;
  };
  footer: {
    builtWith: string;
  };
};

export const translations: Record<Language, Translations> = {
  cs: {
    nav: {
      about: "O mně",
      skills: "Dovednosti",
      projects: "Projekty",
      experience: "Zkušenosti",
      education: "Vzdělání",
      certifications: "Certifikace",
      contact: "Kontakt",
    },
    languageSwitcher: {
      label: "Přepnout jazyk",
    },
    hero: {
      currently: "Aktuálně",
    },
    about: {
      title: "O mně",
      subtitle: "Krátce, konkrétně – co přináším a co mě baví stavět.",
      focusTitle: "Fokus",
      workStyleTitle: "Styl práce",
      quickInfoTitle: "Rychlé info",
      languagesLabel: "Jazyky",
      licenseLabel: "Řidičský průkaz",
      interestsLabel: "Zájmy",
    },
    skills: {
      title: "Dovednosti",
      subtitle: "Přehled technologií a úroveň",
      levels: {
        advanced: "pokročilý",
        intermediate: "středně pokročilý",
        basic: "základy",
      },
    },
    experience: {
      title: "Zkušenosti",
      subtitle: "Timeline – co jsem dělal a s čím.",
    },
    education: {
      title: "Vzdělání",
      subtitle: "Formální vzdělání a odborné zaměření.",
    },
    projects: {
      title: "Projekty",
      subtitle: "Výběr věcí, které dobře ukazují stack i způsob přemýšlení.",
      githubLabel: "GitHub",
    },
    certifications: {
      title: "Certifikace & kurzy",
      subtitle: "Odborné vzdělávání mimo školu a praxi.",
      moreTitle: "Další kurzy a certifikace",
      viewCertificate: "Zobrazit certifikát",
      openInNewWindow: "Otevřít v novém okně",
      closeModalLabel: "Zavřít náhled certifikátu",
      certificateAlt: (name, org) => `Certifikát: ${name}, ${org}`,
      certificatePreviewTitle: (name) => `Náhled certifikátu: ${name}`,
    },
    contact: {
      title: "Kontakt",
      subtitle: "Rychlá cesta, jak se spojit.",
      heading: "Napiš mi",
      description:
        "Nejrychlejší je email. Můžu poslat ukázky soukromých projektů a domluvit se na detailech.",
    },
    profilePhoto: {
      alt: "Portrét Petra Šafraty",
      fallback: "Foto brzy doplním",
    },
    footer: {
      builtWith: "Built with React + TypeScript",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
    },
    languageSwitcher: {
      label: "Switch language",
    },
    hero: {
      currently: "Currently",
    },
    about: {
      title: "About",
      subtitle: "Short and to the point – what I bring and what I enjoy building.",
      focusTitle: "Focus",
      workStyleTitle: "Working style",
      quickInfoTitle: "Quick info",
      languagesLabel: "Languages",
      licenseLabel: "Driver's license",
      interestsLabel: "Interests",
    },
    skills: {
      title: "Skills",
      subtitle: "Overview of technologies and proficiency level",
      levels: {
        advanced: "Advanced",
        intermediate: "Intermediate",
        basic: "Basic",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "Timeline – what I've worked on and with what.",
    },
    education: {
      title: "Education",
      subtitle: "Formal education and areas of specialization.",
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of work that showcases the stack and way of thinking.",
      githubLabel: "GitHub",
    },
    certifications: {
      title: "Certifications & Courses",
      subtitle: "Professional development outside school and work.",
      moreTitle: "Additional courses & certifications",
      viewCertificate: "View certificate",
      openInNewWindow: "Open in new window",
      closeModalLabel: "Close certificate preview",
      certificateAlt: (name, org) => `Certificate: ${name}, ${org}`,
      certificatePreviewTitle: (name) => `Certificate preview: ${name}`,
    },
    contact: {
      title: "Contact",
      subtitle: "A quick way to get in touch.",
      heading: "Get in touch",
      description:
        "Email is the fastest way to reach me. I can share samples of private projects and discuss details.",
    },
    profilePhoto: {
      alt: "Portrait of Petr Šafrata",
      fallback: "Photo coming soon",
    },
    footer: {
      builtWith: "Built with React + TypeScript",
    },
  },
};
