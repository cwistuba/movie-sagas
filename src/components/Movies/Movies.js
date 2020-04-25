import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Movies extends Component {
  clickImage = (id) => (event) => {
    console.log(id);
    this.props.history.push(`/details/${id}`);
  };

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="movie_title">
              <h2>{this.props.movie.title}</h2>
            </div>
            <div className="movie_image">
              <img
                className="movie_item"
                onClick={this.clickImage(this.props.movie.id)}
                src={this.props.movie.poster}
                alt="poster"
              />
            </div>
            <div className="movie_image_desc">
              <p>{this.props.movie.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Movies);
