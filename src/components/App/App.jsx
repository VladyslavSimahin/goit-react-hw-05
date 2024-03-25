import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MovieDetailsPage from "../../pages/MovieDetailPage/MovieDetailsPage";

import NotFoundPage from "../../pages/NotFoundPage";
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReviews/MovieReviews";
import Navigation from "../Navigation/Navigation";
import Home from "../../pages/HomePage/HomePage";
import MoviePage from "../../pages/MoviesPage";

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
