// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import Header from './components/Header';
// import Login from './components/Login';
// import Register from './components/Register';
// import TaskDashboard from './components/TaskDashboard';
// // For Vite projects
// import.meta.env.VITE_API_URL

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check for user in localStorage
//     const userFromStorage = localStorage.getItem('user');
//     if (userFromStorage) {
//       setUser(JSON.parse(userFromStorage));
//     }
//     setLoading(false);
//   }, []);

//   // Set up axios defaults
//   // axios.defaults.baseURL = 'http://localhost:5000';
//   // In your client/src/App.js or where you set up axios
// // axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
// // In your React app
// axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

//   // Add axios interceptor for adding token to requests
//   axios.interceptors.request.use(
//     (config) => {
//       if (user && user.token) {
//         config.headers.Authorization = `Bearer ${user.token}`;
//       }
//       return config;
//     },
//     (error) => {
//       return Promise.reject(error);
//     }
//   );

//   // Add axios interceptor for handling token expiration
//   axios.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         localStorage.removeItem('user');
//         setUser(null);
//       }
//       return Promise.reject(error);
//     }
//   );

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <Header user={user} setUser={setUser} />
//         <div className="container mx-auto px-4 py-8 w-full max-w-6xl">
//           <Routes>
//             <Route 
//               path="/" 
//               element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
//             />
//             <Route 
//               path="/login" 
//               element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} 
//             />
//             <Route 
//               path="/register" 
//               element={user ? <Navigate to="/dashboard" /> : <Register setUser={setUser} />} 
//             />
//             <Route 
//               path="/dashboard" 
//               element={user ? <TaskDashboard user={user} /> : <Navigate to="/login" />} 
//             />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for user in localStorage
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
    setLoading(false);
  }, []);

  // Set up axios defaults
  // For Vite projects, use import.meta.env instead of process.env
  // axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  

  // axios.defaults.baseURL = 'http://localhost:5000';

  //Getting a server isshu comment this
  axios.defaults.baseURL = 'https://tasktracker-3om9.onrender.com';

  // and Use this 
  // axios.defaults.baseURL = 'http://localhost:5000';

  // Add axios interceptor for adding token to requests
  axios.interceptors.request.use(
    (config) => {
      if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add axios interceptor for handling token expiration
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('user');
        setUser(null);
      }
      return Promise.reject(error);
    }
  );

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header user={user} setUser={setUser} />
        <div className="container mx-auto px-4 py-8 w-full max-w-6xl">
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/dashboard" /> : <Register setUser={setUser} />}
            />
            <Route
              path="/dashboard"
              element={user ? <TaskDashboard user={user} /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;