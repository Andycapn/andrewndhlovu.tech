import { Link } from "gatsby"
import React, { useState } from "react"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [state, setState] = useState({
    drawerOpen: false,
  })
  const handleDrawerToggle = () => {
    setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen }
    })
  }
  const handleBackdropClick = () => {
    setState({ drawerOpen: false })
  }

  return (
    <header
      css={css`
        & > .sidebar {
          position: fixed;
          top: 0;
          width: 85%;
          height: 100%;
          background-color: white;
          z-index: 200;
          display: flex;
          flex-direction: column;
          transform: translateX(-100%);
          transition: 200ms ease-out;
          padding: 2rem;
          & > .close-icon {
            cursor: pointer;
            margin-left: auto;
          }
          & > .nav-items {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            & > .nav-item {
              font-family: "Rubik", sans-serif;
              list-style: none;
              font-weight: 400;
              letter-spacing: 1.5px;
              font-size: 14px;
              margin: 10px 0;
            }
          }

          a {
            text-decoration: none;
            color: black;
          }
        }
        & > .sidebar.open {
          transform: translateX(0px);
        }
        & > .backdrop {
          display: none;
          z-index: 100;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.7);
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 300ms ease-in;
        }
        & > .backdrop.open {
          display: block;
          opacity: 1;
        }
      `}
    >
      <nav
        css={css`
          z-index: 100;
          position: fixed;
          top: 0;
          display: flex;
          width: 100vw;
          height: 8vh;
          align-items: center;
          background-color: white;
          & > .nav-items {
            display: none;
          }
          & > .hamburger {
            margin-left: auto;
            color: black;
          }
          & > .logo {
            color: black;
            text-decoration: none;
            font-family: "Josefin Sans", sans-serif;
            letter-spacing: 2px;
            font-weight: bold;
            font-size: 13px;
          }
          padding: 0.5rem calc((100vw - 345px) / 2) 0.5rem;
          @media screen and (min-width: 425px) {
            padding: 0.7rem calc((100vw - 400px) / 2);
          }
          @media screen and (min-width: 600px) {
            padding: 0.5rem calc((100vw - 580px) / 2);
          }
          @media screen and (min-width: 768px) {
            padding: 0.5rem calc((100vw - 750px) / 2);
            max-height: 7vh;
            & > .hamburger {
              display: none;
            }
            & > .nav-items {
              margin-left: auto;
              margin-bottom: 0;
              display: flex;
              & > .nav-item {
                font-family: "Open Sans", sans-serif;
                font-weight: bold;
                list-style: none;
                letter-spacing: 2px;
                font-size: 13px;
                text-transform: uppercase;
                margin: 0 10px;
              }
              a {
                text-decoration: none;
                color: black;
              }
            }
            & > .logo {
              font-size: 16px;
            }
          }
          @media screen and (min-width: 1024px) {
            padding: 1rem calc((100vw - 960px) / 2);
          }
          @media screen and (min-width: 1366px) {
            padding: 1rem calc((100vw - 1280px) / 2);
          }
          @media screen and (min-width: 1440px) {
            padding: 1.5rem calc((100vw - 1300px) / 2);
          }
        `}
      >
        <Link to="/" className="logo">
          ANDREW NDHLOVU
        </Link>
        <FontAwesomeIcon
          icon={faBars}
          color={"white"}
          className="hamburger"
          size={"lg"}
          onClick={handleDrawerToggle}
        />
        <ul className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/portfolio" className="nav-item">
            Portfolio
          </Link>
          <Link to="/about" className="nav-item">
            About Me
          </Link>
          <Link to="/contact" className="nav-item">
            Contact Me
          </Link>
        </ul>
      </nav>
      <div className={`sidebar ${state.drawerOpen ? "open" : ""}`}>
        <FontAwesomeIcon
          icon={faTimes}
          size={"lg"}
          className="close-icon"
          onClick={handleDrawerToggle}
          color={"black"}
        />
        <ul className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/portfolio" className="nav-item">
            Portfolio
          </Link>
          <Link to="/about" className="nav-item">
            About Me
          </Link>
          <Link to="/contact" className="nav-item">
            Contact Me
          </Link>
        </ul>
      </div>
      <div
        className={`backdrop ${state.drawerOpen ? "open" : ""}`}
        onClick={handleBackdropClick}
        role="navigation"
      />
    </header>
  )
}

export default Header
