import { Link } from "react-router";
import { useFetchBooks } from "../../hooks/useFetchBooks";

export default function Books() {
  const { books, loading, error } = useFetchBooks({ limit: 100 });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching books 😢</p>;

  return (
    <div className="grid">
      {books.map((book) => (
        <li key={book.key}>
          <Link to={`/books/${book.key.split("/").pop()}`}>
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
