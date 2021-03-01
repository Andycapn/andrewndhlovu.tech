import React from "react"
import { css } from "@emotion/react"
import Icons from "./icons"
import { ExternalLink, FooterText, FooterTag } from "./MyStyledComonents"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <FooterTag
      css={css`
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <ul
        css={css`
          grid-row: 1/2;
          list-style: none;
          margin: auto;
          @media screen and (min-width: 768px) {
            display: flex;
          }
        `}
      >
        <li style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon size="2x" icon={faGithub} color="white" />
          <ExternalLink href="https://github.com/andycapn" target="_blank">
            GitHub
          </ExternalLink>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon size="2x" icon={faLinkedin} color="white" />
          <ExternalLink
            href="https://www.linkedin.com/in/andrew-ndhlovu"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </ExternalLink>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon size="2x" icon={faEnvelope} color="white" />
          <ExternalLink
            href="mailto:andrew@andrewndhlovu.tech"
            target="_blank"
            rel="noreferrer"
          >
            andrew@andrewndhlovu.tech
          </ExternalLink>
        </li>
      </ul>
      <section
        css={css`
          grid-row: 2/3;
          display: flex;
          list-style: none;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <FooterText>
          Copyright &copy; {new Date().getFullYear()} Andrew Ndhlovu &bull;
          Lusaka Based Software Dev
        </FooterText>
      </section>
    </FooterTag>
  )
}

export default Footer
