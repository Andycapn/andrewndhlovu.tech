import nkobaProj from "../images/nkoba.png"
import todoProj from "../images/todo.png"
import gameProj from "../images/game.png"

export const projectsArray = [
  {
    id: 1,
    title: "Nkoba Digital",
    desc:
      "A website for a local marketing agency. I built this project using GatsbyJS an SSR that's built on top of the ReactJS library.",
    img: nkobaProj,
    githubLink: "https://github.com/Andycapn/nkoba-digital",
    demoLink: "https://nkoba-digital.netlify.app",
  },
  {
    id: 2,
    title: "React To-Do App",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut esse labore magni quidem repudiandae rerum sed, soluta vero! Cumque, suscipit.",
    img: todoProj,
    githubLink: "https://github.com/Andycapn/React-Todo",
    demoLink: "https://sad-almeida-cb9274.netlify.app",
  },
  {
    id: 3,
    title: "JavaScript Game",
    desc:
      "This is a game that I built as part of my 'Intro To Programming' course. It's constructed using JavaScript and the p5.JS library",
    img: gameProj,
    githubLink: "https://github.com/Andycapn/SimpleGame",
    disabled: "true",
  },
]
