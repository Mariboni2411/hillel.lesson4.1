import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1">
      Welcome to our Booking App! Here you can find the best hotels for your trips.
    </Typography>
  </Container>
);

export default About;

import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { setDestinations, setHotels } from "../actions";

function* fetchDestinationsSaga() {
  const response = yield call(axios.get, "http://localhost:5000/destination");
  yield put(setDestinations(response.data));
}

function* fetchHotelsSaga(action) {
  const response = yield call(axios.post, "http://localhost:5000/hotels", action.payload);
  yield put(setHotels(response.data));
}
...;


import { combineReducers } from "redux";

const destinationsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_DESTINATIONS":
      return action.payload;
    default:
      return state;
  }
};

const hotelsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_HOTELS":
      return action.payload;
    default:
      return state;
  }
};



export default function* rootSaga() {
  yield takeEvery("FETCH_DESTINATIONS", fetchDestinationsSaga);
  yield takeEvery("FETCH_HOTELS", fetchHotelsSaga);
}

export const fetchDestinations = () => ({
    type: "FETCH_DESTINATIONS",
  });
  
  export const setDestinations = (data) => ({
    type: "SET_DESTINATIONS",
    payload: data,
  });
  
  export const fetchHotels = (payload) => ({
    type: "FETCH_HOTELS",
    payload,
  });
  
  export const setHotels = (data) => ({
    type: "SET_HOTELS",
    payload: data,
  });
  import { configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { ...rootReducer, router: routerReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export default store;
