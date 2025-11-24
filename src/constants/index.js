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
  jobit1,
  carrent,
  jobit,
  tripguide,
  threejs,
  cipherbyte,
  cipherbytecert,
  googlecert,
  datacampcert,
  techgeekcert,
  javacert,
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
    certificate: googlecert,
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
    certificate: datacampcert,
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
    certificate: techgeekcert,
    points: [
      "Assisted in maintaining and updating website content to ensure accuracy and performance.",
      "Monitored site traffic, uptime, and user engagement using web analytics tools.",
      "Supported backend tasks, bug fixes, and CMS management to improve site reliability.",
      "Collaborated with developers and designers to enhance user experience and functionality.",
    ],
  },
  {
    title: "Java Programmer Intern",
    company_name: "CipherByte Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Apr 2025",
    certificate: javacert,
    points: [
      "Developed and debugged Java-based applications and features as part of the development team.",
      "Worked with OOP concepts, data structures, and algorithms to build efficient code.",
      "Participated in backend development tasks, including database integration using JDBC/MySQL.",
      "Collaborated in Agile environments and used version control tools like Git for project management.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "Adscart Solutions",
    icon: cipherbyte,
    iconBg: "#383E56",
    date: "Completed",
    certificate: cipherbytecert,
    points: [
      "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Developed RESTful APIs and integrated them with React frontend for seamless data flow.",
      "Implemented user authentication, authorization, and session management using JWT.",
      "Worked on responsive UI design and state management using React hooks and Context API.",
      "Collaborated with team members using Git for version control and Agile methodologies.",
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
    name: "SudharNayak",
    description:
      "• Modern web app for reporting and tracking civic issues\n• Real-time updates with image upload and geolocation\n• Admin dashboard for managing and resolving issues",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "geolocation",
        color: "pink-text-gradient",
      },
    ],
    image: "/i/sudharnayak.png",
    source_code_link: "https://github.com/Utkarsh8867/SudharNayak",
    live_link: "https://sudharnayak.netlify.app/",
  },
  {
    name: "SkillSwaps",
    description:
      "• Platform for skill exchange - offer skills for skills you need\n• Built for GNEC Hackathon 2025 Fall\n• Modern UI with mock data ready for backend integration",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hackathon",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
    ],
    image: "/i/Skillswaps.png",
    source_code_link: "https://github.com/Utkarsh8867/SkillSwap",
    live_link: "https://skills1wap.netlify.app",
  },
  {
    name: "Transforming After-Sales Support",
    description:
      "• AI-powered customer service with real-time communication\n• Built for i.mobilothon 5.0 hackathon\n• Intelligent dashboards and seamless user experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "hackathon",
        color: "pink-text-gradient",
      },
    ],
    image: "/i/transformingaftersalessupport.png",
    source_code_link: "https://github.com/Utkarsh8867/Transforming-After-Sales-Support",
    live_link: "https://transformingaftersalessupport.netlify.app/",
  },
  {
    name: "AI Daily Journal",
    description:
      "• Intelligent journaling assistant using AI for reflection\n• Built for First Visions: Dantause & Maestro Hackathon\n• 🏆 3rd Winner - Engaging and insightful experience",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "hackathon",
        color: "green-text-gradient",
      },
      {
        name: "winner",
        color: "pink-text-gradient",
      },
    ],
    image: "/i/Aijiournal.png",
    source_code_link: "https://github.com/Utkarsh8867/AI-Daily-Journal",
    live_link: "https://ai-daily-journal-gamma.vercel.app",
  },
  {
    name: "Farmer's Market Place",
    description:
      "• Connect farmers directly with consumers for fresh produce\n• Buy and sell products with secure online transactions\n• Built with Next.js for modern web experience",
    tags: [
      {
        name: "nextjs",
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
    image: "/i/farmermarket.png",
    source_code_link: "https://github.com/Utkarsh8867/Farmer-Market-Productstore",
    live_link: "https://martfarmer.netlify.app",
  },
  {
    name: "JEE Preparation App",
    description:
      "• Flutter application for JEE exam preparation and practice\n• Interactive learning with REST API integration\n• Modern UI for enhanced study and learning experience",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: jobit1,
    source_code_link: "https://github.com/Utkarsh8867/JEE_preparation_Chatbot_app",
    live_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
