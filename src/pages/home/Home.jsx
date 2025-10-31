import { useContext, useState } from "react";
import { Link } from "react-router";
import BooksContext from "../../context/BooksContext";
import CartContext from "../../context/CartContext";
import styles from "./Home.module.css";

export default function Home() {
  const { books, loading, error } = useContext(BooksContext);
  const [quantity] = useState(1);
  const [, setCart] = useContext(CartContext);

  const price = 10.98;
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
    <div className={styles.main}>
      <div className={styles.cta}>
        <h1>Bookhaven</h1>
        <h2>Your next favourite read awaits!</h2>
        <Link to="/shop">
          <button type="button">Shop</button>
        </Link>
      </div>
      <div className={styles.trending}>
        <h1>Currently trending reads</h1>
        <div className={styles.bookDisplay}>
          {loading && <p>Loading books...</p>}
          {books.slice(0, 5).map((book) => (
            <div className={styles.book} key={book.key}>
              <Link to={`/books/${book.key.split("/").pop()}`}>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                  className={styles.image}
                />
                <h3>{book.title}</h3>
                <p>{book.author_name}</p>
                <p>${price}</p>
              </Link>
              <button type="button" onClick={() => handleAddToCart(book.key)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
