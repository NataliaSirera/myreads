import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ListBooks />} />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
