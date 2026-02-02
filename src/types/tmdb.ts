export interface TMDBItem {
  id: number;
  // Titeln visade sig vara för filmer
  title?: string;
  // Name är för serier
  name?: string;
  poster_path: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

export interface ItemCardProps {
  item: TMDBItem;
  type: "movie" | "tv";
}
