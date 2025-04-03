import React from 'react';

const TaskFilter = ({ currentFilter, setCurrentFilter }) => {
  return (
    <div className="flex mb-6 bg-white shadow-md rounded-lg p-4">
      <div className="font-bold text-gray-700 mr-4">Filter Tasks:</div>
      <div className="flex space-x-4">
        <button
          className={`px-3 py-1 rounded-md ${
            currentFilter === 'all' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentFilter('all')}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            currentFilter === 'pending' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentFilter('pending')}
        >
          Pending
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            currentFilter === 'in-progress' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentFilter('in-progress')}
        >
          In-progress
        </button>
        <button
          className={`px-3 py-1 rounded-md ${
            currentFilter === 'completed' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setCurrentFilter('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;