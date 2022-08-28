import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: "loading",
  initialState: {},
  reducers: {
    START_LOADING: (state, action) => ([action.payload] = true),
    FINISH_LOADING: (state, action) => ([action.payload] = false),
  },
});

const { START_LOADING, FINISH_LOADING } = loading.actions;

export const startLoading = START_LOADING;

export const finishLoading = FINISH_LOADING;

export default loading;
