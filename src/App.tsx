import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./screens/mainPage/MainPage";
import LoginPage from "./screens/loginPage/LoginPage";
import StrategiesPage from "./screens/StrategiesPage/StrategiesPage";
import AboutPage from "./screens/aboutPage/AboutPage";
import NotFoundPage from "./screens/notFoundPage/NotFoundPage";
import Header from "./screens/header/Header";
import "./App.css";
const App: React.FC = () => {
  return (
    <BrowserRouter>
          <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route
          path="scraping-strategies"
          element={<StrategiesPage/>}
        ></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
