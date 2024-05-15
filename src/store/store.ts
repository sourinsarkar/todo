import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { localStorageMiddleware } from '../slices/crud/crudSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },

  // Here I have added the localStorageMiddleware to save the todos to the local storage
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});