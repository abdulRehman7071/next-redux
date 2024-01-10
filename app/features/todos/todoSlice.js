import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo.id !== action.payload);
      console.log("🚀 ~ file: todoSlice.js:16 ~  state.todos:", state.todos);
    },
    completeTodo: (state, action) => {
    //   console.log(action.payloadnpm i);
      state.todos = state.todos.map((task, id) =>
        id === action.payload ? { ...task, completed: true } : task
      );
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = counterSlice.actions;

export default counterSlice.reducer;
