import axios from "axios";

const API_KEY = import.meta.env.TMDB_API_KEY;
const BASE_URL = import.meta.env.TMDB_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },

  params: {
    api_key: API_KEY,
    language: "sv-SE",
  },
});

export default api;
