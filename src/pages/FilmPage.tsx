import { useEffect, useState } from "react";
import api from "../services/api";
import ItemCard from "../components/ItemCard";
import type { TMDBItem } from "../types/tmdb";

const Filmpage = () => {
  const [movies, setMovies] = useState<TMDBItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movie/popular");
        setMovies(response.data.results);
      } catch (error) {
        console.error("Kunde inte hämta filmer:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-20">Laddar filmer...</div>;
  }

  return (
    <div className="bg-black min-h-screen pb-20">
      <div className="relative w-full h-50 mb-10">
        <div className="absolute inset-0 bg-[url('./assets/movie-banner.webp')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-15">
          <h1 className="text-white text-4xl font-bold">Filmer</h1>
          <p className="text-gray-300">Utforska de senaste titlarna</p>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-7.5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <ItemCard key={movie.id} item={movie} type="movie" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filmpage;
