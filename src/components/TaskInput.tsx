import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/crud/crudSlice";
import { PlusIcon } from "@heroicons/react/24/outline";

function TaskInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
};
  
  return (
    <div className="flex items-center h-20 max-h-20 cuBox px-6 mt-5">
      <input
      value={input}
      className="text-xl font-medium primary-font placeholder:text-textColor-gray1 w-full outline-none no-cancel-button" placeholder="Add new task"
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddTodo} className="p-2 bg-[#E9ECEF] rounded-lg">
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default TaskInput;
