import Image from "./image"

export const projectsArray = () => {
  return [
    {
      id: 6,
      title: "Urbanwear Clothing",
      desc:
        "Demo eCommerce Website built using GatsbyJS and React, and consumes data from a Shopify GraphQL API ",
      img: Image().urbanWear,
      githubLink: "https://github.com/Andycapn/urbanwear.com",
      demoLink: "https://urbanwear-demo.andrewndhlovu.me/",
    },
    {
      id: 1,
      title: "Nkoba Digital",
      desc:
        "A website for a local marketing agency. Built using GatsbyJS an SSR that's built on top of the ReactJS library.",
      img: Image().nkoba,
      githubLink: "https://github.com/Andycapn/nkoba-digital",
      demoLink: "https://nkobadigital.online/",
    },
    {
      id: 2,
      title: "HouseKeepr",
      desc:
        "Housekeeping application for conducting inspections. Built using React and NodeJS. DEMO COMING SOON",
      img: Image().houseKeepr,
      githubLink: "https://github.com/Andycapn/housekeepr.git",
      demoDisabled: true,
      codeDisabled: false,
      viewMore: true,
    },
    {
      id: 3,
      title: "Probusiness Group Landing Page",
      desc:
        "Redesigned the landing page for Probusiness Group Inc an advertising agency based in Albuquerque, New Mexico.",
      img: Image().proBusiness,
      codeDisabled: true,
      demoLink: "https://probusinessgroupinc.com",
    },
    {
      id: 4,
      title: "Chows Asian Bistro",
      desc:
        "Redesigned WordPress site for Chow's, an Asian Bistro in Albuquerque, New Mexico.",
      img: Image().myChows,
      codeDisabled: true,
      demoLink: "https://mychows.com",
    },
    {
      id: 5,
      title: "JavaScript Game",
      desc:
        "This is a game that I built as part of my 'Intro To Programming' course. It is built using JavaScript and the p5.JS library. This project gave me a solid foundation on which to build my JavaScript expertise.",
      img: Image().game,
      githubLink: "https://github.com/Andycapn/SimpleGame",
      demoDisabled: true,
    },
  ]
}
