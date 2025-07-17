import {
  mobile,
  backend,
  database,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  express,
  messenger,
  nest,
  agile,
  swagger,
  cplusplus,
  // figma,
  docker,
  // meta,
  autoBizz,
  JobPortal,
  learnverse,
  wish_to_wear,
  sceptre,
  // carrent,
  jobit,
  tripguide,
  appscript,
  // threejs,
  bigquery,
  mysql,
  postgresql,
  charities,
  AutoBizzBrand
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
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Architect",
    icon: database,
  }

];

const technologies = [
 
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript \n TypeScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "AppScript",
    icon: appscript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Node JS \n Express JS \n Nest JS",
    icon: nodejs,
  },
  // {
  //   name: "Express.js",
  //   icon: express,
  // },
  // {
  //   name: "Nest.js Express.js",
  //   icon: nest,
  // }, 
  // {
  //   name: "C++",
  //   icon: cplusplus,
  // },

  {
    name: "Docker",
    icon: docker,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "BigQuery",
    icon: bigquery,
  },

  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Git & Github",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Agile Project Management",
    icon: agile,
  },
  {
    name: "OpenAPI\n(Swagger)",
    icon: swagger,
  },
  {
    name: "HTML5 & CSS3",
    icon: html,
  },
  

];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "AutoBizz",
    icon: autoBizz,
    iconBg: "white",
    date: "January 2025 - Present",
    points: [
      `Led automation and Shopify integrations, cutting manual work by 30%
and boosting efficiency.`,
      ` Delivered cloud solutions that improved inventory
and data sync, increasing speed by 20%.`,
      `Responsible for deploying the application on Google Cloud, ensuring seamless integration, scalability,
and optimal performance.`,
      `Creating custom add-ons for Google Sheets to enhance functionality and streamline workflows.`

    ],
  },
  {
    title: "Backend Developer",
    company_name: "Wish To Wear",
    icon: wish_to_wear,
    iconBg: "white",
    date: "January 2024 - July 2024",
    points: [
      `Designed and maintained scalable back-end systems with Node.js,
achieving 99.9% uptime.`,
      `Led migration to MongoDB, boosting
performance by 40% and enhancing data flexibility`,
      `Led the refactoring of the existing relational database to MongoDB to enhance scalability and
performance.`,

    ],
  },
  {
    title: "Backend Developer",
    company_name: "Sceptre",
    icon: sceptre,
    iconBg: "white",
    date: "May 2022 - November 2023",
    points: [
      `Optimized application performance and scalability by implementing best coding practices and utilizing
asynchronous programming techniques.`,
      `Collaborated with cross-functional teams to deliver robust solutions,
increasing deployment speed and code maintainability`
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
    name: "MANAGEMENT OF CHARITABLE SOCIETIES",
    description:
      `Charitable Organization Management Website
Developed a comprehensive web platform to streamline the management of volunteering and donation activities for charitable organizations. Enhanced resource management capabilities, enabling charities to better allocate and track resources. Implemented features to facilitate outreach and engagement with target groups, boosting participation and community involvement.


      `,
    tags: [
      {
        name: "Node.js (Express.js)",
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
    image: charities,
    source_code_link: "https://github.com/yazan-alshabki/charities.com/tree/main",
  },
  {
    name: "LEARNVERSE",
    description:
      `Comprehensive English Learning Platform
Designed and developed a robust Node.js backend to enable seamless integration between web and mobile applications, ensuring consistent performance across platforms. Implemented Docker for efficient deployment, scalability, and streamlined development workflows, resulting in improved system reliability and ease of maintenance.
      `,
    tags: [
      {
        name: "Node.js (Express.js)",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: learnverse,
    source_code_link: "https://github.com/yazan-alshabki/LEARNVERSE",
  },
  {
    name: "MESSENGER",
    description:
      `CReal-Time Chat Application
Developed a real-time messaging solution enabling instant communication between users with seamless one-on-one and group chat functionality. Implemented efficient message handling and delivery to ensure fast, reliable, and interactive conversations, enhancing user engagement and collaboration.`,
    tags: [
      {
        name: "Node.js (Express.js)",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "HTML 5 & CSS 3",
        color: "pink-text-gradient",
      },
      {
        name: "jQuery",
        color: "red-text-gradient",
      },
      
    ],
    image: messenger,
    source_code_link: "https://github.com/yazan-alshabki/messenger",
  },
  {
    name: "Job Portal Platform",
    description:
      `Developed a dynamic job portal that connects job seekers with employers through an intuitive and user-friendly interface. The platform streamlines the job application process by automatically generating professional CVs from user profiles and supports multiple languages through integrated post translation, enhancing accessibility and expanding global reach.`,
      tags: [
      {
        name: "Node.js (Express.js)",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },

    ],
    image: JobPortal,
    source_code_link: "https://github.com/yazan-alshabki/JobPortal",
  },
  {
    name: "AutoBizz",
    description:
      `Redesigned and launched the official AutoBizz website as part of a full brand identity refresh, aligning with the company’s rapid growth and focus on scalable digital solutions. The project aimed to deliver a modern, responsive, and engaging experience for visitors while reflecting AutoBizz’s vision and values.`,
      tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },

    ],
    image: AutoBizzBrand,
    source_code_link: "",
  },

  
  
];

export { services, technologies, experiences, testimonials, projects };
