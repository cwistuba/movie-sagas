import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeEvery, put } from "redux-saga/effects";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import axios from "axios";

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  }
};

function* getMovies(action) {
  try {
    const response = yield axios.get("/api/movie");
    yield put({ type: "SET_MOVIES", payload: response.data });
  } catch (error) {
    console.warn("Error with getMovies:", error);
  }
  try {
    const response = yield axios.get("/api/genre");
    yield put({ type: "SET_GENRES", payload: response.data });
  } catch (error) {
    console.warn("Error with getGenres:", error);
  }
}

function* updateDescription(action) {
  try {
    yield axios.put(`/api/update/${action.payload.id}`, action.payload.update);
  } catch (error) {
    console.warn("Error with updating description:", error);
  }
}

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("GET_MOVIE", getMovies);
  yield takeEvery("UPDATE_DESCRIPTION", updateDescription);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
