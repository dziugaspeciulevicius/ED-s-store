import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating.component";

import "../sass/components/Product.styles.scss";

// We can destructure product that we passed in so we can take our product directly
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img className={"image"} src={product.image} variant="top" />
        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="h3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as={"h3"}>€{product.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Product;
