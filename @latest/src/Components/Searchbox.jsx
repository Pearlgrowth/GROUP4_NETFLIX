import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Call the onSearch function with the search term
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter movie name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search Movie</button>
    </div>
  );
};

export default SearchBox;
