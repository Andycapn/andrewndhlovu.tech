import React, { useRef, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../custom.scss"
import { css } from "@emotion/react"
import { Power3, TimelineLite } from "gsap"
import {
  BodyText,
  Header,
  Button,
  MainDiv,
} from "../components/MyStyledComonents"
import Img from "gatsby-image"
import Image from "../components/image"

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
      <MainDiv
        css={css`
          display: grid;
          min-height: 100vh;
          .banner-image {
            min-width: 325px;
            margin-bottom: 40px;
          }
          .header {
            font-size: 74px;
          }
          .body-text {
            text-align: center;
          }
          .btn-container {
            display: flex;
            justify-content: center;
            margin: 20px 0;
          }
          .btn-container > a:nth-child(2) {
            margin-left: 20px;
          }

          @media screen and (min-width: 768px) {
            grid-template-columns: repeat(auto-fill, minmax(48%, 49%));
            place-items: center;
            grid-column-gap: 10px;
            .banner-image {
              min-width: 520px;
            }
            .btn-container {
              justify-content: unset;
            }
            .body-text {
              text-align: unset;
            }
          }
        `}
      >
        <div className="column">
          <Img
            fluid={Image().bannerImage.childImageSharp.fluid}
            className="banner-image"
          />
        </div>
        <div className="column">
          <Header className={"header"} ref={el => (heading1 = el)}>
            Hey, My Name is Andrew.
          </Header>
          <BodyText className="body-text" ref={el => (body1 = el)}>
            I build interesting and innovative online experiences. Click below
            to learn more or see some of my work.
            <div className="btn-container">
              <Button href="#" style={{ backgroundColor: "black" }}>
                View My Portfolio
              </Button>
              <Button
                href="#"
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <span>Learn More</span>
              </Button>
            </div>
          </BodyText>
        </div>
      </MainDiv>
    </Layout>
  )
}
export default IndexPage
