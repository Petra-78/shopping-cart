import { useParams } from "react-router";
import BooksContext from "../../context/BooksContext";
import { useState } from "react";
import { useContext } from "react";
import QuantitySelector from "../quantity-selector/QuantitySelector";
import { useEffect } from "react";

export default function BookPage() {
  const { bookId } = useParams();
  const { books, loading, error } = useContext(BooksContext);
  const book = books.find((b) => b.key.split("/").pop() === bookId);
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function fetchDescribtion() {
      try {
        const res = await fetch(`https://openlibrary.org/works/${bookId}.json`);
        const data = await res.json();
        setDescription(data.description);
      } catch (err) {
        console.error(err);
      }
    }
    fetchDescribtion();
  }, [bookId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load book 😢</p>;

  return (
    <div>
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={book.title}
      />
      <h1>{book.title}</h1>
      <p>
        {typeof description === "string"
          ? description
          : description?.value || "No description available."}
      </p>
      <div className="quantitySelector">
        <QuantitySelector />
        <button>Add to cart</button>
      </div>
    </div>
  );
}
