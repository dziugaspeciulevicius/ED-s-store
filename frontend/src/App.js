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
import RoutingConstants from "./core/constants/routing";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Header />
        {/*<NavbarComponent />*/}
        <main className="pb-3">
          <Switch>
            <Route
              exact
              path={RoutingConstants.homepage}
              component={HomePage}
            />
            <Route
              exact
              path={RoutingConstants.homeWithPagination}
              component={HomePage}
            />
            <Route
              exact
              path={RoutingConstants.homeWithSearchAndPagination}
              component={HomePage}
            />
            <Route
              exact
              path={RoutingConstants.homeWithSearch}
              component={HomePage}
            />
            <Route path={RoutingConstants.product} component={ProductPage} />
            <Route path={RoutingConstants.cart} component={CartPage} />
            <Route path={RoutingConstants.login} component={LoginPage} />
            <Route path={RoutingConstants.register} component={RegisterPage} />
            <Route
              path={RoutingConstants.dashboard}
              component={DashboardPage}
            />
            <Route
              exact
              path={RoutingConstants.adminPanel}
              component={AdminPanel}
            />
            <Route
              exact
              path={RoutingConstants.userEdit}
              component={UserEditPage}
            />
            <Route
              exact
              path={RoutingConstants.productEdit}
              component={ProductEditPage}
            />
            <Route path={RoutingConstants.shipping} component={ShippingPage} />
            <Route path={RoutingConstants.payment} component={PaymentPage} />
            <Route
              path={RoutingConstants.placeOrder}
              component={PlaceOrderPage}
            />
            <Route path={RoutingConstants.order} component={OrderPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
