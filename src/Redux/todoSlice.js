import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((task, index) => index !== action.payload);
    },
    updateTask: (state, action) => {
      const { index, newTask } = action.payload;
      state[index] = newTask;
    },
  },
});

export const { addTask, removeTask, updateTask } = todoSlice.actions;

export default todoSlice.reducer;
