import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  task: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialValue,
  reducers: {},
});

export default taskSlice.reducer;
