import React, { useState, useEffect } from "react";
import SearchBox from "./Components/searchbox";
import FetchMovie from "./Components/FetchMovie";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = (term) => {
 
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBox onSearch={searchMovie} />
      <FetchMovie searchTerm={searchTerm} />
    </div>
  );
};

export default App;
