import React from "react";
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "../assets/images/logo_top.svg";
import {logout} from '../actions/userActions';

import "../sass/components/Header.styles.scss";

// TO-DO : fix href tags and add link containers
const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout())
  }

  const userInfoName = userInfo ? userInfo.name.split(" ")[0] : " ";

  return (
    <header>
      <Navbar
        bg="light"
        expand="lg"
        collapseOnSelect
        className="navbar-stick"
        fixed="top"
      >
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={Logo} className="d-inline-block align-top" alt=" logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-auto">
            <LinkContainer to="/">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link className="nav-link">Shop</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="nav-link">Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link">About Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link className="nav-link">
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfoName} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="nav-link">
                  <i className="fas fa-user"></i>Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
