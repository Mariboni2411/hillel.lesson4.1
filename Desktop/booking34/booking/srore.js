import { configurestore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import {createReduxHistoryContext} 

export const store = configureStore({
    reducer: {
        router: ''
    },
    middleware: (getDefaultMiddleware) = ([...getDefaultMiddleware(), createSagaMiddleware()]),
)


