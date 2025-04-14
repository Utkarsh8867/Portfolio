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
  meta,
  starbucks,
  tesla,
  shopify,
  
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Management",
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
    title: "Google Cloud Digital Leader Training Certification",
    company_name: "Google Cloud",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Gained foundational knowledge of cloud computing and Google Cloud’s core services.",
      "Learned how cloud technology supports digital transformation and business strategy.",
      "Explored key topics like data analytics, AI/ML, security, and compliance on Google Cloud.",
      "Prepared for the Cloud Digital Leader certification by understanding real-world use cases.",
    ],
  },
  {
    title: "Associate  Data Analyst Certification",
    company_name: "DataCamp",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - Aug 2024",
    points: [
      "Analyzed datasets to extract insights and support data-driven decision-making.",
      "Created dashboards and visualizations using tools like Excel, Power BI, or Tableau.",
      "Assisted in data cleaning, transformation, and statistical analysis using Python/SQL.",
      "Collaborated with cross-functional teams to report key metrics and business trends.",
    ],
  },
  {
    title: "Web Operation Intern",
    company_name: "TechGeekConnect Technologies",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Assisted in maintaining and updating website content to ensure accuracy and performance.",
      "Monitored site traffic, uptime, and user engagement using web analytics tools.",
      "Supported backend tasks, bug fixes, and CMS management to improve site reliability.",
      "Collaborated with developers and designers to enhance user experience and functionality.",
    ],
  },
  {
    title: "Java Programmer Intern",
    company_name: "CipheByte Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed and debugged Java-based applications and features as part of the development team.",
      "Worked with OOP concepts, data structures, and algorithms to build efficient code.",
      "Participated in backend development tasks, including database integration using JDBC/MySQL.",
      "Collaborated in Agile environments and used version control tools like Git for project management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Farmer's Market Place",
    description:
      "A modern web application built with Next.js to connect farmers directly with consumers for buying and selling fresh produce.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Utkarsh8867/Farmer-Market-Productstore",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
