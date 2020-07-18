import React from "react"
import { css } from "@emotion/core"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import CSSPlugin from "gsap"
import { Helmet } from "react-helmet"

const cssPlugin = CSSPlugin

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://s.pageclip.co/v1/pageclip.css"
          media="screen"
        />
      </Helmet>
      <Header />
      <main
        css={css`
          margin-top: 44.25px;
        `}
      >
        {children}
      </main>
      <Footer />
      <script src="https://s.pageclip.co/v1/pageclip.js" charSet="utf-8" />
    </>
  )
}
export default Layout
export { cssPlugin }
