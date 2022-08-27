import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import loggerMiddleware from "../lib/loggerMiddleware";
import counter from "./counter";
import toDos from "./todos";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

const store = configureStore({
  reducer: {
    counter: counter.reducer,
    toDos: toDos.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, ReduxThunk),
});

export default store;
