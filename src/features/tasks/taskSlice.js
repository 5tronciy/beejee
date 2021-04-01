import { createSlice } from "@reduxjs/toolkit";

let nextTaskId = 0;

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    {
      id: 0,
      userName: "Ihar",
      email: "email@email",
      text: "todo",
      completed: false,
    },
  ],

  reducers: {
    addTask: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      prepare(text) {
        return { payload: { text, id: nextTaskId++ } };
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo, count } = tasksSlice.actions;

export default tasksSlice.reducer;
