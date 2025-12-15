import {
    Code2,
    Database,
    Layout,
    Server,
    Smartphone,
    Terminal,
    Globe,
    Cpu,
    GitBranch,
    Cloud
} from 'lucide-react';

export const personalInfo = {
    name: "Barış Delikaya",
    title: "Software Engineer / Full-Stack Engineer",
    phone: "+90-539-493-0112",
    location: "İstanbul, Turkey",
    email: "barisdelikaya2@gmail.com",
    linkedin: "https://www.linkedin.com/in/barisdelikaya",
    summary: "A seasoned software development specialist with strong expertise in PHP (Laravel/Symfony), Drupal Engineering (7–10), modern DevOps, and enterprise SSO/CRM integrations. Focused on scalable, high-quality, user-centric solutions."
};

export const skills = [
    {
        category: "Backend & CMS",
        icon: Server,
        items: ["PHP 7–8.3", "Laravel", "Symfony", "Drupal 7–10", "OOP", "SOLID", "MariaDB", "PostgreSQL"]
    },
    {
        category: "Frontend & Mobile",
        icon: Layout,
        items: ["JavaScript ES6+", "React.js", "Vue", "Vite.js", "React Native", "SCSS/SASS", "Node.js", "DataTables"]
    },
    {
        category: "DevOps & Tools",
        icon: Terminal,
        items: ["Docker", "DDEV", "Docksal", "Linux CLI", "GitLab CI/CD", "Git", "PHPUnit", "Playwright"]
    },
    {
        category: "Integrations",
        icon: Cloud,
        items: ["Azure EntraID SSO (SAML/OAuth2)", "REST & SOAP APIs", "Relational Databases"]
    }
];

export const experience = [
    {
        company: "Sabancı University",
        role: "Software Development Specialist",
        period: "Feb 2023 – Present",
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
        period: "Feb 2022 – May 2022",
        description: [
            "Client-side server support and optimization",
            "Logical/physical database design",
            "DB performance monitoring and backup routines"
        ]
    },
    {
        company: "Sakıp Sabancı Museum",
        role: "Database Administration Intern",
        period: "Feb 2017 – Nov 2018",
        description: [
            "Database restoration, normalization, schema design",
            "Drupal management and content entry"
        ]
    }
];

export const keyContributions = [
    "Enterprise multisite architecture standardization",
    "Environment parity and deployment consistency across dev/stage/prod",
    "Unified authentication abstraction layer (OAuth2, OIDC, SAML)",
    "Secure, consistent API integration architecture",
    "Legacy template and query modernization for performance",
    "Advanced DataTable UX patterns (responsive tables, multi-filtering, async loading, accessibility)"
];

export const projects = [
    {
        title: "Jira SLA Alert Extension",
        description: "A Chrome extension for monitoring Jira SLA breaches with real-time alerts, advanced filtering, and audible notifications for internal support teams.",
        tech: ["Chrome Extension", "JavaScript", "Jira API"]
    },
    {
        title: "Secret Threat",
        description: "A real-time cooperative card game featuring dynamic atmospheric effects, interactive tutorials, and AI-powered bot players.",
        tech: ["React", "Firebase", "Real-time"]
    },
    {
        title: "Laravel Jira Analytics Portal",
        description: "An advanced dashboard for Jira metrics offering AI-powered predictive analytics, gamified team leaderboards, and automated reporting.",
        tech: ["Laravel", "PHP", "AI", "Analytics"]
    },
    {
        title: "Data Mining Project",
        description: "Performance prediction for NFL players using data mining techniques.",
        tech: ["Python", "Data Mining"]
    },
    {
        title: "Z’Vote",
        description: "Interactive iOS/Android news portal for weekly election results.",
        tech: ["iOS", "Android", "Mobile"]
    }
];

export const education = {
    degree: "Bachelor of Science in Computer Engineering",
    school: "Selçuk University",
    period: "2019–2023"
};

export const certifications = [
    "Agile Project Management – Google (Credential ID: Q4S8GE7YKEEL)",
    "Effective Communication Techniques – Boğaziçi Institute",
    "Training to Maximize Efficiency – Boğaziçi Institute"
];

export const softSkills = [
    "Project Management",
    "Problem Solving",
    "Team Leadership",
    "Agile (Scrum, Kanban, Waterfall)",
    "Operations Management",
    "Client Communication"
];

export const references = [
    { name: "Erva Nur Demirci", role: "Frontend Developer, Gratas Solutions", email: "dmrcerva@gmail.com" },
    { name: "Osman S. Karaman", role: "Digital Preservation Manager, Sabancı Holding", email: "osmanserhat@gmail.com" },
    { name: "Yasin Keçeci", role: "Senior Consultant, KoçSistem", email: "php.yasinkececi@gmail.com" }
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

export const blogPosts = [
    {
        title: "Optimizing Laravel Performance for High-Scale Apps",
        excerpt: "Discover advanced techniques for caching, database indexing, and queue management to keep your Laravel applications running smoothly under heavy load.",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        tags: ["Laravel", "Performance", "PHP"],
        link: "#"
    },
    {
        title: "Building Real-Time Games with React & Firebase",
        excerpt: "A deep dive into state synchronization, latency handling, and optimistic UI updates when building multiplayer card games like 'Secret Threat'.",
        date: "Nov 28, 2024",
        readTime: "8 min read",
        tags: ["React", "Firebase", "GameDev"],
        link: "#"
    },
    {
        title: "Drupal 10 Migration: A Survival Guide",
        excerpt: "Key strategies and common pitfalls to avoid when upgrading legacy Drupal sites to the latest version. Lessons learned from enterprise migrations.",
        date: "Nov 15, 2024",
        readTime: "6 min read",
        tags: ["Drupal", "CMS", "Migration"],
        link: "#"
    },
    {
        title: "Dockerizing Your Dev Environment",
        excerpt: "Stop saying 'it works on my machine'. How to set up a robust, reproducible development environment using Docker and Docker Compose.",
        date: "Oct 30, 2024",
        readTime: "4 min read",
        tags: ["Docker", "DevOps", "DX"],
        link: "#"
    }
];
