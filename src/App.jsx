import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchMovie from './components/Movies/FetchMovie'
import FilterByGenre from './components/Filter/FilterByGenre'
function App() {
  const [genres, setgenres] = useState([]);
  const [movies, setmovies] = useState([]);
  const [searchByGenre, setsearchByGenre] = useState();

  const getGenres = async () => {
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=d3adc528937c14b4044f9ee3bf46f522`;
    const response = await fetch(genresUrl);
    const results = await response.json();
    setgenres(results.genres);
  };

  const handleSearchByGenre = async ({ searchBy }) => {
    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${searchBy}&api_key=d3adc528937c14b4044f9ee3bf46f522`;
    const response = await fetch(url)
    const results = await response.json();
    console.log(results)
    setmovies(results.results)
  }

  const handleSelectChange = (event) => {
    setsearchByGenre(event.target.value)
  }

  useEffect(() => {
    getGenres()
  }, []);

  useEffect(() => {
    handleSearchByGenre({ searchBy: searchByGenre })
  }, [searchByGenre])

  return (
    <>
      <FilterByGenre genres={genres} searchByGenre={searchByGenre} handleSelectChange={handleSelectChange} />
      <FetchMovie />
    </>
  )
}

export default App
