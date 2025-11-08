import { useState } from 'react'
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, { ...task, id: Date.now() }]);  
  }

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <TaskForm onAdd={addTask} />
      <div className="board">
        <Column title="A Fazer" tasks={tasks.filter(t => t.status === "todo")} />
        <Column title="Em Andamento" tasks={tasks.filter(t => t.status === "doing")} />
        <Column title="Concluído" tasks={tasks.filter(t => t.status === "done")} /> 
      </div> 
    </div>
  )
}
