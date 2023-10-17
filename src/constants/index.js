import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  Docsign,
  hirex,
  netflix,
  Olx,
  woodcraft,
  Usermanagement,
  todoapp,
  Hss,
  broto,
  ktu
} from "../assets/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Development",
    company_name: "Brototype, Kochi",
    icon: broto,
    iconBg: "#383E56",
    date: "Sep 2022 - present",

  },
  {
    title: "B.Tech Information Technology",
    company_name: "College of Engineering Thrikaripur , Kasaragod",
    icon: ktu,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Sep 2021",

  },
  {
    title: "Higher Secondary",
    company_name: "GHSS KOROM, Kannur",
    icon: Hss,
    iconBg: "#383E56",
    date: "Jun 2016 - Mar 2017",

  },
];

const projects = [
  {
    name: "HireX",
    description:
      "HireX is a multi-venture project, serving as a comprehensive job searching web application. User can easy to search there specific job throught the web application and also different company recruiters can add the job vacancy and opening to the web app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "Socket io",
        color: "green-text-gradient",
      },

    ],
    image: hirex,
    source_code_link: "https://github.com/arjunv1192000/Hirex_Jobportal",
  },
  {
    name: "Woodcraft",
    description:
      "Woodcraft is an innovative E-commerce website specializing in selling furniture. The platform offers a seamless shopping experience for furniture enthusiasts with its user-friendly interface and feature-rich functionalities.",
    tags: [
      {
        name: " HTML",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Chart js",
        color: "pink-text-gradient",
      },
    ],
    image: woodcraft,
    source_code_link: "https://github.com/arjunv1192000/PROJECT_1_ECOM",
  },
  {
    name: "DocSign",
    description:
      "Created a web application using Next.js. This web application used for create digital signature and user can save the signature in the digital formate .It is a use full app for the user digitalizing anything.User can draw images and download the images ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "Canvas",
        color: "pink-text-gradient",
      },
    ],
    image: Docsign,
    source_code_link: "https://github.com/arjunv1192000/DocSign_signaturecollection_App",
  },
  {
    name: "Netflix clone",
    description:
      "Created a clone of the Netflix application using the knowledge and experience of React.js",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/arjunv1192000/NETFLIX_clone",
  },
  {
    name: "Olx clone",
    description:
      "Created a clone of the OLX application using the knowledge and experience of React.js and Firebase.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Olx,
    source_code_link: "https://github.com/arjunv1192000/olx_clone",
  },
  {
    name: "TODO App",
    description:
      "Create todo list app using react js.In  this application save there todos and make time management in work life",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Rest api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todoapp,
    source_code_link: "https://github.com/arjunv1192000/TODO_APP",
  },
  {
    name: "User Management",
    description:
      "Create fullstack webapplication in this application user can login and sigup then join the application .Also create admin side for this app for managing user data ",
    tags: [
      {
        name: "react js",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express js",
        color: "pink-text-gradient",
      },
    ],
    image: Usermanagement,
    source_code_link: "https://github.com/arjunv1192000/USER-MANAGMENT-WEB-APP",
  },
];

export { services, technologies, experiences, projects };