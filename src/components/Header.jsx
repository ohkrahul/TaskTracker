import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  console.log("setUser : ",setUser);
  console.log("user : ",user);
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center max-w-4xl">
        <h1 className="text-2xl font-bold">Task Management</h1>
        <nav>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="hidden md:inline">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors">Login</Link>
              <Link to="/register" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;