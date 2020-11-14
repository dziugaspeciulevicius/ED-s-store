import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import { getOrderDetails, payOrder } from "../actions/orderActions";
import { ORDER_PAY_RESET } from "../constants/orderConstants";

import Breadcrumb from "../components/Breadcrumb.component";

const OrderPage = ({ match }) => {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  //   let orderSliced = orderId.slice(-5);

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET }); //if we dont do this, if we pay it will just keep refreshing
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  return loading ? (
    <Spinner />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Breadcrumb parent={"Orders"} title={`Order`} />

      <div className="main">
        <div className="page-content">
          <div className="place-order-page">
            <div className="container">
              <h1>Order {order._id} </h1>
              <Row className="place-order-page-row">
                <Col className="order-info-column">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h2>Shipping</h2>
                      <p>
                        <strong>Name: </strong>
                        {order.shippingAddress.firstName}
                        <br />
                        <strong>Surname: </strong>
                        {order.shippingAddress.lastName}
                        <br />
                        <strong>Phone: </strong>
                        {order.shippingAddress.phone}
                        <br />
                        <strong>Email: </strong>
                        <a href={`mailto: ${order.shippingAddress.email}`}>
                          {order.shippingAddress.email}
                        </a>
                        <br />
                        <strong>Shipping address: </strong>
                        {order.shippingAddress.country},{" "}
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.address},{" "}
                        {order.shippingAddress.postalCode},
                      </p>
                      {order.isDelivered ? (
                        <Message variant="success">
                          Delivered on {order.deliveredAt}
                        </Message>
                      ) : (
                        <Message variant="danger">Not Delivered</Message>
                      )}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <h2>Payment Method</h2>
                      <p>
                        <strong>Method: </strong>
                        {order.paymentMethod}
                      </p>
                      {order.isPaid ? (
                        <Message variant="success">
                          Paid on {order.paidAt}
                        </Message>
                      ) : (
                        <Message variant="danger">Not Paid</Message>
                      )}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <h2>Order Items</h2>
                      {order.orderItems.length === 0 ? (
                        <Message>Your order is empty</Message>
                      ) : (
                        <ListGroup variant="flush">
                          {order.orderItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                              <Row>
                                <Col>
                                  <Link to={`/product/${item.product}`}>
                                    {item.name}
                                  </Link>
                                </Col>
                                <Col>
                                  {item.qty} x ${item.price} = $
                                  {item.qty * item.price}
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
                          <Col>${order.itemsPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Shipping</Col>
                          <Col>${order.shippingPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Tax</Col>
                          <Col>${order.taxPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Total</Col>
                          <Col>${order.totalPrice}</Col>
                        </Row>
                      </ListGroup.Item>
                      {!order.isPaid && (
                        <ListGroup.Item>
                          {loadingPay && <Spinner />}
                          {!sdkReady ? (
                            <Spinner />
                          ) : (
                            <PayPalButton
                              amount={order.totalPrice}
                              onSuccess={successPaymentHandler}
                            />
                          )}
                        </ListGroup.Item>
                      )}
                      {/*<ListGroup.Item>
                        <Button
                          type="button"
                          className="custom-btn-place-order"
                          disabled={cart.cartItems === 0}
                          onClick={placeOrderHandler}
                        >
                          Place Order
                        </Button>
                          </ListGroup.Item>*/}
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

export default OrderPage;
