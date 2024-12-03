//   import { combineReducers, createStore } from "redux";
import todoReducer from "./Todo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tasks: todoReducer,
  },
});

export default store;
