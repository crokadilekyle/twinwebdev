import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Webapps from "./pages/Webapps";
import Websites from "./pages/Websites";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/webapps">
            <Webapps />
          </Route>
          <Route path="/websites">
            <Websites />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
