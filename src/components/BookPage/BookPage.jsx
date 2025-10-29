import { useParams } from "react-router";
import { useFetchBooks } from "../../hooks/useFetchBooks";
import QuantitySelector from "../quantity-selector/quantitySelector";

export default function BookPage() {
  const { bookId } = useParams();
  const { book, loading, error } = useFetchBooks({ bookId });

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>Failed to load book 😢</p>;
  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
        alt={book.title}
      />
      <h1>{book.title}</h1>
      <div className="quantitySelector">
        <QuantitySelector />
      </div>
    </div>
  );
}
