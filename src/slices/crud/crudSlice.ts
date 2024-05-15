import { createSlice, PayloadAction, Middleware } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: Todo[] = JSON.parse(localStorage.getItem('todos') ?? '[]');

const crudSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), title: action.payload, completed: false });
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state[index].completed = !state[index].completed;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = crudSlice.actions;

export const localStorageMiddleware: Middleware = ({ getState }) => next => action => {
  const result = next(action);
  localStorage.setItem('todos', JSON.stringify(getState().todos));
  return result;
};

export default crudSlice.reducer;