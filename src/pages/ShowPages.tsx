import useTmdb from "../hooks/useTmdb";
import ItemCard from "../components/ItemCard";

const ShowPage = () => {
  const { data: shows, loading } = useTmdb("/tv/popular");

  if (loading) return <div className="text-white">Laddar...</div>;

  return (
    <div className="bg-[#111] min-h-screen pb-20">
      <div className="relative w-full h-80 mb-10">
        <div className="absolute inset-0 bg-[url('./assets/shows-banner.webp')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-15">
          <h1 className="text-white text-4xl font-bold">Serier</h1>
          <p className="text-gray-300">
            De mest populära TV-programmen just nu
          </p>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-7.5">
        <div className="flex flex-wrap gap-6 justify-center">
          {shows.map((show) => (
            <div key={show.id} className="ShowItem w-35 sm:w-50">
              <ItemCard item={show} type="tv" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
