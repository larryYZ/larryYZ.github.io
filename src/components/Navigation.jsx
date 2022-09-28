import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(){
  return (
    <Navbar id="navbar-top-level" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand id="navbar-home" href="#start">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link id="navbar-item" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link id="navbar-item" href="#about">About</Nav.Link>
            <Nav.Link id="navbar-item" href="#contact">Contact</Nav.Link>
            <Nav.Link id="navbar-item" href="https://drive.google.com/file/d/1Mi6jlBVoomYxWKJZlVUMDFKrmyGHPsHW/view?usp=sharing">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;