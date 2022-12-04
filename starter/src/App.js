import "./App.css";
import { useState } from "react";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? <SearchBooks /> : <ListBooks />}
    </div>
  );
}

export default App;
