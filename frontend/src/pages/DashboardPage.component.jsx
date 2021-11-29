import React, { useState, useEffect } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import {
  getUserDetails,
  updateUserProfile,
  logout,
} from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";

import Breadcrumb from "../components/Breadcrumb.component";

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

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
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
                          <Link
                            onClick={logoutHandler}
                            to="/"
                            className="nav-link"
                          >
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
                          {loadingOrders ? (
                            <Spinner />
                          ) : errorOrders ? (
                            <Message variant="danger">{errorOrders}</Message>
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
                                  <th>DATE</th>
                                  <th>TOTAL</th>
                                  <th>PAID</th>
                                  <th>DELIVERED</th>
                                  <th />
                                </tr>
                              </thead>

                              <tbody>
                                {orders.map((order) => (
                                  <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>
                                      {order.isPaid ? (
                                        order.paidAt.substring(0, 10)
                                      ) : (
                                        <i
                                          className="fas fa-times"
                                          style={{ color: "red" }}
                                        />
                                      )}
                                    </td>
                                    <td>
                                      {order.isDelivered ? (
                                        order.deliveredAt.substring(0, 10)
                                      ) : (
                                        <i
                                          className="fas fa-times"
                                          style={{ color: "red" }}
                                        />
                                      )}
                                    </td>
                                    <td>
                                      <LinkContainer to={`/order/${order._id}`}>
                                        <Button
                                          className="btn-sm btn-custom-blue"
                                          variant="light"
                                        >
                                          Details
                                        </Button>
                                      </LinkContainer>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          )}
                        </TabPanel>

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
                                />
                              </Form.Group>

                              <Form.Group controlId="email">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="Enter email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </Form.Group>

                              <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="Enter password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
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
                                />
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
