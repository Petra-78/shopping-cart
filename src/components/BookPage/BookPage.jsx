import { useParams } from "react-router";
import BooksContext from "../../context/BooksContext";
import { useContext } from "react";
import QuantitySelector from "../quantity-selector/QuantitySelector";

export default function BookPage() {
  const { bookId } = useParams();
  const { books, loading, error } = useContext(BooksContext);
  const book = books.find((b) => b.key.split("/").pop() === bookId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load book 😢</p>;

  return (
    <div>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
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
