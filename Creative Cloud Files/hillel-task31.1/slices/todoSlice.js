import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodosRequest: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoRequest: (state) => {
      state.loading = true;
    },
    addTodoSuccess: (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    },
    addTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTodoRequest: (state) => {
      state.loading = true;
    },
    deleteTodoSuccess: (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    deleteTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    toggleTodoRequest: (state) => {
      state.loading = true;
    },
    toggleTodoSuccess: (state, action) => {
      state.loading = false;
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    toggleTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosFailure,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
  toggleTodoFailure,
} = todoSlice.actions;

export default todoSlice.reducer;