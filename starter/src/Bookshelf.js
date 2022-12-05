import Book from "./Book";

const Bookshelf = ({ books, shelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === shelf.id)
            .map((book) => (
              <Book key={book.id} book={book} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
