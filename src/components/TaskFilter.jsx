// import React from 'react';

// const TaskFilter = ({ currentFilter, setCurrentFilter }) => {
//   return (
//     <div className="flex mb-6 bg-white shadow-md rounded-lg p-4">
//       <div className="font-bold text-gray-700 mr-4">Filter Tasks:</div>
//       <div className="flex space-x-4">
//         <button
//           className={`px-3 py-1 rounded-md ${
//             currentFilter === 'all' 
//               ? 'bg-blue-500 text-white' 
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//           onClick={() => setCurrentFilter('all')}
//         >
//           All
//         </button>
//         <button
//           className={`px-3 py-1 rounded-md ${
//             currentFilter === 'pending' 
//               ? 'bg-blue-500 text-white' 
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//           onClick={() => setCurrentFilter('pending')}
//         >
//           Pending
//         </button>
//         <button
//           className={`px-3 py-1 rounded-md ${
//             currentFilter === 'in-progress' 
//               ? 'bg-blue-500 text-white' 
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//           onClick={() => setCurrentFilter('in-progress')}
//         >
//           In-progress
//         </button>
//         <button
//           className={`px-3 py-1 rounded-md ${
//             currentFilter === 'completed' 
//               ? 'bg-blue-500 text-white' 
//               : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//           }`}
//           onClick={() => setCurrentFilter('completed')}
//         >
//           Completed
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TaskFilter;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskFilter = ({ currentFilter, setCurrentFilter }) => {
  const navigate = useNavigate();

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  return (
    <div className="bg-white shadow-md rounded-lg mb-6 overflow-hidden">
      <div className="flex border-b">
        <button
          onClick={() => handleFilterChange('all')}
          className={`flex-1 px-4 py-3 text-center font-medium text-sm border-b-2 ${
            currentFilter === 'all'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          All Tasks
        </button>
        
        <button
          onClick={() => handleFilterChange('pending')}
          className={`flex-1 px-4 py-3 text-center font-medium text-sm border-b-2 ${
            currentFilter === 'pending'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Pending
        </button>
        
        <button
          onClick={() => handleFilterChange('in-progress')}
          className={`flex-1 px-4 py-3 text-center font-medium text-sm border-b-2 ${
            currentFilter === 'in-progress'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          In Progress
        </button>
        
        <button
          onClick={() => handleFilterChange('completed')}
          className={`flex-1 px-4 py-3 text-center font-medium text-sm border-b-2 ${
            currentFilter === 'completed'
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;