import React, { useState } from 'react';
import { addTask } from './api';

function AddTaskForm({ fetchTasks }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to add the task with the specified title and date
      // You need to implement the addTask API function
      await addTask({ title, date });
      fetchTasks();
      setTitle('');
      setDate('');
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };

  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
    </div>
  );
}

export default AddTaskForm;