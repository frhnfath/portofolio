import project1a from "../assets/patroliKarhutla1.jpg";
import project1b from "../assets/patroliKarhutla2.jpg";
import project2a from "../assets/foodCourtApp1.png";
import project2b from "../assets/foodCourtApp2.png";

export const HERO_CONTENT = `Computer Science graduate, equipped with a solid foundation in software development and fueled by an unwavering passion for app and web development. Proficient in Back‑End Development and Mobile Development, I am poised to harness my skills and knowledge to spearhead innovative solutions within the dynamic tech industry.`;

export const ABOUT_TEXT = `I'm a Computer Science graduate from IPB University with a GPA of 3.56, driven by a passion for technology and a commitment to excellence. As a recipient of the Jabar Future Leaders Scholarship and Chief Committee of IT Today 2021, I've honed my leadership skills while organizing successful events and fostering community engagement. As the Community Lead of IPB’s Mobile Apps Developer Community, I've created a collaborative environment for fellow students to explore mobile app development. My experience spans across various technologies, including Kotlin, Laravel, PHP native, JavaScript, Tailwind CSS, and databases like MySQL, PostgreSQL, and SQLite. I'm dedicated to leveraging technology to make a positive impact, and I'm excited about the opportunities ahead to contribute my skills to meaningful projects.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Digital Vansales Order Management Intern",
    company: "Danone AQUA",
    description: `Strategically enhancing and maintaining supply chain order management websites to optimize efficiency and elevate user experience.`,
    technologies: ["HTML", "CSS", "PHP", "Javascript", "MySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Web Developer",
    company: "Kemendikbud",
    description: `Developed a bespoke website tailored to support the Ministry of Education's project, ensuring seamless integration and user engagement.`,
    technologies: ["PHP", "Tailwind CSS", "Laravel", "PostgreSQL"],
  },
];

export const PROJECTS = [
  {
    title: "Patroli Karhutla",
    image1: project1a,
    image2: project1b,
    description:
      "Developed an application as an undergraduate thesis project, subsequently utilized by the Ministry of Environment and Forestry for effective surveillance of land and forest fires, demonstrating impactful real-world application of academic research.",
    technologies: ["Kotlin", "SQLite"],
  },
  {
    title: "Foodcourt App",
    image1: project2a,
    image2: project2b,
    description:
      "Developed a transaction mobile application system for food courts, comprising both a client and merchant application, facilitating seamless transactions and enabling merchants to effectively manage real-time profits.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "farhan.fathurrahman2001@gmail.com",
};
