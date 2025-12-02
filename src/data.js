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
        title: "Data Mining Project",
        description: "Performance prediction for NFL players using data mining techniques."
    },
    {
        title: "Z’Vote",
        description: "Interactive iOS/Android news portal for weekly election results."
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
