import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../custom.scss"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Power3, TimelineLite } from "gsap"
import BackgroundImage from "gatsby-background-image"
import {
  BodyText,
  Header,
  Button,
  MainDiv,
} from "../components/MyStyledComonents"
import Img from "gatsby-image"
import Image from "../components/image"

const ImageBackground = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const ButtonStyling = {
  buttonOne: css`
    background-color: #32416d;
    border: 1px solid #32416d;
    &:hover {
      background-color: #405390;
      border: 1px solid #405390;
    }
  `,

  buttonTwo: css`
    border: 1px solid #eee;
    &:hover {
      background-color: #eee;
      color: #32416d;
    }
  `,
}

const IndexPage = () => {
  let heading1 = useRef(null)
  let body1 = useRef(null)
  let tl = new TimelineLite()

  // GSAP Animations

  useEffect(() => {
    // //Heading Animation
    // tl.from(
    //   heading1,
    //   1,
    //   {
    //     y: 10,
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //   },
    //   1.4
    // )
    //   .from(body1, 1, { y: 10, opacity: 0, ease: Power3.easeOut }, 2.4)
    //   .paused()
  }, [tl])

  return (
    <Layout>
      <SEO
        title="Home"
        description="Experienced Web and Software Developer based in Lusaka Zambia"
      />
      <MainDiv
        css={css`
          display: grid;
          min-height: 100vh;
          .banner-image {
            min-width: 325px;
            margin-bottom: 40px;
          }
          .header {
            font-size: 74px;
          }
          .btn-container {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin: 20px 0;
          }
          @media screen and (min-width: 768px) {
            grid-template-columns: repeat(auto-fill, minmax(300px, 49%));
            place-items: center;
            grid-column-gap: 10px;
            .banner-image {
              min-width: 520px;
            }
            .btn-container {
              justify-content: unset;
            }
          }
        `}
      >
        <div className="column">
          <Img
            fluid={Image().bannerImage.childImageSharp.fluid}
            className="banner-image"
          />
        </div>
        <div className="column">
          <Header className={"header"}>Hey, My Name is Andrew.</Header>
          <BodyText>
            I build interesting and innovative online experiences. Click below
            to learn more or see some of my work.
            <div className="btn-container">
              <Button href="#" style={{ backgroundColor: "black" }}>
                View My Portfolio
              </Button>
              <Button
                href="#"
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Learn More
              </Button>
            </div>
          </BodyText>
        </div>
      </MainDiv>
    </Layout>
  )
}
export default IndexPage
