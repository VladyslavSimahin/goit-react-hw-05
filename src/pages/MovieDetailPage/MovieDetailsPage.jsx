import { Suspense, useEffect, useRef, useState } from "react";
import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import { getMovieId } from "../../moviesApi";
import css from "./MovieDetailPage.module.css";

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovieId(moviesId);
        setMovie(data);
      } catch (error) {
        setError(true);
      }
    }

    getData();
  }, [moviesId]);

  return (
    <div className={css.movieDetailsContainer}>
      <Link to={backLinkRef.current} className={css.goBackLink}>
        Go back
      </Link>

      {movie && (
        <div className={css.movieDetails}>
          <img
            src={
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
                : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
            }
            width="350"
            alt={movie.title}
            className={css.poster}
          />
          <h2 className={css.title}>{movie.title}</h2>
          <p className={css.userScore}>
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>
          <h3 className={css.overviewTitle}>Overview</h3>
          <p className={css.overview}>{movie.overview}</p>
          <h3 className={css.genresTitle}>Genres</h3>
          <div className={css.genres}>
            {movie.genres.map((el) => el.name).join(", ")}
          </div>
        </div>
      )}

      <div className={css.additionalInfo}>
        <h3 className={css.infoTitle}>Additional information</h3>
        <ul className={css.infoList}>
          <li>
            <NavLink to="cast" className={css.infoLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={css.infoLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <Suspense
        fallback={<div className={css.loading}>LOADING SUB COMPONENT...</div>}
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
