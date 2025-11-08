import TaskCard from "./TaskCard";

export default function Column({ title, tasks }) {
  return(
    <div className="column">
      <h2>{title}</h2>
      {tasks.lenght === 0 ? (
      <p className="empty">Nenhuma Tarefa</p>
      ) : (
        tasks.map(task => <TaskCard key={task.id} task={task} />)
      )}
    </div>
  );
}
