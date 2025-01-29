// ReviewForm.js
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMovies, postReview } from "../services/api";

// Oggetto inputs
const oggettoPartenza = {
  movie_id: 0,
  name: "",
  vote: 0,
  text: "",
};

export function ReviewForm({ propID_movie }) {
  const queryClient = useQueryClient();

  // Faccio variabile state che contiene input values da mandare poi al backend
  const [newReview, setNewReview] = useState(oggettoPartenza);

  // Mutation
  const mutation = useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]); // Ricarica le recensioni
      setNewReview(""); // Resetta il form
    },
  });

  // Callback che gestisce il submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() === "") return;

    // Mando oggetto state con valori input come mutazione
    mutation.mutate(newReview);
  };

  // Callback che gestisce aggiornamento valori allo OnChange
  const handleOnChange = (e) => {
    setNewReview((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        movie_id: propID_movie,
      };
    });
  };

  console.log(newReview);

  return (
    <form className="review-form mt-4" onSubmit={handleSubmit}>
      <h3 className="font-bold">Aggiungi una recensione</h3>
      <label htmlFor="">
        Inserisci il tuo nome:{" "}
        <input
          type="text"
          name="name"
          value={newReview.text}
          onChange={handleOnChange}
        />{" "}
      </label>
      <p>{newReview.name}</p>
      <label htmlFor="">
        Inserisci il voto:{" "}
        <input
          type="number"
          name="vote"
          value={newReview.vote}
          onChange={handleOnChange}
        />{" "}
      </label>
      <p>{newReview.vote}</p>
      <textarea
        className="w-full border p-2 rounded-md"
        placeholder="Scrivi la tua recensione..."
        name="text"
        value={newReview.text}
        onChange={handleOnChange}
        required
      />
      <p>{newReview.text}</p>
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Invio..." : "Invia"}
      </button>
    </form>
  );
}
