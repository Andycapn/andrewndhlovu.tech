// Gatsby supports TypeScript natively!
import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/react"
import { Header, BodyText, MainDiv } from "../components/MyStyledComonents"
import ProjectItem from "../components/projectItem"
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
  let cards = useRef([])

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

      <MainDiv
        css={css`
          min-height: 100vh;
        `}
      >
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
            margin-top: 4rem;
            @media screen and (min-width: 1024px) {
              display: flex;
              flex-direction: column;
              gap: 100px;
            }
          `}
        >
          {projectsArray().map((element, index) => (
            <ProjectItem
              key={projectsArray()[index].id}
              img={projectsArray()[index].img}
              title={projectsArray()[index].title}
              desc={projectsArray()[index].desc}
              codeLink={projectsArray()[index].githubLink}
              demoLink={projectsArray()[index].demoLink}
              disabled={projectsArray()[index].demoDisabled}
              codeDisabled={projectsArray()[index].codeDisabled}
              ref={el => (cards.current[index] = el)}
            />
          ))}
        </section>
      </MainDiv>
    </Layout>
  )
}

export default SecondPage
