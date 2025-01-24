import { Card } from "./Card";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchMovies } from "../services/api";
import { useState } from "react";

export function CardList() {
  // Array che conterra la data dall'api
  const [movies, setMovies] = useState([]);

  // Strutturo fetch API con useQuery
  const { data, refetch, isSuccess } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies, // Deve essere passata come riferimento
  });

  // Tramite useEffect controllo se ho ottenuto la data dalla chiamata api
  useEffect(() => {
    if (data && isSuccess) {
      // Setto al mio array state la data presa dal backend tramite chiamata api
      setMovies(data);
    }
  }, [data, isSuccess]);

  return;
}
