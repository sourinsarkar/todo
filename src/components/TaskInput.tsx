import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/crud/crudSlice';

function TaskInput() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TaskInput;