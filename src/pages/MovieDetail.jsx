import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchOneMovie } from "../services/api";

export function MovieDetail() {
  const { id } = useParams(); // Recupero l'ID dalla URL

  // Utilizzo useQuery per recuperare i dettagli del film
  const { data: movie, isLoading, isError, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchOneMovie(id), // Passo l'ID al fetch
  });

  // Gestione del caricamento
  if (isLoading) {
    return <div className="text-center mt-10">Caricamento...</div>;
  }

  // Gestione degli errori
  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        Errore: {error.message || "Impossibile recuperare i dettagli del film"}
      </div>
    );
  }

  // Se il film non esiste
  if (!movie) {
    return (
      <div className="text-center mt-10">
        Nessun dettaglio trovato per il film con ID: {id}
      </div>
    );
  }

  // Layout per visualizzare i dettagli del film
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{movie.title}</h1>
        <img
          src={`http://localhost:3000/${movie.image}`}
          alt={movie.title}
          className="w-full rounded-lg mb-4"
        />
        <p className="text-gray-600">
          <span className="font-medium">Director:</span> {movie.director}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Genre:</span> {movie.genre}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Release Year:</span> {movie.release_year}
        </p>
        <p className="text-gray-600 mt-4">{movie.description}</p>
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        >
          Torna indietro
        </button>
      </div>
    </div>
  );
}
