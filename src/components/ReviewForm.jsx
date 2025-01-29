// ReviewForm.js
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview } from "../services/api";

const initialFormState = {
  name: "",
  vote: 1,  // Inizializziamo a 1 invece di 0 per rispettare il min
  text: "",
};

export function ReviewForm({ movieSlug }) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState(initialFormState);

  const mutation = useMutation({
    mutationFn: (formData) => {
      const reviewData = {
        name: formData.name,
        vote: Number(formData.vote),  // Assicuriamoci che sia un numero
        text: formData.text,
      };
      return postReview(movieSlug, reviewData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews", movieSlug]);
      setFormData(initialFormState);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text || formData.vote < 1) {
      alert("Compila tutti i campi correttamente");
      return;
    }
    mutation.mutate(formData);
  };

  const handleOnChange = (e) => {
    const value = e.target.name === 'vote' 
      ? Number(e.target.value)
      : e.target.value;
      
    setFormData(prev => ({
      ...prev,
      [e.target.name]: value
    }));
  };

  return (
    <form className="review-form mt-4" onSubmit={handleSubmit}>
      <h3 className="font-bold">Aggiungi una recensione</h3>

      <div className="mb-4">
        <label className="block mb-2">
          Inserisci il tuo nome:
          <input
            className="w-full border p-2 rounded-md mt-1"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          Inserisci il voto:
          <input
            className="w-full border p-2 rounded-md mt-1"
            type="number"
            name="vote"
            value={formData.vote}
            onChange={handleOnChange}
            min="1"
            max="10"
            required
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          La tua recensione:
          <textarea
            className="w-full border p-2 rounded-md mt-1"
            name="text"
            value={formData.text}
            onChange={handleOnChange}
            required
            rows="4"
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Invio in corso..." : "Invia recensione"}
      </button>
    </form>
  );
}