import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../moviesApi";
import Loader from "../Loader";
import Error from "../Error";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await fetchMovieCast(moviesId);
        setActor(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [moviesId]);

  return (
    <div className={css.castContainer}>
      {isLoading && <Loader />}
      {error && <Error />}
      <ul className={css.castList}>
        {actor.map((actorItem) => {
          return (
            <li key={actorItem.id} className={css.actorItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actorItem.profile_path}`}
                alt={actorItem.name}
                className={css.actorImage}
              />
              <div className={css.actorInfo}>
                <p className={css.actorName}>Name: {actorItem.name}</p>
                <p className={css.actorCharacter}>
                  Character: {actorItem.character}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
