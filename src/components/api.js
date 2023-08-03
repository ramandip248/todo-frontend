import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/tasks';

export const getTasks = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch tasks');
  }
};

export const addTask = async (task) => {
  try {
    const response = await axios.post(API_BASE_URL, task);
    return response.data;
  } catch (error) {
    console.log("error",error);
    throw new Error('Failed to add task');
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(`${API_BASE_URL}/${taskId}`);
  } catch (error) {
    throw new Error('Failed to delete task');
  }
};

export const updateTaskStatus = async (taskId, done) => {
  try {
    await axios.put(`${API_BASE_URL}/${taskId}`, { done });
  } catch (error) {
    throw new Error('Failed to update task status');
  }
};