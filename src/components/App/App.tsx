import { useState } from "react";
import { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/movieService";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import "./App.module.css";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (searchTopic: string) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const newMovies = await fetchMovies(searchTopic);
      setMovies(newMovies);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelect = (movie: Movie) => {
    console.log("Movie:", movie);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <strong>Loading movies...</strong>}
      {isError && <strong>Whoops, that's an error!!!</strong>}
      <MovieGrid movies={movies} onSelect={handleSelect} />
    </>
  );
}

export default App;
