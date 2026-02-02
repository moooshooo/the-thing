import { useEffect, useState } from "react";
import api from "../services/api";
import ItemCard from "../components/ItemCard";
import type { TMDBItem } from "../types/tmdb";

const ShowPage = () => {
  const [shows, setShows] = useState<TMDBItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await api.get("/tv/popular");
        setShows(response.data.results);
      } catch (error) {
        console.error("Kunde inte hämta serier:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  if (loading)
    return <div className="text-white text-center mt-20">Laddar serier...</div>;

  return (
    <div className="bg-[#111] min-h-screen pb-20">
      <div className="relative w-full h-80 mb-10">
        <div className="absolute inset-0 bg-[url('./assets/movie-banner2.webp')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-15">
          <h1 className="text-white text-4xl font-bold">Serier</h1>
          <p className="text-gray-300">
            De mest populära TV-programmen just nu
          </p>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-7.5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {shows.map((show) => (
            <ItemCard key={show.id} item={show} type="tv" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
