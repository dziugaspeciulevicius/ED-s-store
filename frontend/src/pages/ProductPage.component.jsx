import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating.component";
import Spinner from "../components/Spinner.component";
import Message from "../components/Message.component";

import Breadcrumb from "../components/Breadcrumb.component";
// import ProductDetails from "../components/productDetails.component";
import "react-tabs/style/react-tabs.scss";

import "../sass/pages/ProductPage.styles.scss";

import { listProductDetails } from "../actions/productActions";

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Breadcrumb parent={"Shop"} title={product.name} />
      <Container>
        <Link className="btn btn-custom-blue my-3" to="/">
          Go Back
        </Link>
        {loading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Spinner />
          </div>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <Col md={3}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem className="product-description">
                  Description: {product.description}
                </ListGroupItem>
                {/*<ListGroupItem>Price: ${product.price}</ListGroupItem>*/}
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    <Row>
                      <div className="product-price">${product.price}</div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <div className="stock-text">
                        Availability:{" "}
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </div>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Button
                      className="add-to-cart-button"
                      type="button"
                      disabled={product.countInStock === 0}
                    >
                      Add to cart
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
        {loading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Spinner />
          </div>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <section className="tab-product m-0">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-12">
                  <div className="row-details">
                    <div className="col-sm-12 col-lg-12">
                      <Tabs className="tab-content nav-material">
                        <TabList className="nav nav-tabs nav-material">
                          <Tab className="nav-item">
                            <span className="nav-link">
                              <i className="icofont icofont-ui-home"></i>
                              Description
                            </span>
                            <div className="material-border"></div>
                          </Tab>
                          <Tab className="nav-item">
                            <span className="nav-link">
                              <i className="icofont icofont-man-in-glasses"></i>
                              Details
                            </span>
                            <div className="material-border"></div>
                          </Tab>
                          <Tab className="nav-item">
                            <span className="nav-link">
                              <i className="icofont icofont-contacts"></i>Write
                              Review
                            </span>
                            <div className="material-border"></div>
                          </Tab>
                        </TabList>
                        <TabPanel className="tab-pane fade mt-4 show active">
                          <table className="table table-striped mb-0">
                            <tbody>
                              <tr>
                                <th>Name :</th>
                                <td>{product.name}</td>
                              </tr>
                              <tr>
                                <th>Ideal For :</th>
                                <td>{product.gender}</td>
                              </tr>
                              <tr>
                                <th>Brand :</th>
                                <td>{product.brand}</td>
                              </tr>
                              <tr>
                                <th>Category :</th>
                                <td>{product.category}</td>
                              </tr>
                            </tbody>
                          </table>
                        </TabPanel>
                        <TabPanel>
                          <p className="mt-4 p-0">{product.description}</p>
                        </TabPanel>
                        <TabPanel>
                          <form className="theme-form mt-4">
                            <div className="form-row">
                              <div className="col-md-12 ">
                                <div className="media m-0">
                                  <label>Rating</label>
                                  <div className="media-body ml-3">
                                    <div className="rating three-star">
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                      <i className="fa fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <label htmlFor="name">Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Enter Your name"
                                  required
                                />
                              </div>
                              <div className="col-md-6">
                                <label htmlFor="email">Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="email"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                              <div className="col-md-12">
                                <label htmlFor="review">Review Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="review"
                                  placeholder="Enter your Review Subjects"
                                  required
                                />
                              </div>
                              <div className="col-md-12">
                                <label htmlFor="review">Review Title</label>
                                <textarea
                                  className="form-control"
                                  placeholder="Wrire Your Testimonial Here"
                                  id="exampleFormControlTextarea1"
                                  rows="6"
                                ></textarea>
                              </div>
                              <div className="col-md-12">
                                <button className="btn btn-solid" type="submit">
                                  Submit Your Review
                                </button>
                              </div>
                            </div>
                          </form>
                        </TabPanel>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Container>
    </>
  );
};

export default ProductPage;
