import { Link } from "gatsby"
import React from "react"
import "@blueprintjs/core/lib/css/blueprint.css"
import { Navbar, Nav } from "react-bootstrap"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const NavLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  font-size: small;

  &.nav-link {
    padding-left: 1em;
    padding-right: 1em;
  }
`

const Header = () => (
  <Navbar
    bg="nav-bar"
    expand="lg"
    fixed="top"
    css={css`
      @media screen and (min-width: 1024px) {
        padding: 0.5rem calc((100vw - 960px) / 2);
      }
      @media screen and (min-width: 1440px) {
        padding: 0.5rem calc((100vw - 1300px) / 2);
      }
    `}
    className="navbar-dark"
  >
    <Link
      to="/"
      style={{ fontFamily: '"Josefin Sans", sans-serif' }}
      className="navbar-brand"
    >
      Andrew Ndhlovu
    </Link>
    <Navbar.Toggle
      aria-controls="basic-navbar-nav"
      css={css`
        color: black;
        border: none;
      `}
    />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto" variant="pills">
        <NavLink className="nav-link" activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/contact">
          Contact Me
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
