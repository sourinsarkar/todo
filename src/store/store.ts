import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/crud/crudSlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});