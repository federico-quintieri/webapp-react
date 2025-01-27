import { Card } from "./Card";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchMovies } from "../services/api";
import { useState } from "react";

export function CardList() {
  // Array che conterra la data dall'api
  const [movies, setMovies] = useState([]);

  // Strutturo fetch API con useQuery
  const { data, isSuccess } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies, // Deve essere passata come riferimento
  });

  // Tramite useEffect controllo se ho ottenuto la data dalla chiamata api
  useEffect(() => {
    if (data && isSuccess) {
      // Setto al mio array state la data presa dal backend tramite chiamata api
      setMovies(data);
      // console.log(movies);
    }
  }, [data, isSuccess]);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Movie Collection
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
        {/* Mappatura delle card */}
        {movies.map((movie) => (
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
