import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Icons from "./icons"
import { ExternalLink, FooterText, FooterTag } from "./MyStyledComonents"

const Footer = () => {
  return (
    <FooterTag>
      <section
        css={css`
          grid-row: 1/2;
          display: flex;
          list-style: none;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <FooterText>
          &copy; Andrew Ndhlovu {new Date().getFullYear()}
        </FooterText>
      </section>
      <ul
        css={css`
          grid-row: 2/3;
          display: flex;
          list-style: none;
          margin: auto;
        `}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={Icons.githubIcon}
            alt=""
          />
          <ExternalLink href="https://github.com/andycapn" target="_blank">
            GitHub
          </ExternalLink>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={Icons.linkedInIcon}
            alt=""
          />
          <ExternalLink href="#">LinkedIn</ExternalLink>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "25px", height: "25px", marginBottom: "0" }}
            src={Icons.mailIcon}
            alt=""
          />
          <ExternalLink href="#">andrew@andrewndhlovu.tech</ExternalLink>
        </li>
      </ul>
    </FooterTag>
  )
}

export default Footer
