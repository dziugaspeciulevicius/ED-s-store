import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import Logo from "../assets/images/logo_top.svg";

import "../sass/components/Header.styles.scss";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} className="d-inline-block align-top" alt=" logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="my-auto">
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/shop" className="nav-link">
                Shop
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-link">
                Contact
              </Nav.Link>
              <Nav.Link href="/about" className="nav-link">
                About Us
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/cart" className="nav-link">
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
              <Nav.Link href="/signin" className="nav-link">
                <i className="fas fa-user"></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
