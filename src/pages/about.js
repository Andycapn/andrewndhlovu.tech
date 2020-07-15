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
    font-size: 20px;
  }
`

const About = () => {
  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "about-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // Overlay Background Image with Gradient
  const BackgroundImages = [
    background.childImageSharp.fluid,
    `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.7) 100%)`,
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
            css={css`
              max-width: 1400px;
              margin-left: auto;
              margin-right: auto;

              /* Setting A Right Padding on Larger Displays. */
            `}
          >
            <Header
              css={css`
                @media screen and (min-width: 768px) {
                  margin-top: 2rem;
                }
                @media screen and (min-width: 1440px) {
                  margin-top: unset;
                }
              `}
            >
              About Me
            </Header>
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
                padding-left: 5.5%;
                margin-top: 2rem;
                box-shadow: 0px 0px 118px -29px rgba(0, 0, 0, 0.75);
                @media screen and (min-width: 1024px) {
                  display: grid;
                  grid-template-columns: 1fr 1fr 1fr 1fr;
                  margin-top: 3rem;
                }
              `}
            >
              <h3
                css={css`
                  font-family: "Josefin Sans", sans serif;
                  text-align: center;
                  grid-column: 1/5;
                  margin-bottom: 1.5rem;
                  @media screen and (min-width: 768px) {
                    margin-bottom: 2rem;
                  }
                `}
              >
                Toolkit.
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
                  <ListItem>Php</ListItem>
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
                  Technologies
                </h6>
                <ul>
                  <ListItem>MongoDB</ListItem>
                  <ListItem>SQL, MySQL</ListItem>
                  <ListItem>Version Control (git)</ListItem>
                  <ListItem>WordPress</ListItem>
                </ul>
              </section>
              <section style={{ gridColumn: "4/5" }}>
                <h6 style={{ fontFamily: "'Rubik', sans serif" }}>
                  Technical/Professional
                </h6>
                <ul>
                  <ListItem>Linux System/Server Administration</ListItem>
                  <ListItem>
                    Network Design, Implementation & Maintenance
                  </ListItem>
                  <ListItem>MikroTik Router Administration</ListItem>
                </ul>
              </section>
            </Jumbotron>
            <a
              href="https://storage.cloud.google.com/files.andrewndhlovu.tech/Andrew%20Ndhlovu%20CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download My C.V.
            </a>
          </section>
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}

export default About
