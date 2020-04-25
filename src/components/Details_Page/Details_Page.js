import React, { Component } from "react";

class Details_Page extends Component {
  clickBack = (event) => {
    this.props.history.push(`/`);
  };

  clickEdit = (event) => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.clickBack}>Back</button>
        <button onClick={this.clickEdit}>Edit</button>
      </div>
    );
  }
}

export default Details_Page;
