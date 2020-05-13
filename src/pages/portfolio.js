// Gatsby supports TypeScript natively!
import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Header } from "./index"
import { TimelineLite, Power3, Power4 } from "gsap"
import ProjectCard from "../components/projectCard"
import { projectsArray } from "../components/projectData"
import { Text } from "./index"
import { Alert, Jumbotron } from "react-bootstrap"

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y;
`

const SecondPage = () => {
  let title = useRef(null)
  let app = useRef(null)
  const tl = new TimelineLite()

  useEffect(() => {
    tl.to(app, 0, { opacity: 1 }, 1).from(title, 1, {
      y: -60,
      opacity: 0,
      ease: Power4.easeOut,
    })
  }, [])

  //Image Queries.
  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "portfolio-bg.jpeg" }) {
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
    `linear-gradient(176deg, rgba(104,182,239,1) 0%, rgba(108,141,250,0.3) 57%, rgba(97,244,222,1) 100%)`,
  ].reverse()

  return (
    <Layout>
      <SEO title="My Projects" />
      <ImageBackground
        fluid={BackgroundImages}
        tag={`section`}
        ref={el => (app = el)}
        css={css`
          min-height: 100vh;
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
              padding: 4rem calc((100vw - 1300px) / 2);
            }
          `}
        >
          <Header ref={el => (title = el)}>My Projects</Header>
          <section
            className="projects"
            css={css`
              @media screen and (min-width: 1440px) {
                display: flex;
                flex-direction: row;
              }
            `}
          >
            {projectsArray.map((element, index) => (
              <ProjectCard
                key={projectsArray[index].id}
                img={projectsArray[index].img}
                title={projectsArray[index].title}
                desc={projectsArray[index].desc}
                codeLink={projectsArray[index].githubLink}
                demoLink={projectsArray[index].demoLink}
                disabled={projectsArray[index].disabled}
              />
            ))}
          </section>
        </main>
      </ImageBackground>
    </Layout>
  )
}

export default SecondPage
