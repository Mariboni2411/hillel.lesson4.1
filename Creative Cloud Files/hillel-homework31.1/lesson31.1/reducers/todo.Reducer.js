import {
    FETCH_TODOS_SUCCESS,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    CLEAR_TODOS,
  } from "../actions/todoActions";
  
  const initialState = {
    todos: [],
  };
  
  export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODOS_SUCCESS:
        return { ...state, todos: action.payload };
  
      case ADD_TODO:
        return { ...state, todos: [...state.todos, action.payload] };
  
      case DELETE_TODO:
        return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
  
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          ),
        };
  
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
          ),
        };
  
      case CLEAR_TODOS:
        return { ...state, todos: [] };
  
      default:
        return state;
    }
  };