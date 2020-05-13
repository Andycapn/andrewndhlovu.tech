import React, { useRef, useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../custom.scss"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Power3, TimelineLite } from "gsap"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

// Styled Components

export const Header = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-size: 75px;
  color: #fff;
`
export const Text = styled.p`
  letter-spacing: 0.1px;
`

const Button = styled(Link)`
  color: #63dfe4;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-family: "Josefin Sans", sans-serif;
  transition: 0.2s ease-out;
  text-decoration: none;
  &:hover {
    color: #63dfe4;
    text-decoration: none;
    background-color: #6e78ff;
  }
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
    ).from(body1, 1, { y: 10, opacity: 0, ease: Power3.easeOut }, 2.4)
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
          min-height: 100vh;
          background-color: #0b132b;
          opacity: 0;
        `}
      >
        <main
          css={css`
            margin: 62px auto;
            @media screen and (min-width: 1024px) {
              padding: 0.5rem calc((100vw - 960px) / 2);
            }
            @media screen and (min-width: 1440px) {
              padding: 0.5rem calc((100vw - 1300px) / 2);
            }
          `}
        >
          <div
            css={css`
              position: relative;
              top: 150px;
            `}
          >
            <Header ref={el => (heading1 = el)}>Hi, My name is Andrew.</Header>
            <Text
              css={css`
                color: aliceblue;
                max-width: 700px;
              `}
              ref={el => (body1 = el)}
            >
              I build interesting and innovative online experiences. Click below
              to learn more or see some of my work.
            </Text>
            <Button
              to={`/portfolio`}
              className={`bg-primary`}
              ref={el => (button2 = el)}
            >
              View Portfolio
            </Button>
            <Button
              style={{ marginLeft: "0", marginTop: "1em" }}
              ref={el => (buttons = el)}
              className={`bg-primary`}
            >
              About Me
            </Button>
          </div>
        </main>
      </ImageBackground>
    </Layout>
  )
}

export default IndexPage
