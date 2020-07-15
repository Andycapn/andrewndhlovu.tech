import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../custom.scss"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Power3, TimelineLite } from "gsap"
import BackgroundImage from "gatsby-background-image"
import {
  BodyText,
  Header,
  Button,
  MainDiv,
} from "../components/MyStyledComonents"

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
    //Heading Animation
    tl.from(
      heading1,
      1,
      {
        y: 10,
        opacity: 0,
        ease: Power3.easeOut,
      },
      1.4
    )
      .from(body1, 1, { y: 10, opacity: 0, ease: Power3.easeOut }, 2.4)
      .paused()
  }, [tl])

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "home-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // Overlay Background Image with Gradient
  const BackgroundImages = [
    image.sharp.fluid,
    `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.7) 100%)`,
    `linear-gradient(176deg, rgba(108,141,250,1) 0%, rgba(104,182,239,0.29) 58%, rgba(97,244,222,1) 100%)`,
  ].reverse()

  return (
    <Layout>
      <SEO title="Home" />
      <ImageBackground
        tag={`section`}
        fluid={BackgroundImages}
        css={css`
          background-color: #0b132b;
          opacity: 0;
          min-height: 100vh;
        `}
      >
        <MainDiv style={{ height: "100vh" }}>
          <div
            css={css`
              position: relative;
              top: 150px;
              display: flex;
              flex-direction: column;
              align-items: center;
              @media screen and (min-width: 1440px) {
                align-items: unset;
              }
            `}
          >
            <Header
              css={css`
                font-size: 80px;
                @media screen and (min-width: 1024px) {
                  font-size: 100px;
                }
              `}
              ref={el => (heading1 = el)}
            >
              Hi, My name is Andrew.
            </Header>
            <BodyText
              css={css`
                max-width: 700px;
              `}
              ref={el => (body1 = el)}
            >
              I build interesting and innovative online experiences. Click below
              to learn more or see some of my work.
            </BodyText>
            <span>
              <Button
                css={ButtonStyling.buttonOne}
                to={`/portfolio`}
                style={{ marginLeft: "0" }}
              >
                View Portfolio
              </Button>
              <Button css={ButtonStyling.buttonTwo} to={`/about`}>
                About Me
              </Button>
            </span>
          </div>
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}
export default IndexPage
