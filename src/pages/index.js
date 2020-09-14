import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../custom.scss"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Power3, TimelineLite } from "gsap"
import Illustration from "../images/hello.svg"
import {
  BodyText,
  Header,
  Button,
  MainDiv,
} from "../components/MyStyledComonents"
import Particles from 'react-particles-js';




const ButtonStyling = {
  buttonOne: css`
    background-color: #32416d;
    border: 1px solid #32416d;
    &:hover {
      background-color: #405390;
      border: 1px solid #405390;
    }
  `,

  buttonTwo: css`
    border: 1px solid #eee;
    &:hover {
      background-color: #eee;
      color: #32416d;
    }
  `,
}

const MainLayoutStyling = styled(MainDiv)`
  display: grid;
  grid-gap: 45px;
  place-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 720px));
  
`

const IndexPage = () => {
  let heading1 = useRef(null)
  let body1 = useRef(null)
  let tl = new TimelineLite()

  // GSAP Animations

  useEffect(() => {
    //Heading Animation
    tl.from(
      heading1,
      1,
      {
        y: 10,
        opacity: 0,
        ease: Power3.easeOut,
      },
      1.4
    )
      .from(body1, 1, { y: 10, opacity: 0, ease: Power3.easeOut }, 2.4)
      .paused()
  }, [tl])




  return (
    <Layout>
      <SEO
        title="Home"
        description="Experienced Web and Software Developer based in Lusaka Zambia"
      />
      <Particles
          height={"105vh"}
          params={{
        background: {
          color: {
            value: "#0b2145",
          },
        },
        particles: {
          shape: {
            type: "circle",

          }
        },
        interactivity: {
          enabled: true,
          detectsOn: "canvas",
          modes: {
            repulse: true
          }
        }
      }} style={{position: "absolute", top: "0", left: "0", zIndex: "+1"}}/>
      <MainLayoutStyling
        style={{ height: "100vh", background: "none"}}
      >

        <div
          css={css`
            position: relative;
            top: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: +2;
        
            @media screen and (min-width: 1440px) {
              align-items: unset;
            }
          `}
        >
          <Header
            css={css`
              @media screen and (max-width: 2560px) {
                font-size: 110px;
              }
              @media screen and (max-width: 1024px) {
                font-size: 80px;
              }
            `}
            ref={el => (heading1 = el)}
          >
            Hi, My name is Andrew.
          </Header>
          <BodyText
            css={css`
              max-width: 700px;
              @media screen and (max-width: 1366px) {
                text-align: center;
              }
            `}
            ref={el => (body1 = el)}
            className="typing"
          >
            I build interesting and innovative online experiences. Click below
            to learn more or see some of my work.
          </BodyText>
          <span>
            <Button
              css={ButtonStyling.buttonOne}
              to={`/portfolio`}
              style={{ marginLeft: "0" }}
            >
              View Portfolio
            </Button>
            <Button css={ButtonStyling.buttonTwo} to={`/about`}>
              About Me
            </Button>
          </span>
        </div>
        <div style={{zIndex: "+3"}}>
          <img src={Illustration} alt=""/>
        </div>
      </MainLayoutStyling>

    </Layout>
  )
}
export default IndexPage
