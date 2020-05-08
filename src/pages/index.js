import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../custom.scss"
import { css } from "@emotion/core"

/*************************************************/

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      css={css`
        font-family: "Josefin Sans", sans-serif;
      `}
    >
      Hi, I'm Andrew{" "}
      <span role="img" aria-labelledby="Andrew">
        👋
      </span>
    </h1>
    <p>We</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
