import React from 'react';

const TaskItem = ({ task, deleteTask, setCurrentTask, toggleComplete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${task.completed ? 'border-l-4 border-green-500' : ''}`}>
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-4">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task._id, task.completed)}
            className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <div>
            <h3 className={`text-xl font-semibold mb-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </h3>
            {task.description && (
              <p className={`text-gray-700 mb-3 ${task.completed ? 'text-gray-400' : ''}`}>
                {task.description}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(task.status)}`}>
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </span>
              <span className="text-sm text-gray-500">
                Created: {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setCurrentTask(task)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            onClick={() => deleteTask(task._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;