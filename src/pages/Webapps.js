import React, { Component } from "react";
import axios from "axios";

export default class Webapps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://twinwebdev.com/wp-json/wp/v2/web_application?_fields=title,link,content"
      )
      .then(res =>
        this.setState({
          data: res.data,
          isLoaded: true
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <h1>Web Applications</h1>

          {this.state.data.map((item, i) => {
            return (
              <div key={i}>
                <h2>{item.title.rendered}</h2>
                <p
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                />
                <p>
                  <a href={item.link}>See More</a>
                </p>
              </div>
            );
          })}
        </div>
      );
    }

    return <h3>Loading...</h3>;
  }
}
