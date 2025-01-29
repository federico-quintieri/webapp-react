import axios from "axios";

const BASE_URL = "http://localhost:3000/";

// Esporto funzione che fa chiamata index a backend
export const fetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}movies`);
  return response.data;
};

// Esporto funzione che fa chiamata show a backend
export const fetchOneMovie = async (id) => {
  const response = await axios.get(`${BASE_URL}movies/${id}`);
  return response.data;
};

// Esporto funzione che fa chiamata index al backend per le reviews
export const fetchReviews = async () => {
  const response = await axios.get(`${BASE_URL}movies/get/reviews`);
  return response.data;
};

// Esporto funzione per inviare chiamata post aggiunta recensione
// Da aggiungere fine url
export async function postReview(id, review) {
  const response = await axios.post(`${BASE_URL}movies/${id}/reviews`, review);
  return response;
}
