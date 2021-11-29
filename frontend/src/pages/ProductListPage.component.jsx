import React, { useEffect } from "react";
import { withRouter } from "react-router";

import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message.component";
import Spinner from "../components/Spinner.component";
// import Paginate from "../components/Paginate.component";
import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";

const ProductListPage = ({ history, match }) => {
  // const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  // let history = useHistory();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingProductDelete,
    error: errorProductDelete,
    success: successProductDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingProductCreate,
    error: errorProductCreate,
    success: successProductCreate,
    product: createdProduct,
  } = productCreate;

  const deleteProductHandler = (id) => {
    if (window.confirm(`Delete product?`)) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successProductCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      // dispatch(listProducts("", pageNumber));
      dispatch(listProducts());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successProductDelete,
    successProductCreate,
    createdProduct,
  ]);

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1 className="py-3">Products</h1>
        </Col>
        <Col className="text-right">
          <Button
            className="btn-custom-blue py-3"
            onClick={createProductHandler}
          >
            Create Product
          </Button>
        </Col>
      </Row>
      {loadingProductDelete && <Spinner />}
      {errorProductDelete && (
        <Message variant="danger">{errorProductDelete}</Message>
      )}
      {loadingProductCreate && <Spinner />}
      {errorProductCreate && (
        <Message variant="danger">{errorProductCreate}</Message>
      )}
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>GENDER</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.gender}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer
                      to={`/admin/product/${product._id}/edit`}
                      style={{
                        color: " #667EEA",
                        cursor: "pointer",
                        // padding: "0 .4rem",
                      }}
                    >
                      <i className="fas fa-edit"></i>
                    </LinkContainer>{" "}
                    <i
                      className="fas fa-trash"
                      style={{
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => deleteProductHandler(product._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
        </>
      )}
    </>
  );
};

export default withRouter(ProductListPage);
