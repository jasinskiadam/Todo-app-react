import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosReducer from './features/todosSlice';
import roleReducer from './features/roleSlice';
import { todosApi } from './features/apiSlice';

const rootReducer = combineReducers({
  todosReducer,
  roleReducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
