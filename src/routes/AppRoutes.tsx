import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FilmPage from "../pages/FilmPage";
import ShowPage from "../pages/ShowPages"
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/film" element={<FilmPage />}></Route>
      <Route path="/shows" element={<ShowPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
<<<<<<< Updated upstream
      <Route path="/login" element={<Login />} />
    
=======
      <Route path="/login" element={<Login />}></Route>
>>>>>>> Stashed changes
    </Routes>
  );
};

export default AppRoutes;