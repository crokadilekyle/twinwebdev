import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Nav extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    axios
      .get(
        "https://twinwebdev.com/wp-json/wp/v2/pages/29?_fields=title,content"
      )
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
      <nav>
        <ul>
          <Link to="/">
            <li>twin</li>
          </Link>
          {this.props.items.map((item, i) => (
            <Link key={i} to={`/${item.title.replace(" ", "_").toLowerCase()}`}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
        {/* <ul>
          <Link to="/">
            <li>twin</li>
          </Link>
          <Link to="/webapps">
            <li>Web Applications</li>
          </Link>
          <Link to="/websites">
            <li>Websites</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul> */}
      </nav>
    );
  }
}
