import React from "react";
import { Link } from 'react-router-dom';

import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "../assets/images/logo_top.svg";

import "../sass/components/Header.styles.scss";

// TO-DO : fix href tags and add link containers
const Header = () => {
  return (
    <Router>
      <header>
        <Navbar
          bg="light"
          expand="lg"
          collapseOnSelect
          className="navbar-stick"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={Logo}
                className="d-inline-block align-top"
                alt=" logo"
              />
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
    </Router>
  );
};

export default Header;
