import React, { useState, useEffect } from "react";

const FetchMovie = () => {
  const [data, setdata] = useState({
    results: []
  });
  const getData = async () => {
    const api = 'https://api.themoviedb.org/3/movie/popular?api_key=d3adc528937c14b4044f9ee3bf46f522';
    const response = await fetch(api);
    const results = await response.json();
    setdata(results);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data)
  return data.results.map((movies) => {
    return (
      <>
      <div key= {movies.id}>
        <h1>{movies.title}</h1>
              <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
              <p>{movies.overview}</p>
            



      </div>
      </>
      
    );
  });
  
  
};

export default FetchMovie;
