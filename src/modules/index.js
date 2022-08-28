import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import ReduxThunk from "redux-thunk";
import loading from "../lib/loading";
import sampleReducer, { sampleSaga } from "./sample";

const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    sample: sampleReducer.reducer,
    loading: loading.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, ReduxThunk),
});

export function* rootSaga() {
  yield all([sampleSaga()]);
}

export default store;
