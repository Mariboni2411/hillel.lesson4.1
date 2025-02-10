import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { todoReducer } from "./reducers/todoReducer";
import { todoSagas } from "./sagas/todoSagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSagas);

export default store;