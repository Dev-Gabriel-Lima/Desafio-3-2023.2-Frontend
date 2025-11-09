import { useState } from 'react'
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, { ...task, id: Date.now() }]);  
  }

  function moveTask(id, newStatus) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  }

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <TaskForm onAdd={addTask} />
      <div className="board">
        <Column title="A Fazer" tasks={tasks.filter(t => t.status === "todo")} onMove={moveTask} />
        <Column title="Em Andamento" tasks={tasks.filter(t => t.status === "doing")} onMove={moveTask} />
        <Column title="Concluído" tasks={tasks.filter(t => t.status === "done")} onMove={moveTask} /> 
      </div> 
    </div>
  )
}
