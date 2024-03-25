import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGRlZTVlMmFkYzEyODYyN2MxY2M4N2I1YjRhMmE4NSIsInN1YiI6IjY2MDBjMWFkNDU5YWQ2MDE2NGY4OTc2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C9TmOb-CzyDmskg9M0YDhnFr6zbcyP67fYF2UXZMrgI",
  },
};
export async function trendingMovies() {
  const { data } = await axios.get("/trending/movie/day", options);
  return data.results;
}

export async function getMovieId(id) {
  const { data } = await axios.get(`/movie/${id}`, options);
  return data;
}

export async function fetchMovieCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, options);
  return data.cast;
}

export async function movieReviewsFetch(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);
  return data.results;
}
export async function getMoviesTitleSearch(search) {
  const { data } = await axios.get(`/search/movie?query=${search}`, options);
  return data.results;
}
