import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './features/roleSlice';
import { todosApi } from './features/apiSlice';

const rootReducer = combineReducers({
  roleReducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(todosApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
