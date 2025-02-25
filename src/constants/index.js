import {
  cybersecurity,
  itsuport,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  DuncanPIC,
  janeHop,
  cplusplus,
  java,
  movieApp,
  todoList,
} from "../assets";

import me from "../assets/me.jpg";

export const Duncan = DuncanPIC;

export const myGithub = "https://github.com/raheem6";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Download Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cybersecurity",
    icon: cybersecurity,
  },
  {
    title: "IT Support",
    icon: itsuport,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Cplusplus",
    icon: cplusplus,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const myWords = [
  {
    text: "Here you can download my Resume by clicking on Download button. I will be glad to our cooperation.",
    name: "Raheem",
    image: me,
  },
];

const projects = [
  {
    name: "To-Do List",
    description:
      "The To-Do List project is a simple web application that allows users to create and manage a list of tasks they need to complete. Users can add new tasks by typing them into an input field and pressing enter. Each task appears as an item in the list with a checkbox beside it. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: todoList,
    source_code_link: "https://github.com/raheem6/To-do-List",
    demo_link: "https://to-dolist10.netlify.app/",
  },
  {
    name: "Double-blind medical study simulation.",
    description:
      "Team project for CSC 131 - Building a double-blind medical study simulation using Vendia Share platform. Securely exchange patient data among Jane Hopkins, Bavaria, and the FDA while ensuring privacy and integrity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "vendia",
        color: "pink-text-gradient",
      },
    ],
    image: janeHop,
    source_code_link:
      "https://github.com/ajgrinds/CSC-131-Double-Blind-Medical-Simulation",
    demo_link: "https://www.youtube.com/watch?v=srDpcUSJuU8&ab_channel=khalidh",
  },
  {
    name: "Movie App",
    description:
      "The Movie App is a web application that allows users to search and discover movies. The app displays movie posters along with their ratings, and provides a brief overview when users hover over a movie. Users can search for specific movies using the search bar.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: movieApp,
    source_code_link: "https://github.com/raheem6/Movie-App",
    demo_link: "https://movie-app10.netlify.app",
  },
];

export { services, technologies, myWords, projects };
