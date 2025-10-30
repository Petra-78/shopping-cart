import { Link } from "react-router";
import { useContext } from "react";
import { useState } from "react";
import CartContext from "../../context/CartContext";
import { useBooks } from "../../hooks/useBooks";

export default function Books() {
  const [, setCart] = useContext(CartContext);
  const [quantity] = useState(1);
  const { books, loading, error } = useBooks();
  const price = 10.98;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching books 😢</p>;

  const handleAddToCart = (key) => {
    const bookId = key.split("/").pop();
    const book = books.find((b) => b.key.split("/").pop() === bookId);
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.book.key === book.key
      );

      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { book, quantity, price }];
      }
    });
  };

  return (
    <div className="grid">
      {books.map((book) => (
        <li key={book.key}>
          <div className="book">
            <Link to={`/books/${book.key.split("/").pop()}`}>
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <p>{book.author_name}</p>
              <p>${price}</p>
            </Link>
            <button
              key={book.key}
              type="button"
              onClick={() => {
                handleAddToCart(book.key);
              }}
            >
              Add to cart
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
