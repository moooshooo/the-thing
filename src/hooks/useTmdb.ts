import { useState, useEffect } from "react";
import api from "../services/api";
import type { TMDBItem } from "../types/tmdb";

const useTmdb = (endpoint: string) => {
  const [data, setData] = useState<TMDBItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get(endpoint);
        setData(response.data.results);
      } catch (err) {
        setError("Kunde inte hämta data från TMDB");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]); // Körs om endpointen ändras

  return { data, loading, error };
};

export default useTmdb;