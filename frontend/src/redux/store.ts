import userReducer from "./Slice/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Slice/chatSlice";
import chatInfoReducer from "./Slice/chatInfoSlice";

export const store = configureStore({
  reducer: {
    userSession: userReducer,
    chat: chatReducer,
    chatInfo: chatInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
