import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";
import HomePage from "./pages/HomePage.component";
import ProductPage from "./pages/ProductPage.component";
import CartPage from "./pages/CartPage.component";
import LoginPage from "./pages/LoginPage.component";
import RegisterPage from "./pages/RegisterPage.component";
import DashboardPage from "./pages/user-panel/DashboardPage.component";
import ShippingPage from "./pages/ShippingPage.component";
import PaymentPage from "./pages/PaymentPage.component";
import PlaceOrderPage from "./pages/PlaceOrderPage.component";
import OrderPage from "./pages/OrderPage.component";
import ScrollToTop from "./components/ScrollToTop.component";
import AdminPanel from "./pages/admin-panel/AdminPanel.component";
import UserEditPage from "./pages/UserEditPage.component";
import ProductEditPage from "./pages/ProductEditPage.component";
import NotFound from "./components/NotFound.component";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        <main className="pb-3">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/page/:pageNumber" component={HomePage} />
            <Route
              exact
              path="/search/:keyword/page/:pageNumber"
              component={HomePage}
            />
            <Route exact path="/search/:keyword" component={HomePage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={DashboardPage} />
            <Route exact path="/admin" component={AdminPanel} />
            <Route exact path="/admin/user/:id/edit" component={UserEditPage} />
            <Route
              exact
              path="/admin/product/:id/edit"
              component={ProductEditPage}
            />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/place-order" component={PlaceOrderPage} />
            <Route path="/order/:id" component={OrderPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
