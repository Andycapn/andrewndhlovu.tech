import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../custom.scss"
import { css } from "@emotion/core"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const Text = styled.p`
  width: 100%;
  float: left;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  transform: translateY(-50px);
  opacity: 0;
  animation-name: titleAnimation;
  animation-timing-function: ease;
  animation-duration: 3s;

  animation-delay: 0.6s;
  -webkit-animation-fill-mode: forwards;

  &:first-child {
    animation-delay: 0.7s;
  }

  &:last-child {
    color: $secondary-color;
    animation-delay: 0.5s;
  }

  @keyframes titleAnimation {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
  }
`

/*-----------------------------------------------------------------*/

const IndexPage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bg1.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 3840) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <ImageBackground
        tag="main"
        fluid={image.sharp.fluid}
        css={css`
          height: 100vh;
        `}
      >
        <section
          css={css`
            margin: 63px auto;
            @media screen and (min-width: 1024px) {
              padding: 0.5rem calc((100vw - 960px) / 2);
            }
            @media screen and (min-width: 1440px) {
              padding: 0.5rem calc((100vw - 1300px) / 2);
            }
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 35%;
            `}
          >
            <h1
              css={css`
                font-family: "Josefin Sans", sans-serif;
                font-size: 75px;

                width: 100%;
                float: left;
                -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
                clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
                transform: translateY(-50px);
                opacity: 0;
                animation-name: titleAnimation;
                animation-timing-function: ease;
                animation-duration: 3s;

                animation-delay: 0.6s;
                -webkit-animation-fill-mode: forwards;

                &:first-child {
                  animation-delay: 0.7s;
                }

                &:last-child {
                  color: $secondary-color;
                  animation-delay: 0.5s;
                }

                @keyframes titleAnimation {
                  0% {
                    transform: translateY(-50px);
                    opacity: 0;
                    -webkit-clip-path: polygon(
                      100% 0,
                      100% 100%,
                      0 100%,
                      0 80%
                    );
                    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
                  }
                  20% {
                    transform: translateY(0);
                    opacity: 1;
                    -webkit-clip-path: polygon(
                      100% 0,
                      100% 100%,
                      0 100%,
                      0 15%
                    );
                    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
                  }
                  100% {
                    transform: translateY(0);
                    opacity: 1;
                    -webkit-clip-path: polygon(
                      100% 0,
                      100% 100%,
                      0 100%,
                      0 15%
                    );
                    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
                  }
                }
              `}
            >
              Hi, My name is Andrew
            </h1>
            <Text css={css``}>
              I build interesting and innovative online experiences. Click below
              to learn more or see some of my work
            </Text>
          </div>
          <Link to="/page-2/">Go to page 2</Link>
        </section>
      </ImageBackground>
    </Layout>
  )
}

export default IndexPage
