import React from "react"
import { css } from "@emotion/core"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import CSSPlugin from "gsap"

const cssPlugin = CSSPlugin

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        css={css`
          margin-top: 7vh;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout
