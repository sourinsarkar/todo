import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../slices/crud/crudSlice';
import { TrashIcon } from '@heroicons/react/24/outline';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface State {
  todos: Todo[];
}


function TaskList() {
  const todos = useSelector((state: State) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.length >= 1 ? <h2 className="text-base font-semibold primary-font px-6 mt-5">All Tasks</h2> : null}
      <ul>
        {todos.map((todo: Todo) => (
          // (Bonus work) Here the code to toggle the task as completed and delete the task
          <li key={todo.id} className="cuBox flex items-center justify-between h-20 max-h-20 cuBox px-6 mt-5 text-xl font-medium primary-font">
            <p>
              {todo.title}
            </p>

            <div className="flex items-center gap-x-2">
              <button onClick={() => dispatch(toggleComplete(todo.id))} className="p-2 bg-[#E9ECEF] rounded-lg text-sm md:text-base">
                {todo.completed ? "Completed" : "Mark as completed"}
              </button>
              
              <button onClick={() => dispatch(deleteTodo(todo.id))} className="p-2 bg-[#E9ECEF] rounded-lg">
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;