import React, { Component } from "react";
import axios from "axios";

export default class Webapps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let self = this;
    axios
      .get(
        "https://twinwebdev.com/wp-json/wp/v2/web_application?_fields=title,content,link"
      )
      .then(function(response) {
        self.setState({
          data: response.data
        });
        // console.log(self.state.data[0].title);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Web Applications</h1>

        {this.state.data.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.title.rendered}</h2>
              <p dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
              <p>
                <a href={item.link}>See More</a>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
