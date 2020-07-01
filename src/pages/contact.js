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
import { css } from "@emotion/core"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import { Jumbotron, Form, Button } from "react-bootstrap"

const AboutText = styled(BodyText)`
  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

const Contact = () => {
  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "about-bg.jpeg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const BackgroundImages = [
    background.childImageSharp.fluid,
    `linear-gradient(187deg, rgba(104,182,239,1) 0%, rgba(108,141,250,0.6) 67%, rgba(97,244,222,1) 100%)`,
  ].reverse()

  return (
    <Layout>
      <SEO title="About Me" />
      <ImageBackground
        tag={`main`}
        fluid={BackgroundImages}
        css={css`
          min-height: 100vh;
        `}
      >
        <MainDiv>
          <section
            style={{
              maxWidth: "1000px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Header
              css={css`
                text-align: center;
                @media screen and (min-width: 768px) {
                  /* Top Margin for Medium Sized Laptops */
                  margin-top: 2rem;
                  text-align: center;
                }
                @media screen and (min-width: 1440px) {
                  /* Remove Top Margin on Large Displays */
                  margin-top: unset;
                  text-align: center;
                }
              `}
            >
              Contact Me
            </Header>
            <Form
              css={css`
                padding: 2rem;
                border-radius: 5px;
              `}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <span
                css={css`
                  @media screen and (min-width: 768px) {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                  }
                `}
              >
                <Form.Group
                  controlId=""
                  style={{ width: "100%", paddingRight: "5px" }}
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group
                  controlId=""
                  style={{ width: "100%", paddingLeft: "5px" }}
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </Form.Group>
              </span>
              <Form.Group controlId="">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="phone"
                  name="firstName"
                  placeholder="+260"
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="10"
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Form>
          </section>
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}

export default Contact
