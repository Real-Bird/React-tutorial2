// /**
//  * action type
//  */
// const CHANGE_INPUT = "todos/CHANGE_INPUT";
// const INSERT = "todos/INSERT";
// const TOGGLE = "todos/TOGGLE";
// const REMOVE = "todos/REMOVE";

// /**
//  * input change 액션 함수
//  * @param {*} input
//  * @returns {void}
//  */
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// /**
//  * @type {number} insert가 호출될 때마다 1씩 더해짐
//  */
// let id = 3;

// /**
//  * todo 추가 액션 함수
//  * @param {string} text
//  * @returns {void}
//  */
// export const insert = (text) => ({
//   type: INSERT,
//   /**
//    * @inner
//    * @typedef {{id:number, text:string, done:boolean}} todo
//    */
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// /**
//  * todo 체크/언체크 액션 함수
//  * @param {number} id
//  * @returns {void}
//  */
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// /**
//  * todo 삭제
//  * @param {number} id
//  * @returns {void}
//  */
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// /**
//  * @typedef {{input:string, todos:todo[]}}
//  */
// const initialState = {
//   input: "",
//   todos: [
//     /**
//      * @inner
//      * @typedef {{id:number,text:string,done:boolean}} todo
//      */
//     {
//       id: 1,
//       text: "리덕스 기초 배우기",
//       done: true,
//     },
//     {
//       id: 2,
//       text: "리액트에서 리덕스 사용하기",
//       done: false,
//     },
//   ],
// };

// /**
//  *
//  * @param {{input:string, todos:todo[]}} state
//  * @param {{type:string, [key:string]:any}} action
//  * @returns
//  */
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return { ...state, input: action.input };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

// export default todos;

import { createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: {
    input: "",
    toDos: [],
  },
  reducers: {
    changeInput: (state, action) => ({ ...state, input: action.payload }),
    insert: (state, action) => {
      state.toDos.push({ text: action.payload, id: Date.now(), done: false });
    },
    toggle: (state, action) => {
      const isDone = state.toDos.find((toDo) => toDo.id === action.payload);
      isDone.done = !isDone.done;
    },
    remove: (state, action) => {
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const { changeInput, insert, toggle, remove } = toDos.actions;

export default toDos;
