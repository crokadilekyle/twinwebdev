import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>twin</li>
        </Link>
        {props.items.map((item, i) => (
          <Link key={i} to={`/${item.title.replace(" ", "_").toLowerCase()}`}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

