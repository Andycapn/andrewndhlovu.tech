// @flow
import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import {
  ImageBackground,
  MainDiv,
  Header,
  BodyText,
  ListItem,
} from "../components/MyStyledComonents"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { Jumbotron } from "react-bootstrap"

const AboutText = styled(BodyText)`
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

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
            <AboutText>
              I'm a Software & full-stack web developer and UI/UX javascript
              specialist based in Lusaka, Zambia. With experience working with
              enterprise grade networking software and hardware.
            </AboutText>
            <AboutText>
              I don’t like to define myself by the work I’ve done. I define
              myself by the work I want to do. Skills can be taught, personality
              is inherent. I prefer to keep learning, continue challenging
              myself, and do interesting things that matter.
            </AboutText>
            <AboutText>
              My abundant energy fuels my pursuit of many interests, areas of
              study and artistic endeavors. I’m a fast learner, able to pick up
              new skills and juggle different projects and roles with relative
              ease. I like to develop expertise in a number of areas over the
              course of my life and career.
            </AboutText>
          </section>
          <section>
            <Jumbotron
              css={css`
                box-shadow: 0px 0px 118px -29px rgba(0, 0, 0, 0.75);
                @media screen and (min-width: 768px) {
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr 1fr;
                }
              `}
            >
              <h3
                style={{
                  fontFamily: "'Josefin Sans', sans serif",
                  textAlign: "center",
                  gridColumn: "1/5",
                }}
              >
                Technologies I use.
              </h3>
              <section style={{ gridColumn: "1/2" }}>
                <h6 style={{ fontFamily: "'Rubik', sans serif" }}>
                  Programming languages
                </h6>
                <ul>
                  <ListItem>JavaScript/TypeScript</ListItem>
                  <ListItem>C#</ListItem>
                  <ListItem>Java</ListItem>
                  <ListItem>Python</ListItem>
                </ul>
              </section>
              <section style={{ gridColumn: "2/3" }}>
                <h6 style={{ fontFamily: "'Rubik', sans serif" }}>
                  Frameworks/Libraries
                </h6>
                <ul>
                  <ListItem>ReactJS</ListItem>
                  <ListItem>NodeJS, ExpressJS</ListItem>
                  <ListItem>GatsbyJS</ListItem>
                </ul>
              </section>
              <section style={{ gridColumn: "3/4" }}>
                <h6 style={{ fontFamily: "'Rubik', sans serif" }}>
                  Technologies/Misc
                </h6>
                <ul>
                  <ListItem>MongoDB</ListItem>
                  <ListItem>SQL, MySQL</ListItem>
                  <ListItem>Version Control (git)</ListItem>
                </ul>
              </section>
            </Jumbotron>
          </section>
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}

export default About
