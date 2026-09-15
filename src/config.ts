import perpetuaInsanusCover from "./assets/gamecovers/PerpetuaInsanusCover.png";
import iterumCover from "./assets/gamecovers/IterumCover.png";
import angelChroniclesCover from "./assets/gamecovers/AngelCroniclesCover.png";
import throughTheLightCover from "./assets/gamecovers/ThroughTheLightCover.png";

export const siteConfig = {
  name: "Paulo Macedo",
  title: "Gameplay Systems - Game AI - Unreal Engine - Unity | Software Developer",
  description: "Portfolio website of Paulo Macedo",
  accentColor: "#99a4ff",
  social: {
    email: "pauloammacedo@gmail.com",
    linkedin: "https://www.linkedin.com/in/pauloammacedo/",
    itch: "https://pauloamm.itch.io",
    github: "https://github.com/Pauloamm",
  },
  aboutMe:
    "I'm a software developer with a Master's in Applied Artificial Intelligence and a Bachelor's in Digital Games Development Engineering, specializing in gameplay systems and game AI. At WaveFunctionVR, I built VR training applications, a drone flight simulator in Unreal Engine 4, and reusable libraries that cut project setup time by over 50%. My personal projects focus on [placeholder - varies per project] - and I've also taught game engine fundamentals and OOP to first-year students as an invited assistant professor. Outside of games, I've worked as a software developer at Deloitte, debugging and maintaining production database systems. Even though games are my specialty, they've given me the knowledge to architect clean code and scalable systems that translate directly into broader software engineering challenges.",
  skills: ["C#", "C++", "Unity", "Unreal Engine", "Game AI", "Gameplay Systems"],
  projects: [
    {
      name: "Perpetua Insanus",
      description:
        "A survival horror game inspired by the likes of Resident Evil and Silent Hill, focusing on exploration and puzzle solving.",
      link: "https://pauloamm.itch.io/perpetua-insanus",
      slug: "perpetua-insanus",
      image: perpetuaInsanusCover,
      category: "personal",
      skills: ["Unity", "C#", "Game AI", "State Machines", "Behaviour Trees", "A* Pathfinding", "Inventory System"],
    },
    {
      name: "Iterum",
      description: "Iterum was my first Unity project and is a horror game, inspired by Silent Hill's P.T.",
      link: "https://pauloamm.itch.io/iterum",
      slug: "iterum",
      image: iterumCover,
      category: "personal",
      skills: ["Unity", "C#", "Events & Delegates", "Observer Pattern", "Decoupled Architecture", "Player Fear Pacing"],
    },
    {
      name: "Angel Chronicles",
      description: "Add a short description of Angel Chronicles here.",
      link: "https://pauloamm.itch.io",
      image: angelChroniclesCover,
      category: "personal",
      skills: ["Unity", "C#"],
    },
    {
      name: "Through The Light",
      description: "Add a short description of Through The Light here.",
      link: "https://pauloamm.itch.io",
      image: throughTheLightCover,
      category: "gamejam",
      skills: ["Unity", "C#"],
    },
  ],
  experience: [
    {
      company: "WaveFunctionVR",
      title: "Software Developer",
      dateRange: "Jan 2025 - Jan 2026",
      location: "Braga, Portugal (Remote)",
      bullets: [
        "Implemented rapid demos and functional prototypes used in client proposals, directly improving customer acquisition and proposal success rate",
        "Designed and maintained shared libraries and reusable packages across multiple projects, reducing project setup and common feature implementation time by over 50%",
        "Developed a Linux-targeted drone flight simulator using Unreal Engine 4, focusing on real-time simulation and performance",
        "Implemented turn management and scoring systems for a VR physics-football game, leveraging existing systems to improve gameplay fairness and structure",
        "Contributed to interactive VR training and serious game applications, focusing on gameplay logic, user interaction flows, and AI-driven NPC interactions (OpenAI real-time API)",
      ],
    },
    {
      company: "Deloitte Delivery Center",
      title: "Experienced Programmer",
      dateRange: "Sep 2022 - Jan 2023",
      location: "Porto, Portugal (Remote)",
      bullets: [
        "Reduced system errors and improved reliability through rigorous debugging processes and testing, reducing system errors and wrong outputs from databases",
        "Analyzed existing codebases and fixed bugs in complex database queries, improving client output reliability",
      ],
    },
    {
      company: "Deloitte Delivery Center",
      title: "Junior Programmer",
      dateRange: "Feb 2022 - Sep 2022",
      location: "Porto, Portugal (Remote)",
      bullets: [
        "Maintained up-to-date knowledge of industry trends, continuously improving programming skills and expertise",
        "Tested and troubleshot an on-development AI platform, including data processing and basic machine learning models",
      ],
    },
    {
      company: "IPCA - Polytechnic Institute of Cávado and Ave",
      title: "Invited Assistant Professor",
      dateRange: "Feb 2022 - Jul 2022",
      location: "Barcelos, Portugal",
      bullets: [
        "Responsible for creating and teaching a curricular program for 1st year college students, explaining how game engines work in the background and improving Object-Oriented Programming skills using C# (based on the Monogame framework)",
      ],
    },
  ],
  education: [
    {
      school: "IPCA - Polytechnic Institute of Cávado and Ave",
      degree: "Master's in Applied Artificial Intelligence",
      dateRange: "September 2024",
      achievements: [
        "Graduated with a final grade of 17/20",
        "Thesis graded 19/20",
      ],
    },
    {
      school: "IPCA - Polytechnic Institute of Cávado and Ave",
      degree: "Bachelor's in Digital Games Development Engineering",
      dateRange: "June 2021",
      achievements: ["Graduated with a final grade of 17/20"],
    },
  ],
};