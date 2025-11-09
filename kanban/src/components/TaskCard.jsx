export default function TaskCard({ task, onMove }) {
  const { id, title, desc, responsible, deadline, status } = task;

  function handleMove(direction) {
    const nextStatus =
      direction === "left"
        ? status === "doing" ? "todo" : status === "done" ? "doing" : null
        : status === "todo" ? "doing" : status === "doing" ? "done" : null;

    if (nextStatus) onMove(id, nextStatus);
  }

  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <p><strong>Responsável:</strong> {responsible}</p>
      <p><strong>Prazo:</strong> {deadline}</p>

      <div className="task-buttons">
        {status !== "todo" && (
          <button onClick={() => handleMove("left")}>←</button>
        )}
        {status !== "done" && (
          <button onClick={() => handleMove("right")}>→</button>
        )}
      </div>
    </div>
  );
}

