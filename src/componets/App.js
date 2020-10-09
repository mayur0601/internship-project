import React from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../componets/pages/Home";
import MainAbout from "../componets/pages/MainAbout";
import Footer from "./Footer";
import Social from "./Social";
import Lessons from "../componets/pages/Lessons";
import AchivementPage from "./pages/AchivementPage";
import axios from "axios";

axios.defaults.baseURL =
  "https://asia-south1-la-crescendo-academy.cloudfunctions.net/api";

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
            <MainAbout />
          </Route>
          <Route exact path="/achivements">
            {/* about us */}
            <AchivementPage />
          </Route>
          <Route exact path="/lessons">
            {/* about us */}
            <Lessons />
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
