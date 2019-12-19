import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Page from "./components/Page";
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
        this.setState({
          items: res.data.items
        })
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
                <Page
                  item={item.title}
                  label={item.type_label}
                  id={parseInt(item.object_id)}
                />
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
