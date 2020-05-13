import * as React from "react"
import styled from "@emotion/styled"

const FooterElement = styled.footer`
  background-color: #61f4de;
  @media screen and (min-width: 1440px) {
    padding: 0.5rem calc((100vw - 1300px) / 2);
  }
`

const Footer = () => {
  return (
    <FooterElement>
      <section></section>
      <section></section>
      <section>
        <p>&copy; Andrew Ndhlovu {new Date().getFullYear()}.</p>
      </section>
    </FooterElement>
  )
}

export default Footer
