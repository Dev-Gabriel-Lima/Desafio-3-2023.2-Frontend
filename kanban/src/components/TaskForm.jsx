import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [responsible, setResponsible] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("todo");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ title, desc, responsible, deadline, status });
    setTitle("");
    setDesc("");
    setResponsible("");
    setDeadline("");
    setStatus("todo");
    }
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Descrição" value={desc} onChange={e => setDesc(e.target.value)} />
      <input placeholder="Responsável" value={responsible} onChange={e => setResponsible(e.target.value)} />
      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="todo">A Fazer</option>
        <option value="doing">Em Andamento</option>
        <option value="done">Concluído</option>
      </select>
      <button type="submit">Criar</button>
    </form>
  );
}
