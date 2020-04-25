import React, { Component } from "react";
import { connect } from "react-redux";
import Movies from "../Movies/Movies";

class AllMovies extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIE" });
  }

  render() {
    const movie = this.props.store.movies.map((movie, index) => {
      return <Movies key={index} movie={movie} />;
    });

    return <div>{movie}</div>;
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(AllMovies);
