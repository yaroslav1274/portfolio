import {
  unity,
  magicavoxel,
  react,
  javascript,
  gsap,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  brainwave,
  runner,
  ints,
  iphone,
  magicavoxelrender,
  cs,
  mojito,
  web
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

export const services = [
  { title: "React", icon: react },
  { title: "C#", icon: cs },
  { title: "Unity", icon: unity },
  { title: "GSAP", icon: gsap },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Unity", icon: unity },
  { name: "C#", icon: cs },
  { name: "MagicaVoxel", icon: magicavoxel },
  { name: "GSAP", icon: gsap },
];

export const experiences = [
  {
  title: "Getting Started with Web Development",
  company_name: "HTML/CSS/JavaScript",
  icon: html,
  iconBg: "#161329",
  date: "Jan 2021 – Feb 2022",
  points: [
    "Laid the groundwork in HTML, CSS, and JavaScript, focusing on semantic structure and responsive design.",
    "Built basic static websites and practiced user interface layouts across different screen sizes.",
    "Explored JavaScript fundamentals including DOM manipulation, events, and simple animations."
  ],
},
{
  title: "Intro to Game Development & 3D Design",
  company_name: "Unity & MagicaVoxel",
  icon: unity,
  iconBg: "#161329",
  date: "Mar 2022 – April 2023",
  points: [
    "Developed small games and interactive experiences using Unity with C# scripting for gameplay logic, physics, and UI interactions.",
    "Created voxel-style 3D assets using MagicaVoxel and imported them into Unity environments.",
    "Learned game loop architecture, basic AI behavior, input systems, and scene management.",
    "Gained experience with Unity's component-based architecture and lighting systems."
  ],
},
{
  title: "Modern Front-End Development",
  company_name: "React Ecosystem",
  icon: react,
  iconBg: "#161329",
  date: "May 2023 – Nov 2024",
  points: [
    "Built dynamic web applications using React, managing state with hooks and lifting state up for modular architecture.",
    "Styled components efficiently with Tailwind CSS, following mobile-first and utility-first design principles.",
    "Integrated form validation, routing (React Router), and responsive layout techniques across multiple projects.",
  ],
},
{
  title: "Creative Web Experiences with 3D & Animation",
  company_name: "Three.js & GSAP",
  icon: gsap,
  iconBg: "#161329",
  date: "Dec 2024 – Present",
  points: [
    "Used Three.js to build interactive 3D experiences embedded in modern websites, including orbit controls, lights, and shaders.",
    "Implemented smooth and performant UI/UX transitions using GSAP (GreenSock) for both DOM and canvas animations.",
    "Combined React with Three.js and GSAP to create immersive, scroll-based animations and portfolio visuals.",
    "Focused on enhancing user engagement through motion design, accessibility, and performance optimization."
  ],
},
];

export const projects = [
  {
    name: "It's Not That Simple",
    description:
      "3D platformer game where players navigate through a series of challenging levels, each with unique obstacles and puzzles to solve.",
    tags: [
      { name: "Unity", color: "blue-text-gradient" },
      { name: "CS", color: "green-text-gradient" },
      { name: "game-dev", color: "pink-text-gradient" },
    ],
    image: ints,
    source_code_link: "https://yaroslav460.itch.io/its-not-that-simple",
  },
  {
    name: "iPhone Clone",
    description:
      "A clone of the iPhone interface, showcasing a variety of apps, features and integration of the 3D model of device.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "GSAP", color: "pink-text-gradient" },
      { name: "Three.js", color: "pink-text-gradient" },
    ],
    image: iphone,
    source_code_link: "https://iphone-clone-app-beta.vercel.app/",
  },
  {
    name: "3D Runner",
    description:
      "A 3D endless runner game where players navigate through an infinite landscape, avoiding obstacles and collecting coins to unlock different characters.",
    tags: [
      { name: "Unity", color: "blue-text-gradient" },
      { name: "CS", color: "green-text-gradient" },
      { name: "game-dev", color: "pink-text-gradient" },
      { name: "MagicaVoxel", color: "green-text-gradient" },
    ],
    image: runner,
    source_code_link: "https://yaroslav460.itch.io/runner",
  },
  {
    name: "Brainwave",
    description:
      "The front-end design of the AI tool for generating media",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "GSAP", color: "pink-text-gradient" },
    ],
    image: brainwave,
    source_code_link: "https://shrinkme.ink/brainwave",
  },
  {
    name: "Night Drive",
    description:
      "Beautiful voxel art created using MagicaVoxel, showcasing the power of 3D design in a simple and intuitive way.",
    tags: [
      { name: "3DArt", color: "blue-text-gradient" },
      { name: "Voxel", color: "green-text-gradient" },
      { name: "MagicaVoxel", color: "pink-text-gradient" },
    ],

    image: magicavoxelrender,
    source_code_link: "#",
  },
  {
    name: "Mojito Landing",
    description:
      "A landing page for a cocktails design, showcasing the use of React and GSAP to create a visually appealing and responsive project.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "GSAP", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],

    image: mojito,
    source_code_link: "https://gsap-cocktails-inky.vercel.app/",
  },
];
