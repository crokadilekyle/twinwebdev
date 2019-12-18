import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Webapps from "./pages/Webapps";
import Websites from "./pages/Websites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import axios from "axios";

import "./styles.css";

class App extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    axios
      .get("https://twinwebdev.com/wp-json/menus/v1/menus/navigation")
      .then(res =>
        this.setState(
          {
            items: res.data.items
          },
          () => console.log(res.data)
        )
      )
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav items={this.state.items} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {this.state.items.map((item, i) => (
              <Route
                key={i}
                path={`/${item.title.replace(" ", "_").toLowerCase()}`}
              >
                <Webapps item={item.title} label={item.type_label} />
              </Route>
            ))}
            {/* <Route exact path="/">
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
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
