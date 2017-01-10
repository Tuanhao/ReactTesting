import React from "react"

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.updateTitle(title);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input onChange={this.handleChange.bind(this)}/>
        <h2>Type in the box to change the title</h2>
      </div>
    );
  }
}
