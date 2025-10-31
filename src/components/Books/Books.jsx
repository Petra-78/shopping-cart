import { Link } from "react-router";
import { useContext } from "react";
import { useState } from "react";
import CartContext from "../../context/CartContext";
import { useBooks } from "../../hooks/useBooks";
import styles from "./Books.module.css";
import Loading from "../loading/Loading";
import Error from "../error/Error";

export default function Books() {
  const [, setCart] = useContext(CartContext);
  const [quantity] = useState(1);
  const { books, loading, error } = useBooks();
  const price = 10.98;

  if (loading) return <Loading />;
  if (error) return <Error />;

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
    <div className={styles.main}>
      {" "}
      <div className={styles.grid}>
        {books.map((book) => (
          <div className={styles.book} key={book.key}>
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
        ))}
      </div>
    </div>
  );
}
