import React, { useState, useEffect } from "react";

const FetchMovie = () => {
  const [data, setdata] = useState({
    results: [],
  });
  const [genres, setgenres] = useState([]);
  const getData = async () => {
    const api =
      "https://api.themoviedb.org/3/movie/popular?api_key=d3adc528937c14b4044f9ee3bf46f522";
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=d3adc528937c14b4044f9ee3bf46f522`;
    const response = await fetch(api);
    const results = await response.json();
    setdata(results);
  };

  const getGenres = async () => {
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=d3adc528937c14b4044f9ee3bf46f522`;
    const response = await fetch(genresUrl);
    const results = await response.json();
    setgenres(results.genres);
  };

  const retrieveGenreName = (genreIds) => {
    const genre = genreIds.map((id) => genres.filter((genre) => genre.id === id)[0].name);
    return genre;
  }

  useEffect(() => {
    getGenres()
    getData();
  }, []);

  console.log(data);
  return data.results.map((movies) => {
    console.log(movies)
    return (
        <div key={movies.id}>
          <h1>{movies.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt={movies.title}
          />
          <p>{movies.overview}</p>
          <p> {retrieveGenreName(movies.genre_ids).join(', ')}</p>
        </div>
    );
  });
};

export default FetchMovie;
