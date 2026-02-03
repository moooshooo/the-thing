import useTmdb from "../hooks/useTmdb";
import ItemCard from "../components/ItemCard";

const Filmpage = () => {
  const { data: movies, loading } = useTmdb("/movie/popular");

  if (loading) return <div className="text-white">Laddar...</div>;

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
        <div className="flex flex-wrap gap-6 justify-center">
          {movies.map((movie) => (
            <div key={movie.id} className="w-35 sm:w-50">
              <ItemCard item={movie} type="movie" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filmpage;
