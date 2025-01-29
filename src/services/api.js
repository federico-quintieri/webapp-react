import axios from "axios";

const BASE_URL = "http://localhost:3000/";

// Esporto funzione che fa chiamata index a backend
export const fetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}movies`);
  return response.data;
};

// Esporto funzione che fa chiamata show a backend
export const fetchOneMovie = async (movieSlug) => {
  const response = await axios.get(`${BASE_URL}movies/${movieSlug}`);
  return response.data;
};

// Esporto funzione che fa chiamata index al backend per le reviews
export const fetchReviews = async (movieSlug) => {
  const response = await axios.get(`${BASE_URL}movies/${movieSlug}/reviews`);
  return response.data;
};

// Esporto funzione per inviare chiamata post aggiunta recensione
// Da aggiungere fine url
// services/api.js
// services/api.js
// services/api.js
export const postReview = async (movieSlug, reviewData) => {
  const result = await axios.post(
    `${BASE_URL}movies/${movieSlug}/reviews`,
    reviewData
  );
  return result;
};
