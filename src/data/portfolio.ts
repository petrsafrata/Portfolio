import type { PortfolioData } from "../types/portfolio";

export const portfolio: PortfolioData = {
  name: "Petr Šafrata",
  title: "Java / Spring Boot • Backend • Databáze • Docker",
  location: "ČR",
  summary:
    "Tvořím backendové systémy v Javě (Spring Boot) – od návrhu datového modelu a API přes práci s databázemi (MongoDB, Oracle, PostgreSQL) až po nasazení v Dockeru. Zaměřuji se na spolehlivé aplikace, datové pipeline a škálovatelnou architekturu.",
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
      { name: "Čeština", level: "rodilý" },
      { name: "Angličtina", level: "B2" },
    ],
    license: "Skupina B",
    interests: ["squash", "inline", "jóga", "gym", "cestování", "origami"],
  },
  skills: [
    {
      title: "Back-end",
      icon: "Server",
      items: [
        { name: "Java", level: "pokročilý" },
        { name: "Spring Boot", level: "pokročilý" },
        { name: "C# / .NET", level: "středně pokročilý" },
        { name: "Python", level: "středně pokročilý" },
        { name: "TypeScript", level: "základy" },
      ],
    },
    {
      title: "Front-end",
      icon: "Code2",
      items: [
        { name: "JavaScript", level: "pokročilý" },
        { name: "HTML", level: "pokročilý" },
        { name: "CSS", level: "pokročilý" },
        { name: "TypeScript", level: "základy" },
        { name: "ReactJS", level: "základy" },
      ],
    },
    {
      title: "Databáze & Search",
      icon: "Database",
      items: [
        { name: "SQL", level: "pokročilý" },
        { name: "PostgreSQL", level: "středně pokročilý" },
        { name: "Oracle DB/ PL/SQL", level: "středně pokročilý" },
        { name: "MS SQL", level: "středně pokročilý" },
        { name: "MongoDB", level: "středně pokročilý" },
        { name: "ElasticSearch", level: "základy" },
      ],
    },
    {
      title: "DevOps",
      icon: "Wrench",
      items: [
        { name: "Maven", level: "pokročilý" },
        { name: "Git / GitHub", level: "pokročilý" },
        { name: "Docker", level: "středně pokročilý" },
        { name: "Linux", level: "středně pokročilý" },
        { name: "Apache", level: "základy" },
      ],
    },
    {
      title: "Analýza & spolupráce",
      icon: "Layers",
      items: [
        { name: "Analýza požadavků", level: "pokročilý" },
        { name: "Analýza dat", level: "pokročilý" },
        { name: "Komunikace", level: "pokročilý" },
        { name: "Týmová práce", level: "pokročilý" },
      ],
    },
  ],
  experience: [
    {
      company: "ReDat Recording",
      role: "Java Developer",
      type: "na plný úvazek",
      period: "úno 2026 - současnost",
      bullets: [
        "Vývoj backendových částí systémů v jazyce Java.",
        "Návrh a implementace API pro integraci s frontendem a externími službami.",
        "Zajištění business logiky, práce s databázemi a optimalizace výkonu.",
      ],
    },
    {
      company: "Univerzita Pardubice",
      role: "Vyučující",
      type: "na částečný úvazek",
      period: "zář 2025 – současnost",
      bullets: [
        "Výuka předmětu Základy programování.",
        "Příprava a vedení cvičení v jazyce Java.",
        "Podpora studentů v pochopení základních principů algoritmizace a programování.",
      ],
    },
    {
      company: "Neit Consulting",
      role: "Consultant",
      type: "na plný úvazek",
      period: "říj 2021 – úno 2026",
      bullets: [
        "Analýza klientských požadavků a jejich modelování/zpracování v aplikaci Team Assistant.",
        "Návrh a tvorba firemních procesů, dohled nad projekty a komunikace s uživateli.",
        "Integrace podnikových systémů a vývoj skriptů (JavaScript/TypeScript) pro synchronizaci, automatizaci a transformaci dat.",
      ],
    },
  ],
  education: [
    {
      school: "Univerzita Pardubice",
      program: "Informační technologie",
      degree: "Bc.",
      period: "2022 – 2025",
      notes: [
        "Zaměření na programování, datové struktury a algoritmy",
        "Databázové systémy (Oracle, PostgreSQL, MongoDB)",
        "Softwarové inženýrství, návrh architektury",
      ],
    },
  ],
  services: [
    {
      title: "Poskytovani software",
      description:
        "Navrh a vyvoj aplikaci na miru: backendove sluzby, API a navazujici integrace pro firemni procesy.",
    },
    {
      title: "Poradenstvi v oblasti informacnich technologii",
      description:
        "Konzultace architektury, vyber technologii, audit existujicich reseni a navrh dalsiho rozvoje.",
    },
    {
      title: "Zpracovani dat",
      description:
        "Datove pipeline, migrace, cisteni a transformace dat, navrh schemat a optimalizace dotazu.",
    },
    {
      title: "Hostingove a souvisejici cinnosti",
      description:
        "Nasazeni a sprava aplikaci, Dockerizace, monitoring, zaloha a zakladni provozni podpora.",
    },
    {
      title: "Webove portaly",
      description:
        "Vyvoj webovych rozhrani a internich portalu napojenych na API, s durazem na UX a rychlost.",
    },
  ],
  projects: [
    {
      title: "Virtual Storage",
      stack: [
        "Java",
        "Spring",
        "Docker",
        "ElasticSearch",
        "Tika",
        "Tesseract",
        "Vosk",
      ],
      highlights: [
        "Webové úložiště dokumentů s vyhledáváním pomocí indexace v ElasticSearch.",
        "Integrace OCR (Tesseract) a ASR (Vosk), extrakce obsahu přes Apache Tika.",
        "Backend v Java/Spring Boot, nasazení v Docker Compose.",
      ],
      githubUrl: "https://github.com/petrsafrata/VirtualStorage",
    },
    {
      title: "Pixel Deck",
      stack: ["Python", "Raspberry Pi", "Docker"],
      highlights: [
        "Modulární aplikace navržená pro ovládání matice RGB LED o rozměrech 64×64.",
        "Vykresluje dynamické scény, jako jsou hodiny, počasí atd.",
        "Systém je postaven s čistou abstrakcí scén, centralizovanou konfigurací a hardwarově nezávislou logikou vykreslování.",
      ],
      githubUrl: "https://github.com/petrsafrata/Pixel_Deck",
    },
    {
      title: "DB Scope",
      stack: [
        "Java",
        "Spring",
        "ReactJS",
        "TypeScript",
        "Docker",
        "PostgreSQL",
      ],
      highlights: [
        "Full-stack aplikace / REST API pro prozkoumávání a správu externích SQL databází bez předdefinovaných entit pro cílové schéma.",
        "Nezávislé na konkrétní databázi, umožňuje připojení k různým SQL databázím a prozkoumávání jejich schémat a dat.",
        "Podpora pro základní operace CRUD, vizualizace schémat a export dat.",
      ],
      githubUrl: "https://github.com/petrsafrata/DBScope",
    },
    {
      title: "RetryLibrary",
      stack: ["Java"],
      highlights: [
        "Malá knihovna Java bez závislostí poskytující jednoduchou a čitelnou logiku opakování pro nestabilní nebo přerušované operace.",
        "Možné využívat v rámci volání API, přístupu k souborům, databázových operací atd.",
      ],
      githubUrl: "https://github.com/petrsafrata/RetryLibrary",
    },
    {
      title: "HtmlBodyCleaner",
      stack: ["Java"],
      highlights: [
        "Malá Java knihovna pro sanitaci a normalizaci těl HTML dokumentů.",
        "Extrahuje tělo dokumentu, sanituje tagy a atributy podle konfigurovatelných pravidel.",
        "Navrženo pro použití na straně serveru ve webových pipelinech a dávkových procesorech Java.",
      ],
      githubUrl: "https://github.com/petrsafrata/HtmlBodyCleaner",
    },
    {
      title: "Správa obcí",
      stack: ["Java", "JavaFX"],
      highlights: [
        "Aplikace využívající datové struktury (heap, fronty, seznamy).",
        "Generování, přidávání, mazání, filtrování a procházení prvků.",
        "Ovládání přes GUI i CLI, export/import dat.",
      ],
      githubUrl: "https://github.com/petrsafrata/Sprava_obci",
    },
    {
      title: "Custom Programming Language Interpreter",
      stack: ["Java"],
      highlights: [
        "Vlastní interpret s lexikální a syntaktickou analýzou.",
        "Podpora funkcí, proměnných, podmínek, cyklů a výrazů.",
        "Součástí: AST, parser a runtime.",
      ],
      githubUrl:
        "https://github.com/petrsafrata/Custom_programming_language_interpreter",
    },
    {
      title: "MongoDB Cluster",
      stack: ["MongoDB", "Sharding", "Replication"],
      highlights: [
        "Návrh a konfigurace sharded clusteru s replikovanými shardy.",
        "Balancer, import dat, validační schéma.",
        "Pokročilé dotazy nad větším datasetem.",
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
      name: "Základy digitálního marketingu",
      org: "Google Digital Garage",
      year: "2021",
    },
    { name: "Introduction to Networks", org: "Cisco", year: "2021" },
  ],
};
