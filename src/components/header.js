import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from 'react-bootstrap'
import styles from '../styles/header.module.css'

const Header = ({ siteTitle }) => (
  <Navbar variant="dark" className={styles.navbar} expand="lg">
    <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
