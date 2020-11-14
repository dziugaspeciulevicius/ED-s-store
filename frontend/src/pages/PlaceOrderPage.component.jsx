import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import CheckoutSteps from "../components/CheckoutSteps.component";
import { createOrder } from "../actions/orderActions";

const PlaceOrderPage = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  // Calculate prices
  // adds to be two decimals after the number
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 20);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = addDecimals(
    Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
  );

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="main">
        <div className="page-content">
          <div className="place-order-page">
            <div className="container">
              <Row className="place-order-page-row">
                <Col className="order-info-column">
                  <ListGroup variant="flush">
                  <ListGroup.Item>
                      <h2>Shipping</h2>
                      <strong>Name: </strong>
                      {cart.shippingAddress.firstName}
                      <br/>
                      <strong>Surname: </strong>
                      {cart.shippingAddress.lastName}
                      <br/>
                      <strong>Phone: </strong>
                      {cart.shippingAddress.phone}
                      <br/>
                      <strong>Email: </strong>
                      {cart.shippingAddress.email}
                      <br/>
                      <strong>Shipping address: </strong>
                      {cart.shippingAddress.country},{" "}
                      {cart.shippingAddress.city},{" "}
                      {cart.shippingAddress.address},{" "}
                      {cart.shippingAddress.postalCode},
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h2>Payment Method</h2>
                      <strong>Method: </strong>
                      {cart.paymentMethod}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <h2>Order Items</h2>
                      {cart.cartItems.length === 0 ? (
                        <Message>Your cart is empty</Message>
                      ) : (
                        <ListGroup variant="flush">
                          {cart.cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                              <Row>
                                <Col>
                                  <Link to={`/product/${item.product}`}>
                                    {item.name}
                                  </Link>
                                </Col>
                                <Col>
                                  {item.qty} x ${item.price} = $
                                  {addDecimals(item.qty * item.price)}
                                </Col>
                              </Row>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={4}>
                  <Card>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <h2>Order Summary</h2>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Items</Col>
                          <Col>${cart.itemsPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Shipping</Col>
                          <Col>${cart.shippingPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Tax</Col>
                          <Col>${cart.taxPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Total</Col>
                          <Col>${cart.totalPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                            {error && <Message variant='danger'>{error}</Message>}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Button
                          type="button"
                          className="custom-btn-place-order"
                          disabled={cart.cartItems === 0}
                          onClick={placeOrderHandler}
                        >
                          Place Order
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderPage;
