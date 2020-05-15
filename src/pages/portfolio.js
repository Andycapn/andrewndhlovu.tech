// Gatsby supports TypeScript natively!
import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

import {
  Header,
  ImageBackground,
  MainDiv,
} from "../components/MyStyledComonents"

import { TimelineLite, Power4 } from "gsap"
import ProjectCard from "../components/projectCard"
import { projectsArray } from "../components/projectData"

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
  }, [tl])

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
        <MainDiv>
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
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}

export default SecondPage
