import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(
        "https://openlibrary.org/trending/yearly.json"
      );
      const books = await response.json();

      const englishBooks = books.works
        .filter((book) => !book.language || book.language.includes("eng"))
        .slice(0, 100);

      setBooks(englishBooks);
      setLoading(false);
    }

    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid">
      {books.map((book) => (
        <li>
          <Link to={book.title}>
            <div className="book">
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <p>{book.author_name}</p>
              <p>10.98$</p>
              <button>Add to cart</button>
            </div>
          </Link>
        </li>
      ))}
    </div>
  );
}
