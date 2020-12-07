import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product.component";
import { listProducts } from "../actions/productActions";

import Slider from "react-slick";
import "../sass/abstracts/slick.scss";
import "../sass/abstracts/slick-theme.scss";

import Image1 from "../assets/images/slide01.png";
import Image2 from "../assets/images/slide02.jpg";

import Paginate from "../components/Paginate.component";
import Spinner from "../components/Spinner.component";
import Message from "../components/Message.component";

import "../sass/pages/HomePage.styles.scss";

const HomePage = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <div className="latest-products">
    <div style={{ paddingTop: "48px" }}>
      <Slider {...settings}>
        <div className="slide">
          <img src={Image1} alt="image1" width="100%" />
          <h2 className="men-intro-header-slide">Welcome to ED's closet</h2>
          <h1 className="men-header-slide">MENs FASHION</h1>
          </div>
          <div className="slide">
          <img src={Image2} alt="image2" width="100%" />
          <h2 className="women-intro-header-slide">Welcome to ED's closet</h2>
          <h1 className="women-header-slide">WOMENs FASHION</h1>
        </div>
      </Slider>
    </div>
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
          <div className="grid-products">
            {/* Looping through products to list them in our homepage. For each product we want to show column and list our Product component for each product */}
            {/* Element needs a unique key prop, because we have access to each product */}
            {products.map((product) => (
              <div className="item">
                <Product product={product} />
              </div>
            ))}
          </div>
        )}
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
      </div>
    </>
  );
};

export default HomePage;
