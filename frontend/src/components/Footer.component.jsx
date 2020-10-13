import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo_bottom.svg";

import "../sass/components/Footer.styles.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-contant">
                <div className="footer-logo">
                  <span className="logo">
                    <img src={Logo} alt="logo" />
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam{" "}
                </p>
              </div>
            </div>
            <div className="col offset-xl-1">
              <div className="sub-title">
                <div className="footer-title">
                  <h6>SHOP</h6>
                </div>
                <div className="footer-contant">
                  <ul>
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                      >
                        MENS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                      >
                        WOMENS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${process.env.PUBLIC_URL}/left-sidebar/collection`}
                      >
                        FEATURED
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sub-title">
                <div className="footer-title">
                  <h6>CUSTOMER SERVICE</h6>
                </div>
                <div className="footer-contant">
                  <ul>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/contact`}>
                        CONTACT US
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/shipping&returns`}>
                        SHIPPING & RETURNS
                      </Link>
                    </li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/about`}>
                        ABOUT US
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sub-title">
                <div className="footer-title">
                  <h6>STORE INFORMATION</h6>
                </div>
                <div className="footer-contant">
                  <ul className="contact-list">
                    <li>
                      Streen name 123 st.
                      Vilnius, Lithuania, LT-12345
                    </li>
                    <li>
                      Call Us: +37012345678
                    </li>
                    <li>
                      Email Us:{" "}
                      <a href="mailto:dziugaspeciulevicius.com">
                        Support@edscloset.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
