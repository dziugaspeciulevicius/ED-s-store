import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer.component";

import Breadcrumb from "../components/Breadcrumb.component";

import "../sass/pages/LoginPage.styles.scss";

const LoginPage = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    // DISPATCH LOGIN
  };

  return (
    <div>
      <Breadcrumb title={"Login"} />
      <FormContainer>
        <h1>Log In</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
          Sign In
          </Button>
          </Form>
          
          <Row className="py-3">
            <Col>
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Register
              </Link>
            </Col>
          </Row>

      </FormContainer>
      )
      {/*<section class="sign-in">
        <div class="container">
          <div class="signin-content">
            <div class="signin-image">
              <figure>
                <img
                  src={require("../assets/images/signin-image.jpg")}
                  alt="sing up image"
                />
              </figure>
              <span class="signup-image-link">
                New Customer?{" "}
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                >
                  Register
                </Link>
              </span>
            </div>

            <div class="signin-form">
              <h2 class="form-title">Log In</h2>
              <Form onSubmit={submitHandler} >
                <div class="form-group">
                  <label for="your_email">
                    <i class="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    // name="your_email"
                    // id="your_email"
                    // placeholder="Your Email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="your_pass">
                    <i class="fas fa-key"></i>
                  </label>
                  <input
                    // name="your_pass"
                    // id="your_pass"
                    // placeholder="Password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    class="form-submit"
                    value="Log in"
                  />
                </div>
              </Form>
              <div class="social-login">
                <span class="social-label">Or login with</span>
                <ul class="socials">
                  <li>
                    <a href="#">
                      <i class="display-flex-center fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="display-flex-center fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="display-flex-center fab fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="social-label">
                These login options are not implemented yet
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="signup">
        <div class="container">
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">Sign up</h2>
              <form method="POST" class="register-form" id="register-form">
                <div class="form-group">
                  <label for="name">
                    <i class="fas fa-user"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">
                    <i class="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <label for="pass">
                    <i class="fas fa-key"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group">
                  <label for="re-pass">
                    <i class="fas fa-key"></i>
                  </label>
                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    placeholder="Repeat your password"
                  />
                </div>
                <div class="form-group custom-button form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    class="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div class="signup-image">
              <figure>
                <img
                  src={require("../assets/images/signup-image.jpg")}
                  alt="sing up image"
                />
              </figure>
              <a href="#" class="signup-image-link">
                I am already member
              </a>
            </div>
          </div>
        </div>
  </section>*/}
    </div>
  );
};

export default LoginPage;
