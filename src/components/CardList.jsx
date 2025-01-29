import { Card } from "./Card";
import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../services/api";

export function CardList() {
  const { data: movies, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore nel caricamento dei film</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Movie Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {movies?.map((movie) => (
          <Card
            director={movie.director}
            genre={movie.genre}
            id={movie.id}
            release_year={movie.release_year}
            title={movie.title}
            key={movie.id}
            image={movie.image}
            slug={movie.slug}
          />
        ))}
      </div>
    </div>
  );
}