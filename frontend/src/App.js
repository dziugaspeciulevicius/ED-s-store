import React from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

const App = () => {
  return (
    <>
      <Header />
      {/*Adding a bootstrap class of padding top and bottom*/}
      <main>
        <Container><h1>Welcome</h1></Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
