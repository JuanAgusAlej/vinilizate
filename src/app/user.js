import { createAction, createReducer } from '@reduxjs/toolkit';

export const userLogin = createAction('USER_LOGIN');

export const userReducer = createReducer('', {
  [userLogin]: (state, action) => {
    return (state = action.payload);
  },
});
