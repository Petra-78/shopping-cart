import { useState, useEffect } from "react";

export const useFetchBooks = ({ bookId = null, limit = 100 } = {}) => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        if (bookId) {
          const response = await fetch(
            `https://openlibrary.org/works/${bookId}.json`
          );
          const data = await response.json();
          setBook(data);
        } else {
          const response = await fetch(
            "https://openlibrary.org/trending/yearly.json"
          );
          const data = await response.json();

          const englishBooks = data.works
            .filter((book) => !book.language || book.language.includes("eng"))
            .slice(0, limit);

          setBooks(englishBooks);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [limit, bookId]);

  return { books, book, loading, error };
};
