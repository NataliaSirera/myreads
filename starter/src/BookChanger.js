const BookChanger = ({ book, shelf, changeShelf }) => {
  const handleChange = (event) => {
    changeShelf(book, event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={handleChange}>
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookChanger;
