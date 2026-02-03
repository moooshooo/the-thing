import type { ItemCardProps } from "../types/tmdb";

const ItemCard = ({ item, type }: ItemCardProps) => {
  const displayTitle = item.title || item.name;
  const displayDate = item.release_date || item.first_air_date;

  const imageUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}/w500${item.poster_path}`;

  return (
    <div className="group relative bg-[#111] overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer shadow-lg shadow-blue-950">
      <div className="aspect-2/3 w-full">
        <img
          src={imageUrl}
          alt={displayTitle}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-white font-semibold text-sm truncate">
          {displayTitle}
        </h3>
        <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
          <span>{displayDate?.split("-")[0]}</span>
          <span className="bg-yellow-500 text-black px-1.5 py-0.5 rounded font-bold">
            {item.vote_average.toFixed(1)}
          </span>
        </div>
        <span className="text-6px tracking-wider text-blue-700 block">
          {type === "movie" ? "Film" : "Serie"}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
