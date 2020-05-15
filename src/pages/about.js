// @flow
import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import {
  ImageBackground,
  MainDiv,
  Header,
  BodyText,
} from "../components/MyStyledComonents"
import { css } from "@emotion/core"
import SEO from "../components/seo"

const About = () => {
  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "about-bg.jpeg" }) {
        childImageSharp {
          fluid(quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const BackgroundImages = [
    background.childImageSharp.fluid,
    `linear-gradient(187deg, rgba(104,182,239,1) 0%, rgba(108,141,250,0.6) 67%, rgba(97,244,222,1) 100%)`,
  ].reverse()

  return (
    <Layout>
      <SEO title="About Me" />
      <ImageBackground
        tag={`main`}
        fluid={BackgroundImages}
        css={css`
          min-height: 100vh;
        `}
      >
        <MainDiv>
          <section
            style={{
              maxWidth: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Header style={{ textAlign: "center" }}>About Me</Header>
            <BodyText style={{ fontSize: "25px" }}>
              I'm a Software & full-stack web developer and UI/UX javascript
              specialist based in Lusaka, Zambia. With experience working with
              enterprise grade networking software and hardware.
            </BodyText>
            <BodyText style={{ fontSize: "25px" }}>
              I don’t like to define myself by the work I’ve done. I define
              myself by the work I want to do. Skills can be taught, personality
              is inherent. I prefer to keep learning, continue challenging
              myself, and do interesting things that matter.
            </BodyText>
            <BodyText style={{ fontSize: "25px" }}>
              My abundant energy fuels me in the pursuit of many interests,
              areas of study and artistic endeavors. I’m a fast learner, able to
              pick up new skills and juggle different projects and roles with
              relative ease. I like to develop expertise in a number of areas
              over the course of my life and career.
            </BodyText>
          </section>
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}

export default About
