import nkobaProj from "../images/nkoba.png"
import gameProj from "../images/game.png"
import houseProj from "../images/housekeepr.png"

export const projectsArray = [
  {
    id: 1,
    title: "Nkoba Digital",
    desc:
      "A website for a local marketing agency. Built using GatsbyJS an SSR that's built on top of the ReactJS library.",
    img: nkobaProj,
    githubLink: "https://github.com/Andycapn/nkoba-digital",
    demoLink: "https://nkoba.demo.andrewndhlovu.tech",
  },
  {
    id: 2,
    title: "HouseKeepr",
    desc:
      "Housekeeping application for conducting inspections. Built using React and NodeJS",
    img: houseProj,
    githubLink: null,
    demoDisabled: "true",
  },
  {
    id: 3,
    title: "JavaScript Game",
    desc:
      "This is a game that I built as part of my 'Intro To Programming' course. It is built using JavaScript and the p5.JS library.",
    img: gameProj,
    githubLink: "https://github.com/Andycapn/SimpleGame",
    demoDisabled: "true",
  },
]
