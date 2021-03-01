import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const {
    bannerImage,
    houseKeepr,
    myChows,
    nkoba,
    proBusiness,
    game,
  } = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "bannerImage.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      houseKeepr: file(relativePath: { eq: "housekeepr.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      myChows: file(relativePath: { eq: "mychows.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nkoba: file(relativePath: { eq: "nkoba.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      proBusiness: file(relativePath: { eq: "probusiness.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      game: file(relativePath: { eq: "game.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return { bannerImage, houseKeepr, myChows, game, nkoba, proBusiness }
}

export default Image
