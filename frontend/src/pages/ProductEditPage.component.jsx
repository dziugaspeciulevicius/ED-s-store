import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
import FormContainer from "../components/FormContainer.component";
import { listProductDetails,updateProduct } from "../actions/productActions";

import Breadcrumb from "../components/Breadcrumb.component";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

const ProductEditPage = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const { loading: loadingUpdate, error:errorUpdate, success: successUpdate } = productUpdate;

  useEffect(() => {
      if(successUpdate) {
          dispatch({ type: PRODUCT_UPDATE_RESET})
          history.push('/admin')
      } else {
          // first we check if there's already a product, and check if productId matches
          if (!product.name || product._id !== productId) {
            // if it doesn't exist or match url we want to fetch info
            dispatch(listProductDetails(productId));
          } else {
            // set info
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setBrand(product.brand);
            setCategory(product.category);
            setGender(product.gender);
            setCountInStock(product.countInStock);
            setDescription(product.description);
          }

      }
  }, [dispatch, history, product, productId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand, 
        gender,
        category,
        description,
        countInStock
    }))
  };

  return (
    <>
      <Breadcrumb title={"Edit Product"} />
      <Link className="btn btn-custom-blue my-3" to="/admin">
        Go Back
      </Link>
      <FormContainer className="form-container">
        <h1>Edit product</h1>
        {loadingUpdate && <Spinner/>}
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
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Count In Stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                //   placeholder="Enter category"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Undefined">Undefined</option>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
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

export default ProductEditPage;
