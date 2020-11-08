import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import { getUserDetails, updateUserProfile, logout } from "../actions/userActions";

import Breadcrumb from "../components/Breadcrumb.component";

// import "../sass/pages/DashboardPage.styles.scss";

const DashboardPage = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const logoutHandler = () => {
    dispatch(logout())
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <div>
      <Breadcrumb title={"Dashboard"} />
      <div className="main">
        <div className="page-content">
          <div className="dashboard">
            <div className="container">
              <ul
                className="nav nav-dashboard flex-column mb-3 mb-md-0"
                role="tablist"
              >
                <Tabs selectedTabClassName="active show">
                  <div className="row-profile">
                    <aside className="col-md-4 col-lg-3">
                      <TabList>
                        <Tab className="nav-item">
                          <span className="nav-link">Orders</span>
                        </Tab>

                        <Tab className="nav-item">
                          <span className="nav-link">Profile</span>
                        </Tab>

                        <Tab className="nav-item">
                          <Link onClick={logoutHandler} to="/" className="nav-link">
                            Sign Out
                          </Link>
                        </Tab>
                      </TabList>
                    </aside>

                    <div
                      className="col-md-8 col-lg-9"
                      style={{ marginTop: "1rem" }}
                    >
                      <div className="tab-pane">
                        <TabPanel>
                          <h2>My Orders</h2>
                        </TabPanel>

                        <TabPanel>
                          <h2>Profile</h2>
                          {message && (
                            <Message variant="danger">{message}</Message>
                          )}
                          {error && <Message variant="danger">{error}</Message>}
                          {success && (
                            <Message variant="success">Profile Updated</Message>
                          )}
                          {loading && <Spinner />}
                          <Form onSubmit={submitHandler}>
                            <Form.Group controlId="name">
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                type="name"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              ></Form.Control>
                            </Form.Group>

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

                            <Form.Group controlId="confirmPassword">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              ></Form.Control>
                            </Form.Group>

                            <Button type="submit" variant="primary">
                              Update Profile
                            </Button>
                          </Form>
                        </TabPanel>
                      </div>
                    </div>
                  </div>
                </Tabs>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
