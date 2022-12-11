import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ books, shelf, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf.id)
            .map((book) => (
              <Book key={book.id} book={book} changeShelf={changeShelf} />
            ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Bookshelf;
