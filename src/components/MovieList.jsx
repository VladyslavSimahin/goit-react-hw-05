import { Link, useLocation } from "react-router-dom";
export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link
            to={{
              ...location,
              pathname: `/movies/${movie.id}`,
              state: location.state,
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
