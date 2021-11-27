import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { ThemeProvider } from "@emotion/react";
// import Navbar from "./components/Navbar";
import theme from "./theme";
// import * as RoutingConstants from "./core/constants/routing";
import RoutingConstants from "./core/constants/routing";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          {/*<Navbar />*/}
          <main>
            <Routes>
              <Route path={RoutingConstants.homepage} element={<HomePage />} />
              <Route
                path={RoutingConstants.product}
                element={<ProductPage />}
              />
            </Routes>
          </main>
          {/*<Footer />*/}
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
