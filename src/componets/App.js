import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../componets/pages/Home";
import Footer from "./Footer";
import Social from "./Social";
function App() {
  return (
    <div className="App">
      <Router>
        {/* header */}
        <Social />
        <Navbar />
        <Switch>
          <Route exact path="/">
            {/* homepage */}

            <Home />
          </Route>
          <Route exact path="/about">
            {/* about us */}
            <h2>about us</h2>
          </Route>
          <Route exact path="/achivements">
            {/* about us */}
            <h2>achivements</h2>
          </Route>
          <Route exact path="/lessons">
            {/* about us */}
            <h2>lessons</h2>
          </Route>
        </Switch>
        <Route to="/contact">
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
