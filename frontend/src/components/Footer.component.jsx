import React from "react";
import "../sass/components/Footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="social_profile">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/dziugaspeciulevicius/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/dziugaspeciulevicius">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
