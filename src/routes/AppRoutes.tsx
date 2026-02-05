import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FilmPage from "../pages/FilmPage";
import ShowPage from "../pages/ShowPages";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import loginStore, { type AppState } from "../store/loginStore";

const AppRoutes = () => {
  const currentView = loginStore((state: AppState) => state.view);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/film" element={<FilmPage />}></Route>
      <Route path="/shows" element={<ShowPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      {currentView === "login" ? (
        <Route path="/login" element={<Login />} />
      ) : (
        <Route path="/logout" element={<Logout />} />
      )}
    </Routes>
  );
};

export default AppRoutes;
