import { push, ssrp, skream } from "../assets/images";
import favicon from "/src/assets/favicon.ico"
import {
    css,
    express,
    jwt,
    rest,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    tailwindcss,
    sofa,
    dog,
    s,
    IBOP,
    Shrinath,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Three.js",
        type: "3D Graphics",
    },
    {
        imageUrl: mongodb,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },
    {
        imageUrl: jwt,
        name: "JWT",
        type: "Authentication",
    },
    {
        imageUrl: rest,
        name: "REST APIs",
        type: "APIs",
    },
];

export const experiences = [
     {
        title: "Full Stack Developer",
        company_name: "Shrinath Enterprises",
        icon: Shrinath,
        iconBg: "#85c5ff",
        date: "Jan 2026 – Present",
        points: [
            "Developed an enterprise MERN-stack business management platform integrating inventory, sales, finance, invoices, expenses, and employee workflows.",
            "Implemented JWT authentication, RBAC authorization, protected REST APIs, and middleware-based backend security workflows.",
            "Built synchronized operational systems with analytics dashboards, invoice generation, and centralized transaction management.",
            "Independently handled system architecture, frontend/backend development, database design, testing, and deployment workflows.",
        ],
    },
    {
        title: "Networking Head",
        company_name: "PUSH KJSCE",
        icon: push,
        iconBg: "#85c5ff",
        date: "Oct 2025 - Present",
        points: [
            "Led outreach initiatives and organized campus-wide networking events to connect students with opportunities",
            "Coordinated networking activities and managed execution of student-led programs",
            "Improved student engagement and community building through strategic event planning",
            "Managed stakeholder communication and event logistics across multiple initiatives",
        ],
    },
    {
        title: "Marketing Intern",
        company_name: "SSRP (Somaiya Space Research Project)",
        icon: ssrp,
        iconBg: "#a2d2ff",
        date: "Jan 2024 - Apr 2024",
        points: [
            "Assisted in outreach, coordination, and promotion for student-led research initiatives",
            "Supported marketing efforts through communication, coordination, and event assistance",
            "Promoted research programs across campus and managed promotional campaigns",
            "Collaborated with team members to increase awareness and participation",
        ],
    },
    {
        title: "SKream Event Head",
        company_name: "Coding & Tech Events",
        icon: skream,
        iconBg: "#b7e4c7",
        date: "Jan 2024",
        points: [
            "Organized and led event with focus on execution and skill development",
            "Managed event logistics, participant coordination, and resource planning",
            "Created engaging activities to promote participation and collaboration",
            "Coordinated with speakers and technical leads for event execution",
        ],
    },

];

export const socialLinks = [

    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/manndutiya23',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://linkedin.com/in/mann-dutiya-92b956292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    }
];

export const projects = [
        {
        iconUrl: IBOP,
        theme: 'btn-back-green',
        name: 'Integrated Business Operations Platform (IBOP)',
        description: 'Enterprise MERN-stack business management platform integrating inventory, sales, finance, invoices, expenses, analytics, and employee management. Implemented JWT authentication, RBAC authorization, protected REST APIs, workflow synchronization, invoice generation, and centralized operational dashboards.',
        link: 'https://github.com/manndutiya23/IBOP-Integrated-buisness-operations-platform-',
    },
    {
        iconUrl: sofa,
        theme: 'btn-back-red',
        name: 'Furniture Selling Website',
        description: 'Built a full-stack furniture e-commerce web app with secure user authentication, responsive product pages, and admin-managed contact records. Developed using PHP, MySQL, HTML, CSS, JavaScript, and XAMPP.',
        link: 'https://github.com/manndutiya23/furniture-selling-website',
    },
    {
        iconUrl: dog,
        theme: 'btn-back-green',
        name: 'Pet Adoption Center Website',
        description: 'Full-stack pet adoption platform enabling users to browse pets, submit applications, and schedule vet appointments. Features multi-role dashboards for adopters, veterinarians, and admins with approval workflows. Built with Spring Boot backend, MySQL database, and responsive JavaScript frontend.',
        link: 'https://github.com/manndutiya23/pet-adoption-center-',
    },
    {
        iconUrl: s,
        theme: 'btn-back-blue',
        name: 'Online Sudoku Solver Algorithm',
        description: 'Developed a Sudoku puzzle generator in C++ that creates partially filled grids for users to solve, ensuring each puzzle remains valid and solvable. Implemented logic to verify user-submitted solutions and provide correct completed grids when needed, combining algorithm design with efficient validation techniques.',
        link: null,
    },
    {
        iconUrl: favicon,
        theme: 'btn-back-pink',
        name: '3D Interactive Portfolio Website',
        description: 'Developed a responsive React portfolio web app with interactive 3D scenes and animations, including multi-page navigation (Home, About, Projects, Contact), project showcase, skills/experience timeline, and a contact form with email integration. Implemented client-side routing, reusable components, responsive 3D scaling, background audio controls, and animated UI feedback. Tech: React, Vite, JavaScript, React Router DOM, Three.js (React Three Fiber, Drei), Tailwind CSS, EmailJS, PostCSS, ESLint.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
];