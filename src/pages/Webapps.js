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
    console.log(this.props.item);
    if (this.props.label === "Page") {
      axios
        .get(
          `https://twinwebdev.com/wp-json/wp/v2/pages/${parseInt(
            this.props.id,
            10
          )}?_fields=title,link,content`
        )
        .then(res =>
          this.setState({
            data: res.data,
            isLoaded: true
          })
        )
        .catch(err => console.log(err));
    } else {
      axios
        .get(
          `https://twinwebdev.com/wp-json/wp/v2/${this.props.item
            .replace(" ", "_")
            .toLowerCase()}?_fields=title,link,content`
        )
        .then(res =>
          this.setState({
            data: res.data,
            isLoaded: true
          })
        )
        .catch(err => console.log(err));
    }
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <h1>{this.props.item}</h1>

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
