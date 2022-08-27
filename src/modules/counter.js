// /**
//  * @type {string} INCREASE - counter 증가 액션 타입
//  */
// const INCREASE = "counter/INCREASE";
// /**
//  * @type {string} DECREASE - counter 감소 액션 타입
//  */
// const DECREASE = "counter/DECREASE";

// /**
//  * counter 증가 액션
//  * @returns {number}
//  */
// export const increase = () => ({ type: INCREASE });

// /**
//  * counter 감소 액션
//  * @returns {number}
//  */
// export const decrease = () => ({ type: DECREASE });

// /**
//  * @type {{number}}
//  */
// const initialState = {
//   number: 0,
// };

// /**
//  *
//  * @param {{number:number}} state
//  * @param {{type:string}} action
//  * @returns {{number:number}}
//  */
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// export default counter;

import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase: (state, action) => state + 1,
    decrease: (state, action) => state - 1,
  },
});

export const { increase, decrease } = counter.actions;

export const increaseAsync = (increase) => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = (decrease) => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

export default counter;
