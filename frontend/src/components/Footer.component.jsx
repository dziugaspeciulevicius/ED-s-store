import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo_bottom.svg";

// import "../sass/components/Footer.styles.scss";

const Footer = (props) => {
  return (

    <footer class="footer">
      <div class="footer__addr">
        <span className="logo">
          <img src={Logo} alt="logo" />
        </span>

        <address>
          123, Vilnius, Lithuania
          <br />
          <a class="footer__btn" href="mailto:dziugaspeciulevicius@gmail.com">
            Email Us
          </a>
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Media</h2>

          <ul class="nav__ul">
            <li>
              <Link to="#">Online</Link>
            </li>

            <li>
              <Link to="#">Print</Link>
            </li>

            <li>
              <Link to="#">Alternative Ads</Link>
            </li>
          </ul>
        </li>

        <li class="nav__item nav__item--extra">
          <h2 class="nav__title">Technology</h2>

          <ul class="nav__ul nav__ul--extra">
            <li>
              <Link to="#">Hardware Design</Link>
            </li>

            <li>
              <Link to="#">Software Design</Link>
            </li>

            <li>
              <Link to="#">Digital Signage</Link>
            </li>

            <li>
              <Link to="#">Automation</Link>
            </li>

            <li>
              <Link to="#">Artificial Intelligence</Link>
            </li>

            <li>
              <Link to="#">IoT</Link>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">Legal</h2>

          <ul class="nav__ul">
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>

            <li>
              <Link to="#">Terms of Use</Link>
            </li>

            <li>
              <Link to="#">Sitemap</Link>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>&copy; 2020 Something. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
