// Assuming your Todo and State types are defined as follows:
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
}

import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../slices/crud/crudSlice';

function TaskList() {
  const todos = useSelector((state: State) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleComplete(todo.id))}
          />
          {todo.title}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;