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
    `linear-gradient(187deg, rgba(104,182,239,1) 0%, rgba(108,141,250,0.2987570028011205) 67%, rgba(97,244,222,1) 100%)`,
  ].reverse()

  return (
    <Layout>
      <ImageBackground
        tag={`main`}
        fluid={BackgroundImages}
        css={css`
          min-height: 100vh;
        `}
      >
        <MainDiv>
          <section>
            <Header>About Me</Header>
            <BodyText>I am a</BodyText>
          </section>
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}

export default About
