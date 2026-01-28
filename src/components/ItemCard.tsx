import { useState, useEffect } from "react";
import api from "../services/api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movie/popular");

        setMovies(response.data.results);
      } catch (error) {
        console.error("Kunde inte hämta filmer:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </div>
  );
};
