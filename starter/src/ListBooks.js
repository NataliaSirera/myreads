import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const ListBooks = ({ books, shelves, changeShelf }) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <Bookshelf
                key={shelf.id}
                books={books}
                shelf={shelf}
                changeShelf={changeShelf}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default ListBooks;
