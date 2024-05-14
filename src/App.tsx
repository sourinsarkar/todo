import './App.css'
import Nav from './components/Nav';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return(
    <div className="m-auto max-w-lg px-6">
      <Nav />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App
