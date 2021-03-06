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
import { css } from "@emotion/react"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { Jumbotron } from "react-bootstrap"

const AboutText = styled(BodyText)`
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

const DownloadLinkStyling = css`
  color: #405390;
  transition: 200ms ease-in;
  &:hover {
    color: #6c8dfa;
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

      <MainDiv
        css={css`
          min-height: 100vh;
          @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 47%));
            grid-column-gap: 6%;
          }
          .column h1 {
            margin: 2rem 0 4rem 0;
          }
        `}
      >
        <section className="column">
          <Header>About Me</Header>
          <AboutText>
            I'm a Software & full-stack web developer and UI/UX javascript
            specialist based in Lusaka, Zambia. With experience working with
            enterprise grade networking software and hardware.
          </AboutText>
          <AboutText>
            I don’t like to define myself by the work I’ve done. I define myself
            by the work I want to do. Skills can be taught, personality is
            inherent. I prefer to keep learning, continue challenging myself,
            and do interesting things that matter.
          </AboutText>
          <AboutText>
            My abundant energy fuels my pursuit of many interests, areas of
            study and artistic endeavors. I’m a fast learner, able to pick up
            new skills and juggle different projects and roles with relative
            ease. I like to develop expertise in a number of areas over the
            course of my life and career.
          </AboutText>
        </section>
        <section className="column">
          <Jumbotron
            css={css`
              padding-left: 5.5%;
              margin-top: 2rem;
              box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.32);
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
            css={DownloadLinkStyling}
          >
            Download My C.V.
          </a>
        </section>
      </MainDiv>
    </Layout>
  )
}

export default About
