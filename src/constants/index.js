import { ethicalden, emopract } from "../assets/images"
import {
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    gsap,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    summiz,
    tailwindcss,
    typescript,
    tomato,
    insta,
    ball,
} from "../assets/icons"

export const skills = [
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },

    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },

    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },

    {
        imageUrl: gsap,
        name: "GSAP",
        type: "Animation",
    },

    {
        imageUrl: redux,
        name: "Redux Toolkit",
        type: "State Management",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
]

export const experiences = [
    {
        title: "Frontend developer",
        company_name: "Ethicalden",
        icon: ethicalden,
        iconBg: "#000",
        date: "June 2024 - continue",
        points: [
            "Developing and maintaining web applications using React.js,Next.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
]

export const socialLinks = [
    {
        name: "Contact",
        iconUrl: contact,
        link: "/contact",
    },
    {
        name: "GitHub",
        iconUrl: github,
        link: "https://github.com/YourGitHubUsername",
    },
    {
        name: "LinkedIn",
        iconUrl: linkedin,
        link: "https://www.linkedin.com/in/YourLinkedInUsername",
    },
]

export const projects = [
    {
        iconUrl: ball,
        theme: "btn-back-black",
        name: "Ball race game",
        description:
            "Developed a 3d game using react three fiber and physics library.Where user can start game move the ball using the arrow and jump using the space bar.",
        link: "https://github.com/tanvirhossain808/ball-game",
    },
    {
        iconUrl: emopract,
        theme: "btn-back-red",
        name: "Emopract",
        description:
            "Developed a web application ui part with the team members",
        link: "https://www.emopract.com/",
    },
    {
        iconUrl: ethicalden,
        theme: "btn-back-black",
        name: "Full Stack Threads Clone",
        description:
            "Developing the portfolio ui part using react for the company",
        link: "https://www.ethicalden.com/",
    },
    {
        iconUrl: tomato,
        theme: "btn-back-blue",
        name: "tomato",
        description:
            "Designed and built a food restaurant web app using react and admin page for tracking the food delivery system and managed backend using node js and mongodb",
        link: "https://github.com/tanvirhossain808/food-delivery",
    },
    {
        iconUrl: insta,
        theme: "btn-back-pink",
        name: "Insta clone",
        description:
            "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
        link: "https://github.com/tanvirhossain808/insta-clone",
    },
]
