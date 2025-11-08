export default function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.desc}</p>
      <p><strong>Responsável:</strong> {task.responsible}</p>
      <p><strong>Prazo:</strong> {task.deadline}</p>
    </div>
  );
}
