import React from "react"
import PropTypes from "prop-types"
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
      <>
        <main>{children}</main>
      </>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
