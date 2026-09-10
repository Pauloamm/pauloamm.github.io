import perpetuaInsanusCover from "./assets/gamecovers/PerpetuaInsanusCover.png";
import iterumCover from "./assets/gamecovers/IterumCover.png";
import angelChroniclesCover from "./assets/gamecovers/AngelCroniclesCover.png";
import throughTheLightCover from "./assets/gamecovers/ThroughTheLightCover.png";

export const siteConfig = {
  name: "Paulo Macedo",
  title: "Gameplay Systems - Game AI - Unreal Engine - Unity | Software Developer",
  description: "Portfolio website of Paulo Macedo",
  accentColor: "#1d4ed8",
  social: {
    email: "pauloammacedo@gmail.com",
    linkedin: "https://www.linkedin.com/in/pauloammacedo/",
    itch: "https://pauloamm.itch.io",
    github: "https://github.com/Pauloamm",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["C#", "C++", "Unity", "Unreal Engine", "Game AI", "Gameplay Systems"],
  projects: [
    {
      name: "Perpetua Insanus",
      description:
        "A survival horror game inspired by the likes of Resident Evil and Silent Hill, focusing on exploration and puzzle solving.",
      link: "https://pauloamm.itch.io",
      image: perpetuaInsanusCover,
      category: "personal",
      skills: ["Unity", "C#", "Game AI", "State Machines", "Behaviour Trees", "A* Pathfinding", "Inventory System"],
    },
    {
      name: "Iterum",
      description:
        "Add a short description of Iterum here.",
      link: "https://pauloamm.itch.io",
      image: iterumCover,
      category: "personal",
      skills: ["Unity", "C#"],
    },
    {
      name: "Angel Chronicles",
      description:
        "Add a short description of Angel Chronicles here.",
      link: "https://pauloamm.itch.io",
      image: angelChroniclesCover,
      category: "personal",
      skills: ["Unity", "C#"],
    },
    {
      name: "Through The Light",
      description:
        "Add a short description of Through The Light here.",
      link: "https://pauloamm.itch.io",
      image: throughTheLightCover,
      category: "personal",
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
      achievements: [
        "Graduated with a final grade of 17/20",
      ],
    },
  ],
};