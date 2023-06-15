import React from 'react';
import TaskItem from './TaskItem';
import { deleteTask, updateTaskStatus } from './api';

function TaskList({ tasks, fetchTasks }) {
  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };

  const handleTaskStatusChange = async (taskId, done) => {
    try {
      await updateTaskStatus(taskId, done);
      fetchTasks();
    } catch (error) {
      console.log('Error updating task status:', error);
    }
  };

  return (
    <div className='taskList-container'>
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={handleDelete}
          updateTaskStatus={handleTaskStatusChange}
        />
      ))}
    </ul>
    </div>
  );
}

export default TaskList;