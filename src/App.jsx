import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";

export default function App() {
  return(
    <div>
      <h1>Planify</h1>
      <p>Plan it.Do it.Done</p>

      <Taskform />
      <TaskList />
      <ProgressTracker />

      <button>Clear all tasks</button>
    </div>
  )
}
