import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { categoryReducer } from './category';
import { userReducer } from './user';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    category: categoryReducer,
  },
});
