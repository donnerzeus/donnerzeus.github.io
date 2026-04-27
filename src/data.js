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
        company: "Login ERP Software",
        role: "Database Intern",
        period: "Feb 2022 - May 2022",
        description: [
            "Client-side server support and optimization",
            "Logical/physical database design",
            "DB performance monitoring and backup routines"
        ]
    },
    {
        company: "Sakıp Sabancı Museum",
        role: "Database Administration Intern",
        period: "Feb 2017 - Nov 2018",
        description: [
            "Database restoration, normalization, schema design",
            "Drupal management and content entry"
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
