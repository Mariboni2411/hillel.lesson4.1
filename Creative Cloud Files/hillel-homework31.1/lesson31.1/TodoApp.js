import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  clearTodos,
} from "./actions/todoActions";

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      setNewTodo("");
    }
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  return (
    <div>
      <h1>TODO App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />