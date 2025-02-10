import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_TODOS, fetchTodosSuccess } from "../actions/todoActions";

function* fetchTodosSaga() {
  try {
    const todos = yield call(() =>
      Promise.resolve([
        { id: 1, text: "Learn Redux-saga", completed: false },
        { id: 2, text: "Build a TODO app", completed: true },
      ])
    );
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

export function* todoSagas() {
  yield takeEvery(FETCH_TODOS, fetchTodosSaga);
}