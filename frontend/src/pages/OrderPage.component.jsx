import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import {
  deliverOrder,
  getOrderDetails,
  payOrder,
} from "../actions/orderActions";
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";
// import { changePaymentMethod } from '../actions/cartActions';
import Breadcrumb from "../components/Breadcrumb.component";
import { PayPalButton } from "react-paypal-button-v2";

const OrderPage = ({ match }) => {
  const orderId = match.params.id;
  let history = useHistory();

  const [sdkReady, setSdkReady] = useState(false);
  const [clientIds, setClientIds] = useState();

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const changePaymentHandler = () => {
  //   // e.preventDefault();
  //   dispatch(changePaymentMethod());
  //   history.push("/payment");
  // }

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );

    order.loyaltyPoints = Math.round(order.totalPrice / 20).toFixed(0);
  }

  // let orderSliced = orderId.slice(-5);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

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

    if (!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
      if (order.paymentMethod === "Paypal") {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      } else if (order.paymentMethod === "Stripe") {
        console.log("stripe");
      }
    }
  }, [dispatch, orderId, successPay, successDeliver, order]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
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
                        {order.paymentMethod}{" "}
                        {/*<Button onClick={changePaymentHandler} className="btn-custom-blue">Change payment method</Button>*/}
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
                      <ListGroup.Item>
                        <Row>
                          {order.isPaid ? (
                            <Col className={"loyalty-pts-row"}>
                              You have earned{" "}
                              <span className={"loyalty-pts-row--value"}>
                                {order.loyaltyPoints} loyalty points
                              </span>
                            </Col>
                          ) : (
                            <Col className={"loyalty-pts-row"}>
                              You will earn{" "}
                              <span className={"loyalty-pts-row--value"}>
                                {order.loyaltyPoints} loyalty points
                              </span>
                            </Col>
                          )}
                        </Row>
                      </ListGroup.Item>
                      {!order.isPaid && order.paymentMethod === "PayPal" ? (
                        // {!order.isPaid ? (
                        <ListGroup.Item>
                          {loadingPay && <Spinner />}
                          {!sdkReady ? (
                            <Spinner />
                          ) : (
                            // <PayPalButton
                            //   amount={order.totalPrice}
                            //   onSuccess={successPaymentHandler}
                            // />
                            <div style={{ textAlign: "center" }}>
                              Show paypal button here (
                              <a
                                href={
                                  "https://github.com/Luehang/react-paypal-button-v2/issues/93"
                                }
                              >
                                https://github.com/Luehang/react-paypal-button-v2/issues/93
                              </a>
                              )
                            </div>
                          )}
                        </ListGroup.Item>
                      ) : (
                        <ListGroup.Item>
                          <p>Order needs to be paid</p>
                        </ListGroup.Item>
                      )}
                      {/* IF WANTED TO ADD MORE PAYMENTS JUST ADD THIS FOR EXAMPLE
                        ) : !order.isPaid && order.paymentMethod === "Stripe" ? (
                            <ListGroup.Item>
                              <Button>Stripe?</Button>
                            </ListGroup.Item>
                          ) : ()*/}
                      {loadingDeliver && <Spinner />}
                      {userInfo &&
                        userInfo.isAdmin &&
                        order.isPaid &&
                        !order.isDelivered && (
                          <ListGroup.Item>
                            <Button
                              className="custom-btn-place-order btn-custom-blue"
                              onClick={deliverHandler}
                            >
                              Mark as delivered
                            </Button>
                          </ListGroup.Item>
                        )}
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
