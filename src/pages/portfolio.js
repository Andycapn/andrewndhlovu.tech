import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/react"
import { Header, BodyText, MainDiv } from "../components/MyStyledComonents"
import ProjectItem from "../components/projectItem"
import { projectsArray } from "../components/projectData"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="My Projects" />

      <MainDiv
        css={css`
          min-height: 100vh;

          .heading {
            text-align: center;
            margin-top: 2rem;
            @media screen and (min-width: 1024px) {
              text-align: left;
            }
          }
          .email-text {
            @media screen and (max-width: 1024px) {
              text-align: center;
            }
          }
          .email-link {
            color: #4cdcc1;
            transition: 200ms ease-in;
            &:hover {
              color: #42bda9;
            }
          }
        `}
      >
        <Header className="heading">My Projects</Header>
        <BodyText className="email-text">
          Here are a few projects I've worked on recently. Want to see more?{" "}
          <a className="email-link" href="mailto:andrewndhlovu55@gmail.com">
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
            />
          ))}
        </section>
      </MainDiv>
    </Layout>
  )
}

export default Portfolio
