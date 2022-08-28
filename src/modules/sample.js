import { createSlice } from "@reduxjs/toolkit";
import * as api from "../lib/api";
import { takeEvery, put, call } from "redux-saga/effects";
import createRequestThunk from "../lib/createRequestThunk";
import { finishLoading, startLoading } from "../lib/loading";

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

function* getPostSaga(action) {
  yield put(startLoading(GET_POST));
  try {
    const post = yield call(api.getPost, action.payload);
    yield put(GET_POST_SUCCESS(post.data));
  } catch (e) {
    yield put(GET_POST_FAILURE({ payload: e, error: true }));
  }
  yield put(finishLoading(GET_POST)); // 로딩 완료
}

export function* sampleSaga() {
  yield takeEvery(GET_POST, getPostSaga);
}

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
