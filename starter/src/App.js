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

  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    const keptBooks = books.filter((b) => b.id !== book.id);
    book.shelf = shelf;

    if (shelf === "none") {
      setBooks(keptBooks);
    } else {
      setBooks([...keptBooks, book]);
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListBooks
            books={books}
            shelves={shelves}
            changeShelf={changeShelf}
          />
        }
      />
      <Route path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;
