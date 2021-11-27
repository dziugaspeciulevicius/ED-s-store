import "./App.css";
import { createTheme } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage.component";
import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/Navbar";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          {/*<ScrollToTop />*/}
          <Navbar />
          {/*<main className="pb-3">*/}
          <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              {/*<Route exact path="/page/:pageNumber" component={HomePage} />*/}
              {/*<Route*/}
              {/*  exact*/}
              {/*  path="/search/:keyword/page/:pageNumber"*/}
              {/*  component={HomePage}*/}
              {/*/>*/}
              {/*<Route exact path="/search/:keyword" component={HomePage} />*/}
              {/*<Route path="/product/:id" component={ProductPage} />*/}
              {/*<Route path="/cart/:id?" component={CartPage} />*/}
              {/*<Route path="/shop" component={ShopPage} />*/}
              {/*<Route path="/contact" component={ContactPage} />*/}
              {/*<Route path="/about" component={AboutPage} />*/}
              {/*<Route path="/login" component={LoginPage} />*/}
              {/*<Route path="/register" component={RegisterPage} />*/}
              {/*<Route path="/profile" component={DashboardPage} />*/}
              {/*<Route exact path="/admin" component={AdminPanel} />*/}
              {/*<Route*/}
              {/*  exact*/}
              {/*  path="/admin/user/:id/edit"*/}
              {/*  component={UserEditPage}*/}
              {/*/>*/}
              {/*<Route*/}
              {/*  exact*/}
              {/*  path="/admin/product/:id/edit"*/}
              {/*  component={ProductEditPage}*/}
              {/*/>*/}
              {/*<Route path="/shipping" component={ShippingPage} />*/}
              {/*<Route path="/payment" component={PaymentPage} />*/}
              {/*<Route path="/place-order" component={PlaceOrderPage} />*/}
              {/*<Route path="/order/:id" component={OrderPage} />*/}
              {/*<Route component={NotFound} />*/}
            </Switch>
          </main>
          {/*<Footer />*/}
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
