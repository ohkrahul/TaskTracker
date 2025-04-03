import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({ setUser }) => {
  const navigate = useNavigate(); // Initialize navigate here
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const onSubmit = async e => {
  //   e.preventDefault();
  //   setError('');

  //   if (password !== password2) {
  //     setError('Passwords do not match');
  //     return;
  //   }

  //   setLoading(true);

  //   try {
  //     const response = await axios.post('/api/auth/register', {
  //       name,
  //       email,
  //       password
  //     });
      
  //     // Save user to localStorage
  //     localStorage.setItem('user', JSON.stringify(response.data));
  //     setUser(response.data);
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'An error occurred. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async e => {
    e.preventDefault();
    setError('');
  
    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }
  
    setLoading(true);
  
    try {
      await axios.post('/api/auth/register', {
        name,
        email,
        password
      });
      
      // Don't save user to localStorage or set in state
      // Instead, redirect to login page with a success message
      navigate('/login', { state: { message: 'Registration successful! Please log in.' } });
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
            minLength="6"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password2">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password2"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Confirm Password"
            required
            minLength="6"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <p>
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;