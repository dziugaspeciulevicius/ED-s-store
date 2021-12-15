import React, { useEffect } from "react";
import Spinner from "../../../components/Spinner.component";
import Message from "../../../components/Message.component";
import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../../../actions/orderActions";
import { useHistory } from "react-router-dom";

const MyOrdersPageComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      if (!user.name) {
        dispatch(listMyOrders());
      }
    } else {
      history.push("/login");
    }

    // if (!userInfo) {
    //   history.push("/login");
    // } else {
    //   if (!user.name) {
    //     dispatch(listMyOrders());
    //   }
    // }
  }, [dispatch, history, userInfo, user]);

  return (
    <>
      <h2>My Orders</h2>
      {loadingOrders ? (
        <Spinner />
      ) : errorOrders ? (
        <Message variant="danger">{errorOrders}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
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
                    <i className="fas fa-times" style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button className="btn-sm btn-custom-blue" variant="light">
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default MyOrdersPageComponent;
