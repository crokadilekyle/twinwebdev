import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
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
        </ul>
      </nav>
    );
  }
}
