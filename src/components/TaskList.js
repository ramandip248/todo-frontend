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
      {tasks.length>0 ?tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={handleDelete}
          updateTaskStatus={handleTaskStatusChange}
        />
      )):<h5>no data available</h5>}
    </ul>
    </div>
  );
}

export default TaskList;