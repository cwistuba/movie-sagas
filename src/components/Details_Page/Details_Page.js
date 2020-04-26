import React, { Component } from "react";
import { connect } from "react-redux";

class Details_Page extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "GET_MOVIES" });
  }
  clickBack = (event) => {
    this.props.history.push(`/`);
  };

  clickEdit = (event) => {
    this.props.history.push(`/edit/${this.props.match.params.id}`);
  };

  render() {
    const id = Number(this.props.match.params.id);
    console.log("ID", id);

    const filteredMovie = this.props.store.movies.filter((movie) => {
      return movie.id === id;
    });
    console.log("filteredMovies:", filteredMovie);

    const filteredGenre = this.props.store.genres.filter((genre) => {
      return genre.id === id;
    });

    return (
      <div>
        <button onClick={this.clickBack}>Back</button>
        <button onClick={this.clickEdit}>Edit</button>
        <div>
          {filteredMovie.map((movie) => {
            return (
              <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
              </div>
            );
          })}
        </div>
        <br />
        <h3>Genres</h3>
        {filteredGenre.map((genre) => {
          return (
            <div key={genre.id}>
              <div>
                {genre.genre.map((type, index) => {
                  return (
                    <div key={index}>
                      <i>{type}</i>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });
export default connect(mapStoreToProps)(Details_Page);
