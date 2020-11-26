import React, { useState, useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import { listUsers, deleteUser } from "../actions/userActions";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

import Breadcrumb from "../components/Breadcrumb.component";

const AdminPanel = ({ location, history, match }) => {
  const dispatch = useDispatch();

  /*===============================================*/
  /*==================== USERS ====================*/
  /*===============================================*/

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // user delete part of the state
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successUserDelete } = userDelete; // from state we get success and rename it to successDelete

  const deleteUserHandler = (id) => {
    if (window.confirm(`Delete user?`)) {
      dispatch(deleteUser(id));
    }
  };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else history.push("/login");
  }, [dispatch, history, userInfo, successUserDelete]);

  /*==================================================*/
  /*==================== PRODUCTS ====================*/
  /*==================================================*/

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingProductDelete,
    error: errorProductDelete,
    success: successProductDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingProductCreate,
    error: errorProductCreate,
    success: successProductCreate,
    product: createdProduct,
  } = productCreate;

  const deleteProductHandler = (id) => {
    if (window.confirm(`Delete product?`)) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successProductCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successProductDelete,
    successProductCreate,
    createdProduct,
  ]);

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
                        <Tab className="nav-item">
                          <span className="nav-link">Products</span>
                        </Tab>
                        {/*========== ORDERS TAB ==========*/}
                        <Tab className="nav-item">
                          <span className="nav-link">Orders</span>
                        </Tab>
                      </TabList>
                    </aside>

                    <div
                      className="col-md-8 col-lg-9"
                      style={{ marginTop: "1rem" }}
                    >
                      <div className="tab-pane">
                        {/*========== USERS PANEL ==========*/}
                        <TabPanel>
                          <h1>Users</h1>
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
                                        to={`/admin/user/${user._id}/edit`}
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
                                        onClick={() =>
                                          deleteUserHandler(user._id)
                                        }
                                      ></i>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          )}
                        </TabPanel>
                        {/*========== PRODUCTS PANEL ==========*/}
                        <TabPanel>
                          <Row className="align-items-center">
                            <Col>
                              <h1 className="py-3">Products</h1>
                            </Col>
                            <Col className="text-right">
                              <Button
                                className="btn-custom-blue py-3"
                                onClick={createProductHandler}
                              >
                                Create Product
                              </Button>
                            </Col>
                          </Row>
                          {loadingProductDelete && <Spinner />}
                          {errorProductDelete && (
                            <Message variant="danger">
                              {errorProductDelete}
                            </Message>
                          )}
                          {loadingProductCreate && <Spinner />}
                          {errorProductCreate && (
                            <Message variant="danger">
                              {errorProductCreate}
                            </Message>
                          )}
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
                                  <th>PRICE</th>
                                  <th>CATEGORY</th>
                                  <th>GENDER</th>
                                  <th>BRAND</th>
                                  <th></th>
                                </tr>
                              </thead>

                              <tbody>
                                {products.map((product) => (
                                  <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.category}</td>
                                    <td>{product.gender}</td>
                                    <td>{product.brand}</td>
                                    <td>
                                      <LinkContainer
                                        to={`/admin/product/${product._id}/edit`}
                                        style={{
                                          color: " #667EEA",
                                          cursor: "pointer",
                                          // padding: "0 .4rem",
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
                                        onClick={() =>
                                          deleteProductHandler(product._id)
                                        }
                                      ></i>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </Table>
                          )}
                        </TabPanel>
                        {/*========== ORDERS PANEL ==========*/}
                        <TabPanel>
                          <h1>Orders</h1>
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

export default AdminPanel;
