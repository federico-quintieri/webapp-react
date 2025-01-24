import axios from "axios";

const BASE_URL = "http://localhost:3000/";

// Esporto funzione che fa chiamata index a backend
export const fetchMovies = async () => {
    const response = await axios.get(`${BASE_URL}movies`);
    return response.data;
}