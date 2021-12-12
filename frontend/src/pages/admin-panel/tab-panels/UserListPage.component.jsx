import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../components/Message.component";
import Spinner from "../../../components/Spinner.component";
import { deleteUser, listUsers } from "../../../actions/userActions";
import { useHistory } from "react-router-dom";

const UserListPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // user delete part of the state
  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete; // from state we get success and rename it to successDelete

  useEffect(() => {
    // if (!userInfo && !userInfo.isAdmin) {
    //   history.push("/login");
    // } else {
    //   dispatch(listUsers);
    // }
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteUserHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>LOYALTY POINTS</th>
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
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>{user.loyaltyPoints}</td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }} />
                  ) : (
                    <i className="fas fa-times" style={{ color: "red" }} />
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
                    <i className="fas fa-edit" />
                  </LinkContainer>{" "}
                  <i
                    className="fas fa-trash"
                    style={{
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteUserHandler(user._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListPage;
