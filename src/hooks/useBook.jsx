import { useEffect, useState } from "react";

export const useBook = (bookId) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookId) return;

    async function fetchBook() {
      try {
        const response = await fetch(
          `https://openlibrary.org/works/${bookId}.json`
        );
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [bookId]);

  return { book, loading, error };
};
