import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.scss";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumb.component";
import Rating from "../components/Rating.component";
import Spinner from "../components/Spinner.component";
import Message from "../components/Message.component";
import "../sass/pages/ProductPage.styles.scss";
import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      alert("Review submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    ); // pass in id from params.id
  };

  const minusQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    } else {
      console.log("Bro, you cannot go into negative orders");
    }
  };

  const plusQty = () => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    } else {
      console.log("Out of stock");
    }
  };

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
                        {product.countInStock > 0
                          ? `${product.countInStock} left`
                          : "Out of Stock"}
                      </div>
                    </Row>
                  </ListGroupItem>

                  {product.countInStock > 0 && (
                    <ListGroupItem>
                      <Row>
                        <div className="stock-text">Select quantity:</div>
                      </Row>
                      <Row>
                        <div>
                          <div className="qty-box">
                            <div className="input-group">
                              <span className="input-group-prepend">
                                <button
                                  type="button"
                                  className="btn quantity-left-minus"
                                  onClick={minusQty}
                                  data-type="minus"
                                  data-field=""
                                >
                                  <i className="fas fa-angle-left"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                name="quantity"
                                value={qty}
                                className="form-control input-number"
                              />
                              <span className="input-group-prepend">
                                <button
                                  type="button"
                                  className="btn quantity-right-plus"
                                  onClick={plusQty}
                                  data-type="plus"
                                  data-field=""
                                >
                                  <i className="fas fa-angle-right"></i>
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Row>
                    </ListGroupItem>
                  )}

                  <ListGroupItem>
                    <Button
                      onClick={addToCartHandler}
                      className="add-to-cart-button"
                      type="button"
                      disabled={product.countInStock === 0 || qty <= 0}
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
                          {/*========== DESCRIPTION TAB ==========*/}
                          <Tab className="nav-item">
                            <span className="nav-link">
                              <i className="icofont icofont-ui-home"></i>
                              Description
                            </span>
                            <div className="material-border"></div>
                          </Tab>
                          {/*========== DETAILS TAB ==========*/}
                          <Tab className="nav-item">
                            <span className="nav-link">
                              <i className="icofont icofont-man-in-glasses"></i>
                              Details
                            </span>
                            <div className="material-border"></div>
                          </Tab>
                          {/*========== REVIEWS TAB ==========*/}
                          <Tab className="nav-item">
                            <span className="nav-link">
                              <i className="icofont icofont-contacts"></i>
                              Reviews
                            </span>
                            <div className="material-border"></div>
                          </Tab>
                        </TabList>
                        {/*========== DESCRIPTION PANEL ==========*/}
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
                        {/*========== DETAILS PANEL ==========*/}
                        <TabPanel>
                          <p className="mt-4 p-0">{product.description}</p>
                        </TabPanel>
                        {/*========== REVIEWS PANEL ==========*/}
                        <TabPanel>
                          <Row>
                            <Col md={6}>
                              {product.reviews.length === 0 && (
                                <Message>No reviews</Message>
                              )}
                              <ListGroup variant="flush">
                                {" "}
                                {product.reviews.map((review) => (
                                  <ListGroup.Item key={review._id}>
                                    <strong>{review.name}</strong>
                                    <Rating value={review.rating} />
                                    <p>{review.createdAt.substring(0, 10)}</p>
                                    <p>{review.comment}</p>
                                  </ListGroup.Item>
                                ))}
                                <ListGroup.Item>
                                  <h2>Write a review</h2>
                                  {errorProductReview && (
                                    <Message variant="danger">
                                      {errorProductReview}
                                    </Message>
                                  )}
                                  {userInfo ? (
                                    <Form onSubmit={submitHandler}>
                                      <Form.Group controlId="rating">
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control
                                          as="select"
                                          value={rating}
                                          onChange={(e) =>
                                            setRating(e.target.value)
                                          }
                                        >
                                          <option value="">Select</option>
                                          <option value="1">1 - Poor</option>
                                          <option value="2">2 - Fair</option>
                                          <option value="3">3 - Average</option>
                                          <option value="4">4 - Good</option>
                                          <option value="5">
                                            5 - Excellent
                                          </option>
                                        </Form.Control>
                                      </Form.Group>
                                      <Form.Group controlId="comment">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control
                                          as="textarea"
                                          row="3"
                                          value={comment}
                                          onChange={(e) =>
                                            setComment(e.target.value)
                                          }
                                        ></Form.Control>
                                      </Form.Group>
                                      <Button
                                        className="add-to-cart-button"
                                        type="submit"
                                      >
                                        Submit
                                      </Button>
                                    </Form>
                                  ) : (
                                    <Message>
                                      Please <Link to="/login">sign in</Link> to
                                      write a review{" "}
                                    </Message>
                                  )}
                                </ListGroup.Item>
                              </ListGroup>
                            </Col>
                          </Row>
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
