import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
import toDos from "./todos";

const store = configureStore({
  reducer: {
    counter: counter.reducer,
    toDos: toDos.reducer,
  },
});

export default store;
