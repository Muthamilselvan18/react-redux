import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./Slice/taskSlice";

export const Store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
