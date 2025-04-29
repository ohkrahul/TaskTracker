// import React from 'react';
// import TaskItem from './TaskItem';

// const TaskList = ({ tasks, deleteTask, setCurrentTask, toggleComplete }) => {
//   if (tasks.length === 0) {
//     return (
//       <div className="bg-white shadow-md rounded-lg p-6 text-center">
//         <p className="text-gray-700">No tasks found. Add a task to get started.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {tasks.map(task => (
//         <TaskItem
//           key={task._id}
//           task={task}
//           deleteTask={deleteTask}
//           setCurrentTask={setCurrentTask}
//           toggleComplete={toggleComplete}
//         />
//       ))}
//     </div>
//   );
// };

// export default TaskList;
import React from 'react';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, deleteTask, setCurrentTask, toggleComplete, viewTaskDetails }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-gray-500">No tasks found. Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <li key={task._id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-grow">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task._id, task.completed)}
                  className="h-5 w-5 text-blue-600 mt-1"
                />
                <div className="flex-grow">
                  {/* Make the task title clickable to view details */}
                  <Link 
                    to={`/tasks/${task._id}`}
                    className={`text-lg font-medium ${
                      task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                    }`}
                  >
                    {task.title}
                  </Link>
                  
                  {task.description && (
                    <p className={`text-sm ${
                      task.completed ? 'text-gray-400' : 'text-gray-600'
                    } mt-1 line-clamp-2`}>
                      {task.description}
                    </p>
                  )}
                  
                  <div className="mt-2 flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.completed 
                        ? 'bg-green-100 text-green-800' 
                        : task.status === 'in-progress' 
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.completed ? 'Completed' : task.status || 'Pending'}
                    </span>
                    
                    <span className="text-xs text-gray-500">
                      Created: {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => setCurrentTask(task)}
                  className="text-blue-600 hover:text-blue-800"
                  title="Edit task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                
                <button
                  onClick={() => deleteTask(task._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                
                <button
                  onClick={() => viewTaskDetails(task._id)}
                  className="text-gray-600 hover:text-gray-800"
                  title="View details"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;