import React, { Component } from "react";
import { connect } from "react-redux";

class Edit_Page extends Component {
  state = {
    movieEdit: {
      title: "",
      description: "",
    },
  };
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIE" });
  }

  changeInput = (input) => (event) => {
    this.setState({
      movieEdit: {
        ...this.state.movieEdit,
        [input]: event.target.value,
      },
    });
  };

  clickCancel = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  clickSave = (id) => (event) => {
    this.props.dispatch({
      type: "UPDATE_DESCRIPTION",
      payload: { id: id, update: this.state.movieEdit },
    });
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    const id = Number(this.props.match.params.id);

    return (
      <div>
        <h1>Edit Movies</h1>
        <div>
          <button onClick={this.clickCancel}>Cancel</button>
          <button onClick={this.clickSave(id)}>Save</button>
          <br />
          <input
            type="text"
            placeholder="Update Movie Title"
            onChange={this.changeInput("title")}
          />
          <input
            type="text"
            placeholder="Update Description"
            onChange={this.changeInput("description")}
          />
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(Edit_Page);
