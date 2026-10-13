export const personalInfo = {
  name: "Barış Delikaya",
  title: "Backend-first Full-Stack Engineer",
  phone: "+90-539-493-0112",
  location: "İstanbul, Turkey",
  email: "barisdelikaya2@gmail.com",
  github: "https://github.com/donnerzeus",
  linkedin: "https://www.linkedin.com/in/barisdelikaya",
  resumeUrl: "./cv.pdf",
  summary:
    "I build maintainable web systems with a backend-heavy mindset. My strongest areas are Laravel, PHP, Drupal modernization, and enterprise integrations; I also work with .NET and .NET Core.",
  intro:
    "Shipping reliable product and platform work across Laravel, Drupal, integrations, and delivery operations.",
};

export const heroStats = [
  { value: "50+", label: "corporate sites supported" },
  { value: "3", label: "major revamps delivered" },
  { value: "40%", label: "faster load time on recent revamps" },
  { value: "7→12", label: "Drupal migration range" },
];

export const focusAreas = [
  {
    title: "Enterprise CMS modernization",
    description:
      "Legacy Drupal estates, upgrade planning, module cleanup, and pragmatic migration paths that do not compromise production stability.",
  },
  {
    title: "Backend systems that stay readable",
    description:
      "Service boundaries, data flow clarity, and integration-heavy application code that stays maintainable after handover.",
  },
  {
    title: "Delivery discipline",
    description:
      "Environment consistency, CI awareness, safer rollouts, and debugging workflows that reduce operational surprises.",
  },
];

export const skills = [
  {
    category: "Backend Platforms",
    items: [
      "PHP 7-8.3",
      "Laravel",
      "Symfony",
      "Drupal 7-12",
      ".NET",
      ".NET Core",
      "OOP",
      "SOLID",
      "REST APIs",
    ],
  },
  {
    category: "Frontend Delivery",
    items: [
      "JavaScript",
      "React",
      "Vue",
      "Vite",
      "React Native",
      "SCSS/SASS",
      "DataTables",
    ],
  },
  {
    category: "Data & Integrations",
    items: [
      "PostgreSQL",
      "MariaDB",
      "SSO",
      "OAuth2",
      "SAML",
      "SOAP",
      "CRM integrations",
    ],
  },
  {
    category: "DevOps & Tooling",
    items: [
      "Docker",
      "DDEV",
      "Docksal",
      "Linux CLI",
      "GitLab CI/CD",
      "Git",
      "PHPUnit",
      "Playwright",
    ],
  },
  {
    category: "Architecture Mindset",
    items: [
      "Scalable patterns",
      "Multisite governance",
      "Performance remediation",
      "Cross-team delivery",
    ],
  },
];

export const experience = [
  {
    company: "Sabancı University",
    role: "Software Development Specialist",
    period: "Feb 2023 - Present",
    description: [
      "Developed, tested, and deployed Drupal features; ensured cross-browser stability",
      "Managed Google Analytics integrations for 50+ corporate sites",
      "React Native mobile component development",
      "Full-stack web development using JavaScript, HTML, SCSS, PHP",
      "Actively used Docker and Ubuntu",
      "Led revamp of 3 client websites, improving loading speed by 40%",
    ],
  },
  {
    company: "Sakıp Sabancı Museum",
    role: "Database Administration Intern",
    period: "Feb 2022 - May 2022",
    description: [
      "Database restoration, normalization, schema design",
      "Drupal management and content entry",
    ],
  },
  {
    company: "Login ERP Software",
    role: "Database Intern",
    period: "Feb 2017 - Nov 2018",
    description: [
      "Client-side server support and optimization",
      "Logical/physical database design",
      "DB performance monitoring and backup routines",
    ],
  },
];

export const productApps = [
  {
    title: "Ritim",
    category: "Productivity",
    type: "live",
    status: "Live PWA",
    description:
      "A behavior-first sleep and routine companion with daily check-ins, Screen Time guardrails, calendar export, and a 14-day rhythm report.",
    tech: ["PWA", "TypeScript", "Local-first"],
    liveUrl: "https://donnerzeus.github.io/ritim/",
    repoUrl: "https://github.com/donnerzeus/ritim",
    accent: "lime",
    signal: "routine://protected",
  },
  {
    title: "Döngü Planlayıcı",
    category: "Wellness",
    type: "live",
    status: "Live PWA",
    description:
      "A private, device-local cycle planner designed around phase awareness, daily planning, and calm visual guidance.",
    tech: ["PWA", "HTML", "Local Storage"],
    liveUrl: "https://donnerzeus.github.io/emotion-control/",
    repoUrl: "https://github.com/donnerzeus/emotion-control",
    accent: "rose",
    signal: "cycle://local",
  },
  {
    title: "Secret Threat",
    category: "Games",
    type: "game",
    status: "Playable",
    description:
      "A real-time social deduction game with room-based multiplayer, hidden roles, voting flows, sound, and Firebase synchronization.",
    tech: ["React", "TypeScript", "Firebase"],
    liveUrl: "https://donnerzeus.github.io/SecretThreat.github.io/",
    repoUrl: "https://github.com/donnerzeus/SecretThreat.github.io",
    accent: "red",
    signal: "lobby://online",
  },
  {
    title: "Project Spartan",
    category: "Fitness",
    type: "live",
    status: "Live App",
    description:
      "A personal fitness command center for nutrition, measurements, training timers, progress history, and visual evolution.",
    tech: ["React", "TypeScript", "Local-first"],
    liveUrl: "https://donnerzeus.github.io/my-fitness-dude/",
    repoUrl: "https://github.com/donnerzeus/my-fitness-dude",
    accent: "gold",
    signal: "training://active",
  },
  {
    title: "Donnerzeus Party",
    category: "Games",
    type: "game",
    status: "Playable",
    description:
      "A room-based party platform where the television becomes the stage and each player’s phone becomes a controller.",
    tech: ["React", "Firebase", "Realtime DB"],
    liveUrl: "https://donnerzeus.github.io/Donnerzeus-Party/",
    repoUrl: "https://github.com/donnerzeus/Donnerzeus-Party",
    accent: "cyan",
    signal: "party://connected",
  },
  {
    title: "Ploxiano Survivors",
    category: "Games",
    type: "game",
    status: "Playable",
    description:
      "A browser survival game with character selection, upgrade loops, inventory systems, mobile controls, and a custom game runtime.",
    tech: ["TypeScript", "React", "Canvas"],
    liveUrl: "https://donnerzeus.github.io/PloxianoSurvivors/",
    repoUrl: "https://github.com/donnerzeus/PloxianoSurvivors",
    accent: "violet",
    signal: "arena://running",
  },
  {
    title: "EVENTAS",
    category: "Operations",
    type: "system",
    status: "In development",
    description:
      "A production-minded event staffing and personnel operations platform with RBAC, audit trails, state transitions, and operator workflows.",
    tech: ["Vue", "Fastify", "Firebase"],
    repoUrl: "https://github.com/donnerzeus/EVENTAS",
    accent: "blue",
    signal: "ops://audited",
  },
  {
    title: "Jira Analytics Portal",
    category: "Analytics",
    type: "system",
    status: "Source",
    description:
      "An enterprise Jira analytics surface with SLA risk signals, forecasting, gamification, executive metrics, and export-ready reports.",
    tech: ["Laravel", "Jira API", "Analytics"],
    repoUrl: "https://github.com/donnerzeus/Jira-Statistic-Tracker",
    accent: "cyan",
    signal: "sla://visible",
  },
  {
    title: "CRM Works",
    category: "Platform Lab",
    type: "system",
    status: "Source",
    description:
      "A Dockerized SuiteCRM and legacy SugarCRM learning environment for modules, vardefs, metadata, logic hooks, and integrations.",
    tech: ["PHP", "SuiteCRM", "Docker"],
    repoUrl: "https://github.com/donnerzeus/CRM-Works",
    accent: "orange",
    signal: "crm://sandbox",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Engineering",
  school: "Selçuk University",
  period: "2019-2023",
};

export const certifications = [
  "Agile Project Management - Google",
  "Effective Communication Techniques - Boğaziçi Institute",
  "Training to Maximize Efficiency - Boğaziçi Institute",
];

export const collaborationPoints = [
  "Portfolio and institutional web delivery",
  "Laravel or Drupal consulting",
  "Migration and refactor planning",
  "Integration-heavy backend work",
];
