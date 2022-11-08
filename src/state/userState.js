import { createAction } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

const initialState = {
  name: null,
  lastname: null,
  email: null,
};

export default createReducer(initialState, {});
