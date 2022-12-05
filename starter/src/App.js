import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI";

function App() {
  const shelves = [
    { name: "Currently Reading", id: "currentlyReading" },
    { name: "Want to Read", id: "wantToRead" },
    { name: "Read", id: "read" },
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<ListBooks books={books} shelves={shelves} />}
      />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
