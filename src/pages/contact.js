// @flow
import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import {
  ImageBackground,
  MainDiv,
  Header,
} from "../components/MyStyledComonents"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import { Form, Button } from "react-bootstrap"

const Contact = () => {
  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "contact.jpg" }) {
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
              maxWidth: "1440px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Header
              css={css`
                margin-top: 2rem;
              `}
            >
              Contact Me
            </Header>
            <Form
              css={css`
                padding: 2rem;
                border-radius: 5px;
              `}
              action="https://send.pageclip.co/z2YIouuUsGQMSNfigkiq9BBEZvMg44dj/Contact-me"
              className="pageclip-form"
              method="POST"
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="Email"
                />
              </Form.Group>
              <span
                css={css`
                  @media screen and (min-width: 768px) {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                  }
                `}
                className=""
              >
                <Form.Group
                  controlId=""
                  style={{ width: "100%", paddingRight: "5px" }}
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="First Name"
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
                    name="Last Name"
                    placeholder="Last Name"
                  />
                </Form.Group>
              </span>
              <Form.Group controlId="">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="phone" name="phone" placeholder="+260" />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="Message"
                  as="textarea"
                  rows="10"
                  placeholder="Your Message"
                />
              </Form.Group>
              <Button
                type="submit"
                variant="success"
                className="pageclip-form__submit"
              >
                <span>Submit</span>
              </Button>
            </Form>
          </section>
        </MainDiv>
      </ImageBackground>
    </Layout>
  )
}

export default Contact
