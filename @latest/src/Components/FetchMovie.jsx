import React, { useState, useEffect } from "react";

const FetchMovie = ({ searchTerm }) => {
  const [data, setData] = useState({
    results: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "d3adc528937c14b4044f9ee3bf46f522";
        const api = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
        const response = await fetch(api);

       

        const results = await response.json();
        setData(results);
      } catch (error) {
        
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <div>
      {data.results.length > 0 ? (
        data.results.map((movie) => (
          <div key={movie.id}>
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
            <p>{movie.popularity}</p>
            <p>{movie.id}</p>
          </div>
        ))
      ) : (
        <h2>{searchTerm ? "Movie not found" : "Enter a movie name to search"}</h2>
      )}
    </div>
  );
};

export default FetchMovie;
