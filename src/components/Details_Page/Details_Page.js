import React, { Component } from "react";

class Details_Page extends Component {
  clickBack = (event) => {
    this.props.history.push(`/`);
  };
  render() {
    return (
      <div>
        <button onClick={this.clickBack}>Back</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default Details_Page;
