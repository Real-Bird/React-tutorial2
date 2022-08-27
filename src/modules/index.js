import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import loggerMiddleware from "../lib/loggerMiddleware";
import ReduxThunk from "redux-thunk";
import sampleReducer from "./sample";

const logger = createLogger();

const store = configureStore({
  reducer: {
    sample: sampleReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, ReduxThunk),
});

export default store;
