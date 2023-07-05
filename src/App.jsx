import "./App.css";
import withResults from "./mocks/with-results.json";
import { Movies } from "./components/Movies";

// const API_KEY_OMDB = '6c52a547';
// const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=${search}`;

function App() {
  const movies = withResults.Search;

  return (
    <div className="page">
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className="form">
          <input name="title" placeholder="Avengers, matrix..." />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
