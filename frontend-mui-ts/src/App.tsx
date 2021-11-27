import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import RoutingConstants from "./core/constants/routing";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ResponsiveAppBar />
        <Router>
          <main>
            <Routes>
              <Route path={RoutingConstants.homepage} element={<HomePage />} />
              <Route
                path={RoutingConstants.product}
                element={<ProductPage />}
              />
            </Routes>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
