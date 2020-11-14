import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer.component";

import Breadcrumb from "../components/Breadcrumb.component";

import "../sass/pages/LoginPage.styles.scss";

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // setting up dispatch
  const dispatch = useDispatch();

  // getting userLogin part of the state from the reducer
  const userLogin = useSelector((state) => state.userLogin);

  // taking from user reducer
  const { loading, error, userInfo } = userLogin; // from user reducer

  // redirect to register
  const redirect = location.search ? location.search.split("=")[1] : "/";

  //  we want to redirect only if we're already logged in, we don't want to go to login screen if we're already logged in
  useEffect(() => {
    // check for userInfo. If it exists, take props.history and push and redirect
    if (userInfo) {
      history.push(redirect);
    }
    // pass in dependencies
  }, [history, userInfo, redirect]);

  // we want to dispatch login action here
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <Breadcrumb title={"Login"} />
      <FormContainer className="form-container">
        <h1>Log In</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Spinner />}
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

          <Button type="submit" variant="primary" className="btn-custom-blue">
            Sign In
          </Button>

          <Col className="new-customer">
            New Customer?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Form>
      </FormContainer>
      )
    </div>
  );
};

export default LoginPage;
