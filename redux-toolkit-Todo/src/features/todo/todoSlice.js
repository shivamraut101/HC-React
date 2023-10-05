import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { todo } from 'node:test';

const initialState = {
  todos: [],
  // todos:[{id:1,text:"new",edit:false}]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        edit: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      // Find the todo item with the given id and update its text
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text, edit: !todo.edit } : todo
      );
      state.todos = updatedTodos;
      console.log("update");
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        console.log(
          "Update for todo with ID:",
          id,
          "New edit value:",
          todo.edit
        );
      } else {
        console.log("Todo not found with ID:", id);
      }
    },
    toggleEdit: (state, action) => {
      console.log("toggle");
      const { id } = action.payload;
      const toggle = state.todos.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      );
      console.log("toggle complete");
      state.todos = toggle;
      // Check if the edit property was toggled for the specific todo
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        console.log(
          "Toggle edit for todo with ID:",
          id,
          "New edit value:",
          todo.edit
        );
      } else {
        console.log("Todo not found with ID:", id);
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleEdit } =
  todoSlice.actions;
export default todoSlice.reducer;
