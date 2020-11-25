import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import { listUsers, deleteUser } from "../actions/userActions";
import Breadcrumb from "../components/Breadcrumb.component";

const AdminPanel = ({ location, history }) => {
  /*==================== USERS ====================*/
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // user delete part of the state
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete; // from state we get success and rename it to successDelete

  // dispatch action here
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else history.push("/login");
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm(`Delete user?`)) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <Breadcrumb title={"Admin dashboard"} />
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
                        {/*========== USERS TAB ==========*/}
                        <Tab className="nav-item">
                          <span className="nav-link">Users</span>
                        </Tab>
                        {/*========== PRODUCTS TAB ==========*/}
                        {/*<Tab className="nav-item">
                        <span className="nav-link">Products</span>
                        </Tab>*/}

                        {/*========== ORDERS TAB ==========*/}
                        {/*<Tab className="nav-item">
                          <span className="nav-link">Orders</span>
                        </Tab>
                        */}
                      </TabList>
                    </aside>

                    <div
                      className="col-md-8 col-lg-9"
                      style={{ marginTop: "1rem" }}
                    >
                      <div className="tab-pane">
                        {/*========== USERS PANEL ==========*/}
                        <TabPanel>
                          <h2>Users</h2>
                          {loading ? (
                            <Spinner />
                          ) : error ? (
                            <Message variant="danger">{error}</Message>
                          ) : (
                            <Table
                              striped
                              bordered
                              hover
                              responsive
                              className="table-sm"
                            >
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>NAME</th>
                                  <th>EMAIL</th>
                                  <th>ADMIN</th>
                                  <th>ACTION</th>
                                </tr>
                              </thead>

                              <tbody>
                                {users.map((user) => (
                                  <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>
                                      <a href={`mailto:${user.email}`}>
                                        {user.email}
                                      </a>
                                    </td>
                                    <td>
                                      {user.isAdmin ? (
                                        <i
                                          className="fas fa-check"
                                          style={{ color: "green" }}
                                        ></i>
                                      ) : (
                                        <i
                                          className="fas fa-times"
                                          style={{ color: "red" }}
                                        ></i>
                                      )}
                                    </td>
                                    <td>
                                      <LinkContainer
                                        to={`/user/${user._id}/edit`}
                                        style={{
                                          color: " #667EEA",
                                          cursor: "pointer",
                                          padding: "0 1.2rem",
                                        }}
                                      >
                                        <i className="fas fa-edit"></i>
                                      </LinkContainer>{" "}
                                      <i
                                        className="fas fa-trash"
                                        style={{
                                          color: "red",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => deleteHandler(user._id)}
                                      ></i>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          )}
                        </TabPanel>
                        {/*========== PRODUCTS PANEL ==========*/}
                        {/*
                        <TabPanel>
                          <h2>Profile</h2>
                          {message && (
                            <Message variant="danger">{message}</Message>
                          )}
                          {success && (
                            <Message variant="success">Profile Updated</Message>
                          )}
                          {loading ? (
                            <Spinner />
                          ) : error ? (
                            <Message variant="danger">{error}</Message>
                          ) : (
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

                              <Button
                                className="btn-custom-blue"
                                type="submit"
                                variant="primary"
                              >
                                Update Profile
                              </Button>
                            </Form>
                          )}
                                </TabPanel>*/}
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

export default AdminPanel;
