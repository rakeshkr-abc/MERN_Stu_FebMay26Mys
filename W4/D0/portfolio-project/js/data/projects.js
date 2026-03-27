/*
File: MERN_Stu_FebMay26Mys\W4\D5\portfolio-project\js\data\projects.js
Description: Stores all portfolio project data in a structured array.

Brief Concept Explanation:
- This file uses an array of objects.
- Each object represents one project.
- Keeping project data separate from HTML makes filtering, searching,
  and rendering much easier.
- This is a practical use of variables, arrays, objects, and strings.
*/

const projectsData = [
  {
    id: 1,
    name: "Movie Time",
    category: "MERN",
    description:
      "Full stack movie ticket booking application with AI-powered smart movie suggestions.",
    technologies: ["ReactJS", "ExpressJS", "MongoDB"],
    status: "Live",
    liveDemo: "#",
    github: "#"
  },
  {
    id: 2,
    name: "Gola",
    category: "MERN",
    description:
      "Cab booking platform that helps users quickly book rides for daily travel.",
    technologies: ["ReactJS", "ExpressJS", "MongoDB"],
    status: "Live",
    liveDemo: "#",
    github: "#"
  },
  {
    id: 3,
    name: "Portfolio Website",
    category: "Frontend",
    description:
      "Responsive personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    status: "Live",
    liveDemo: "#",
    github: "#"
  },
  {
    id: 4,
    name: "Developer Stats Dashboard",
    category: "JavaScript",
    description:
      "Dynamic dashboard that loads developer statistics and profile insights using Fetch API.",
    technologies: ["JavaScript", "Fetch API", "JSON"],
    status: "Demo",
    liveDemo: "#",
    github: "#"
  }
];