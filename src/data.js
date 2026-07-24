import {
    Cloud,
    Database,
    Layout,
    Server,
    Terminal
} from 'lucide-react';

export const personalInfo = {
    name: "Barış Delikaya",
    title: "Backend-first Full-Stack Engineer",
    phone: "+90-539-493-0112",
    location: "İstanbul, Turkey",
    email: "barisdelikaya2@gmail.com",
    github: "https://github.com/donnerzeus",
    linkedin: "https://www.linkedin.com/in/barisdelikaya",
    resumeUrl: "./cv.pdf",
    summary: "I build maintainable web systems with a backend-heavy mindset. My strongest areas are Laravel, PHP, Drupal modernization, enterprise integrations, and shipping stable production work without drama.",
    intro: "Shipping reliable product and platform work across Laravel, Drupal, integrations, and delivery operations."
};

export const terminalFeed = [
    { label: "primary_stack", value: "Laravel / Drupal / Enterprise integrations" },
    { label: "delivery_mode", value: "Backend-first, production-safe, maintainable" },
    { label: "platforms", value: "Corporate web, internal tools, reporting systems" },
    { label: "ops_signal", value: "Docker, Linux CLI, CI awareness, debugging depth" }
];

export const heroStats = [
    { value: "50+", label: "corporate sites supported" },
    { value: "3", label: "major revamps delivered" },
    { value: "40%", label: "faster load time on recent revamps" },
    { value: "7→10", label: "Drupal migration range" }
];

export const heroHighlights = [
    "Laravel and PHP delivery",
    "Drupal 7 to 10 modernization",
    "SSO, CRM, and API integrations",
    "Dev and production environment parity"
];

export const focusAreas = [
    {
        title: "Enterprise CMS modernization",
        description: "Legacy Drupal estates, upgrade planning, module cleanup, and pragmatic migration paths that do not compromise production stability."
    },
    {
        title: "Backend systems that stay readable",
        description: "Service boundaries, data flow clarity, and integration-heavy application code that stays maintainable after handover."
    },
    {
        title: "Delivery discipline",
        description: "Environment consistency, CI awareness, safer rollouts, and debugging workflows that reduce operational surprises."
    }
];

export const deliveryPrinciples = [
    "Prefer production-safe decisions over flashy abstractions.",
    "Make failure modes obvious before they become incidents.",
    "Keep architecture understandable for the next engineer.",
    "Move fast, but only with a rollback story."
];

export const skills = [
    {
        category: "Backend Platforms",
        icon: Server,
        items: ["PHP 7-8.3", "Laravel", "Symfony", "Drupal 7-10", "OOP", "SOLID", "REST APIs"]
    },
    {
        category: "Frontend Delivery",
        icon: Layout,
        items: ["JavaScript", "React", "Vue", "Vite", "React Native", "SCSS/SASS", "DataTables"]
    },
    {
        category: "Data & Integrations",
        icon: Database,
        items: ["PostgreSQL", "MariaDB", "SSO", "OAuth2", "SAML", "SOAP", "CRM integrations"]
    },
    {
        category: "DevOps & Tooling",
        icon: Terminal,
        items: ["Docker", "DDEV", "Docksal", "Linux CLI", "GitLab CI/CD", "Git", "PHPUnit", "Playwright"]
    },
    {
        category: "Architecture Mindset",
        icon: Cloud,
        items: ["Scalable patterns", "Multisite governance", "Performance remediation", "Cross-team delivery"]
    }
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
            "Led revamp of 3 client websites, improving loading speed by 40%"
        ]
    },
    {
        company: "Sakıp Sabancı Museum",
        role: "Database Administration Intern",
        period: "Feb 2022 - May 2022",
        description: [
            "Database restoration, normalization, schema design",
            "Drupal management and content entry"
        ]
    },
    {
        company: "Login ERP Software",
        role: "Database Intern",
        period: "Feb 2017 - Nov 2018",
        description: [
            "Client-side server support and optimization",
            "Logical/physical database design",
            "DB performance monitoring and backup routines"
        ]
    }
];

export const keyContributions = [
    "Enterprise multisite architecture standardization",
    "Environment parity across dev, stage, and production",
    "Authentication flows with OAuth2, OIDC, and SAML",
    "Safer API integration architecture for long-lived systems",
    "Legacy template and query modernization for performance",
    "Advanced DataTable UX with responsive, async, and accessible patterns"
];

export const projects = [
    {
        title: "Corporate Web Platform Revamps",
        impact: "Improved loading speed by around 40% while keeping delivery practical for real stakeholders.",
        description: "Led or contributed to redesign and implementation work on multiple institutional websites where performance, maintainability, and editorial usability all mattered.",
        outcomes: [
            "Performance-oriented frontend and template cleanup",
            "Cross-browser delivery for production content teams",
            "Healthier handoff for future iterations"
        ],
        tech: ["Drupal", "PHP", "JavaScript", "SCSS", "Performance"]
    },
    {
        title: "Jira SLA Alert Extension",
        impact: "Reduced reaction time for support teams by surfacing SLA pressure before tickets drifted.",
        description: "Built a browser-based internal utility for monitoring Jira SLA breaches with filtering, notification flows, and operator-friendly visibility.",
        outcomes: [
            "Real-time monitoring mindset",
            "Action-oriented alerting UX",
            "Small surface area, high operational value"
        ],
        tech: ["JavaScript", "Chrome Extension", "Jira API"]
    },
    {
        title: "Laravel Analytics and Reporting Portal",
        impact: "Turned operational Jira data into a clearer reporting surface for teams and managers.",
        description: "Built an analytics-oriented portal around Jira data with reporting flows, dashboard thinking, and maintainable backend-first implementation choices.",
        outcomes: [
            "Metrics visibility for team workflows",
            "Backend-heavy reporting architecture",
            "Pragmatic product-style delivery"
        ],
        tech: ["Laravel", "PHP", "Analytics", "Jira"]
    },
    {
        title: "Identity and Integration Workflows",
        impact: "Reduced friction between institutional systems through clearer authentication and API flows.",
        description: "Worked on SSO and integration-heavy scenarios spanning Azure EntraID, REST, SOAP, and relational data sources where reliability mattered more than novelty.",
        outcomes: [
            "OAuth2 and SAML implementation awareness",
            "Consistent integration boundaries",
            "Production debugging discipline"
        ],
        tech: ["SSO", "OAuth2", "SAML", "REST", "SOAP"]
    }
];

export const productApps = [
    {
        title: "Ritim",
        category: "Productivity",
        type: "live",
        status: "Live PWA",
        description: "A behavior-first sleep and routine companion with daily check-ins, Screen Time guardrails, calendar export, and a 14-day rhythm report.",
        tech: ["PWA", "TypeScript", "Local-first"],
        liveUrl: "https://donnerzeus.github.io/ritim/",
        repoUrl: "https://github.com/donnerzeus/ritim",
        accent: "lime",
        signal: "routine://protected"
    },
    {
        title: "Döngü Planlayıcı",
        category: "Wellness",
        type: "live",
        status: "Live PWA",
        description: "A private, device-local cycle planner designed around phase awareness, daily planning, and calm visual guidance.",
        tech: ["PWA", "HTML", "Local Storage"],
        liveUrl: "https://donnerzeus.github.io/emotion-control/",
        repoUrl: "https://github.com/donnerzeus/emotion-control",
        accent: "rose",
        signal: "cycle://local"
    },
    {
        title: "Secret Threat",
        category: "Games",
        type: "game",
        status: "Playable",
        description: "A real-time social deduction game with room-based multiplayer, hidden roles, voting flows, sound, and Firebase synchronization.",
        tech: ["React", "TypeScript", "Firebase"],
        liveUrl: "https://donnerzeus.github.io/SecretThreat.github.io/",
        repoUrl: "https://github.com/donnerzeus/SecretThreat.github.io",
        accent: "red",
        signal: "lobby://online"
    },
    {
        title: "Project Spartan",
        category: "Fitness",
        type: "live",
        status: "Live App",
        description: "A personal fitness command center for nutrition, measurements, training timers, progress history, and visual evolution.",
        tech: ["React", "TypeScript", "Local-first"],
        liveUrl: "https://donnerzeus.github.io/my-fitness-dude/",
        repoUrl: "https://github.com/donnerzeus/my-fitness-dude",
        accent: "gold",
        signal: "training://active"
    },
    {
        title: "Donnerzeus Party",
        category: "Games",
        type: "game",
        status: "Playable",
        description: "A room-based party platform where the television becomes the stage and each player’s phone becomes a controller.",
        tech: ["React", "Firebase", "Realtime DB"],
        liveUrl: "https://donnerzeus.github.io/Donnerzeus-Party/",
        repoUrl: "https://github.com/donnerzeus/Donnerzeus-Party",
        accent: "cyan",
        signal: "party://connected"
    },
    {
        title: "Ploxiano Survivors",
        category: "Games",
        type: "game",
        status: "Playable",
        description: "A browser survival game with character selection, upgrade loops, inventory systems, mobile controls, and a custom game runtime.",
        tech: ["TypeScript", "React", "Canvas"],
        liveUrl: "https://donnerzeus.github.io/PloxianoSurvivors/",
        repoUrl: "https://github.com/donnerzeus/PloxianoSurvivors",
        accent: "violet",
        signal: "arena://running"
    },
    {
        title: "EVENTAS",
        category: "Operations",
        type: "system",
        status: "In development",
        description: "A production-minded event staffing and personnel operations platform with RBAC, audit trails, state transitions, and operator workflows.",
        tech: ["Vue", "Fastify", "Firebase"],
        repoUrl: "https://github.com/donnerzeus/EVENTAS",
        accent: "blue",
        signal: "ops://audited"
    },
    {
        title: "Jira Analytics Portal",
        category: "Analytics",
        type: "system",
        status: "Source",
        description: "An enterprise Jira analytics surface with SLA risk signals, forecasting, gamification, executive metrics, and export-ready reports.",
        tech: ["Laravel", "Jira API", "Analytics"],
        repoUrl: "https://github.com/donnerzeus/Jira-Statistic-Tracker",
        accent: "cyan",
        signal: "sla://visible"
    },
    {
        title: "CRM Works",
        category: "Platform Lab",
        type: "system",
        status: "Source",
        description: "A Dockerized SuiteCRM and legacy SugarCRM learning environment for modules, vardefs, metadata, logic hooks, and integrations.",
        tech: ["PHP", "SuiteCRM", "Docker"],
        repoUrl: "https://github.com/donnerzeus/CRM-Works",
        accent: "orange",
        signal: "crm://sandbox"
    }
];

export const systemCapabilities = [
    {
        label: "CMS modernization",
        score: "91",
        detail: "Drupal architecture, module cleanup, upgrade planning, content-heavy delivery"
    },
    {
        label: "Backend implementation",
        score: "94",
        detail: "Laravel and PHP application work with maintainable service boundaries"
    },
    {
        label: "Integration design",
        score: "89",
        detail: "SSO, CRM, analytics, REST, SOAP, and data flow problem solving"
    },
    {
        label: "Ops awareness",
        score: "84",
        detail: "Docker workflows, Linux-first debugging, CI and environment consistency"
    }
];

export const integrationSurfaces = [
    "Azure EntraID / SAML / OAuth2",
    "Drupal multisite ecosystems",
    "Laravel reporting and analytics",
    "Google Analytics rollout at scale",
    "Jira operational tooling",
    "Relational database design and maintenance"
];

export const caseStudies = [
    {
        title: "Institutional multisite delivery",
        context: "Corporate university sites with content-heavy publishing needs, legacy constraints, and production reliability expectations.",
        problem: [
            "Large content surfaces drift over time and become slow, fragile, and difficult to maintain.",
            "Editors and stakeholders need delivery continuity while technical debt is being reduced."
        ],
        decisions: [
            "Stabilized templates and frontend behavior before layering visible changes.",
            "Focused on cross-browser safety and performance wins that would survive future iteration.",
            "Kept implementation readable so the next engineer could extend it without reverse engineering."
        ],
        result: "Faster revamps, roughly 40% better loading speed on recent work, and cleaner ongoing ownership.",
        stack: ["Drupal", "PHP", "SCSS", "JavaScript", "Performance"]
    },
    {
        title: "Operational visibility tooling",
        context: "Support and delivery teams needed faster reactions to SLA pressure and reporting blind spots.",
        problem: [
            "Critical operational data existed, but not in an interface that created action fast enough.",
            "Without the right abstraction, internal tooling becomes noisy instead of useful."
        ],
        decisions: [
            "Built focused dashboards and alerting flows around the actual operator workflow.",
            "Preferred smaller, clear interfaces over oversized all-in-one admin surfaces.",
            "Treated reporting as a backend design problem first, then shaped the UI around that."
        ],
        result: "Better visibility, faster reaction loops, and tooling that supports daily operations instead of interrupting them.",
        stack: ["Laravel", "Jira API", "Analytics", "Chrome Extension", "Reporting UX"]
    },
    {
        title: "Authentication and integration boundaries",
        context: "Enterprise systems with SSO, APIs, and long-lived maintenance needs where reliability matters more than novelty.",
        problem: [
            "Identity and integration layers become failure points when boundaries are vague or implementation is inconsistent.",
            "Legacy systems often require pragmatic bridges rather than idealized greenfield architecture."
        ],
        decisions: [
            "Normalized authentication and integration flows around clearer interfaces and predictable behavior.",
            "Worked with production constraints instead of forcing unnecessary abstraction.",
            "Optimized for debuggability so incidents could be understood quickly."
        ],
        result: "Lower integration friction, clearer authentication behavior, and a safer maintenance path for future changes.",
        stack: ["OAuth2", "SAML", "REST", "SOAP", "Relational Data"]
    }
];

export const education = {
    degree: "Bachelor of Science in Computer Engineering",
    school: "Selçuk University",
    period: "2019-2023"
};

export const certifications = [
    "Agile Project Management - Google",
    "Effective Communication Techniques - Boğaziçi Institute",
    "Training to Maximize Efficiency - Boğaziçi Institute"
];

export const workingStyle = [
    "Production-safe delivery",
    "Root-cause driven debugging",
    "Clean handoff quality",
    "Cross-team communication",
    "Pragmatic architecture",
    "Fast iteration with discipline"
];

export const collaborationPoints = [
    "Portfolio and institutional web delivery",
    "Laravel or Drupal consulting",
    "Migration and refactor planning",
    "Integration-heavy backend work"
];

export const techStack = [
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
    { name: "Drupal", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
];

export const footerLinks = [
    { label: "GitHub", href: personalInfo.github },
    { label: "LinkedIn", href: personalInfo.linkedin },
    { label: "Email", href: `mailto:${personalInfo.email}` }
];
