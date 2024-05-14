import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(localStorage.getItem('todos') ?? '') || [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), title: action.payload, completed: false });
      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo: any) => todo.id === action.payload);
      state[index].completed = !state[index].completed;
      localStorage.setItem('todos', JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      return state.filter((todo: any) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;