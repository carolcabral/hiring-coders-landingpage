import React from "react";
import "./App.css";
import BannerBlackFriday from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>

        <BannerBlackFriday />

        <Footer />
      </Router>
    </>
  );
}

export default App;
