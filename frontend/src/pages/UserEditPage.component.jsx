import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import FormContainer from "../components/FormContainer.component";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";

import Breadcrumb from "../components/Breadcrumb.component";

const UserEditPage = ({ match, history }) => {
  const userId = match.params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails; // from user reducer

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    // check for success update then we want to reset userUpdate state and redirect to user list
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/admin");
    } else {
      // we want to fire off our getUserDetails action, but first we check if there's already a user, and check if userId matches
      if (!user.name || user._id !== userId) {
        // if it doesn't exist or match url we want to fetch info
        dispatch(getUserDetails(userId));
        // if user is already there
      } else {
        // set info
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }

    // pass user so it updates
  }, [user, dispatch, history, userId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  return (
    <>
      <Breadcrumb title={"Edit user"} />
      <Link className="btn btn-custom-blue my-3" to="/admin">
        Go Back
      </Link>
      <FormContainer className="form-container">
        <h1>Edit user</h1>
        {loadingUpdate && <Spinner />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Spinner />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="isAdmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="btn-custom-blue">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditPage;
