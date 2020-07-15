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
import styled from "@emotion/styled"
import { Form, Button } from "react-bootstrap"
import { useState } from "react"

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

  const BackgroundImages = [
    background.childImageSharp.fluid,
    `linear-gradient(187deg, rgba(104,182,239,1) 0%, rgba(108,141,250,0.6) 67%, rgba(97,244,222,1) 100%)`,
  ].reverse()

  // Initializing State for Contact Form
  const [formState, setFormState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  })

  // URI Encode data
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  //On Change Handler for Form State
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  //Submit Handler for the form
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("We've got your Message!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

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
                @media screen and (min-width: 768px) {
                  /* Top Margin for Medium Sized Laptops */
                  margin-top: 2rem;
                }
                @media screen and (min-width: 1440px) {
                  /* Remove Top Margin on Large Displays */
                  margin-top: unset;
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
<<<<<<< HEAD
              action="https://send.pageclip.co/z2YIouuUsGQMSNfigkiq9BBEZvMg44dj/Contact-me"
              className="pageclip-form"
              method="POST"
=======
              name="andrewndhlovu.tech"
              onSubmit={handleSubmit}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
>>>>>>> ac1c0f40ee73b26812d0249366b93f89449aa6c0
            >
              <input
                type="hidden"
                name="form-name"
                value="andrewndhlovu.tech"
              />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
<<<<<<< HEAD
=======
                  onChange={handleChange}
>>>>>>> ac1c0f40ee73b26812d0249366b93f89449aa6c0
                  type="email"
                  placeholder="name@example.com"
                  name="email"
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
                    name="first-name"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  controlId=""
                  style={{ width: "100%", paddingLeft: "5px" }}
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </Form.Group>
              </span>
              <Form.Group controlId="">
                <Form.Label>Contact Number</Form.Label>
<<<<<<< HEAD
                <Form.Control type="phone" name="phone" placeholder="+260" />
=======
                <Form.Control
                  type="phone"
                  name="phone"
                  placeholder="+260"
                  onChange={handleChange}
                />
>>>>>>> ac1c0f40ee73b26812d0249366b93f89449aa6c0
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="10"
                  placeholder="Your Message"
                  onChange={handleChange}
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
