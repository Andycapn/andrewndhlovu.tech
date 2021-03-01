import React from "react"
import { css } from "@emotion/react"
import Img from "gatsby-image"
import { BodyText, Button } from "./MyStyledComonents"
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ProjectItem = props => {
  return (
    <>
      <div
        css={css`
          width: 100%;
          margin: 100px 0;
          .column.image {
            width: 100%;
            box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.32);
            border-radius: 4px;
            .img {
              border-radius: 4px;
            }
          }
          .column.content {
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
          }

          .column.content > .btn-container {
            margin-top: auto;
          }

          .column.content > .btn-container > a:nth-child(2) {
            margin-left: 20px;
          }
          .column.content > h1 {
            font-size: 24px;
            font-family: "Josefin sans", sans-serif;
          }
          @media screen and (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 46%));
            grid-gap: 8%;
            margin: unset;
          }
        `}
      >
        <div className="column content">
          <h1>{props.title}</h1>
          <BodyText>{props.desc}</BodyText>
          <div className="btn-container">
            {props.codeDisabled ? null : (
              <Button
                href={props.codeLink}
                target="_blank"
                rel="noreferrer nofollower"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <span>
                  <FontAwesomeIcon
                    style={{ margin: "0 5px" }}
                    icon={faFileCode}
                  />{" "}
                  View Code
                </span>
              </Button>
            )}
            {props.disabled ? null : (
              <Button
                href={props.demoLink}
                rel="noreferrer nofollower"
                target="_blank"
                style={{ backgroundColor: "black", color: "white" }}
              >
                <span>
                  <FontAwesomeIcon
                    style={{ margin: "0 5px" }}
                    icon={faDesktop}
                  />{" "}
                  View Live
                </span>
              </Button>
            )}
          </div>
        </div>
        <div className="column image">
          <Img className="img" fluid={props.img.childImageSharp.fluid} />
        </div>
      </div>
    </>
  )
}

export default ProjectItem
