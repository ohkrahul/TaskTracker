import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the search function passed from parent
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch(''); // Clear search results
  };

  return (
    <div className="relative mb-6">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <div className="pl-3 pr-2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchTerm}
          onChange={handleChange}
          className="py-2 px-2 w-full focus:outline-none text-gray-700"
        />
        {searchTerm && (
          <button 
            onClick={handleClear}
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;