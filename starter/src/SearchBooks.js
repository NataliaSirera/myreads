import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const SearchBooks = ({ changeShelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const getResults = async (query) => {
    const res = await BooksAPI.search(query);
    setResults(res);
  };

  const updateQuery = (query) => {
    query = query.trim();
    setQuery(query);
    if (query.length > 0) {
      getResults(query);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {results.map((book) => (
              <Book key={book.id} book={book} changeShelf={changeShelf} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
