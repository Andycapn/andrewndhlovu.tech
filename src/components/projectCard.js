import React from "react"
import { Card } from "react-bootstrap"
import { css } from "@emotion/core"
import { AnchorButton } from "@blueprintjs/core"
import styled from "@emotion/styled"

const MyButton = styled(AnchorButton)`
  font-family: "Josefin Sans", sans-serif;
`

const Text = styled.p`
  font-family: "Rubik", sans-serif;
  line-height: 1.4;
  font-size: 16px;
`

const ProjectCard = props => {
  return (
    <>
      <Card
        css={css`
          width: 21.5em;
          margin: 1.5em 0 1.5em 0;
          box-shadow: 0px 0px 118px -29px rgba(0, 0, 0, 0.75);
          @media screen and (min-width: 768px) {
            margin: 1em;
          }
        `}
      >
        <img className="card-img" src={props.img} alt="" />
        <Card.Body>
          <Card.Title
            css={css`
              font-family: "Josefin Sans", sans-serif;
            `}
          >
            {props.title}
          </Card.Title>
          <Text className="card-text">{props.desc}</Text>
          <MyButton
            href={props.codeLink}
            minimal
            outlined
            intent="primary"
            icon={`code`}
            target="_blank"
          >
            View Code
          </MyButton>{" "}
          <MyButton
            href={props.demoLink}
            minimal
            outlined
            intent="primary"
            icon={`application`}
            target="_blank"
            disabled={props.disabled}
          >
            Demo
          </MyButton>
        </Card.Body>
      </Card>
    </>
  )
}

export default ProjectCard
