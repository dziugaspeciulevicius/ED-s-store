import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer.component";
import Breadcrumb from "../components/Breadcrumb.component";
import CheckoutSteps from "../components/CheckoutSteps.component";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [firstName, setFirstName] = useState(shippingAddress.firstName);
  const [lastName, setLastName] = useState(shippingAddress.lastName);
  const [phone, setPhone] = useState(shippingAddress.phone);
  const [email, setEmail] = useState(shippingAddress.email);
  const [country, setCountry] = useState(shippingAddress.country);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        firstName,
        lastName,
        phone,
        email,
        country,
        address,
        city,
        postalCode,
      })
    );
    history.push('/payment')
  };

  return (
    <>
    <CheckoutSteps step1 step2/>
    <FormContainer>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone number"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="btn-custom-blue">
          Continue
        </Button>
      </Form>
    </FormContainer>
    </>
  );
};

export default ShippingPage;
