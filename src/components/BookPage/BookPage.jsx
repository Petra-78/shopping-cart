import { useParams } from "react-router";
import { useBook } from "../../hooks/useBook";
import QuantitySelector from "../quantity-selector/QuantitySelector";

export default function BookPage() {
  const { bookId } = useParams();
  const { book, loading, error } = useBook(bookId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load book 😢</p>;

  return (
    <div>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
        alt={book.title}
      />
      <h1>{book.title}</h1>
      <div className="quantitySelector">
        <QuantitySelector />
        <button>Add to cart</button>
      </div>
    </div>
  );
}
