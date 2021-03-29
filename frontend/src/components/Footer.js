import React from "react";
import "../sass/components/Footer.styles.scss";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="single_footer">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Simply dummy text</a>
                </li>
                <li>
                  <a href="#">The printing and typesetting </a>
                </li>
                <li>
                  <a href="#">Standard dummy text</a>
                </li>
                <li>
                  <a href="#">Type specimen book</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single_footer single_footer_address">
              <h4>Page Link</h4>
              <ul>
                <li>
                  <a href="#">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="#">Simply dummy text</a>
                </li>
                <li>
                  <a href="#">The printing and typesetting </a>
                </li>
                <li>
                  <a href="#">Standard dummy text</a>
                </li>
                <li>
                  <a href="#">Type specimen book</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="social_profile">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/dziugaspeciulevicius/">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/dziugaspeciulevicius">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
