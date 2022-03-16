import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./screens/mainPage/MainPage";
import LoginPage from "./screens/loginPage/LoginPage";
import ScrapingStrategies from "./screens/StrategiesPage/StrategiesPage";
import AboutPage from "./screens/aboutPage/AboutPage";
import NotFound from "./screens/notFoundPage/NotFoundPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="about" element={<MainPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route
          path="scraping-strategies"
          element={<ScrapingStrategies />}
        ></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
