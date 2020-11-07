import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

import HomePage from "./pages/HomePage.component";
import ProductPage from "./pages/ProductPage.component";
import ShopPage from "./pages/ShopPage.component";
import ContactPage from "./pages/ContactPage.component";
import AboutPage from "./pages/AboutPage.component";
import CartPage from "./pages/CartPage.component";
import LoginPage from "./pages/LoginPage.component";
import RegisterPage from "./pages/RegisterPage.component";
import ProfilePage from "./pages/ProfilePage.component";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pb-3">
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart/:id?" component={CartPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
