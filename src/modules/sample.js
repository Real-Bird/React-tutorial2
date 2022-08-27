import { createSlice } from "@reduxjs/toolkit";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

const sampleReducer = createSlice({
  name: "sample",
  initialState: {
    loading: {
      GET_POST: false,
      GET_USERS: false,
    },
    post: null,
    users: null,
  },
  reducers: {
    GET_POST: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: true,
      },
    }),
    GET_POST_SUCCESS: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
      post: action.payload,
    }),
    GET_POST_FAILURE: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_POST: false,
      },
    }),
    GET_USERS: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: true,
      },
    }),
    GET_USERS_SUCCESS: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
      users: action.payload,
    }),
    GET_USERS_FAILURE: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_USERS: false,
      },
    }),
  },
});

const {
  GET_POST,
  GET_POST_FAILURE,
  GET_POST_SUCCESS,
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
} = sampleReducer.actions;

export const getPost = createRequestThunk(
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  api.getPost
);

export const getUsers = createRequestThunk(
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  api.getUsers
);

export default sampleReducer;
