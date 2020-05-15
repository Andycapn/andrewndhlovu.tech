import React, { useRef, useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
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

const IndexPage = () => {
  let heading1 = useRef(null)
  let body1 = useRef(null)
  let tl = new TimelineLite()
  let buttons = useRef(null)
  let button2 = useRef(null)

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
      image: file(relativePath: { eq: "home-bg.jpeg" }) {
        sharp: childImageSharp {
          fluid(quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const BackgroundImages = [
    image.sharp.fluid,
    `linear-gradient(176deg, rgba(108,141,250,1) 0%, rgba(104,182,239,0.2987570028011205) 58%, rgba(97,244,222,1) 100%)`,
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
              @media screen and (min-width: 1024px) {
                align-items: unset;
              }
            `}
          >
            <Header ref={el => (heading1 = el)}>Hi, My name is Andrew.</Header>
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
                to={`/portfolio`}
                className={`bg-primary`}
                ref={el => (button2 = el)}
                style={{ marginLeft: "0" }}
              >
                View Portfolio
              </Button>
              <Button
                to={`/about`}
                ref={el => (buttons = el)}
                className={`bg-primary`}
              >
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
