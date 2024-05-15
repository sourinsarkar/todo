import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { localStorageMiddleware } from '../slices/crud/crudSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});