import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

const initialValue = {
  tasks: [],
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const fetchTasks = createAsyncThunk(
  "task/fetchTasks",
  async (__dirname, isRejectedWithValue) => {
    try {
      return await fetch("http://localhost:6371/tasks").then((res) =>
        res.json()
      );
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  }
);

export default taskSlice.reducer;
