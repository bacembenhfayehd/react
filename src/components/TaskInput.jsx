import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [task, setTask] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="ecrire votre task"
      />
      <button type="submit">ajouter</button>
    </form>
  );
}

export default TaskInput;
