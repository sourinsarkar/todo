import { createSlice, PayloadAction, Middleware } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Here the system reads the todos from the local storage. I was getting type error while
// using locaStorage here. So instead of using localStorage directly, I used JSON.parse
// And checked if the todos are present in the local storage or not.
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

// Here the system saves the todos to the local storage.
// I was getting type error while using locaStorage here. So instead of using localStorage directly,
// I used JSON.stringify to convert the todos to string and saved it to the local storage.
export const localStorageMiddleware: Middleware = ({ getState }) => next => action => {
  const result = next(action);
  localStorage.setItem('todos', JSON.stringify(getState().todos));
  return result;
};

export default crudSlice.reducer;