import React from 'react';

function TaskItem({ task, deleteTask, updateTaskStatus }) {
  const handleDelete = () => {
    deleteTask(task._id);
  };

  const handleStatusChange = (e) => {
    const done = e.target.checked;
    updateTaskStatus(task._id, done);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleStatusChange}
      />
      <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;