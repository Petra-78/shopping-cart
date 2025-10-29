import { useEffect, useState } from "react";
import BooksContext from "./BooksContext";

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch("https://openlibrary.org/trending/yearly.json");
        const data = await res.json();

        const englishBooks = data.works
          .filter((book) => !book.language || book.language.includes("eng"))
          .slice(0, 100);

        setBooks(englishBooks);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, loading, error }}>
      {children}
    </BooksContext.Provider>
  );
}
