import React from "react";
import MainPage from "./screens/mainPage/MainPage";
import Login from "./screens/login/Login";
import ScrapingStrategies from "./screens/scraping-strategies/ScrapingStrategies";
import About from "./screens/about/About";
import NotFound from "./screens/not-found/NotFound";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="about" element={<MainPage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="scraping-strategies"
          element={<ScrapingStrategies />}
        ></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
