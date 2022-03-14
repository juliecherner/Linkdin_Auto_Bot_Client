import React from "react";
import MainPage from "./screens/mainPage/MainPage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
