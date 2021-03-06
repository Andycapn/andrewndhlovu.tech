import styled from "@emotion/styled"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// Background Image Element //

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

// Page Elements //

const MainDiv = styled.main`
  /* Sets Responsive Margin for Main Page Container */
  padding: 5vh calc((100vw - 345px) / 2) 0.5rem;
  @media screen and (min-width: 425px) {
    padding: 0.7rem calc((100vw - 400px) / 2);
  }
  @media screen and (min-width: 600px) {
    padding: 0.5rem calc((100vw - 580px) / 2);
  }
  @media screen and (min-width: 768px) {
    padding: 0.5rem calc((100vw - 750px) / 2);
  }
  @media screen and (min-width: 1024px) {
    padding: 0.5rem calc((100vw - 960px) / 2);
  }
  @media screen and (min-width: 1366px) {
    padding: 2.2rem calc((100vw - 1280px) / 2);
  }
  @media screen and (min-width: 1440px) {
    padding: 2rem calc((100vw - 1300px) / 2);
  }
`

const BodyText = styled.p`
  letter-spacing: 0.1px;
  color: black;
  font-family: "Open Sans", sans-serif;
  @media screen and (min-width: 1024px) {
    text-align: unset;
  }
`

// Custom H1 Tag //
const Header = styled.h1`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  color: black;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    text-align: unset;
  }
`

const Heading = styled.h1`
  margin: 2rem 0 4rem 0;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  color: black;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    text-align: unset;
  }
`

// Custom List Tag //
const ListItem = styled.li`
  font-size: 14px;
`

// BUTTON //
const Button = styled(Link)`
  color: white;
  padding: 0.5em 1rem;
  border-radius: 2px;
  font-family: "Rubik", sans-serif;
  transition: 0.2s ease-out;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`

// EXTERNAL LINK //
const ExternalLink = styled.a`
  color: black;
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
    color: #b1b1b1;
    transform: scale(1.1);
    text-decoration: none;
  }
`

// Footer Elements //
const FooterText = styled.p`
  color: black;
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

// Pre-Styled HTML Footer Tag //
const FooterTag = styled.footer`
  background-color: #f5f5f7;
  padding: 2rem calc((100vw - 1366px) / 2);
  @media only screen and (min-width: 800px) {
    padding: 2rem calc((100vw - 1366px) / 2);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (min-width: 998px) {
    padding: 1rem calc((100vw - 900px) / 2);
  }

  @media (min-width: 1400px) {
    padding: 2.5rem calc((100vw - 1366px) / 2);
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
  Heading,
}
