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
import Breadcrumb from "../components/Breadcrumb.component";
import { PayPalButton } from "react-paypal-button-v2";
import { updateUser } from "../actions/userActions";
import "../sass/pages/OrderPage.styles.scss";

const OrderPage = ({ match }) => {
  const orderId = match.params.id;
  let history = useHistory();

  const [sdkReady, setSdkReady] = useState(false);
  const [pointsQuantity, setPointsQuantity] = useState();

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { success: successUpdate } = userUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const finalPriceAfterDiscount = order?.totalPrice - pointsQuantity;

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
    order.loyaltyPoints = Math.round(
      (finalPriceAfterDiscount ? finalPriceAfterDiscount : order.totalPrice) /
        20
    ).toFixed(0);

    order.maxSpendablePoints = Math.round(
      (order.totalPrice * 30) / 100
    ).toFixed(0);
  }

  let orderSliced = orderId.slice(-5);

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

    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (order.paymentMethod === "PayPal") {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      } else if (order.paymentMethod === "Stripe") {
        console.log("stripe");
      } else {
        console.log("nothing to return");
      }
    }
  }, [
    dispatch,
    orderId,
    successPay,
    successDeliver,
    order,
    history,
    userInfo,
    user,
    successUpdate,
  ]);

  const successPaymentHandler = (paymentResult) => {
    // reduce points from user
    if (!isNaN(pointsQuantity)) {
      userInfo.loyaltyPoints = userInfo.loyaltyPoints - pointsQuantity;
      console.log("1 userInfo.loyaltyPoints", userInfo.loyaltyPoints);
    }

    // add points to the user
    userInfo.loyaltyPoints = +order.loyaltyPoints + userInfo.loyaltyPoints;

    // dispatch actions
    dispatch(payOrder(orderId, paymentResult));
    dispatch(updateUser(userInfo));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  const setPoints = (points) => {
    setPointsQuantity(points);
  };

  const onClear = () => {
    setPointsQuantity("");
  };

  // ===== LOYALTY / DISCOUNT CARD =====
  const renderDiscountCard = () => {
    if (!order.isPaid && userInfo?.loyaltyPoints > 0) {
      return (
        <div className={"discount-details"}>
          <Card className={"discount-details-card"}>
            <ListGroup variant="flush" className={"center"}>
              <ListGroup.Item>
                <h2>Get a discount</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <div>
                  You currently have{" "}
                  <span className={"discount-details-card--totalPoints"}>
                    {userInfo.loyaltyPoints} loyalty points
                  </span>
                </div>
                <div>
                  You can use{" "}
                  <span className={"discount-details-card--totalPoints"}>
                    {order.maxSpendablePoints > userInfo?.loyaltyPoints
                      ? userInfo?.loyaltyPoints
                      : order.maxSpendablePoints}{" "}
                    loyalty points*
                  </span>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="input-group discount-details-card--input-group">
                  Enter the amount of points you want to use:
                  <input
                    value={pointsQuantity}
                    onChange={(e) => setPoints(e.target.value)}
                    placeholder={`1 - ${
                      order.maxSpendablePoints > userInfo?.loyaltyPoints
                        ? userInfo?.loyaltyPoints
                        : order.maxSpendablePoints
                    }`}
                    min={1}
                    max={
                      order.maxSpendablePoints > userInfo?.loyaltyPoints
                        ? userInfo?.loyaltyPoints
                        : order.maxSpendablePoints
                    }
                    type={"number"}
                    className="discount-details-card--input-number"
                  />
                  <button
                    className="discount-details-card--clear-button"
                    onClick={() => onClear()}
                  >
                    Clear
                  </button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>

          <div className={"discount-details-note"}>
            <span className={"discount-details-note--asterisk"}>*</span> 1 point
            is equal to 1 euro. You can cover up to 30% of the total price using
            loyalty points.
          </div>
        </div>
      );
    }
  };

  // ===== ORDER SUMMARY CARD =====
  const renderOrderSummaryCard = () => {
    return (
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item className={"center"}>
            <h2>Order Summary</h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Items</Col>
              <Col>€{order.itemsPrice}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Shipping</Col>
              <Col>€{order.shippingPrice}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Tax</Col>
              <Col>€{order.taxPrice}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Total</Col>
              {isNaN(finalPriceAfterDiscount) ? (
                <Col>€{order.totalPrice}</Col>
              ) : (
                <Col>€{finalPriceAfterDiscount}</Col>
              )}
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

          {renderPayments()}

          {loadingDeliver && <Spinner />}
          {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
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
    );
  };

  // ===== ORDER ITEM LIST =====
  const renderOrderItemsList = () => {
    if (order.orderItems.length === 0) {
      return <Message>Your order is empty</Message>;
    } else {
      return (
        <ListGroup variant="flush">
          {order.orderItems.map((item, index) => (
            <ListGroup.Item key={index}>
              <Row>
                <Col>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </Col>
                <Col>
                  {item.qty} x €{item.price} = €{item.qty * item.price}
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      );
    }
  };

  // ===== PAYMENT BUTTONS =====
  const renderPayments = () => {
    if (!order.isPaid && order.paymentMethod === "PayPal") {
      // if (order.paymentMethod === "Paypal") {
      return (
        <ListGroup.Item>
          {loadingPay && <Spinner />}
          {!sdkReady ? (
            <Spinner />
          ) : (
            <PayPalButton
              amount={
                isNaN(finalPriceAfterDiscount)
                  ? order.totalPrice
                  : finalPriceAfterDiscount
              }
              onSuccess={successPaymentHandler}
            />
          )}
        </ListGroup.Item>
      );
    }

    if (!order.isPaid && order.paymentMethod === "Stripe") {
      return (
        <ListGroup.Item>
          {loadingPay && <Spinner />}
          <div>Stripe payment goes here</div>
        </ListGroup.Item>
      );
    }

    return <></>;
  };

  return loading ? (
    <Spinner />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Breadcrumb parent={"Orders"} title={`Order ${orderSliced}`} />

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
                      {renderOrderItemsList()}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={4}>
                  {renderDiscountCard()}
                  {renderOrderSummaryCard()}
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
