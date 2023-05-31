import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/reducers/authSlice";
import messageReducer from "../features/Auth/reducers/messageSlice";

const reducer = {
  auth: authReducer,
  message: messageReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
