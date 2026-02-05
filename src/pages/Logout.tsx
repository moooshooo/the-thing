const Logout = () => {
  return (
    <div className="bg-[#111] min-h-screen pb-20">
      <div className="relative w-full h-80 mb-10">
        <div className="absolute inset-0 bg-[url('./assets/shows-banner.webp')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-15">
          <h1 className="text-white text-4xl font-bold">Hejdå</h1>
          <p className="text-gray-300">Du behöver inte vara här länge!</p>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-7.5">
        <h1 className="text-9xl">BYE!!!</h1>
      </div>
    </div>
  );
};

export default Logout;
