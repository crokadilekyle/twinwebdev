import React, { Component } from "react";
import axios from "axios";

export default class Webapps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // pageData: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    console.log(this.props.label);
    if (this.props.label === "Page") {
      // console.log(typeof(parseInt(this.props.id)))
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
    } else if (this.state.data && this.state.isLoaded) {
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
                {/* <p>
                  <a href={item.link}>See More</a>
                </p> */}
              </div>
            );
          })}
        </div>
      );
    }

    return <h3>Loading...</h3>;
  }
}
