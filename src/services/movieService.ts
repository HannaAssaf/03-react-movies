import axios from "axios";
import { Movie } from "../types/movie";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const TMDB_KEY = import.meta.env.VITE_TMDB_KEY;
interface FetchMoviesResp {
  results: Movie[];
  title: string;
  release_date: string;
  vote_average: number;
  page: number;
}

export const fetchMovies = async (
  topic: string,
  page = 1
): Promise<Movie[]> => {
  const config = {
    params: {
      topic,
      include_adult: false,
      language: "en-US",
      page,
    },
    headers: {
      Authorization: `Bearer ${TMDB_KEY}`,
    },
  };

  const response = await axios.get<FetchMoviesResp>(`/search/movie`, config);
  return response.data.results;
};
