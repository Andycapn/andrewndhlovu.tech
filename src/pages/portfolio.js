// Gatsby supports TypeScript natively!
import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

import {
  Header,
  BodyText,
  ImageBackground,
  MainDiv,
} from "../components/MyStyledComonents"

import { TimelineLite, Power3 } from "gsap"
import ProjectCard from "../components/projectCard"
import { projectsArray } from "../components/projectData"

const EmailLinkStyling = css`
  color: #4cdcc1;
  transition: 200ms ease-in;
  &:hover {
    color: #42bda9;
  }
`

const EmailTextStyling = css`
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

const SecondPage = () => {
  let title = useRef(null)
  let subtitle = useRef(null)
  let app = useRef(null)
  const tl = new TimelineLite()
  let cards = useRef([])
  useEffect(() => {
    tl.to(app, 0, { opacity: 1 }, 1)
      .from(title, 1, {
        y: 25,
        opacity: 0,
        ease: Power3.easeOut,
      })
      .from(subtitle, 1, { y: 25, opacity: 0, ease: Power3.easeOut }, 1.5)
  }, [tl])

  //Image Queries.
  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "portfolio-bg.jpg" }) {
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
          <Header
            css={css`
              text-align: center;
              margin-top: 2rem;
              @media screen and (min-width: 1024px) {
                text-align: left;
              }
            `}
            ref={el => (title = el)}
          >
            My Projects
          </Header>
          <BodyText css={EmailTextStyling} ref={el => (subtitle = el)}>
            Here are a few projects I've worked on recently. Want to see more?{" "}
            <a css={EmailLinkStyling} href="mailto:andrewndhlovu55@gmail.com">
              Email me.
            </a>
          </BodyText>
          <section
            className="projects"
            css={css`
              @media screen and (min-width: 1024px) {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
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
                disabled={projectsArray[index].demoDisabled}
                codeDisabled={projectsArray[index].codeDisabled}
                ref={el => (cards.current[index] = el)}
              />
            ))}
          </section>
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}

export default SecondPage
