import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllMovies from "../AllMovies/AllMovies";

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">PrimeTime Movies</h1>
          </header>
          <br />

          <Route exact path="/" component={AllMovies} />
        </Router>
      </div>
    );
  }
}

export default App;
