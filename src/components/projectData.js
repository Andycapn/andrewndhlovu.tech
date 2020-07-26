import nkobaProj from "../images/nkoba.png"
import gameProj from "../images/game.png"
import houseProj from "../images/housekeepr.png"
import Probusiness from "../images/probusiness.png"
import MyChows from "../images/mychows.png"

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
    title: "Probusiness Group Landing Page",
    desc:
      "Redesigned the landing page for Probusiness Group Inc an advertising agency based in Albuquerque, New Mexico.",
    img: Probusiness,
    codeDisabled: true,
    demoLink: "https://probusinessgroupinc.com",
  },
  {
    id: 3,
    title: "Chows Asian Bistro",
    desc:
      "Redesigned WordPress site for Chow's, an Asian Bistro in Albuquerque, New Mexico.",
    img: MyChows,
    codeDisabled: true,
    demoLink: "https://mychows.com",
  },
  {
    id: 4,
    title: "HouseKeepr",
    desc:
      "Housekeeping application for conducting inspections. Built using React and NodeJS.",
    img: houseProj,
    githubLink: null,
    demoDisabled: true,
    codeDisabled: true,
  },
  {
    id: 5,
    title: "JavaScript Game",
    desc:
      "This is a game that I built as part of my 'Intro To Programming' course. It is built using JavaScript and the p5.JS library. This project gave me a solid foundation on which to build my JavaScript expertise.",
    img: gameProj,
    githubLink: "https://github.com/Andycapn/SimpleGame",
    demoDisabled: true,
  },
]
