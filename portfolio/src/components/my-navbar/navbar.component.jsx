import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.png';

import './navbar_style.css'

const MyNavbar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" fixed="top" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home" className="logo"><img src={Logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Portfolio</Nav.Link>
            <Nav.Link href="#projects">Blogs</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar;