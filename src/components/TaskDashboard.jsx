import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
  }, []);

  const filterTasks = useCallback((filter) => {
    switch (filter) {
      case 'completed':
        setFilteredTasks(tasks.filter(task => task.completed));
        break;
      case 'pending':
        setFilteredTasks(tasks.filter(task => task.status === 'pending'));
        break;
      case 'in-progress':
        setFilteredTasks(tasks.filter(task => task.status === 'in-progress'));
        break;
      default:
        setFilteredTasks(tasks);
    }
  }, [tasks]);

  // In TaskDashboard.jsx
useEffect(() => {
  filterTasks(currentFilter);
}, [tasks, currentFilter, filterTasks]);

// And to avoid creating a new function in each render, wrap filterTasks with useCallback


  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching tasks. Please try again.');
      setLoading(false);
    }
  };

  

  const addTask = async (task) => {
    try {
      const res = await axios.post('/api/tasks', task);
      setTasks([res.data, ...tasks]);
    } catch (err) {
      setError('Error adding task. Please try again.');
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const res = await axios.put(`/api/tasks/${id}`, taskData);
      setTasks(tasks.map(task => (task._id === id ? res.data : task)));
      setCurrentTask(null);
    } catch (err) {
      setError('Error updating task. Please try again.');
    }
  };

  const deleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`/api/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
      } catch (err) {
        setError('Error deleting task. Please try again.');
      }
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const res = await axios.put(`/api/tasks/${id}`, {
        completed: !completed,
        status: !completed ? 'completed' : 'pending'
      });
      setTasks(tasks.map(task => (task._id === id ? res.data : task)));
    } catch (err) {
      setError('Error updating task. Please try again.');
    }
  };

  

  // In TaskDashboard.jsx
return (
  <div className="w-full">
    <h2 className="text-2xl font-bold mb-6">Task Dashboard</h2>
    
    {error && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
        {error}
      </div>
    )}
    
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 w-full">
      <TaskForm 
        addTask={addTask} 
        currentTask={currentTask}
        updateTask={updateTask}
        setCurrentTask={setCurrentTask}
      />
    </div>
    
    <div className="w-full">
      <TaskFilter 
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
    </div>
    
    {loading ? (
      <div className="text-center py-6">
        <p className="text-gray-700">Loading tasks...</p>
      </div>
    ) : (
      <div className="w-full">
        <TaskList 
          tasks={filteredTasks} 
          deleteTask={deleteTask} 
          setCurrentTask={setCurrentTask}
          toggleComplete={toggleComplete}
        />
      </div>
    )}
  </div>
);
};

export default TaskDashboard;
