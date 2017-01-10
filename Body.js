import React from "react";
import Header from "./Header.js";

export default class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome everyone",
    };
  }
  updateTitle(title) {
    this.setState({title});
  }
  render() {
    return(
      <div>
        <Header updateTitle={this.updateTitle.bind(this)} title={this.state.title} />
      </div>
    );
  }
}
