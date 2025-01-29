// ReviewList.js
import { useQuery } from "@tanstack/react-query";
import { Review } from "./Review";
import { fetchReviews } from "../services/api";
import { ReviewForm } from "./ReviewForm"; // Importa il nuovo componente

export function ReviewList() {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  if (isLoading) return <div>Caricamento recensioni...</div>;
  if (error) return <div>Errore nel caricamento delle recensioni</div>;

  return (
    <div className="space-y-4">
      {/* Lista recensioni */}
      {reviews?.length > 0 ? (
        reviews.map((review) => (
          <Review
            key={review.id}
            author={review.name}
            content={review.text}
            rating={review.vote}
          />
        ))
      ) : (
        <p className="text-gray-500">Nessuna recensione disponibile.</p>
      )}

      {/* Aggiungi una recensione */}
      <ReviewForm />
    </div>
  );
}
