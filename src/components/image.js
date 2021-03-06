import { useStaticQuery, graphql } from "gatsby"

const Image = () => {
  const {
    bannerImage,
    houseKeepr,
    myChows,
    nkoba,
    proBusiness,
    game,
    urbanWear,
    teriyaki,
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
      urbanWear: file(relativePath: { eq: "urbanwear.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teriyaki: file(relativePath: { eq: "teriyaki.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return {
    bannerImage,
    houseKeepr,
    myChows,
    game,
    nkoba,
    proBusiness,
    urbanWear,
    teriyaki,
  }
}

export default Image
