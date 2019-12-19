import React, { Component } from "react";
import axios from "axios";

export default class Page extends Component {
  state = {
    data: [],
    isLoaded: false
  };


  componentDidMount() {
    if (this.props.label === "Page") {
      axios
        .get(
          `https://twinwebdev.com/wp-json/wp/v2/pages/${
          this.props.id
          }?_fields=title,content`
        )
        .then(res =>
          this.setState({
            pageData: res.data,
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
    if (this.state.pageData && this.state.isLoaded) {
      return (
        <div>
          <h1>{this.state.pageData.title.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.pageData.content.rendered
            }}
          />
        </div>
      );
    } else if (this.state.isLoaded) {
      return (
        <div>
          <h1>{this.props.item}</h1>

          {this.state.data.map((item, i) => {
            return (
              <div key={i}>
                <h2>{item.title.rendered}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                />
              </div>
            );
          })}
        </div>
      );
    }

    return <h3>Loading...</h3>;
  }
}
