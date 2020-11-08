import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.component";
import { listProducts } from "../actions/productActions";

import Spinner from "../components/Spinner.component";
import Message from "../components/Message.component";

import "../sass/pages/HomePage.styles.scss";

const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div className="latest-products">
        <h1 className="latest-products--title">Latest products</h1>
        {/*if loading we write loading, else if there's an error, we want to show error, else we want to show row with data*/}
        {loading ? (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Spinner />
          </div>
        ) : error ? (
          <Message variant="danger"> {error} </Message>
        ) : (
          <div className='grid-products'>
            {/* Looping through products to list them in our homepage. For each product we want to show column and list our Product component for each product */}
            {/* Element needs a unique key prop, because we have access to each product */}
            {products.map((product) => (
              <div className='item'><Product product={product}/></div>

            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
