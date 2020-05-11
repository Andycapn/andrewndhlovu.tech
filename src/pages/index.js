import React, { useRef, useEffect } from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../custom.scss"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import {TweenLite, Power3, TimelineLite} from "gsap"

const Header = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 75px;
  color: #FFF;
`
const Text = styled.p``
const Button = styled(Link)`
  background-color: #fff;
  color: black;
  margin: .5rem;
  padding: .5rem 1rem;

`


const IndexPage = () => {

  let heading1 = useRef(null);
  let body1 = useRef(null)
  let tl = new TimelineLite();

  useEffect(() => {
    tl.from(heading1, 1, { y: 10, opacity: 0, ease: Power3.easeOut, delay: 1})
    tl.from(body1, 1, {y: 10, opacity: 0, ease: Power3.easeOut, delay: .2})
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <main css={css`min-height: 100vh; background-color: #0b132b;`}>
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
              position: relative;
              top: 200px;
            `}
          >
            <Header ref={el => heading1 = el}>
              Hi, My name is Andrew.
            </Header>
            <Text css={css`color: aliceblue; max-width: 700px`} ref={el => body1 = el}>
              I build interesting and innovative online experiences. Click below
              to learn more or see some of my work
            </Text>
            <Button>About Me</Button>
            <Button>View Portfolio</Button>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
