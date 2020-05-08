import { Link } from "gatsby"
import React from "react"
import "@blueprintjs/core/lib/css/blueprint.css"
import { Navbar, Nav } from "react-bootstrap"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const NavLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-size: small;

  &active-style {
    color: black;
  }
`

const Header = ({ siteTitle }) => (
  <Navbar
    bg="primary"
    expand="lg"
    fixed="top"
    css={css`
      background-color: red;
      @media screen and (min-width: 1024px) {
        padding: 0.5rem calc((100vw - 960px) / 2);
      }
    `}
    variant="dark"
  >
    <Navbar.Brand href="#home">Andrew Ndhlovu</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <NavLink className="nav-link" activeClassName="active-style" to="/">
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active-style"
          to="/page-2"
        >
          About
        </NavLink>
        <NavLink
          className="nav-link"
          activeClassName="active-style"
          to="/portfolio"
        >
          Portfolio
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
