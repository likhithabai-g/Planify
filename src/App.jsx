import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
  const  [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  
  const addTask = (task) => {
    setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index));
  }

  return(
    <div>
      <h1>Planify</h1>
      <p>Plan it.Do it.Done</p>

      <Taskform addTask = {addTask}/>
      <TaskList  tasks = {tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}/>
      <ProgressTracker task = {tasks}/>

      <button>Clear all tasks</button>
    </div>
  )
}
