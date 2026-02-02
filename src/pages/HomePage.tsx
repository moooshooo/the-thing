import React from 'react'

const HomePage = () => {
  return (
   <div className="relative w-full h-120">
  
  <div 
    className="absolute inset-0 bg-[url('./assets/movie-banner2.webp')] bg-cover bg-no-repeat bg-center opacity-40"
  ></div>
  
   <div className="relative z-10 flex flex-col justify-center items-end h-full pr-30px px-20">
    <h1 className="text-white text-6xl text-right">
      Välkommen till denna sida
    </h1>
    <h2 className="text-white text-xl text-right">
      Här kommer du hitta alla filmer som INTE är tillåtna
    </h2>
  </div>
</div>
  )
}

export default HomePage
