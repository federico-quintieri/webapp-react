const BASE_URL = "http://localhost:3000/";
import { useNavigate } from "react-router-dom";

export function Card({ id, title, director, genre, release_year, image }) {
  // Ad on click del button apro la pagina dettagli ad un certo id
  const navigate = useNavigate();

  // Funzione per navigare alla pagina dettagli
  const goToDetails = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <div
      key={id}
      className="card max-w-sm bg-white shadow-lg rounded-lg p-6 m-4 transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      {/* Usa image per il path corretto */}
      <img
        src={`${BASE_URL}${image}`}
        alt={`${title}`}
        className="w-full object-contain rounded-lg mt-4"
      />
      <p className="text-gray-600 mt-2">
        <span className="font-medium">Director:</span> {director}
      </p>
      <p className="text-gray-600 mt-1">
        <span className="font-medium">Genre:</span> {genre}
      </p>
      <p className="text-gray-600 mt-1">
        <span className="font-medium">Release Year:</span> {release_year}
      </p>
      <button
        onClick={goToDetails}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mt-2 rounded"
      >
        Detail
      </button>
    </div>
  );
}
