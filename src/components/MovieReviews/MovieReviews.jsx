import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieReviewsFetch } from "../../moviesApi";
import Error from "../Error";
import Loader from "../Loader";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await movieReviewsFetch(movieId);
        setReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      {isLoading && <Loader />}
      {error && <Error />}
      {reviews.length > 0 && (
        <ul className={css.reviewsList}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviewItem}>
              <h3 className={css.author}>{author}</h3>
              <p className={css.content}>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && (
        <p className={css.noReviews}>
          We don't have any reviews for this movie
        </p>
      )}
    </div>
  );
}
