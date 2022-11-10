import { createAction, createReducer } from '@reduxjs/toolkit';

export const categorySelected = createAction('CATEGORY_SELECTED');

export const categoryReducer = createReducer('', {
  [categorySelected]: (state, action) => {
    return (state = action.payload);
  },
});
