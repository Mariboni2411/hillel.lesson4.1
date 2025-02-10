import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
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
} from '../slices/todoSlice';

const