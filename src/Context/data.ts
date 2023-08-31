import { DataType, AbilityType, ProjectType } from './template'

// Image SVG
import html from '../Resources/html.svg'
import css from '../Resources/css.svg'
import js from '../Resources/javascript.svg'
import react from '../Resources/react.svg'
import redux from '../Resources/redux.svg'
import node from '../Resources/node.svg'
import sequelize from '../Resources/sequelize.svg'
import postgre from '../Resources/postgres.svg'
import git from '../Resources/git.svg'

// Image PNG
import adaptability from '../Resources/adaptability.png'
import resolution from '../Resources/conflict-resolution.png'
import curiosity from '../Resources/curiosity.png'
import empathy from '../Resources/empathy.png'
import ethic from '../Resources/ethic.png'
import work from '../Resources/teamwork.png'
import transparency from '../Resources/transparency.png'

export const dataEn: DataType = {
  home: "Home",
  about: "About me",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
  profession: "FULL STACK WEB DEVELOPER",
  description: `
    Four years ago, I discovered the thrilling world of web development. Since then, I've devoted my free time to studying and practicing this discipline. Recently, I've decided to take my commitment further, focusing more seriously. My current goal is to learn and contribute to professional projects. I have a passion for code, design, and the logic of web development, and I'm motivated to overcome challenges and learn from new experiences.
  `,
  history1: `
    I am Santiago from Lima, Peru.
    I am a Full Stack Developer and a Computer Science and Informatics Technician.
    Currently, I am studying at Soy Henry, a bootcamp that covers over 800 hours of programming.
    I hold certifications in the Python programming language and Cisco Networking Academy.
  `,
  history2: `
    I love design, coding, and logic, so I'm constantly evolving to combine them with the technical skills I possess and those I continue to acquire. As a technology enthusiast, I strive to stay updated on the latest trends and technological advancements, allowing me to keep growing in this fascinating world of development.
  `,
  history3: `
    My goal is to provide high-quality projects that exceed the established expectations. I am excited and eager for the opportunity to collaborate with you and contribute my skills to your upcoming project. I look forward to hearing from you soon!
  `,
  tech: "Tech Skills",
  soft: "Soft Skills",
  invite: "Contact me",
  iName: "Name",
  iEmail: "Email",
  iMessage: "Message",
  iSend: "Send"
}

export const dataEs: DataType = {
  home: "Inicio",
  about: "Sobre mi",
  skills: "Habilidades",
  projects: "Proyectos",
  contact: "Contacto",
  profession: "DESARROLLADOR WEB FULL STACK",
  description: `
    Hace 4 años, descubrí el emocionante mundo del desarrollo web. Desde entonces, he dedicado mi tiempo libre a estudiar y practicar esta disciplina. Recientemente, decidí comprometerme más, enfocándome seriamente. Mi objetivo actual es aprender y contribuir en proyectos profesionales. Siento pasión por el código, el diseño y la lógica del desarrollo web, y me motiva superar retos y aprender de nuevas experiencias.
  `,
  history1: `
    Soy Santiago de Lima, Perú.
    Soy Desarrollador Full Stack y técnico en Computación e Informática.
    Actualmente estudio en Soy Henry, un bootcamp que abarca más de 800 horas de programación.
    Poseo certificaciones en el lenguaje de programación Python y en Cisco Networking Academy.
  `,
  history2: `
    Me encanta el diseño, el código y la lógica, por lo que estoy en constante evolución para combinarlo con las habilidades técnicas que poseo y las que sigo adquiriendo. Como apasionado de la tecnología, busco mantenerme actualizado en las últimas tendencias y avances tecnológicos, lo que me permite continuar creciendo en este fascinante mundo del desarrollo.
  `,
  history3: `
    Mi objetivo es ofrecer proyectos de alta calidad que superen las expectativas establecidas. Estoy emocionado y ansioso por la oportunidad de colaborar contigo y aportar mis habilidades a tu próximo proyecto. ¡Espero recibir noticias tuyas pronto!
  `,
  tech: "Habilidades tecnológicas",
  soft: "Habilidades blandas",
  invite: "Contactame",
  iName: "Nombre",
  iEmail: "Correo",
  iMessage: "Mensaje",
  iSend: "Enviar"
}

export const techSkills: AbilityType[] = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "React", image: react },
  { name: "Redux", image: redux },
  { name: "Node.js", image: node },
  { name: "Sequelize", image: sequelize },
  { name: "PostgreSQL", image: postgre },
  { name: "Git", image: git },
]

export const softSkills: AbilityType[] = [
  { name: "Adaptability", image: adaptability },
  { name: "Conflict Resolution", image: resolution },
  { name: "Curiosity", image: curiosity },
  { name: "Empathy", image: empathy },
  { name: "Ethic", image: ethic },
  { name: "Team Work", image: work },
  { name: "Transparency", image: transparency },
]

export const projects: ProjectType[] = [
  {
    title: "Rick and Morty - Henry",
    github: "https://github.com/GavidiaS/Rick-And-Morty",
    deploy: "https://rick-and-morty-gavidias.vercel.app/",
    descriptionEn: "This project is a 'Single Page Application', where users can explore the various characters from the series and select their favorites.",
    descriptionEs: "Este proyecto consiste en una 'Single Page Application', donde el usuario puede explorar los distintos personajes de la serie y seleccionar a sus favoritos.",
    image: "https://i.ibb.co/hy9cVks/Rick-And-Morty.png",
    tech: ["React", "Redux", "Node.js", "Express", "Sequelize", "PostgreSQL"]
  },
  {
    title: "Countries - PI Henry",
    github: "https://github.com/GavidiaS/PI-Countries",
    descriptionEn: "The following project allows users to explore countries around the world, view their details, filter, sort, and create tourist activities associated with their selected countries.",
    descriptionEs: "El siguiente proyecto permite a los usuarios explorar los países del mundo, ver sus detalles, filtrar, ordenar y crear actividades turísticas con sus países seleccionados.",
    image: "https://i.ibb.co/W0ft2Vr/Countries.png",
    tech: ["React", "TypeScript", "Redux", "Node.js", "Express", "Sequelize", "PostgreSQL"]
  },
  {
    title: "Daily Tasks - Platzi",
    github: "https://github.com/GavidiaS/Daily-Tasks",
    deploy: "https://daily-tasks-five.vercel.app/",
    descriptionEn: "The project aims to allow users to add their daily tasks, mark them as completed, or delete them according to their preference.",
    descriptionEs: "El proyecto consiste en permitir a los usuarios agregar sus tareas diarias, marcarlas como completadas o eliminarlas según su preferencia.",
    image: "https://i.ibb.co/CJZV8Hh/desktop-mode.jpg",
    tech: ["React", "ReactContext", "TypeScript"]
  },
  {
    title: "ShopyNex - Platzi",
    github: "https://github.com/GavidiaS/React-Tailwindcss",
    descriptionEn: "This project was carried out after completing the React + Tailwind CSS course at Platzi. In this project, listed products are showcased, simulating an e-commerce webpage.",
    descriptionEs: "Este proyecto se llevó a cabo después de finalizar el curso de React + Tailwind CSS en Platzi. En este proyecto se presentan productos listados y simula una página de comercio electrónico.",
    image: "https://i.ibb.co/vjX5npB/ShopyNex.png",
    tech: ["React", "ReactContext", "Tailwindcss"]
  },
  // {
  //   title: "",
  //   github: "",
  //   descriptionEn: "",
  //   descriptionEs: "",
  //   image: "",
  //   tech: []
  // },
]