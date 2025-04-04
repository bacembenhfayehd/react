import React from 'react'

function TaskList({tasks,deleteTask}) {
  return (
    <ul>
        {tasks.map((task,indice) => (
            <li key={indice}>{task}<button onClick={() => deleteTask(indice)}>delete</button></li>
        ))}
    </ul>
  )
}

export default TaskList