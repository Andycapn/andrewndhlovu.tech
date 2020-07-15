import styled from "@emotion/styled"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/core"

// Background Image Element

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

// Page Elements

const MainDiv = styled.main`
  padding: 5vh calc((100vw - 345px) / 2) 0.5rem;
  @media screen and (min-width: 425px) {
    padding: 0.5rem calc((100vw - 400px) / 2);
  }
  @media screen and (min-width: 768px) {
    padding: 0.5rem calc((100vw - 750px) / 2);
  }
  @media screen and (min-width: 1024px) {
    padding: 0.5rem calc((100vw - 960px) / 2);
  }
  @media screen and (min-width: 1440px) {
    padding: 4rem calc((100vw - 1300px) / 2);
  }
`

const BodyText = styled.p`
  letter-spacing: 0.1px;
  color: #fff;
  text-align: center;
  @media screen and (min-width: 1440px) {
    text-align: unset;
  }
`

const Header = styled.h1`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  @media screen and (min-width: 1440px) {
    font-size: 75px;
    text-align: unset;
  }
`

const ListItem = styled.li`
  font-size: 14px;
`

// BUTTON //

const Button = styled(Link)`
  color: white;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-family: "Josefin Sans", sans-serif;
  transition: 0.2s ease-out;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`

// EXTERNAL LINK //
const ExternalLink = styled.a`
  color: #4f4f4f;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 0.5;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  @media (min-width: 998px) {
    font-size: 12px;
    line-height: 1;
  }

  @media (min-width: 1400px) {
    font-size: 14px;
  }
  &:hover {
    color: #7a7a7a;
    transform: scale(1.1);
    text-decoration: none;
  }
`

// Footer Elements
const FooterText = styled.p`
  color: #4f4f4f;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.4;
  margin: 0 0.5rem 0 0;
  padding: 0.7rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: unset;
  }
  @media (min-width: 998px) {
    font-size: 12px;
    line-height: 1;
  }

  @media (min-width: 1400px) {
    font-size: 14px;
  }
`

// Pre-Styled HTML Footer Tag
const FooterTag = styled.footer`
  background-color: #61f4de;
  padding: 2rem calc((100vw - 1366px) / 2);

  @media only screen and (min-width: 800px) {
    padding: 2rem calc((100vw - 1366px) / 2);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 998px) {
    padding: 0.5rem calc((100vw - 900px) / 2);
  }

  @media (min-width: 1400px) {
    padding: 0.5rem calc((100vw - 1366px) / 2);
  }
`
export {
  BodyText,
  Header,
  Button,
  ExternalLink,
  FooterText,
  FooterTag,
  ImageBackground,
  MainDiv,
  ListItem,
}
