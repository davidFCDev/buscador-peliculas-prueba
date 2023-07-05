import { useEffect, useState } from "react";
import withResults from "./mocks/with-results.json";
import withoutResults from "./mocks/no-results.json";
import "./App.css";

// const API_KEY_OMDB = '6c52a547';
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=${search}`;

function App() {
  const movies = withResults.Search;
  const hasMovies = movies?.length > 0;
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching");
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form" onSubmit={handleSearch}>
          <input name="title" placeholder="Avengers, matrix..." />
          <button>Search</button>
        </form>
      </header>

      <main>
        {hasMovies ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <img src={movie.Poster} alt={movie.Title} />
              </li>
            ))}
          </ul>
        ) : (
          withoutResults
        )}
      </main>
    </div>
  );
}

export default App;
