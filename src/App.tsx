import React from "react";
import "./App.css";
import BannerBlackFriday from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/clients">
            <Clients />
          </Route>

          <Route path="/products">
            <Products />
          </Route>
        </Switch>
        <BannerBlackFriday />
        <Footer />
      </Router>
    </>
  );
}

export default App;
