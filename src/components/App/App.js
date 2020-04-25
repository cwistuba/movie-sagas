import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllMovies from "../AllMovies/AllMovies";
import Details_Page from "../Details_Page/Details_Page";
import Edit_Page from "../Edit_Page/Edit_Page";

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
          <Route exact path="/details/:id" component={Details_Page} />
          <Route exact path="/edit/:id" component={Edit_Page} />
        </Router>
      </div>
    );
  }
}

export default App;
