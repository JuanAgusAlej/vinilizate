import { configureStore } from "@reduxjs/toolkit";
import userState from "./userState";

const store = configureStore({
  reducer: {
    user: userState,
  },
});

export default store;
