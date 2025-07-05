import { useState } from "react";
import { Movie } from "../../types/movie";
import { fetchMovies } from "../../services/movieService";

import SearchBar from "../SearchBar/SearchBar";
import "./App.module.css";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const handleSearch = async (searchTopic: string) => {
    try {
      const newMovies = await fetchMovies(searchTopic);
      setMovies(newMovies);
    } catch (error) {
    } finally {
    }
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
    </>
  );
}

export default App;
