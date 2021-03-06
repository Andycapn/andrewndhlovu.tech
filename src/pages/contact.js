// @flow
import React from "react"
import Layout from "../components/layout"
import { MainDiv, Heading, BodyText } from "../components/MyStyledComonents"
import { css } from "@emotion/react"
import SEO from "../components/seo"
import { Form, Button } from "react-bootstrap"

const Contact = () => {
  return (
    <Layout>
      <SEO title="About Me" />

      <MainDiv
        css={css`
          min-height: 100vh;
          form {
            padding: 2rem;
            border-radius: 5px;
            box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.32);
          }
        `}
      >
        <Heading>
          Contact Me
          <BodyText style={{ fontSize: "1rem", marginTop: "0.5rem" }}>
            Would you like to discuss your latest and greatest project? or just
            want to learn more? Feel free to reach out!
          </BodyText>
        </Heading>
        <Form
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
            <Form.Control
              type="phone"
              name="phone"
              placeholder="Phone Number"
            />
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
      </MainDiv>
    </Layout>
  )
}

export default Contact
