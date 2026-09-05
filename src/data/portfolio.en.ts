import type { Portfolio } from "../types/portfolio";

export const portfolioEn: Portfolio = {
  name: "Petr Šafrata",
  title: "Java / Spring Boot • Backend • Databases • Docker",
  location: "Czech Republic",
  headline: "Backend systems in Java. From data to deployment.",
  summary:
    "I build backend systems in Java (Spring Boot) – from data model and API design, through working with databases (MongoDB, Oracle, PostgreSQL), to deployment with Docker. I focus on reliable applications, data pipelines and scalable architecture.",
  heroBadges: [
    { icon: "ShieldCheck", label: "Spring Boot" },
    { icon: "Database", label: "MongoDB / Oracle" },
    { icon: "Wrench", label: "Docker" },
    { icon: "Terminal", label: "JS/TS automation" },
  ],
  links: [
    {
      label: "Email",
      value: "info@petrsafrata.cz",
      href: "mailto:info@petrsafrata.cz",
      icon: "Mail",
    },
    {
      label: "GitHub",
      value: "https://github.com/petrsafrata",
      href: "https://github.com/petrsafrata",
      icon: "Github",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/petr-%C5%A1afrata-428b4521b/",
      href: "https://www.linkedin.com/in/petr-%C5%A1afrata-428b4521b/",
      icon: "Briefcase",
    },
  ],
  quickInfo: {
    languages: [
      { name: "Czech", level: "native" },
      { name: "English", level: "B2" },
    ],
    license: "Category B",
    interests: ["squash", "inline skating", "yoga", "gym", "travel", "origami"],
  },
  about: {
    focus: [
      "Backend applications in Java and API design (Spring Boot).",
      "Data models, validation schemas, working with MongoDB/Oracle/PostgreSQL.",
      "Document search, indexing, content extraction (Tika/OCR/ASR).",
      "Dockerization and reproducible deployments.",
    ],
    workStyle: [
      "I prefer clean design, understandable architecture and practical documentation.",
      "I enjoy turning complex problems into working software solutions.",
      "As an instructor, I can explain things clearly and drive them to a working result.",
    ],
  },
  skills: [
    {
      title: "Back-end",
      icon: "Server",
      items: [
        { name: "Java", level: "advanced" },
        { name: "Spring Boot", level: "advanced" },
        { name: "C# / .NET", level: "intermediate" },
        { name: "Python", level: "intermediate" },
        { name: "TypeScript", level: "basic" },
      ],
    },
    {
      title: "Front-end",
      icon: "Code2",
      items: [
        { name: "JavaScript", level: "advanced" },
        { name: "HTML", level: "advanced" },
        { name: "CSS", level: "advanced" },
        { name: "TypeScript", level: "basic" },
        { name: "ReactJS", level: "basic" },
      ],
    },
    {
      title: "Databases & Search",
      icon: "Database",
      items: [
        { name: "SQL", level: "advanced" },
        { name: "PostgreSQL", level: "intermediate" },
        { name: "Oracle DB/ PL/SQL", level: "intermediate" },
        { name: "MS SQL", level: "intermediate" },
        { name: "MongoDB", level: "intermediate" },
        { name: "ElasticSearch", level: "basic" },
      ],
    },
    {
      title: "DevOps",
      icon: "Wrench",
      items: [
        { name: "Maven", level: "advanced" },
        { name: "Git / GitHub", level: "advanced" },
        { name: "Docker", level: "intermediate" },
        { name: "Linux", level: "intermediate" },
        { name: "Apache", level: "basic" },
      ],
    },
    {
      title: "Analysis & Collaboration",
      icon: "Layers",
      items: [
        { name: "Requirements analysis", level: "advanced" },
        { name: "Data analysis", level: "advanced" },
        { name: "Communication", level: "advanced" },
        { name: "Teamwork", level: "advanced" },
      ],
    },
  ],
  experience: [
    {
      company: "ReDat Recording",
      role: "Java Developer",
      type: "full-time",
      period: "Feb 2026 - present",
      bullets: [
        "Developing backend parts of systems in Java.",
        "Designing and implementing APIs for integration with the frontend and external services.",
        "Ensuring business logic, working with databases and optimizing performance.",
      ],
    },
    {
      company: "Univerzita Pardubice",
      role: "Lecturer",
      type: "part-time",
      period: "Sep 2025 – present",
      bullets: [
        "Teaching the Fundamentals of Programming course.",
        "Preparing and leading exercises in Java.",
        "Helping students understand the basic principles of algorithmic thinking and programming.",
      ],
    },
    {
      company: "Neit Consulting",
      role: "Consultant",
      type: "full-time",
      period: "Oct 2021 – Feb 2026",
      bullets: [
        "Analyzing client requirements and modeling/processing them in the Team Assistant application.",
        "Designing and building company processes, overseeing projects and communicating with users.",
        "Integrating enterprise systems and developing scripts (JavaScript/TypeScript) for synchronization, automation and data transformation.",
      ],
    },
  ],
  education: [
    {
      school: "Univerzita Pardubice",
      program: "Information Technology",
      degree: "Bc.",
      period: "2022 – 2025",
      notes: [
        "Focus on programming, data structures and algorithms",
        "Database systems (Oracle, PostgreSQL, MongoDB)",
        "Software engineering, architecture design",
      ],
    },
  ],
  services: [
    {
      title: "Software delivery",
      description:
        "Design and development of custom applications: backend services, APIs and related integrations for business processes.",
    },
    {
      title: "IT consulting",
      description:
        "Architecture consulting, technology selection, audit of existing solutions and roadmap planning.",
    },
    {
      title: "Data processing",
      description:
        "Data pipelines, migration, cleaning and transformation, schema design and query optimization.",
    },
    {
      title: "Hosting and related services",
      description:
        "Deployment and administration of applications, Dockerization, monitoring, backups and basic operational support.",
    },
    {
      title: "Web portals",
      description:
        "Development of web interfaces and internal portals connected to APIs, with an emphasis on UX and speed.",
    },
  ],
  projects: [
    {
      title: "Virtual Storage",
      stack: ["Java", "Spring", "Docker", "ElasticSearch", "Tika", "Tesseract", "Vosk"],
      highlights: [
        "Web document storage with search powered by ElasticSearch indexing.",
        "Integration of OCR (Tesseract) and ASR (Vosk), content extraction via Apache Tika.",
        "Backend in Java/Spring Boot, deployed with Docker Compose.",
      ],
      githubUrl: "https://github.com/petrsafrata/VirtualStorage",
    },
    {
      title: "Pixel Deck",
      stack: ["Python", "Raspberry Pi", "Docker"],
      highlights: [
        "Modular application designed to control a 64×64 RGB LED matrix.",
        "Renders dynamic scenes such as a clock, weather, etc.",
        "Built with a clean scene abstraction, centralized configuration and hardware-independent rendering logic.",
      ],
      githubUrl: "https://github.com/petrsafrata/Pixel_Deck",
    },
    {
      title: "DB Scope",
      stack: ["Java", "Spring", "ReactJS", "TypeScript", "Docker", "PostgreSQL"],
      highlights: [
        "Full-stack application / REST API for exploring and managing external SQL databases without predefined entities for the target schema.",
        "Database-agnostic, allows connecting to different SQL databases and exploring their schemas and data.",
        "Supports basic CRUD operations, schema visualization and data export.",
      ],
      githubUrl: "https://github.com/petrsafrata/DBScope",
    },
    {
      title: "RetryLibrary",
      stack: ["Java"],
      highlights: [
        "A small dependency-free Java library providing simple, readable retry logic for unstable or intermittent operations.",
        "Usable for API calls, file access, database operations, etc.",
      ],
      githubUrl: "https://github.com/petrsafrata/RetryLibrary",
    },
    {
      title: "HtmlBodyCleaner",
      stack: ["Java"],
      highlights: [
        "A small Java library for sanitizing and normalizing the bodies of HTML documents.",
        "Extracts the document body, sanitizes tags and attributes according to configurable rules.",
        "Designed for server-side use in web pipelines and Java batch processors.",
      ],
      githubUrl: "https://github.com/petrsafrata/HtmlBodyCleaner",
    },
    {
      title: "Municipality Management",
      stack: ["Java", "JavaFX"],
      highlights: [
        "Application using data structures (heap, queues, lists).",
        "Generating, adding, deleting, filtering and traversing elements.",
        "Controlled via both GUI and CLI, with data export/import.",
      ],
      githubUrl: "https://github.com/petrsafrata/Sprava_obci",
    },
    {
      title: "Custom Programming Language Interpreter",
      stack: ["Java"],
      highlights: [
        "Custom interpreter with lexical and syntax analysis.",
        "Supports functions, variables, conditions, loops and expressions.",
        "Includes: AST, parser and runtime.",
      ],
      githubUrl: "https://github.com/petrsafrata/Custom_programming_language_interpreter",
    },
    {
      title: "MongoDB Cluster",
      stack: ["MongoDB", "Sharding", "Replication"],
      highlights: [
        "Design and configuration of a sharded cluster with replicated shards.",
        "Balancer, data import, validation schema.",
        "Advanced queries over a larger dataset.",
      ],
      githubUrl: "https://github.com/petrsafrata/MongoDB_cluster",
    },
  ],
  certifications: [
    {
      name: "Database Programming with PL/SQL",
      org: "Oracle",
      issuer: "Oracle Academy",
      year: "2024",
      tags: ["Database", "PL/SQL"],
      certificate: "/certificates/oracle-plsql.pdf",
    },
    {
      name: "Database Design",
      org: "Oracle",
      issuer: "Oracle Academy",
      year: "2024",
      tags: ["Database", "Design"],
      certificate: "/certificates/oracle-design.pdf",
    },
    {
      name: "Endpoint Security",
      org: "Cisco",
      issuer: "Cisco Networking Academy",
      year: "2025",
      tags: ["Security", "Networking"],
      certificate: "/certificates/cisco-endpoint-security.pdf",
    },
    {
      name: "Building AI",
      org: "University of Helsinki",
      issuer: "University of Helsinki",
      year: "2025",
      tags: ["AI", "Python"],
      certificate: "/certificates/helinski-building-ai.png",
    },
  ],
  certificationsSecondary: [
    { name: "Elements of AI", org: "University of Helsinki", year: "2021" },
    {
      name: "Fundamentals of Digital Marketing",
      org: "Google Digital Garage",
      year: "2021",
    },
    { name: "Introduction to Networks", org: "Cisco", year: "2021" },
  ],
};
