
import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { getTasks } from './api';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response);
    } catch (error) {
      console.log('Error fetching tasks:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 id="app-title">My To-Do List</h1>
      <AddTaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default Dashboard;