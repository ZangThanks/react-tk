import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./src/features/taskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
