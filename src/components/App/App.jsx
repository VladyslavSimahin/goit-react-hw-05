import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailPage/MovieDetailsPage")
);
const Home = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("../../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const Navigation = lazy(() => import("../Navigation/Navigation"));

export default function App() {
  return (
    <>
      <div>
        <Navigation />
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:moviesId/*" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}
