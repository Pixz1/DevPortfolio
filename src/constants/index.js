export const techStack = [
    {
        iconUrl: "https://skillicons.dev/icons?i=html",
        altText: "Html",
    },
    {
        iconUrl: "https://skillicons.dev/icons?i=css",
        altText: "Css",
    },
    {
        iconUrl: "https://skillicons.dev/icons?i=tailwind",
        altText: "TailWind",
    },
    {
        iconUrl: "https://skillicons.dev/icons?i=js",
        altText: "JavaScript",
    },
    {
        iconUrl: "https://skillicons.dev/icons?i=ts",
        altText: "TypeScript",
    },
    {
        iconUrl: "https://skillicons.dev/icons?i=react",
        altText: "React",
    },
    {
        iconUrl: "https://skillicons.dev/icons?i=nextjs",
        altText: "NextJS",
    },
];

export const links = [
    {
        href: "#home",
        className: "nav-link",
        onClick: "toggleMenu",
        linkName: "Home",
    },
    {
        href: "#about",
        className: "nav-link",
        onClick: "toggleMenu",
        linkName: "About",
    },
    {
        href: "#projects",
        className: "nav-link",
        onClick: "toggleMenu",
        linkName: "Projects",
    },
    {
        href: "#contact",
        className: "nav-link",
        onClick: "toggleMenu",
        linkName: "Contact",
    },
];

export const aboutInfo = `I am an aspiring software developer, currently focusing on mastering front-end development. 
    I'm eager to apply my skills in a collaborative environment where I can learn, grow, 
    and contribute to meaningful projects. If you're looking for a motivated and 
    adaptable developer, please reach out!`;

export const projects = [
    {
        imgSrc: "/DevPortfolio/threads_clone.jpg",
        title: "Threads Clone",
        description: `A simple clone of the Threads social media platform, built with Next JS, 
        TypeScript, TailWind, Clerk as the auth service, and MongoDB as the database. Currently it allows logged in users to: view users, profiles
        and activities, create a new thread or comment on existing threads, and join/create/view communities.`,
        link1: "https://github.com/Pixz1/threads-clone",
        link2: "https://threads-clone-weld-eta.vercel.app/",
    },
    {
        imgSrc: "/DevPortfolio/getaway_rentals.jpg",
        title: "Getaway Rentals",
        description: `Getaway Rentals is a car rental web app, built with Next JS,
        TypeScript, and TailWind. Using API data from 'cars by ninja' and 'ImaginStudio' Currently it has no backend functionalities,
        with the web app only providing a simple and detailed view of cars with their specifications.`,
        link1: "https://github.com/Pixz1/car-rental",
        link2: "https://getawayrentals-pixz1s-projects.vercel.app/",
    },
    {
        imgSrc: "/DevPortfolio/quiz_main.PNG",
        title: "Quizzy Time",
        description: `Quizzy Time is a simple quiz web application, built with react 
        using api from opentdb. Currently it has the following features: quiz progression, 
        timer, hint, and navigation between questions. NOTE: live demo currently unavailable`,
        link1: "https://github.com/Pixz1/quiz-app",
        link2: "https://github.com/Pixz1/quiz-app",
    },
];
