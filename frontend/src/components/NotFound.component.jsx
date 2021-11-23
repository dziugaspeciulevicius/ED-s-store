import React from "react";

const NotFound = () => {
  return (
    <section className="cart-section section-b-space">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div>
              <div className="col-sm-12 empty-cart-cls text-center">
                <img
                  src={require(`${process.env.PUBLIC_URL}../assets/images/icon-page-not-found.jpg`)}
                  className="img-fluid mb-4"
                  alt="empty-cart-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
