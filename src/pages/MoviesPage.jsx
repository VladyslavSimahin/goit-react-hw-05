import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";
import MoviesFilter from "../components/MoviesFilter";
import { getMoviesTitleSearch } from "../moviesApi";
import Loader from "../components/Loader";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params] = useSearchParams();
  const moviesTitle = params.get("query") ?? "";

  useEffect(() => {
    async function fetchDataMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMoviesTitleSearch(moviesTitle);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataMovie();
  }, [moviesTitle]);

  const handleSubmit = async (query) => {
    params.set("query", query);
  };
  return (
    <div>
      <MoviesFilter onSubmit={handleSubmit} />
      <div>
        {isLoading && <Loader />}
        {error && <Error />}
        {movies.length === 0 && !isLoading && !error && moviesTitle && (
          <p>Please search for the correct movie :) </p>
        )}
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
