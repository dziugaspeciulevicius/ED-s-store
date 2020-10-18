import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating.component";
import products from "../products";
import HomePage from "./HomePage.component";

const ProductPage = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <a className="btn btn-light my-3" href="/">
        Go Back
      </a>
    </>
  );
};

export default ProductPage;
