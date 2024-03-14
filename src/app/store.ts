import { configureStore } from "@reduxjs/toolkit";
import listuserReducer from "../features/listUser/userSlice";

export const store = configureStore({
  reducer: {
    githubUser: listuserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
