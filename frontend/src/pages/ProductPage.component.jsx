import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating.component";
import products from "../products";
import HomePage from "./HomePage.component";

import Breadcrumb from "../components/Breadcrumb.component";
// import DetailsTopTabs from "../components/details-top-tabs";
// import "react-tabs/style/react-tabs.scss";

import "../sass/pages/ProductPage.styles.scss";

const ProductPage = ({ match }) => {
  {
    /* for now products array find for each where the product _id is = to product url */
  }
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Breadcrumb parent={"Shop"} title={product.name} />
      <Link className="btn btn-custom-blue my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={3}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem className='product-description'>Description: {product.description}</ListGroupItem>
            {/*<ListGroupItem>Price: ${product.price}</ListGroupItem>*/}
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <div className="product-price">${product.price}</div>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <div className='stock-text'>
                    Availability:{" "}
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </div>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className="add-to-cart-button" type='button' disabled={product.countInStock === 0}>Add to cart</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {/*<section className="tab-product m-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <DetailsTopTabs item={product} />
            </div>
          </div>
        </div>
  </section>*/}
    </>
  );
};

export default ProductPage;
