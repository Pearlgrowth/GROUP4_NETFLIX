// SearchBox.jsx
import React, { useState } from 'react';
import './SearchBox.css';
const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className='input'>
      <input id='search'
      
        type="text"
        placeholder="Enter movie name here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
