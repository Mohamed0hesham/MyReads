import "./Styles/App.css";
import React from "react";
import Home from "./Pages/Home";
import SearchBooks from "./Pages/SearchBooks";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<SearchBooks />} />
      </Routes>
    </div>
  );
}

export default App;
