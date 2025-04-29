// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const TaskDetails = ({ user }) => {
//   const [task, setTask] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     status: 'pending'
//   });

//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchTask = async () => {
//       try {
//         const res = await axios.get(`/api/tasks/${id}`);
//         setTask(res.data);
//         setFormData({
//           title: res.data.title,
//           description: res.data.description,
//           status: res.data.completed ? 'completed' : 'pending'
//         });
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch task details');
//         setLoading(false);
//       }
//     };

//     fetchTask();
//   }, [id]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const updateData = {
//         ...formData,
//         completed: formData.status === 'completed'
//       };
      
//       const res = await axios.put(`/api/tasks/${id}`, updateData);
//       setTask(res.data);
//       setIsEditing(false);
//     } catch (err) {
//       setError('Failed to update task');
//     }
//   };

//   const handleDelete = async () => {
//     if (window.confirm('Are you sure you want to delete this task?')) {
//       try {
//         await axios.delete(`/api/tasks/${id}`);
//         navigate('/dashboard');
//       } catch (err) {
//         setError('Failed to delete task');
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//         <strong className="font-bold">Error!</strong>
//         <span className="block sm:inline"> {error}</span>
//       </div>
//     );
//   }

//   if (!task) {
//     return (
//       <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
//         <strong className="font-bold">Not found!</strong>
//         <span className="block sm:inline"> Task not found.</span>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="mb-4 flex justify-between items-center">
//         <Link to="/dashboard" className="text-blue-500 hover:text-blue-700">
//           &larr; Back to Tasks
//         </Link>
//         <div>
//           {!isEditing && (
//             <button
//               onClick={() => setIsEditing(true)}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//             >
//               Edit
//             </button>
//           )}
//           <button
//             onClick={handleDelete}
//             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Delete
//           </button>
//         </div>
//       </div>

//       {isEditing ? (
//         <form onSubmit={handleUpdate} className="space-y-4">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//               Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
//             ></textarea>
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
//               Status
//             </label>
//             <select
//               id="status"
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             >
//               <option value="pending">Pending</option>
//               <option value="completed">Completed</option>
//             </select>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Save Changes
//             </button>
//             <button
//               type="button"
//               onClick={() => setIsEditing(false)}
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div>
//           <div className="mb-6">
//             <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
//             <span
//               className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
//                 task.completed
//                   ? 'bg-green-100 text-green-800'
//                   : 'bg-yellow-100 text-yellow-800'
//               }`}
//             >
//               {task.completed ? 'Completed' : 'Pending'}
//             </span>
//           </div>
//           <div className="mb-6">
//             <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
//             <p className="text-gray-600 whitespace-pre-line">{task.description || 'No description provided.'}</p>
//           </div>
//           <div className="border-t pt-4 text-sm text-gray-500">
//             <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
//             {task.updatedAt !== task.createdAt && (
//               <p>Last updated: {new Date(task.updatedAt).toLocaleString()}</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskDetails;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const TaskDetails = ({ user }) => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending'
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`/api/tasks/${id}`);
        setTask(res.data);
        setFormData({
          title: res.data.title,
          description: res.data.description,
          status: res.data.completed ? 'completed' : (res.data.status || 'pending')
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch task details');
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Determine completed status based on selected status
      const completed = formData.status === 'completed';
      
      const updateData = {
        ...formData,
        completed,
        // Make sure status is explicitly set
        status: formData.status
      };
      
      const res = await axios.put(`/api/tasks/${id}`, updateData);
      setTask(res.data);
      setIsEditing(false);
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`/api/tasks/${id}`);
        navigate('/dashboard');
      } catch (err) {
        setError('Failed to delete task');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Not found!</strong>
        <span className="block sm:inline"> Task not found.</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4 flex justify-between items-center">
        <Link to="/dashboard" className="text-blue-500 hover:text-blue-700">
          &larr; Back to Tasks
        </Link>
        <div>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Edit
            </button>
          )}
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>

      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
            <span
              className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
                task.completed
                  ? 'bg-green-100 text-green-800'
                  : task.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {task.completed 
                ? 'Completed' 
                : task.status === 'in-progress'
                ? 'In Progress'
                : 'Pending'}
            </span>
          </div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Description</h2>
            <p className="text-gray-600 whitespace-pre-line">{task.description || 'No description provided.'}</p>
          </div>
          <div className="border-t pt-4 text-sm text-gray-500">
            <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
            {task.updatedAt !== task.createdAt && (
              <p>Last updated: {new Date(task.updatedAt).toLocaleString()}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;