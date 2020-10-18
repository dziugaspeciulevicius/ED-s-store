import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

import HomePage from "./pages/HomePage.component";
import ProductPage from "./pages/ProductPage.component";
import ShopPage from "./pages/ShopPage.component";
import ContactPage from "./pages/ContactPage.component";
import AboutPage from "./pages/AboutPage.component";
import CartPage from "./pages/CartPage.component";
import SignInPage from "./pages/SignInPage.component";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/signin" component={SignInPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
