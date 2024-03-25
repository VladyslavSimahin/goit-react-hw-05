import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import { trendingMovies } from "../../moviesApi";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        const trendingFilms = await trendingMovies();
        setFilms(trendingFilms);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, []);

  return (
    <div className={css.homePage}>
      {error && <p className={css.error}>Something went wrong...</p>}
      <h1 className={css.title}>Trending today</h1>
      {isLoading ? (
        <div className={css.loader}>LOADING...</div>
      ) : (
        <MovieList movies={films} />
      )}
    </div>
  );
}
