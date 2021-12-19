import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Button } from "react-bootstrap";
import Message from "../components/Message.component";
import Breadcrumb from "../components/Breadcrumb.component";
import { addToCart, removeFromCart } from "../actions/cartActions";

import "../sass/pages/CartPage.styles.scss";

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    //if they are not logged in, redirect to login
    history.push("/login?redirect=shipping");
  };

  return (
    <div>
      <Breadcrumb title={"Cart Page"} />

      {cartItems.length === 0 ? (
        <section className="cart-section section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div>
                  <div className="col-sm-12 empty-cart-cls text-center">
                    <img
                      src={require(`${process.env.PUBLIC_URL}../assets/images/icon-empty-cart.png`)}
                      className="img-fluid mb-4"
                      alt="empty-cart-img"
                    />
                    <h3>
                      <strong>Your Cart is Empty</strong>
                    </h3>
                    <Message>
                      <Link to="/">Go back and add some items first</Link>
                    </Message>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="cart-section section-b-space">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <table className="table cart-table table-responsive-xs">
                  <thead>
                    <tr className="table-head">
                      <th scope="col">image</th>
                      <th scope="col">product name</th>
                      <th scope="col">price</th>
                      <th scope="col">quantity</th>
                      <th scope="col">action</th>
                      {/*<th scope="col">total</th>*/}
                    </tr>
                  </thead>
                  {cartItems.map((item, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/${item.product}`}
                            >
                              <img src={item.image} alt="item" />
                            </Link>
                          </td>

                          <td>
                            <Link
                              className="custom-link-name"
                              to={`${process.env.PUBLIC_URL}/product/${item.product}`}
                            >
                              {item.name}
                            </Link>
                          </td>

                          <td>
                            <h2>€{item.price}</h2>
                          </td>

                          <td>
                            <Col md={8} className="text-center">
                              <Form.Control
                                as="select"
                                value={item.qty}
                                onChange={(e) => {
                                  dispatch(
                                    addToCart(
                                      item.product,
                                      Number(e.target.value)
                                    )
                                  );
                                }}
                              >
                                {[...Array(item.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </Form.Control>
                            </Col>
                          </td>

                          <td>
                            <Button
                              type="button"
                              variant="light"
                              onClick={() =>
                                removeFromCartHandler(item.product)
                              }
                            >
                              <i className="fas fa-times" />
                            </Button>
                          </td>

                          {/*<td>
                            <h2 className="custom-price">${item.price}</h2>
                            </td>*/}
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <table className="table cart-table table-responsive-md">
                  <tfoot>
                    <tr>
                      <td>
                        total price (
                        {`${cartItems.reduce(
                          (acc, item) => acc + item.qty,
                          0
                        )} items`}
                        ):
                      </td>
                      <td>
                        <h2 className="custom-total-price">
                          €
                          {cartItems
                            .reduce(
                              (acc, item) => acc + item.qty * item.price,
                              0
                            )
                            .toFixed(2)}
                        </h2>
                        <Button
                          type="button"
                          className="btn btn-custom-checkout-blue"
                          disabled={cartItems.length === 0}
                          onClick={checkoutHandler}
                        >
                          Proceed To Checkout
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CartPage;
